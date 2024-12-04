package com.concurrente.jurassicpark.controllers;

import com.concurrente.jurassicpark.dto.StartupDTO;
import com.concurrente.jurassicpark.models.CentroDeCrianza;
import com.concurrente.jurassicpark.models.Isla;
import com.concurrente.jurassicpark.models.Jaula;
import com.concurrente.jurassicpark.services.DayService;
import com.concurrente.jurassicpark.services.JaulaService;
import com.concurrente.jurassicpark.services.LoggingService;
import com.concurrente.jurassicpark.services.ParqueService;
import jakarta.annotation.PostConstruct;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

@RestController
@RequestMapping("/startup")
public class StartupController {
    @Autowired
    private DayService dayService;

    @Autowired
    private JaulaService jaulaService;

    @Autowired
    private CentroDeCrianza centroDeCrianza;

    @Autowired
    private ParqueService parqueService;

    @Autowired
    private LoggingService loggingService;

    @PostConstruct
    private void cleanLogs(){
        // Limpiamos los logs pasados
        loggingService.clearLogs();
    }

    @PostMapping("/initialize")
    public String initializeIslands(@RequestBody @Valid List<StartupDTO> islaConfigs) {
        try {

            List<Isla> islas = new ArrayList<>();
            List<BlockingQueue<String>> buffersSolicitud = new ArrayList<>();
            List<BlockingQueue<String>> buffersRespuesta = new ArrayList<>();

            for (StartupDTO config : islaConfigs) {
                // Crear isla
                Isla isla = new Isla(parqueService, dayService, loggingService);
                isla.setIslaId(config.getName());
                isla.setTipoIsla(config.getType());

                // Crear jaulas
                List<Jaula> jaulas = jaulaService.crearJaulas(config.getDinosaurs(), config.getName());
                isla.setJaulas(jaulas);

                // Crear buffers
                BlockingQueue<String> bufferSolicitud = new ArrayBlockingQueue<>(config.getBufferSize());
                BlockingQueue<String> bufferRespuesta = new ArrayBlockingQueue<>(config.getBufferSize());
                isla.setBufferSolicitud(bufferSolicitud);
                isla.setBufferRespuesta(bufferRespuesta);

                buffersSolicitud.add(bufferSolicitud);
                buffersRespuesta.add(bufferRespuesta);

                islas.add(isla);
            }

            // Configurar el centro de crianza
            centroDeCrianza.setBuffersSolicitud(buffersSolicitud);
            centroDeCrianza.setBuffersRespuesta(buffersRespuesta);

            // Configurar el parque
            parqueService.setIslas(islas);

            // Iniciar el monitoreo de las islas
            for (Isla isla : islas) {
                new Thread(isla::monitorizarOcupacion).start();
            }

            // Iniciar el centro de crianza en un hilo
            new Thread(centroDeCrianza).start();

            return "Initialization complete!";
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return "Error inicializando el sistema";
        }
    }
}
