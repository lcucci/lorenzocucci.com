"use client";

import React, { useState } from "react";

export function HeaderLogo() {
    const [failed, setFailed] = useState(false);

    if (!failed) {
        return (
            <img
                src="/logo.png"
                alt="Lorenzo Cucci"
                width={36}
                height={36}
                className="h-9 w-9 rounded-2xl object-contain bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800"
                onError={() => setFailed(true)}
            />
        );
    }

    return (
        <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow text-white font-bold">
            LC
        </div>
    );
}
