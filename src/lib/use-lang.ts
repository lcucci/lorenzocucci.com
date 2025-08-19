"use client";
import {useEffect, useState} from "react";

export type Lang = "it" | "en";

/** Reactive language hook synced with <html lang> and localStorage("lang"). */ export function useLang(): {
    lang: Lang
} {
    const get = (): Lang => {
        if (typeof document === "undefined") return "it";
        const fromHtml = (document.documentElement.lang as Lang) || null;
        const fromStorage = (window.localStorage.getItem("lang") as Lang) || null;
        return (fromHtml || fromStorage || "it") as Lang;
    };
    const [lang, setLang] = useState<Lang>(get());
    useEffect(() => {
        if (typeof document === "undefined") return;
        const observer = new MutationObserver(() => setLang(get()));
        observer.observe(document.documentElement, {attributes: true, attributeFilter: ["lang"],});
        const onStorage = (e: StorageEvent) => {
            if (e.key === "lang") setLang(get());
        };
        window.addEventListener("storage", onStorage);
        return () => {
            observer.disconnect();
            window.removeEventListener("storage", onStorage);
        };
    }, []);
    return {lang};
}