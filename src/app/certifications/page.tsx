"use client";

import React from "react";
import SiteShell from "@/components/site-shell";
import { SectionTitle, Badge, BrandLogo } from "@/components/ui";
import { DICT, CERTIFICATIONS } from "@/lib/content";
import { Award, ExternalLink } from "lucide-react";
import { useLang } from "@/lib/use-lang";

type Lang = "it" | "en";

export default function CertificationsPage() {
    const { lang } = useLang();
    const t = DICT[lang];

    return (
        <SiteShell>
            <SectionTitle icon={Award} title={t.certs.title} />
            <div className="grid md:grid-cols-2 gap-4 mt-6">
                {CERTIFICATIONS.map((c: any, idx: number) => {
                    const vendor = typeof c.vendor === "string" ? c.vendor : (c.vendor?.[lang] ?? "");
                    const period = typeof c.period === "string" ? c.period : (c.period?.[lang] ?? "");
                    const name = c.name?.[lang] ?? "";
                    const desc = c.description?.[lang] ?? "";
                    const skills: string[] = c.skills || [];

                    return (
                        <div key={idx} className="relative card p-4">
                            <a
                                href={c.link}
                                target="_blank"
                                rel="noreferrer"
                                className="absolute right-2 top-2 inline-flex items-center gap-1 px-3 py-2 rounded-xl hover:bg-white/10 text-sm font-medium"
                                title={t.certs.view}
                            >
                                <ExternalLink className="h-4 w-4" /> {t.certs.view}
                            </a>

                            <div className="flex items-center gap-3">
                                <BrandLogo src={c.logo} label={name} />
                                <div className="min-w-0">
                                    <div className="text-sm opacity-90">{vendor}</div>
                                    <div className="font-semibold text-base md:text-lg leading-tight">
                                        {name}
                                    </div>
                                    <div className="text-sm opacity-80">{period}</div>
                                </div>
                            </div>

                            {desc ? <p className="mt-3 text-sm md:text-base opacity-90">{desc}</p> : null}

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
