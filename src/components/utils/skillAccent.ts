import { SKILLS, tr } from "@/lib/content";

export type Lang = "it" | "en";

const ACCENT_FALLBACKS = [
    "oklch(72% 0.18 45)",
    "oklch(70% 0.17 145)",
    "oklch(69% 0.16 200)",
    "oklch(67% 0.16 255)",
    "oklch(66% 0.16 300)",
    "oklch(71% 0.17 20)",
];

export function buildSkillAccentMap(lang: Lang): Record<string, string> {
    const map: Record<string, string> = {};
    SKILLS.forEach((group, idx) => {
        const accent = (group as any).accent ?? ACCENT_FALLBACKS[idx % ACCENT_FALLBACKS.length];
        (group.items as any[]).forEach((item) => {
            if (typeof item === "string") {
                map[item] = accent;                    // label “grezza”
            } else {
                map[tr(item, "it")] = accent;          // label IT
                map[tr(item, "en")] = accent;          // label EN
            }
        });
    });
    return map;
}

export function getSkillAccent(tag: string, lang: Lang): string {
    const map = buildSkillAccentMap(lang);
    return map[tag] ?? ACCENT_FALLBACKS[0];
}
