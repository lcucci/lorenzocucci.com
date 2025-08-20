"use client";

import React from "react";
import SiteShell from "@/components/layout/SiteShell";
import { SectionTitle, Badge, BrandLogo } from "@/components/ui";
import { SITE, PROJECTS, tr, UI } from "@/lib/content";
import { Code2, ExternalLink } from "lucide-react";
import { usePreferredLanguage } from "@/components/hooks/usePreferredLanguage";

export default function ProjectsPage() {
    const { lang } = usePreferredLanguage();

    return (
        <SiteShell>
            <SectionTitle icon={Code2} title={tr(SITE.sections.projects, lang)} />
            <div className="space-y-4 mt-6">
                {PROJECTS.map((p, idx) => {
                    const title = tr(p.name, lang);
                    const desc = p.description ? tr(p.description, lang) : "";
                    const url = p.url;
                    const codeUrl = p.codeUrl;
                    const href = p.url;

                    const LinkWrap: React.FC<{ children: React.ReactNode }> = ({ children }) =>
                        url ? (
                            <a
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 group/link"
                                aria-label={title}
                                title={title}
                            >
                                {children}
                            </a>
                        ) : (
                            <div className="flex items-center gap-3">{children}</div>
                        );

                    return (
                        <div key={idx} className="relative card p-4">
                            {codeUrl ? (
                                <a
                                    href={codeUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="absolute right-2 top-2 inline-flex items-center gap-1 px-3 py-2 rounded-xl hover:bg-white/10 text-sm font-medium"
                                    title={tr(UI.actions.viewCode, lang)}
                                    aria-label={tr(UI.actions.viewCode, lang)}
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    {tr(UI.actions.viewCode, lang)}
                                </a>
                            ) : null}

                            <LinkWrap>
                                <BrandLogo src={p.logo} label={title} />
                                <div className="min-w-0">
                                    <div className="font-semibold text-base md:text-lg leading-tight truncate group-hover/link:underline">
                                        {title}
                                    </div>
                                </div>
                            </LinkWrap>

                            {desc ? <p className="mt-3 text-sm md:text-base opacity-90">{desc}</p> : null}

                            {Array.isArray(p.skills) && p.skills.length ? (
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {p.skills.map((tag) => (
                                        <Badge key={tag}>{tag}</Badge>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    );
                })}
            </div>
        </SiteShell>
    );
}
