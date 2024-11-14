package com.concurrente.jurassicpark.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import reactor.core.scheduler.Scheduler;
import reactor.core.scheduler.Schedulers;

@Configuration
public class SchedulerConfig {
    @Bean
    public Scheduler sensorScheduler() {
        return Schedulers.newBoundedElastic(10, 100, "sensor-scheduler");
    }
}
