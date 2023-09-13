interface ScrollTriggeredTextProps {
    text: string;
    color: string;
    marginLeft: string;
    marginTop: string;
    startScroll: number;
    endScroll: number;
    scrollPosition: number;
    className: string;
}

const ScrollTriggeredText: React.FC<ScrollTriggeredTextProps> = ({
    text,
    color,
    marginLeft,
    marginTop,
    startScroll,
    endScroll,
    scrollPosition,
    className
}) => {
    return (
        <div
            className={`pulsing-element ${className}`}
            style={{
                position: "fixed",
                display: "flex",
                justifyContent: "flex-start",
            }}
        >
            <div
            className="scroll-triggered-text"
                style={{
                    opacity:
                        scrollPosition > startScroll &&
                        scrollPosition < endScroll
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