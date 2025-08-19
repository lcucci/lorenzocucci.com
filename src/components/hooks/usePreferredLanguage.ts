"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/types/common";

export function usePreferredLanguage() {
    const getInitial = (): Lang => {
        if (typeof window === "undefined") return "en";
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
