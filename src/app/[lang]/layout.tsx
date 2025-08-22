import type { ReactNode } from "react";

export default function LangLayout({
                                       children,
                                   }: {
    children: ReactNode;
}) {
    return <>{children}</>;
}

export function generateStaticParams() {
    return [{ lang: "it" }, { lang: "en" }];
}
