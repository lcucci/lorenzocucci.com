import type { Metadata } from "next";
import { SITE } from "@/lib/content/site";
import type { MLString, Lang } from "@/lib/types";

type PageSeo = {
    title: MLString;
    description: MLString;
    keywords?: Record<Lang, string[]>;
};

export type PageKey = "home" | "experience" | "projects" | "certifications";

/** Route segment (after /[lang]) for each page */
const PAGE_SLUG: Record<PageKey, string> = {
    home: "",
    experience: "/experience",
    projects: "/projects",
    certifications: "/certifications",
};

/** Default public base URL used to build canonicals and alternates. */
const DEFAULT_BASE_URL = "https://lorenzocucci.com";

/** Language to locale mapping for OG metadata */
const OG_LOCALE: Record<Lang, string> = {
    it: "it_IT",
    en: "en_US",
};

export const SEO: Record<PageKey, PageSeo> = {
    home: {
        title: { en: "Lorenzo Cucci - Portfolio", it: "Lorenzo Cucci - Portfolio" },
        description: {
            en: "Backend Developer • Data Analyst. Portfolio with projects, experience and certifications.",
            it: "Sviluppatore Backend • Data Analyst. Portfolio con progetti, esperienza e certificazioni.",
        },
        keywords: {
            en: ["Lorenzo Cucci", "Portfolio", "Backend Developer", "Data Analyst", "TypeScript", "Next.js"],
            it: ["Lorenzo Cucci", "Portfolio", "Sviluppatore Backend", "Data Analyst", "TypeScript", "Next.js"],
        },
    },
    experience: {
        title: { en: "Experience | Lorenzo Cucci", it: "Esperienza | Lorenzo Cucci" },
        description: {
            en: "Professional experience, roles and responsibilities, notable projects and impact.",
            it: "Esperienze professionali, ruoli e responsabilità, progetti svolti e risultati.",
        },
        keywords: {
            en: ["Experience", "Backend", "Java", "Spring", "SQL", "APIs"],
            it: ["Esperienza", "Backend", "Java", "Spring", "SQL", "API"],
        },
    },
    projects: {
        title: { en: "Projects | Lorenzo Cucci", it: "Progetti | Lorenzo Cucci" },
        description: {
            en: "Personal and open-source projects with code, stack and learnings.",
            it: "Progetti personali e open-source con codice, stack e lezioni apprese.",
        },
        keywords: {
            en: ["Projects", "Open Source", "TypeScript", "Python", "PostgreSQL"],
            it: ["Progetti", "Open Source", "TypeScript", "Python", "PostgreSQL"],
        },
    },
    certifications: {
        title: { en: "Certifications | Lorenzo Cucci", it: "Certificazioni | Lorenzo Cucci" },
        description: {
            en: "Professional certifications and credentials.",
            it: "Certificazioni professionali e credenziali.",
        },
        keywords: {
            en: ["Certifications", "Cloud", "Developer"],
            it: ["Certificazioni", "Cloud", "Developer"],
        },
    },
};

/** Returns the localized title/description/keywords for the given page. */
export const getSeo = (page: PageKey, lang: Lang) => {
    const s = SEO[page];
    return {
        title: s.title[lang],
        description: s.description[lang],
        keywords: s.keywords?.[lang] ?? [],
    };
};

/** Builds the per-page path like /it/projects or /en. */
export const getPagePath = (page: PageKey, lang: Lang): string => {
    const slug = PAGE_SLUG[page];
    return `/${lang}${slug}`;
};

/** Full absolute URL for a page, using the provided baseUrl or a sensible default. */
export const getPageUrl = (
    page: PageKey,
    lang: Lang,
    baseUrl: string = DEFAULT_BASE_URL,
): string => {
    const path = getPagePath(page, lang);
    return `${baseUrl.replace(/\/$/, "")}${path}`;
};

/** Builds <link rel="alternate" hreflang="..."> URLs for both languages. */
export const getLanguageAlternates = (
    page: PageKey,
    baseUrl: string = DEFAULT_BASE_URL,
): Record<string, string> => ({
    it: getPageUrl(page, "it", baseUrl),
    en: getPageUrl(page, "en", baseUrl),
});

/**
 * Build Next.js Metadata for a given page and language.
 * Use in route files with generateMetadata or export const metadata.
 */
export const buildMetadata = (
    page: PageKey,
    lang: Lang,
    opts?: {
        baseUrl?: string;
        index?: boolean;
    },
): Metadata => {
    const baseUrl = (opts?.baseUrl || DEFAULT_BASE_URL).replace(/\/$/, "");
    const { title, description, keywords } = getSeo(page, lang);
    const url = getPageUrl(page, lang, baseUrl);
    const alternates = getLanguageAlternates(page, baseUrl);

    return {
        metadataBase: new URL(baseUrl),
        title,
        description,
        applicationName: SITE.title.en,
        authors: [{ name: SITE.title.en, url: baseUrl }],
        creator: SITE.title.en,
        publisher: SITE.title.en,
        keywords,
        robots: {
            index: opts?.index ?? true,
            follow: true,
            googleBot: {
                index: opts?.index ?? true,
                follow: true,
            },
        },
        alternates: {
            canonical: url,
            languages: alternates,
        },
        openGraph: {
            type: "website",
            title,
            description,
            url,
            siteName: SITE.title.en,
            locale: OG_LOCALE[lang],
            alternateLocale: Object.values(OG_LOCALE).filter((l) => l !== OG_LOCALE[lang]),
        },
        twitter: {
            card: "summary",
            title,
            description,
            site: "@lorenzocucci", // update if you want to use a real handle
        },
        icons: {
            icon: "/favicon.ico",
        },
    };
};

/** Helper to plug directly into route files: export const generateMetadata = makeGenerateMetadata("home") */
export const makeGenerateMetadata = (
    page: PageKey,
    opts?: { baseUrl?: string; index?: boolean },
) => {
    return ({ params }: { params: { lang?: Lang } }): Metadata =>
        buildMetadata(page, (params?.lang as Lang) || "it", opts);
};
