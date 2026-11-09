(() => {
  'use strict';

  const CODE = [
    'package dev.mqnuu.portfolio;',
    '',
    'import java.time.Year;',
    'import java.util.List;',
    '',
    'public final class Developer {',
    '',
    '    private final String name = "Emanuele";',
    '    private final String alias = "mqnuu";',
    '    private final Year since = Year.of(2022);',
    '',
    '    private final List<String> stack = List.of(',
    '        "Java", "Kotlin", "Paper", "Velocity", "Fabric", "Forge", "Redis", "Lua"',
    '    );',
    '',
    '    // il server pieno non deve accorgersi del mio codice',
    '    public List<Service> services() {',
    '        return List.of(',
    '            new Service("core modulari", Scope.SERVER),',
    '            new Service("mod complete", Scope.CLIENT_AND_SERVER),',
    '            new Service("plugin su misura", Scope.SERVER),',
    '            new Service("ottimizzazione", Scope.PERFORMANCE)',
    '        );',
    '    }',
    '',
    '    public int yearsOfCode() {',
    '        return Year.now().getValue() - since.getValue();',
    '    }',
    '',
    '    public boolean isAvailable() {',
    '        return true;',
    '    }',
    '',
    '    public void ship(Project project) {',
    '        project.build();',
    '        project.test();',
    '        project.deploy();',
    '    }',
    '',
    '    public String contact() {',
    '        return "discord: @51wj";',
    '    }',
    '}'
  ];
  const TYPE_LINE = 15;

  const EN = {
    'nav.about': 'about', 'nav.work': 'what I do', 'nav.stack': 'stack', 'nav.path': 'journey', 'nav.contact': 'contact',
    'hero.status': 'open to new projects',
    'hero.lead': "I'm Emanuele, 20. I build cores, plugins and complete mods for Minecraft servers: systems made to hold up under load and to be maintained over time, not patches that break on the next update.",
    'hero.cta1': 'what I can build', 'hero.cta2': 'contact me',
    'stat.years': "years of code", 'stat.projects': 'projects shipped', 'stat.reply': 'to get a reply',
    'about.title': 'about me',
    'about.p1': "I started in 2022. At first a guy who already wrote plugins was guiding me; the rest I learned from YouTube videos and by testing everything on my own test server.",
    'about.p2': "The first plugin I finished was my own homemade Essentials: /gmc, /gms, /fly, /heal, /tp. Nothing special, but it worked and I wrote it. Then came the first jobs for friends' servers, and from there bigger and bigger systems: kits, economies, up to the full core of a prison server.",
    'about.p3': "Today I mostly work with roleplay servers: modular cores, custom plugins and Fabric and Forge mods. The best result is a full server where nobody notices my code, because it just works.",
    'about.l1': 'focus', 'about.l2': 'reply', 'about.l2v': 'within 24h', 'about.l3': 'languages',
    'work.title': 'what I do',
    'work.sub': 'I work for private servers and clients, so you won\'t find names here: you\'ll find what I can build for yours.',
    'w1.t': 'Modular cores',
    'w1.d': 'The foundation of the whole server: a core that handles database, cache, commands and messages, with every system in its own module. Add or update one piece without touching the rest.',
    'w1.a': 'Versioned internal APIs for every module', 'w1.b': 'Async database with caching, no lag on the main thread', 'w1.c': 'Networks with a Velocity proxy and multiple servers',
    'w2.t': 'Complete mod development',
    'w2.d': 'Fabric and Forge mods from idea to finished jar: content, GUIs, animated entities and client-server communication. Ready for your server\'s modpack, server-side where it matters.',
    'w2.a': 'Targeted mixins instead of fragile patches', 'w2.b': 'Networking with server-validated data', 'w2.c': 'Ports between game versions',
    'w3.t': 'Custom plugins and gameplay',
    'w3.d': 'Systems designed for your server: economies, jobs, roleplay and prison gamemodes, GUIs and commands. Configurable without recompiling and integrated with the plugins you already run.',
    'w3.a': 'Config and messages your staff can edit', 'w3.b': 'Integration with Vault, WorldGuard, LuckPerms, PlaceholderAPI', 'w3.c': 'Staff panels and moderation tools',
    'w4.t': 'Optimisation and performance',
    'w4.d': 'Server lagging and you don\'t know why? I measure it with a profiler, find what\'s heavy and fix it: queries moved off the main thread, caching, lighter ticks.',
    'w4.a': 'Lag breakdown by plugin and by method', 'w4.b': 'Rewrites of the parts that actually matter', 'w4.c': 'A clear report of what changed',
    'stack.title': 'stack', 'stack.sub': 'The tools I use every day, from the code to the running server.',
    'st.java': "plugins &amp; mods", 'st.paper': 'server &amp; proxy', 'st.mod': 'mixin, GeckoLib', 'st.db': "database",
    'st.cache': 'cache &amp; sync', 'st.build': "build", 'st.integ': 'integrations', 'st.ops': "VPS &amp; deploy",
    'path.title': 'journey',
    'tl.1w': 'today', 'tl.1t': "Developer at AtlantisRP", 'tl.1d': "Building for AtlantisRP, an Italian roleplay set in the Canaries. Alongside it I take freelance work: modular cores, custom plugins and mods.",
    'tl.2w': 'then', 'tl.2t': "The first mods", 'tl.2d': "I move to Fabric and Forge too: mixins, client-server packets, animated entities. A different world from plugins.",
    'tl.3w': 'next', 'tl.3t': "The first real core", 'tl.3d': "The core of a prison server: multiple currencies, rankup and prestige. First time with MySQL and async queries, and first time lag became my problem.",
    'tl.4w': 'start', 'tl.4t': "Jobs for other servers", 'tl.4d': "Kits, scoreboards, commands and small systems for friends' servers. This is where I learned to read logs and not crash anything.",
    'contact.title': 'contact',
    'contact.big': 'Got an idea for your server?<br><span class="red">Let\'s talk.</span>',
    'contact.sub': 'Tell me what you need, rough timing and budget. I usually reply the same day.',
    'contact.copy': 'copy',
    'tl.5t': "The first plugins",
    'tl.5d': "Guided by a guy and lots of YouTube videos. The first plugin replaced Essentials: /gmc, /gms, /fly, /heal.",
    'st.kotlin': "plugins &amp; apps",
    'st.redis': "cache &amp; sync",
    'st.lua': "scripting",
    'st.db2': "local data",
    'st.maven': "build",
    'st.git': "versioning",
    'st.github': "repos &amp; CI",
    'st.ide': "editor",
    'nav.now': "now",
    'now.title': "now",
    'now.role': "Developer · current",
    'now.d1': "I work as a developer at AtlantisRP, an Italian Minecraft roleplay server set in the Canary Islands.",
    'now.d2': "I'm part of the team building the server: I write modules and gameplay systems, test them and ship them to a community that's active every day.",
    'now.cap': "official AtlantisRP trailer",
    'foot': 'handwritten, no framework', 'foot.top': 'back to top ↑'
  };

  const UI = {
    it: { roles: ['Minecraft Developer', 'Core modulari', 'Mod Fabric & Forge', 'Plugin su misura', 'Ottimizzazione'] },
    en: { roles: ['Minecraft Developer', 'Modular cores', 'Fabric & Forge mods', 'Custom plugins', 'Optimisation'] }
  };


  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }
  };

  const IT = {};
  $$('[data-i18n]').forEach(el => { IT[el.dataset.i18n] = el.innerHTML; });

  let lang = store.get('lang') || (navigator.language || 'it').slice(0, 2);
  if (lang !== 'en') lang = 'it';


  function setLang(l) {
    lang = l;
    document.documentElement.lang = l;
    $$('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n;
      const v = l === 'en' ? EN[k] : IT[k];
      if (v != null) el.innerHTML = v;
    });
    $$('.lang span').forEach(s => s.classList.toggle('on', s.dataset.l === l));
    store.set('lang', l);
    restartTyping();
    runTerminal();
  }

  const P = '<span class="c-red">$</span> ';
  const kv = (k, v) => `<span class="c-key">${k}:</span> ${v}`;
  const SCRIPTS = l => {
    const it = l !== 'en';
    return [
      [
        { c: 'whoami' },
        { o: '<span class="c-dim">emanuele <span class="c-red">aka</span> mqnuu</span>' },
        { c: 'cat profile.yml' },
        { o: kv('role', 'minecraft developer') },
        { o: kv('main', 'Java 21 · Paper · Velocity') },
        { o: kv('mods', 'Fabric · Forge · Mixin') },
        { o: kv('based', it ? 'Italia' : 'Italy') }
      ],
      [
        { c: './gradlew shadowJar' },
        { o: '<span class="c-dim">&gt; Task :compileJava</span>', d: 520 },
        { o: '<span class="c-dim">&gt; Task :shadowJar</span>', d: 680 },
        { o: '<span class="c-ok">BUILD SUCCESSFUL</span> <span class="c-dim">in 4s</span>', d: 420 },
        { c: 'scp build/libs/core.jar vps:plugins/' },
        { o: '<span class="c-dim">core.jar</span>  <span class="bar" style="--w:100%"></span> 100%', d: 300, bar: true },
        { o: `<span class="c-ok">✓</span> ${it ? 'deploy fatto, riavvio non necessario' : 'deployed, no restart needed'}`, d: 450 }
      ],
      [
        { c: '/perf tps' },
        { o: kv('tps', '20.0 · 20.0 · 20.0') },
        { o: kv('mspt', '11.8 ms') },
        { c: '/perf profiler start --timeout 60' },
        { o: `<span class="c-dim">› ${it ? 'profiler avviato, report tra 60s' : 'profiler started, report in 60s'}</span>`, d: 300 },
        { o: `<span class="c-ok">✓</span> ${it ? 'report pronto' : 'report ready'}: <span class="c-key">r-7f3a91c2</span>`, d: 1600 }
      ]
    ];
  };

  let termRun = 0;
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  async function runTerminal() {
    const box = $('#term');
    if (!box) return;
    const id = ++termRun;
    const scripts = SCRIPTS(lang);
    const line = html => { const p = document.createElement('p'); p.innerHTML = html; box.appendChild(p); return p; };
    const prompt = () => line(P + '<span class="t"></span><span class="blink">▍</span>');
    if (reduce) {
      box.innerHTML = '';
      scripts[0].forEach(s => line(s.c ? P + s.c : s.o));
      prompt();
      return;
    }
    for (let n = 0; ; n = (n + 1) % scripts.length) {
      box.innerHTML = '';
      let cur = prompt();
      await sleep(n === 0 ? 500 : 700);
      for (const s of scripts[n]) {
        if (id !== termRun) return;
        if (s.c) {
          if (!cur) { cur = prompt(); await sleep(350); }
          const t = $('.t', cur);
          for (const ch of s.c) {
            if (id !== termRun) return;
            t.textContent += ch;
            await sleep(38 + Math.random() * 70);
          }
          await sleep(260);
          $('.blink', cur).remove();
          cur = null;
        } else {
          await sleep(s.d || 110);
          if (id !== termRun) return;
          const p = line(s.o);
          p.classList.add('in');
          if (s.bar) requestAnimationFrame(() => p.classList.add('go'));
        }
      }
      prompt();
      await sleep(3800);
      if (id !== termRun) return;
    }
  }

  function countUp(el) {
    const end = +el.dataset.count, suf = el.dataset.suffix || '';
    if (reduce) { el.textContent = end + suf; return; }
    const t0 = performance.now(), dur = 1400;
    const f = now => {
      const k = Math.min(1, (now - t0) / dur);
      el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suf;
      if (k < 1) requestAnimationFrame(f);
    };
    requestAnimationFrame(f);
  }
  const counters = $$('[data-count]');
  if ('IntersectionObserver' in window) {
    counters.forEach(c => { c.textContent = '0' + (c.dataset.suffix || ''); });
    const co = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { countUp(e.target); co.unobserve(e.target); }
    }), { threshold: .6 });
    counters.forEach(c => co.observe(c));
  }

  let typeTimer = null;
  function restartTyping() {
    const el = $('.typed');
    clearTimeout(typeTimer);
    const words = UI[lang].roles;
    if (reduce) { el.textContent = words[0]; return; }
    let w = 0, i = 0, del = false;
    const tick = () => {
      const word = words[w];
      i += del ? -1 : 1;
      el.textContent = word.slice(0, i);
      let d = del ? 35 : 75;
      if (!del && i === word.length) { del = true; d = 1800; }
      else if (del && i === 0) { del = false; w = (w + 1) % words.length; d = 350; }
      typeTimer = setTimeout(tick, d);
    };
    el.textContent = '';
    tick();
  }

  $$('.svc').forEach(c => c.addEventListener('pointermove', e => {
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', `${e.clientX - r.left}px`);
    c.style.setProperty('--my', `${e.clientY - r.top}px`);
  }));


  $('.lang').addEventListener('click', () => setLang(lang === 'it' ? 'en' : 'it'));

  const nav = $('.nav');
  const links = $('.nav-links');
  const burger = $('.burger');
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  $$('a', links).forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }));

  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 12);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const GLYPHS = 'abcdefghijklmnopqrstuvwxyz/{}[]=+*#$_';
  function scramble(el) {
    if (reduce || el.dataset.busy) return;
    const final = el.textContent;
    el.dataset.busy = '1';
    const t0 = performance.now(), dur = 650;
    const f = now => {
      const k = Math.min(1, (now - t0) / dur);
      const shown = Math.floor(final.length * k);
      if (k < 1) {
        const rest = [...final.slice(shown)].map(c => c === ' ' ? ' ' : GLYPHS[Math.random() * GLYPHS.length | 0]).join('');
        el.innerHTML = final.slice(0, shown) + `<span class="scramble">${rest}</span>`;
        requestAnimationFrame(f);
      } else {
        el.textContent = final;
        delete el.dataset.busy;
      }
    };
    requestAnimationFrame(f);
  }
  if ('IntersectionObserver' in window) {
    const so = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { scramble(e.target); so.unobserve(e.target); }
    }), { threshold: 1 });
    $$('.sec-head h2').forEach(h => so.observe(h));
  }

  const side = $('.hero-side'), term = $('.term');
  if (side && term && !reduce && matchMedia('(hover: hover)').matches) {
    side.addEventListener('pointermove', e => {
      const r = side.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      term.classList.add('tilt');
      term.style.transform = `perspective(1000px) rotateX(${(-y * 9).toFixed(2)}deg) rotateY(${(x * 12).toFixed(2)}deg)`;
    });
    side.addEventListener('pointerleave', () => { term.classList.remove('tilt'); term.style.transform = ''; });
  }

  const sections = $$('main section[id]');
  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) $$('a', links).forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => spy.observe(s));

    if (!reduce) {
      const rev = new IntersectionObserver(entries => {
        entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); rev.unobserve(en.target); } });
      }, { threshold: .1 });
      $$('.sec-head, .sec-sub, .about, .stack, .svc, .timeline li, .contact').forEach(el => { el.classList.add('reveal'); rev.observe(el); });
    }
  }

  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const paint = s => {
    const ci = s.indexOf('//');
    const code = ci >= 0 ? s.slice(0, ci) : s;
    const tail = ci >= 0 ? `<span class="c">${esc(s.slice(ci))}</span>` : '';
    return esc(code).replace(/("[^"]*")|(@\w+|\b(?:package|import|public|private|final|class|extends|new|return|void|double|int|boolean|true|for|if)\b)/g,
      (m, str) => `<span class="${str ? 's' : 'k'}">${m}</span>`) + tail;
  };
  const bg = $('#bg-code');
  const hot = $('#bg-hot');
  bg.innerHTML = CODE.map((l, i) => `<span class="ln">${i + 1}</span>${i === TYPE_LINE ? `<span class="typing">${paint(l)}</span>` : paint(l)}`).join('\n');
  hot.innerHTML = bg.innerHTML;
  addEventListener('pointermove', e => {
    const r = hot.getBoundingClientRect();
    hot.style.setProperty('--hx', `${e.clientX - r.left}px`);
    hot.style.setProperty('--hy', `${e.clientY - r.top}px`);
  }, { passive: true });
  if (!reduce) {
    const targets = $$('.bg .typing');
    const full = CODE[TYPE_LINE];
    const lead = full.match(/^\s*/)[0].length;
    let n = full.length, dir = -1;
    const step = () => {
      n += dir;
      const h = paint(full.slice(0, n));
      targets.forEach(t => { t.innerHTML = h; });
      let d = dir < 0 ? 22 : 55;
      if (n <= lead) { dir = 1; d = 700; }
      else if (n >= full.length) { dir = -1; d = 4200; }
      setTimeout(step, d);
    };
    setTimeout(step, 3000);
  }

  $$('[data-copy]').forEach(b => b.addEventListener('click', async () => {
    const label = $('.arrow', b);
    try { await navigator.clipboard.writeText(b.dataset.copy); } catch { return; }
    label.textContent = lang === 'en' ? 'copied ✓' : 'copiato ✓';
    label.classList.add('done');
    setTimeout(() => { label.textContent = lang === 'en' ? EN['contact.copy'] : IT['contact.copy']; label.classList.remove('done'); }, 1600);
  }));

  const nowBox = $('.now-video');
  if (nowBox) {
    const vid = $('video', nowBox);
    const start = () => { nowBox.classList.add('playing'); vid.controls = true; vid.play().catch(() => {}); };
    $('.now-play', nowBox).addEventListener('click', start);
    vid.addEventListener('play', () => nowBox.classList.add('playing'));
    vid.addEventListener('ended', () => nowBox.classList.remove('playing'));
  }

  $('#year').textContent = new Date().getFullYear();
  setLang(lang);
})();
