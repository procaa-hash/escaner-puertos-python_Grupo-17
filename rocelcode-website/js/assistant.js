'use strict';

/* =========================================================
   Rocelcode Innovations — asistente virtual (demo front-end)
   Responde con reglas por palabra clave; no llama a ningún
   backend ni API externa. Pensado como punto de partida para
   conectar un proveedor de IA real más adelante.
   ========================================================= */

document.addEventListener('DOMContentLoaded', initAiAssistant);

function initAiAssistant() {
  const root = document.getElementById('aiAssistant');
  const launcher = document.getElementById('aiLauncher');
  const panel = document.getElementById('aiPanel');
  const closeBtn = document.getElementById('aiPanelClose');
  const messages = document.getElementById('aiMessages');
  const form = document.getElementById('aiForm');
  const input = document.getElementById('aiInput');
  const quickReplies = document.getElementById('aiQuickReplies');

  if (!root || !launcher || !panel || !form || !input || !messages) return;

  const I18N = {
    es: {
      greeting:
        '¡Hola! Soy el asistente virtual de <strong>Rocelcode Innovations</strong>. ' +
        'Puedo contarte sobre nuestros servicios, el proceso de trabajo o cómo contactarnos. ¿En qué te ayudo?',
      fallback:
        'No estoy seguro de haber entendido eso. Puedo ayudarte con información sobre ' +
        '<strong>servicios</strong>, <strong>precios</strong>, el <strong>proceso</strong> de trabajo o los ' +
        '<strong>datos de contacto</strong>. ¿Sobre cuál te gustaría saber más?',
      typingLabel: 'El asistente está escribiendo…',
      rules: [
        {
          keywords: ['hola', 'buenas', 'buenos dias', 'buenas tardes', 'buenas noches', 'hey'],
          reply: '¡Hola! ¿Te gustaría conocer nuestros servicios, el proceso de trabajo o cómo cotizar un proyecto?',
        },
        {
          keywords: ['servicio', 'servicios', 'ofrecen', 'hacen'],
          reply:
            'Ofrecemos <strong>Desarrollo Web</strong>, <strong>Sistemas Empresariales</strong>, ' +
            '<strong>Software a Medida</strong>, <strong>Automatización</strong> de procesos y ' +
            '<strong>Soluciones con IA</strong>. Puedes ver el detalle en la sección <a href="#servicios">Servicios</a>.',
        },
        {
          keywords: ['ia', 'inteligencia artificial', 'ai ', ' ai', 'machine learning', 'ml'],
          reply:
            'Sí, integramos inteligencia artificial como una capa funcional real del producto — automatización inteligente, ' +
            'análisis de datos y asistentes como este. Cuéntanos tu caso de uso en el <a href="#contacto">formulario de contacto</a>.',
        },
        {
          keywords: ['precio', 'costo', 'cuanto cuesta', 'cotiza', 'cotizar', 'presupuesto', 'tarifa'],
          reply:
            'Cada proyecto es distinto, así que el costo depende del alcance. Cuéntanos tu idea en el ' +
            '<a href="#contacto">formulario de contacto</a> y te preparamos una propuesta a medida.',
        },
        {
          keywords: ['proceso', 'metodologia', 'como trabajan', 'como funciona', 'pasos'],
          reply:
            'Trabajamos en 5 etapas: <strong>Descubrimiento</strong>, <strong>Diseño &amp; Arquitectura</strong>, ' +
            '<strong>Desarrollo</strong>, <strong>Lanzamiento</strong> y <strong>Evolución</strong>. ' +
            'Mira el detalle en la sección <a href="#proceso">Proceso</a>.',
        },
        {
          keywords: ['contacto', 'correo', 'email', 'telefono', 'whatsapp', 'hablar con alguien', 'humano', 'asesor'],
          reply:
            'Puedes escribirnos a <strong>contacto@rocelcode.com</strong> o por WhatsApp, de lunes a viernes de 08:00 a 18:00. ' +
            'También puedes dejar tu mensaje en el <a href="#contacto">formulario de contacto</a> y te respondemos a la brevedad.',
        },
        {
          keywords: ['ubicacion', 'donde estan', 'direccion', 'pais', 'ciudad'],
          reply: 'Estamos en <strong>Guayaquil, Ecuador</strong>, y trabajamos con clientes de forma remota también.',
        },
        {
          keywords: ['pedro', 'fundador', 'ceo', 'quien', 'equipo'],
          reply:
            '<strong>Pedro Roca</strong> es el Fundador &amp; CEO de Rocelcode Innovations. Puedes leer más en la sección ' +
            '<a href="#equipo">Equipo</a>.',
        },
        {
          keywords: ['gracias', 'genial', 'perfecto', 'excelente'],
          reply: '¡Con gusto! Si tienes otra pregunta, aquí estoy.',
        },
        {
          keywords: ['adios', 'chao', 'bye'],
          reply: '¡Hasta pronto! Recuerda que puedes volver a escribirme cuando quieras.',
        },
      ],
      quickReplyText: {
        servicios: '¿Qué servicios ofrecen?',
        proceso: '¿Cómo es el proceso de trabajo?',
        contacto: 'Quiero cotizar un proyecto',
        ia: '¿Hacen soluciones con inteligencia artificial?',
      },
    },
    en: {
      greeting:
        "Hi! I'm <strong>Rocelcode Innovations</strong>' virtual assistant. " +
        "I can tell you about our services, our work process, or how to reach us. How can I help?",
      fallback:
        "I'm not sure I understood that. I can help with information about " +
        '<strong>services</strong>, <strong>pricing</strong>, our <strong>process</strong>, or ' +
        '<strong>contact details</strong>. Which would you like to know more about?',
      typingLabel: 'The assistant is typing…',
      rules: [
        {
          keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'],
          reply: 'Hi there! Would you like to know about our services, our work process, or how to get a quote?',
        },
        {
          keywords: ['service', 'services', 'offer', 'do you build', 'do you do'],
          reply:
            'We offer <strong>Web Development</strong>, <strong>Enterprise Systems</strong>, ' +
            '<strong>Custom Software</strong>, process <strong>Automation</strong> and ' +
            '<strong>AI Solutions</strong>. See the details in the <a href="#servicios">Services</a> section.',
        },
        {
          keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml'],
          reply:
            'Yes, we integrate artificial intelligence as a real functional layer of the product — smart automation, ' +
            'data analysis and assistants like this one. Tell us your use case in the <a href="#contacto">contact form</a>.',
        },
        {
          keywords: ['price', 'cost', 'how much', 'quote', 'budget', 'rate', 'pricing'],
          reply:
            "Every project is different, so cost depends on scope. Tell us your idea in the " +
            "<a href=\"#contacto\">contact form</a> and we'll put together a tailored proposal.",
        },
        {
          keywords: ['process', 'methodology', 'how do you work', 'how does it work', 'steps'],
          reply:
            'We work in 5 stages: <strong>Discovery</strong>, <strong>Design &amp; Architecture</strong>, ' +
            '<strong>Development</strong>, <strong>Launch</strong> and <strong>Evolution</strong>. ' +
            'See the details in the <a href="#proceso">Process</a> section.',
        },
        {
          keywords: ['contact', 'email', 'phone', 'whatsapp', 'talk to someone', 'human', 'advisor'],
          reply:
            'You can write to us at <strong>contacto@rocelcode.com</strong> or on WhatsApp, Monday to Friday 08:00 to 18:00. ' +
            'You can also leave your message in the <a href="#contacto">contact form</a> and we will reply shortly.',
        },
        {
          keywords: ['location', 'where are you', 'address', 'country', 'city'],
          reply: "We're based in <strong>Guayaquil, Ecuador</strong>, and we also work with clients remotely.",
        },
        {
          keywords: ['pedro', 'founder', 'ceo', 'who', 'team'],
          reply:
            '<strong>Pedro Roca</strong> is the Founder &amp; CEO of Rocelcode Innovations. Read more in the ' +
            '<a href="#equipo">Team</a> section.',
        },
        {
          keywords: ['thanks', 'thank you', 'great', 'perfect', 'awesome'],
          reply: "You're welcome! If you have another question, I'm right here.",
        },
        {
          keywords: ['bye', 'goodbye', 'see you'],
          reply: 'See you soon! Feel free to come back and write to me anytime.',
        },
      ],
      quickReplyText: {
        servicios: 'What services do you offer?',
        proceso: "What's the work process like?",
        contacto: 'I want a project quote',
        ia: 'Do you build artificial intelligence solutions?',
      },
    },
  };

  function i18n() {
    const lang = typeof getRocelcodeLang === 'function' ? getRocelcodeLang() : 'es';
    return I18N[lang] || I18N.es;
  }

  let greeted = false;
  let open = false;

  function normalize(text) {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .trim();
  }

  function findReply(rawText) {
    const text = normalize(rawText);
    const dict = i18n();
    for (const rule of dict.rules) {
      if (rule.keywords.some((kw) => text.includes(kw))) return rule.reply;
    }
    return dict.fallback;
  }

  function appendMessage(text, who) {
    const bubble = document.createElement('div');
    bubble.className = `ai-msg ai-msg-${who}`;
    bubble.innerHTML = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
    return bubble;
  }

  function showTyping() {
    const typing = document.createElement('div');
    typing.className = 'ai-typing';
    typing.setAttribute('role', 'status');
    typing.innerHTML = `<span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span><span class="sr-only">${i18n().typingLabel}</span>`;
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;
    return typing;
  }

  function respondTo(userText) {
    appendMessage(escapeHtml(userText), 'user');
    input.value = '';

    const typing = showTyping();
    const delay = 500 + Math.random() * 500;

    setTimeout(() => {
      typing.remove();
      appendMessage(findReply(userText), 'bot');
    }, delay);
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function openPanel() {
    open = true;
    root.classList.add('open');
    launcher.setAttribute('aria-expanded', 'true');
    panel.setAttribute('aria-hidden', 'false');

    if (!greeted) {
      greeted = true;
      const typing = showTyping();
      setTimeout(() => {
        typing.remove();
        appendMessage(i18n().greeting, 'bot');
      }, 450);
    }

    setTimeout(() => input.focus(), 320);
  }

  function closePanel() {
    open = false;
    root.classList.remove('open');
    launcher.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
  }

  launcher.addEventListener('click', () => (open ? closePanel() : openPanel()));
  closeBtn?.addEventListener('click', closePanel);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && open) closePanel();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    respondTo(text);
  });

  quickReplies?.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-quick]');
    if (!btn) return;
    const key = btn.dataset.quick;
    const text = i18n().quickReplyText[key];
    if (text) respondTo(text);
  });
}
