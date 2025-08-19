"use client";

import React from "react";

export function BrandLogo({ src, label }: { src?: string; label: string }) {
    const initials = label
        .trim()
        .split(" ")
        .filter(Boolean)
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    if (src) {
        return (
            <img
                src={src}
                alt={label}
                className="h-10 w-10 rounded-xl object-contain bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800"
            />
        );
    }

    return (
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-xs font-semibold text-slate-800 dark:text-slate-100 border border-slate-200/70 dark:border-slate-800">
            {initials}
        </div>
    );
}
