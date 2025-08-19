import type { Project } from "./types";

export const PROJECTS: Project[] = [
    {
        name: {
            en: "TrovaBenzinaBot",
            it: "TrovaBenzinaBot"
        },
        logo: "https://raw.githubusercontent.com/lcucci/TrovaBenzinaBot/refs/heads/main/assets/images/botpic.png",
        url: "https://t.me/TrovaBenzinaBot",
        description: {
            en: "Telegram bot that finds the cheapest fuel stations nearby with smart filtering and savings stats.",
            it: "Bot Telegram che trova i distributori più economici con filtri intelligenti e statistiche di risparmio.",
        },
        skills: ["Python", "PostgreSQL", "SQLAlchemy"],
        codeUrl: "https://github.com/lcucci/TrovaBenzinaBot",
    },
    {
        name: {
            en: "MoneyIsTime",
            it: "MoneyIsTime"
        },
        logo: "https://github.com/lcucci/MoneyIsTime/blob/main/icons/icon-nobg.png?raw=true",
        description: {
            en: "Annotates prices on websites with the work time required to afford them, based on your salary.",
            it: "Mostra sui siti il tempo di lavoro necessario per acquistare un prodotto, in base al tuo stipendio.",
        },
        skills: ["JavaScript", "HTML", "CSS"],
        codeUrl: "https://github.com/lcucci/MoneyIsTime",
    },
    {
        name: {
            en: "lorenzocucci.com",
            it: "lorenzocucci.com"
        },
        logo: "",
        url: "https://lorenzocucci.com",
        description: {
            en: "TODO",
            it: "TODO",
        },
        skills: ["TODO"],
        codeUrl: "https://github.com/lcucci/lorenzocucci.com",
    },
];
