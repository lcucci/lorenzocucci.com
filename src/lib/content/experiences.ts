import type { Experience } from "@/lib/types";

export const EXPERIENCES: Experience[] = [
    {
        company: {
            en: "GFT",
            it: "GFT",
        },
        companyLogo: "https://media.licdn.com/dms/image/v2/C4D0BAQFiyyEUZjtqTg/company-logo_200_200/company-logo_200_200/0/1630489561779/gft_group_logo?e=1758153600&v=beta&t=bq8JDdcTVzrqyuvN-2CIG6NXSpbhxXNBn-QvzMerA0I",
        companyUrl: "https://www.gft.com",
        role: {
            en: "Backend Developer",
            it: "Sviluppatore Backend",
        },
        location: {
            en: "Milan, Italy",
            it: "Milano, Italia"
        },
        startDate: {
            en: "10/2024",
            it: "10/2024"
        },
        endDate: {
            en: "now",
            it: "ora"
        },
        projects: [
            {
                description: {
                    en: "**Banco BPM (Credit Risk domain)** - Application for calculating ESG risk indicators within the credit granting processes:\n" +
                        "\n" +
                        "- Configuration of **Spring Batch** jobs for data import and consolidation, with transactional management and performance optimization\n" +
                        "- Implementation of **REST APIs**, adapted to the client’s standards\n" +
                        "- Drafting of technical and functional documentation to support numerous releases\n",
                    it: "**Banco BPM (ambito Rischi del Credito)** - Applicativo per il calcolo degli indicatori di rischio ESG nei processi di concessione del credito:\n" +
                        "- Configurazione di job **Spring Batch** per l’import e il consolidamento dei dati, con gestione transazionale e ottimizzazione delle performance\n" +
                        "- Implementazione di interfacce **API REST**, adeguate agli standard del cliente\n" +
                        "- Redazione di documentazione tecnico-funzionale a supporto di numerosi rilasci"
                },
                skills: ["Java", "SQL", "Bash", "Oracle DB", "Spring", "Spring Batch", "Hibernate", "JUnit", "Git", "RTC", "Maven", "Jenkins", "Microsoft Excel", "Postman", "IntelliJ", "Jira", "Confluence"],
            },
        ]
    },
    {
        company: {
            en: "Sopra Steria",
            it: "Sopra Steria",
        },
        companyUrl: "https://www.soprasteria.com",
        companyLogo: "https://media.licdn.com/dms/image/v2/D4E0BAQF_0JqR2CRpJw/company-logo_200_200/company-logo_200_200/0/1688571543420/soprasteria_logo?e=1758153600&v=beta&t=LY7CGuYnEXGXJvoXFhTuG0_XWpRYmEwbOwofjg5Pe98",
        role: {
            en: "Backend Developer",
            it: "Sviluppatore Backend",
        },
        location:{
            en: "Milan, Italy",
            it: "Milano, Italia"
        },
        startDate: {
            en: "09/2021",
            it: "09/2021"
        },
        endDate: {
            en: "09/2024",
            it: "09/2025"
        },
        projects: [
            {
                description: {
                    en: "**Intesa Sanpaolo (Finance domain)** - Application for calculating the MIFID II Costs, Charges and Incentives Report:\n" +
                        "\n" +
                        "- Development in **Java** with dozens of production releases\n" +
                        "- Complete rewrite of **SQL** procedures, reducing execution times by over **50%**\n" +
                        "- Continuous compliance with the **code quality KPIs** required by the client",
                    it: "**Intesa Sanpaolo (ambito Finanza)** - Applicativo per il calcolo del Rendiconto Costi, Oneri e Incentivi MIFID II:\n" +
                        "\n" +
                        "- Sviluppo in **Java** per decine di rilasci in produzione\n" +
                        "- Riscrittura completa di procedure **SQL**, con riduzione dei tempi di esecuzione di oltre il **50%**\n" +
                        "- Mantenimento costante dei **KPI di qualità del codice** richiesti dal cliente"
                },
                skills: ["Java", "SQL", "Bash", "MariaDB", "Spring", "Spring Batch", "Hibernate", "JUnit", "RTC", "Maven", "JBoss", "Microsoft Excel", "Eclipse", "Erwin"],
            },
            {
                description: {
                    en: "**Intesa Sanpaolo (Anti Financial Crime domain)** - Application for recording gifts and representation expenses of all bank employees:\n" +
                        "\n" +
                        "- Design of the application's **ER model**  \n" +
                        "- Development of the application from scratch in close collaboration with the Business Owner\n" +
                        "- Drafting of the **technical documentation** and user manuals of the application\n",
                    it: "**Intesa Sanpaolo (ambito Anti Financial Crime)** - Applicativo per la registrazione degli omaggi e delle spese di rappresentanza di tutti i dipendenti della banca:\n" +
                        "\n" +
                        "- Progettazione del modello **ER** dell'applicativo\n" +
                        "- Creazione da zero dell'applicativo in collaborazione diretta con il Business Owner\n" +
                        "- Redazione della **documentazione tecnica** e dei manuali dell'applicativo\n" },
                skills: ["Java", "SQL", "JavaScript", "MariaDB", "Spring", "Hibernate", "JUnit", "Git", "Maven", "JBoss", "Microsoft Excel", "Postman", "IntelliJ", "Erwin", "ServiceNow"],
            },
            {
                description: {
                    en: "**Intesa Sanpaolo (Supervision domain)** - Application for monitoring corporate rules through the administration of accounting checklists:\n" +
                        "\n" +
                        "- Adaptation of the existing application to the new digital bank **Isybank**\n" +
                        "- Technical support to the client during migration activities on **Google Cloud Platform**\n" +
                        "- Management and resolution of anomaly reports through the **ServiceNow** ticketing system\n",
                    it: "**Intesa Sanpaolo (ambito Vigilanza)** - Applicativo per il controllo delle regole aziendali tramite la somministrazione di checklist contabili:\n" +
                        "\n" +
                        "- Adeguamento dell'applicativo preesistente alla nuova banca digitale **Isybank**\n" +
                        "- Supporto tecnico al cliente durante le attività di migrazione su **Google Cloud Platform**\n" +
                        "- Gestione e risoluzione delle segnalazioni di anomalie tramite il sistema di ticketing **ServiceNow**\n"
                },
                skills: ["Java", "SQL", "PostgreSQL", "Oracle DB", "Spring", "Hibernate", "JUnit", "Git", "Maven", "Google Cloud Platform", "IntelliJ", "ServiceNow"],
            },
        ],
    }
];