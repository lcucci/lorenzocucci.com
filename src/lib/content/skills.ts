import type { Skill } from "./types";

export const SKILLS: Skill[] = [
    {
        group: {
            en: "Languages",
            it: "Linguaggi"
        },
        items: ["Java", "SQL", "Python", "Bash", "JavaScript", "PHP"],
        highlight: ["Java", "SQL"],
        accent: "oklch(0.8 0.14 142)"
    },
    {
        group: {
            en: "Databases",
            it: "Database"
        },
        items: ["PostgreSQL", "Oracle DB", "MySQL", "MariaDB"],
        highlight: ["PostgreSQL", "Oracle DB", "MySQL", "MariaDB"],
        accent: "oklch(0.8 0.14 195)"
    },
    {
        group: {
            en: "Frameworks and libraries",
            it: "Framework e librerie"
        },
        items: ["Spring", "Spring Batch", "Hibernate", "JUnit", "SQLAlchemy"],
        highlight: ["Spring", "Spring Batch", "Hibernate"],
        accent: "oklch(0.8 0.14 100)"
    },
    {
        group: {
            en: "DevOps",
            it: "DevOps"
        },
        items: ["Git", "RTC", "Maven", "Jenkins", "JBoss", "Google Cloud Platform"],
        highlight: ["Git", "Maven"],
        accent: "oklch(0.8 0.14 56)"
    },
    {
        group: {
            en: "Tools",
            it: "Strumenti"
        },
        items: ["Microsoft Excel", "Postman", "IntelliJ", "Eclipse", "PyCharm", "WebStorm", "Erwin"],
        highlight: ["Microsoft Excel", "IntelliJ", "Erwin"],
        accent: "oklch(0.7 0.16 20)"
    },
    {
        group: {
            en: "Other",
            it: "Altro"
        },
        items: ["Jira", "Confluence", "ServiceNow"],
        highlight: ["Jira"],
        accent: "oklch(0.8 0.14 296)"
    },
];
