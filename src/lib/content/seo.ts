import type { MLString } from "./types";

type PageSeo = {
    title: MLString;
    description: MLString;
};

export const SEO: Record<string, PageSeo> = {
    home: {
        title: { en: "Lorenzo Cucci — Portfolio", it: "Lorenzo Cucci — Portfolio" },
        description: {
            en: "Backend developer and data-driven builder. Projects, experience, certifications.",
            it: "Sviluppatore backend e data-driven. Progetti, esperienza, certificazioni.",
        },
    },
    experience: {
        title: { en: "Experience", it: "Esperienza" },
        description: {
            en: "Roles, responsibilities, and impact across projects.",
            it: "Ruoli, responsabilità e impatto sui progetti.",
        },
    },
    projects: {
        title: { en: "Projects", it: "Progetti" },
        description: {
            en: "Selected personal and open-source projects.",
            it: "Selezione di progetti personali e open-source.",
        },
    },
    certifications: {
        title: { en: "Certifications", it: "Certificazioni" },
        description: {
            en: "Relevant certifications and achievements.",
            it: "Certificazioni e risultati rilevanti.",
        },
    },
    skills: {
        title: { en: "Skills", it: "Competenze" },
        description: {
            en: "Tech stack and tooling I use.",
            it: "Stack tecnologico e strumenti che utilizzo.",
        },
    },
} as const;
