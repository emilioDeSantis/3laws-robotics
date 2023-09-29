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
    className
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
                width: '100vw',
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
            </div>
        </div>
    );
};

export default Section