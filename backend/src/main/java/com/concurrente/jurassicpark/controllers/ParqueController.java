package com.concurrente.jurassicpark.controllers;

import com.concurrente.jurassicpark.models.Isla;
import com.concurrente.jurassicpark.services.ParqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ParqueController {

    @Autowired
    private ParqueService parqueService;

    @GetMapping("/public/parque/ocupacion")
    public List<Double> getPorcentajeOcupacionIslas() {
        return parqueService.getIslas().stream()
                .map(Isla::calcularPorcentajeOcupacion)
                .collect(Collectors.toList());
    }

}
