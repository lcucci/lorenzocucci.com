import type { Skill } from "./types";

export const SKILLS: Skill[] = [
    {
        group: {
            en: "Languages",
            it: "Linguaggi"
        },
        items: ["Java", "SQL", "Python", "Bash", "JavaScript", "PHP"],
        highlight: ["Java", "SQL"],
        accent: "oklch(72% 0.18 45)"
    },
    {
        group: {
            en: "Databases",
            it: "Database"
        },
        items: ["PostgreSQL", "Oracle DB", "MySQL", "MariaDB"],
        highlight: ["PostgreSQL", "Oracle DB", "MySQL", "MariaDB"],
        accent: "oklch(70% 0.17 145)"
    },
    {
        group: {
            en: "Frameworks and libraries",
            it: "Framework e librerie"
        },
        items: ["Spring", "Spring Batch", "Hibernate", "JPA", "JUnit", "SQLAlchemy"],
        highlight: ["Spring", "Spring Batch", "Hibernate"],
        accent: "oklch(69% 0.16 200)"
    },
    {
        group: {
            en: "DevOps",
            it: "DevOps"
        },
        items: ["Git", "RTC", "Maven", "Jenkins", "JBoss", "Google Cloud Platform"],
        highlight: ["Git", "Maven"],
        accent: "oklch(67% 0.16 255)"
    },
    {
        group: {
            en: "Tools",
            it: "Strumenti"
        },
        items: ["Microsoft Excel", "Postman", "IntelliJ", "Eclipse", "PyCharm", "WebStorm", "Erwin"],
        highlight: ["Microsoft Excel", "IntelliJ", "Erwin"],
        accent: "oklch(66% 0.16 300)"
    },
    {
        group: {
            en: "Other",
            it: "Altro"
        },
        items: ["Jira", "Confluence", "ServiceNow"],
        highlight: ["Jira"],
        accent: "oklch(71% 0.17 20)"
    },
];
