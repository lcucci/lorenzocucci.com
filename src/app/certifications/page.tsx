"use client";

import React from "react";
import SiteShell from "@/components/layout/SiteShell";
import { SectionTitle, Badge, BrandLogo } from "@/components/ui";
import { SITE, CERTIFICATIONS, tr, UI } from "@/lib/content";
import { Award, ExternalLink } from "lucide-react";
import { usePreferredLanguage } from "@/components/hooks/usePreferredLanguage";

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
                    const link = c.credentialUrl || c.url || "";

                    return (
                        <div key={idx} className="relative card p-4">
                            {link ? (
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="absolute right-2 top-2 inline-flex items-center gap-1 px-3 py-2 rounded-xl hover:bg-white/10 text-sm font-medium"
                                    title={tr(UI.actions.viewCredential, lang)}
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    {tr(UI.actions.viewCredential, lang)}
                                </a>
                            ) : null}

                            <div className="flex items-center gap-3">
                                <BrandLogo src={c.logo} label={name} />
                                <div className="min-w-0">
                                    <div className="text-sm opacity-90">{issuer}</div>
                                    <div className="font-semibold text-base md:text-lg leading-tight">
                                        {name}
                                    </div>
                                    <div className="text-sm opacity-80">{period}</div>
                                </div>
                            </div>

                            {desc ? (
                                <p className="mt-3 text-sm md:text-base opacity-90">{desc}</p>
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
