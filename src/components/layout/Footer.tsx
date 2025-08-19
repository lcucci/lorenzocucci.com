"use client";

import React from "react";
import { Github, Linkedin } from "lucide-react";
import { SITE, UI, tr, type Lang } from "@/lib/content";

export function Footer({ lang }: { lang: Lang }) {
    return (
        <footer className="mt-10 border-t border-slate-200/60 dark:border-slate-800">
            <div className="mx-auto max-w-6xl px-4 py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
                <div className="opacity-70">
                    © {new Date().getFullYear()} {tr(SITE.title, lang)}
                </div>
                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/lcucci"
                        className="inline-flex items-center gap-1 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                        aria-label={tr(UI.social.github, lang)}
                        title={tr(UI.social.github, lang)}
                    >
                        <Github className="h-4 w-4" /> {tr(UI.social.github, lang)}
                    </a>
                    <a
                        href="https://www.linkedin.com/in/lorenzo-cucci/"
                        className="inline-flex items-center gap-1 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                        aria-label={tr(UI.social.linkedin, lang)}
                        title={tr(UI.social.linkedin, lang)}
                    >
                        <Linkedin className="h-4 w-4" /> {tr(UI.social.linkedin, lang)}
                    </a>
                </div>
            </div>
        </footer>
    );
}
