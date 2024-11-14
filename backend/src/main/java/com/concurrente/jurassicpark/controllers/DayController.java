package com.concurrente.jurassicpark.controllers;

import com.concurrente.jurassicpark.services.DayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/public/config")
public class DayController {

    @Autowired
    private DayService diaService; //Could not autowire. No beans of 'DayService' type found.

    // Endpoint para cambiar la duración del día
    @PostMapping("/public/config/cambiarDuracionDia")
    public void cambiarDuracionDia(@RequestParam int duracionSegundos) {
        diaService.establecerDuracionDiaEnSegundos(duracionSegundos);
    }

    // Endpoint para obtener la duración actual del día
    @GetMapping("/public/config/obtenerDuracionDia")
    public int obtenerDuracionDia() {
        return diaService.obtenerDuracionDiaEnSegundos();
    }
}
