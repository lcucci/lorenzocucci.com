"use client";

import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Globe2, Moon, Sun, Home as HomeIcon, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE, UI } from "@/lib/content";
import { tr } from "@/lib/types";
import {
    NavLink,
    HeaderLogo,
    usePreferredTheme,
    usePreferredLanguage,
    useLocaleHref,
} from "@/components";

export default function Header() {
    const { theme, setTheme } = usePreferredTheme();
    const { lang, setLang } = usePreferredLanguage();
    const ThemeIcon = useMemo(() => (theme === "dark" ? Moon : Sun), [theme]);

    const href = useLocaleHref();
    const pathname = (usePathname() || "/").replace(/\/+$/, "");
    const [open, setOpen] = useState(false);

    const close = useCallback(() => setOpen(false), []);
    const toggle = useCallback(() => setOpen((v) => !v), []);

    // Close menu on ≥ md
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        const handler = () => mq.matches && close();
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, [close]);

    // Close on Esc
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, close]);

    const items = [
        { path: "/", label: tr(UI.nav.home, lang), icon: HomeIcon },
        { path: "/experience", label: tr(UI.nav.experience, lang) },
        { path: "/projects", label: tr(UI.nav.projects, lang) },
        { path: "/certifications", label: tr(UI.nav.certifications, lang) },
    ];
    const isActive = (p: string) => pathname === href(p).replace(/\/+$/, "");

    return (
        <header className="site-header sticky top-0 z-50 border-b border-slate-200/60 dark:border-slate-800 bg-[var(--background)]">
            {/* Top bar: [left auto] [center 1fr] [right auto] */}
            <div className="mx-auto max-w-6xl px-4 py-3 grid grid-cols-[auto_1fr_auto] items-center">
                {/* Left: hamburger (mobile) + logo+title (desktop) */}
                <div className="flex items-center gap-2 min-w-0">
                    {/* Hamburger < md */}
                    <button
                        type="button"
                        aria-label={open ? tr(UI.nav.closeMenu, lang) : tr(UI.nav.openMenu, lang)}
                        aria-haspopup="menu"
                        aria-expanded={open}
                        onClick={toggle}
                        className="btn-ghost inline-flex items-center gap-2 px-3 py-2 md:hidden"
                    >
                        <Menu className="h-6 w-6" />
                    </button>

                    {/* Desktop logo + title ≥ md */}
                    <Link href={href("/")} aria-label="Home" className="hidden md:inline-flex shrink-0">
                        <HeaderLogo />
                    </Link>
                    <div className="hidden md:block leading-tight min-w-0">
                        <div className="font-semibold truncate">{tr(SITE.title, lang)}</div>
                        <div className="text-xs opacity-80 truncate">{tr(SITE.subtitle, lang)}</div>
                    </div>
                </div>

                {/* Center: mobile logo+title (centered) + desktop navbar */}
                <div className="flex justify-center min-w-0">
                    {/* Mobile logo + title */}
                    <Link
                        href={href("/")}
                        className="md:hidden inline-flex items-center gap-3 min-w-0"
                        aria-label={tr(UI.nav.home, lang)}
                    >
                        <HeaderLogo />
                        <span className="font-semibold truncate">{tr(SITE.title, lang)}</span>
                    </Link>

                    {/* Desktop navbar */}
                    <nav className="site-nav hidden md:flex items-center gap-2">
                        <NavLink href={href("/")} isActive={isActive("/")}>
                            <HomeIcon className="h-4 w-4" aria-hidden="true" />
                            <span className="sr-only">{tr(UI.nav.home, lang)}</span>
                        </NavLink>
                        <NavLink href={href("/experience")} isActive={isActive("/experience")}>
                            {tr(UI.nav.experience, lang)}
                        </NavLink>
                        <NavLink href={href("/projects")} isActive={isActive("/projects")}>
                            {tr(UI.nav.projects, lang)}
                        </NavLink>
                        <NavLink href={href("/certifications")} isActive={isActive("/certifications")}>
                            {tr(UI.nav.certifications, lang)}
                        </NavLink>
                    </nav>
                </div>

                {/* Right: theme + language */}
                <div className="flex items-center gap-2 justify-self-end">
                    <button
                        className="btn-ghost inline-flex items-center gap-1 px-2.5 py-2"
                        onClick={() => setTheme((prev: string) => (prev === "dark" ? "light" : "dark"))}
                        aria-label={tr(UI.nav.theme, lang)}
                        title={tr(UI.nav.theme, lang)}
                        type="button"
                    >
                        <ThemeIcon className="h-5 w-5" />
                    </button>

                    <button
                        className="btn-ghost inline-flex items-center gap-1 px-2.5 py-2"
                        onClick={() => setLang((l: string) => (l === "en" ? "it" : "en"))}
                        aria-label={tr(UI.nav.language, lang)}
                        title={tr(UI.nav.language, lang)}
                        type="button"
                    >
                        <Globe2 className="h-5 w-5" />
                        <span className="font-medium">{lang.toUpperCase()}</span>
                    </button>
                </div>
            </div>

            {/* Mobile inline menu (pushes page content down), with subtle transition */}
            <div
                className={[
                    "md:hidden border-t border-slate-200 dark:border-slate-800",
                    "overflow-hidden transition-all duration-200 ease-out transform",
                    open ? "max-h-[60vh] opacity-100 translate-y-0 pointer-events-auto" : "max-h-0 opacity-0 -translate-y-1 pointer-events-none",
                ].join(" ")}
                aria-hidden={!open}
            >
                <div className="mx-auto max-w-6xl px-4">
                    <nav role="menu" aria-label="Main">
                        <ul className="py-1 divide-y divide-slate-200 dark:divide-slate-800">
                            {items.map(({ path, label, icon: Icon }) => {
                                const active = isActive(path);
                                return (
                                    <li key={path}>
                                        <Link
                                            href={href(path)}
                                            onClick={() => setOpen(false)}
                                            className={[
                                                "flex items-center gap-3 rounded-xl px-3 py-3 transition",
                                                "hover:bg-[var(--card-hover-bg)]",
                                                active ? "font-semibold" : "font-medium",
                                                "justify-start text-left",
                                            ].join(" ")}
                                        >
                                            {Icon ? <Icon className="h-5 w-5" /> : null}
                                            <span>{label}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
