import "./globals.css";

export const metadata = {
    title: "Lorenzo Cucci — Portfolio",
    description: "Backend Developer • Data Analyst",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="it" className="h-full">
        <body className="min-h-screen antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        {children}
        </body>
        </html>
    );
}
