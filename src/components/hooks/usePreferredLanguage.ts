"use client";

import { useEffect, useState } from "react";

export type Lang = "it" | "en";

/** Reactive language hook synced with <html lang> and localStorage("lang"). */
export function usePreferredLanguage(): { lang: Lang; setLang: (next: Lang | ((prev: Lang) => Lang)) => void } {
    const read = (): Lang => {
        if (typeof document === "undefined") return "it";
        const fromHtml = (document.documentElement.lang as Lang) || null;
        const fromStorage = (window.localStorage.getItem("lang") as Lang) || null;
        return (fromHtml || fromStorage || "it") as Lang;
    };

    const [lang, setLangState] = useState<Lang>(read());

    // Write-through setter: updates state, <html lang>, and localStorage.
    const setLang = (next: Lang | ((prev: Lang) => Lang)) => {
        const value = typeof next === "function" ? (next as (prev: Lang) => Lang)(lang) : next;
        if (value !== "en" && value !== "it") return;
        setLangState(value);
        if (typeof document !== "undefined") {
            document.documentElement.lang = value;
        }
        try {
            window.localStorage.setItem("lang", value);
        } catch {
            /* ignore storage failures */
        }
    };

    useEffect(() => {
        if (typeof document === "undefined") return;

        // Keep state in sync if something else changes <html lang>.
        const observer = new MutationObserver(() => {
            const htmlLang = (document.documentElement.lang as Lang) || null;
            if (htmlLang === "en" || htmlLang === "it") {
                setLangState((cur) => (cur === htmlLang ? cur : htmlLang));
            }
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["lang"],
        });

        // Keep state in sync if localStorage changes in other tabs.
        const onStorage = (e: StorageEvent) => {
            if (e.key === "lang") {
                const v = (e.newValue as Lang) || null;
                if (v === "en" || v === "it") {
                    setLangState((cur) => (cur === v ? cur : v));
                }
            }
        };
        window.addEventListener("storage", onStorage);

        return () => {
            observer.disconnect();
            window.removeEventListener("storage", onStorage);
        };
    }, []);

    return { lang, setLang };
}
