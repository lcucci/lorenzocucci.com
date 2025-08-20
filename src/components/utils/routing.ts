"use client";

import { usePreferredLanguage } from "@/components/hooks/usePreferredLanguage";

export function useLocaleHref() {
    const { lang } = usePreferredLanguage();
    return (path: string) => `/${lang}${path.startsWith("/") ? path : `/${path}`}`;
}
