import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.testimonials': 'Testimonials',
    'nav.talkToMe': 'Get Started Now',

    // Hero
    'hero.badge': 'Building Powerful Web Applications',
    'hero.title1': 'Code that',
    'hero.title2': 'transforms',
    'hero.titleItalic': 'Ideas',
    'hero.description': 'Full stack developer specializing in React, Next.js, and Node.js. Turning complex problems into elegant, scalable solutions.',
    'hero.getStarted': 'Get Started Now',
    'hero.seeProjects': 'See Projects',
    'hero.scrollDown': 'Scroll down',
    'hero.toSeeProjects': 'to see projects',
    'hero.greeting': 'Hello, I am',
    'hero.role': 'Full Stack Developer',
    'hero.viewProjects': 'View Projects',
    'hero.contact': 'Contact',
    'hero.viewPortfolio': 'View Portfolio',

    // About
    'about.title': 'Meet Agatha',
    'about.bio': "I'm Agatha, a passionate Full Stack Developer based in Brazil. I specialize in building modern web applications with React, Next.js, and Node.js, blending clean code with scalable architecture to deliver real results.",
    'about.skill1': 'Full Stack Development',
    'about.skill2': 'React & Next.js',
    'about.skill3': 'Node.js & APIs',
    'about.skill4': 'TypeScript',
    'about.skill5': 'Database Design',
    'about.tool1': 'VS Code',
    'about.tool2': 'Docker',
    'about.exp1.type': 'Freelance',
    'about.exp1.role': 'Full Stack Developer',
    'about.exp1.company': 'Nuvem Digital',
    'about.exp1.period': 'Currently',
    'about.exp2.company': 'Appify',
    'about.exp2.period': '2023-24',
    'about.exp3.role': 'Frontend Developer',
    'about.exp3.company': 'SyncLab',
    'about.exp3.period': '2020-22',
    'about.recentWorks': 'Recent Works',

    // Skills
    'skills.title': 'Skills',
    'skills.subtitle': 'Technologies and tools I master to create complete solutions',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.devopsTools': 'DevOps & Tools',
    'skills.alsoWorkWith': 'I also work with:',

    // Services
    'services.label': 'in Development services',
    'services.title': 'What I Build',
    'services.description': 'Transforming ideas into powerful web applications with clean code, scalable architecture, and exceptional performance.',
    'services.fullstack.title': 'Full Stack Development',
    'services.fullstack.description': 'Building complete web applications from scratch using React, Next.js, and Node.js — delivering scalable, performant solutions that drive real business value.',
    'services.backend.title': 'Backend & APIs',
    'services.backend.description': 'Architecting robust RESTful APIs and backend systems with Node.js, Express, and databases — ensuring secure, efficient data flow and seamless integrations.',
    'services.frontend.title': 'Frontend Development',
    'services.frontend.description': 'Creating modern, responsive interfaces with React and Next.js — focusing on user experience, performance optimization, and clean, maintainable code.',
    'services.performance.title': 'Performance & Optimization',
    'services.performance.description': 'Optimizing applications for speed and efficiency — implementing best practices, code splitting, caching strategies, and performance monitoring.',
    'services.bookCall': 'Book a Free Call',
    'services.seeProjects': 'See Projects',
    'services.webApps': 'Web Applications',
    'services.apiDev': 'API Development',
    'services.frontendReact': 'Frontend React/Next.js',
    'services.backendNode': 'Backend Node.js',
    'services.dbDesign': 'Database Design',

    // Projects
    'projects.label': 'Recent Works',
    'projects.title': 'Featured Projects',
    'projects.deskly.title': 'Deskly',
    'projects.deskly.description': 'Complete customer support platform that scales with your team. Manage tickets, automate workflows, and keep every customer happy — all from one beautiful platform.',
    'projects.deskly.tech': 'React, Node.js, PostgreSQL, Socket.io',
    'projects.replai.title': 'Replai',
    'projects.replai.description': 'Landing page for an AI-powered customer support platform with chatbot automation, converting visitors into leads with a modern, high-performance design.',
    'projects.replai.tech': 'Next.js, Tailwind CSS, TypeScript',
    'projects.helpcenter.title': 'Help Center CMS',
    'projects.helpcenter.description': 'Knowledge base and help center with CMS, admin panel for content management, article categories, and integrated search.',
    'projects.helpcenter.tech': 'React, Node.js, MongoDB, REST API',
    'projects.crmdashboard.title': 'CRM Dashboard',
    'projects.crmdashboard.description': 'Full-featured CRM dashboard with revenue tracking, sales pipeline, deal stages, lead conversion analytics, and real-time activity monitoring.',
    'projects.crmdashboard.tech': 'React, Node.js, PostgreSQL, Chart.js',
    'projects.realestate.title': 'Real Estate Website',
    'projects.realestate.description': 'Property listing platform for a real estate agency, with advanced filters, image galleries, contact forms, and admin dashboard.',
    'projects.realestate.tech': 'React, Node.js, PostgreSQL, Maps API',

    // Testimonials
    'testimonials.label': 'in Reviews',
    'testimonials.title': 'Client Feedback',
    'testimonials.description': 'Real feedback from clients who trusted my development expertise to build powerful web applications that drive results.',
    'testimonials.bookCall': 'Book a Free Call',
    'testimonials.seeServices': 'See Services',
    'testimonials.1.role': 'CEO at Nuvem Digital',
    'testimonials.1.text': 'Delivered our landing page and admin panel in 3 weeks. Clean code, responsive, zero bugs on launch. Already planning the next project with her.',
    'testimonials.2.role': 'Product Lead at Appify',
    'testimonials.2.text': 'Great communication throughout the project. The React dashboard she built handles all our data smoothly. Integration phase took a bit longer than expected, but the final result was solid.',
    'testimonials.3.role': 'Founder, SyncLab',
    'testimonials.3.text': "Best freelance dev I've hired so far. She refactored our whole API and page load went from 4s to under 1s. Knows exactly what she's doing.",
    'testimonials.4.role': 'CTO at PayFlow',
    'testimonials.4.text': 'Solid full-stack work on our payment platform. Suggested architectural improvements that actually made a difference. Would hire again for complex projects.',
    'testimonials.stats.delivered': 'web applications delivered',
    'testimonials.stats.satisfaction': 'Client satisfaction rate',
    'testimonials.stats.experience': 'Years coding experience',

    // Contact
    'contact.getInTouch': 'Get in Touch',
    'contact.title': "Let's Work Together?",
    'contact.subtitle': "I'm always open to new projects and opportunities. Get in touch!",
    'contact.infoTitle': 'Contact Information',
    'contact.emailLabel': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.followMe': 'Follow me',
    'contact.availableTitle': 'Available for Freelance',
    'contact.availableText': "I'm accepting freelance projects and consulting. If you have an idea or project in mind, I'd love to talk about how I can help!",
    'contact.formTitle': 'Send a Message',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell me about your project...',
    'contact.send': 'Send Message',
    'contact.successMessage': 'Message sent successfully! (Demo)',

    // Footer
    'footer.allRights': 'Agatha Selbach. All rights reserved.',
  },
  pt: {
    // Navbar
    'nav.services': 'Serviços',
    'nav.projects': 'Projetos',
    'nav.testimonials': 'Depoimentos',
    'nav.talkToMe': 'Comece Agora',

    // Hero
    'hero.badge': 'Construindo Aplicações Web Poderosas',
    'hero.title1': 'Código que',
    'hero.title2': 'transforma',
    'hero.titleItalic': 'Ideias',
    'hero.description': 'Desenvolvedora full stack especializada em React, Next.js e Node.js. Transformando problemas complexos em soluções elegantes e escaláveis.',
    'hero.getStarted': 'Comece Agora',
    'hero.seeProjects': 'Ver Projetos',
    'hero.scrollDown': 'Role para baixo',
    'hero.toSeeProjects': 'para ver projetos',
    'hero.greeting': 'Olá, eu sou',
    'hero.role': 'Desenvolvedora Full Stack',
    'hero.viewProjects': 'Ver Projetos',
    'hero.contact': 'Contato',
    'hero.viewPortfolio': 'Ver Portfólio',

    // About
    'about.title': 'Conheça Agatha',
    'about.bio': 'Sou a Agatha, uma desenvolvedora Full Stack apaixonada por tecnologia, baseada no Brasil. Especializada em construir aplicações web modernas com React, Next.js e Node.js, unindo código limpo e arquitetura escalável para entregar resultados reais.',
    'about.skill1': 'Desenvolvimento Full Stack',
    'about.skill2': 'React & Next.js',
    'about.skill3': 'Node.js & APIs',
    'about.skill4': 'TypeScript',
    'about.skill5': 'Design de Banco de Dados',
    'about.tool1': 'VS Code',
    'about.tool2': 'Docker',
    'about.exp1.type': 'Freelance',
    'about.exp1.role': 'Desenvolvedora Full Stack',
    'about.exp1.company': 'Nuvem Digital',
    'about.exp1.period': 'Atualmente',
    'about.exp2.company': 'Appify',
    'about.exp2.period': '2023-24',
    'about.exp3.role': 'Desenvolvedora Frontend',
    'about.exp3.company': 'SyncLab',
    'about.exp3.period': '2020-22',
    'about.recentWorks': 'Trabalhos Recentes',

    // Skills
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Tecnologias e ferramentas que domino para criar soluções completas',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.devopsTools': 'DevOps & Ferramentas',
    'skills.alsoWorkWith': 'Também trabalho com:',

    // Services
    'services.label': 'em Serviços de Desenvolvimento',
    'services.title': 'O Que Eu Construo',
    'services.description': 'Transformando ideias em aplicações web poderosas com código limpo, arquitetura escalável e performance excepcional.',
    'services.fullstack.title': 'Desenvolvimento Full Stack',
    'services.fullstack.description': 'Construindo aplicações web completas do zero usando React, Next.js e Node.js — entregando soluções escaláveis e performáticas que geram valor real para o negócio.',
    'services.backend.title': 'Backend & APIs',
    'services.backend.description': 'Arquitetando APIs RESTful robustas e sistemas backend com Node.js, Express e bancos de dados — garantindo fluxo de dados seguro, eficiente e integrações perfeitas.',
    'services.frontend.title': 'Desenvolvimento Frontend',
    'services.frontend.description': 'Criando interfaces modernas e responsivas com React e Next.js — focando em experiência do usuário, otimização de performance e código limpo e manutenível.',
    'services.performance.title': 'Performance & Otimização',
    'services.performance.description': 'Otimizando aplicações para velocidade e eficiência — implementando boas práticas, code splitting, estratégias de cache e monitoramento de performance.',
    'services.bookCall': 'Agende uma Chamada',
    'services.seeProjects': 'Ver Projetos',
    'services.webApps': 'Aplicações Web',
    'services.apiDev': 'Desenvolvimento de APIs',
    'services.frontendReact': 'Frontend React/Next.js',
    'services.backendNode': 'Backend Node.js',
    'services.dbDesign': 'Design de Banco de Dados',

    // Projects
    'projects.label': 'Trabalhos Recentes',
    'projects.title': 'Projetos em Destaque',
    'projects.deskly.title': 'Deskly',
    'projects.deskly.description': 'Plataforma completa de suporte ao cliente que escala com seu time. Gerencie tickets, automatize workflows e mantenha cada cliente satisfeito — tudo em uma plataforma única.',
    'projects.deskly.tech': 'React, Node.js, PostgreSQL, Socket.io',
    'projects.replai.title': 'Replai',
    'projects.replai.description': 'Landing page para plataforma de atendimento ao cliente com automação por chatbot, convertendo visitantes em leads com design moderno e alta performance.',
    'projects.replai.tech': 'Next.js, Tailwind CSS, TypeScript',
    'projects.helpcenter.title': 'Central de Ajuda CMS',
    'projects.helpcenter.description': 'Base de conhecimento e central de ajuda com CMS, painel admin para gestão de conteúdo, categorias de artigos e busca integrada.',
    'projects.helpcenter.tech': 'React, Node.js, MongoDB, REST API',
    'projects.crmdashboard.title': 'CRM Dashboard',
    'projects.crmdashboard.description': 'Dashboard CRM completo com acompanhamento de receita, pipeline de vendas, estágios de deals, analytics de conversão de leads e monitoramento de atividades em tempo real.',
    'projects.crmdashboard.tech': 'React, Node.js, PostgreSQL, Chart.js',
    'projects.realestate.title': 'Site Imobiliária',
    'projects.realestate.description': 'Plataforma de listagem de imóveis para imobiliária, com filtros avançados, galerias de imagens, formulários de contato e dashboard admin.',
    'projects.realestate.tech': 'React, Node.js, PostgreSQL, Maps API',

    // Testimonials
    'testimonials.label': 'em Avaliações',
    'testimonials.title': 'Feedback de Clientes',
    'testimonials.description': 'Feedback real de clientes que confiaram na minha expertise em desenvolvimento para construir aplicações web poderosas que geram resultados.',
    'testimonials.bookCall': 'Agende uma Chamada',
    'testimonials.seeServices': 'Ver Serviços',
    'testimonials.1.role': 'CEO na Nuvem Digital',
    'testimonials.1.text': 'Entregou nossa landing page e painel admin em 3 semanas. Código limpo, responsivo, zero bugs no lançamento. Já estamos planejando o próximo projeto com ela.',
    'testimonials.2.role': 'Líder de Produto na Appify',
    'testimonials.2.text': 'Ótima comunicação durante todo o projeto. O dashboard React que ela construiu lida com todos os nossos dados sem problemas. A fase de integração demorou um pouco mais do que o esperado, mas o resultado final foi sólido.',
    'testimonials.3.role': 'Fundador, SyncLab',
    'testimonials.3.text': 'Melhor dev freelancer que já contratei. Ela refatorou toda nossa API e o carregamento da página caiu de 4s para menos de 1s. Sabe exatamente o que está fazendo.',
    'testimonials.4.role': 'CTO na PayFlow',
    'testimonials.4.text': 'Trabalho full-stack sólido na nossa plataforma de pagamentos. Sugeriu melhorias arquiteturais que realmente fizeram diferença. Contrataria novamente para projetos complexos.',
    'testimonials.stats.delivered': 'aplicações web entregues',
    'testimonials.stats.satisfaction': 'Taxa de satisfação dos clientes',
    'testimonials.stats.experience': 'Anos de experiência em código',

    // Contact
    'contact.getInTouch': 'Entre em Contato',
    'contact.title': 'Vamos Trabalhar Juntos?',
    'contact.subtitle': 'Estou sempre aberta a novos projetos e oportunidades. Entre em contato!',
    'contact.infoTitle': 'Informações de Contato',
    'contact.emailLabel': 'Email',
    'contact.phone': 'Telefone',
    'contact.location': 'Localização',
    'contact.followMe': 'Me siga',
    'contact.availableTitle': 'Disponível para Freelance',
    'contact.availableText': 'Estou aceitando projetos freelance e consultorias. Se você tem uma ideia ou projeto em mente, adoraria conversar sobre como posso ajudar!',
    'contact.formTitle': 'Envie uma Mensagem',
    'contact.name': 'Nome',
    'contact.namePlaceholder': 'Seu nome',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'seu@email.com',
    'contact.message': 'Mensagem',
    'contact.messagePlaceholder': 'Conte-me sobre seu projeto...',
    'contact.send': 'Enviar Mensagem',
    'contact.successMessage': 'Mensagem enviada com sucesso! (Demo)',

    // Footer
    'footer.allRights': 'Agatha Selbach. Todos os direitos reservados.',
  },
  es: {
    // Navbar
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.testimonials': 'Testimonios',
    'nav.talkToMe': 'Comienza Ahora',

    // Hero
    'hero.badge': 'Construyendo Aplicaciones Web Poderosas',
    'hero.title1': 'Código que',
    'hero.title2': 'transforma',
    'hero.titleItalic': 'Ideas',
    'hero.description': 'Desarrolladora full stack especializada en React, Next.js y Node.js. Transformando problemas complejos en soluciones elegantes y escalables.',
    'hero.getStarted': 'Comienza Ahora',
    'hero.seeProjects': 'Ver Proyectos',
    'hero.scrollDown': 'Desplázate hacia abajo',
    'hero.toSeeProjects': 'para ver proyectos',
    'hero.greeting': 'Hola, soy',
    'hero.role': 'Desarrolladora Full Stack',
    'hero.viewProjects': 'Ver Proyectos',
    'hero.contact': 'Contacto',
    'hero.viewPortfolio': 'Ver Portafolio',

    // About
    'about.title': 'Conoce a Agatha',
    'about.bio': 'Soy Agatha, una desarrolladora Full Stack apasionada por la tecnología, basada en Brasil. Especializada en construir aplicaciones web modernas con React, Next.js y Node.js, combinando código limpio y arquitectura escalable para entregar resultados reales.',
    'about.skill1': 'Desarrollo Full Stack',
    'about.skill2': 'React & Next.js',
    'about.skill3': 'Node.js & APIs',
    'about.skill4': 'TypeScript',
    'about.skill5': 'Diseño de Base de Datos',
    'about.tool1': 'VS Code',
    'about.tool2': 'Docker',
    'about.exp1.type': 'Freelance',
    'about.exp1.role': 'Desarrolladora Full Stack',
    'about.exp1.company': 'Nuvem Digital',
    'about.exp1.period': 'Actualmente',
    'about.exp2.company': 'Appify',
    'about.exp2.period': '2023-24',
    'about.exp3.role': 'Desarrolladora Frontend',
    'about.exp3.company': 'SyncLab',
    'about.exp3.period': '2020-22',
    'about.recentWorks': 'Trabajos Recientes',

    // Skills
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Tecnologías y herramientas que domino para crear soluciones completas',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.devopsTools': 'DevOps y Herramientas',
    'skills.alsoWorkWith': 'También trabajo con:',

    // Services
    'services.label': 'en Servicios de Desarrollo',
    'services.title': 'Lo Que Construyo',
    'services.description': 'Transformando ideas en aplicaciones web poderosas con código limpio, arquitectura escalable y rendimiento excepcional.',
    'services.fullstack.title': 'Desarrollo Full Stack',
    'services.fullstack.description': 'Construyendo aplicaciones web completas desde cero usando React, Next.js y Node.js — entregando soluciones escalables y de alto rendimiento que generan valor real para el negocio.',
    'services.backend.title': 'Backend & APIs',
    'services.backend.description': 'Arquitectando APIs RESTful robustas y sistemas backend con Node.js, Express y bases de datos — garantizando flujo de datos seguro, eficiente e integraciones perfectas.',
    'services.frontend.title': 'Desarrollo Frontend',
    'services.frontend.description': 'Creando interfaces modernas y responsivas con React y Next.js — enfocándose en experiencia de usuario, optimización de rendimiento y código limpio y mantenible.',
    'services.performance.title': 'Rendimiento & Optimización',
    'services.performance.description': 'Optimizando aplicaciones para velocidad y eficiencia — implementando mejores prácticas, code splitting, estrategias de caché y monitoreo de rendimiento.',
    'services.bookCall': 'Agenda una Llamada',
    'services.seeProjects': 'Ver Proyectos',
    'services.webApps': 'Aplicaciones Web',
    'services.apiDev': 'Desarrollo de APIs',
    'services.frontendReact': 'Frontend React/Next.js',
    'services.backendNode': 'Backend Node.js',
    'services.dbDesign': 'Diseño de Base de Datos',

    // Projects
    'projects.label': 'Trabajos Recientes',
    'projects.title': 'Proyectos Destacados',
    'projects.deskly.title': 'Deskly',
    'projects.deskly.description': 'Plataforma completa de soporte al cliente que escala con tu equipo. Gestiona tickets, automatiza workflows y mantén a cada cliente satisfecho — todo desde una hermosa plataforma.',
    'projects.deskly.tech': 'React, Node.js, PostgreSQL, Socket.io',
    'projects.replai.title': 'Replai',
    'projects.replai.description': 'Landing page para plataforma de atención al cliente con automatización por chatbot, convirtiendo visitantes en leads con diseño moderno y alto rendimiento.',
    'projects.replai.tech': 'Next.js, Tailwind CSS, TypeScript',
    'projects.helpcenter.title': 'Centro de Ayuda CMS',
    'projects.helpcenter.description': 'Base de conocimiento y centro de ayuda con CMS, panel admin para gestión de contenido, categorías de artículos y búsqueda integrada.',
    'projects.helpcenter.tech': 'React, Node.js, MongoDB, REST API',
    'projects.crmdashboard.title': 'CRM Dashboard',
    'projects.crmdashboard.description': 'Dashboard CRM completo con seguimiento de ingresos, pipeline de ventas, etapas de deals, analytics de conversión de leads y monitoreo de actividades en tiempo real.',
    'projects.crmdashboard.tech': 'React, Node.js, PostgreSQL, Chart.js',
    'projects.realestate.title': 'Sitio Inmobiliaria',
    'projects.realestate.description': 'Plataforma de listado de propiedades para inmobiliaria, con filtros avanzados, galerías de imágenes, formularios de contacto y dashboard admin.',
    'projects.realestate.tech': 'React, Node.js, PostgreSQL, Maps API',

    // Testimonials
    'testimonials.label': 'en Reseñas',
    'testimonials.title': 'Opiniones de Clientes',
    'testimonials.description': 'Opiniones reales de clientes que confiaron en mi experiencia en desarrollo para construir aplicaciones web poderosas que generan resultados.',
    'testimonials.bookCall': 'Agenda una Llamada',
    'testimonials.seeServices': 'Ver Servicios',
    'testimonials.1.role': 'CEO en Nuvem Digital',
    'testimonials.1.text': 'Entregó nuestra landing page y panel admin en 3 semanas. Código limpio, responsivo, cero bugs en el lanzamiento. Ya estamos planeando el próximo proyecto con ella.',
    'testimonials.2.role': 'Líder de Producto en Appify',
    'testimonials.2.text': 'Excelente comunicación durante todo el proyecto. El dashboard React que construyó maneja todos nuestros datos sin problemas. La fase de integración tardó un poco más de lo esperado, pero el resultado final fue sólido.',
    'testimonials.3.role': 'Fundador, SyncLab',
    'testimonials.3.text': 'La mejor dev freelance que he contratado. Refactorizó toda nuestra API y la carga de página bajó de 4s a menos de 1s. Sabe exactamente lo que hace.',
    'testimonials.4.role': 'CTO en PayFlow',
    'testimonials.4.text': 'Trabajo full-stack sólido en nuestra plataforma de pagos. Sugirió mejoras arquitectónicas que realmente hicieron la diferencia. Contrataría de nuevo para proyectos complejos.',
    'testimonials.stats.delivered': 'aplicaciones web entregadas',
    'testimonials.stats.satisfaction': 'Tasa de satisfacción de clientes',
    'testimonials.stats.experience': 'Años de experiencia en código',

    // Contact
    'contact.getInTouch': 'Ponte en Contacto',
    'contact.title': '¿Trabajemos Juntos?',
    'contact.subtitle': '¡Siempre estoy abierta a nuevos proyectos y oportunidades. Ponte en contacto!',
    'contact.infoTitle': 'Información de Contacto',
    'contact.emailLabel': 'Email',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación',
    'contact.followMe': 'Sígueme',
    'contact.availableTitle': 'Disponible para Freelance',
    'contact.availableText': 'Estoy aceptando proyectos freelance y consultorías. Si tienes una idea o proyecto en mente, ¡me encantaría hablar sobre cómo puedo ayudar!',
    'contact.formTitle': 'Enviar un Mensaje',
    'contact.name': 'Nombre',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'tu@email.com',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': 'Cuéntame sobre tu proyecto...',
    'contact.send': 'Enviar Mensaje',
    'contact.successMessage': '¡Mensaje enviado con éxito! (Demo)',

    // Footer
    'footer.allRights': 'Agatha Selbach. Todos los derechos reservados.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const lang = translations[language] as Record<string, string>;
    return lang[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
