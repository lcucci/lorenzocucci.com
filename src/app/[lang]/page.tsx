import type { Metadata } from "next";
import type { Lang } from "@/lib/types";
import HomePageClient from "./_home.client";
import { buildMetadata } from "@/lib/content/seo";

export async function generateMetadata(
    { params }: { params: { lang?: Lang } }
): Promise<Metadata> {
  const effectiveLang: Lang = (params.lang as Lang) || "it";
  return buildMetadata("home", effectiveLang);
}

export default function HomePageWrapper() {
  return <HomePageClient />;
}
