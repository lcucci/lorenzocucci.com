import "./globals.css";
import { cookies } from "next/headers";
import type { Lang } from "@/lib/types";
import JsonLd from "@/components/layout/JsonLd";
import { personJsonLd, websiteJsonLd } from "@/components";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies();
    const cookieLang = (cookieStore.get("lang")?.value as Lang) || "it";

    return (
        <html lang={cookieLang} className="h-full">
        <head>
            <JsonLd data={websiteJsonLd()} />
            <JsonLd data={personJsonLd(cookieLang)} />
        </head>
        <body className="min-h-screen antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        {children}
        </body>
        </html>
    );
}
