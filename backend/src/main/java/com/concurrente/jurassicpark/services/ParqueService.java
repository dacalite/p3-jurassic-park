package com.concurrente.jurassicpark.services;

import com.concurrente.jurassicpark.models.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParqueService {

    @Autowired
    private DayService dayService;

    @Setter
    @Getter
    private List<Isla> islas;

    public void anadirDinosaurio(Isla isla) {
        // Obtener la primera jaula de la isla
        Jaula jaula = isla.obtenerPrimeraJaulaLibre();

        // Crear un dinosaurio para la jaula
        Dinosaurio dinosaurio = new Dinosaurio(isla.getTipoIsla(), dayService, jaula::quitarDinosaurio);

        // Añadir dinosaurio a la jaula
        jaula.anadirDinosaurio(dinosaurio);
    }
}