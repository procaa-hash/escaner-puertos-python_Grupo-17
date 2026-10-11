'use strict';

/* =========================================================
   Rocelcode Innovations — traducción ES <-> EN
   Diccionario plano por clave + aplicación sobre atributos
   data-i18n / data-i18n-placeholder / data-i18n-aria / data-i18n-title.
   ========================================================= */

const ROCELCODE_TRANSLATIONS = {
  es: {
    'a11y.skipLink': 'Saltar al contenido principal',

    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.process': 'Proceso',
    'nav.projects': 'Proyectos',
    'nav.team': 'Equipo',
    'nav.contact': 'Contacto',
    'nav.cta': 'Cotiza tu proyecto',
    'nav.openMenu': 'Abrir menú',

    'theme.aria': 'Cambiar tema',
    'theme.title': 'Cambiar tema claro/oscuro',

    'hero.eyebrow': 'Guayaquil, Ecuador · Software con propósito',
    'hero.title': 'Construimos <span class="text-gradient">inteligencia digital</span><br>que impulsa tu negocio',
    'hero.sub':
      'En <strong>Rocelcode Innovations</strong> diseñamos productos digitales con enfoque estratégico: ' +
      'investigación, experiencia de usuario y mejora continua para convertir tus ideas en soluciones claras, ' +
      'escalables y funcionales.',
    'hero.ctaPrimary': 'Hablemos de tu proyecto',
    'hero.ctaSecondary': 'Ver servicios',
    'hero.terminalAria': 'Terminal de código animado',

    'stats.sectionLabel': 'Estadísticas',
    'stats.service': 'Líneas de servicio',
    'stats.custom': 'Enfoque a medida',
    'stats.production': 'Soluciones en producción',
    'stats.vision': 'Visión del producto',

    'services.tag': '// Servicios',
    'services.title': 'Soluciones digitales de extremo a extremo',
    'services.desc': 'Desde una idea inicial hasta un producto en producción, cubrimos cada etapa del ciclo de vida del software.',
    'services.web.title': 'Desarrollo Web',
    'services.web.desc': 'Sitios y aplicaciones web rápidas, accesibles y modernas, construidas con las mejores prácticas del mercado.',
    'services.enterprise.title': 'Sistemas Empresariales',
    'services.enterprise.desc': 'Plataformas robustas para gestionar procesos internos, inventarios, ventas y operaciones de tu empresa.',
    'services.custom.title': 'Software a Medida',
    'services.custom.desc': 'Productos diseñados desde cero para resolver exactamente el problema y la necesidad real de tu negocio.',
    'services.automation.title': 'Automatización',
    'services.automation.desc': 'Optimizamos flujos de trabajo repetitivos para que tu equipo enfoque su tiempo en lo que realmente importa.',
    'services.ai.title': 'Soluciones con IA',
    'services.ai.desc': 'Integramos inteligencia artificial como una capa funcional real del producto, no como un añadido superficial.',
    'services.cta.title': '¿Tienes otra idea en mente?',
    'services.cta.desc': 'Cuéntanos tu desafío y diseñemos juntos la solución adecuada.',
    'services.cta.btn': 'Conversemos',

    'about.tag': '// Nosotros',
    'about.title': 'Software con propósito y claridad funcional',
    'about.desc':
      'En Rocelcode Innovations diseñamos productos digitales con un enfoque estratégico: investigación, ' +
      'experiencia de usuario y mejora continua para crear soluciones que generan valor real. Nuestra visión es ' +
      'construir un ecosistema donde la inteligencia digital sea una capa funcional integrada a la evolución del ' +
      'software, no un añadido superficial.',
    'about.mission.title': 'Misión',
    'about.mission.desc': 'Convertir ideas y procesos en soluciones digitales claras, escalables y alineadas a las necesidades reales de cada cliente.',
    'about.vision.title': 'Visión',
    'about.vision.desc': 'Ser un referente en innovación e inteligencia digital, construyendo software que evoluciona junto a los negocios que lo usan.',
    'about.value1.title': 'Investigación primero',
    'about.value1.desc': 'Entendemos el problema antes de escribir una línea de código.',
    'about.value2.title': 'Experiencia de usuario',
    'about.value2.desc': 'Cada producto se diseña pensando en quién lo va a usar todos los días.',
    'about.value3.title': 'Mejora continua',
    'about.value3.desc': 'El software evoluciona: iteramos con datos reales, no con suposiciones.',
    'about.value4.title': 'Funcionalidad clara',
    'about.value4.desc': 'Nada de complejidad innecesaria: cada función tiene un propósito.',

    'process.tag': '// Cómo trabajamos',
    'process.title': 'Un proceso simple, de la idea al producto',
    'process.step1.title': 'Descubrimiento',
    'process.step1.desc': 'Escuchamos tu idea o problema y analizamos el contexto real del negocio.',
    'process.step2.title': 'Diseño &amp; Arquitectura',
    'process.step2.desc': 'Definimos la solución, la experiencia de usuario y la arquitectura técnica.',
    'process.step3.title': 'Desarrollo',
    'process.step3.desc': 'Construimos el producto en ciclos cortos, con entregas visibles y medibles.',
    'process.step4.title': 'Lanzamiento',
    'process.step4.desc': 'Desplegamos, probamos en condiciones reales y afinamos el rendimiento.',
    'process.step5.title': 'Evolución',
    'process.step5.desc': 'Damos seguimiento, iteramos y hacemos crecer el producto contigo.',

    'projects.tag': '// Proyectos',
    'projects.title': 'Ideas convertidas en productos',
    'projects.desc': 'Una muestra del tipo de soluciones que diseñamos para nuestros clientes.',
    'projects.p1.tag': 'Web · Sistema empresarial',
    'projects.p1.title': 'Plataforma de gestión interna',
    'projects.p1.desc': 'Panel a medida para automatizar inventario, ventas y reportes en tiempo real.',
    'projects.p2.tag': 'Automatización · IA',
    'projects.p2.title': 'Flujo de automatización inteligente',
    'projects.p2.desc': 'Reducción de tareas manuales mediante procesos automatizados y soporte de IA.',
    'projects.p3.tag': 'Software a medida',
    'projects.p3.title': 'Producto digital a medida',
    'projects.p3.desc': 'Solución diseñada desde cero para un flujo de trabajo específico del cliente.',

    'team.tag': '// Equipo',
    'team.title': 'Las personas detrás de Rocelcode',
    'team.founder.role': 'Fundador &amp; CEO · Rocelcode Innovations',
    'team.founder.bio':
      'Pedro Roca lidera Rocelcode Innovations con una visión clara: construir software que resuelve problemas ' +
      'reales y evoluciona junto a los negocios que lo adoptan. Su enfoque combina investigación, arquitectura ' +
      'sólida y una obsesión por la experiencia de usuario, impulsando el desarrollo de soluciones web, sistemas ' +
      'empresariales y productos potenciados con inteligencia artificial.',
    'team.founder.note':
      '* Perfil público limitado disponible en línea — verifica y completa esta biografía con los datos ' +
      'oficiales de Pedro Roca antes de publicar el sitio.',
    'team.founder.contactBtn': 'Contactar al equipo',

    'testimonials.tag': '// Testimonios',
    'testimonials.title': 'Lo que dicen de trabajar con nosotros',
    'testimonials.t1.quote': '“Convirtieron un proceso manual y lento en un sistema automatizado que nos ahorra horas cada semana.”',
    'testimonials.t1.author': '— Cliente, Retail',
    'testimonials.t2.quote': '“El equipo entendió nuestro negocio antes de escribir código. El resultado fue exactamente lo que necesitábamos.”',
    'testimonials.t2.author': '— Cliente, Servicios',
    'testimonials.t3.quote': '“Un software a medida que realmente evoluciona con nosotros. Excelente soporte y comunicación.”',
    'testimonials.t3.author': '— Cliente, Logística',

    'cta.title': '¿Listo para construir tu próxima solución digital?',
    'cta.desc': 'Cuéntanos tu idea y te ayudamos a convertirla en software real.',
    'cta.btn': 'Empezar ahora',

    'contact.tag': '// Contacto',
    'contact.title': 'Hablemos de tu proyecto',
    'contact.desc': 'Escríbenos y te responderemos a la brevedad. También puedes encontrarnos aquí:',
    'contact.hours': 'Lunes a viernes · 08:00 – 18:00',

    'form.nameLabel': 'Nombre',
    'form.namePlaceholder': 'Tu nombre',
    'form.emailLabel': 'Correo electrónico',
    'form.serviceLabel': 'Servicio de interés',
    'form.optionEnterprise': 'Sistema Empresarial',
    'form.optionOther': 'Otro',
    'form.messageLabel': 'Cuéntanos tu proyecto',
    'form.messagePlaceholder': 'Describe brevemente tu idea o necesidad…',
    'form.submit': 'Enviar mensaje',

    'footer.tagline': 'Software, innovación e inteligencia digital. Guayaquil, Ecuador.',
    'footer.companyHeading': 'Empresa',
    'footer.servicesHeading': 'Servicios',
    'footer.contactHeading': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.backToTop': 'Volver arriba',
    'footer.navAria': 'Enlaces del pie de página',

    'assistant.launcherAria': 'Abrir asistente virtual de Rocelcode',
    'assistant.panelAria': 'Asistente virtual de Rocelcode Innovations',
    'assistant.title': 'Asistente Rocelcode',
    'assistant.status': 'En línea · respuesta instantánea',
    'assistant.closeAria': 'Cerrar asistente',
    'assistant.logAria': 'Conversación con el asistente',
    'assistant.quick1': '¿Qué servicios ofrecen?',
    'assistant.quick2': '¿Cómo es el proceso?',
    'assistant.quick3': 'Quiero cotizar un proyecto',
    'assistant.quick4': '¿Hacen soluciones con IA?',
    'assistant.inputAria': 'Escribe tu mensaje para el asistente',
    'assistant.inputPlaceholder': 'Escribe tu pregunta…',
    'assistant.sendAria': 'Enviar mensaje',
    'assistant.disclaimer': 'Respuestas automáticas de demostración — para hablar con el equipo, usa el <a href="#contacto">formulario de contacto</a>.',
  },

  en: {
    'a11y.skipLink': 'Skip to main content',

    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.process': 'Process',
    'nav.projects': 'Projects',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.cta': 'Get a quote',
    'nav.openMenu': 'Open menu',

    'theme.aria': 'Switch theme',
    'theme.title': 'Switch light/dark theme',

    'hero.eyebrow': 'Guayaquil, Ecuador · Software with purpose',
    'hero.title': 'We build <span class="text-gradient">digital intelligence</span><br>that powers your business',
    'hero.sub':
      'At <strong>Rocelcode Innovations</strong> we design digital products with a strategic approach: research, ' +
      'user experience and continuous improvement to turn your ideas into clear, scalable, functional solutions.',
    'hero.ctaPrimary': "Let's talk about your project",
    'hero.ctaSecondary': 'View services',
    'hero.terminalAria': 'Animated code terminal',

    'stats.sectionLabel': 'Stats',
    'stats.service': 'Service lines',
    'stats.custom': 'Tailor-made focus',
    'stats.production': 'Solutions in production',
    'stats.vision': 'Product vision',

    'services.tag': '// Services',
    'services.title': 'End-to-end digital solutions',
    'services.desc': 'From an initial idea to a product in production, we cover every stage of the software lifecycle.',
    'services.web.title': 'Web Development',
    'services.web.desc': 'Fast, accessible, modern websites and web apps, built with market best practices.',
    'services.enterprise.title': 'Enterprise Systems',
    'services.enterprise.desc': "Robust platforms to manage your company's internal processes, inventory, sales and operations.",
    'services.custom.title': 'Custom Software',
    'services.custom.desc': "Products designed from scratch to solve your business's exact problem and real need.",
    'services.automation.title': 'Automation',
    'services.automation.desc': 'We streamline repetitive workflows so your team can focus on what really matters.',
    'services.ai.title': 'AI Solutions',
    'services.ai.desc': 'We integrate artificial intelligence as a real functional layer of the product, not a superficial add-on.',
    'services.cta.title': 'Have another idea in mind?',
    'services.cta.desc': "Tell us your challenge and let's design the right solution together.",
    'services.cta.btn': "Let's talk",

    'about.tag': '// About us',
    'about.title': 'Software with purpose and functional clarity',
    'about.desc':
      'At Rocelcode Innovations we design digital products with a strategic approach: research, user experience ' +
      'and continuous improvement to create solutions that generate real value. Our vision is to build an ' +
      'ecosystem where digital intelligence is a functional layer integrated into the evolution of software, ' +
      'not a superficial add-on.',
    'about.mission.title': 'Mission',
    'about.mission.desc': "Turn ideas and processes into clear, scalable digital solutions aligned to each client's real needs.",
    'about.vision.title': 'Vision',
    'about.vision.desc': 'To be a reference in innovation and digital intelligence, building software that evolves alongside the businesses that use it.',
    'about.value1.title': 'Research first',
    'about.value1.desc': 'We understand the problem before writing a single line of code.',
    'about.value2.title': 'User experience',
    'about.value2.desc': 'Every product is designed with the people who use it every day in mind.',
    'about.value3.title': 'Continuous improvement',
    'about.value3.desc': 'Software evolves: we iterate on real data, not assumptions.',
    'about.value4.title': 'Clear functionality',
    'about.value4.desc': 'No unnecessary complexity: every feature has a purpose.',

    'process.tag': '// How we work',
    'process.title': 'A simple process, from idea to product',
    'process.step1.title': 'Discovery',
    'process.step1.desc': "We listen to your idea or problem and analyze the business's real context.",
    'process.step2.title': 'Design &amp; Architecture',
    'process.step2.desc': 'We define the solution, the user experience and the technical architecture.',
    'process.step3.title': 'Development',
    'process.step3.desc': 'We build the product in short cycles, with visible, measurable deliveries.',
    'process.step4.title': 'Launch',
    'process.step4.desc': 'We deploy, test under real conditions and fine-tune performance.',
    'process.step5.title': 'Evolution',
    'process.step5.desc': 'We follow up, iterate and grow the product together with you.',

    'projects.tag': '// Projects',
    'projects.title': 'Ideas turned into products',
    'projects.desc': 'A sample of the kinds of solutions we design for our clients.',
    'projects.p1.tag': 'Web · Enterprise system',
    'projects.p1.title': 'Internal management platform',
    'projects.p1.desc': 'A custom dashboard to automate inventory, sales and real-time reporting.',
    'projects.p2.tag': 'Automation · AI',
    'projects.p2.title': 'Smart automation workflow',
    'projects.p2.desc': 'Reducing manual tasks through automated processes with AI support.',
    'projects.p3.tag': 'Custom software',
    'projects.p3.title': 'Custom digital product',
    'projects.p3.desc': "Solution designed from scratch for a client's specific workflow.",

    'team.tag': '// Team',
    'team.title': 'The people behind Rocelcode',
    'team.founder.role': 'Founder &amp; CEO · Rocelcode Innovations',
    'team.founder.bio':
      'Pedro Roca leads Rocelcode Innovations with a clear vision: building software that solves real problems ' +
      'and evolves alongside the businesses that adopt it. His approach combines research, solid architecture ' +
      'and an obsession with user experience, driving the development of web solutions, enterprise systems and ' +
      'AI-powered products.',
    'team.founder.note':
      '* Limited public profile available online — please verify and complete this bio with official details ' +
      'about Pedro Roca before publishing the site.',
    'team.founder.contactBtn': 'Contact the team',

    'testimonials.tag': '// Testimonials',
    'testimonials.title': 'What people say about working with us',
    'testimonials.t1.quote': '"They turned a slow, manual process into an automated system that saves us hours every week."',
    'testimonials.t1.author': '— Client, Retail',
    'testimonials.t2.quote': '"The team understood our business before writing any code. The result was exactly what we needed."',
    'testimonials.t2.author': '— Client, Services',
    'testimonials.t3.quote': '"Custom software that truly evolves with us. Excellent support and communication."',
    'testimonials.t3.author': '— Client, Logistics',

    'cta.title': 'Ready to build your next digital solution?',
    'cta.desc': "Tell us your idea and we'll help turn it into real software.",
    'cta.btn': 'Get started',

    'contact.tag': '// Contact',
    'contact.title': "Let's talk about your project",
    'contact.desc': "Write to us and we'll get back to you shortly. You can also find us here:",
    'contact.hours': 'Monday to Friday · 08:00 – 18:00',

    'form.nameLabel': 'Name',
    'form.namePlaceholder': 'Your name',
    'form.emailLabel': 'Email',
    'form.serviceLabel': 'Service of interest',
    'form.optionEnterprise': 'Enterprise System',
    'form.optionOther': 'Other',
    'form.messageLabel': 'Tell us about your project',
    'form.messagePlaceholder': 'Briefly describe your idea or need…',
    'form.submit': 'Send message',

    'footer.tagline': 'Software, innovation and digital intelligence. Guayaquil, Ecuador.',
    'footer.companyHeading': 'Company',
    'footer.servicesHeading': 'Services',
    'footer.contactHeading': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.backToTop': 'Back to top',
    'footer.navAria': 'Footer links',

    'assistant.launcherAria': "Open Rocelcode's virtual assistant",
    'assistant.panelAria': 'Rocelcode Innovations virtual assistant',
    'assistant.title': 'Rocelcode Assistant',
    'assistant.status': 'Online · instant reply',
    'assistant.closeAria': 'Close assistant',
    'assistant.logAria': 'Conversation with the assistant',
    'assistant.quick1': 'What services do you offer?',
    'assistant.quick2': "What's the process like?",
    'assistant.quick3': 'I want a project quote',
    'assistant.quick4': 'Do you build AI solutions?',
    'assistant.inputAria': 'Type your message for the assistant',
    'assistant.inputPlaceholder': 'Type your question…',
    'assistant.sendAria': 'Send message',
    'assistant.disclaimer': 'Automated demo replies — to talk to the team, use the <a href="#contacto">contact form</a>.',
  },
};

