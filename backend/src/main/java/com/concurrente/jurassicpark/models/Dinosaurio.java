package com.concurrente.jurassicpark.models;

import com.concurrente.jurassicpark.services.DayService;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Random;
import java.util.UUID;

@Getter
@Setter
public class Dinosaurio {
    private String id;
    private TipoDinosaurio tipo;
    private LocalDateTime fechaNacimiento;
    private int diasDeVida;
    private DayService diaService;
    private Runnable onDeathCallback; // Callback que se ejecuta cuando el dinosaurio muere

    public Dinosaurio(TipoDinosaurio tipo, DayService diaService, Runnable onDeathCallback) {
        Random rand = new Random();
        this.id = UUID.randomUUID().toString();
        this.tipo = tipo;
        this.fechaNacimiento = LocalDateTime.now();
        this.diasDeVida = rand.nextInt(10 - 3 + 1) + 3;
        this.diaService = diaService;
        this.onDeathCallback = onDeathCallback;
    }

    // Función que calcula si el dinosaurio está vivo en función de los días de vida y la duración del día
    public void checkLife() {
        long segundosTranscurridos = ChronoUnit.SECONDS.between(fechaNacimiento, LocalDateTime.now());
        int segundosDeVida = diasDeVida * diaService.obtenerDuracionDiaEnSegundos();
        if (segundosTranscurridos >= segundosDeVida) {
            // Si el dinosaurio ha muerto, ejecutamos el callback para quitarlo de la jaula
            if (onDeathCallback != null) {
                onDeathCallback.run();
            }
        }
    }
}
