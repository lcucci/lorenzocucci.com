"use client";

import React, { useState } from "react";

export function HeaderLogo() {
    const [failed, setFailed] = useState(false);

    if (!failed) {
        return (
            <div className="h-9 w-9 rounded-full overflow-hidden shrink-0">
                <img
                    src="/logo.png"
                    alt="Lorenzo Cucci"
                    width={36}
                    height={36}
                    className="h-full w-full object-cover block"
                    onError={() => setFailed(true)}
                />
            </div>
        );
    }

    return (
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow text-white font-bold shrink-0">
            LC
        </div>
    );
}
