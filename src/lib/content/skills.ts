import type { Skill } from "./types";

export const SKILLS: Skill[] = [
    {
        group: {en: "Languages", it: "Linguaggi"},
        items: ["Java", "SQL", "Python", "JavaScript", "PHP"]
    },
    {
        group: {en: "Frameworks", it: "Framework"},
        items: ["Spring", "Hibernate", "SQLAlchemy", "JPA", "JUnit"]
    },
    {
        group: {en: "Databases", it: "Database"},
        items: ["PostgreSQL", "Oracle DB", "MySQL", "MariaDB"]
    },
    {
        group: {en: "DevOps", it: "DevOps"},
        items: ["Git", "RTC", "Maven", "Jenkins", "Jboss", "Google Cloud Platform"]
    },
    {
        group: {en: "Tools", it: "Strumenti"},
        items: ["Microsoft Excel", "Postman", "IntelliJ", "Eclipse", "PyCharm", "WebStorm", "Erwin"]
    },
    {
        group: {en: "Other", it: "Altro"},
        items: ["Jira", "Confluence", "ServiceNow", "Shell scripting"]
    },
];
