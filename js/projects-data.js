/**
 * projects-data.js
 * Información técnica y verídica extraída de los proyectos reales de Jesús Gutiérrez Villa.
 * Datos estructurados para alimentar la presentación y los modales de ficha técnica.
 */

const PROJECTS_DATA = [
  {
    id: "enfocakids",
    title: "EnfocaKids",
    categoryLabel: "En Producción Real • Proyecto Propio",
    badgeType: "production",
    tagline: "Ecosistema interactivo de estimulación cognitiva y seguimiento del desarrollo infantil en 6 dimensiones.",
    image: "images/enfocakids.png",
    liveUrl: "https://enfocakids.com",
    githubUrl: null,
    statusBadge: "En Producción • Escuela Primaria",
    tags: ["JavaScript (ES6+)", "PHP 8", "MySQL Relacional", "PWA (Service Workers)", "PHPStan Nivel Estricto"],
    highlights: [
      { label: "Uso Real en Escuela", desc: "Adoptado y utilizado activamente por niñas y niños de primaria en sus actividades pedagógicas diarias." },
      { label: "6 Dimensiones Cognitivas", desc: "Atención sostenida, velocidad de procesamiento, memoria de trabajo, visoespacial, funciones ejecutivas y control inhibitorio." },
      { label: "Medición en Tiempo Real", desc: "Captura milimétrica de latencias y tiempos de respuesta en el navegador sin fricción lúdica." },
      { label: "Calidad de Código", desc: "Análisis estático automatizado con PHPStan y arquitectura PWA offline con Service Workers." }
    ],
    challenge: "Evaluar el desarrollo cognitivo infantil suele depender de pruebas clínicas invasivas o exámenes en papel que generan estrés en los niños y no registran variaciones temporales en milisegundos ni curvas de fatiga mental durante la actividad.",
    solution: "Se concibió y desarrolló una Progressive Web App (PWA) de producción propia que combina dinámicas lúdicas basadas en neuropsicología con captura silenciosa de métricas. El sistema opera actualmente en conjunto con una escuela primaria, donde los alumnos interactúan a diario. Bajo el principio ético de 'Acompañamiento siempre, diagnóstico clínico nunca', el sistema mide tiempos de reacción y precisión para ofrecer a maestros y padres una visión objetiva de las fortalezas del niño sin frustración.",
    technicalFeatures: [
      "Plataforma propia desplegada en producción real (enfocakids.com) con niños activos en entorno escolar primario.",
      "Motor en Vanilla JavaScript que captura eventos de usuario, latencia de reacción y rachas de acierto sin alterar la experiencia lúdica.",
      "Arquitectura Progressive Web App: registro de sw.js y manifest.webmanifest para funcionamiento offline y guardado en pantalla de inicio.",
      "Backend en PHP tipado y analizado estáticamente mediante PHPStan (nivel estricto en phpstan.neon).",
      "Panel de seguimiento para educadores y padres con expedientes históricos, gráficas de evolución y reportes estructurados."
    ],
    evaluatorNotes: "Proyecto cumbre de ingeniería y producto propio: valida interacción con usuarios reales (niños y docentes), despliegue en producción estable, captura de métricas cuantitativas en tiempo real y arquitectura PWA resiliente."
  },
  {
    id: "mach-contadores",
    title: "MACH Contadores",
    categoryLabel: "Cliente Real • En Producción",
    badgeType: "production",
    tagline: "Sistema integral de gestión de clientes, expedientes fiscales y cédulas de facturación para despacho contable.",
    image: "images/mach-contadores.png",
    liveUrl: null,
    githubUrl: null,
    statusBadge: "En Producción Real • Cliente Comercial",
    tags: ["PHP 8", "MySQL Relacional", "Vanilla JavaScript", "CSS3 Modular", "Apache WAMP"],
    highlights: [
      { label: "Base de Datos", desc: "9 tablas normalizadas con claves foráneas e integridad referencial estricta." },
      { label: "Seguridad Integral", desc: "Autenticación RBAC, control de sesiones y verificación por correo con tokens numéricos." },
      { label: "Rendimiento Liviano", desc: "Cero dependencias externas; carga instantánea en equipos de oficina estándar." }
    ],
    challenge: "El despacho contable operaba con expedientes físicos dispersos y hojas de cálculo desvinculadas, provocando retrasos en el seguimiento de obligaciones tributarias ante el SAT, riesgo de pérdida de historial y falta de trazabilidad en las modificaciones realizadas por el personal.",
    solution: "Se diseñó y construyó un sistema web centralizado con arquitectura monolítica limpia en PHP y MySQL. Integra control de acceso basado en roles (Administradores y Clientes), verificación de correo por códigos numéricos temporales, módulo de cédula de facturación, panel de notificaciones en tiempo real y bitácora de historial de modificaciones para auditoría.",
    technicalFeatures: [
      "Esquema relacional en MySQL: tablas dedicadas a administradores, clientes, datos fiscales, sesiones activas, historial de cambios y notificaciones.",
      "Backend modular en PHP: controladores independientes para autenticación, gestión de expedientes y API de notificaciones en formato JSON.",
      "Frontend reactivo con Vanilla JS: formularios validados en cliente antes de envío, modales asíncronos y peticiones con Fetch API sin recargas completas de pantalla.",
      "Medidas de seguridad activas: sanitización contra inyecciones SQL, control estricto de sesiones y protección de rutas mediante .htaccess en Apache."
    ],
    evaluatorNotes: "Acredita capacidad demostrada para interactuar con clientes del mundo real, capturar requerimientos contables/fiscales, estructurar bases de datos relacionales sin inconsistencias y desplegar software estable en un entorno de producción diario."
  },
  {
    id: "studia",
    title: "StudIA",
    categoryLabel: "Inteligencia Artificial & EdTech",
    badgeType: "ai",
    tagline: "Plataforma de estudio asistida por IA con generación estructurada de guías, sesiones de práctica y analítica.",
    image: "images/studia.png",
    liveUrl: "https://lemonchiffon-leopard-884511.hostingersite.com",
    githubUrl: null,
    statusBadge: "Demo Pública en Hostinger",
    tags: ["PHP POO", "OpenAI API", "MySQL Relacional", "JavaScript ES6+", "Arquitectura Modular"],
    highlights: [
      { label: "Capa de IA Desacoplada", desc: "Interfaces (AIProviderInterface) con OpenAIService y estrategias de prompt." },
      { label: "Base de Datos Completa", desc: "Materias, guías generadas, sesiones interactivas y métricas acumuladas." },
      { label: "API REST Rigurosa", desc: "Manejo HTTP con JsonResponse, buffers limpios y validación de métodos." }
    ],
    challenge: "Los estudiantes enfrentan dificultades para estructurar material de estudio extenso en evaluaciones prácticas que midan con precisión qué temas dominan y en cuáles presentan vacíos conceptuales.",
    solution: "Se arquitectó una plataforma web en PHP moderno que consume modelos de Inteligencia Artificial para generar guías pedagógicas dinámicas y cuestionarios adaptativos. Las sesiones de práctica registran cada respuesta en base de datos, calculando métricas acumuladas y curvas de retención por materia.",
    technicalFeatures: [
      "Desacoplamiento arquitectónico mediante Contracts: AIProviderInterface y PromptStrategyInterface para facilitar la sustitución o extensión de proveedores de IA.",
      "Capa de transporte HTTP limpia: clase JsonResponse con limpieza de buffers (ob_end_clean), encabezados anti-caché y control de métodos POST estrictos.",
      "Modelo relacional completo en MySQL: tablas para materias, guías estructuradas, sesiones de práctica, eventos de evaluación y notas personales.",
      "Interfaz frontend asíncrona que consume la API REST interna y sincroniza el progreso del estudiante en tiempo real."
    ],
    evaluatorNotes: "Demuestra comprensión avanzada de principios de ingeniería de software (SOLID, inversión de dependencias), integración robusta de APIs de IA generativa y diseño de APIs REST limpias en PHP."
  },
  {
    id: "organizador-personal",
    title: "Organizador Personal SPA",
    categoryLabel: "Single Page Application",
    badgeType: "tool",
    tagline: "Aplicación SPA de gestión personal con backend REST en PHP, persistencia MySQL PDO y seguimiento de rachas.",
    image: "images/planificador.png",
    liveUrl: "https://teal-butterfly-279512.hostingersite.com",
    githubUrl: null,
    statusBadge: "Demo Pública en Hostinger",
    tags: ["PHP (PDO)", "JavaScript SPA", "MySQL", "API REST", "Pomodoro Timer"],
    highlights: [
      { label: "Arquitectura SPA", desc: "Navegación y persistencia completa sin una sola recarga de página." },
      { label: "Modelos POO Limpios", desc: "User, Task, Habit, HabitLog y Pomodoro desacoplados en backend." },
      { label: "Seguridad en Servidor", desc: "Estructura preparada para producción con protección .htaccess en subdirectorios." }
    ],
    challenge: "Las aplicaciones comerciales de productividad sufren de sobrecarga de funciones (feature creep), lentitud en conexiones inestables y sincronizaciones en la nube que interfieren con la concentración inmediata.",
    solution: "Se construyó una Single Page Application (SPA) ultra rápida con JavaScript Vanilla en el cliente que interactúa con endpoints REST en PHP puro. Permite organizar tareas por prioridad, mantener rachas diarias de hábitos y ejecutar temporizadores Pomodoro integrados.",
    technicalFeatures: [
      "Backend REST estructurado con arquitectura MVC ligera: enrutador central, manejo de sesiones y conexión PDO segura en config/database.php.",
      "Modelos de dominio independientes (User, Task, Habit, HabitLog, Pomodoro) para asegurar código limpio y mantenible.",
      "Frontend SPA nativo: manipulación dinámica del DOM con JavaScript ES6+, cero recargas y feedback visual instantáneo.",
      "Reglas de protección .htaccess en cada subdirectorio backend para impedir el acceso directo a scripts y bases de datos sensibles."
    ],
    evaluatorNotes: "Confirma la capacidad de estructurar aplicaciones completas desde cero, aplicando principios de diseño REST, modelado relacional e interfaces SPA nativas de alta velocidad de respuesta."
  },
  {
    id: "chromind",
    title: "Chromind",
    categoryLabel: "PWA Canvas & Psicometría • Open Source",
    badgeType: "data",
    tagline: "PWA de dibujo infantil con motor de análisis de trazos, mapa espacial 3x3 y radar emocional pentagonal.",
    image: "images/chromind.png",
    liveUrl: "https://jesusvilladev.github.io/Chromind.github.io/",
    githubUrl: "https://github.com/JesusVillaDev/Chromind.github.io",
    statusBadge: "Open Source en GitHub Pages",
    tags: ["HTML5 Canvas API", "JavaScript Matemático", "PWA Offline", "GitHub Pages", "Visualización Radar"],
    highlights: [
      { label: "Motor Canvas Nativo", desc: "Dibujo fluido con cálculo de ritmo, velocidad, grosor y cobertura de trazo." },
      { label: "Radar Pentagonal 5D", desc: "Visualización vectorial de Vitalidad, Calma, Expresividad, Concentración y Afecto." },
      { label: "Mapa Espacial 3x3", desc: "Cuadrícula matemática que cuantifica la actividad por cuadrantes en el lienzo." }
    ],
    challenge: "El análisis de dibujos infantiles proporciona información valiosa sobre el estado de ánimo, pero interpretar parámetros como presión, distribución del lienzo y paleta cromática requería observación manual especializada.",
    solution: "Se creó una PWA interactiva sobre Canvas que permite a niños dibujar libremente y, al finalizar, computa algoritmos matemáticos para desglosar porcentajes de color, velocidad de trazo y concentración espacial, generando reportes visuales accesibles para padres y tutores.",
    technicalFeatures: [
      "Manipulación avanzada del elemento Canvas en JavaScript para trazo anti-aliased y captura de coordenadas de evento a alta tasa de muestreo.",
      "Algoritmo de análisis cromático: cálculo de densidad de píxeles para generar barras de desglose porcentual por color usado.",
      "Matriz espacial 3x3 que cuantifica la actividad en cuadrantes superiores (imaginación), centrales (yo interior) e inferiores.",
      "Gráfico de radar pentagonal vectorial dibujado dinámicamente sin librerías externas para mapear las 5 dimensiones emocionales.",
      "Despliegue directo y abierto en GitHub Pages para acceso libre."
    ],
    evaluatorNotes: "Muestra destreza en programación gráfica en el navegador con la Canvas API, matemáticas de coordenadas en 2D y creación de componentes de visualización visual sin bibliotecas pesadas."
  },
  {
    id: "git-tracker",
    title: "Git Tracker",
    categoryLabel: "Herramienta de Ingeniería Dev",
    badgeType: "tool",
    tagline: "Visualizador topológico interactivo para repositorios Git locales con detección en tiempo real y grafo DAG.",
    image: "images/git-tracker.png",
    liveUrl: null,
    githubUrl: null,
    statusBadge: "Tool de Desarrollo Local",
    tags: ["JavaScript Canvas", "Git CLI / Plumbing", "PHP Backend", "Caché JSON SHA", "UI/UX Drag-to-Pan"],
    highlights: [
      { label: "Tiempo Real", desc: "Detección instantánea de cambios en HEAD sin extensiones ni recargas." },
      { label: "Latencia Mínima", desc: "Caché inteligente JSON autolimpiable con respuestas en menos de 100ms." },
      { label: "Multi-Repositorio", desc: "Escaneo dinámico de repositorios Git alojados en el servidor local." }
    ],
    challenge: "Analizar el historial de ramas, bifurcaciones y fusiones en repositorios locales mediante la consola puede resultar confuso y poco intuitivo cuando se trabaja en proyectos con múltiples ramas simultáneas.",
    solution: "Se construyó un explorador topológico autónomo que inspecciona la estructura interna de Git (objetos commit, referencias y HEAD) para renderizar un grafo dirigido acíclico (DAG) interactivo con soporte de arrastre (drag-to-pan) y navegación fluida por trackpad.",
    technicalFeatures: [
      "Lectura y parseo de comandos plumbing de Git para reconstruir el historial topológico exacto.",
      "Sistema de caché por hash SHA en archivos .cache*.json: si se detectan commits nuevos, la caché se invalida y regenera en milisegundos.",
      "Explorador multi-repositorio: escanea el directorio raíz del servidor local y permite alternar entre proyectos desde un selector unificado.",
      "Diseño UI/UX sin elementos intrusivos: barras de desplazamiento ocultas, iconografía consistente y sistema de notificaciones toast propio."
    ],
    evaluatorNotes: "Prueba la pasión por el funcionamiento interno del software: manipulación de grafos topológicos, optimización de lectura de disco mediante caché y creación de herramientas que mejoran el flujo de trabajo del desarrollador."
  },
  {
    id: "servidor-local",
    title: "Servidor Local AirDrop",
    categoryLabel: "Herramienta de Red Local • PHP & Canvas",
    badgeType: "tool",
    tagline: "Hub de transferencia de archivos inalámbrica de alta velocidad entre móvil y PC en red local con preprocesamiento Canvas.",
    image: "images/servidor-local.png",
    liveUrl: null,
    githubUrl: null,
    statusBadge: "Tool de Red Local Wi-Fi",
    tags: ["PHP 8", "Vanilla JavaScript", "HTML5 Canvas API", "AJAX / XHR Upload", "Red Local Wi-Fi"],
    highlights: [
      { label: "Transferencia Ultrarrápida", desc: "Envío directo en red local privada sin internet ni servidores externos, completando subidas en menos de 0.2s." },
      { label: "Compresión Canvas en Cliente", desc: "Reescalado y optimización en el navegador móvil antes del envío para reducir drásticamente el peso de payload." },
      { label: "Sandbox de Archivos Seguro", desc: "Defensa contra Directory Traversal con validación realpath(), nombrado determinista y navegación de carpetas." }
    ],
    challenge: "Transferir fotos, capturas y archivos de prueba entre dispositivos móviles (iOS/Android) y una computadora de desarrollo en red local suele depender de cables, aplicaciones de mensajería que comprimen agresivamente o nubes externas que ralentizan el flujo de trabajo.",
    solution: "Se concibió y desarrolló un hub de transferencia local ultrarrápido y autónomo estilo AirDrop. Corre en servidor local PHP/WAMP con una interfaz móvil optimizada, pipeline de optimización de imágenes en cliente con Canvas y barra de progreso asíncrona mediante XMLHttpRequest.",
    technicalFeatures: [
      "Pipeline de optimización gráfica en cliente: redimensión proporcional (máx. 1920px) y compresión JPEG al 85% en memoria vía Canvas toBlob() antes del envío.",
      "Seguridad de sistema de archivos: validación rigurosa de rutas con realpath() y str_starts_with() para impedir escape del directorio raíz.",
      "Monitorización de subida en tiempo real: eventos xhr.upload.onprogress calculando porcentaje exacto y velocidad de transferencia.",
      "Gestor de archivos y subdirectorios: navegación de árbol jerárquico, cálculo dinámico de tamaños, previsualización de medios y borrado seguro por AJAX sin recargas.",
      "Arquitectura minimalista zero-dependency: un único script PHP/JS que resuelve el caso de uso sin frameworks pesados ni dependencias externas."
    ],
    evaluatorNotes: "Acredita capacidad para resolver fricciones reales de productividad con soluciones de software eficientes: dominio de APIs gráficas del navegador (Canvas), manejo seguro de I/O de archivos en backend y diseño web mobile-first."
  }
];

