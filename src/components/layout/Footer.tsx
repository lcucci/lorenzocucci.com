"use client";

import React from "react";
import { Github, Linkedin } from "lucide-react";
import type { Lang } from "@/types/common";
import { DICT } from "@/lib/content";

export function Footer({ lang }: { lang: Lang }) {
    const t = DICT[lang];

    return (
        <footer className="mt-10 border-t border-slate-200/60 dark:border-slate-800">
            <div className="mx-auto max-w-6xl px-4 py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
                <div className="opacity-70">© {new Date().getFullYear()} {t.site.title}</div>
                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/lcucci"
                        className="inline-flex items-center gap-1 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Github className="h-4 w-4" /> GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/lorenzo-cucci/"
                        className="inline-flex items-center gap-1 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Linkedin className="h-4 w-4" /> LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
