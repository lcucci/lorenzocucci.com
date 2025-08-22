import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["it", "en"] as const;
const DEFAULT_LOCALE = "it";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.startsWith("/favicon") ||
        pathname.includes(".")
    ) {
        return;
    }

    const seg = pathname.split("/")[1];

    if (!LOCALES.includes(seg as any)) {
        const cookieLang = req.cookies.get("lang")?.value;
        const lang = LOCALES.includes(cookieLang as any) ? (cookieLang as "it" | "en") : DEFAULT_LOCALE;

        const url = req.nextUrl.clone();
        url.pathname = `/${lang}${pathname}`;

        const res = NextResponse.redirect(url);
        res.cookies.set("lang", lang, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
        return res;
    }

    const res = NextResponse.next();
    if (req.cookies.get("lang")?.value !== seg) {
        res.cookies.set("lang", seg, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
    }
    return res;
}

export const config = {
    matcher: ["/((?!_next|.*\\..*).*)"],
};
