import type { MLString } from "./types";

export const SITE = {
    title: { en: "Lorenzo Cucci", it: "Lorenzo Cucci" } as MLString,
    subtitle: {
        en: "Backend Developer • Data Analyst",
        it: "Sviluppatore Backend • Data Analyst",
    } as MLString,
    tagline: {
        en: "TODO",
        it: "TODO",
    } as MLString,
    hero: {
        intro: {
            en: "Hi, I'm Lorenzo 👋",
            it: "Ciao, sono Lorenzo 👋",
        } as MLString,
        long: {
            en: "TODO",
            it: "TODO",
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
