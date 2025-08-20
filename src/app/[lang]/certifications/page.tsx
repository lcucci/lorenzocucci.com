"use client";

import React from "react";
import SiteShell from "@/components/layout/SiteShell";
import { SectionTitle, Badge, BrandLogo, usePreferredLanguage } from "@/components";
import { SITE, CERTIFICATIONS, tr, UI } from "@/lib/content";
import { Award, ExternalLink } from "lucide-react";
import Markdown from "@/components/utils/Markdown";

export default function CertificationsPage() {
    const { lang } = usePreferredLanguage();

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

                    const LinkWrap: React.FC<{ children: React.ReactNode }> = ({ children }) =>
                        url ? (
                            <a
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 group/link"
                                aria-label={name}
                                title={name}
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
                                    className="absolute right-2 top-2 inline-flex items-center gap-1 px-3 py-2 rounded-xl hover:bg-white/10 text-sm font-medium"
                                    title={tr(UI.actions.viewCredential, lang)}
                                    aria-label={tr(UI.actions.viewCredential, lang)}
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    {tr(UI.actions.viewCredential, lang)}
                                </a>
                            ) : null}

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

                            {desc ? (
                                <Markdown className="mt-3 text-sm md:text-base opacity-90">
                                    {desc}
                                </Markdown>
                            ) : null}

                            {skills.length ? (
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {skills.map((s) => (
                                        <Badge key={s}>{s}</Badge>
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
