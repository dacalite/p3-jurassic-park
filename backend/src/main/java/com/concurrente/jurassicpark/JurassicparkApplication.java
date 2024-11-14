package com.concurrente.jurassicpark;

import com.concurrente.jurassicpark.models.CentroDeCrianza;
import com.concurrente.jurassicpark.models.Isla;
import com.concurrente.jurassicpark.models.Jaula;
import com.concurrente.jurassicpark.models.TipoDinosaurio;
import com.concurrente.jurassicpark.services.JaulaService;
import com.concurrente.jurassicpark.services.LoggingService;
import com.concurrente.jurassicpark.services.ParqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

@SpringBootApplication
public class JurassicparkApplication implements CommandLineRunner {

    @Autowired
    private Isla isla1;

    @Autowired
    private Isla isla2;

    @Autowired
    private Isla isla3;

    @Autowired
    private JaulaService jaulaService;

    @Autowired
    private CentroDeCrianza centroDeCrianza;

    @Autowired
    private ParqueService parqueService;

    @Autowired
    private LoggingService loggingService;

    public static void main(String[] args) {
        SpringApplication.run(JurassicparkApplication.class, args);
    }

    @Override
    public void run(String... args) {
        //Limpiamos los logs pasados
        loggingService.clearLogs();

        //Establecer los IDs de islas
        isla1.setIslaId("Isla 1");
        isla2.setIslaId("Isla 2");
        isla3.setIslaId("Isla 3");

        // Establecer los tipos de islas
        isla1.setTipoIsla(TipoDinosaurio.CARNIVORO);
        isla2.setTipoIsla(TipoDinosaurio.HERBIVORO);
        isla3.setTipoIsla(TipoDinosaurio.AEREO);

        // Definimos las jaulas de las islas
        List<Jaula> jaulasIsla1 = jaulaService.crearJaulas(10, isla1.getIslaId());
        List<Jaula> jaulasIsla2 = jaulaService.crearJaulas(10, isla2.getIslaId());
        List<Jaula> jaulasIsla3 = jaulaService.crearJaulas(10, isla3.getIslaId());

        // Establecemos las jaulas de las islas
        isla1.setJaulas(jaulasIsla1);
        isla2.setJaulas(jaulasIsla2);
        isla3.setJaulas(jaulasIsla3);

        // Crear buffers para cada isla
        BlockingQueue<String> bufferTxIsla1 = new ArrayBlockingQueue<>(10);
        BlockingQueue<String> bufferRxIsla1 = new ArrayBlockingQueue<>(10);
        BlockingQueue<String> bufferTxIsla2 = new ArrayBlockingQueue<>(10);
        BlockingQueue<String> bufferRxIsla2 = new ArrayBlockingQueue<>(10);
        BlockingQueue<String> bufferTxIsla3 = new ArrayBlockingQueue<>(10);
        BlockingQueue<String> bufferRxIsla3 = new ArrayBlockingQueue<>(10);

        // Configurar las islas con sus buffers correspondientes
        isla1.setBufferSolicitud(bufferTxIsla1);
        isla1.setBufferRespuesta(bufferRxIsla1);
        isla2.setBufferSolicitud(bufferTxIsla2);
        isla2.setBufferRespuesta(bufferRxIsla2);
        isla3.setBufferSolicitud(bufferTxIsla3);
        isla3.setBufferRespuesta(bufferRxIsla3);

        // Preparar listas de buffers para el CentroDeCrianza
        List<BlockingQueue<String>> buffersSolicitud = new ArrayList<>();
        List<BlockingQueue<String>> buffersRespuesta = new ArrayList<>();

        buffersSolicitud.add(bufferTxIsla1);
        buffersSolicitud.add(bufferTxIsla2);
        buffersSolicitud.add(bufferTxIsla3);

        buffersRespuesta.add(bufferRxIsla1);
        buffersRespuesta.add(bufferRxIsla2);
        buffersRespuesta.add(bufferRxIsla3);

        // Configurar los buffers en el centro de crianza
        centroDeCrianza.setBuffersSolicitud(buffersSolicitud);
        centroDeCrianza.setBuffersRespuesta(buffersRespuesta);

        List<Isla> islas = new ArrayList<>();
        islas.add(isla1);
        islas.add(isla2);
        islas.add(isla3);
        parqueService.setIslas(islas);

        // Iniciar el monitoreo de las islas
        isla1.iniciarMonitoreo();
        isla2.iniciarMonitoreo();
        isla3.iniciarMonitoreo();

        // Iniciar el centro de crianza en un hilo
        new Thread(centroDeCrianza).start();
    }
}
