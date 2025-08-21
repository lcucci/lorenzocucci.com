"use client";

import React, { useState } from "react";
import SiteShell from "@/components/layout/SiteShell";
import { SectionTitle, BrandLogo, usePreferredLanguage, buildSkillAccentMap } from "@/components";
import { SITE, CERTIFICATIONS, tr, UI } from "@/lib/content";
import { Award, ExternalLink, ChevronDown } from "lucide-react";
import Markdown from "@/components/utils/Markdown";

export default function CertificationsPage() {
    const { lang } = usePreferredLanguage();
    const accentMap = React.useMemo(() => buildSkillAccentMap(lang as "it" | "en"), [lang]);

    const [open, setOpen] = useState<boolean[]>(() => CERTIFICATIONS.map(() => true));

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
            <SectionTitle icon={Award} title={tr(SITE.sections.certifications, lang)} />
            <div className="space-y-4 mt-6">
                {CERTIFICATIONS.map((c, idx) => {
                    const name = tr(c.name, lang);
                    const issuer = tr(c.issuer, lang);
                    const period = tr(c.period, lang);
                    const desc = c.description ? tr(c.description, lang) : "";
                    const skills: string[] = c.skills || [];
                    const url = c.url;
                    const credentialUrl = c.credentialUrl;
                    const isOpen = open[idx];

                    const LinkWrap: React.FC<{ children: React.ReactNode }> = ({ children }) =>
                        url ? (
                            <a
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 group/link"
                                aria-label={name}
                                title={name}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {children}
                            </a>
                        ) : (
                            <div className="flex items-center gap-3">{children}</div>
                        );

                    return (
                        <div key={idx} className="relative card p-4">
                            {credentialUrl ? (
                                <a
                                    href={credentialUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="absolute right-10 top-2 inline-flex items-center gap-1 px-3 py-2 rounded-xl hover:bg-white/10 text-sm font-medium"
                                    title={tr(UI.actions.viewCredential, lang)}
                                    aria-label={tr(UI.actions.viewCredential, lang)}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    {tr(UI.actions.viewCredential, lang)}
                                </a>
                            ) : null}

                            {/* Clickable header to toggle */}
                            <div
                                role="button"
                                tabIndex={0}
                                aria-expanded={isOpen}
                                aria-controls={`cert-${idx}-content`}
                                onClick={() => toggle(idx)}
                                onKeyDown={(e) => onHeaderKey(idx, e)}
                                className="flex items-start justify-between gap-3 pr-10 cursor-pointer select-none group"
                                title={isOpen ? tr(UI.ui.collapse, lang) : tr(UI.ui.expand, lang)}
                            >
                                <LinkWrap>
                                    <BrandLogo src={c.logo} label={name} />
                                    <div className="min-w-0">
                                        <div className="text-sm opacity-90">{issuer}</div>
                                        <div className="font-semibold text-base md:text-lg leading-tight truncate group-hover/link:underline">
                                            {name}
                                        </div>
                                        <div className="text-sm opacity-80">{period}</div>
                                    </div>
                                </LinkWrap>

                                <ChevronDown
                                    className={`absolute right-2 top-2 h-5 w-5 transition-transform group-hover:scale-110 ${
                                        isOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </div>

                            {/* Collapsible body */}
                            <div
                                id={`cert-${idx}-content`}
                                className={`mt-3 grid transition-all duration-300 ease-in-out ${
                                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                }`}
                            >
                                <div className="min-h-0 overflow-hidden">
                                    {desc ? (
                                        <Markdown className="text-sm md:text-base opacity-90">{desc}</Markdown>
                                    ) : null}

                                    {skills.length ? (
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {skills.map((s) => {
                                                const accent = accentMap[s];
                                                return (
                                                    <span
                                                        key={s}
                                                        className="skill-chip"
                                                        style={{ ["--skill-accent" as any]: accent }}
                                                    >
                                                        {s}
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
