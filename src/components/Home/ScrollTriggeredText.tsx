import { useScrollProgress } from "@/hooks/useScrollProgess";
import { use } from "react";

interface ScrollTriggeredTextProps {
    text: string;
    color: string;
    marginLeft: string;
    marginTop: string;
    startScroll: number;
    endScroll: number;
    className: string;
}

const ScrollTriggeredText: React.FC<ScrollTriggeredTextProps> = ({
    text,
    color,
    marginLeft,
    marginTop,
    startScroll,
    endScroll,
    className
}) => {
    const scrollProgress = useScrollProgress();
    return (
        <div
            className={`pulsing-element ${className}`}
            style={{
                position: "fixed",
                display: "flex",
                justifyContent: "flex-start",
                zIndex: 5,
            }}
        >
            <div
            className="scroll-triggered-text"
                style={{
                    opacity:
                        scrollProgress > startScroll &&
                        scrollProgress < endScroll
                            ? "100%"
                            : 0,
                    transition: "opacity 0.3s ease-in-out",
                    color: color,
                    lineHeight: "90%",
                    fontWeight: 200,
                    textTransform: "capitalize",
                    letterSpacing: "0.2em",
                    fontFamily: "korataki",
                    textShadow: `0 0 5px ${color}`,
                }}
            >
                {text}
            </div>
        </div>
    );
};

export default ScrollTriggeredText