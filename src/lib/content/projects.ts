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
            en: "**TrovaBenzinaBot** is a Telegram bot that helps users save money on fuel by finding the cheapest gas stations in Italy in real time.  \n" +
                "\n" +
                "The project was created to provide a simple and fast tool for comparing fuel prices without the need to manually browse dedicated portals or apps.  \n" +
                "\n" +
                "---" +
                "\n" +
                "**Key features:**\n" +
                "- 🔎 **Targeted search**: finds the cheapest stations based on fuel type and user location.  \n" +
                "- 📍 **Geolocation**: leverages Telegram's location sharing to quickly detect nearby stations.  \n" +
                "- ⚙️ **Personalization**: users can set preferred language and fuel type in their profile.  \n" +
                "- 📊 **Savings statistics**: personalized summaries of the money saved thanks to the bot.  \n" +
                "- 🖥️ **Intuitive interface**: clean commands and inline buttons for smooth navigation.  \n" +
                "\n" +
                "---" +
                "\n" +
                "**Technologies used:**\n" +
                "\n" +
                "The bot is built with **Python 3.12**, backed by a **PostgreSQL** database, and uses modern libraries such as *python-telegram-bot*, *aiohttp*, and *SQLAlchemy[asyncio]*.  \n" +
                "Deployment is managed on **Railway** through Docker containers.\n" +
                "\n" +
                "---" +
                "\n" +
                "➡️ Available on Telegram as [@trovabenzinabot](https://t.me/trovabenzinabot).\n",
            it: "**TrovaBenzinaBot** è un bot Telegram che aiuta gli utenti a risparmiare sul carburante, trovando in tempo reale i distributori più economici in Italia.  \n" +
                "\n" +
                "Il progetto nasce dall’esigenza di avere uno strumento semplice e veloce per confrontare i prezzi dei carburanti senza dover consultare manualmente portali o app dedicate.  \n" +
                "\n" +
                "---" +
                "\n" +
                "**Funzionalità:**\n" +
                "- 🔎 **Ricerca mirata**: individua i distributori più convenienti in base al tipo di carburante e alla posizione dell’utente.  \n" +
                "- 📍 **Geolocalizzazione**: sfrutta la condivisione della posizione di Telegram per trovare subito i punti vendita vicini.  \n" +
                "- ⚙️ **Personalizzazione**: lingua e carburante preferito memorizzati nel profilo utente.  \n" +
                "- 📊 **Statistiche di risparmio**: riepiloghi personalizzati dei benefici economici ottenuti utilizzando il bot.  \n" +
                "- 🖥️ **Interfaccia intuitiva**: comandi chiari e pulsanti inline per una navigazione immediata.  \n" +
                "\n" +
                "---" +
                "\n" +
                "**Tecnologie usate:**\n" +
                "\n" +
                "Il bot è sviluppato in **Python 3.12**, utilizza **PostgreSQL** come database e fa leva su librerie moderne come *python-telegram-bot*, *aiohttp* e *SQLAlchemy[asyncio]*.  \n" +
                "Il deployment avviene su **Railway** tramite container Docker.\n" +
                "\n" +
                "---" +
                "\n" +
                "➡️ Disponibile su Telegram come [@trovabenzinabot](https://t.me/trovabenzinabot).\n",
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
            en: "**MoneyIsTime** is a browser extension that converts product prices into the equivalent work time required to earn that amount.  \n" +
                "The idea was born to help people make more mindful spending decisions, showing the cost of items in terms of time rather than just money.\n" +
                "\n" +
                "---" +
                "\n" +
                "**Features:**\n" +
                "- ⏱️ **Real-time conversion**: visible prices on web pages are automatically converted into hours, minutes, or days of work.  \n" +
                "- ⚙️ **Customizable settings**: salary, currency, and working schedule can be configured according to actual conditions.  \n" +
                "- 🌍 **Multi-language support**: available in several languages, including English, Italian, French, German, Spanish, Portuguese, Chinese, Japanese, Russian, Hindi, Arabic, and Turkish.  \n" +
                "- 🗂️ **Site management**: possibility to include or exclude specific domains.  \n" +
                "- 💡 **Compact display**: work time is shown next to prices without cluttering the page.  \n" +
                "\n" +
                "---" +
                "\n" +
                "**Technologies used:**\n\n" +
                "The extension is built with **JavaScript**, **HTML/CSS**, and leverages the **Chrome Extensions API**.  \n" +
                "For real-time currency conversions, it integrates the **ExchangeRate API**.\n",
    it: "**MoneyIsTime** è un’estensione per browser che trasforma i prezzi dei prodotti nel corrispondente tempo di lavoro necessario a guadagnare quella cifra.  \n" +
                "L’idea nasce per aiutare le persone a prendere decisioni di spesa più consapevoli, mostrando il costo degli articoli in termini di tempo anziché solo in valuta.\n" +
                "\n" +
                "---" +
                "\n" +
                "**Funzionalità:**\n" +
                "- ⏱️ **Conversione in tempo reale**: i prezzi visibili sulle pagine web vengono automaticamente convertiti in ore, minuti o giorni di lavoro.  \n" +
                "- ⚙️ **Impostazioni personalizzabili**: salario, valuta e orario lavorativo configurabili in base alla propria situazione reale.  \n" +
                "- 🌍 **Supporto multilingua**: disponibile in più lingue, tra cui italiano, inglese, francese, tedesco, spagnolo, portoghese, cinese, giapponese, russo, hindi, arabo e turco.  \n" +
                "- 🗂️ **Gestione siti**: possibilità di includere o escludere specifici domini.  \n" +
                "- 💡 **Interfaccia compatta**: l’informazione è mostrata accanto ai prezzi senza appesantire la pagina.  \n" +
                "\n" +
                "---" +
                "\n" +
                "**Tecnologie usate:**\n\n" +
                "L’estensione è sviluppata con **JavaScript**, **HTML/CSS** e utilizza le **Chrome Extensions API**.  \n" +
                "Per le conversioni di valuta in tempo reale integra l’**ExchangeRate API**.\n",
        },
        skills: ["JavaScript", "HTML", "CSS"],
        codeUrl: "https://github.com/lcucci/MoneyIsTime",
    },
];
