"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import type { Lang } from "@/lib/content";

const LOCALES: Lang[] = ["it", "en"];

export function usePreferredLanguage() {
    const params = useParams<{ lang?: string }>();
    const pathname = usePathname();
    const router = useRouter();

    const lang = (LOCALES.includes(params?.lang as Lang) ? (params!.lang as Lang) : "it");

    const setLang = useCallback(
        (next: Lang | ((l: Lang) => Lang)) => {
            const resolved = typeof next === "function" ? (next as (l: Lang) => Lang)(lang) : next;
            const withPrefix = pathname.replace(/^\/(it|en)(?=\/|$)/, `/${resolved}`);
            document.cookie = `lang=${resolved}; path=/; max-age=31536000; samesite=lax`;
            router.replace(withPrefix);
        },
        [lang, pathname, router]
    );

    return { lang, setLang };
}
