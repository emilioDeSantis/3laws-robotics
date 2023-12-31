import React from "react";

interface DescriptionProps {
    children: React.ReactNode;
}

const Description: React.FC<DescriptionProps> = ({ children }) => {
    return (
        <div
            className="page-padding"
            style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
            }}
        >
            <span
                style={{
                    fontSize: "1.6rem",
                    fontWeight: 500,
                    color: "#FFFFFF99",
                    lineHeight: "170%",
                    width: "44rem",
                    marginTop: "5rem",
                }}
            >
                {children}
            </span>
        </div>
    );
};

export default Description;
