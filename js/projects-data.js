/**
 * projects-data.js
 * Información técnica y verídica extraída de los proyectos reales de Jesús Gutiérrez Villa.
 * Datos estructurados y 100% alineados con el CV para alimentar los modales de ficha técnica.
 */

const PROJECTS_DATA = [
  {
    id: "enfocakids",
    title: "EnfocaKids",
    categoryLabel: "Proyecto Propio • En Producción",
    badgeType: "production",
    tagline: "Plataforma web interactiva de actividades cognitivas para niñas y niños de 4 a 14+ años.",
    image: "images/enfocakids.png",
    liveUrl: "https://enfocakids.com",
    statusBadge: "En Producción (2026)",
    tags: ["PHP", "MySQL", "JavaScript", "HTML5 & CSS3", "PWA", "PHPStan"],
    highlights: [
      { label: "Actividades Cognitivas", desc: "Enfocada en niñas y niños de 4 a 14+ años con 6 dimensiones cognitivas." },
      { label: "Mini-Juegos en Navegador", desc: "Lógica interactiva que registra tiempos, puntajes y eventos en tiempo real." },
      { label: "Telemetría & Reportes", desc: "Módulo en base de datos MySQL para seguimiento continuo de desempeño." },
      { label: "Soporte Offline & Calidad", desc: "Arquitectura PWA con Service Workers y análisis estático con PHPStan." }
    ],
    challenge: "Las evaluaciones tradicionales suelen ser pruebas rígidas o en papel que generan presión en los niños y no registran tiempos de respuesta ni evolución diaria con precisión.",
    solution: "Desarrollo integral de una plataforma web interactiva con HTML, CSS, JavaScript, PHP y MySQL enfocada en actividades cognitivas para niñas y niños de 4 a 14+ años, con lógica de mini-juegos en navegador y módulo de telemetría/reportes.",
    technicalFeatures: [
      "Plataforma activa en enfocakids.com diseñada para niñas y niños de 4 a 14+ años.",
      "Lógica de mini-juegos en Vanilla JavaScript con captura de tiempos, puntajes y eventos en tiempo real.",
      "Módulo de telemetría y reportes en base de datos MySQL para seguimiento de desempeño.",
      "PWA con Service Workers (sw.js) y manifest.webmanifest para operación sin conexión.",
      "Backend en PHP analizado estáticamente con PHPStan."
    ],
    evaluatorNotes: "Proyecto propio en producción real con mini-juegos interactivos, telemetría en base de datos y soporte PWA."
  },
  {
    id: "mach-contadores",
    title: "MACH Contadores",
    categoryLabel: "Cliente Comercial • En Producción",
    badgeType: "production",
    tagline: "Sistema web administrativo para despacho contable: contribuyentes, facturación y auditoría.",
    image: "images/mach-contadores.png",
    liveUrl: null,
    statusBadge: "Apatzingán, Michoacán • 2026",
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    highlights: [
      { label: "Base de Datos Relacional", desc: "Esquema normalizado en MySQL para expedientes, facturación y auditoría." },
      { label: "Módulos Administrativos", desc: "Gestión de expedientes de contribuyentes, cédulas de facturación y notificaciones." },
      { label: "Bitácora de Auditoría", desc: "Registro detallado de movimientos y control de accesos por roles." },
      { label: "Interfaz Ágil", desc: "Frontend en JavaScript nativo optimizado para equipos de oficina." }
    ],
    challenge: "El despacho llevaba el control de expedientes y declaraciones en archivos dispersos y hojas de cálculo, dificultando el seguimiento de fechas límite y movimientos.",
    solution: "Análisis y desarrollo desde cero de un sistema web administrativo en PHP, MySQL, JavaScript, HTML y CSS para un despacho contable, centralizando expedientes de contribuyentes, cédulas de facturación, notificaciones y bitácora de auditoría.",
    technicalFeatures: [
      "Diseño de base de datos relacional en MySQL con integridad referencial para contribuyentes, facturación, notificaciones y auditoría.",
      "Backend modular en PHP con endpoints JSON para consultas y alertas.",
      "Frontend en JavaScript nativo con validación de formularios y peticiones Fetch sin recargas.",
      "Protección de rutas con .htaccess, consultas preparadas y control de sesiones por roles."
    ],
    evaluatorNotes: "Desarrollo integral desde cero para cliente comercial en producción, cubriendo análisis, base de datos, seguridad y puesta en marcha."
  },
  {
    id: "git-tracker",
    title: "Git Tracker",
    categoryLabel: "Herramienta Dev",
    badgeType: "tool",
    tagline: "Visualizador local de repositorios Git con grafo DAG de ramas y commits en tiempo real.",
    image: "images/git-tracker.png",
    liveUrl: null,
    statusBadge: "Herramienta Local",
    tags: ["JavaScript", "Canvas API", "Git CLI", "PHP"],
    highlights: [
      { label: "Tiempo Real", desc: "Detecta cambios en HEAD y actualiza el grafo automáticamente." },
      { label: "Caché SHA", desc: "Respuestas rápidas (<100 ms) invalidando solo cuando hay nuevos commits." },
      { label: "Grafo DAG en Canvas", desc: "Renderizado navegable de bifurcaciones y fusiones con drag-to-pan." },
      { label: "Multi-Repositorio", desc: "Selector para cambiar entre proyectos locales desde una sola vista." }
    ],
    challenge: "Revisar bifurcaciones y fusiones de ramas múltiples desde consola puede volverse poco práctico en el día a día.",
    solution: "Herramienta local que lee los objetos y referencias internas de Git mediante comandos plumbing para dibujar un grafo dirigido acíclico (DAG) interactivo y navegable en Canvas.",
    technicalFeatures: [
      "Lectura de comandos plumbing de Git para reconstruir el historial exacto de ramas y merges.",
      "Caché por hash SHA en JSON que se regenera únicamente al detectar cambios en HEAD.",
      "Escaneo automático de repositorios dentro del servidor local.",
      "Lienzo interactivo en HTML5 Canvas con drag-to-pan y soporte de trackpad."
    ],
    evaluatorNotes: "Herramienta de ingeniería propia que combina Git CLI plumbing, caché por hash SHA y renderizado DAG en Canvas."
  },
  {
    id: "servidor-local",
    title: "Servidor Local",
    categoryLabel: "Red Local Wi-Fi",
    badgeType: "tool",
    tagline: "Transferencia rápida de fotos y archivos entre móvil y PC por red Wi-Fi local.",
    image: "images/servidor-local.png",
    liveUrl: null,
    statusBadge: "Red Local Wi-Fi",
    tags: ["PHP", "JavaScript", "Canvas API", "AJAX / XHR"],
    highlights: [
      { label: "Envío Rápido", desc: "Transferencia directa en red local privada sin cables ni servicios externos." },
      { label: "Compresión en Cliente", desc: "Redimensionado y optimización de imágenes con Canvas antes de subirlas." },
      { label: "Progreso en Vivo", desc: "Seguimiento en tiempo real de cada carga mediante eventos XHR." },
      { label: "Rutas Seguras", desc: "Validación con realpath() para mantener las operaciones dentro de la carpeta raíz." }
    ],
    challenge: "Pasar fotos o archivos de prueba entre el teléfono y la computadora de trabajo suele requerir cables o aplicaciones externas que reducen la calidad.",
    solution: "Hub local en PHP y JavaScript con interfaz móvil, preprocesamiento de imagen en Canvas y barra de progreso en tiempo real vía XMLHttpRequest.",
    technicalFeatures: [
      "Redimensionado proporcional (máx. 1920px) y compresión JPEG en el navegador vía Canvas toBlob().",
      "Validación estricta de rutas con realpath() y str_starts_with() contra Directory Traversal.",
      "Progreso de subida en vivo con eventos xhr.upload.onprogress.",
      "Navegación por carpetas, vista previa y gestión de archivos mediante AJAX."
    ],
    evaluatorNotes: "Utilidad de transferencia local enfocada en velocidad, seguridad de rutas y procesamiento en cliente sin dependencias."
  },
  {
    id: "studia",
    title: "StudIA",
    categoryLabel: "IA & Educación",
    badgeType: "ai",
    tagline: "Plataforma web de apoyo académico con módulos interactivos de repaso y seguimiento de estudio.",
    image: "images/studia.png",
    liveUrl: "https://lemonchiffon-leopard-884511.hostingersite.com",
    statusBadge: "Demo Pública (2026)",
    tags: ["PHP", "MySQL", "JavaScript", "HTML5 & CSS3"],
    highlights: [
      { label: "Módulos de Repaso", desc: "Sesiones interactivas para reforzar temas y evaluar el nivel de dominio." },
      { label: "Organización Académica", desc: "Gestión estructurada de materias, apuntes, guías y seguimiento de estudio." },
      { label: "Persistencia MySQL", desc: "Almacenamiento relacional de materias, prácticas y métricas de avance." },
      { label: "API REST en PHP", desc: "Respuestas JSON consistentes e interfaz asíncrona en JavaScript." }
    ],
    challenge: "Organizar apuntes extensos en guías claras y ejercicios prácticos que permitan medir qué temas requieren más repaso.",
    solution: "Plataforma web de apoyo académico desarrollada en PHP, MySQL, JavaScript, HTML y CSS con módulos interactivos de repaso, organización de materias y seguimiento de estudio.",
    technicalFeatures: [
      "Arquitectura modular en PHP orientada a objetos para separar lógica de estudio y generación de contenido.",
      "Esquema relacional MySQL para materias, guías, sesiones de práctica y métricas de avance.",
      "Endpoints JSON en PHP con validación de solicitudes y respuestas limpias.",
      "Interfaz asíncrona en JavaScript para actualizar avances sin recargar la página."
    ],
    evaluatorNotes: "Plataforma web full-stack de apoyo académico construida con PHP, MySQL, JavaScript, HTML5 y CSS3."
  },
  {
    id: "organizador-personal",
    title: "Organizador Personal",
    categoryLabel: "Productividad Web",
    badgeType: "tool",
    tagline: "Aplicación web de productividad personal con agenda de tareas, rutina diaria y Pomodoro.",
    image: "images/planificador.png",
    liveUrl: "https://teal-butterfly-279512.hostingersite.com",
    statusBadge: "Demo Pública (2026)",
    tags: ["JavaScript", "HTML5", "CSS3", "Pomodoro"],
    highlights: [
      { label: "Agenda de Tareas", desc: "Organización ágil de pendientes diarios por prioridad y estado." },
      { label: "Rutina Diaria", desc: "Seguimiento claro de hábitos y actividades recurrentes en una sola vista." },
      { label: "Temporizador Pomodoro", desc: "Control integrado de bloques de enfoque y descansos en tiempo real." },
      { label: "Interfaz Responsiva", desc: "Carga instantánea en navegador con JavaScript, HTML5 y CSS3 puro." }
    ],
    challenge: "Contar con una herramienta ligera y rápida para organizar tareas diarias, rutinas y tiempos de enfoque sin distracciones ni tiempos de carga lentos.",
    solution: "Aplicación web de productividad personal desarrollada con JavaScript, HTML5 y CSS3 que centraliza agenda de tareas, gestión de rutina diaria y temporizador Pomodoro en una interfaz rápida y responsiva.",
    technicalFeatures: [
      "Actualización dinámica del DOM en JavaScript (ES6+) sin dependencias externas.",
      "Gestión de agenda de tareas y seguimiento diario de rutina.",
      "Temporizador Pomodoro interactivo con estados de enfoque y pausa.",
      "Diseño responsivo en HTML5 y CSS3 adaptado a escritorio y dispositivos móviles."
    ],
    evaluatorNotes: "Aplicación web de productividad rápida y responsiva desarrollada con JavaScript, HTML5 y CSS3."
  },
  {
    id: "chromind",
    title: "Chromind",
    categoryLabel: "PWA Canvas",
    badgeType: "data",
    tagline: "Aplicación interactiva de dibujo digital con renderizado en tiempo real y análisis visual en Canvas API.",
    image: "images/chromind.png",
    liveUrl: "https://jesusvilladev.github.io/Chromind.github.io/",
    statusBadge: "Demo Web (2026)",
    tags: ["JavaScript", "Canvas API", "CSS3", "PWA"],
    highlights: [
      { label: "Lienzo Canvas", desc: "Dibujo digital fluido con renderizado en tiempo real sobre HTML5 Canvas." },
      { label: "Análisis de Color", desc: "Cálculo de densidad de píxeles para desglose porcentual de paleta." },
      { label: "Matriz 3x3 & Radar 5D", desc: "Distribución espacial por cuadrantes y gráfico radar sin librerías externas." },
      { label: "Soporte Offline", desc: "Funcionamiento fluido en navegador como Progressive Web App." }
    ],
    challenge: "Ofrecer una forma visual de resumir distribución espacial, velocidad de trazo y paleta de colores usada en dibujos hechos en pantalla.",
    solution: "Aplicación interactiva de dibujo digital con JavaScript, HTML5 Canvas API y CSS3 que realiza renderizado en tiempo real y análisis visual de color, cuadrícula 3x3 y gráfico radar en 5 dimensiones.",
    technicalFeatures: [
      "Captura de coordenadas y trazos continuos en tiempo real con la API nativa de Canvas.",
      "Cálculo de densidad de píxeles por color para desglose porcentual.",
      "División matemática del lienzo en cuadrícula 3x3 para ubicar zonas de mayor trazo.",
      "Gráfico de radar pentagonal dibujado directamente en Canvas.",
      "Funcionamiento offline como Progressive Web App."
    ],
    evaluatorNotes: "Manejo directo de HTML5 Canvas API, cálculos 2D y visualización de datos sin dependencias externas."
  }
];

// Certificaciones de mayor peso técnico (alineadas 100% con el CV)
const CREDENTIALS_DATA = [
  {
    title: "Desarrollo con IA: de 0 a Producción",
    issuer: "BIG school",
    year: "2026",
    badge: "Oficial",
    desc: "Diseño, integración y despliegue de aplicaciones con modelos de inteligencia artificial orientadas a producción."
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS",
    year: "2026",
    badge: "AWS Verificado",
    desc: "Fundamentos de arquitectura en la nube de AWS: cómputo, almacenamiento, redes, seguridad y modelo de responsabilidad compartida."
  },
  {
    title: "AWS: Cloud & Serverless",
    issuer: "Commit Academy",
    year: "2026",
    badge: "Acreditado",
    desc: "Servicios administrados, arquitecturas serverless y operación práctica en la nube de AWS."
  },
  {
    title: "Fundamentos de Machine Learning",
    issuer: "Wizeline / Google Day",
    year: "2026",
    badge: "Taller Presencial",
    desc: "Taller impartido por ingenieros de Wizeline durante Google Day sobre fundamentos de Machine Learning y flujos de datos."
  }
];
