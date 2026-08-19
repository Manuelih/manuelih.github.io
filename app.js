/* =========================================================================
   Emanuele "Manuelih" — Portfolio
   Motore vanilla JS condiviso da tutte le pagine: header, menu mobile,
   reveal on scroll, skill bar, FAQ accordion, filtro progetti, form
   contatti (mailto), i18n IT/EN. Zero librerie esterne.
   ========================================================================= */

(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------------
     Header scroll state + mobile menu
     --------------------------------------------------------------------- */
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      menuToggle.classList.toggle('open', open);
      menuToggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('lock-scroll', open);
    });
    mobileNav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuToggle.classList.remove('open');
        document.body.classList.remove('lock-scroll');
      });
    });
  }

  /* ---------------------------------------------------------------------
     Scroll reveal
     --------------------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  function animateSkillBars() {
    document.querySelectorAll('.skill-bar-fill[data-value]').forEach((bar) => {
      requestAnimationFrame(() => { bar.style.width = bar.dataset.value + '%'; });
    });
  }
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
          if (entry.target.id === 'skills') animateSkillBars();
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in-view'));
    animateSkillBars();
  }

  /* ---------------------------------------------------------------------
     FAQ accordion
     --------------------------------------------------------------------- */
  document.querySelectorAll('.faq-q').forEach((q) => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const wasActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item.active').forEach((el) => el.classList.remove('active'));
      if (!wasActive) item.classList.add('active');
    });
  });

  /* ---------------------------------------------------------------------
     Project category filter (progetti.html)
     --------------------------------------------------------------------- */
  const filterBar = document.querySelector('.filter-bar');
  if (filterBar) {
    const cards = document.querySelectorAll('.project-card[data-cats]');
    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      filterBar.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      cards.forEach((card) => {
        const cats = (card.dataset.cats || '').split(',');
        const show = cat === 'all' || cats.includes(cat);
        card.toggleAttribute('hidden', !show);
      });
    });
  }

  /* ---------------------------------------------------------------------
     Contact form — mailto (nessun backend richiesto)
     --------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('#cf-name').value.trim();
      const email = contactForm.querySelector('#cf-email').value.trim();
      const message = contactForm.querySelector('#cf-message').value.trim();
      const to = 'emanuele.piferioprivate@gmail.com';
      const subject = encodeURIComponent(`Portfolio — richiesta da ${name || 'un visitatore'}`);
      const body = encodeURIComponent(`${message}\n\n—\n${name} <${email}>`);
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      const status = document.getElementById('cf-status');
      if (status) {
        status.textContent = (window.TRANSLATIONS && window.TRANSLATIONS[currentLang] && window.TRANSLATIONS[currentLang]['contact.form.sent']) || '';
        status.classList.add('show', 'ok');
      }
    });
  }

  /* ---------------------------------------------------------------------
     i18n
     --------------------------------------------------------------------- */
  let currentLang = localStorage.getItem('preferredLang') || 'it';

  function setLanguage(lang) {
    if (!window.TRANSLATIONS || !window.TRANSLATIONS[lang]) return;
    currentLang = lang;
    localStorage.setItem('preferredLang', lang);
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = window.TRANSLATIONS[lang][key];
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    document.documentElement.lang = lang;
  }
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });
  setLanguage(currentLang);
})();
