package com.concurrente.jurassicpark.models;

import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;

import java.time.Duration;

@Component
public class MotionSensor {
    public Flux<String> getReadings(int delay) {
        return Flux.interval(Duration.ofSeconds(delay)).map(sequence -> "Movimiento detectado: " + (Math.random() < 0.5 ? "MOVIMIENTO" : "NO MOVIMIENTO"));
    }
}
