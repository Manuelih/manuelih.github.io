(() => {
  'use strict';

  const META = {
    'felonycore':         { f: 'mc',      kind: 'plugin',        tags: ['Paper 1.21', 'Java 21', 'MySQL'], wide: true },
    'realistic-suite':    { f: 'mc',      kind: 'plugin suite',  tags: ['Paper', 'Maven', 'Gradle'] },
    'acquatic-suite':     { f: 'mc',      kind: 'plugin suite',  tags: ['Velocity', 'Paper', 'Java 21'] },
    'voltick':            { f: 'mc tool', kind: 'profiler',      tags: ['Java', 'Express', 'SQLite'], live: true, wide: true },
    'discord-bots':       { f: 'discord', kind: 'discord bot',   tags: ['discord.js v14', 'discord.py'], wide: true },
    'community-platform': { f: 'web',     kind: 'website',       tags: ['Next.js', 'Node'] },
    'anongram':           { f: 'tool',    kind: 'desktop app',   tags: ['Python', 'Telethon', 'PySide6'] },
    'chrome-extension':   { f: 'tool',    kind: 'extension',     tags: ['Manifest V3', 'SignalR', 'WebSocket'], wide: true }
  };

  const PROJECTS = [
 {
  "id": "felonycore",
  "it": {
   "title": "FelonyCore — Core Economy &amp; Prison",
   "desc": "Plugin core per un network Minecraft Op-Prison su Paper 1.21 e Java 21, con MySQL come backend. Quattro valute, rankup e prestige, architettura modulare.",
   "intro": "FelonyCore è il plugin core di un network Minecraft Op-Prison su Paper 1.21, Java 21 e MySQL come backend. Un server Op-Prison vive di economia: i giocatori minano, guadagnano, salgono di rank e prestigiano, e tutta quell'economia deve reggere con tanta gente online insieme senza che il server inizi a singhiozzare. Il problema che mi sono trovato a risolvere non era \"far funzionare\" l'economia, ma farla funzionare in modo pulito, coerente e senza colli di bottiglia mentre il resto del gameplay gira in parallelo.",
   "approach": "L'architettura è modulare: ogni sistema (valute, rankup, prestige, dati giocatore) è isolato in moduli separati che comunicano tra loro senza dipendenze incrociate rigide, così posso estendere o sostituire un pezzo senza toccare il resto. Le quattro valute non sono quattro variabili buttate lì a caso: ognuna ha una logica d'uso diversa (economia di base, valuta di prestigio, valuta premium, valuta evento), con le proprie regole di guadagno e spesa. Tutte le operazioni che toccano il database sono asincrone rispetto al thread principale del server, con caching in memoria per i dati letti di frequente. Il sistema di rankup e prestige è pensato per essere configurabile senza dover ricompilare il plugin ogni volta che lo staff vuole cambiare una soglia o aggiungere un rank.",
   "h": [
    "Quattro valute separate, ognuna con la propria logica di guadagno/spesa, invece di un'unica economia generica",
    "Tutte le operazioni MySQL sono asincrone con caching, per non impattare le performance con tanti giocatori online",
    "Rankup e prestige gestiti con progressione configurabile, senza dover modificare il codice per ogni cambiamento",
    "Architettura modulare pensata per crescere: nuovi sistemi economici si aggiungono senza riscrivere quelli esistenti"
   ]
  },
  "en": {
   "title": "FelonyCore — Economy &amp; Prison Core",
   "desc": "Core plugin for an Op-Prison Minecraft network on Paper 1.21 and Java 21, MySQL-backed. Four currencies, rankup and prestige, modular architecture.",
   "intro": "FelonyCore is the core plugin of a Minecraft Op-Prison network running on Paper 1.21, Java 21, with MySQL as the backend. An Op-Prison server lives and dies by its economy: players mine, earn, rank up and prestige, and all of that has to hold up with a lot of players online at once without the server starting to stutter. The problem I actually had to solve wasn't \"make the economy work\", it was making it work cleanly and without bottlenecks while the rest of the gameplay runs alongside it.",
   "approach": "The architecture is modular: each system (currencies, rankup, prestige, player data) is isolated into separate modules that talk to each other without rigid cross-dependencies, so I can extend or swap out a piece without touching the rest. The four currencies aren't just variables thrown in randomly: each has its own usage logic (base economy, prestige currency, premium currency, event currency), with its own earning and spending rules. Every database operation runs asynchronously off the main thread, with in-memory caching for frequently read data. Rankup and prestige are built to be configurable without recompiling the plugin every time staff wants to change a threshold.",
   "h": [
    "Four separate currencies, each with its own earn/spend logic, instead of one generic economy",
    "All MySQL operations run asynchronously with caching, so performance holds up with many players online",
    "Rankup and prestige driven by configurable progression, no code changes needed for every tweak",
    "Modular architecture built to grow: new economic systems slot in without rewriting existing ones"
   ]
  }
 },
 {
  "id": "realistic-suite",
  "it": {
   "title": "Suite Realistic* — Roleplay Modulare",
   "desc": "Oltre dieci plugin interconnessi per un network roleplay: elezioni, banca con documenti digitali, lucchetti su cartello, chat di fazione automatica.",
   "intro": "Origin è un network roleplay che non voleva i soliti plugin isolati, ognuno per conto suo nella sua nicchia: voleva che elezioni, economia, sicurezza e vita sociale facessero parte dello stesso mondo persistente, con conseguenze vere quando un giocatore vince un'elezione, subisce una truffa o si vede scassinare la porta di casa. Da lì è nata la suite Realistic*: più di dieci plugin pensati fin dall'inizio per parlarsi tra loro invece che vivere isolati.",
   "approach": "Ogni plugin della suite segue la stessa convenzione di naming e la stessa struttura di package, così chi lavora su uno riconosce subito dove mettere le mani sugli altri. Il sistema di elezioni e quello di politica condividono un database comune per tenere sincronizzati partiti, cariche e risultati, mentre per i lucchetti ho scelto deliberatamente di non usare un database: i dati vivono nei metadati persistenti del cartello stesso, scelta più immediata e meno fragile per un sistema che deve reggere in tempo reale. Le build sono gestite con Maven o Gradle a seconda del plugin.",
   "h": [
    "Documenti bancari falsificabili: un sistema di stampa/copia che permette di duplicare o alterare documenti in game, pensato per generare dinamiche di roleplay",
    "Chat di fazione automatica: l'appartenenza a un partito si traduce in un canale chat dedicato gestito tramite permessi",
    "Lucchetti senza database: dati tenuti direttamente nel cartello invece che in una tabella esterna, per affidabilità e velocità",
    "Tenere coerenti 10+ plugin nel tempo richiede disciplina architetturale: ogni modulo nuovo deve incastrarsi con quelli esistenti senza romperli"
   ]
  },
  "en": {
   "title": "Realistic* Suite — Modular Roleplay",
   "desc": "Ten-plus interconnected plugins for a roleplay network: elections, a bank with digital documents, sign-based locks, automatic faction chat.",
   "intro": "Origin is a roleplay network that didn't want the usual isolated plugins, each boxed into its own corner: it needed elections, economy, security and social life to be part of the same persistent world, with real consequences when a player wins an election, gets scammed, or has their front door broken into. That's where the Realistic* suite came from: ten-plus plugins designed from day one to talk to each other.",
   "approach": "Every plugin follows the same naming convention and package structure, so anyone working on one immediately knows where to look in the others. The elections and politics systems share a common database to keep parties, offices and results in sync, while for locks I deliberately chose not to use a database: the data lives in the sign's own persistent metadata, more immediate and less fragile for a system that has to respond in real time. Builds are handled with Maven or Gradle depending on the plugin.",
   "h": [
    "Forgeable bank documents: a printing/copying system that lets players duplicate or alter in-game documents, built for roleplay dynamics",
    "Automatic faction chat: belonging to a party translates into a dedicated chat channel driven purely by permissions",
    "Database-free locks: data kept directly on the sign instead of an external table, for reliability and speed",
    "Keeping 10+ plugins coherent over time demands architectural discipline: every new module has to fit without breaking the existing ones"
   ]
  }
 },
 {
  "id": "acquatic-suite",
  "it": {
   "title": "Suite Acquatic — Network Proxy + Paper",
   "desc": "Ecosistema con proxy Velocity e server Paper: verifica account, banca con soldi puliti/sporchi, eventi King of the Hill, rapine e arresti.",
   "intro": "Acquatic è l'ecosistema di plugin che ho costruito per un server Minecraft roleplay con architettura a proxy: un Velocity davanti e più server Paper dietro. Il problema non era scrivere un plugin isolato, ma far convivere sistemi che toccano identità dei giocatori, economia e PvP senza che ogni funzionalità diventasse un monolite a sé stante.",
   "approach": "L'architettura è divisa per responsabilità: la verifica dell'account vive sul proxy Velocity, perché è il punto in cui posso bloccare o instradare un giocatore prima ancora che tocchi un server di gioco. I plugin lato server (Paper 1.21.x, Java 21) espongono le loro funzionalità tramite il ServicesManager di Bukkit. Per la banca ho separato concettualmente i 'soldi puliti' da quelli 'sporchi': il denaro da rapine è marcato a livello di dato persistente e non è depositabile direttamente, quindi va riciclato tramite un loop di gioco dedicato.",
   "h": [
    "Verifica dell'identità del giocatore fatta a livello di proxy, prima dell'ingresso in un qualsiasi server di gioco",
    "Meccanica di riciclaggio: il denaro 'sporco' è un oggetto distinto e taggato che il sistema bancario rifiuta di depositare",
    "Eventi King of the Hill a tempo, con controllo territoriale basato su region WorldGuard e ricompense economiche integrate",
    "Più plugin indipendenti che comunicano tramite API condivise invece di essere un unico plugin monolitico"
   ]
  },
  "en": {
   "title": "Acquatic Suite — Proxy + Paper Network",
   "desc": "Ecosystem with a Velocity proxy and Paper servers: account verification, clean/dirty money banking, King of the Hill events, heists and arrests.",
   "intro": "Acquatic is the plugin ecosystem I built for a Minecraft roleplay server running a proxy architecture: a Velocity front end with several Paper servers behind it. The challenge wasn't writing one isolated plugin, it was getting systems that touch player identity, economy, and PvP to work together without every feature becoming its own monolith.",
   "approach": "The architecture is split by responsibility: account verification lives on the Velocity proxy, the one place I can gate or route a player before they reach an actual game server. Server-side plugins (Paper 1.21.x, Java 21) expose functionality through Bukkit's ServicesManager. For the bank I split money conceptually into 'clean' and 'dirty': cash from robberies is tagged at the persistent-data level and can't be deposited directly, so it has to go through a dedicated laundering gameplay loop.",
   "h": [
    "Player identity verification happens at the proxy layer, before a player reaches any game server",
    "A laundering mechanic where 'dirty' money is a distinct, tagged item type the banking system refuses to deposit",
    "Timed King of the Hill events with WorldGuard-region-based territory control and integrated economic rewards",
    "Several independent plugins talking through shared APIs instead of one monolithic plugin"
   ]
  }
 },
 {
  "id": "voltick",
  "it": {
   "title": "Voltick — Performance Profiler",
   "desc": "Profiler per server Minecraft, alternativa a spark: analizza il carico e genera report HTML, con sito di supporto Express/SQLite live in produzione.",
   "intro": "Voltick nasce da un problema molto pratico: quando un server Minecraft comincia a laggare, devi capire in fretta se il colpevole è un plugin, un tick pesante o qualcos'altro, e per farlo la community usa quasi sempre spark. Ho deciso di costruire un profiler mio, pensato per essere altrettanto utile ma completamente sotto il mio controllo.",
   "approach": "Il plugin Paper (Java 21) implementa un profiler a campionamento che cattura periodicamente gli stack trace dei thread del server, aggregando i dati per attribuire il tempo CPU a plugin, classi e metodi specifici — con overhead minimo, perché un profiler che rallenta il server produce dati falsati. I dati diventano un report navigabile via web, con grafici a fiamma e breakdown per plugin. Il sito di supporto, Express con SQLite, ospita questi report ed è attualmente online e in produzione: ogni sessione genera un codice breve univoco per condividerla senza account.",
   "h": [
    "Profiler a campionamento scritto da zero in Java, con overhead trascurabile durante la cattura su un server live",
    "Attribuzione del tempo CPU per plugin/classe/metodo e report HTML interattivi senza librerie esterne pesanti",
    "Backend Express/SQLite realmente in produzione, con codici brevi per condividere i report",
    "Identità visiva e UX coerenti tra plugin e sito, per proporsi come alternativa credibile a uno strumento già affermato"
   ]
  },
  "en": {
   "title": "Voltick — Performance Profiler",
   "desc": "A profiler for Minecraft servers, alternative to spark: analyzes server load and generates HTML reports, with an Express/SQLite site live in production.",
   "intro": "Voltick came out of a very practical problem: when a Minecraft server starts lagging, you need to figure out fast whether the culprit is a plugin, a heavy tick, or something else, and the community's default tool for that is almost always spark. I decided to build my own profiler instead, just as useful but fully under my control.",
   "approach": "The Paper plugin (Java 21) runs a sampling profiler that periodically captures stack traces from the server's threads, aggregating data to attribute CPU time to specific plugins, classes and methods — with minimal overhead, since a profiler that slows the server down produces skewed results. The data becomes a browsable web report with flame graphs and a per-plugin breakdown. The companion site, Express with SQLite, hosts these reports and is currently live in production: every session generates a short unique code for sharing without an account.",
   "h": [
    "A sampling profiler written from scratch in Java, with negligible overhead while capturing on a live server",
    "CPU time attribution per plugin/class/method and interactive HTML reports without heavy external libraries",
    "An Express/SQLite backend actually running in production, with short codes for sharing reports",
    "Consistent visual identity and UX between plugin and site, positioning it as a credible alternative to an established tool"
   ]
  }
 },
 {
  "id": "discord-bots",
  "it": {
   "title": "Bot Discord per Vendite &amp; Automazioni",
   "desc": "Bot in discord.py e discord.js v14 per ordini e vendite: ticket dedicati, thread privati, pannelli con bottoni ed embed, Components V2.",
   "intro": "Molte community e client che vendono prodotti o servizi su Discord finiscono per gestire gli ordini a mano: messaggi privati che si accumulano, nessuno storico chiaro di chi ha pagato cosa. Ho sviluppato una famiglia di bot pensata per automatizzare l'intero flusso di vendita, dall'apertura dell'ordine alla consegna.",
   "approach": "Il progetto comprende più bot, scritti sia in discord.py che in discord.js v14 a seconda del client: alcuni pannelli restano semplici con embed e bottoni classici, altri sfruttano le Components V2 per interfacce più strutturate. Il cuore del sistema è il pannello di vendita: un messaggio con bottoni che, al click, apre un thread privato dedicato al cliente, dove si gestisce l'intero ordine senza intasare i canali pubblici.",
   "h": [
    "Thread privati per ogni cliente invece di canali dedicati: niente accumulo di canali morti",
    "Uso delle Components V2 per pannelli con più stati invece del solito embed statico",
    "Gestione parallela di due stack diversi, Python e Node.js, con la stessa logica di business",
    "Permessi e visibilità pensati attorno ai ruoli dello staff: il cliente resta contenuto nel proprio thread"
   ]
  },
  "en": {
   "title": "Discord Bots for Sales &amp; Automation",
   "desc": "Bots in discord.py and discord.js v14 for orders and sales: dedicated tickets, private threads, button and embed panels, Components V2.",
   "intro": "Communities and clients selling digital goods or services on Discord often end up managing orders by hand: private messages piling up, no clear record of who paid for what. I built a family of bots to automate the entire sales flow, from opening an order to delivering it.",
   "approach": "The project spans multiple bots, written in both discord.py and discord.js v14 depending on the client: some panels stay simple with classic embeds and buttons, others lean on Components V2 for more structured interfaces. The core of the system is the sales panel: a message with buttons that, on click, opens a private thread dedicated to that customer, where the whole order gets handled without cluttering public channels.",
   "h": [
    "Private per-customer threads instead of dedicated channels: no pile-up of dead channels",
    "Components V2 used for multi-state panels instead of a single static embed that never changes",
    "Running two different stacks in parallel, Python and Node.js, with the same business logic",
    "Permissions and visibility built around staff roles: the customer stays contained inside their own thread"
   ]
  }
 },
 {
  "id": "community-platform",
  "it": {
   "title": "Piattaforma Web Comunitaria",
   "desc": "Sito Next.js con home e forum per un network Minecraft: ruoli (owner/staff/membro), permessi granulari, sistema di tag utente.",
   "intro": "Ogni network Minecraft con una community anche solo moderatamente attiva finisce per avere lo stesso problema: Discord va bene per la chat del momento, ma non è un posto dove le informazioni restano. Per questo network mi è stato chiesto di costruire un sito vero e proprio: una home che rappresentasse il progetto e un forum stabile per la community.",
   "approach": "Ho scelto Next.js per avere sia la home statica e SEO-friendly sia le pagine dinamiche del forum nello stesso progetto. Il cuore del sistema è la gestione dei ruoli: owner, staff e membro determinano cosa si vede e cosa si può fare. Sopra i ruoli ho costruito un livello di permessi più granulare, perché uno staff con compiti diversi ha bisogno di più di un'unica etichetta. Un sistema di tag utente completa il tutto, dando identità visiva ai profili.",
   "h": [
    "Gerarchia di ruoli (owner/staff/membro) che guida sia la UI che le azioni permesse, non un badge decorativo",
    "Permessi granulari sopra i ruoli base, per gestire uno staff con compiti diversi",
    "Sistema di tag utente per rendere leggibile a colpo d'occhio chi sei nella community",
    "Un solo progetto Next.js per home pubblica e forum, invece di due applicazioni separate"
   ]
  },
  "en": {
   "title": "Community Web Platform",
   "desc": "Next.js site with a home page and forum for a Minecraft network: roles (owner/staff/member), granular permissions, user tag system.",
   "intro": "Every Minecraft network with even a moderately active community runs into the same problem: Discord is fine for the moment-to-moment chat, but it's not a place where information sticks around. For this network I was asked to build an actual website: a home page representing the project, and a stable forum for the community.",
   "approach": "I went with Next.js so the static, SEO-friendly home page and the dynamic forum pages could live in the same project. The core of the system is role management: owner, staff and member determine what you can see and do. On top of the roles I built a more granular permission layer, because a single \"staff\" role isn't enough once the team has different responsibilities. A user tag system rounds it out, giving profiles a visual identity.",
   "h": [
    "Role hierarchy (owner/staff/member) that drives both the UI and the allowed actions, not just a decorative badge",
    "Granular permissions layered on top of the base roles, for a staff team with different responsibilities",
    "A user tag system that makes it obvious at a glance who someone is in the community",
    "One Next.js project for both the public home page and the forum, instead of two separate apps"
   ]
  }
 },
 {
  "id": "anongram",
  "it": {
   "title": "AnonGram — Client Telegram Desktop",
   "desc": "Client desktop non ufficiale per Telegram in Python (Telethon + PySide6/Qt): avatar e menzioni cliccabili, profilo, ultimo accesso, exe standalone.",
   "intro": "AnonGram è un client desktop non ufficiale per Telegram che ho scritto da zero in Python, senza basarmi su wrapper già pronti. L'idea è nata dalla voglia di un client più snello e personalizzabile, con funzionalità che nei client ufficiali mancano: menzioni cliccabili, avatar cliccabili, una vera pagina profilo e lo stato \"visto alle\" mostrato in modo chiaro.",
   "approach": "Per parlare con Telegram uso Telethon, che implementa il protocollo MTProto e gestisce sessioni, aggiornamenti in tempo reale e media. L'interfaccia è costruita con PySide6/Qt: niente Electron, binding Qt nativi per Python. Il punto più delicato è stato far convivere il loop asyncio di Telethon con l'event loop di Qt, così i nuovi messaggi arrivano senza bloccare l'interfaccia. Il tutto è impacchettato con PyInstaller in un eseguibile standalone.",
   "h": [
    "Sincronizzazione tra il loop asyncio di Telethon e l'event loop di Qt, per aggiornamenti live senza bloccare l'interfaccia",
    "Avatar e menzioni cliccabili che aprono direttamente la pagina profilo dell'utente",
    "Gestione e visualizzazione in tempo reale dello stato \"visto alle\"",
    "Packaging in eseguibile standalone con PyInstaller, zero installazione di dipendenze per l'utente finale"
   ]
  },
  "en": {
   "title": "AnonGram — Desktop Telegram Client",
   "desc": "Unofficial desktop Telegram client in Python (Telethon + PySide6/Qt): clickable avatars and mentions, profile, last seen, standalone exe.",
   "intro": "AnonGram is an unofficial Telegram desktop client I built from scratch in Python, without relying on pre-made UI wrappers. The idea came from wanting a leaner, more customizable client, with features official clients lack: clickable mentions, clickable avatars, a real profile page, and a clearly visible \"last seen\" status.",
   "approach": "For talking to Telegram I use Telethon, which implements the MTProto protocol and handles sessions, real-time updates and media. The interface is built with PySide6/Qt: no Electron, native Qt bindings for Python. The trickiest part was getting Telethon's asyncio loop to cooperate with Qt's event loop, so new messages arrive without blocking the UI. Everything is packaged with PyInstaller into a standalone executable.",
   "h": [
    "Bridging Telethon's asyncio loop with Qt's event loop for live updates without blocking the UI",
    "Clickable avatars and mentions that open the user's profile page directly",
    "Real-time tracking and display of \"last seen\" status",
    "Packaged as a standalone executable with PyInstaller, no dependency installation required for end users"
   ]
  }
 },
 {
  "id": "chrome-extension",
  "it": {
   "title": "Estensione Chrome per Notifiche Live",
   "desc": "Manifest V3, WebSocket (SignalR) verso un marketplace per segnalare nuovi ordini all'istante: notifiche desktop, suono, integrazione Discord.",
   "intro": "Su un marketplace di prodotti digitali il tempo di reazione a un nuovo ordine conta quasi quanto il prezzo. Ho costruito questa estensione Chrome per eliminare quel ritardo: resta in ascolto in background e avvisa nell'istante esatto in cui arriva un nuovo ordine, senza bisogno di tenere aperta o aggiornare manualmente nessuna pagina.",
   "approach": "È un'estensione Manifest V3, quindi tutta la logica vive in un service worker che Chrome può sospendere in qualsiasi momento: gestire questo ciclo di vita è stato il vincolo principale. Il worker apre una connessione WebSocket verso il canale realtime del marketplace via SignalR e resta in ascolto degli eventi. Quando arriva un ordine, il worker mostra una notifica desktop, riproduce un suono tramite un offscreen document dedicato e inoltra i dettagli a Discord.",
   "h": [
    "Gestione del ciclo di vita del service worker MV3: riconnessione pulita al WebSocket senza perdere eventi",
    "Client SignalR implementato a mano invece di appoggiarsi a una libreria pensata per un altro runtime",
    "Offscreen document per l'audio: l'unico modo pulito per riprodurre un suono da un service worker MV3",
    "Discord come canale di notifica secondario, per dare visibilità a tutto il team"
   ]
  },
  "en": {
   "title": "Chrome Extension for Live Notifications",
   "desc": "Manifest V3, WebSocket (SignalR) to an online marketplace to flag new orders instantly: desktop notifications, sound, Discord integration.",
   "intro": "On a digital goods marketplace, how fast you notice a new order matters almost as much as the price itself. I built this Chrome extension to close that gap: it listens in the background and alerts the moment a new order comes in, with no page to keep open or manually refresh.",
   "approach": "It's a Manifest V3 extension, so all the logic lives in a service worker that Chrome can suspend at any time — handling that lifecycle was the main constraint the architecture had to be built around. The worker opens a WebSocket connection to the marketplace's real-time channel via SignalR and listens for events. When an order comes in, the worker fires a desktop notification, plays an alert sound through a dedicated offscreen document, and forwards the order details to Discord.",
   "h": [
    "Managing the MV3 service worker lifecycle: reconnecting the WebSocket cleanly without dropping events",
    "Hand-rolled SignalR client instead of pulling in a library built for a different runtime",
    "An offscreen document for audio: the only clean way to play a sound from an MV3 service worker",
    "Discord as a secondary notification channel, so the whole team has visibility"
   ]
  }
 }
];

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

  $('#year').textContent = new Date().getFullYear();
  setLang(lang);
})();
