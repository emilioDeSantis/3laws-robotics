import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { scroller } from "react-scroll";

const scrollToSection = (nextSection: string, duration: number) => {
    // scroller.scrollTo(nextSection, {
    //     duration: duration,
    //     delay: 0,
    //     smooth: "easeInOut",
    // });
};

interface ScrollToProps {
    duration: number;
    nextSection: string;
    className: string;
}

const ScrollToButton: React.FC<ScrollToProps> = ({
    duration,
    nextSection,
    className,
}) => {
    return (
        <div
            className={`${className} scroll-to-button-container`}
            style={{
                position: "absolute",
                height: '100vh',
                display: "flex",
                flexDirection :'column',
                justifyContent: 'flex-end',
                opacity: 0.8,
                zIndex: 7,
            }}
        >
            <div
                style={{
                    width: "100vw",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div
                    onClick={() => {
                        scrollToSection(nextSection, duration);
                    }}
                    className="page-padding"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        color: "white",
                        cursor: "pointer",
                        fontFamily: "korataki",
                        fontWeight: 200,
                        fontSize: "0.8rem",
                        letterSpacing: "0.09em",
                        borderRadius: "10px",
                        zIndex: 201,
                    }}
                >
                    {nextSection}
                    <div
                        style={{
                            width: "1.2rem",
                            height: "1.2rem",
                        }}
                    >
                        <ChevronDownIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollToButton;
