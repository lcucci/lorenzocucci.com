export const DICT = {
    en: {
        site: {
            title: "Lorenzo Cucci",
            subtitle: "Backend Developer • Data Analyst",
            tagline:
                "I build fast, data‑driven backends and tools. Banking-grade reliability, clean SQL, and tasteful automation.",
        },
        nav: {
            home: "Home",
            experience: "Experience",
            projects: "Projects",
            certifications: "Certifications",
            theme: "Theme",
            language: "Language",
        },
        hero: {
            intro: "Hi, I'm Lorenzo—based in Milan.",
            long:
                "I specialize in resilient backends (Java/Spring), tight SQL on PostgreSQL & Oracle, and pragmatic data workflows in Python. I enjoy shaving seconds off queries, automating the boring bits, and shipping clean, observable services.",
            github: "GitHub",
            linkedin: "LinkedIn",
        },
        experience: { title: "Professional Experience", now: "Present" },
        projects: { title: "Personal Projects", view: "View", toolbelt: "Skills" },
        certs: {
            title: "Certifications",
            view: "Credential",
            statusActive: "Active",
            statusPlanned: "Planned",
        },
        skills: {
            groups: {
                languages: "Languages",
                frameworks: "Frameworks",
                databases: "Databases",
                devops: "Cloud & DevOps",
                tools: "Tools",
                other: "Other",
            },
        },
        ui: {
            expand: "Expand",
            collapse: "Collapse",
        },
    },
    it: {
        site: {
            title: "Lorenzo Cucci",
            subtitle: "Sviluppatore Backend • Data Analyst",
            tagline:
                "Costruisco back‑end veloci e strumenti data‑driven. Affidabilità da banca, SQL pulito e automazioni eleganti.",
        },
        nav: {
            home: "Home",
            experience: "Esperienza",
            projects: "Progetti",
            certifications: "Certificazioni",
            theme: "Tema",
            language: "Lingua",
        },
        hero: {
            intro: "Ciao, sono Lorenzo 👋",
            long:
                "Mi occupo di back‑end robusti (Java/Spring), SQL ottimizzato su PostgreSQL e Oracle e flussi dati pragmatici in Python. Mi piace ridurre i tempi delle query, automatizzare il ripetitivo e rilasciare servizi puliti e monitorabili.",
            github: "GitHub",
            linkedin: "LinkedIn",
        },
        experience: { title: "Esperienza professionale", now: "Oggi" },
        projects: { title: "Progetti personali", view: "Apri", toolbelt: "Competenze" },
        certs: {
            title: "Certificazioni",
            view: "Credenziale",
            statusActive: "Attiva",
            statusPlanned: "In programma",
        },
        skills: {
            groups: {
                languages: "Linguaggi",
                frameworks: "Frameworks",
                databases: "Database",
                devops: "Cloud & DevOps",
                tools: "Strumenti",
                other: "Altro",
            },
        },
        ui: {
            expand: "Espandi",
            collapse: "Comprimi",
        },
    },
} as const;

