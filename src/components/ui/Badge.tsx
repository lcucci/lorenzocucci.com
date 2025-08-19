"use client";

import React from "react";

export function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="rounded-full border border-slate-300/60 dark:border-slate-700 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white/50 dark:bg-slate-900/40 backdrop-blur whitespace-nowrap">
      {children}
    </span>
    );
}
