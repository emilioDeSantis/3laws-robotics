import React from "react";

interface DescriptionProps {
    children: React.ReactNode;
}

const Description: React.FC<DescriptionProps> = ({ children }) => {
    return (
        <div
            style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    fontWeight: 200,
                    marginTop: "3rem",
                    fontSize: "1.2vw",
                    letterSpacing: "0.08em",
                    fontFamily: "korataki",
                    // marginInline: "24vw",
                    width: "46rem",
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Description;
