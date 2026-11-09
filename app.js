(() => {
  'use strict';

  const PROJECTS = [
    { f: 'plugin', path: '~/core', wide: true, tags: ['Paper', 'Velocity', 'Gradle', 'MariaDB', 'Redis'],
      it: { title: 'Core modulari', desc: 'Un core che offre database, cache, comandi e messaggi a tutto il server, e un modulo separato per ogni sistema: identità, economia, banca, chat. Ogni modulo ha la sua versione e la sua build, e si aggiorna senza toccare gli altri.' },
      en: { title: 'Modular cores', desc: 'A core that gives the whole server its database, cache, commands and messages, plus a separate module for every system: identity, economy, bank, chat. Each module has its own version and build, and updates without touching the others.' } },
    { f: 'plugin', path: '~/rp', tags: ['Paper', 'WorldGuard', 'SQLite'],
      it: { title: 'Mestieri roleplay', desc: 'Plugin che rendono utili i mestieri: miniere con lo scavo deciso dal server, ferite che solo un medico chiude, stalle, bussole e anagrafe.' },
      en: { title: 'Roleplay jobs', desc: 'Plugins that make jobs matter: mines where the server decides digging, wounds only a doctor can close, stables, compasses and a registry.' } },
    { f: 'plugin', path: '~/staff', tags: ['Paper', 'GUI', 'SQLite'],
      it: { title: 'Staff e moderazione', desc: 'Pannelli a GUI che si sbloccano col grado, sanzioni, registri delle azioni e modalità staff che non perde l\'inventario neanche dopo un crash.' },
      en: { title: 'Staff and moderation', desc: 'GUI panels that unlock by rank, sanctions, action logs and a staff mode that keeps your inventory even after a crash.' } },
    { f: 'mod', path: '~/fabric', wide: true, tags: ['Fabric', 'Mixin', 'Display entity', 'Networking'],
      it: { title: 'Mod Fabric per roleplay', desc: 'Porte e ponti animati con le display entity, zaini che non si possono duplicare, HUD, bacheche missioni in 3D e GUI client con dati validati dal server. Tutto lato server dove serve, niente resource pack obbligatori.' },
      en: { title: 'Fabric roleplay mods', desc: 'Doors and bridges animated with display entities, backpacks that cannot be duplicated, HUDs, 3D mission boards and client GUIs with server-validated data. Server-side where it matters, no mandatory resource packs.' } },
    { f: 'mod', path: '~/forge', tags: ['Forge', 'Mixin', 'Netty'],
      it: { title: 'Mod Forge', desc: 'Coda a server pieno tenuta nella fase di login, fuochi d\'artificio disegnati in gioco, log dei blocchi con rollback.' },
      en: { title: 'Forge mods', desc: 'A full-server queue held in the login phase, fireworks drawn in game, block logging with rollback.' } },
    { f: 'plugin app', path: '~/profiler', tags: ['Java', 'Express', 'SQLite'],
      it: { title: 'Profiler per server', desc: 'Campiona i thread del server, divide il tempo CPU per plugin e metodo e genera un report web da condividere con un codice.' },
      en: { title: 'Server profiler', desc: 'Samples server threads, splits CPU time by plugin and method and builds a web report you share with a code.' } },
    { f: 'app', path: '~/desktop', tags: ['Electron', 'React', 'Python'],
      it: { title: 'Launcher e app desktop', desc: 'Launcher che installa loader, modpack e mod per gli FPS con un clic, e app desktop in Python per uso quotidiano.' },
      en: { title: 'Launchers and desktop apps', desc: 'A launcher that installs loaders, modpacks and FPS mods in one click, plus Python desktop apps for daily use.' } },
    { f: 'app', path: '~/bots', wide: true, tags: ['discord.js v14', 'discord.py', 'Telegram', 'systemd'],
      it: { title: 'Bot Discord e Telegram', desc: 'Ticket in thread privati, pannelli Components V2, eventi, shop con pagamenti e pannelli admin. Girano come servizi su VPS Linux e si riavviano da soli.' },
      en: { title: 'Discord and Telegram bots', desc: 'Tickets in private threads, Components V2 panels, events, shops with payments and admin panels. They run as services on Linux VPSes and restart on their own.' } },
    { f: 'mod', path: '~/shaders', tags: ['GLSL', 'Iris'],
      it: { title: 'Shader', desc: 'Shaderpack deferred scritto a mano in GLSL: luce, ombre e acqua per Iris.' },
      en: { title: 'Shaders', desc: 'A deferred shaderpack handwritten in GLSL: lighting, shadows and water for Iris.' } }
  ];

  const CODE = [
    'package me.manudev.core;',
    '',
    'import org.bukkit.plugin.java.JavaPlugin;',
    'import java.util.concurrent.CompletableFuture;',
    '',
    'public final class Core extends JavaPlugin {',
    '',
    '    private final ModuleRegistry modules = new ModuleRegistry(this);',
    '    private Database database;',
    '',
    '    @Override',
    '    public void onEnable() {',
    '        database = Database.connect(getConfig().getConfigurationSection("database"));',
    '        modules.discover("me.manudev.core.modules");',
    '        modules.enableAll();',
    '        getLogger().info("pronto: " + modules.size() + " moduli attivi");',
    '    }',
    '',
    '    // mai query sul main thread',
    '    public CompletableFuture<Profile> profile(UUID id) {',
    '        return cache.get(id, key -> database.async(() -> profiles.load(key)));',
    '    }',
    '',
    '    @EventHandler(priority = EventPriority.MONITOR)',
    '    public void onJoin(PlayerJoinEvent event) {',
    '        Player player = event.getPlayer();',
    '        profile(player.getUniqueId()).thenAccept(p -> sync(() -> p.apply(player)));',
    '    }',
    '',
    '    @Override',
    '    public void onDisable() {',
    '        modules.disableAll();',
    '        database.close();',
    '    }',
    '}',
    '',
    'final class SwingIntegrator {',
    '',
    '    Vector step(Vector pos, Vector vel, Vector anchor, double rope, int substeps) {',
    '        double dt = 1.0 / substeps;',
    '        for (int i = 0; i < substeps; i++) {',
    '            vel.add(GRAVITY.clone().multiply(dt));',
    '            pos.add(vel.clone().multiply(dt));',
    '            Vector d = pos.clone().subtract(anchor);',
    '            if (d.length() > rope) pos = anchor.clone().add(d.normalize().multiply(rope));',
    '        }',
    '        return vel;',
    '    }',
    '}'
  ];
  const TYPE_LINE = 15;

  const EN = {
    'nav.about': 'about', 'nav.stack': 'stack', 'nav.projects': 'projects', 'nav.path': 'journey', 'nav.contact': 'contact',
    'hero.status': 'open to new projects',
    'hero.lead': "I'm Emanuele, 20. I write Minecraft plugins that hold up under load, client mods, Discord bots and websites. Clean code, fast delivery, things that actually run in production.",
    'hero.cta1': 'see projects', 'hero.cta2': 'contact me',
    'term.role': 'full-stack developer', 'term.based': 'Italy',
    'stat.years': 'years of code', 'stat.projects': 'projects shipped', 'stat.langs': 'languages',
    'about.title': 'about me',
    'about.p1': 'I started self-taught, taking apart other people\'s plugins and reading docs late into the night. Today my code runs on roleplay, prison and community servers with real players, every day.',
    'about.p2': 'I mostly work in Java on the Minecraft ecosystem: Paper and Velocity plugins, Fabric and Forge mods, modular architectures with async databases and caching. When needed I step outside: Discord bots, Node/Next.js sites, Chrome extensions and Python desktop apps.',
    'about.p3': 'I like small, reliable systems: few pieces, each with a clear job, that don\'t break when two hundred players show up at once.',
    'about.card': 'Java Developer · Full-Stack', 'about.l1': 'focus', 'about.l2': 'reply', 'about.l2v': 'within 24h', 'about.l3': 'languages',
    'stack.title': 'stack', 'stack.sub': 'The tools I use every day, from the game server to the browser.',
    'st.java': 'plugins &amp; mods', 'st.paper': 'server &amp; proxy', 'st.mod': 'mixin, GeckoLib', 'st.db': 'data &amp; cache',
    'st.js': 'bots &amp; backend', 'st.py': 'tools &amp; automation', 'st.web': 'sites &amp; panels', 'st.ops': 'VPS &amp; deploy',
    'projects.title': 'projects',
    'projects.sub': 'Everything here was built for private servers and clients, so you get the kind of work, not the names.',
    'f.all': 'all',
    'path.title': 'journey',
    'tl.1w': 'today', 'tl.1t': 'Freelance developer', 'tl.1d': 'Plugins, mods and bots for Italian roleplay servers and communities. Modular suites, VPS deploys, ongoing maintenance.',
    'tl.2w': 'then', 'tl.2t': 'Full-stack: bots, sites, tools', 'tl.2d': 'The stack grows beyond Minecraft: sales Discord bots, Next.js and Express sites, Chrome extensions, desktop apps.',
    'tl.3w': 'next', 'tl.3t': 'Modular suites', 'tl.3d': 'From single plugins to ecosystems of plugins that talk to each other, with shared databases and internal APIs.',
    'tl.4w': 'start', 'tl.4t': 'First plugin in production', 'tl.4d': 'From self-taught to my first plugin on a real server with real players. That changed everything.',
    'contact.title': 'contact',
    'contact.big': 'Got an idea for your server?<br><span class="red">Let\'s talk.</span>',
    'contact.sub': 'Tell me what you need, rough timing and budget. I usually reply the same day.',
    'contact.copy': 'copy',
    'foot': 'handwritten, no framework', 'foot.top': 'back to top ↑'
  };

  const UI = {
    it: { live: 'live', priv: 'privato', more: 'dettagli →', intro: 'il problema', approach: 'approccio', hl: 'punti chiave',
          roles: ['Java Developer', 'Plugin Minecraft', 'Mod Fabric & Forge', 'Bot Discord', 'Full-Stack Web'] },
    en: { live: 'live', priv: 'private', more: 'details →', intro: 'the problem', approach: 'approach', hl: 'highlights',
          roles: ['Java Developer', 'Minecraft Plugins', 'Fabric & Forge Mods', 'Discord Bots', 'Full-Stack Web'] }
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

  const grid = $('#grid');

  function renderCards() {
    grid.innerHTML = PROJECTS.map((p, i) => {
      const t = p[lang];
      return `<article class="card${p.wide ? ' wide' : ''}" data-f="${p.f}">
        <div class="card-top"><span class="kind">${p.path}</span><span class="idx">${String(i + 1).padStart(2, '0')}</span></div>
        <h3>${t.title}</h3><p>${t.desc}</p>
        <div class="tags">${p.tags.map(x => `<span>${x}</span>`).join('')}</div>
      </article>`;
    }).join('');
    applyFilter($('.filters .on').dataset.f);
  }

  function applyFilter(f) {
    $$('.card', grid).forEach(c => c.classList.toggle('hide', f !== 'all' && !c.dataset.f.split(' ').includes(f)));
  }

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
    renderCards();
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
        { o: kv('role', it ? 'sviluppatore full-stack' : 'full-stack developer') },
        { o: kv('main', 'Java 21 · Paper · Velocity') },
        { o: kv('also', 'Fabric · Forge · Discord · Web') },
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

  $('.filters').addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b) return;
    $$('.filters button').forEach(x => x.classList.toggle('on', x === b));
    applyFilter(b.dataset.f);
  });

  grid.addEventListener('pointermove', e => {
    const c = e.target.closest('.card');
    if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', `${e.clientX - r.left}px`);
    c.style.setProperty('--my', `${e.clientY - r.top}px`);
  });


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

  const bar = $('.progress');
  const onScroll = () => {
    nav.classList.toggle('scrolled', scrollY > 12);
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.setProperty('--p', max > 0 ? (scrollY / max).toFixed(4) : 0);
  };
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
      $$('.sec-head, .sec-sub, .about, .stack, .filters, .grid, .timeline li, .contact').forEach(el => { el.classList.add('reveal'); rev.observe(el); });
    }
  }

  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const paint = s => {
    const ci = s.indexOf('//');
    const code = ci >= 0 ? s.slice(0, ci) : s;
    const tail = ci >= 0 ? `<span class="c">${esc(s.slice(ci))}</span>` : '';
    return esc(code).replace(/("[^"]*")|(@\w+|\b(?:package|import|public|private|final|class|extends|new|return|void|double|int|for|if)\b)/g,
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

  $('#year').textContent = new Date().getFullYear();
  setLang(lang);
})();
