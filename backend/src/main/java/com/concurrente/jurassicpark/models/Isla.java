package com.concurrente.jurassicpark.models;

import com.concurrente.jurassicpark.services.DayService;
import com.concurrente.jurassicpark.services.LoggingService;
import com.concurrente.jurassicpark.services.ParqueService;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.concurrent.BlockingQueue;

@Component
@Scope("prototype")
@Getter
@Setter
public class Isla {
    @Autowired
    private ParqueService parqueService;

    @Autowired
    private DayService dayService;

    private String islaId;
    private List<Jaula> jaulas;
    private TipoDinosaurio tipoIsla;

    private BlockingQueue<String> bufferSolicitud;  // Buffer para enviar solicitudes de crianza
    private BlockingQueue<String> bufferRespuesta;  // Buffer para recibir respuestas (dinosaurios incubados)
    @Autowired
    private LoggingService loggingService;

    // Función que devuelve el porcentaje de ocupación de la isla
    public double calcularPorcentajeOcupacion() {
        int totalJaulas = jaulas.size();
        if (totalJaulas == 0) {
            return 0;
        }

        int jaulasOcupadas = 0;
        for (Jaula jaula : jaulas) {
            if (jaula.estaOcupada()) {
                jaulasOcupadas++;
            }
        }

        return (double) jaulasOcupadas / totalJaulas * 100;
    }

    // Función que devuelve la primera jaula libre en la isla
    public Jaula obtenerPrimeraJaulaLibre() {
        for (Jaula jaula : jaulas) {
            if (!jaula.estaOcupada()) {
                return jaula;
            }
        }
        return null;
    }

    public void iniciarMonitoreo() {
        new Thread(this::monitorizarOcupacion).start();
    }

    private void monitorizarOcupacion() {
        while (true) {
            try {
                Thread.sleep(dayService.obtenerDuracionDiaEnSegundos() * 1000L);
                double porcentajeOcupacion = calcularPorcentajeOcupacion();
                if (porcentajeOcupacion < 50) {
                    // Solicitar una petición de crianza si la ocupación es baja
                    String solicitud = "Solicitud de crianza para " + islaId;
                    bufferSolicitud.put(solicitud);
                    loggingService.logRequestinosaur(String.format("[%s] >> Solicitud de incubación enviada a Centro de Crianza", islaId));
                }

                // Intentar obtener una respuesta del bufferRespuesta sin bloquear
                String respuesta = bufferRespuesta.poll();

                if (respuesta != null) {
                    parqueService.anadirDinosaurio(this);
                }

            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                System.err.println("Error en el hilo de monitorización de la Isla: " + e.getMessage());
            }
        }
    }
}
