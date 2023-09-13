import React from "react";

interface DescriptionProps {
    children: React.ReactNode;
}

const Description: React.FC<DescriptionProps> = ({ children }) => {
    return (
        <div
        className="page-padding"
            style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    fontWeight: 300,
                    marginTop: "3rem",
                    fontSize: "1rem",
                    letterSpacing: "0.08em",
                    width: "46rem",
                    opacity: 0.8,
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Description;
