"use client";

import React from "react";
import SiteShell from "@/components/layout/SiteShell";
import { SectionTitle, Badge, BrandLogo } from "@/components/ui";
import { DICT, PROJECTS } from "@/lib/content";
import { Code2, ExternalLink } from "lucide-react";
import { usePreferredLanguage } from "@/components/hooks/usePreferredLanguage";

export default function ProjectsPage() {
    const { lang } = usePreferredLanguage();
    const t = DICT[lang];

    return (
        <SiteShell>
            <SectionTitle icon={Code2} title={t.projects.title} />
            <div className="space-y-4 mt-6">
                {PROJECTS.map((p: any, idx: number) => {
                    const title = p.name?.[lang] ?? p.title ?? "";
                    const desc = p.description?.[lang] ?? "";
                    const href: string | undefined = p.url;

                    const LinkWrap: React.FC<{ children: React.ReactNode }> = ({ children }) =>
                        href ? (
                            <a
                                href={href}
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
                            {href ? (
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="absolute right-2 top-2 inline-flex items-center gap-1 px-3 py-2 rounded-xl hover:bg-white/10 text-sm font-medium"
                                    title={t.projects.view}
                                    aria-label={t.projects.view}
                                >
                                    <ExternalLink className="h-4 w-4" /> {t.projects.view}
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

                            <p className="mt-3 text-sm md:text-base opacity-90">{desc}</p>

                            {Array.isArray(p.tags) && p.tags.length ? (
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {p.tags.map((tag: string) => (
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
