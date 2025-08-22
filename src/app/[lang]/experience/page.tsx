import type { Metadata } from "next";
import type { Lang } from "@/lib/types";
import ExperiencePageClient from "./_experience.client";
import { buildMetadata } from "@/lib/content/seo";

export async function generateMetadata({ params }: { params: { lang?: Lang } }): Promise<Metadata> {
    const lang = (params?.lang as Lang) || "it";
    return buildMetadata("experience", lang);
}

export default function ExperiencePageWrapper() {
    return <ExperiencePageClient />;
}
