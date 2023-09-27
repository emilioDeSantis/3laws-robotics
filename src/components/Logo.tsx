// Logo.tsx

import React from "react";
import Link from "next/link";

const Logo: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                paddingBlock: "0.8rem",
                fontFamily: "korataki",
                letterSpacing: "0.1em",
            }}
        >
            <h1
                style={{
                    color: "#99ffff",
                    fontWeight: 500,
                    lineHeight: "90%",
                    fontSize: "1.25rem",
                }}
            >
                3<span style={{ color: "white" }}>LAWS</span>
            </h1>
            <p
                style={{
                    color: "white",
                    letterSpacing: "1.4em",
                    fontSize: "0.45rem",
                }}
            >
                ROBOTICS
            </p>
        </div>
    );
};

export default Logo;
