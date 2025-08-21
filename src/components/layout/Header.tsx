"use client";

import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Globe2, Moon, Sun, Home as HomeIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE, UI, tr } from "@/lib/content";
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

    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = open ? "hidden" : prev || "";
        return () => void (document.body.style.overflow = prev || "");
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, close]);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        const handler = () => mq.matches && close();
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, [close]);

    const items = [
        { path: "/", label: tr(UI.nav.home, lang), icon: HomeIcon },
        { path: "/experience", label: tr(UI.nav.experience, lang) },
        { path: "/projects", label: tr(UI.nav.projects, lang) },
        { path: "/certifications", label: tr(UI.nav.certifications, lang) },
    ];
    const isActive = (p: string) => pathname === href(p).replace(/\/+$/, "");

    return (
        <header className="site-header sticky top-0 z-50 border-b border-slate-200/60 dark:border-slate-800">
            {/* grid: [left auto] [center 1fr] [right auto] */}
            <div className="mx-auto max-w-6xl px-4 py-3 grid grid-cols-[auto_1fr_auto] items-center">
                {/* Left: logo + title (title only ≥ md) */}
                <div className="flex items-center gap-3 min-w-0">
                    <Link href={href("/")} aria-label="Home" className="inline-flex shrink-0">
                        <HeaderLogo />
                    </Link>
                    <div className="hidden md:block leading-tight min-w-0">
                        <div className="font-semibold truncate">{tr(SITE.title, lang)}</div>
                        <div className="text-xs opacity-80 truncate">{tr(SITE.subtitle, lang)}</div>
                    </div>
                </div>

                {/* Center: hamburger (mobile) + navbar (desktop) */}
                <div className="flex justify-center">
                    {/* Hamburger button visible < md */}
                    <button
                        type="button"
                        aria-label="Open menu"
                        aria-haspopup="menu"
                        aria-expanded={open}
                        onClick={toggle}
                        className="btn-ghost inline-flex items-center gap-2 px-3 py-2 md:hidden"
                    >
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>

                    {/* Horizontal navbar visible ≥ md */}
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
                        onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
                        aria-label={tr(UI.nav.theme, lang)}
                        title={tr(UI.nav.theme, lang)}
                        type="button"
                    >
                        <ThemeIcon className="h-5 w-5" />
                    </button>

                    <button
                        className="btn-ghost inline-flex items-center gap-1 px-2.5 py-2"
                        onClick={() => setLang((l) => (l === "en" ? "it" : "en"))}
                        aria-label={tr(UI.nav.language, lang)}
                        title={tr(UI.nav.language, lang)}
                        type="button"
                    >
                        <Globe2 className="h-5 w-5" />
                        <span className="font-medium">{lang.toUpperCase()}</span>
                    </button>
                </div>
            </div>

            {/* Mobile overlay menu */}
            {open && (
                <div className="fixed inset-0 z-50 md:hidden" aria-hidden="true" onClick={close}>
                    <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />
                    <nav
                        role="menu"
                        aria-label="Main"
                        className="absolute left-1/2 top-16 -translate-x-1/2 w-[min(92vw,28rem)] rounded-2xl border border-slate-200 dark:border-slate-800 bg-[var(--card-bg)] text-[var(--card-fg)] shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul className="p-2">
                            {items.map(({ path, label, icon: Icon }) => {
                                const active = isActive(path);
                                const isHome = path === "/";

                                return (
                                    <li key={path}>
                                        <Link
                                            href={href(path)}
                                            onClick={close}
                                            aria-label={isHome ? label : undefined}
                                            title={isHome ? label : undefined}
                                            className={[
                                                "flex items-center justify-center w-full rounded-xl px-3 py-3 transition text-center",
                                                "hover:bg-[var(--card-hover-bg)]",
                                                active ? "font-semibold" : "font-medium",
                                            ].join(" ")}
                                        >
                                            {isHome ? (
                                                <HomeIcon className="h-5 w-5" />
                                            ) : (
                                                <span>{label}</span>
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}
