// app/sitemap.ts
import type { MetadataRoute } from "next";

type Lang = "it" | "en";
type Slug = "" | "experiences" | "projects" | "certifications";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://lorenzocucci.com";
    const languages: Lang[] = ["it", "en"];
    const slugs: Slug[] = ["", "experiences", "projects", "certifications"];

    // Edit these ISO dates whenever you actually update the corresponding page.
    const LAST_MODIFIED: Record<Lang, Record<Slug, string>> = {
        it: {
            "": "2025-09-06T18:45:05.071Z",
            experiences: "2025-09-06T18:45:05.071Z",
            projects: "2025-09-06T18:45:05.071Z",
            certifications: "2025-09-06T18:45:05.071Z",
        },
        en: {
            "": "2025-09-06T18:45:05.071Z",
            experiences: "2025-09-06T18:45:05.071Z",
            projects: "2025-09-06T18:45:05.071Z",
            certifications: "2025-09-06T18:45:05.071Z",
        },
    };

    const entries: MetadataRoute.Sitemap = [];

    for (const slug of slugs) {
        const urlsByLang = Object.fromEntries(
            languages.map((lang) => [lang, `${base}/${lang}${slug ? `/${slug}` : ""}`])
        ) as Record<Lang, string>;

        for (const lang of languages) {
            entries.push({
                url: urlsByLang[lang],
                //lastModified: new Date(),
                lastModified: LAST_MODIFIED[lang][slug],
                changeFrequency: "monthly",
                priority: slug === "" ? 1.0 : 0.8,
                alternates: {
                    languages: {
                        it: urlsByLang.it,
                        en: urlsByLang.en,
                    },
                },
            });
        }
    }

    return entries;
}
