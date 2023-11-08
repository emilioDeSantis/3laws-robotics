import Link from "next/link";
import React from "react";

interface SectionProps {
    right: boolean;
    marginTop: string;
    title: string;
    text: string;
    href: string;
    linkText: string;
    className: string;
}

const Section: React.FC<SectionProps> = ({
    right,
    marginTop,
    title,
    text,
    href,
    linkText,
    className,
}) => {
    return (
        <div
            className={`${className} section-card-container`}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: right ? "flex-end" : "flex-start",
                zIndex: 10,
                position: "absolute",
                width: "100vw",
            }}
        >
            <div
                className={`${className} card-texture section-card`}
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <h2
                    className="card-title"
                    style={{
                        fontWeight: 400,
                        letterSpacing: "0.09em",
                        lineHeight: "120%",
                        fontFamily: "korataki",
                    }}
                >
                    {title}
                </h2>
                <p
                    className="card-text"
                    style={{
                        fontSize: "0.9rem",
                        fontWeight: 300,
                        letterSpacing: "0.08em",
                        opacity: 0.8,
                    }}
                >
                    {text}
                </p>

                {/* <Link
                    href={href}
                    className="card-link"
                    style={{
                        fontWeight: 600,
                        fontSize: "1rem",
                        letterSpacing: "0.08em",
                    }}
                >
                    {linkText} →
                </Link> */}
                <CardLink href={href} linkText={linkText} />
            </div>
        </div>
    );
};

interface CardLinkProps {
    href: string;
    linkText: string;
}

const CardLink: React.FC<CardLinkProps> = ({ href, linkText }) => {
    // This assumes that you're considering "internal" as any link starting with '/'.
    const isInternalLink = href.startsWith("/");

    // If it's an internal link, use Next.js's Link component for client-side routing.

     if (href.length === 0) {
        return
     }
    if (isInternalLink) {
        return (
            <Link
                href={href}
                className="card-link"
                style={{
                    fontWeight: 600,
                    fontSize: "1rem",
                    letterSpacing: "0.08em",
                }}
            >
                {linkText} →
            </Link>
        );
    }

    // If it's an external link, use a regular <a> element with target="_blank" to open in a new tab.
    // Also adding rel="noopener noreferrer" for security reasons.
    return (
        <a
            href={href}
            className="card-link"
            style={{
                fontWeight: 600,
                fontSize: "1rem",
                letterSpacing: "0.08em",
            }}
            target="_blank"
            rel="noopener noreferrer"
        >
            {linkText} →
        </a>
    );
};

export default Section;