export const EXPERIENCES = [
    {
        company: {
            en: "GFT",
            it: "GFT",
        },
        companyUrl: "https://www.gft.com",
        companyLogo: "https://media.licdn.com/dms/image/v2/C4D0BAQFiyyEUZjtqTg/company-logo_200_200/company-logo_200_200/0/1630489561779/gft_group_logo?e=1758153600&v=beta&t=bq8JDdcTVzrqyuvN-2CIG6NXSpbhxXNBn-QvzMerA0I",
        role: {
            en: "Backend Developer",
            it: "Sviluppatore Backend",
        },
        location: { en: "Milan, Italy", it: "Milano, Italia" },
        period: { en: "08/2024 – now", it: "08/2024 – ora" },
        projects: [
            {
                name: { en: "TODO", it: "_Banco BPM_, TODO" },
                bullets: {
                    en: [
                        "TODO",
                        "TODO",
                        "TODO",
                    ],
                    it: [
                        "TODO MWESG",
                        "TODO MWESG",
                        "TODO MWESG",
                    ],
                },
                stack: ["TODO"],
            },
        ]
    },
    {
        company: {
            en: "Sopra Steria",
            it: "Sopra Steria",
        },
        companyUrl: "https://www.soprasteria.com",
        companyLogo: "https://media.licdn.com/dms/image/v2/D4E0BAQF_0JqR2CRpJw/company-logo_200_200/company-logo_200_200/0/1688571543420/soprasteria_logo?e=1758153600&v=beta&t=LY7CGuYnEXGXJvoXFhTuG0_XWpRYmEwbOwofjg5Pe98",
        role: {
            en: "Backend Developer",
            it: "Sviluppatore Backend",
        },
        location: { en: "Milan, Italy", it: "Milano, Italia" },
        period: { en: "09/2021 – 07/2024", it: "09/2021 – 07/2024" },
        projects: [
            {
                name: { en: "TODO", it: "_Intesa Sanpaolo (ambito Finanza)_, applicativo per il calcolo del Rendiconto Costi Oneri e Incentivi MIFID II" },
                bullets: {
                    en: [
                        "TODO",
                        "TODO",
                        "TODO",
                    ],
                    it: [
                        "TODO RECOI",
                        "TODO RECOI",
                        "TODO RECOI",
                    ],
                },
                stack: ["TODO"],
            },
            {
                name: { en: "TODO", it: "_Intesa Sanpaolo (ambito Anti Financial Crime)_, applicativo per la registrazione degli omaggi e delle spese di rappresentanza di tutti i dipendenti della banca" },
                bullets: {
                    en: [
                        "TODO",
                        "TODO",
                        "TODO",
                    ],
                    it: [
                        "TODO REGOM",
                        "TODO REGOM",
                        "TODO REGOM",
                    ],
                },
                stack: ["TODO"],
            },
            {
                name: { en: "TODO", it: "_Intesa Sanpaolo (ambito Vigilanza)_, applicativo per il controllo delle regole aziendali tramite la somministrazione di checklist contabili" },
                bullets: {
                    en: [
                        "TODO",
                        "TODO",
                        "TODO",
                    ],
                    it: [
                        "TODO CLAS",
                        "TODO CLAS",
                        "TODO CLAS",
                    ],
                },
                stack: ["TODO"],
            },
            {
                name: { en: "TODO", it: "_Banco BPM_, TODO" },
                bullets: {
                    en: [
                        "TODO",
                        "TODO",
                        "TODO",
                    ],
                    it: [
                        "TODO MWESG",
                        "TODO MWESG",
                        "TODO MWESG",
                    ],
                },
                stack: ["TODO"],
            },
        ],
    },
];

export const PROJECTS = [
    {
        title: "TrovaBenzinaBot",
        logo: "https://raw.githubusercontent.com/lcucci/TrovaBenzinaBot/refs/heads/main/assets/images/botpic.png",
        description: {
            en: "Telegram bot that finds the cheapest fuel stations nearby with smart filtering and savings stats.",
            it: "Bot Telegram che trova i distributori più economici con filtri intelligenti e statistiche di risparmio.",
        },
        tags: ["Python", "PostgreSQL", "SQLAlchemy"],
        link: "https://github.com/lcucci/TrovaBenzinaBot",
    },
    {
        title: "MoneyIsTime (Chrome Extension)",
        logo: "https://github.com/lcucci/MoneyIsTime/blob/main/icons/icon-nobg.png?raw=true",
        description: {
            en: "Annotates prices on websites with the work time required to afford them, based on your salary.",
            it: "Mostra sui siti il tempo di lavoro necessario per acquistare un prodotto, in base al tuo stipendio.",
        },
        tags: ["JavaScript", "HTML", "CSS"],
        link: "https://github.com/lcucci/MoneyIsTime",
    },
    {
        title: "lorenzocucci.com",
        logo: "",
        description: {
            en: "TODO",
            it: "TODO",
        },
        tags: ["TODO"],
        link: "https://github.com/lcucci/lorenzocucci.com",
    },
];

export const CERTIFICATIONS = [
    {
        vendor: { en: "Google Cloud", it: "Google Cloud" },
        name: { en: "Cloud Digital Leader", it: "Cloud Digital Leader" },
        logo: "https://images.credly.com/images/2ab3ddc1-1867-40f2-94f7-09fd4037c93d/image.png",
        period: { en: "2024", it: "2024" },
        description: {
            en: "Foundational knowledge of cloud concepts, economics, and GCP services.",
            it: "Conoscenze fondamentali di concetti cloud, economia del cloud e servizi GCP."
        },
        skills: ["Cloud fundamentals", "GCP basics", "Security & compliance"],
        link: "https://cloud.google.com/certification/cloud-digital-leader"
    },
];


export const SKILLS = {
    languages: ["Java", "SQL", "Python", "JavaScript", "PHP"],
    frameworks: ["Spring", "Hibernate", "SQLAlchemy", "JPA", "JUnit"],
    databases: ["PostgreSQL", "Oracle DB", "MySQL", "MariaDB"],
    devops: ["Git", "RTC", "Maven", "Jenkins", "Jboss", "Google Cloud Platform"],
    tools: ["Microsoft Excel", "Postman", "IntelliJ", "Eclipse", "PyCharm", "WebStorm", "Erwin"],
    other: ["Jira", "Confluence", "ServiceNow", "Shell scripting"]
} as const;

export type SkillKey = keyof typeof SKILLS;
