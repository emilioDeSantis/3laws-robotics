import React from "react";

interface SubtitleProps {
    children: React.ReactNode;
}

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
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
                    fontSize: "2.8rem",
                    fontWeight: 700,
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

export default Subtitle;
