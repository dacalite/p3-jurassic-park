package com.concurrente.jurassicpark.models;

import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;

import java.time.Duration;

@Component
public class HeartRateSensor {
    public Flux<String> getReadings(int delay) {
        return Flux.interval(Duration.ofSeconds(delay)).map(sequence -> "Frecuencia cardíaca: " + (Math.round(100 + +Math.random() * 100)) + " bpm");
    }
}