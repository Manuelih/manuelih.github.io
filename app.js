(() => {
  'use strict';

  const META = {
    'radice':       { f: 'plugin', kind: 'core + moduli',  tags: ['Paper 1.21.11', 'Velocity', 'Gradle', 'MariaDB', 'Redis'], wide: true },
    'arcadia':      { f: 'plugin', kind: 'plugin suite',   tags: ['Paper', 'WorldGuard', 'SQLite'] },
    'fuochi':       { f: 'mod',    kind: 'forge mod',      tags: ['Forge 1.19.2', 'Netty', 'NBT'] },
    'paradis':      { f: 'mod',    kind: 'fabric mods',    tags: ['Fabric 1.21.1', 'Mixin', 'Display entity'], wide: true },
    'coda':         { f: 'mod',    kind: 'forge mod',      tags: ['Forge 1.19.2', 'Mixin', 'Login protocol'] },
    'spiderman':    { f: 'plugin', kind: 'plugin',         tags: ['Paper 1.21.8', 'Java 21'] },
    'voltick':      { f: 'plugin app', kind: 'profiler',   tags: ['Java 21', 'Express', 'SQLite'], live: true },
    'launcher':     { f: 'app',    kind: 'desktop app',    tags: ['Electron', 'React 19', 'TypeScript'] },
    'shaders':      { f: 'mod',    kind: 'shaderpack',     tags: ['GLSL', 'Iris', 'OptiFine'] },
    'bots':         { f: 'app',    kind: 'bot',            tags: ['discord.js v14', 'discord.py', 'Telegram'] }
  };

  const PROJECTS = [
    { id: 'radice',
      it: { title: 'Radice — core roleplay a moduli',
            desc: 'Il core di un roleplay italiano moderno: un plugin base e una serie di moduli separati (identità, economia, banca, chat, lobby) su una rete Velocity.',
            intro: 'Un server roleplay cresce in fretta e un plugin unico diventa ingestibile in pochi mesi. Radice nasce per evitarlo: il core offre i servizi comuni e ogni sistema del server vive in un modulo a sé, con il suo repository e la sua versione.',
            approach: 'I moduli estendono una classe base del core e dichiarano le dipendenze nel plugin.yml. Il core espone le API (database, cache, comandi, messaggi) come libreria pubblicata, così i moduli compilano contro un artefatto versionato. MariaDB e Redis sono facoltativi; la rete gira dietro un proxy Velocity con lobby e server roleplay separati, e ogni modulo ha la sua pipeline di build.',
            h: ['API del core pubblicata come pacchetto: i moduli non dipendono dal codice interno', 'Un modulo di esempio fa da modello per partire in pochi minuti', 'Rete Velocity con lobby e server roleplay distinti', 'Versione aumentata e deploy a ogni modifica, mai jar vecchi sul server'] },
      en: { title: 'Radice — modular roleplay core',
            desc: 'The core of a modern Italian roleplay server: a base plugin plus separate modules (identity, economy, bank, chat, lobby) on a Velocity network.',
            intro: 'A roleplay server grows fast and a single plugin becomes unmanageable within months. Radice exists to prevent that: the core provides shared services and every system lives in its own module, with its own repository and version.',
            approach: 'Modules extend a base class from the core and declare their dependencies in plugin.yml. The core exposes its APIs (database, cache, commands, messages) as a published library, so modules compile against a versioned artifact. MariaDB and Redis are optional; the network runs behind a Velocity proxy with separate lobby and roleplay servers, and every module has its own build pipeline.',
            h: ['Core API published as a package: modules never touch internal code', 'An example module acts as a template to start in minutes', 'Velocity network with separate lobby and roleplay servers', 'Version bump and deploy on every change, never stale jars on the server'] } },

    { id: 'arcadia',
      it: { title: 'Suite Arcadia — roleplay medievale',
            desc: 'Più di dieci plugin per un roleplay medievale: miniere con vene che si richiudono, medici e ferite, stalliere, bussola, anagrafe e uno staffcore a GUI.',
            intro: 'Arcadia voleva mestieri veri: il minatore, il medico, il fabbro devono servire a qualcosa, non essere decorazioni. Ogni plugin della suite crea un motivo per giocare insieme agli altri.',
            approach: 'In miniera il client deciderebbe da solo quando un blocco si rompe, quindi il plugin governa lo scavo: fatica invisibile al giocatore e avanzamento disegnato tick per tick con il danno al blocco. I medici curano tre ferite che il cibo non chiude, con una lente diagnostica obbligatoria prima della cura. Lo staffcore ha un pannello a sigilli dove le funzioni si sbloccano col grado, con sanzioni e registri in SQLite.',
            h: ['Scavo controllato dal server senza "ghost break" lato client', 'Vene salvate su file: dopo un crash tornano da sole', 'Ferite con causa e sintomo visibili, morire non guarisce di proposito', 'Integrazioni opzionali (Vault, PlaceholderAPI) caricate solo se presenti'] },
      en: { title: 'Arcadia suite — medieval roleplay',
            desc: 'Over ten plugins for a medieval roleplay: mines with veins that close up, doctors and wounds, stablemaster, compass, registry and a GUI staff core.',
            intro: 'Arcadia wanted real professions: the miner, the doctor and the smith have to matter, not just decorate. Every plugin in the suite gives players a reason to play together.',
            approach: 'In a mine the client would decide on its own when a block breaks, so the plugin takes over digging: fatigue hidden from the player and progress drawn tick by tick with block damage. Doctors treat three wounds that food does not heal, with a mandatory diagnostic lens before treatment. The staff core has a sealed panel where features unlock by rank, with sanctions and logs in SQLite.',
            h: ['Server-controlled digging with no client-side ghost breaks', 'Veins saved to disk: they come back on their own after a crash', 'Wounds with visible cause and symptom, dying does not heal on purpose', 'Optional integrations (Vault, PlaceholderAPI) loaded only when present'] } },

    { id: 'fuochi',
      it: { title: 'SniperFuochi — fuochi d\'artificio disegnati',
            desc: 'Mod Forge con un editor a pixel: disegni sulla tela, scegli colori e animazioni, e il razzo esplode in cielo con il tuo disegno.',
            intro: 'Per gli eventi del server servivano fuochi d\'artificio con scritte e loghi, cosa che il vanilla non sa fare. La mod aggiunge un editor in gioco e un\'esplosione che ricompone il disegno in particelle.',
            approach: 'La tela arriva fino a 160×72 pixel con una palette ricavata dalle texture vanilla. I pixel vengono compressi prima di finire nell\'NBT del razzo e nei pacchetti: un disegno da 7168 pixel occupa circa 66 byte. Il server sincronizza la config ai client e decide chi può usare l\'editor.',
            h: ['Editor a pixel in GUI con tele di diverse misure', 'Disegni compressi: da migliaia di pixel a poche decine di byte', 'Durata, entrata e uscita dell\'animazione configurabili', 'Permessi e raggio di visibilità decisi dal server'] },
      en: { title: 'SniperFuochi — drawn fireworks',
            desc: 'A Forge mod with a pixel editor: draw on a canvas, pick colours and animations, and the rocket bursts in the sky with your drawing.',
            intro: 'Server events needed fireworks with text and logos, which vanilla cannot do. The mod adds an in-game editor and an explosion that rebuilds the drawing out of particles.',
            approach: 'The canvas goes up to 160×72 pixels with a palette taken from vanilla textures. Pixels are compressed before going into the rocket NBT and packets: a 7168-pixel drawing takes about 66 bytes. The server syncs its config to clients and decides who can use the editor.',
            h: ['Pixel editor GUI with several canvas sizes', 'Compressed drawings: thousands of pixels in a few dozen bytes', 'Configurable duration, entry and exit animations', 'Permissions and view range decided by the server'] } },

    { id: 'paradis',
      it: { title: 'Mod Paradis — roleplay Fabric',
            desc: 'Una serie di mod Fabric per un roleplay ispirato ad Attack on Titan: porte animate, zaini anti-dupe, spedizioni con HUD, bacheca missioni 3D.',
            intro: 'Su un server Fabric non ci sono plugin: ogni meccanica del roleplay va scritta come mod, lato server e lato client. Ho costruito le mod che servivano al gioco di tutti i giorni.',
            approach: 'Le porte (battenti, ponti levatoi, saracinesche) si animano con le display entity vanilla, ruotate a fotogrammi, e prenotano i blocchi di arrivo durante il movimento. Gli zaini tengono il contenuto lato server con un token che cambia a ogni apertura, così non si possono duplicare. Le spedizioni hanno una GUI per la formazione e un HUD laterale; i dati restano in uno stato persistente che sopravvive ai crash.',
            h: ['Porte animate senza resource pack, solo display entity', 'Zaini con token rotante e controllo dei duplicati ogni 2 secondi', 'GUI client con payload validati dal server', 'Recupero automatico dopo un crash durante un\'animazione'] },
      en: { title: 'Paradis mods — Fabric roleplay',
            desc: 'A set of Fabric mods for an Attack on Titan inspired roleplay: animated doors, dupe-proof backpacks, expeditions with HUD, a 3D mission board.',
            intro: 'A Fabric server has no plugins: every roleplay mechanic has to be a mod, on both server and client. I built the mods the server needed for everyday play.',
            approach: 'Doors (swinging, drawbridges, portcullises) are animated with vanilla display entities rotated frame by frame, and reserve their target blocks while moving. Backpacks keep their contents server-side with a token that changes on every open, so they cannot be duplicated. Expeditions have a formation GUI and a side HUD; data lives in persistent state that survives crashes.',
            h: ['Animated doors with no resource pack, just display entities', 'Backpacks with a rotating token and a duplicate scan every 2 seconds', 'Client GUIs with server-validated payloads', 'Automatic recovery after a crash mid-animation'] } },

    { id: 'coda',
      it: { title: 'CodaServer — coda a server pieno',
            desc: 'Mod Forge che, a server pieno, mette i giocatori in fila invece di cacciarli, con posizione aggiornata in tempo reale.',
            intro: 'Con il server pieno Forge rifiuta il giocatore e lui riprova a caso finché non entra. Serviva una vera coda, con priorità per chi ne ha diritto.',
            approach: 'Il giocatore resta nella fase di login invece di essere rifiutato. Il server gli manda periodicamente un pacchetto personalizzato con la posizione in fila e il client risponde, così la connessione non va in timeout. Il primo della fila entra solo quando non c\'è nessuna richiesta in sospeso, altrimenti il protocollo si romperebbe al passaggio in gioco.',
            h: ['Attesa tenuta nella fase di login, senza disconnessioni', 'Scambio periodico che tiene viva la connessione', 'Conferma obbligatoria prima di far entrare il primo della fila', 'Priorità configurabile con un comando'] },
      en: { title: 'CodaServer — full-server queue',
            desc: 'A Forge mod that queues players when the server is full instead of kicking them, with a live position.',
            intro: 'When the server is full Forge rejects players and they keep retrying at random. It needed a real queue, with priority for those entitled to it.',
            approach: 'The player stays in the login phase instead of being rejected. The server periodically sends a custom packet with the queue position and the client replies, so the connection never times out. The first in line only gets in when no request is pending, otherwise the protocol would break on the switch to play.',
            h: ['Waiting held in the login phase, no disconnects', 'Periodic exchange that keeps the connection alive', 'Mandatory acknowledgement before letting the first player in', 'Priority configurable with a command'] } },

    { id: 'spiderman',
      it: { title: 'SpiderMan — swing a pendolo',
            desc: 'Plugin con il lanciaragnatele: ti attacchi a un blocco e oscilli come un pendolo, con una fisica che regge anche col lag.',
            intro: 'Volevo uno swing che sembrasse vero, non il solito lancio in avanti. Il problema è che il client applica comunque la sua gravità, e la corda deve restare tesa anche quando il server perde qualche tick.',
            approach: 'La velocità dello swing la tiene il plugin, mentre il vincolo della corda viene ricalcolato dalla posizione reale del giocatore, così gli errori si correggono da soli. A ogni tick la posizione viene simulata più volte e al client arriva lo spostamento medio, con una compensazione per la gravità vanilla.',
            h: ['Fisica a sottopassi per un movimento fluido', 'Deriva corretta dalla posizione reale a ogni tick', 'Compensazione della gravità applicata dal client', 'Poteri attivati solo dal "morso", salvato in un file'] },
      en: { title: 'SpiderMan — pendulum swinging',
            desc: 'A plugin with a web shooter: attach to a block and swing like a pendulum, with physics that holds up even under lag.',
            intro: 'I wanted swinging that feels real, not the usual forward launch. The catch is that the client still applies its own gravity, and the rope has to stay taut even when the server drops ticks.',
            approach: 'The plugin owns the swing velocity, while the rope constraint is recomputed from the player\'s real position, so errors correct themselves. Each tick the position is simulated several times and the client gets the average displacement, with compensation for vanilla gravity.',
            h: ['Sub-step physics for smooth movement', 'Drift corrected from the real position every tick', 'Compensation for client-side gravity', 'Powers unlocked only by the "bite", saved to a file'] } },

    { id: 'voltick',
      it: { title: 'Voltick — profiler per server',
            desc: 'Profiler per server Minecraft, alternativa a spark: campiona il server, trova chi causa il lag e genera un report web condivisibile.',
            intro: 'Quando un server inizia a laggare devi capire in fretta se la colpa è di un plugin, di un tick pesante o del garbage collector. Ho scritto un profiler mio, utile quanto spark ma tutto sotto il mio controllo.',
            approach: 'Il plugin cattura periodicamente gli stack dei thread e attribuisce il tempo CPU a plugin, classi e metodi, con un overhead minimo. Comprende anche monitor dei tick e del GC e un riepilogo dell\'heap. I report finiscono su un sito Express con SQLite, ognuno con un codice breve da condividere senza account.',
            h: ['Profiler a campionamento scritto da zero', 'Tempo CPU diviso per plugin, classe e metodo', 'Monitor di tick, GC e heap in un solo comando', 'Sito dei report online, condivisione con un codice'] },
      en: { title: 'Voltick — server profiler',
            desc: 'A Minecraft server profiler, an alternative to spark: it samples the server, finds what causes lag and builds a shareable web report.',
            intro: 'When a server starts lagging you need to know fast whether it is a plugin, a heavy tick or the garbage collector. I wrote my own profiler, as useful as spark but fully under my control.',
            approach: 'The plugin periodically captures thread stacks and attributes CPU time to plugins, classes and methods with minimal overhead. It also includes tick and GC monitors and a heap summary. Reports go to an Express site with SQLite, each with a short code to share without an account.',
            h: ['Sampling profiler written from scratch', 'CPU time split by plugin, class and method', 'Tick, GC and heap monitors in one command', 'Report site online, shared with a code'] } },

    { id: 'launcher',
      it: { title: 'Sniper Client — launcher',
            desc: 'Launcher desktop per un server Forge: installa la versione giusta, scarica il modpack e le mod client, con preset di ottimizzazione.',
            intro: 'Far entrare un giocatore nuovo in un server moddato voleva dire spiegargli Forge, il modpack e le mod da aggiungere. Il launcher fa tutto con un clic.',
            approach: 'È un\'app Electron con React e TypeScript. Installa Forge, Fabric o NeoForge, scarica librerie e asset con un pool di download limitato (quello predefinito apriva tutto insieme e andava in timeout) e sincronizza il modpack del server. Ha preset di mod per gli FPS divisi per loader, Rich Presence su Discord e un installer per Windows.',
            h: ['Profilo del server pronto con un clic', 'Download in parallelo limitato, niente timeout', 'Preset FPS diversi per ogni loader', 'Installer Windows e Rich Presence Discord'] },
      en: { title: 'Sniper Client — launcher',
            desc: 'A desktop launcher for a Forge server: installs the right version, downloads the modpack and client mods, with optimisation presets.',
            intro: 'Getting a new player onto a modded server meant explaining Forge, the modpack and which mods to add. The launcher does it all in one click.',
            approach: 'It is an Electron app with React and TypeScript. It installs Forge, Fabric or NeoForge, downloads libraries and assets through a bounded download pool (the default one opened everything at once and timed out) and syncs the server modpack. It has per-loader FPS mod presets, Discord Rich Presence and a Windows installer.',
            h: ['Server profile ready in one click', 'Bounded parallel downloads, no timeouts', 'Different FPS presets for each loader', 'Windows installer and Discord Rich Presence'] } },

    { id: 'shaders',
      it: { title: 'ManuShaders — shaderpack',
            desc: 'Shaderpack deferred per Iris e OptiFine su Minecraft 1.21: luce, ombre e acqua scritti a mano in GLSL.',
            intro: 'Volevo capire come funziona davvero una pipeline di shader e avere un pack mio, leggero e con un look preciso.',
            approach: 'Il pack usa la pipeline legacy GLSL 120, che Iris gestisce in modo più prevedibile. I file comuni vengono generati da script e l\'impacchettamento passa da uno script di build che scrive lo zip nel formato che Iris accetta: uno zip creato male viene scartato senza spiegazioni.',
            h: ['Pipeline deferred scritta da zero', 'File comuni generati per non duplicare codice', 'Build che produce uno zip valido per Iris', 'Testato su Iris con Minecraft 1.21.x'] },
      en: { title: 'ManuShaders — shaderpack',
            desc: 'A deferred shaderpack for Iris and OptiFine on Minecraft 1.21: lighting, shadows and water handwritten in GLSL.',
            intro: 'I wanted to understand how a shader pipeline really works and have my own pack, lightweight and with a specific look.',
            approach: 'The pack uses the legacy GLSL 120 pipeline, which Iris handles more predictably. Shared files are generated by scripts and packaging goes through a build script that writes the zip in the format Iris accepts: a badly built zip gets rejected with no explanation.',
            h: ['Deferred pipeline written from scratch', 'Generated shared files to avoid duplicated code', 'Build that outputs a zip Iris accepts', 'Tested on Iris with Minecraft 1.21.x'] } },

    { id: 'bots',
      it: { title: 'Bot Discord e Telegram',
            desc: 'Bot per shop e community: ticket in thread privati, pannelli con Components V2, eventi, pagamenti crypto e pannelli admin.',
            intro: 'Molte community vendono e organizzano tutto su Discord o Telegram, gestendo ordini e richieste a mano. Ho scritto bot che automatizzano il flusso dall\'apertura del ticket alla consegna.',
            approach: 'I bot Discord sono in discord.js v14 o discord.py a seconda del cliente, con interfacce in Components V2 e emoji dell\'app. I ticket si aprono in thread privati per non riempire il server di canali. Per Telegram ho fatto bot di vendita e di amministrazione che girano come servizi systemd su VPS Linux.',
            h: ['Thread privati per cliente invece di canali dedicati', 'Pannelli Components V2 con più stati', 'Pagamenti crypto con QR generato in locale', 'Deploy come servizi systemd su VPS'] },
      en: { title: 'Discord and Telegram bots',
            desc: 'Bots for shops and communities: tickets in private threads, Components V2 panels, events, crypto payments and admin panels.',
            intro: 'Many communities sell and organise everything on Discord or Telegram, handling orders and requests by hand. I wrote bots that automate the flow from opening a ticket to delivery.',
            approach: 'Discord bots use discord.js v14 or discord.py depending on the client, with Components V2 interfaces and app emojis. Tickets open in private threads so the server does not fill up with channels. For Telegram I built sales and admin bots running as systemd services on Linux VPSes.',
            h: ['Private threads per customer instead of dedicated channels', 'Components V2 panels with multiple states', 'Crypto payments with locally generated QR codes', 'Deployed as systemd services on VPSes'] } }
  ];

  const CODE = [
    'package me.manudev.radice;',
    '',
    'import org.bukkit.plugin.java.JavaPlugin;',
    'import java.util.concurrent.CompletableFuture;',
    '',
    'public final class Radice extends JavaPlugin {',
    '',
    '    private final ModuleRegistry modules = new ModuleRegistry(this);',
    '    private Database database;',
    '',
    '    @Override',
    '    public void onEnable() {',
    '        database = Database.connect(getConfig().getConfigurationSection("database"));',
    '        modules.discover("me.manudev.radice.modules");',
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
    'projects.sub': 'Almost everything was written for private servers and clients, so the code isn\'t public. Click a card for the technical details.',
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
  const modal = $('#modal');
  const modalBody = $('#modal-body');

  function renderCards() {
    const u = UI[lang];
    grid.innerHTML = PROJECTS.map(p => {
      const m = META[p.id], t = p[lang];
      return `<button class="card${m.wide ? ' wide' : ''}" data-id="${p.id}" data-f="${m.f}">
        <div class="card-top"><span class="kind">${m.kind}</span><span class="badge${m.live ? ' live' : ''}">${m.live ? '● ' + u.live : u.priv}</span></div>
        <h3>${t.title}</h3><p>${t.desc}</p>
        <div class="tags">${m.tags.map(x => `<span>${x}</span>`).join('')}</div>
        <span class="more">${u.more}</span>
      </button>`;
    }).join('');
    applyFilter($('.filters .on').dataset.f);
  }

  function applyFilter(f) {
    $$('.card', grid).forEach(c => c.classList.toggle('hide', f !== 'all' && !c.dataset.f.split(' ').includes(f)));
  }

  function openProject(id) {
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return;
    const m = META[id], t = p[lang], u = UI[lang];
    modalBody.innerHTML = `
      <div class="card-top" style="justify-content:flex-start;gap:12px"><span class="kind">${m.kind}</span><span class="badge${m.live ? ' live' : ''}">${m.live ? '● ' + u.live : u.priv}</span></div>
      <h3>${t.title}</h3>
      <h4>${u.intro}</h4><p>${t.intro}</p>
      <h4>${u.approach}</h4><p>${t.approach}</p>
      <h4>${u.hl}</h4><ul>${t.h.map(h => `<li><span>${h}</span></li>`).join('')}</ul>
      <div class="tags">${m.tags.map(x => `<span>${x}</span>`).join('')}</div>`;
    if (typeof modal.showModal === 'function') modal.showModal(); else modal.setAttribute('open', '');
    modal.scrollTop = 0;
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
        { c: 'scp build/libs/Radice.jar vps:plugins/' },
        { o: '<span class="c-dim">Radice.jar</span>  <span class="bar" style="--w:100%"></span> 100%', d: 300, bar: true },
        { o: `<span class="c-ok">✓</span> ${it ? 'deploy fatto, riavvio non necessario' : 'deployed, no restart needed'}`, d: 450 }
      ],
      [
        { c: '/vk tps' },
        { o: kv('tps', '20.0 · 20.0 · 20.0') },
        { o: kv('mspt', '11.8 ms') },
        { c: '/vk profiler start --timeout 60' },
        { o: `<span class="c-dim">› ${it ? 'profiler avviato, report tra 60s' : 'profiler started, report in 60s'}</span>`, d: 300 },
        { o: `<span class="c-ok">✓</span> ${it ? 'report pronto' : 'report ready'}: <span class="c-key">VK-7f3a91c2</span>`, d: 1600 }
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

  grid.addEventListener('click', e => {
    const c = e.target.closest('.card');
    if (c) openProject(c.dataset.id);
  });
  grid.addEventListener('pointermove', e => {
    const c = e.target.closest('.card');
    if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', `${e.clientX - r.left}px`);
    c.style.setProperty('--my', `${e.clientY - r.top}px`);
  });

  $('.modal-x').addEventListener('click', () => modal.close());
  modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });

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

  addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 12), { passive: true });

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
  bg.innerHTML = CODE.map((l, i) => `<span class="ln">${i + 1}</span>${i === TYPE_LINE ? `<span class="typing" id="typing">${paint(l)}</span>` : paint(l)}`).join('\n');
  if (!reduce) {
    const target = $('#typing');
    const full = CODE[TYPE_LINE];
    const lead = full.match(/^\s*/)[0].length;
    let n = full.length, dir = -1;
    const step = () => {
      n += dir;
      target.innerHTML = paint(full.slice(0, n));
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
