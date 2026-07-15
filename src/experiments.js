// Estado de cada experimento a medida que se va migrando desde el portafolio.
// "live" = implementado en este repo. "soon" = en camino (ver README).
export const TAG_COLORS = {
  accesibilidad: "text-sky-400 border-sky-400/30 bg-sky-400/5",
  IA: "text-violet-400 border-violet-400/30 bg-violet-400/5",
  animación: "text-orange-400 border-orange-400/30 bg-orange-400/5",
  visión: "text-pink-400 border-pink-400/30 bg-pink-400/5",
};

export const experiments = [
  {
    id: "high-contrast",
    title: "Modo alto contraste",
    description:
      "Activa un modo de visualización optimizado para personas con baja visión. Cambia la paleta completa a blanco y negro puro, elimina elementos decorativos y aumenta la legibilidad.",
    tags: ["accesibilidad"],
    tech: ["CSS Custom Properties", "React"],
    status: "live",
  },
  {
    id: "voice-reader",
    title: "Lector de página",
    description:
      "Síntesis de voz que narra el contenido de la página en voz alta. Diseñado para personas con dislexia o baja visión.",
    tags: ["accesibilidad"],
    tech: ["Web Speech Synthesis API", "React"],
    status: "soon",
  },
  {
    id: "voice-nav",
    title: "Navegación por voz",
    description:
      "Controla la interfaz con comandos hablados, sin tocar el teclado.",
    tags: ["accesibilidad"],
    tech: ["Web Speech API", "React"],
    status: "soon",
  },
  {
    id: "game-over",
    title: "Game Over",
    description:
      "Comando de voz que dispara una pantalla de cierre con glitch, música y efectos CRT.",
    tags: ["accesibilidad"],
    tech: ["Web Speech API", "CSS Glitch", "Web Audio"],
    status: "soon",
  },
  {
    id: "perlin",
    title: "Ruido Generativo",
    description:
      "Campo vectorial vivo basado en Perlin noise. Cada línea sigue el flujo del ruido en el tiempo.",
    tags: ["animación"],
    tech: ["Canvas API", "Perlin Noise", "React"],
    status: "soon",
  },
  {
    id: "text-destroy",
    title: "Texto Destructivo",
    description:
      "Escribe una palabra y destrúyela: el texto explota en partículas con física real y luego se recompone.",
    tags: ["animación"],
    tech: ["Canvas API", "Física de partículas", "React"],
    status: "soon",
  },
  {
    id: "particles",
    title: "Partículas Interactivas",
    description:
      "Constelación de partículas que reacciona al cursor — repele, atrae o congela.",
    tags: ["animación"],
    tech: ["Canvas API", "Física 2D", "React"],
    status: "soon",
  },
  {
    id: "chatbot",
    title: "Asistente IA",
    description:
      "Chat que responde preguntas usando un LLM. Requiere tu propia API key / endpoint.",
    tags: ["IA"],
    tech: ["LLM", "React"],
    status: "soon",
  },
  {
    id: "ai-design",
    title: "Generador IA de diseño",
    description:
      "Describe una idea de proyecto y la IA genera un wireframe con análisis técnico. Requiere tu propia API key / endpoint.",
    tags: ["IA"],
    tech: ["LLM", "React"],
    status: "soon",
  },
  {
    id: "gesture-control",
    title: "Control por gestos",
    description:
      "Interacción mediante cámara y detección de puntos clave de la mano — sin teclado ni ratón.",
    tags: ["visión"],
    tech: ["MediaPipe Hands", "Canvas API", "WebRTC", "React"],
    status: "soon",
  },
];
