package com.concurrente.jurassicpark.services;

import com.concurrente.jurassicpark.models.Jaula;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JaulaService {
    @Autowired
    private ApplicationContext applicationContext;  // Accedemos al contexto de Spring

    public List<Jaula> crearJaulas(int numJaulas, String islaId) {
        List<Jaula> jaulas = new ArrayList<>();
        for (int i = 1; i <= numJaulas; i++) {
            Jaula jaula = applicationContext.getBean(Jaula.class);  // Creamos una instancia desde el contexto de Spring
            jaula.setJaulaId("Jaula " + i);  // Asignamos un ID único
            jaula.setIslaId(islaId);
            jaulas.add(jaula);
        }
        return jaulas;
    }
}