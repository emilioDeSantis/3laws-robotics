import React from "react";

interface TitleProps {
    id?: string;
    children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children, id }) => {
    return (
        <h2
        className="page-padding"
        style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            marginTop: "4rem",
        }}
        id={id}
    >
        <span
            className="product-title"
            style={{
                fontWeight: 800,
                lineHeight: "105%",
                width: "56rem",
                marginTop: "3rem",
            }}
        >
            {children}
        </span>
    </h2>
    );
};

export default Title;
