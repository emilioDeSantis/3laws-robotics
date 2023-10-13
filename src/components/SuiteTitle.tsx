import React from "react";

interface SuiteTitleProps {
    children: React.ReactNode;
}

const SuiteTitle: React.FC<SuiteTitleProps> = ({ children }) => {
    return (
        <h2
            className="page-padding"
            style={{
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
            }}
        >
            <span
                style={{
                    fontSize: "4rem",
                    fontWeight: 900,
                    lineHeight: "105%",
                    width: "25rem",
                    marginTop: '3rem',
                }}
            >
                {children}
            </span>
        </h2>
    );
};

export default SuiteTitle;
