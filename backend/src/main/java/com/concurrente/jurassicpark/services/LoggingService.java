package com.concurrente.jurassicpark.services;

import com.concurrente.jurassicpark.models.LogEntry;
import com.concurrente.jurassicpark.models.LogLevel;
import com.concurrente.jurassicpark.repositories.LogEntryRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoggingService {
    private static final Logger logger = LoggerFactory.getLogger(LoggingService.class);

    @Autowired
    private LogEntryRepository logEntryRepository;

    public void logMeasurement(String event) {
        logger.info("Measurement: {}", event);
        saveLog(event, LogLevel.MEASUREMENT);
    }

    public void logDeath(String event) {
        logger.info("Death: {}", event);
        saveLog(event, LogLevel.DEATH);
    }

    public void logSendDinosaur(String event) {
        logger.info("Send Dinosaur: {}", event);
        saveLog(event, LogLevel.SEND_DINOSAUR);
    }

    public void logRequestinosaur(String event) {
        logger.info("Request Dinosaur: {}", event);
        saveLog(event, LogLevel.REQUEST_DINOSAUR);
    }

    public void logError(String error) {
        logger.error("Error: {}", error);
        saveLog(error, LogLevel.ERROR);
    }

    private void saveLog(String message, LogLevel level) {
        LogEntry logEntry = new LogEntry(message, level);
        logEntryRepository.save(logEntry);
    }

    public void clearLogs() {
        logEntryRepository.deleteAll();
        logger.info("All logs have been cleared.");
    }
}
