import { SKILLS } from "@/lib/content";
import { tr } from "@/lib/types";

export type Lang = "it" | "en";


export function buildSkillAccentMap(lang: Lang): Record<string, string> {
    const map: Record<string, string> = {};
    SKILLS.forEach((group, idx) => {
        const accent = (group as any).accent;
        (group.items as any[]).forEach((item) => {
            if (typeof item === "string") {
                map[item] = accent;
            } else {
                map[tr(item, "it")] = accent;
                map[tr(item, "en")] = accent;
            }
        });
    });
    return map;
}

export function getSkillAccent(tag: string, lang: Lang): string {
    const map = buildSkillAccentMap(lang);
    return map[tag];
}
