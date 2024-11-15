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

    public void logMeasurement(String event, String idIsla) {
        logger.info("Measurement: {}", event);
        saveLog(event, LogLevel.MEASUREMENT, idIsla);
    }

    public void logDeath(String event, String idIsla) {
        logger.info("Death: {}", event);
        saveLog(event, LogLevel.DEATH, idIsla);
    }

    public void logSendDinosaur(String event, String idIsla) {
        logger.info("Send Dinosaur: {}", event);
        saveLog(event, LogLevel.SEND_DINOSAUR, idIsla);
    }

    public void logRequestinosaur(String event, String idIsla) {
        logger.info("Request Dinosaur: {}", event);
        saveLog(event, LogLevel.REQUEST_DINOSAUR, idIsla);
    }

    public void logError(String error, String idIsla) {
        logger.error("Error: {}", error);
        saveLog(error, LogLevel.ERROR, idIsla);
    }

    private void saveLog(String message, LogLevel level, String idIsla) {
        LogEntry logEntry = new LogEntry(message, level, idIsla);
        logEntryRepository.save(logEntry);
    }

    public void clearLogs() {
        logEntryRepository.deleteAll();
        logger.info("All logs have been cleared.");
    }
}
