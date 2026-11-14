/**
 * projects-data.js
 * Información técnica y verídica extraída de los proyectos reales de Jesús Gutiérrez Villa.
 * Datos estructurados para alimentar la presentación y los modales de ficha técnica.
 */

const PROJECTS_DATA = [
  {
    id: "enfocakids",
    title: "EnfocaKids",
    categoryLabel: "En Producción • Proyecto Propio",
    badgeType: "production",
    tagline: "Plataforma de estimulación cognitiva infantil en 6 dimensiones.",
    image: "images/enfocakids.png",
    liveUrl: "https://enfocakids.com",
    githubUrl: null,
    statusBadge: "En Producción • Escuela Primaria",
    tags: ["JavaScript (ES6+)", "PHP 8", "MySQL Relacional", "PWA (Service Workers)", "PHPStan"],
    highlights: [
      { label: "Uso en Aula", desc: "Utilizada a diario por alumnos y docentes en una escuela primaria." },
      { label: "6 Dimensiones", desc: "Atención, velocidad de procesamiento, memoria de trabajo, visoespacial, funciones ejecutivas y control inhibitorio." },
      { label: "Métricas en Tiempo Real", desc: "Registro de aciertos y latencias en milisegundos durante las actividades." },
      { label: "Soporte Offline", desc: "Arquitectura PWA instalable con Service Workers y análisis estático con PHPStan." }
    ],
    challenge: "Las evaluaciones tradicionales suelen ser pruebas rígidas o en papel que generan presión en los niños y no registran tiempos de respuesta ni evolución diaria con precisión.",
    solution: "Se desarrolló una PWA propia que integra ejercicios lúdicos con captura silenciosa de métricas. Funciona diariamente en una escuela primaria, permitiendo a docentes y familias seguir el avance sin interrumpir la experiencia del niño.",
    technicalFeatures: [
      "Plataforma activa en enfocakids.com con uso diario en entorno escolar.",
      "Motor en Vanilla JavaScript para medir tiempos de reacción y rachas de acierto.",
      "PWA con Service Workers (sw.js) y manifest.webmanifest para uso sin conexión.",
      "Backend en PHP analizado estáticamente con PHPStan en nivel estricto.",
      "Panel de seguimiento con historial y reportes por alumno."
    ],
    evaluatorNotes: "Proyecto propio en producción real con usuarios activos, métricas en tiempo real y soporte offline."
  },
  {
    id: "mach-contadores",
    title: "MACH Contadores",
    categoryLabel: "Cliente Real • En Producción",
    badgeType: "production",
    tagline: "Sistema web para gestión de clientes, expedientes fiscales y facturación.",
    image: "images/mach-contadores.png",
    liveUrl: null,
    githubUrl: null,
    statusBadge: "En Producción • Cliente Comercial",
    tags: ["PHP 8", "MySQL Relacional", "Vanilla JavaScript", "CSS3 Modular", "Apache WAMP"],
    highlights: [
      { label: "Base de Datos", desc: "9 tablas normalizadas en MySQL con claves foráneas e integridad referencial." },
      { label: "Acceso por Roles", desc: "Control de sesiones para administradores y clientes con verificación por correo." },
      { label: "Carga Rápida", desc: "Frontend nativo sin librerías pesadas para equipos estándar de oficina." }
    ],
    challenge: "El despacho llevaba el control de expedientes y declaraciones en archivos dispersos y hojas de cálculo, dificultando el seguimiento de fechas límite y cambios.",
    solution: "Se creó una aplicación web centralizada en PHP y MySQL que organiza expedientes de contribuyentes, cédulas de facturación, notificaciones y bitácora de movimientos.",
    technicalFeatures: [
      "Esquema relacional en MySQL con 9 tablas para clientes, datos fiscales, sesiones, notificaciones e historial.",
      "Backend modular en PHP con endpoints JSON para consultas y alertas.",
      "Frontend en Vanilla JS con validación de formularios y peticiones Fetch sin recargas.",
      "Protección de rutas con .htaccess, consultas preparadas y control de sesiones."
    ],
    evaluatorNotes: "Desarrollo completo para un cliente real, desde la toma de requerimientos hasta su uso diario en oficina."
  },
  {
    id: "studia",
    title: "StudIA",
    categoryLabel: "IA & Educación",
    badgeType: "ai",
    tagline: "Plataforma de apoyo académico con guías y práctica generadas con IA.",
    image: "images/studia.png",
    liveUrl: "https://lemonchiffon-leopard-884511.hostingersite.com",
    githubUrl: null,
    statusBadge: "Demo Pública",
    tags: ["PHP POO", "OpenAI API", "MySQL Relacional", "JavaScript ES6+"],
    highlights: [
      { label: "Capa de IA Modular", desc: "Uso de interfaces (AIProviderInterface) para desacoplar el proveedor de IA." },
      { label: "Persistencia MySQL", desc: "Almacenamiento de materias, guías, sesiones de práctica y métricas." },
      { label: "API REST en PHP", desc: "Respuestas JSON consistentes con validación de métodos HTTP." }
    ],
    challenge: "Organizar apuntes extensos en guías claras y ejercicios prácticos que permitan medir qué temas requieren más repaso.",
    solution: "Plataforma web en PHP y MySQL que conecta con la API de OpenAI para crear guías estructuradas y cuestionarios de práctica con seguimiento de progreso.",
    technicalFeatures: [
      "Contratos en PHP (AIProviderInterface y PromptStrategyInterface) para aislar la lógica de IA.",
      "Clase JsonResponse con limpieza de buffers y cabeceras anti-caché.",
      "Esquema MySQL para materias, guías, sesiones, eventos de práctica y notas.",
      "Interfaz asíncrona en JavaScript para sincronizar avances sin recargar."
    ],
    evaluatorNotes: "Ejemplo práctico de integración ordenada con OpenAI y endpoints REST en PHP orientado a objetos."
  },
  {
    id: "organizador-personal",
    title: "Organizador Personal SPA",
    categoryLabel: "Single Page Application",
    badgeType: "tool",
    tagline: "Aplicación de productividad en una sola página con tareas, hábitos y Pomodoro.",
    image: "images/planificador.png",
    liveUrl: "https://teal-butterfly-279512.hostingersite.com",
    githubUrl: null,
    statusBadge: "Demo Pública",
    tags: ["PHP (PDO)", "JavaScript SPA", "MySQL", "API REST", "Pomodoro"],
    highlights: [
      { label: "SPA Nativa", desc: "Flujo continuo en JavaScript puro sin recargas entre vistas." },
      { label: "Modelos Claros", desc: "User, Task, Habit, HabitLog y Pomodoro separados en backend." },
      { label: "Persistencia PDO", desc: "Consultas preparadas en MySQL y reglas .htaccess en subdirectorios." }
    ],
    challenge: "Contar con una herramienta ligera para organizar tareas diarias, hábitos y tiempos de enfoque sin distracciones ni tiempos de carga lentos.",
    solution: "Aplicación web de una sola página con frontend en Vanilla JS y backend REST en PHP con PDO para guardar tareas, rachas y sesiones Pomodoro.",
    technicalFeatures: [
      "Backend REST en PHP con enrutador ligero y conexión segura vía PDO.",
      "Modelos independientes para usuarios, tareas, hábitos, registros y temporizador.",
      "Actualización dinámica del DOM en JavaScript ES6+.",
      "Protección de directorios internos mediante reglas .htaccess."
    ],
    evaluatorNotes: "Aplicación SPA ligera construida desde cero con backend REST y persistencia en MySQL."
  },
  {
    id: "chromind",
    title: "Chromind",
    categoryLabel: "PWA Canvas",
    badgeType: "data",
    tagline: "Aplicación de dibujo en Canvas con análisis de color, matriz 3x3 y gráfico radar.",
    image: "images/chromind.png",
    liveUrl: "https://jesusvilladev.github.io/Chromind.github.io/",
    githubUrl: null,
    statusBadge: "Demo Web",
    tags: ["HTML5 Canvas API", "JavaScript", "PWA Offline", "Visualización Radar"],
    highlights: [
      { label: "Lienzo Canvas", desc: "Dibujo fluido con registro de velocidad, ritmo y cobertura de trazo." },
      { label: "Radar 5D", desc: "Gráfico pentagonal en Canvas sin librerías externas de gráficas." },
      { label: "Matriz 3x3", desc: "Conteo de actividad por cuadrantes sobre el área de dibujo." }
    ],
    challenge: "Ofrecer una forma visual de resumir distribución espacial, velocidad de trazo y paleta de colores usada en dibujos hechos en pantalla.",
    solution: "PWA sobre HTML5 Canvas donde los niños dibujan libremente y al terminar se calcula el porcentaje de colores, la matriz 3x3 y un radar visual de 5 dimensiones.",
    technicalFeatures: [
      "Captura de coordenadas y trazos continuos con la API nativa de Canvas.",
      "Cálculo de densidad de píxeles por color para desglose porcentual.",
      "División matemática del lienzo en cuadrícula 3x3 para ubicar zonas de mayor trazo.",
      "Gráfico de radar pentagonal dibujado directamente en Canvas.",
      "Funcionamiento offline como Progressive Web App."
    ],
    evaluatorNotes: "Manejo directo de HTML5 Canvas, cálculos 2D y visualización de datos sin dependencias externas."
  },
  {
    id: "git-tracker",
    title: "Git Tracker",
    categoryLabel: "Herramienta Dev",
    badgeType: "tool",
    tagline: "Visualizador local de repositorios Git con grafo de ramas y commits en tiempo real.",
    image: "images/git-tracker.png",
    liveUrl: null,
    githubUrl: null,
    statusBadge: "Herramienta Local",
    tags: ["JavaScript Canvas", "Git CLI", "PHP Backend", "Caché JSON SHA"],
    highlights: [
      { label: "Tiempo Real", desc: "Detecta cambios en HEAD y actualiza el grafo automáticamente." },
      { label: "Caché SHA", desc: "Respuestas rápidas (<100ms) invalidando solo cuando hay nuevos commits." },
      { label: "Multi-Repositorio", desc: "Selector para cambiar entre proyectos locales desde una sola vista." }
    ],
    challenge: "Revisar bifurcaciones y fusiones de ramas múltiples desde consola puede volverse poco práctico en el día a día.",
    solution: "Herramienta local que lee los objetos y referencias de Git para dibujar un grafo interactivo (DAG) navegable con desplazamiento por arrastre.",
    technicalFeatures: [
      "Lectura de comandos internos de Git para reconstruir el historial exacto.",
      "Caché por hash SHA en JSON que se regenera únicamente al detectar cambios.",
      "Escaneo de repositorios dentro del servidor local.",
      "Lienzo interactivo en Canvas con drag-to-pan y soporte de trackpad."
    ],
    evaluatorNotes: "Herramienta propia orientada a agilizar el trabajo diario con repositorios Git locales."
  },
  {
    id: "servidor-local",
    title: "Servidor Local AirDrop",
    categoryLabel: "Red Local Wi-Fi",
    badgeType: "tool",
    tagline: "Transferencia rápida de fotos y archivos entre móvil y PC por red Wi-Fi local.",
    image: "images/servidor-local.png",
    liveUrl: null,
    githubUrl: null,
    statusBadge: "Red Local Wi-Fi",
    tags: ["PHP 8", "Vanilla JavaScript", "HTML5 Canvas API", "AJAX / XHR"],
    highlights: [
      { label: "Envío Rápido", desc: "Transferencia directa en red local privada sin cables ni servicios externos." },
      { label: "Compresión en Cliente", desc: "Redimensionado y optimización de imágenes con Canvas antes de subirlas." },
      { label: "Rutas Seguras", desc: "Validación con realpath() para mantener las operaciones dentro de la carpeta raíz." }
    ],
    challenge: "Pasar fotos o archivos de prueba entre el teléfono y la computadora de trabajo suele requerir cables o aplicaciones externas que reducen la calidad.",
    solution: "Hub local en PHP y JavaScript con interfaz móvil, preprocesamiento de imagen en Canvas y barra de progreso en tiempo real vía XMLHttpRequest.",
    technicalFeatures: [
      "Redimensionado proporcional (máx. 1920px) y compresión JPEG vía Canvas toBlob().",
      "Validación de rutas con realpath() y str_starts_with() contra Directory Traversal.",
      "Progreso de subida en vivo con eventos xhr.upload.onprogress.",
      "Navegación por carpetas, vista previa y borrado de archivos por AJAX."
    ],
    evaluatorNotes: "Utilidad práctica para resolver transferencia de archivos en red local sin dependencias."
  }
];

