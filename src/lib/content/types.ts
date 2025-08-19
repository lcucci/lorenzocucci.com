export type Lang = "en" | "it";

/** Multilingual single string: { en: "...", it: "..." } */
export type MLString = Record<Lang, string>;

/** Multilingual list of strings: { en: ["..."], it: ["..."] } */
export type MLStringList = Record<Lang, string[]>;

/** Helper: pick the localized string */
export const tr = (s: MLString, lang: Lang): string => s?.[lang] ?? "";

/** Helper: pick the localized list */
export const trList = (s: MLStringList, lang: Lang): string[] => s?.[lang] ?? [];


export interface ExperienceProject {
    name: MLString;
    bullets?: MLStringList;
    stack?: string[];
}

export interface Experience {
    company: MLString;
    companyLogo?: string;
    companyUrl?: string;
    role: MLString;
    location: MLString;
    period: MLString;
    projects?: ExperienceProject[];
}

export interface Project {
    name: MLString;
    logo?: string;
    url?: string;
    description?: MLString;
    skills?: string[];
    codeUrl?: string;
}

export interface Certification {
    name: MLString;
    issuer: MLString;
    logo?: string;
    url?: string;
    period: MLString;
    description: MLString;
    skills: string[];
    credentialUrl?: string;
}

export interface Skill {
    group: MLString;
    items: Array<MLString | string>;
}
