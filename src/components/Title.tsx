import React from "react";

interface TitleProps {
    children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
    return (
        <div
        className="page-padding"
            style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <h1
            className="page-title"
                style={{
                    fontWeight: 500,
                    fontFamily: "korataki",
                    letterSpacing: "0.12em",
                lineHeight: '130%',
                }}
            >
                {children}
            </h1>
        </div>
    );
};

export default Title;
