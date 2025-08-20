import type { MLString } from "./types";

export const SITE = {
    title: { en: "Lorenzo Cucci", it: "Lorenzo Cucci" } as MLString,
    subtitle: {
        en: "Backend Developer • Data Analyst",
        it: "Sviluppatore Backend • Data Analyst",
    } as MLString,
    tagline: {
        en: "Backend Developer with a data-driven mindset",
        it: "**Sviluppatore backend con una mente data‑driven**",
    } as MLString,
    hero: {
        intro: {
            en: "Hi, I'm Lorenzo 👋",
            it: "Ciao, sono Lorenzo 👋",
        } as MLString,
        long: {
            en: "I’m a **backend developer with a data-driven mindset**.\n\n" +
                "_BANKING EXPERIENCE_. I have collaborated with some of the **leading European banking groups**, taking care of analysis, design, and implementation of key applications.\n\n" +
                "_FOCUS ON BACKEND, ATTENTION TO DATA_. I mainly work with **Java and Spring**, with particular attention to **optimized SQL queries, efficient processes, and well-structured databases**.",
            it:
                "Sono uno **sviluppatore backend con una mente data-driven**.\n\n" +
                "_ESPERIENZA IN AMBITO BANCARIO_. Ho collaborato con alcuni tra i **principali gruppi bancari europei**, seguendo in prima persona analisi, progettazione e implementazione di applicativi chiave.\n\n" +
                "_FOCUS SUL BACKEND, ATTENZIONE AI DATI_. Lavoro soprattutto con **Java e Spring**, con un’attenzione particolare a **query SQL ottimizzate, processi efficienti e database ben strutturati**.\n\n"
        } as MLString,
    },
    sections: {
        experience: { en: "Professional experience", it: "Esperienza professionale" } as MLString,
        projects: { en: "Personal projects", it: "Progetti personali" } as MLString,
        certifications: { en: "Certifications", it: "Certificazioni" } as MLString,
        skills: { en: "Skills", it: "Competenze" } as MLString,
    },
    home: {
        toolbelt: { en: "Skills", it: "Competenze" } as MLString,
    },
} as const;
