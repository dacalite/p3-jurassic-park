package com.concurrente.jurassicpark.services;

import org.springframework.stereotype.Service;

@Service
public class DayService {
    private int duracionDiaEnSegundos = 4;  // Valor por defecto: 10 segundos
    private int segundosEclosion = duracionDiaEnSegundos / 4;

    public int obtenerDuracionDiaEnSegundos() {
        return duracionDiaEnSegundos;
    }

    public int obtenerTiempoEclosion() {
        return segundosEclosion;
    }

    public void establecerDuracionDiaEnSegundos(int duracionSegundos) {
        this.duracionDiaEnSegundos = duracionSegundos;
        this.segundosEclosion = duracionDiaEnSegundos / 3;
    }

}
