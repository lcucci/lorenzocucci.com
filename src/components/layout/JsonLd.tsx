import React from "react";

type JsonLdProps = { data: Record<string, unknown> };

export default function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// Helpers
export function personJsonLd(lang: "it" | "en") {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Lorenzo Cucci",
        url: "https://lorenzocucci.com",
        jobTitle: lang === "it" ? "Sviluppatore Backend & Data Analyst" : "Backend Developer & Data Analyst",
        sameAs: [
            "https://github.com/lcucci",
            "https://www.linkedin.com/in/lorenzo-cucci",
        ],
    };
}

export function websiteJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Lorenzo Cucci",
        url: "https://lorenzocucci.com",
    };
}
