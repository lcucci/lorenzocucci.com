export type Lang = "en" | "it";
export type Theme = "light" | "dark";

/** Multilingual single string: { en: "...", it: "..." } */
export type MLString = Record<Lang, string>;

/** Multilingual list of strings: { en: ["..."], it: ["..."] } */
export type MLStringList = Record<Lang, string[]>;

/** Helper: pick the localized string */
export const tr = (s: MLString, lang: Lang): string => s?.[lang] ?? "";

/** Helper: pick the localized list */
export const trList = (s: MLStringList, lang: Lang): string[] => s?.[lang] ?? [];