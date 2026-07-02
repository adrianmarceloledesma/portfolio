export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto'
    },
    hero: {
      tag: '// portafolio',
      greeting: '¡Hola! Soy',
      role: 'Web Developer',
      scroll: 'scroll'
    },
    about: {
      label: '// sobre mi',
      title: 'Acerca de mí',
      bio: 'Me llamo Marcelo Ledesma, soy Desarrollador Web y vivo en Buenos Aires. Inicié mi camino en 2020 al formarme como Desarrollador Web Full Stack y, desde entonces, mantengo una sólida curiosidad por las nuevas tecnologías que me impulsa a evolucionar constantemente.\n\nCuento con experiencia en tecnologías front-end, gestión de contenidos y entornos e-learning. Durante mi trayectoria en UNIR, administré contenidos mediante HTML, CSS y el CMS Ibexa, colaborando estrechamente con equipos multidisciplinares para optimizar la experiencia del usuario final.\n\nAsimismo, la gestión y el soporte técnico en plataformas críticas como Moodle y Canvas consolidaron mi agilidad para resolver problemas bajo presión, actuando como un puente confiable entre la tecnología y las necesidades operativas.\n\nActualmente, potencio mis flujos de trabajo mediante la integración de herramientas de Inteligencia Artificial y automatizaciones, buscando elevar la calidad y velocidad de mis proyectos.'
    },
    experience: {
      label: '// experiencia',
      title: 'Experiencia laboral',
      items: [
        {
          id: 1,
          company: 'Universidad Internacional de La Rioja (UNIR)',
          role: 'Desarrollador de Contenido Web / Maquetador Web',
          period: 'Ago 2021 – Mar 2025',
          description: 'Transformación de contenido académico desde documentos Word a formatos web estructurados. Aplicación de HTML y CSS para garantizar diseños limpios y responsivos. Mantenimiento de contenido en plataformas CMS y LMS (Ibexa, Canvas, Moodle, LMS30, Sakai). Gestión de despliegues mediante herramientas FTP (Core, Cyberduck). Uso de Jira para seguimiento de tareas y resolución de incidencias.',
          technologies: ['HTML', 'CSS', 'Ibexa CMS', 'Canvas', 'Moodle', 'FTP', 'Jira'],
        },
      ]
    },
    skills: {
      label: '// habilidades',
      title: 'Tecnologias y herramientas'
    },
    projects: {
      label: '// proyectos',
      title: 'Portfolio',
      items: [
        {
          id: 4,
          description: 'Sitio web profesional para servicios de corrección, transcripción y normalización de textos'
        },
        {
          id: 1,
          description: 'Aplicación Todo con persistencia en localStorage para guardar tus tareas.'
        },
        {
          id: 2,
          description: 'Divertido juego de trivia para poner a prueba tus conocimientos.'
        },
        {
          id: 3,
          description: 'Chatbot con IA que responde preguntas históricas con precisión y humor.'
        },
      ]
    },

    contact: {
      label: '// contacto',
      title: 'Hablemos',
      intro: 'Estoy siempre abierto a nuevos proyectos, ideas creativas y oportunidades de colaboracion.'
    },
    footer: {
      nav: 'Navegacion',
      contact: 'Contacto'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      tag: '// portfolio',
      greeting: "Hello! I'm",
      role: 'Web Developer',
      scroll: 'scroll'
    },
    about: {
      label: '// about me',
      title: 'About me',
      bio: "My name is Marcelo Ledesma, I'm a Web Developer and I live in Buenos Aires. I started my journey in 2020 training as a Full Stack Web Developer and, ever since, I've maintained a strong curiosity for new technologies that drives me to constantly evolve.\n\nI have experience in front-end technologies, content management, and e-learning environments. During my time at UNIR, I managed content using HTML, CSS, and the Ibexa CMS, working closely with multidisciplinary teams to optimize the end-user experience.\n\nFurthermore, managing and providing technical support for critical platforms like Moodle and Canvas strengthened my ability to solve problems under pressure, acting as a reliable bridge between technology and operational needs.\n\nCurrently, I enhance my workflows by integrating Artificial Intelligence tools and automations, seeking to elevate the quality and speed of my projects."
    },
    experience: {
      label: '// experience',
      title: 'Work Experience',
      items: [
        {
          id: 1,
          company: 'Universidad Internacional de La Rioja (UNIR)',
          role: 'Web Content Developer / Web Layout Designer',
          period: 'Aug 2021 – Mar 2025',
          description: 'Transformation of academic content from Word documents to structured web formats. Application of HTML and CSS to ensure clean and responsive designs. Content maintenance on CMS and LMS platforms (Ibexa, Canvas, Moodle, LMS30, Sakai). Deployment management using FTP tools (Core, Cyberduck). Use of Jira for task tracking and issue resolution.',
          technologies: ['HTML', 'CSS', 'Ibexa CMS', 'Canvas', 'Moodle', 'FTP', 'Jira'],
        },
      ]
    },
    skills: {
      label: '// skills',
      title: 'Technologies and tools'
    },
    projects: {
      label: '// projects',
      title: 'Portfolio',
      items: [
        {
          id: 4,
          description: 'Professional website for proofreading, transcription and text normalization services'
        },
        {
          id: 1,
          description: 'Todo application with localStorage persistence for data.'
        },
        {
          id: 2,
          description: 'Fun trivia game to test your knowledge.'
        },
        {
          id: 3,
          description: 'AI-powered chatbot that answers historical questions with accuracy and humor.'
        },
      ]
    },

    contact: {
      label: '// contact',
      title: "Let's talk",
      intro: "I'm always open to new projects, creative ideas, and collaboration opportunities."
    },
    footer: {
      nav: 'Navigation',
      contact: 'Contact'
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations['es'];
