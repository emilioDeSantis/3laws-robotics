import React from "react";

interface BoldParagraphProps {
    children: React.ReactNode;
}

const BoldParagraph: React.FC<BoldParagraphProps> = ({ children }) => {
    return (
        <div
            className="page-padding"
            style={{
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
            }}
        >
            <span
                style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    lineHeight: "120%",
                    width: "60rem",
                    marginTop: '5rem',
                }}
            >
                {children}
            </span>
        </div>
    );
};

export default BoldParagraph;
