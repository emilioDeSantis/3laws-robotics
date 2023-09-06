import React from "react";

interface TitleProps {
    children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
    return (
        <div
            style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <h1
                style={{
                    fontWeight: 500,
                    fontSize: "3.4vw",
                    fontFamily: "korataki",
                    letterSpacing: "0.12em",
                    // marginInline: "24vw",
                    width: "46rem",
                    marginTop: "15rem",
                }}
            >
                {children}
            </h1>
        </div>
    );
};

export default Title;
