import React from "react";

interface PageContentContainerProps {
    children: React.ReactNode;
}

const PageContentContainer: React.FC<PageContentContainerProps> = ({
    children,
}) => {
    return (
        <main
        className="page-padding"
            style={{
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <div
            className="page-content-container"
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {children}
            </div>
        </main>
    );
};

export default PageContentContainer;
