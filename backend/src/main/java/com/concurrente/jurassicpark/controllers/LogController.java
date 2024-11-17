package com.concurrente.jurassicpark.controllers;

import com.concurrente.jurassicpark.annotations.RequiresAuth;
import com.concurrente.jurassicpark.models.LogEntry;
import com.concurrente.jurassicpark.repositories.LogEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("public/api/v1/logs")
public class LogController {

    @Autowired
    private LogEntryRepository logEntryRepository;

    @RequiresAuth
    @GetMapping
    public List<LogEntry> getLogs() {
        return logEntryRepository.findAll();
    }
}
