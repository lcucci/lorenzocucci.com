import type { Metadata } from "next";
import type { Lang } from "@/lib/types";
import ProjectsPageClient from "./_projects.client";
import { buildMetadata } from "@/lib/content/seo";


export async function generateMetadata(
    { params }: { params: Promise<{ lang?: Lang }> }
): Promise<Metadata> {
    const { lang } = await params;
    const effectiveLang: Lang = (lang as Lang) || "it";
    return buildMetadata("projects", effectiveLang);
}

export default function ProjectsPageWrapper() {
    return <ProjectsPageClient />;
}
