"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Briefcase, Code2, Award } from "lucide-react";
import SiteShell from "@/components/layout/SiteShell";
import { SITE, UI, PROJECTS, CERTIFICATIONS, SKILLS, tr } from "@/lib/content";
import { Badge, usePreferredLanguage, useLocaleHref } from "@/components";

export default function HomePage() {
  const { lang } = usePreferredLanguage();
  const href = useLocaleHref();

  const metrics = [
    {
      label: lang === "it" ? "Anni di esperienza" : "Years of experience",
      value: `${yearsSince(new Date(2021, 8, 1))}+`,
    },
    {
      label: lang === "it" ? "Progetti personali" : "Personal projects",
      value: String(PROJECTS.length),
    },
    {
      label: lang === "it" ? "Stack principali" : "Core stack",
      value: "Java • SQL",
    },
    {
      label: lang === "it" ? "Certificazioni" : "Certifications",
      value: String(CERTIFICATIONS.length),
    },
  ];

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
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                {tr(SITE.hero.intro, lang)}
              </h1>
              <p className="mt-4 text-lg opacity-90">{tr(SITE.tagline, lang)}</p>
              <p className="mt-3 opacity-90 max-w-3xl">{tr(SITE.hero.long, lang)}</p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3 justify-center">
                <a
                    href="https://github.com/lcucci"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#181717] text-white font-medium hover:opacity-90 inline-flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  {tr(UI.social.github, lang)}
                </a>
                <a
                    href="https://www.linkedin.com/in/lorenzo-cucci/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#0A66C2] text-white font-medium hover:opacity-90 inline-flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  {tr(UI.social.linkedin, lang)}
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
            <div className="text-sm font-medium mb-3">{tr(SITE.home.toolbelt, lang)}</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SKILLS.map((group, idx) => (
                  <div
                      key={idx}
                      className="rounded-2xl border border-[var(--card-border)] p-3"
                      style={{ background: "color-mix(in oklab, var(--card-bg) 92%, transparent)" }}
                  >
                    <div className="text-xs font-medium mb-2 opacity-90">
                      {tr(group.group, lang)}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((s, i) => {
                        const label = typeof s === "string" ? s : tr(s, lang);
                        return <Badge key={`${label}-${i}`}>{label}</Badge>;
                      })}
                    </div>
                  </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <Link
                href={href("/experience")}
                className="cursor-pointer card card-action p-4 flex items-center justify-center gap-2 text-sm font-medium"
            >
              <Briefcase className="h-4 w-4" /> {tr(UI.nav.experience, lang)}
            </Link>
            <Link
                href={href("/projects")}
                className="cursor-pointer card card-action p-4 flex items-center justify-center gap-2 text-sm font-medium"
            >
              <Code2 className="h-4 w-4" /> {tr(UI.nav.projects, lang)}
            </Link>
            <Link
                href={href("/certifications")}
                className="cursor-pointer card card-action p-4 flex items-center justify-center gap-2 text-sm font-medium"
            >
              <Award className="h-4 w-4" /> {tr(UI.nav.certifications, lang)}
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
