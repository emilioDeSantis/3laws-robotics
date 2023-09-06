// components/Button.tsx

import Link from "next/link";
import React from "react";

type Button2Props = {
    onClick: () => void;
    text: string;
};

const Button2: React.FC<Button2Props> = ({ onClick, text }) => {
    return (
        <div
        onClick={() => {
            onClick()
        }}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                justifyContent: "center",
                paddingInline: "2rem",
                paddingBlock: "1rem",
                background: "#ddffff",
                marginTop: "50px",
                borderRadius: '10px',
                color:"black",
                width: '30rem',
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
        </div>
    );
};

export default Button2;
