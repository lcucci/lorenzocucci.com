"use client";

import React from "react";

export function SectionTitle({ icon: Icon, title }: { icon: any; title: string }) {
    return (
        <div className="flex items-center gap-2">
            <Icon className="h-5 w-5" />
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h2>
        </div>
    );
}
