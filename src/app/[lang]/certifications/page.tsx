import type { Metadata } from "next";
import type { Lang } from "@/lib/types";
import CertificationsPageClient from "./_certifications.client";
import { buildMetadata } from "@/lib/content/seo";

export async function generateMetadata(
    { params }: { params: { lang?: Lang } }
): Promise<Metadata> {
    const effectiveLang: Lang = (params.lang as Lang) || "it";
    return buildMetadata("certifications", effectiveLang);
}

export default function CertificationsPageWrapper() {
    return <CertificationsPageClient />;
}
