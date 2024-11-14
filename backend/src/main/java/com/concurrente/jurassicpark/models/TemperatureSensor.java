package com.concurrente.jurassicpark.models;

import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;

import java.time.Duration;

@Component
public class TemperatureSensor {
    public Flux<String> getReadings(int delay) {
        return Flux.interval(Duration.ofSeconds(delay)).map(sequence -> "Temperatura detectada: " + String.format("%.2f", 35 + Math.random() * 5) + "°C");
    }
}
