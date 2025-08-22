# lorenzocucci.com

[![it](https://img.shields.io/badge/lang-italiano-green.svg)](https://github.com/lcucci/lorenzocucci.com/blob/main/README.it.md)

Personal website/portfolio of **Lorenzo Cucci**, built with Next.js + TypeScript and Tailwind CSS.  
It serves as a professional showcase with bilingual content (IT/EN), optimized for SEO and responsive design.

---

## ✨ Features

* Multilingual navigation (Italian/English)
* Centralized management of titles, descriptions, and SEO (`lib/content/seo.ts`)
* Responsive navbar and hamburger menu with animations
* Badges and cards with custom styles and consistent colors for skills
* Optimized layout for desktop and mobile
* Structured content: Experiences, Projects, Certifications, Skills

---

## 🛠️ Technologies Used

* **Next.js (App Router)** – React framework with SSR/SSG support
* **TypeScript** – strict typing
* **Tailwind CSS** – styling with theme variables and dark mode
* **Lucide/Tabler Icons** – lightweight and scalable icons
* **Docker** – for consistent builds and deployments

---

## 🚀 Deployment

The site is currently deployed on [Railway](https://railway.app) and available at [lorenzocucci.com](https://lorenzocucci.com).

---

## 🗂️ Project Structure

```
.
├── public/                 # Public files
│ └── logo.png              # Site logo
├── src/                    # Source code
│ ├── app/                  # Main pages and layouts
│ │ ├── (lang)/             # Language routing (e.g., it, en)
│ │ │ ├── certifications/   # Certifications page & client component
│ │ │ ├── experience/       # Experience page & client component
│ │ │ ├── projects/         # Projects page & client component
│ │ │ ├── layout.tsx        # Language-specific layout
│ │ │ └── page.tsx          # Language-specific homepage
│ │ ├── globals.css         # Global styles
│ │ └── layout.tsx          # Root app layout
│ │
│ ├── components/           # Reusable components
│ │ ├── hooks/              # Custom hooks (language, theme, etc.)
│ │ ├── layout/             # Layout components (Header, Footer, Shell)
│ │ ├── ui/                 # Atomic UI components (Badge, Logo, NavLink...)
│ │ └── utils/              # Utilities and helpers for components
│ │
│ └── lib/                  # Centralized libraries and content
│ ├── content/              # Dictionaries, SEO, structured content
│ └── types/                # Shared TypeScript types and interfaces
│
├── Dockerfile              # Container build configuration
├── next-env.d.ts           # Type definitions for Next.js
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```