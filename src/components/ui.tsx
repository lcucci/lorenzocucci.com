"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Github, Linkedin, Globe2, Moon, Sun, Home as HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DICT } from "@/lib/content";

export type Lang = "en" | "it";
export type Theme = "light" | "dark";

function cx(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}

export function usePreferredTheme() {
    const getInitial = (): Theme => {
        if (typeof window === "undefined") return "light";
        const saved = localStorage.getItem("theme");
        if (saved === "light" || saved === "dark") return saved;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };
    const [theme, setTheme] = useState<Theme>(getInitial);
    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("dark", theme === "dark");
        (root as HTMLElement).style.colorScheme = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);
    return { theme, setTheme };
}

export function usePreferredLanguage() {
    const getInitial = () => {
        if (typeof window === "undefined") return "en" as const;
        const saved = localStorage.getItem("lang");
        if (saved === "en" || saved === "it") return saved;
        return navigator.language?.toLowerCase().startsWith("it") ? "it" : "en";
    };
    const [lang, setLang] = useState<Lang>(getInitial);
    useEffect(() => {
        document.documentElement.lang = lang;
        localStorage.setItem("lang", lang);
    }, [lang]);
    return { lang, setLang };
}

export function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="rounded-full border border-slate-300/60 dark:border-slate-700 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white/50 dark:bg-slate-900/40 backdrop-blur whitespace-nowrap">
      {children}
    </span>
    );
}

export function SectionTitle({ icon: Icon, title }: { icon: any; title: string }) {
    return (
        <div className="flex items-center gap-2">
            <Icon className="h-5 w-5" />
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h2>
        </div>
    );
}

export function BrandLogo({ src, label }: { src?: string; label: string }) {
    const initials = label
        .trim()
        .split(" ")
        .filter(Boolean)
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
    if (src) {
        return (
            <img
                src={src}
                alt={label}
                className="h-10 w-10 rounded-xl object-contain bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800"
            />
        );
    }
    return (
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-xs font-semibold text-slate-800 dark:text-slate-100 border border-slate-200/70 dark:border-slate-800">
            {initials}
        </div>
    );
}

function NavLink({
                     href,
                     isActive,
                     children,
                 }: {
    href: string;
    isActive: boolean;
    children: React.ReactNode;
}) {
    const base =
        "nav-link cursor-pointer px-3 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60";
    return (
        <Link
            href={href}
            prefetch
            aria-current={isActive ? "page" : undefined}
            data-active={isActive ? "true" : "false"}
            className={cx(base)}
        >
            {children}
        </Link>
    );
}


export function Header() {
    const { theme, setTheme } = usePreferredTheme();
    const { lang, setLang } = usePreferredLanguage();
    const t = DICT[lang];
    const ThemeIcon = useMemo(() => (theme === "dark" ? Moon : Sun), [theme]);

    const pathname = usePathname() || "/";
    const current = (pathname.replace(/\/+$/, "") || "/") as "/" | "/experience" | "/projects" | "/certifications";

    return (
        <header className="site-header sticky top-0 z-40 border-b border-slate-200/60 dark:border-slate-800">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {/* Logo clickable to home */}
                    <Link href="/" aria-label="Home" className="inline-flex">
                        <HeaderLogo />
                    </Link>
                    <div className="leading-tight">
                        <div className="font-semibold">{t.site.title}</div>
                        <div className="text-xs opacity-80">{t.site.subtitle}</div>
                    </div>
                </div>

                <nav className="site-nav hidden md:flex items-center gap-2">
                    {/* Home as icon */}
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
                        className="px-2.5 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 flex items-center gap-1 text-sm"
                        onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
                        aria-label={t.nav.theme}
                        title={t.nav.theme}
                        aria-pressed={theme === "dark"}
                        type="button"
                    >
                        <ThemeIcon className="h-5 w-5" />
                    </button>
                    <button
                        className="px-2.5 py-2 rounded-xl hover:bg-black/5 dark:hover:bg:white/10 flex items-center gap-1 text-sm"
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

export function Footer({ lang }: { lang: Lang }) {
    const t = DICT[lang];
    return (
        <footer className="mt-10 border-t border-slate-200/60 dark:border-slate-800">
            <div className="mx-auto max-w-6xl px-4 py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
                <div className="opacity-70">© {new Date().getFullYear()} {t.site.title}</div>
                <div className="flex items-center gap-3">
                    <a href="https://github.com/lcucci" className="inline-flex items-center gap-1 hover:underline" target="_blank" rel="noreferrer">
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

function HeaderLogo() {
    const [failed, setFailed] = useState(false);
    if (!failed) {
        return (
            <img
                src="/logo.png"
                alt="Lorenzo Cucci"
                width={36}
                height={36}
                className="h-9 w-9 rounded-2xl object-contain bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800"
                onError={() => setFailed(true)}
            />
        );
    }
    return (
        <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow text-white font-bold">
            LC
        </div>
    );
}
