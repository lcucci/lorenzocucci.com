"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Briefcase, Code2, Award } from "lucide-react";
import SiteShell from "@/components/site-shell";
import { Badge } from "@/components/ui";
import { DICT, PROJECTS, CERTIFICATIONS, SKILLS, SkillKey } from "@/lib/content";
import { useLang } from "@/lib/use-lang";

export default function HomePage() {
  const { lang } = useLang();
  const t = DICT[lang];

  const metrics = [
    { label: lang === "it" ? "Anni di esperienza" : "Years of experience", value: `${yearsSince(new Date(2021, 8, 1))}+` },
    { label: lang === "it" ? "Progetti personali" : "Personal projects", value: String(PROJECTS.length) },
    { label: lang === "it" ? "Stack principali" : "Core stack", value: "Java • SQL" },
    { label: lang === "it" ? "Certificazioni" : "Certifications", value: String(CERTIFICATIONS.length) },
  ];

  const labels = t.skills.groups as Record<string, string>;
  const entries = Object.entries(SKILLS) as unknown as [SkillKey, string[]][];

  return (
      <SiteShell>
        <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
        >
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">{t.hero.intro}</h1>
              <p className="mt-4 text-lg opacity-90">{t.site.tagline}</p>
              <p className="mt-3 opacity-90 max-w-3xl">{t.hero.long}</p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3 justify-center">
                <a
                    href="https://github.com/lcucci"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#181717] text-white font-medium hover:opacity-90 inline-flex items-center gap-2"
                >
                  <Github className="h-4 w-4" /> {t.hero.github}
                </a>
                <a
                    href="https://www.linkedin.com/in/lorenzo-cucci/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#0A66C2] text-white font-medium hover:opacity-90 inline-flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" /> {t.hero.linkedin}
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {metrics.map((m) => (
                    <div key={m.label} className="card p-4 text-center">
                      <div className="text-2xl font-semibold">{m.value}</div>
                      <div className="text-xs opacity-80">{m.label}</div>
                    </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card p-4">
            <div className="text-sm font-medium mb-3">{t.projects.toolbelt}</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {entries.map(([k, list]) => (
                  <div
                      key={k}
                      className="rounded-2xl border border-[var(--card-border)] p-3"
                      style={{ background: "color-mix(in oklab, var(--card-bg) 92%, transparent)" }}
                  >
                    <div className="text-xs font-medium mb-2 opacity-90">{labels[k]}</div>
                    <div className="flex flex-wrap gap-2">
                      {list.map((s) => (
                          <Badge key={s}>{s}</Badge>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <Link
                href="/experience"
                className="cursor-pointer card card-action p-4 flex items-center justify-center gap-2 text-sm font-medium"
            >
              <Briefcase className="h-4 w-4" /> {t.nav.experience}
            </Link>
            <Link
                href="/projects"
                className="cursor-pointer card card-action p-4 flex items-center justify-center gap-2 text-sm font-medium"
            >
              <Code2 className="h-4 w-4" /> {t.nav.projects}
            </Link>
            <Link
                href="/certifications"
                className="cursor-pointer card card-action p-4 flex items-center justify-center gap-2 text-sm font-medium"
            >
              <Award className="h-4 w-4" /> {t.nav.certifications}
            </Link>
          </div>
        </motion.section>
      </SiteShell>
  );
}

function yearsSince(start: Date): number {
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const m = now.getMonth() - start.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < start.getDate())) years--;
  return years;
}
