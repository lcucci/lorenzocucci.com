import type { Skill } from "./types";

export const SKILLS: Skill[] = [
    {
        group: {
            en: "Languages",
            it: "Linguaggi"
        },
        items: ["Java", "SQL", "Python", "Bash", "JavaScript", "PHP"],
        highlight: ["Java", "SQL"],
        accent: "oklch(0.745 0.165 45.595)"
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
        items: ["Spring", "Spring Batch", "Hibernate", "JUnit", "SQLAlchemy"],
        highlight: ["Spring", "Spring Batch", "Hibernate"],
        accent: "oklch(0.787 0.132 201.618)"
    },
    {
        group: {
            en: "DevOps",
            it: "DevOps"
        },
        items: ["Git", "RTC", "Maven", "Jenkins", "JBoss", "Google Cloud Platform"],
        highlight: ["Git", "Maven"],
        accent: "oklch(0.455 0.115 255.079)"
    },
    {
        group: {
            en: "Tools",
            it: "Strumenti"
        },
        items: ["Microsoft Excel", "Postman", "IntelliJ", "Eclipse", "PyCharm", "WebStorm", "Erwin"],
        highlight: ["Microsoft Excel", "IntelliJ", "Erwin"],
        accent: "oklch(0.625 0.199 298.283)"
    },
    {
        group: {
            en: "Other",
            it: "Altro"
        },
        items: ["Jira", "Confluence", "ServiceNow"],
        highlight: ["Jira"],
        accent: "oklch(0.543 0.205 26.174)"
    },
];
