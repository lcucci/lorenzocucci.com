"use client";

import React, { useState } from "react";
import SiteShell from "@/components/layout/SiteShell";
import { SectionTitle, BrandLogo } from "@/components/ui";
import { SITE, EXPERIENCES, UI } from "@/lib/content";
import { tr } from "@/lib/types";
import { Briefcase, ChevronDown } from "lucide-react";
import { usePreferredLanguage, buildSkillAccentMap } from "@/components";
import Markdown from "@/components/utils/Markdown";

export default function ExperiencePage() {
    const { lang } = usePreferredLanguage();
    const [open, setOpen] = useState<boolean[]>(() => EXPERIENCES.map((_, i) => i === 0));
    const accentMap = React.useMemo(() => buildSkillAccentMap(lang as "it" | "en"), [lang]);

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
            <SectionTitle icon={Briefcase} title={tr(SITE.sections.experience, lang)} />
            <div className="space-y-4 mt-6">
                {EXPERIENCES.map((exp, idx) => {
                    const company = tr(exp.company, lang);
                    const role = tr(exp.role, lang);
                    const location = tr(exp.location, lang);
                    const startDate = tr((exp as any).startDate, lang);
                    const endDate = tr((exp as any).endDate, lang);

                    const isOpen = open[idx];

                    const CompanyWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
                        exp.companyUrl ? (
                            <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noreferrer"
                                title={company}
                                onClick={(e) => e.stopPropagation()}
                                className="hover:underline"
                            >
                                {children}
                            </a>
                        ) : (
                            <>{children}</>
                        );

                    return (
                        <div key={idx} className="relative card p-4">
                            <div
                                role="button"
                                tabIndex={0}
                                aria-expanded={isOpen}
                                aria-controls={`exp-${idx}-content`}
                                onClick={() => toggle(idx)}
                                onKeyDown={(e) => onHeaderKey(idx, e)}
                                className="flex items-start justify-between gap-3 pr-10 cursor-pointer select-none group"
                                title={isOpen ? tr(UI.actions.collapse, lang) : tr(UI.actions.expand, lang)}
                            >
                                <div className="flex items-center gap-3">
                                    <CompanyWrapper>
                                        <BrandLogo src={exp.companyLogo} label={company} />
                                    </CompanyWrapper>
                                    <div className="min-w-0">
                                        <div className="text-sm opacity-90">{role}</div>
                                        <CompanyWrapper>
                                            <div className="font-semibold text-base md:text-lg leading-tight truncate">
                                                {company}
                                            </div>
                                        </CompanyWrapper>
                                        <div className="text-sm opacity-80">{location}</div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end text-sm">
                                    <div>{startDate}</div>
                                    <div>{endDate}</div>
                                </div>

                                <ChevronDown
                                    className={`absolute right-2 top-2 h-5 w-5 transition-transform group-hover:scale-110 ${
                                        isOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </div>

                            <div
                                id={`exp-${idx}-content`}
                                className={`mt-4 grid transition-all duration-300 ease-in-out ${
                                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                }`}
                            >
                                <div className="min-h-0 overflow-hidden">
                                    {Array.isArray(exp.projects) && exp.projects.length > 0 ? (
                                        <div className="space-y-4">
                                            {exp.projects.map((p, pi) => {
                                                const projDesc = tr(p.description, lang);
                                                return (
                                                    <div
                                                        key={pi}
                                                        className="rounded-xl border border-[var(--card-border)] p-3"
                                                        style={{
                                                            background: "color-mix(in oklab, var(--card-bg) 92%, transparent)",
                                                        }}
                                                    >
                                                        {projDesc ? (
                                                            <Markdown className="text-sm md:text-base opacity-90">
                                                                {projDesc}
                                                            </Markdown>
                                                        ) : null}

                                                        {p.skills?.length ? (
                                                            <div className="mt-3 flex flex-wrap gap-2">
                                                                {p.skills.map((s: string) => {
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
