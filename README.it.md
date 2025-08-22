# lorenzocucci.com

[![en](https://img.shields.io/badge/lang-english-blue.svg)](https://github.com/lcucci/lorenzocucci.com/blob/main/README.md)

Sito personale/portfolio di **Lorenzo Cucci**, sviluppato in Next.js + TypeScript e Tailwind CSS.
È una vetrina professionale con contenuti bilingue (IT/EN), ottimizzata per SEO e responsive design.

---


## ✨ Funzionalità

* Navigazione multilingua (Italiano/Inglese)
* Gestione centralizzata di titoli, descrizioni e SEO (`lib/content/seo.ts`)
* Navbar e menu hamburger responsive con animazioni
* Badge e card con stili personalizzati e colori coerenti per le competenze
* Layout ottimizzato per desktop e mobile
* Contenuti strutturati: Esperienze, Progetti, Certificazioni, Competenze

---


## 🛠️ Tecnologie utilizzate

* **Next.js (App Router)** - framework React con supporto SSR/SSG
* **TypeScript** - tipizzazione rigorosa
* **Tailwind CSS** - styling con variabili di tema e dark mode
* **Lucide/Tabler Icons** - icone leggere e scalabili
* **Docker** - per build e deploy consistenti

---

## 🚀 Deployment

Il sito è attualmente deployato su [Railway](https://railway.app) ed è disponibile all'url [lorenzocucci.com](https://lorenzocucci.com).

---

## 🗂️ Struttura del progetto

```
.
├── public/                      # File pubblici
│   └── logo.png                 # Logo del sito
├── src/                         # Codice sorgente
│   ├── app/                     # Pagine e layout principali
│   │   ├── (lang)/              # Routing per lingua (es. it, en)
│   │   │   ├── certifications/  # Pagina e client component certificazioni
│   │   │   ├── experience/      # Pagina e client component esperienze
│   │   │   ├── projects/        # Pagina e client component progetti
│   │   │   ├── layout.tsx       # Layout per lingua
│   │   │   └── page.tsx         # Homepage per lingua
│   │   ├── globals.css          # Stili globali
│   │   └── layout.tsx           # Layout root dell’app
│   │
│   ├── components/              # Componenti riusabili
│   │   ├── hooks/               # Custom hooks (lingua, tema, ecc.)
│   │   ├── layout/              # Componenti di layout (Header, Footer, Shell)
│   │   ├── ui/                  # Componenti UI atomici (Badge, Logo, NavLink...)
│   │   └── utils/               # Utility e helper per componenti
│   │
│   └── lib/                     # Librerie e contenuti centralizzati
│       ├── content/             # Dizionari, SEO, contenuti strutturati
│       └── types/               # Tipi e interfacce TypeScript condivise
│
├── Dockerfile                   # Configurazione build container
├── next-env.d.ts                # Tipi generati per Next.js
├── next.config.ts               # Configurazione Next.js
├── package.json                 # Dipendenze e script del progetto
├── README.md                    # Documentazione del progetto
├── tailwind.config.ts           # Configurazione Tailwind CSS
└── tsconfig.json                # Configurazione TypeScript
```