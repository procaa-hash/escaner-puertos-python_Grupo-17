'use strict';

/* =========================================================
   Rocelcode Innovations — script.js
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initYear();
  initThemeToggle();
  initHeaderScroll();
  initProgressBar();
  initCursorGlow();
  initMobileNav();
  initSmoothAnchors();
  initRevealOnScroll();
  initCounters();
  initTypedTerminal();
  initHeroCanvas();
  initTestimonialSlider();
  initContactForm();
  initBackToTop();
});

/* ---------- Footer year ---------- */
function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- Theme toggle (persisted) ---------- */
function initThemeToggle() {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const stored = safeGet('rocelcode-theme');

  if (stored) {
    root.setAttribute('data-theme', stored);
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    root.setAttribute('data-theme', 'light');
  }

  toggle?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    safeSet('rocelcode-theme', next);
  });
}

function safeGet(key) { try { return localStorage.getItem(key); } catch { return null; } }
function safeSet(key, val) { try { localStorage.setItem(key, val); } catch { /* ignore */ } }

/* ---------- Header scrolled state ---------- */
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- Top scroll progress bar ---------- */
function initProgressBar() {
  const bar = document.getElementById('progressBar');
  if (!bar) return;
  const onScroll = () => {
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const height = h.scrollHeight - h.clientHeight;
    bar.style.width = height > 0 ? `${(scrolled / height) * 100}%` : '0%';
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- Cursor-follow glow (desktop only) ---------- */
function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow || window.matchMedia('(hover: none)').matches) return;
  window.addEventListener('pointermove', (e) => {
    glow.style.setProperty('--x', `${e.clientX}px`);
    glow.style.setProperty('--y', `${e.clientY}px`);
  }, { passive: true });
}

/* ---------- Mobile nav ---------- */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!hamburger || !links) return;

  const close = () => {
    hamburger.classList.remove('active');
    links.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  };

  hamburger.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

/* ---------- Smooth-scroll for in-page anchors (with header offset) ---------- */
function initSmoothAnchors() {
  const header = document.getElementById('header');
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = (header?.offsetHeight || 0) + 12;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ---------- Reveal-on-scroll ---------- */
function initRevealOnScroll() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('is-visible'), (i % 6) * 70);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  items.forEach((el) => observer.observe(el));
}

/* ---------- Animated stat counters ---------- */
function initCounters() {
  const counters = document.querySelectorAll('.stat-num');
  if (!counters.length || !('IntersectionObserver' in window)) return;

  const animate = (el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((c) => observer.observe(c));
}

/* ---------- Typed terminal effect ---------- */
function initTypedTerminal() {
  const el = document.getElementById('typedCode');
  if (!el) return;

  const lines = [
    '$ rocelcode init --idea "tu proyecto"',
    '> analizando necesidades del negocio...',
    '> diseñando arquitectura escalable...',
    '> integrando inteligencia artificial...',
    '✔ solución digital lista para producción',
  ];

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = lines.join('\n');
    return;
  }

  let lineIndex = 0;
  let charIndex = 0;
  let output = '';

  function type() {
    if (lineIndex >= lines.length) {
      setTimeout(() => { output = ''; lineIndex = 0; charIndex = 0; el.textContent = ''; type(); }, 2200);
      return;
    }
    const currentLine = lines[lineIndex];
    if (charIndex <= currentLine.length) {
      el.textContent = output + currentLine.slice(0, charIndex);
      charIndex++;
      setTimeout(type, 22 + Math.random() * 28);
    } else {
      output += currentLine + '\n';
      lineIndex++;
      charIndex = 0;
      setTimeout(type, 380);
    }
  }
  type();
}

/* ---------- Hero canvas: animated node network ---------- */
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let width, height, dpr;
  let nodes = [];
  const NODE_COUNT = 46;
  const LINK_DIST = 130;

  function resize() {
    const hero = canvas.parentElement;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = hero.clientWidth;
    height = hero.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function makeNodes() {
    nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    nodes.forEach((n) => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          ctx.strokeStyle = `rgba(124, 92, 255, ${0.14 * (1 - dist / LINK_DIST)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach((n) => {
      ctx.fillStyle = 'rgba(34, 211, 238, 0.55)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    });

    if (!reduceMotion) requestAnimationFrame(step);
  }

  resize();
  makeNodes();
  step();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { resize(); makeNodes(); if (reduceMotion) step(); }, 200);
  });
}

/* ---------- Testimonial slider ---------- */
function initTestimonialSlider() {
  const track = document.getElementById('testimonialTrack');
  const dotsWrap = document.getElementById('testimonialDots');
  if (!track || !dotsWrap) return;

  const slides = Array.from(track.children);
  let index = 0;
  let timer;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Ir al testimonio ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  const dots = Array.from(dotsWrap.children);

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle('active', di === index));
  }

  function nextSlide() { goTo(index + 1); }

  function startAuto() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer = setInterval(nextSlide, 5000);
  }
  function stopAuto() { clearInterval(timer); }

  track.parentElement.addEventListener('mouseenter', stopAuto);
  track.parentElement.addEventListener('mouseleave', startAuto);

  startAuto();
}

/* ---------- Contact form validation + fake submit ---------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form || !status) return;

  const fields = {
    name: form.querySelector('#name'),
    email: form.querySelector('#email'),
    message: form.querySelector('#message'),
  };

  function setError(fieldName, message) {
    const input = fields[fieldName];
    const errorEl = form.querySelector(`[data-error-for="${fieldName}"]`);
    const wrap = input?.closest('.form-field');
    if (errorEl) errorEl.textContent = message || '';
    wrap?.classList.toggle('invalid', Boolean(message));
  }

  function validate() {
    let valid = true;

    if (!fields.name.value.trim()) {
      setError('name', 'Por favor ingresa tu nombre.');
      valid = false;
    } else {
      setError('name', '');
    }

    const emailVal = fields.email.value.trim();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal || !emailRe.test(emailVal)) {
      setError('email', 'Ingresa un correo electrónico válido.');
      valid = false;
    } else {
      setError('email', '');
    }

    if (!fields.message.value.trim() || fields.message.value.trim().length < 10) {
      setError('message', 'Cuéntanos un poco más sobre tu proyecto (mínimo 10 caracteres).');
      valid = false;
    } else {
      setError('message', '');
    }

    return valid;
  }

  Object.values(fields).forEach((input) => {
    input.addEventListener('blur', validate);
    input.addEventListener('input', () => {
      if (input.closest('.form-field')?.classList.contains('invalid')) validate();
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';
    status.className = 'form-status';

    if (!validate()) {
      status.textContent = 'Revisa los campos marcados antes de continuar.';
      status.classList.add('error');
      return;
    }

    form.classList.add('loading');
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;

    try {
      // Simulated submission — replace with a real endpoint when available.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      status.textContent = '¡Gracias! Tu mensaje fue enviado. Te responderemos pronto.';
      status.classList.add('success');
      form.reset();
    } catch {
      status.textContent = 'Ocurrió un error al enviar. Intenta nuevamente.';
      status.classList.add('error');
    } finally {
      form.classList.remove('loading');
      submitBtn.disabled = false;
    }
  });
}

/* ---------- Back to top ---------- */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
