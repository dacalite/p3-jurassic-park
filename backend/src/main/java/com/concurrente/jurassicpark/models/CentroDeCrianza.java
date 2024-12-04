package com.concurrente.jurassicpark.models;

import com.concurrente.jurassicpark.services.DayService;
import com.concurrente.jurassicpark.services.LoggingService;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.concurrent.BlockingQueue;

@Setter
@Getter
@Component
public class CentroDeCrianza implements Runnable {

    @Autowired
    private DayService dayService;

    @Autowired
    private LoggingService loggingService;

    private List<BlockingQueue<String>> buffersSolicitud;
    private List<BlockingQueue<String>> buffersRespuesta;

    public CentroDeCrianza(List<BlockingQueue<String>> buffersSolicitud, List<BlockingQueue<String>> buffersRespuesta) {
        this.buffersSolicitud = buffersSolicitud;
        this.buffersRespuesta = buffersRespuesta;
    }

    @Override
    public void run() {
        while (true) {
            try {
                for (int i = 0; i < buffersSolicitud.size(); i++) {
                    BlockingQueue<String> solicitudBuffer = buffersSolicitud.get(i);
                    BlockingQueue<String> respuestaBuffer = buffersRespuesta.get(i);

                    // Procesa la solicitud si existe
                    String solicitud = solicitudBuffer.poll();
                    if (solicitud != null) {
                        // Simula el tiempo de incubación
                        Thread.sleep(dayService.obtenerTiempoEclosion() * 1000L);

                        // Crea un dinosaurio incubado y lo envía al buffer de respuesta
                        String dinosaurioIncubado = "Dinosaurio incubado para solicitud: " + solicitud;
                        respuestaBuffer.put(dinosaurioIncubado);
                        loggingService.logSendDinosaur(String.format("Dinosaurio incubado y enviado a Isla %d", i + 1), "Centro de Crianza");
                    }
                }

                Thread.sleep(50); // Pausa para evitar ciclo continuo
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                System.err.println("Error en el Centro de Crianza: " + e.getMessage());
            }
        }
    }
}
