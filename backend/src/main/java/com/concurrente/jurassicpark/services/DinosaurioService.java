package com.concurrente.jurassicpark.services;

import com.concurrente.jurassicpark.models.Dinosaurio;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

@Service
public class DinosaurioService {
    @Autowired
    private DayService dayService;

    private final List<Dinosaurio> dinosauriosVivos;
    private final List<Dinosaurio> dinosauriosMuertos;

    public DinosaurioService() {
        this.dinosauriosVivos = new ArrayList<>();
        this.dinosauriosMuertos = new ArrayList<>();
    }

    public void anadirDinosaurio(Dinosaurio dinosaurio) {
        dinosauriosVivos.add(dinosaurio);
    }

    public void eliminarDinosaurio(Dinosaurio dinosaurio) {
        dinosauriosMuertos.add(dinosaurio);
    }

    @PostConstruct
    public void iniciarVerificacionDeVida() {
        Flux.interval(Duration.ofSeconds(dayService.obtenerDuracionDiaEnSegundos())).doOnEach(signal -> verificarVidaDeDinosaurios()).subscribe();
    }

    private void verificarVidaDeDinosaurios() {
        // Verificar la vida de los dinosaurios vivos
        for (Dinosaurio dinosaurio : dinosauriosVivos) {
            dinosaurio.checkLife();  // Verifica la vida de cada dinosaurio
        }

        // Eliminar los dinosaurios muertos de la lista de vivos
        dinosauriosVivos.removeAll(dinosauriosMuertos);

        // Limpiar la lista de muertos
        dinosauriosMuertos.clear();
    }
}
