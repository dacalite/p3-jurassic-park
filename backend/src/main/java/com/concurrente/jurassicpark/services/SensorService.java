package com.concurrente.jurassicpark.services;

import com.concurrente.jurassicpark.models.HeartRateSensor;
import com.concurrente.jurassicpark.models.MotionSensor;
import com.concurrente.jurassicpark.models.TemperatureSensor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.scheduler.Scheduler;

@Service
public class SensorService {
    @Autowired
    private MotionSensor motionSensor;
    @Autowired
    private TemperatureSensor temperatureSensor;
    @Autowired
    private HeartRateSensor heartRateSensor;
    @Autowired
    private Scheduler sensorScheduler;

    public Flux<String> getAllSensorReadings(int delay) {
        return Flux.zip(
                motionSensor.getReadings(delay)
                        .onBackpressureDrop()
                        .subscribeOn(sensorScheduler),
                temperatureSensor.getReadings(delay)
                        .onBackpressureBuffer(10)
                        .subscribeOn(sensorScheduler),
                heartRateSensor.getReadings(delay)
                        .onBackpressureDrop()
                        .subscribeOn(sensorScheduler)
        ).map(tuple -> {
            String movimiento = tuple.getT1();
            String temperatura = tuple.getT2();
            String frecuenciaCardiaca = tuple.getT3();

            // Crear un mensaje combinado con las tres lecturas
            return String.format("%s | %s | %s",
                    frecuenciaCardiaca, temperatura, movimiento);
        });
    }
}