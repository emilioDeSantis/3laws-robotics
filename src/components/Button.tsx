// components/Button.tsx

import Link from "next/link";
import React from "react";

type ButtonProps = {
    href: string;
    text: string;
};

const Button: React.FC<ButtonProps> = ({ href, text }) => {
    return (
        <Link
            href={href}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                justifyContent: "center",
                paddingInline: "2rem",
                paddingBlock: "1rem",
                background: "#ddffff44",
                color: '#ddffff',
                marginTop: "0rem",
                borderRadius: '10px',
            }}
        >
            <p
                style={{
                    fontSize: "0.8rem",
                    lineHeight: "130%",
                    fontWeight: 300,
                    fontFamily: "korataki",
                    letterSpacing: "0.1em",
                }}
            >
                {text}
            </p>
        </Link>
    );
};

export default Button;
