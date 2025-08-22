"use client";

import React from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
    children: string;
    className?: string;
};

type CodeProps = React.HTMLAttributes<HTMLElement> & {
    inline?: boolean;
    className?: string;
    children?: React.ReactNode;
};

const Code: React.FC<CodeProps> = ({ inline, className, children, ...props }) => {
    if (inline) {
        return (
            <code className={`px-1 py-0.5 rounded bg-white/5 ${className ?? ""}`} {...props}>
                {children}
            </code>
        );
    }
    return (
        <pre className="p-3 rounded bg-white/5 overflow-x-auto">
      <code className={className} {...props}>
        {children}
      </code>
    </pre>
    );
};

const components: Components = {
    a({ node, ...props }) {
        const { className, ...rest } = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
        return (
            <a
                {...rest}
                target="_blank"
                rel="noreferrer"
                className={className ? `underline hover:opacity-80 ${className}` : "underline hover:opacity-80"}
            />
        );
    },
    ul({ node, ...props }) {
        const { className, ...rest } = props as React.HTMLAttributes<HTMLUListElement>;
        return <ul {...rest} className={className ? `list-disc pl-6 my-3 ${className}` : "list-disc pl-6 my-3"} />;
    },
    ol({ node, ...props }) {
        const { className, ...rest } = props as React.OlHTMLAttributes<HTMLOListElement>;
        return <ol {...rest} className={className ? `list-decimal pl-6 my-3 ${className}` : "list-decimal pl-6 my-3"} />;
    },
    p({ node, ...props }) {
        const { className, ...rest } = props as React.HTMLAttributes<HTMLParagraphElement>;
        return <p {...rest} className={className ? `my-3 ${className}` : "my-3"} />;
    },
    h1({ node, ...props }) {
        const { className, ...rest } = props as React.HTMLAttributes<HTMLHeadingElement>;
        return <h1 {...rest} className={className ? `text-xl font-semibold my-3 ${className}` : "text-xl font-semibold my-3"} />;
    },
    h2({ node, ...props }) {
        const { className, ...rest } = props as React.HTMLAttributes<HTMLHeadingElement>;
        return <h2 {...rest} className={className ? `text-lg font-semibold my-3 ${className}` : "text-lg font-semibold my-3"} />;
    },
    code: Code,
};

export default function Markdown({ children, className }: Props) {
    return (
        <div className={className}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm /*, remarkBreaks */]}
                components={components}
            >
                {children}
            </ReactMarkdown>
        </div>
    );
}
