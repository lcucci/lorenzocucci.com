import type { Metadata } from "next";

export type Lang = "it" | "en";
export type PageKey = "home" | "projects" | "experience" | "certifications";

type BuildOpts = {
    noindex?: boolean;
    image?: string;
    lastModified?: string; // ISO string if you want to surface freshness in OG
};

const SITE_URL = "https://lorenzocucci.com";
const DEFAULT_LANG: Lang = "it";
const DEFAULT_OG = `${SITE_URL}/og/cover.jpg`; // 1200x630 recommended

const LOCALES: Record<Lang, string> = {
    it: "it_IT",
    en: "en_US",
};

const PAGE_SLUGS: Record<PageKey, Record<Lang, string>> = {
    home: { it: "/it", en: "/en" },
    projects: { it: "/it/projects", en: "/en/projects" },
    experience: { it: "/it/experience", en: "/en/experience" },
    certifications: { it: "/it/certifications", en: "/en/certifications" },
};

const TITLES: Record<PageKey, Record<Lang, string>> = {
    home: {
        it: "Lorenzo Cucci - Sviluppatore Backend & Data Analyst",
        en: "Lorenzo Cucci - Backend Developer & Data Analyst",
    },
    projects: {
        it: "Progetti | Lorenzo Cucci",
        en: "Projects | Lorenzo Cucci",
    },
    experience: {
        it: "Esperienza | Lorenzo Cucci",
        en: "Experience | Lorenzo Cucci",
    },
    certifications: {
        it: "Certificazioni | Lorenzo Cucci",
        en: "Certifications | Lorenzo Cucci",
    },
};

const DESCRIPTIONS: Record<PageKey, Record<Lang, string>> = {
    home: {
        it: "Sviluppatore backend e data analyst a Milano, Italia. Portfolio con progetti, esperienza e certificazioni.",
        en: "Backend developer and data analyst based in Milan, Italy. Portfolio with projects, experience and certifications.",
    },
    projects: {
        it: "Progetti personali e open-source con codice, stack e lezioni apprese.",
        en: "Personal and open-source projects with code, stack and learnings.",
    },
    experience: {
        it: "Esperienze professionali, ruoli e responsabilità, progetti svolti e risultati.",
        en: "Professional experience, roles and responsibilities, notable projects and impact.",
    },
    certifications: {
        it: "Certificazioni professionali e credenziali.",
        en: "Professional certifications and credentials.",
    },
};

const KEYWORDS: Record<PageKey, Record<Lang, string[]>> = {
    home: {
        it: ["Lorenzo Cucci", "portfolio", "sviluppatore", "backend", "portfolio sviluppatore", "sviluppatore backend", "data analyst", "Milano", "Italia"],
        en: ["Lorenzo Cucci", "portfolio", "developer", "backend", "developer portfolio", "backend developer", "data analyst", "Milan", "Italy"],
    },
    projects: {
        it: ["progetti Lorenzo Cucci", "progetti", "open source", "GitHub", "TrovaBenzinaBot", "Trova Benzina", "MoneyIsTime"],
        en: ["Lorenzo Cucci projects", "projects", "open source", "GitHub", "TrovaBenzinaBot", "Trova Benzina", "MoneyIsTime"],
    },
    experience: {
        it: ["esperienza Lorenzo Cucci", "esperienza", "sviluppo backend", "analisi dati", "consulenza informatica", "Sopra Steria", "Assago", "GFT", "Milano", "Italia", "Java", "SQL"],
        en: ["Lorenzo Cucci experience", "experience", "backend engineering", "data analytics", "IT consulting", "Sopra Steria", "Assago", "GFT", "Milan", "Italy", "Java", "SQL"],
    },
    certifications: {
        it: ["certificazioni Lorenzo Cucci", "certificazioni", "Google Cloud", "Cloud Digital Leader"],
        en: ["Lorenzo Cucci certifications", "certifications", "Google Cloud", "Cloud Digital Leader"],
    },
};

function ensureLang(lang?: Lang): Lang {
    return (lang === "it" || lang === "en") ? lang : DEFAULT_LANG;
}

function canonicalOf(page: PageKey, lang: Lang): string {
    return `${SITE_URL}${PAGE_SLUGS[page][lang]}`;
}

function languageAlternatesOf(page: PageKey): Record<string, string> {
    return {
        it: `${SITE_URL}${PAGE_SLUGS[page].it}`,
        en: `${SITE_URL}${PAGE_SLUGS[page].en}`,
        "x-default": `${SITE_URL}${PAGE_SLUGS[page].it}`,
    };
}

export function buildMetadata(
    page: PageKey,
    langInput?: Lang,
    opts?: BuildOpts
): Metadata {
    const lang = ensureLang(langInput);
    const title = TITLES[page][lang];
    const description = DESCRIPTIONS[page][lang];
    const image = opts?.image ?? DEFAULT_OG;
    const canonical = canonicalOf(page, lang);

    return {
        metadataBase: new URL(SITE_URL),
        title,
        description,
        applicationName: "Lorenzo Cucci",
        authors: [{ name: "Lorenzo Cucci", url: SITE_URL }],
        keywords: KEYWORDS[page][lang],
        alternates: {
            canonical,
            languages: languageAlternatesOf(page),
        },
        robots: {
            index: !opts?.noindex,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
        openGraph: {
            type: "website",
            locale: LOCALES[lang],
            siteName: "Lorenzo Cucci",
            title,
            description,
            url: canonical,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
        icons: {
            icon: [
                { url: "/favicon.ico" },
                { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
                { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            ],
            apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
            shortcut: ["/favicon.ico"],
        },
        referrer: "strict-origin-when-cross-origin",
        themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffffff" }, { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" }],
        other: {
            // Keep lean. Add verification tags here if needed.
            "color-scheme": "light dark",
        },
    };
}

/**
 * Helper to expose canonical URL in components if needed.
 */
export function getCanonicalUrl(page: PageKey, lang?: Lang): string {
    return canonicalOf(page, ensureLang(lang));
}
