import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://lorenzocucci.com";

    const languages = ["it", "en"] as const;
    const slugs = ["", "experiences", "projects", "certifications"] as const;

    const entries: MetadataRoute.Sitemap = [];

    for (const slug of slugs) {
        const urlsByLang = Object.fromEntries(
            languages.map((lang) => [
                lang,
                `${base}/${lang}${slug ? `/${slug}` : ""}`,
            ])
        ) as Record<(typeof languages)[number], string>;

        for (const lang of languages) {
            entries.push({
                url: urlsByLang[lang],
                lastModified: new Date(),
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
