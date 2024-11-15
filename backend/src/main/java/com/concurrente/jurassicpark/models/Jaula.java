package com.concurrente.jurassicpark.models;

import com.concurrente.jurassicpark.services.DayService;
import com.concurrente.jurassicpark.services.DinosaurioService;
import com.concurrente.jurassicpark.services.LoggingService;
import com.concurrente.jurassicpark.services.SensorService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import reactor.core.Disposable;

import java.util.Random;

@Component
@Scope("prototype")
public class Jaula {
    @Autowired
    private SensorService sensorService;

    @Autowired
    private LoggingService loggingService;

    @Autowired
    private DinosaurioService dinosaurioService;

    @Autowired
    private DayService dayService;

    private Disposable subscription;

    private Dinosaurio dinosaurio;

    @Setter
    private String jaulaId;

    @Setter
    private String islaId;

    private static final String[] MOTIVOS_MUERTE = {"INANICIÓN", "MUERTE NATURAL", "CANIBALISMO"};
    private final Random random = new Random();

    public Jaula(DayService dayService) {
        this.dayService = dayService;
    }

    public void anadirDinosaurio(Dinosaurio dinosaurio) {
        this.dinosaurio = dinosaurio;
        dinosaurioService.anadirDinosaurio(dinosaurio);
        iniciarLectura();  // Iniciar la lectura cuando se añade el dinosaurio
    }

    public void quitarDinosaurio() {
        if (dinosaurio != null) {
            dinosaurioService.eliminarDinosaurio(dinosaurio);
            detenerLectura();
            String motivo = MOTIVOS_MUERTE[random.nextInt(MOTIVOS_MUERTE.length)];
            loggingService.logDeath(String.format("[%s] >> El dinosaurio ha muerto por %s", jaulaId, motivo), islaId);
            this.dinosaurio = null;
        }
    }

    public void iniciarLectura() {
        if (dinosaurio != null) {
            subscription = sensorService.getAllSensorReadings(dayService.obtenerDuracionDiaEnSegundos())
                    .map(reading -> String.format("[%s] >> %s", jaulaId, reading))
                    .subscribe(this::logReading);
        }
    }

    private void logReading(String reading) {
        loggingService.logMeasurement(reading, islaId);
    }

    public void detenerLectura() {
        if (subscription != null && !subscription.isDisposed()) {
            subscription.dispose();
        }
    }

    public boolean estaOcupada() {
        return dinosaurio != null;
    }
}