const ROCELCODE_LANG_STORAGE_KEY = 'rocelcode-lang';
let rocelcodeCurrentLang = 'es';

function rocelcodeTranslate(key, lang) {
  const dict = ROCELCODE_TRANSLATIONS[lang] || ROCELCODE_TRANSLATIONS.es;
  return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : null;
}

function getRocelcodeLang() {
  return rocelcodeCurrentLang;
}

function applyRocelcodeTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = rocelcodeTranslate(el.getAttribute('data-i18n'), lang);
    if (value != null) el.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const value = rocelcodeTranslate(el.getAttribute('data-i18n-placeholder'), lang);
    if (value != null) el.setAttribute('placeholder', value);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const value = rocelcodeTranslate(el.getAttribute('data-i18n-aria'), lang);
    if (value != null) el.setAttribute('aria-label', value);
  });

  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const value = rocelcodeTranslate(el.getAttribute('data-i18n-title'), lang);
    if (value != null) el.setAttribute('title', value);
  });

  document.documentElement.lang = lang;
}

function setRocelcodeLang(lang, { persist = true } = {}) {
  if (lang !== 'es' && lang !== 'en') return;
  rocelcodeCurrentLang = lang;
  applyRocelcodeTranslations(lang);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  if (persist) {
    try { localStorage.setItem(ROCELCODE_LANG_STORAGE_KEY, lang); } catch { /* ignore */ }
  }

  document.dispatchEvent(new CustomEvent('rocelcode:langchange', { detail: { lang } }));
}

function initRocelcodeI18n() {
  let initialLang = 'es';
  try {
    const stored = localStorage.getItem(ROCELCODE_LANG_STORAGE_KEY);
    if (stored === 'es' || stored === 'en') {
      initialLang = stored;
    } else if (navigator.language && navigator.language.toLowerCase().startsWith('en')) {
      initialLang = 'en';
    }
  } catch {
    if (navigator.language && navigator.language.toLowerCase().startsWith('en')) initialLang = 'en';
  }

  setRocelcodeLang(initialLang, { persist: false });

  document.getElementById('langToggle')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (!btn) return;
    setRocelcodeLang(btn.dataset.lang);
  });
}

document.addEventListener('DOMContentLoaded', initRocelcodeI18n);
