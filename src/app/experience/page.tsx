"use client";

import React, { useState } from "react";
import SiteShell from "@/components/layout/SiteShell";
import { SectionTitle, Badge, BrandLogo } from "@/components/ui";
import { DICT, EXPERIENCES } from "@/lib/content";
import { Briefcase, ChevronDown } from "lucide-react";
import { useLang } from "@/lib/use-lang";

export default function ExperiencePage() {
    const { lang } = useLang();
    const t = DICT[lang];

    const [open, setOpen] = useState<boolean[]>(
        () => EXPERIENCES.map((_, i) => i === 0)
    );

    const toggle = (idx: number) =>
        setOpen((prev) => {
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
            <SectionTitle icon={Briefcase} title={t.experience.title} />
            <div className="space-y-4 mt-6">
                {EXPERIENCES.map((exp: any, idx: number) => {
                    const period =
                        typeof exp.period === "string" ? exp.period : (exp.period?.[lang] ?? "");
                    const location = exp.location?.[lang] ?? "";
                    const isOpen = open[idx];

                    const CompanyWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
                        exp.companyUrl ? (
                            <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noreferrer"
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
                            {/* HEADER INTERO CLICCABILE */}
                            <div
                                role="button"
                                tabIndex={0}
                                aria-expanded={isOpen}
                                aria-controls={`exp-${idx}-content`}
                                onClick={() => toggle(idx)}
                                onKeyDown={(e) => onHeaderKey(idx, e)}
                                className="flex items-start justify-between gap-3 pr-10 cursor-pointer select-none group"
                                title={isOpen ? t.ui.collapse : t.ui.expand}
                            >
                                <div className="flex items-center gap-3">
                                    <CompanyWrapper>
                                        <BrandLogo src={exp.companyLogo} label={exp.company?.[lang] ?? ""} />
                                    </CompanyWrapper>
                                    <div className="min-w-0">
                                        <CompanyWrapper>
                                            <div className="font-semibold text-base md:text-lg leading-tight truncate">
                                                {exp.company?.[lang] ?? ""}
                                            </div>
                                        </CompanyWrapper>
                                        <div className="text-sm text-[var(--muted)]">
                                            {exp.role?.[lang] ?? ""}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end text-sm">
                                    <div>{period}</div>
                                    <div className="text-[var(--muted)]">{location}</div>
                                </div>

                                <ChevronDown
                                    className={`absolute right-2 top-2 h-5 w-5 transition-transform group-hover:scale-110 ${isOpen ? "rotate-180" : ""}`}
                                />
                            </div>

                            <div
                                id={`exp-${idx}-content`}
                                className={`mt-4 grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                            >
                                <div className="min-h-0 overflow-hidden">
                                    {Array.isArray(exp.projects) && exp.projects.length > 0 ? (
                                        <div className="space-y-4">
                                            {exp.projects.map((p: any, pi: number) => (
                                                <div
                                                    key={pi}
                                                    className="rounded-xl border border-[var(--card-border)] p-3"
                                                    style={{ background: "color-mix(in oklab, var(--card-bg) 92%, transparent)" }}
                                                >
                                                    <div className="font-medium">
                                                        {p.name?.[lang] ?? ""}
                                                    </div>
                                                    {p.bullets?.[lang]?.length ? (
                                                        <ul className="list-disc pl-5 space-y-1 text-sm md:text-base mt-2 text-[var(--muted)]">
                                                            {p.bullets[lang].map((b: string, bi: number) => (
                                                                <li key={bi}>{b}</li>
                                                            ))}
                                                        </ul>
                                                    ) : null}
                                                    {p.stack?.length ? (
                                                        <div className="mt-3 flex flex-wrap gap-2">
                                                            {p.stack.map((s: string) => (
                                                                <Badge key={s}>{s}</Badge>
                                                            ))}
                                                        </div>
                                                    ) : null}
                                                </div>
                                            ))}
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
