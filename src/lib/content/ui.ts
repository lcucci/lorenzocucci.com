import type { MLString } from "./types";

export const UI = {
    nav: {
        home: { en: "Home", it: "Home" } as MLString,
        experience: { en: "Experience", it: "Esperienza" } as MLString,
        projects: { en: "Projects", it: "Progetti" } as MLString,
        certifications: { en: "Certifications", it: "Certificazioni" } as MLString,
        skills: { en: "Skills", it: "Competenze" } as MLString,
        language: { en: "Language", it: "Lingua" } as MLString,
        theme: { en: "Theme", it: "Tema" } as MLString,
    },
    actions: {
        viewCredential: { en: "Credential", it: "Credenziale" } as MLString,
        viewCode: { en: "Code", it: "Code" } as MLString,
    },
    ui: {
        expand: { en: "Expand", it: "Espandi" } as MLString,
        collapse: { en: "Collapse", it: "Comprimi" } as MLString,
    },
    social: {
        github: { en: "GitHub", it: "GitHub" } as MLString,
        linkedin: { en: "LinkedIn", it: "LinkedIn" } as MLString,
    },
    misc: {
        updated: { en: "Updated", it: "Aggiornato" } as MLString,
    },
} as const;
