"use client";

import React, { useMemo } from "react";
import { Github, Linkedin, Globe2, Moon, Sun, Home as HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DICT } from "@/lib/content";
import { usePreferredTheme } from "@/components/hooks/usePreferredTheme";
import { NavLink } from "@/components/ui/NavLink";
import { HeaderLogo } from "@/components/ui/HeaderLogo";
import { usePreferredLanguage } from "@/components/hooks/usePreferredLanguage";

export function Header() {
    const { theme, setTheme } = usePreferredTheme();
    const { lang, setLang } = usePreferredLanguage();
    const t = DICT[lang];
    const ThemeIcon = useMemo(() => (theme === "dark" ? Moon : Sun), [theme]);

    const pathname = usePathname() || "/";
    const current = (pathname.replace(/\/+$/, "") || "/") as
        | "/"
        | "/experience"
        | "/projects"
        | "/certifications";

    return (
        <header className="site-header sticky top-0 z-40 border-b border-slate-200/60 dark:border-slate-800">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link href="/" aria-label="Home" className="inline-flex">
                        <HeaderLogo />
                    </Link>
                    <div className="leading-tight">
                        <div className="font-semibold">{t.site.title}</div>
                        <div className="text-xs opacity-80">{t.site.subtitle}</div>
                    </div>
                </div>

                <nav className="site-nav hidden md:flex items-center gap-2">
                    <NavLink href="/" isActive={current === "/"}>
                        <HomeIcon className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">{t.nav.home}</span>
                    </NavLink>
                    <NavLink href="/experience" isActive={current === "/experience"}>
                        {t.nav.experience}
                    </NavLink>
                    <NavLink href="/projects" isActive={current === "/projects"}>
                        {t.nav.projects}
                    </NavLink>
                    <NavLink href="/certifications" isActive={current === "/certifications"}>
                        {t.nav.certifications}
                    </NavLink>
                </nav>

                <div className="flex items-center gap-2">
                    <button
                        className="btn-ghost inline-flex items-center gap-1 px-2.5 py-2 whitespace-nowrap"
                        onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
                        aria-label={t.nav.theme}
                        title={t.nav.theme}
                        type="button"
                    >
                        <ThemeIcon className="h-5 w-5" />
                    </button>
                    <button
                        className="btn-ghost inline-flex items-center gap-1 px-2.5 py-2 whitespace-nowrap"
                        onClick={() => setLang((l) => (l === "en" ? "it" : "en"))}
                        aria-label={t.nav.language}
                        title={t.nav.language}
                        type="button"
                    >
                        <Globe2 className="h-5 w-5" />
                        <span className="font-medium">{lang.toUpperCase()}</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
