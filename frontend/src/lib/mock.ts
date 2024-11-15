import { AuditLog } from "./types";

export const logEntries: AuditLog[] = [
    {
      id: 1,
      message: "Solicitud de incubación AEREO enviada a Centro de Crianza",
      island: "Isla 3",
      level: "REQUEST_DINOSAUR",
      timestamp: "2024-11-15T13:21:33.411028"
    },
    {
      id: 2,
      message: "Solicitud de incubación CARNIVORO enviada a Centro de Crianza",
      island: "Isla 1",
      level: "REQUEST_DINOSAUR",
      timestamp: "2024-11-15T13:21:33.410875"
    },
    {
      id: 3,
      message: "Solicitud de incubación HERBIVORO enviada a Centro de Crianza",
      island: "Isla 2",
      level: "REQUEST_DINOSAUR",
      timestamp: "2024-11-15T13:21:33.411112"
    },
    {
      id: 4,
      message: "Dinosaurio AEREO incubado y enviado a Isla 1",
      island: "Centro de Crianza",
      level: "SEND_DINOSAUR",
      timestamp: "2024-11-15T13:21:34.447804"
    },
    {
      id: 5,
      message: "Dinosaurio CARNIVORO incubado y enviado a Isla 2",
      island: "Centro de Crianza",
      level: "SEND_DINOSAUR",
      timestamp: "2024-11-15T13:21:38.75216"
    },
    {
      id: 6,
      message: "Dinosaurio HERBIVORO incubado y enviado a Isla 3",
      island: "Centro de Crianza",
      level: "SEND_DINOSAUR",
      timestamp: "2024-11-15T13:21:39.765175"
    },
    {
      id: 7,
      message: "Solicitud de incubación AEREO enviada a Centro de Crianza",
      island: "Isla 3",
      level: "REQUEST_DINOSAUR",
      timestamp: "2024-11-15T13:21:41.524961"
    },
    {
      id: 8,
      message: "Solicitud de incubación HERBIVORO enviada a Centro de Crianza",
      island: "Isla 2",
      level: "REQUEST_DINOSAUR",
      timestamp: "2024-11-15T13:21:41.751968"
    },
    {
      id: 9,
      message: "Solicitud de incubación CARNIVORO enviada a Centro de Crianza",
      island: "Isla 1",
      level: "REQUEST_DINOSAUR",
      timestamp: "2024-11-15T13:21:41.763868"
    },
    {
      id: 10,
      message: "[Jaula 1] >> Frecuencia cardíaca: 195 bpm | Temperatura detectada: 37.93°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 1",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:41.767964"
    },
    {
      id: 11,
      message: "Dinosaurio HERBIVORO incubado y enviado a Isla 3",
      island: "Centro de Crianza",
      level: "SEND_DINOSAUR",
      timestamp: "2024-11-15T13:21:42.559352"
    },
    {
      id: 12,
      message: "Dinosaurio AEREO incubado y enviado a Isla 1",
      island: "Centro de Crianza",
      level: "SEND_DINOSAUR",
      timestamp: "2024-11-15T13:21:43.620373"
    },
    {
      id: 13,
      message: "Dinosaurio CARNIVORO incubado y enviado a Isla 2",
      island: "Centro de Crianza",
      level: "SEND_DINOSAUR",
      timestamp: "2024-11-15T13:21:44.631514"
    },
    {
      id: 14,
      message: "Solicitud de incubación AEREO enviada a Centro de Crianza",
      island: "Isla 3",
      level: "REQUEST_DINOSAUR",
      timestamp: "2024-11-15T13:21:45.533005"
    },
    {
      id: 15,
      message: "[Jaula 1] >> Frecuencia cardíaca: 145 bpm | Temperatura detectada: 35.85°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 3",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:45.532997"
    },
    {
      id: 16,
      message: "Solicitud de incubación HERBIVORO enviada a Centro de Crianza",
      island: "Isla 2",
      level: "REQUEST_DINOSAUR",
      timestamp: "2024-11-15T13:21:45.764237"
    },
    {
      id: 17,
      message: "[Jaula 1] >> Frecuencia cardíaca: 111 bpm | Temperatura detectada: 35.15°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 2",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:45.764595"
    },
    {
      id: 18,
      message: "[Jaula 1] >> Frecuencia cardíaca: 199 bpm | Temperatura detectada: 35.80°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 1",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:45.767474"
    },
    {
      id: 19,
      message: "Solicitud de incubación CARNIVORO enviada a Centro de Crianza",
      island: "Isla 1",
      level: "REQUEST_DINOSAUR",
      timestamp: "2024-11-15T13:21:45.769249"
    },
    {
      id: 20,
      message: "Dinosaurio HERBIVORO incubado y enviado a Isla 3",
      island: "Centro de Crianza",
      level: "SEND_DINOSAUR",
      timestamp: "2024-11-15T13:21:46.559544"
    },
    {
      id: 21,
      message: "Dinosaurio AEREO incubado y enviado a Isla 1",
      island: "Centro de Crianza",
      level: "SEND_DINOSAUR",
      timestamp: "2024-11-15T13:21:47.632699"
    },
    {
      id: 22,
      message: "Dinosaurio CARNIVORO incubado y enviado a Isla 2",
      island: "Centro de Crianza",
      level: "SEND_DINOSAUR",
      timestamp: "2024-11-15T13:21:48.654517"
    },
    {
      id: 23,
      message: "[Jaula 1] >> Frecuencia cardíaca: 129 bpm | Temperatura detectada: 39.97°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 3",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:49.533311"
    },
    {
      id: 24,
      message: "Solicitud de incubación AEREO enviada a Centro de Crianza",
      island: "Isla 3",
      level: "REQUEST_DINOSAUR",
      timestamp: "2024-11-15T13:21:49.547208"
    },
    {
      id: 25,
      message: "[Jaula 2] >> Frecuencia cardíaca: 164 bpm | Temperatura detectada: 38.29°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 3",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:49.547325"
    },
    {
      id: 26,
      message: "[Jaula 1] >> Frecuencia cardíaca: 166 bpm | Temperatura detectada: 39.85°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 2",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:49.764775"
    },
    {
      id: 27,
      message: "[Jaula 1] >> Frecuencia cardíaca: 158 bpm | Temperatura detectada: 38.61°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 1",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:49.767516"
    },
    {
      id: 28,
      message: "Solicitud de incubación HERBIVORO enviada a Centro de Crianza",
      island: "Isla 2",
      level: "REQUEST_DINOSAUR",
      timestamp: "2024-11-15T13:21:49.777126"
    },
    {
      id: 29,
      message: "[Jaula 2] >> Frecuencia cardíaca: 122 bpm | Temperatura detectada: 39.62°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 2",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:49.777464"
    },
    {
      id: 30,
      message: "Solicitud de incubación CARNIVORO enviada a Centro de Crianza",
      island: "Isla 1",
      level: "REQUEST_DINOSAUR",
      timestamp: "2024-11-15T13:21:49.778328"
    },
    {
      id: 31,
      message: "[Jaula 2] >> Frecuencia cardíaca: 169 bpm | Temperatura detectada: 36.15°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 1",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:49.795752"
    },
    {
      id: 32,
      message: "Dinosaurio HERBIVORO incubado y enviado a Isla 3",
      island: "Centro de Crianza",
      level: "SEND_DINOSAUR",
      timestamp: "2024-11-15T13:21:50.574549"
    },
    {
      id: 33,
      message: "Dinosaurio AEREO incubado y enviado a Isla 1",
      island: "Centro de Crianza",
      level: "SEND_DINOSAUR",
      timestamp: "2024-11-15T13:21:51.658934"
    },
    {
      id: 34,
      message: "Dinosaurio CARNIVORO incubado y enviado a Isla 2",
      island: "Centro de Crianza",
      level: "SEND_DINOSAUR",
      timestamp: "2024-11-15T13:21:52.666182"
    },
    {
      id: 35,
      message: "[Jaula 1] >> Frecuencia cardíaca: 105 bpm | Temperatura detectada: 39.98°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 3",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:53.532974"
    },
    {
      id: 36,
      message: "[Jaula 2] >> Frecuencia cardíaca: 169 bpm | Temperatura detectada: 36.36°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 3",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:53.547672"
    },
    {
      id: 37,
      message: "[Jaula 3] >> Frecuencia cardíaca: 128 bpm | Temperatura detectada: 37.74°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 3",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:53.567365"
    },
    {
      id: 38,
      message: "Solicitud de incubación AEREO enviada a Centro de Crianza",
      island: "Isla 3",
      level: "REQUEST_DINOSAUR",
      timestamp: "2024-11-15T13:21:53.567205"
    },
    {
      id: 39,
      message: "[Jaula 1] >> Frecuencia cardíaca: 161 bpm | Temperatura detectada: 39.07°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 2",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:53.765236"
    },
    {
      id: 40,
      message: "[Jaula 1] >> Frecuencia cardíaca: 159 bpm | Temperatura detectada: 35.85°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 1",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:53.774891"
    },
    {
      id: 41,
      message: "[Jaula 2] >> Frecuencia cardíaca: 117 bpm | Temperatura detectada: 37.79°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 2",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:53.777757"
    },
    {
      id: 42,
      message: "[Jaula 2] >> Frecuencia cardíaca: 196 bpm | Temperatura detectada: 36.57°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 1",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:53.781937"
    },
    {
      id: 44,
      message: "Solicitud de incubación HERBIVORO enviada a Centro de Crianza",
      island: "Isla 2",
      level: "REQUEST_DINOSAUR",
      timestamp: "2024-11-15T13:21:53.810586"
    },
    {
      id: 43,
      message: "[Jaula 3] >> Frecuencia cardíaca: 101 bpm | Temperatura detectada: 35.86°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 1",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:53.810716"
    },
    {
      id: 45,
      message: "[Jaula 3] >> Frecuencia cardíaca: 167 bpm | Temperatura detectada: 37.79°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 2",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:53.810772"
    },
    {
      id: 46,
      message: "Solicitud de incubación CARNIVORO enviada a Centro de Crianza",
      island: "Isla 1",
      level: "REQUEST_DINOSAUR",
      timestamp: "2024-11-15T13:21:53.810305"
    },
    {
      id: 47,
      message: "Dinosaurio HERBIVORO incubado y enviado a Isla 3",
      island: "Centro de Crianza",
      level: "SEND_DINOSAUR",
      timestamp: "2024-11-15T13:21:54.601326"
    },
    {
      id: 48,
      message: "Dinosaurio AEREO incubado y enviado a Isla 1",
      island: "Centro de Crianza",
      level: "SEND_DINOSAUR",
      timestamp: "2024-11-15T13:21:55.66743"
    },
    {
      id: 49,
      message: "Dinosaurio CARNIVORO incubado y enviado a Isla 2",
      island: "Centro de Crianza",
      level: "SEND_DINOSAUR",
      timestamp: "2024-11-15T13:21:56.678457"
    },
    {
      id: 50,
      message: "[Jaula 1] >> Frecuencia cardíaca: 126 bpm | Temperatura detectada: 36.14°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 3",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:57.5333"
    },
    {
      id: 51,
      message: "[Jaula 2] >> Frecuencia cardíaca: 134 bpm | Temperatura detectada: 35.72°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 3",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:57.547201"
    },
    {
      id: 52,
      message: "[Jaula 3] >> Frecuencia cardíaca: 149 bpm | Temperatura detectada: 36.07°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 3",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:57.567078"
    },
    {
      id: 53,
      message: "[Jaula 4] >> Frecuencia cardíaca: 147 bpm | Temperatura detectada: 39.94°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 3",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:57.576183"
    },
    {
      id: 54,
      message: "Solicitud de incubación AEREO enviada a Centro de Crianza",
      island: "Isla 3",
      level: "REQUEST_DINOSAUR",
      timestamp: "2024-11-15T13:21:57.576027"
    },
    {
      id: 60,
      message: "Solicitud de incubación HERBIVORO enviada a Centro de Crianza",
      island: "Isla 2",
      level: "REQUEST_DINOSAUR",
      timestamp: "2024-11-15T13:21:57.818747"
    },
    {
      id: 78,
      message: "[Jaula 3] >> Frecuencia cardíaca: 104 bpm | Temperatura detectada: 36.84°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 1",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:01.812178"
    },
    {
      id: 81,
      message: "[Jaula 4] >> Frecuencia cardíaca: 106 bpm | Temperatura detectada: 38.24°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 2",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:01.835497"
    },
    {
      id: 83,
      message: "[Jaula 5] >> Frecuencia cardíaca: 169 bpm | Temperatura detectada: 35.09°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 1",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:01.848454"
    },
    {
      id: 95,
      message: "[Jaula 3] >> Frecuencia cardíaca: 200 bpm | Temperatura detectada: 36.06°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 1",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:05.813181"
    },
    {
      id: 97,
      message: "[Jaula 4] >> Frecuencia cardíaca: 172 bpm | Temperatura detectada: 36.35°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 2",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:05.841687"
    },
    {
      id: 98,
      message: "[Jaula 5] >> Frecuencia cardíaca: 157 bpm | Temperatura detectada: 37.69°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 1",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:05.865709"
    },
    {
      id: 101,
      message: "[Jaula 6] >> Frecuencia cardíaca: 118 bpm | Temperatura detectada: 38.82°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 2",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:05.88617"
    },
    {
      id: 55,
      message: "[Jaula 1] >> Frecuencia cardíaca: 135 bpm | Temperatura detectada: 36.56°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 2",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:57.765176"
    },
    {
      id: 57,
      message: "[Jaula 1] >> Frecuencia cardíaca: 172 bpm | Temperatura detectada: 38.29°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 1",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:57.784729"
    },
    {
      id: 59,
      message: "[Jaula 2] >> Frecuencia cardíaca: 134 bpm | Temperatura detectada: 38.31°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 1",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:57.817477"
    },
    {
      id: 63,
      message: "[Jaula 3] >> Frecuencia cardíaca: 167 bpm | Temperatura detectada: 39.73°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 2",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:57.829447"
    },
    {
      id: 64,
      message: "[Jaula 4] >> Frecuencia cardíaca: 119 bpm | Temperatura detectada: 38.98°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 1",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:57.845412"
    },
    {
      id: 70,
      message: "[Jaula 2] >> Frecuencia cardíaca: 119 bpm | Temperatura detectada: 36.74°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 3",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:01.547045"
    },
    {
      id: 71,
      message: "[Jaula 3] >> Frecuencia cardíaca: 156 bpm | Temperatura detectada: 37.79°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 3",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:01.566996"
    },
    {
      id: 74,
      message: "[Jaula 1] >> Frecuencia cardíaca: 180 bpm | Temperatura detectada: 35.67°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 2",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:01.765923"
    },
    {
      id: 76,
      message: "[Jaula 2] >> Frecuencia cardíaca: 151 bpm | Temperatura detectada: 35.26°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 1",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:01.786506"
    },
    {
      id: 86,
      message: "[Jaula 2] >> Frecuencia cardíaca: 170 bpm | Temperatura detectada: 39.70°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 3",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:05.54946"
    },
    {
      id: 87,
      message: "[Jaula 3] >> Frecuencia cardíaca: 184 bpm | Temperatura detectada: 37.48°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 3",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:05.570177"
    },
    {
      id: 91,
      message: "[Jaula 1] >> Frecuencia cardíaca: 192 bpm | Temperatura detectada: 35.90°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 2",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:05.765454"
    },
    {
      id: 100,
      message: "[Jaula 1] >> El dinosaurio ha muerto por CANIBALISMO",
      island: "Isla 2",
      level: "DEATH",
      timestamp: "2024-11-15T13:22:05.876122"
    },
    {
      id: 103,
      message: "[Jaula 2] >> El dinosaurio ha muerto por MUERTE NATURAL",
      island: "Isla 3",
      level: "DEATH",
      timestamp: "2024-11-15T13:22:05.896542"
    },
    {
      id: 104,
      message: "[Jaula 2] >> El dinosaurio ha muerto por INANICIÓN",
      island: "Isla 2",
      level: "DEATH",
      timestamp: "2024-11-15T13:22:05.907225"
    },
    {
      id: 56,
      message: "[Jaula 2] >> Frecuencia cardíaca: 144 bpm | Temperatura detectada: 37.55°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 2",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:57.779725"
    },
    {
      id: 66,
      message: "Dinosaurio HERBIVORO incubado y enviado a Isla 3",
      island: "Centro de Crianza",
      level: "SEND_DINOSAUR",
      timestamp: "2024-11-15T13:21:58.608479"
    },
    {
      id: 67,
      message: "Dinosaurio AEREO incubado y enviado a Isla 1",
      island: "Centro de Crianza",
      level: "SEND_DINOSAUR",
      timestamp: "2024-11-15T13:21:59.668487"
    },
    {
      id: 68,
      message: "Dinosaurio CARNIVORO incubado y enviado a Isla 2",
      island: "Centro de Crianza",
      level: "SEND_DINOSAUR",
      timestamp: "2024-11-15T13:22:00.678336"
    },
    {
      id: 75,
      message: "[Jaula 2] >> Frecuencia cardíaca: 156 bpm | Temperatura detectada: 37.27°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 2",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:01.780071"
    },
    {
      id: 84,
      message: "Dinosaurio AEREO incubado y enviado a Isla 1",
      island: "Centro de Crianza",
      level: "SEND_DINOSAUR",
      timestamp: "2024-11-15T13:22:02.864436"
    },
    {
      id: 85,
      message: "[Jaula 1] >> Frecuencia cardíaca: 171 bpm | Temperatura detectada: 35.19°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 3",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:05.533494"
    },
    {
      id: 93,
      message: "[Jaula 2] >> Frecuencia cardíaca: 125 bpm | Temperatura detectada: 35.80°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 2",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:05.78073"
    },
    {
      id: 58,
      message: "[Jaula 3] >> Frecuencia cardíaca: 104 bpm | Temperatura detectada: 35.18°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 1",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:57.812632"
    },
    {
      id: 62,
      message: "[Jaula 4] >> Frecuencia cardíaca: 161 bpm | Temperatura detectada: 39.41°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 2",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:21:57.827315"
    },
    {
      id: 65,
      message: "[Jaula 1] >> El dinosaurio ha muerto por MUERTE NATURAL",
      island: "Isla 1",
      level: "DEATH",
      timestamp: "2024-11-15T13:21:57.874463"
    },
    {
      id: 69,
      message: "[Jaula 1] >> Frecuencia cardíaca: 134 bpm | Temperatura detectada: 39.98°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 3",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:01.53243"
    },
    {
      id: 72,
      message: "[Jaula 4] >> Frecuencia cardíaca: 151 bpm | Temperatura detectada: 38.72°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 3",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:01.576113"
    },
    {
      id: 73,
      message: "[Jaula 5] >> Frecuencia cardíaca: 151 bpm | Temperatura detectada: 38.05°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 3",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:01.585135"
    },
    {
      id: 77,
      message: "[Jaula 3] >> Frecuencia cardíaca: 154 bpm | Temperatura detectada: 35.94°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 2",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:01.812248"
    },
    {
      id: 79,
      message: "[Jaula 4] >> Frecuencia cardíaca: 195 bpm | Temperatura detectada: 39.52°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 1",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:01.832173"
    },
    {
      id: 82,
      message: "[Jaula 5] >> Frecuencia cardíaca: 169 bpm | Temperatura detectada: 37.01°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 2",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:01.842093"
    },
    {
      id: 88,
      message: "[Jaula 4] >> Frecuencia cardíaca: 151 bpm | Temperatura detectada: 36.25°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 3",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:05.581016"
    },
    {
      id: 89,
      message: "[Jaula 5] >> Frecuencia cardíaca: 197 bpm | Temperatura detectada: 36.22°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 3",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:05.608965"
    },
    {
      id: 90,
      message: "[Jaula 6] >> Frecuencia cardíaca: 184 bpm | Temperatura detectada: 37.68°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 3",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:05.631971"
    },
    {
      id: 92,
      message: "[Jaula 2] >> Frecuencia cardíaca: 126 bpm | Temperatura detectada: 35.62°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 1",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:05.78061"
    },
    {
      id: 94,
      message: "[Jaula 3] >> Frecuencia cardíaca: 151 bpm | Temperatura detectada: 38.24°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 2",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:05.813239"
    },
    {
      id: 96,
      message: "[Jaula 4] >> Frecuencia cardíaca: 171 bpm | Temperatura detectada: 39.11°C | Movimiento detectado: MOVIMIENTO",
      island: "Isla 1",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:05.834622"
    },
    {
      id: 99,
      message: "[Jaula 5] >> Frecuencia cardíaca: 140 bpm | Temperatura detectada: 35.46°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 2",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:05.869894"
    },
    {
      id: 102,
      message: "[Jaula 1] >> Frecuencia cardíaca: 168 bpm | Temperatura detectada: 39.43°C | Movimiento detectado: NO MOVIMIENTO",
      island: "Isla 1",
      level: "MEASUREMENT",
      timestamp: "2024-11-15T13:22:05.895378"
    },
    {
      id: 61,
      message: "Solicitud de incubación CARNIVORO enviada a Centro de Crianza",
      island: "Isla 1",
      level: "REQUEST_DINOSAUR",
      timestamp: "2024-11-15T13:21:57.818989"
    },
    {
      id: 80,
      message: "Solicitud de incubación CARNIVORO enviada a Centro de Crianza",
      island: "Isla 1",
      level: "REQUEST_DINOSAUR",
      timestamp: "2024-11-15T13:22:01.832216"
    }
  ]