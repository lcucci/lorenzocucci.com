"use client";

import React, { useState } from "react";
import SiteShell from "@/components/layout/SiteShell";
import { SectionTitle, BrandLogo } from "@/components/ui";
import { SITE, PROJECTS, UI } from "@/lib/content";
import { tr } from "@/lib/types";
import { Code2, ExternalLink, ChevronDown } from "lucide-react";
import { usePreferredLanguage, buildSkillAccentMap } from "@/components";
import Markdown from "@/components/utils/Markdown";

export default function ProjectsPage() {
    const { lang } = usePreferredLanguage();
    const accentMap = React.useMemo(() => buildSkillAccentMap(lang as "it" | "en"), [lang]);

    // All panels open by default
    const [open, setOpen] = useState<boolean[]>(() => PROJECTS.map(() => true));

    const toggle = (idx: number) =>
        setOpen(prev => {
            const next = [...prev];
            next[idx] = !next[idx];
            return next;
        });

    const onHeaderKey = (idx: number, e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle(idx);
        }
    };

    return (
        <SiteShell>
            <SectionTitle icon={Code2} title={tr(SITE.sections.projects, lang)} />
            <div className="space-y-4 mt-6">
                {PROJECTS.map((p, idx) => {
                    const title = tr(p.name, lang);
                    const desc = p.description ? tr(p.description, lang) : "";
                    const url = p.url;
                    const codeUrl = p.codeUrl;
                    const isOpen = open[idx];

                    const LinkWrap: React.FC<{ children: React.ReactNode }> = ({ children }) =>
                        url ? (
                            <a
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 group/link"
                                aria-label={title}
                                title={title}
                                onClick={(e) => e.stopPropagation()} // keep title clickable without toggling
                            >
                                {children}
                            </a>
                        ) : (
                            <div className="flex items-center gap-3">{children}</div>
                        );

                    return (
                        <div key={idx} className="relative card p-4">
                            {/* Code link slightly left to not overlap chevron */}
                            {codeUrl ? (
                                <a
                                    href={codeUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="absolute right-10 top-2 inline-flex items-center gap-1 px-3 py-2 rounded-xl hover:bg-white/10 text-sm font-medium"
                                    title={tr(UI.actions.viewCode, lang)}
                                    aria-label={tr(UI.actions.viewCode, lang)}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    {tr(UI.actions.viewCode, lang)}
                                </a>
                            ) : null}

                            {/* Clickable header to toggle */}
                            <div
                                role="button"
                                tabIndex={0}
                                aria-expanded={isOpen}
                                aria-controls={`proj-${idx}-content`}
                                onClick={() => toggle(idx)}
                                onKeyDown={(e) => onHeaderKey(idx, e)}
                                className="flex items-start justify-between gap-3 pr-10 cursor-pointer select-none group"
                                title={isOpen ? tr(UI.actions.collapse, lang) : tr(UI.actions.expand, lang)}
                            >
                                <LinkWrap>
                                    <BrandLogo src={p.logo} label={title} />
                                    <div className="min-w-0">
                                        <div className="font-semibold text-base md:text-lg leading-tight truncate group-hover/link:underline">
                                            {title}
                                        </div>
                                    </div>
                                </LinkWrap>

                                <ChevronDown
                                    className={`absolute right-2 top-2 h-5 w-5 transition-transform group-hover:scale-110 ${
                                        isOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </div>

                            {/* Collapsible body: description + skills */}
                            <div
                                id={`proj-${idx}-content`}
                                className={`mt-3 grid transition-all duration-300 ease-in-out ${
                                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                }`}
                            >
                                <div className="min-h-0 overflow-hidden">
                                    {desc ? (
                                        <Markdown className="text-sm md:text-base opacity-90">{desc}</Markdown>
                                    ) : null}

                                    {Array.isArray(p.skills) && p.skills.length ? (
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {p.skills.map((tag: string) => {
                                                const accent = accentMap[tag];
                                                return (
                                                    <span
                                                        key={tag}
                                                        className="skill-chip"
                                                        style={{ ["--skill-accent" as any]: accent }}
                                                    >
                                                        {tag}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </SiteShell>
    );
}
