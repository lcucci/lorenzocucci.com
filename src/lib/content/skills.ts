import type { Skill } from "./types";

export const SKILLS: Skill[] = [
    {
        group: {
            en: "Languages",
            it: "Linguaggi"
        },
        items: ["Java", "SQL", "Python", "Bash", "JavaScript", "PHP"],
        highlight: ["Java", "SQL"],
        accent: "oklch(0.811 0.263 142.201)"
    },
    {
        group: {
            en: "Databases",
            it: "Database"
        },
        items: ["PostgreSQL", "Oracle DB", "MySQL", "MariaDB"],
        highlight: ["PostgreSQL", "Oracle DB", "MySQL", "MariaDB"],
        accent: "oklch(0.781 0.13 194.817)"
    },
    {
        group: {
            en: "Frameworks and libraries",
            it: "Framework e librerie"
        },
        items: ["Spring", "Spring Batch", "Hibernate", "JUnit", "SQLAlchemy"],
        highlight: ["Spring", "Spring Batch", "Hibernate"],
        accent: "oklch(0.854 0.17 99.634)"
    },
    {
        group: {
            en: "DevOps",
            it: "DevOps"
        },
        items: ["Git", "RTC", "Maven", "Jenkins", "JBoss", "Google Cloud Platform"],
        highlight: ["Git", "Maven"],
        accent: "oklch(0.665 0.162 55.959)"
    },
    {
        group: {
            en: "Tools",
            it: "Strumenti"
        },
        items: ["Microsoft Excel", "Postman", "IntelliJ", "Eclipse", "PyCharm", "WebStorm", "Erwin"],
        highlight: ["Microsoft Excel", "IntelliJ", "Erwin"],
        accent: "oklch(0.457 0.182 27.89)"
    },
    {
        group: {
            en: "Other",
            it: "Altro"
        },
        items: ["Jira", "Confluence", "ServiceNow"],
        highlight: ["Jira"],
        accent: "oklch(0.506 0.195 295.669)"
    },
];
