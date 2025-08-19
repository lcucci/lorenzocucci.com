"use client";

import React, { useMemo } from "react";
import { Globe2, Moon, Sun, Home as HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE, UI, tr } from "@/lib/content";
import { usePreferredTheme } from "@/components/hooks/usePreferredTheme";
import { NavLink } from "@/components/ui/NavLink";
import { HeaderLogo } from "@/components/ui/HeaderLogo";
import { usePreferredLanguage } from "@/components/hooks/usePreferredLanguage";

export function Header() {
    const { theme, setTheme } = usePreferredTheme();
    const { lang, setLang } = usePreferredLanguage();
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
                        <div className="font-semibold">{tr(SITE.title, lang)}</div>
                        <div className="text-xs opacity-80">{tr(SITE.subtitle, lang)}</div>
                    </div>
                </div>

                <nav className="site-nav hidden md:flex items-center gap-2">
                    <NavLink href="/" isActive={current === "/"}>
                        <HomeIcon className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">{tr(UI.nav.home, lang)}</span>
                    </NavLink>
                    <NavLink href="/experience" isActive={current === "/experience"}>
                        {tr(UI.nav.experience, lang)}
                    </NavLink>
                    <NavLink href="/projects" isActive={current === "/projects"}>
                        {tr(UI.nav.projects, lang)}
                    </NavLink>
                    <NavLink href="/certifications" isActive={current === "/certifications"}>
                        {tr(UI.nav.certifications, lang)}
                    </NavLink>
                </nav>

                <div className="flex items-center gap-2">
                    <button
                        className="btn-ghost inline-flex items-center gap-1 px-2.5 py-2 whitespace-nowrap"
                        onClick={() => setTheme(prev => (prev === "dark" ? "light" : "dark"))}
                        aria-label={tr(UI.nav.theme, lang)}
                        title={tr(UI.nav.theme, lang)}
                        type="button"
                    >
                        <ThemeIcon className="h-5 w-5" />
                    </button>
                    <button
                        className="btn-ghost inline-flex items-center gap-1 px-2.5 py-2 whitespace-nowrap"
                        onClick={() => setLang(l => (l === "en" ? "it" : "en"))}
                        aria-label={tr(UI.nav.language, lang)}
                        title={tr(UI.nav.language, lang)}
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