// Certificaciones y credenciales académicas
const CREDENTIALS_DATA = [
  {
    title: "Fundamentos de Machine Learning",
    issuer: "Wizeline • Google Day",
    year: "Google Day",
    badge: "Taller Técnico",
    desc: "Taller impartido por ingenieros de Wizeline durante Google Day sobre fundamentos de Machine Learning y flujos de datos."
  },
  {
    title: "Cloud Computing",
    issuer: "IBM SkillsBuild",
    year: "2026",
    badge: "IBM Verificado",
    desc: "Modelos de servicio en la nube (IaaS, PaaS, SaaS) y conceptos de despliegue."
  },
  {
    title: "Desarrollo Web",
    issuer: "IBM SkillsBuild",
    year: "2026",
    badge: "IBM Verificado",
    desc: "Estándares web, HTTP/HTTPS, arquitectura cliente-servidor y desarrollo frontend."
  },
  {
    title: "Control de Versiones con Git",
    issuer: "IBM SkillsBuild",
    year: "2026",
    badge: "IBM Verificado",
    desc: "Manejo de ramas, flujos colaborativos, rebase y resolución de conflictos."
  },
  {
    title: "AWS Cloud Foundations",
    issuer: "Amazon Web Services",
    year: "2026",
    badge: "AWS Verificado",
    desc: "Bases de infraestructura en AWS: cómputo, almacenamiento, redes y seguridad."
  },
  {
    title: "Cursos MOOC Especializados 2026",
    issuer: "Tecnológico Nacional de México",
    year: "2026",
    badge: "TecNM Oficial",
    desc: "Formación continua en competencias de desarrollo e ingeniería computacional."
  }
];
