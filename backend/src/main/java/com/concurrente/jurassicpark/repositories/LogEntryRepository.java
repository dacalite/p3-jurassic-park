package com.concurrente.jurassicpark.repositories;

import com.concurrente.jurassicpark.models.LogEntry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LogEntryRepository extends JpaRepository<LogEntry, Long> {
}
