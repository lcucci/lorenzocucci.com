import type { Metadata } from "next";
import type { Lang } from "@/lib/types";
import ProjectsPageClient from "./_projects.client";
import { buildMetadata } from "@/lib/content/seo";

export async function generateMetadata({ params }: { params: { lang?: Lang } }): Promise<Metadata> {
    const lang = (params?.lang as Lang) || "it";
    return buildMetadata("projects", lang);
}

export default function ProjectsPageWrapper() {
    return <ProjectsPageClient />;
}
