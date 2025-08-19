"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { usePreferredLanguage } from "@/components/hooks/usePreferredLanguage";

export default function SiteShell({ children }: { children: React.ReactNode }) {
    const { lang } = usePreferredLanguage();

    return (
        <div className="min-h-[100vh] overflow-x-hidden">
            <Header />
            <main className="mx-auto max-w-6xl px-4 pt-10 pb-8 md:pt-14 md:pb-10">{children}</main>
            <Footer lang={lang} />
        </div>
    );
}