// Certificaciones y credenciales académicas
const CREDENTIALS_DATA = [
  {
    title: "Fundamentos de Machine Learning",
    issuer: "Wizeline • Google Day",
    year: "Google Day",
    badge: "Taller Técnico",
    desc: "Capacitación intensiva impartida por ingenieros de Wizeline durante el evento Google Day, abordando fundamentos de Machine Learning, pipelines de datos y modelos predictivos aplicados."
  },
  {
    title: "Cloud Computing",
    issuer: "IBM SkillsBuild",
    year: "2026",
    badge: "IBM Verificado",
    desc: "Modelos de servicio en la nube (IaaS, PaaS, SaaS), despliegue escalable y arquitecturas seguras."
  },
  {
    title: "Desarrollo Web",
    issuer: "IBM SkillsBuild",
    year: "2026",
    badge: "IBM Verificado",
    desc: "Estándares web de la W3C, protocolos HTTP/HTTPS, arquitectura cliente-servidor y frontend interactivo."
  },
  {
    title: "Control de Versiones con Git",
    issuer: "IBM SkillsBuild",
    year: "2026",
    badge: "IBM Verificado",
    desc: "Gestión avanzada de ramas, flujos colaborativos GitFlow, rebase y resolución de conflictos."
  },
  {
    title: "AWS Cloud Foundations",
    issuer: "Amazon Web Services",
    year: "2026",
    badge: "AWS Verificado",
    desc: "Fundamentos de infraestructura en la nube AWS: cómputo EC2, almacenamiento S3, redes y seguridad."
  },
  {
    title: "Cursos MOOC Especializados 2026",
    issuer: "Tecnológico Nacional de México",
    year: "2026",
    badge: "TecNM Oficial",
    desc: "Formación académica continua en competencias de ingeniería computacional y desarrollo tecnológico."
  }
];
