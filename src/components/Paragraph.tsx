import React from "react";

interface ParagraphProps {
    children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
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
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "#FFFFFF99",
                    lineHeight: "170%",
                    width: "38rem",
                    marginTop: '3.2rem',
                }}
            >
                {children}
            </span>
        </div>
    );
};

export default Paragraph;
