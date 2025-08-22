"use client";

import Link from "next/link";
import React from "react";

export function NavLink({
                            href,
                            isActive,
                            children,
                        }: {
    href: string;
    isActive: boolean;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            prefetch
            aria-current={isActive ? "page" : undefined}
            data-active={isActive ? "true" : "false"}
            className="nav-link btn-ghost px-3 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
        >
            {children}
        </Link>
    );
}
