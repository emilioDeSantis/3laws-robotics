import React from "react";

interface PageContentContainerProps {
    children: React.ReactNode;
}

const PageContentContainer: React.FC<PageContentContainerProps> = ({
    children,
}) => {
    return (
        <main
            style={{
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "60rem",
                    // paddingTop: "6rem",
                }}
            >
                {children}
            </div>
        </main>
    );
};

export default PageContentContainer;
