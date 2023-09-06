"use client";
import Button from "@/components/Button";
import ScrollToButton from "@/components/Home/ScrollToButton";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
    Link as ScrollLink,
    animateScroll as scroll,
    scroller,
} from "react-scroll";

const throttle = (fn: Function, delay: number) => {
    let lastCall = 0;

    return function (...args: any[]) {
        const now = new Date().getTime();

        if (now - lastCall < delay) {
            return;
        }

        lastCall = now;
        return fn(...args);
    };
};

interface ScrollToObject {
    name: string;
    marginTop: number;
    action: string;
}

const scrollToObjects: ScrollToObject[] = [
    { name: "start", marginTop: 0, action: "start" },
    {
        name: "task underway",
        marginTop: 95,
        action: "scroll or click to explore",
    },
    { name: "collision", marginTop: 230, action: "enter dynamic environment" },
    { name: "assessment", marginTop: 340, action: "Witness the Impact" },
    // { name: "ready", marginTop: 493, action: "extensive recovery process" },
    {
        name: "supervisor",
        marginTop: 575,
        action: "Face the Repercussions",
    },
    { name: "activated", marginTop: 756, action: "activate safety supervisor" },
    { name: "sucess", marginTop: 978, action: "reenter dynamic environment" },
    { name: "certified", marginTop: 1115, action: "continue" },
    // { name: "metrics", marginTop: 1251, action: "live metrics" },
    {
        name: "live metrics",
        marginTop: 1505,
        action: "Uncover Deeper Insights",
    },
    { name: "task complete", marginTop: 1570, action: "Explore Beyond" },
];

const findNextSection = (
    scrollDown: boolean,
    scrollPosition: number
): ScrollToObject | undefined => {
    if (scrollDown) {
        return scrollToObjects.find(
            (obj) => scrollPosition * 100 + 30 < obj.marginTop
        );
    } else {
        return [...scrollToObjects]
            .reverse()
            .find((obj) => scrollPosition * 100 - 30 > obj.marginTop);
    }
};

export default function HomePage() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    const [prevScrollToObject, setPrevScrollToObject] = useState<
        ScrollToObject | {}
    >({});
    const [nextScrollToObject, setNextScrollToObject] = useState<
        ScrollToObject | {}
    >(scrollToObjects[1]);

    // const handleScroll = (lengthInVW: number) => {
    //     const viewportWidth = window.innerWidth;
    //     const lengthInPX = (lengthInVW / 100) * viewportWidth;
    //     window.scrollTo({
    //         top: window.pageYOffset + lengthInPX,
    //         behavior: "smooth",
    //     });
    // };

    const handleScroll = (lengthInVW: number) => {
        const viewportWidth = window.innerWidth;
        const lengthInPX = (lengthInVW / 100) * viewportWidth;
        scroll.scrollMore(lengthInPX, { duration: 1000 });
    };

    function almostLinear(t: number) {
        const edge = 0; // adjust this value to make the easing at the edges more or less pronounced
        return 1;
        if (t < edge) {
            return t / edge;
        } else if (t > 1 - edge) {
            return 1 - (t - (1 - edge)) / edge;
        } else {
            return 1;
        }
    }

    const scrollUpOrDown = (scrollDown: boolean) => {
        let nextSection = findNextSection(scrollDown, scrollPosition);

        if (nextSection) {
            scroller.scrollTo(nextSection.name, {
                duration: Math.abs(
                    (nextSection.marginTop - scrollPosition * 100) * 15
                ),
                delay: 0,
                smooth: "easeInOut",
            });
        }
    };

    const scrollToSection = (name: string) => {
        const section = scrollToObjects.find((s) => s.name === name);

        if (section) {
            scroller.scrollTo(name, {
                duration: Math.abs(
                    (section.marginTop - scrollPosition * 100) * 15
                ),
                delay: 0,
                smooth: "easeInOut",
            });
        }
    };

    useEffect(() => {
        const handleScroll = throttle(() => {
            const viewportWidth = window.innerWidth;
            const scrollFactor = viewportWidth;

            setScrollPosition(window.pageYOffset / scrollFactor);

            if (videoRef.current) {
                const scrollPos = window.pageYOffset;
                const scrollPercent = scrollPos / scrollFactor;
                videoRef.current.currentTime = scrollPercent * 1.44;
            }
            const prevScrollObject =
                findNextSection(false, window.pageYOffset / scrollFactor) || {};
            const nextScrollObject =
                findNextSection(true, window.pageYOffset / scrollFactor) || {};
            setPrevScrollToObject(prevScrollObject);
            setNextScrollToObject(nextScrollObject);
        }, 40);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            style={{
                color: "white",
            }}
        >
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                }}
            >
                <video
                    ref={videoRef}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        mixBlendMode: "screen",
                    }}
                    src="/0000-0550.mp4"
                    // src="/output4.mp4"
                />
            </div>

            <ScrollTriggeredText
                text="Collision"
                color="#fa8"
                marginLeft="60vw"
                marginTop="20vw"
                startScroll={3 / 1.44}
                endScroll={4.2 / 1.44}
                scrollPosition={scrollPosition}
            />
            <ScrollTriggeredText
                text="down time"
                color="#fd8"
                marginLeft="16vw"
                marginTop="18vw"
                startScroll={5.05 / 1.44}
                endScroll={7.0 / 1.44}
                scrollPosition={scrollPosition}
            />
            {/* <ScrollTriggeredText
                text="Ready"
                color="#9f9"
                marginLeft="20vw"
                marginTop="20vw"
                startScroll={7.08 / 1.44}
                endScroll={7.75 / 1.44}
                scrollPosition={scrollPosition}
            /> */}
            <ScrollTriggeredText
                text="activating..."
                color="#6ff"
                marginLeft="48vw"
                marginTop="16vw"
                startScroll={8.375 / 1.44}
                endScroll={10.1 / 1.44}
                scrollPosition={scrollPosition}
            />
            <ScrollTriggeredText
                text="Activated"
                color="#C1FFFF"
                marginLeft="48vw"
                marginTop="16vw"
                startScroll={10.42 / 1.44}
                endScroll={11.2 / 1.44}
                scrollPosition={scrollPosition}
            />
            <ScrollTriggeredText
                text="Obstacle avoided"
                color="#C1FFFF"
                marginLeft="58vw"
                marginTop="16vw"
                startScroll={13.6 / 1.44}
                endScroll={15.3 / 1.44}
                scrollPosition={scrollPosition}
            />
            {/* <ScrollTriggeredText
                text="Metrics"
                color="#99ddff"
                marginLeft="16vw"
                marginTop="30vw"
                startScroll={17.4 / 1.44}
                endScroll={18.8 / 1.44}
                scrollPosition={scrollPosition}
            /> */}
            {/* <div
                style={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    paddingTop: "28vh",
                    paddingBottom: "5vh",
                    width: "100vw",
                    paddingInline: "16vw",
                    height: "100vh",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <h1
                        style={{
                            fontWeight: 600,
                            fontSize: "5.4vw",
                            textTransform: "uppercase",
                            width: "24vw",
                            fontFamily: "korataki",
                            letterSpacing: "0.1em",
                        }}
                    >
                        3Laws
                    </h1>
                    <div
                        style={{
                            fontWeight: 300,
                            marginTop: "0vw",
                            fontSize: "1.2vw",
                            letterSpacing: "0.08em",
                            fontFamily: "korataki",
                        }}
                    >
                        Perfecting Autonomous Oversight
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            fontWeight: 300,
                            fontSize: "1vw",
                            letterSpacing: "0.08em",
                            lineHeight: "220%",
                            width: "26vw",
                            opacity: 0.8,
                        }}
                    >
                        Harness safety, accelerate innovation, and curb expenses
                        with 3Laws Robotics.
                    </div>
                    <div
                        style={{
                            marginTop: "1.5vw",
                            background: "#5855EB",
                            fontWeight: 300,
                            fontSize: "0.9vw",
                            letterSpacing: "0.12em",
                            textAlign: "center",
                            paddingBlock: "1vw",
                            width: "20vw",
                            fontFamily: 'korataki',
                            borderRadius: '10px',
                        }}
                    >
                        Get started today →
                    </div>
                </div>
                <ScrollToButton
                    onClick={() => {
                        scrollUpOrDown(true);
                    }}
                >
                    {scrollToObjects[1].action}
                </ScrollToButton>
            </div> */}

            <div
                style={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    paddingTop: "36vh",
                    paddingBottom: "5vh",
                    width: "100vw",
                    paddingInline: "7vw",
                    height: "100vh",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1vw",
                    }}
                >
                    <div
                        style={{
                            fontWeight: 200,
                            marginTop: "0vw",
                            fontSize: "1.2vw",
                            letterSpacing: "0.08em",
                            fontFamily: "korataki",
                        }}
                    >
                        {`Inroducing the 3Laws'`}
                    </div>
                    <h1
                        style={{
                            fontWeight: 500,
                            fontSize: "3.4vw",
                            fontFamily: "korataki",
                            letterSpacing: "0.12em",
                            width: "70vw",
                        }}
                    >
                        A.I. Robotics Safety Supervisor
                    </h1>
                </div>

                <ScrollToButton
                    onClick={() => {
                        scrollUpOrDown(true);
                    }}
                >
                    {scrollToObjects[1].action}
                </ScrollToButton>
            </div>
            <Section
                scrollUpOrDown={scrollUpOrDown}
                right={false}
                marginTop={"110vw"}
                title={"Operating in a dynamic environment without 3Laws"}
                text={
                    "In today's rapidly evolving world, robots operate within dynamic environments teeming with potential hazards. From unpredictable humans to swift moving machinery, these autonomous agents are constantly at risk of collisions, injuries, or other unforeseen complications."
                }
                linkText="See the Market Data →"
                href="https://webflow.com/made-in-webflow/website/relume-timeline-cloneable"
                scrollToObjectIndex={1}
            />
            <div
                style={{
                    marginLeft: "16vw",
                    position: "absolute",
                    marginTop: "255vw",
                    fontWeight: 200,
                }}
            >
                <ScrollToButton
                    onClick={() => {
                        scrollUpOrDown(true);
                    }}
                >
                    {scrollToObjects[3].action}
                </ScrollToButton>
            </div>
            <Section
                scrollUpOrDown={scrollUpOrDown}
                right={true}
                marginTop={"355vw"}
                title={"Collisions result in costly consequences"}
                text={
                    "In any advanced technological environment, disruptions bring with them substantial financial and safety repercussions. An accident can lead to extended downtime and costly repairs. More concerning is the threat to human safety. A collision or malfunction could result in serious injuries. Such events highlight the critical need for robotic systems to be both reliable and safe."
                }
                linkText="See the Market Data →"
                href="https://webflow.com/made-in-webflow/website/relume-timeline-cloneable"
                scrollToObjectIndex={3}
            />
            {/* <div
                style={{
                    right: "20vw",
                    position: "absolute",
                    marginTop: "520vw",
                }}
            >
                <ScrollToButton
                    onClick={() => {
                        scrollUpOrDown(true);
                    }}
                >
                    {scrollToObjects[5].action}
                </ScrollToButton>
            </div> */}
            <Section
                scrollUpOrDown={scrollUpOrDown}
                right={false}
                marginTop={"590vw"}
                title={"Introducing the 3Laws safety supervisor"}
                text={
                    "Drawing inspiration from Asimov's famed Three Laws, the 3Laws Safety Supervisor is a testament to the next generation of robotic safety. It ensures robots navigate unexpected challenges, maximizing efficiency while minimizing risks. With our solution, robots achieve faster safety certification, cutting down traditional costs. Trust in a system that upholds the prime directive: safety first."
                }
                linkText="Meet the Team Behind 3Laws →"
                href="/about"
                scrollToObjectIndex={4}
            />

            <div
                style={{
                    marginLeft: "7vw",
                    position: "absolute",
                    marginTop: "782vw",
                    fontWeight: 200,
                }}
            >
                <ScrollToButton
                    onClick={() => {
                        scrollUpOrDown(true);
                    }}
                >
                    {scrollToObjects[6].action}
                </ScrollToButton>
            </div>
            <div
                style={{
                    marginLeft: "16vw",
                    position: "absolute",
                    marginTop: "1000vw",
                    fontWeight: 200,
                }}
            >
                <ScrollToButton
                    onClick={() => {
                        scrollUpOrDown(true);
                    }}
                >
                    {scrollToObjects[7].action}
                </ScrollToButton>
            </div>

            <Section
                scrollUpOrDown={scrollUpOrDown}
                right={true}
                marginTop={"1130vw"}
                title={"Unlock Real-time Insights with 3Laws Diagnostic Tools"}
                text={
                    "The 3Laws Safety Supervisor offers real-time diagnostics and quick root cause analytics for faster development. In operations, it gives clear field visibility and detects issues early, reducing resolution times."
                }
                linkText="Learn More About the Product →"
                href="https://webflow.com/made-in-webflow/website/relume-timeline-cloneable"
                scrollToObjectIndex={7}
            />
            {/* <div
                style={{
                    position: "absolute",
                    marginTop: "1288vw",
                    marginLeft: "16vw",
                }}
            >
                <ScrollToButton
                    onClick={() => {
                        scrollUpOrDown(true);
                    }}
                >
                    {scrollToObjects[9].action}
                </ScrollToButton>
            </div> */}
            <Section
                scrollUpOrDown={scrollUpOrDown}
                right={false}
                marginTop={"1520vw"}
                title={"See Beyond the Surface with 3Laws Robot Metrics"}
                text={
                    "With the 3Laws Safety Supervisor, gain real-time insights into your robot's performance. Our system provides live metrics, highlighting areas the Supervisor enhances for safety and efficiency. This data helps users understand robot behaviors, make informed decisions, and proactively address potential issues."
                }
                linkText="Learn More About the Metrics →"
                href="https://webflow.com/made-in-webflow/website/relume-timeline-cloneable"
                scrollToObjectIndex={8}
            />
            {scrollToObjects.map((obj) => (
                <ScrollTo
                    key={obj.name}
                    name={obj.name}
                    marginTop={obj.marginTop}
                />
            ))}
            {/* <div
                style={{
                    position: "fixed",
                    bottom: "5vh",
                    right: "5vw",
                    padding: "1vw",
                    background: "#ff0000",
                    color: "white",
                }}
            >
                Scroll Position: {scrollPosition}vw
            </div> */}
            {/* <ProgressTracker
                scrollPosition={scrollPosition}
                scrollToSection={scrollToSection}
            /> */}
            {/* buttons */}
            {/* <div
                style={{
                    height: "100vh",
                    paddingTop: "30vh",
                    paddingBottom: "10vh",
                    justifyContent: "space-between",
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    left: "1vw",
                    zIndex: 100,
                    alignItems: "flex-start",
                    fontSize: "1.2rem",
                    fontWeight: 200,
                    letterSpacing: "0.09em",
                    lineHeight: "100%",
                    fontFamily: "korataki",
                    textTransform: "uppercase",
                    color: "#fffb",
                }}
            >
                <button
                    style={{
                        border: "none",
                        textAlign: "left",
                        width: "12vw",
                        height: "6vw",
                    }}
                    onClick={() => scrollUpOrDown(false)}
                >
                    ↑ {prevScrollToObject.action || "default value"}
                </button>
                <button
                    style={{
                        border: "none",
                        textAlign: "left",
                        width: "12vw",
                        height: "6vw",
                    }}
                    onClick={() => scrollUpOrDown(true)}
                >
                    ↓ {nextScrollToObject.action || "default value"}
                </button>
            </div> */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100vw",
                    background: "#1111",
                    position: "absolute",
                    top: "1570vw",
                    zIndex: 102,
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "46rem",
                        paddingTop: "2rem",
                        fontWeight: 300,
                        fontSize: "2.2rem",
                        color: "#ffffff",
                        lineHeight: "150%",
                        gap: "4rem",
                        paddingBottom: "6rem",
                    }}
                >
                    <div
                        style={{
                            paddingTop: "10rem",
                            fontWeight: 300,
                            fontSize: "0.8rem",
                            color: "#dddddd",
                            fontFamily: "korataki",
                            letterSpacing: "0.12em",
                            // textTransform: 'uppercase',
                        }}
                    >
                        Technology
                    </div>
                    <div
                        style={
                            {
                                // marginTop: "1rem",
                            }
                        }
                    >
                        {`The 3Laws Safety Supervisor stands as a beacon of
                        advanced robotic safety. Beyond just technology, it's a
                        product designed to revolutionize robotic operations,
                        merging safety with peak performance.`}
                    </div>

                    <Button
                        href="/product"
                        text="Learn more about the Safety Supervisor →"
                    />
                    <div
                        style={{
                            paddingTop: "10rem",
                            fontWeight: 300,
                            fontSize: "0.8rem",
                            color: "#dddddd",
                            fontFamily: "korataki",
                            letterSpacing: "0.12em",
                            // textTransform: 'uppercase',
                        }}
                    >
                        Case Studies
                    </div>
                    <div
                        style={
                            {
                                // marginTop: "1rem",
                            }
                        }
                    >
                        See the 3Laws Safety Supervisor in real-world scenarios.
                        From factories to autonomous vehicles, our case studies
                        spotlight the tangible benefits of our groundbreaking
                        product.
                    </div>

                    <Button
                        href="/case-studies"
                        text="See our tech in action →"
                    />
                </div>
            </div>
        </div>
    );
}

interface ScrollTriggeredTextProps {
    text: string;
    color: string;
    marginLeft: string;
    marginTop: string;
    startScroll: number;
    endScroll: number;
    scrollPosition: number;
}

const ScrollTriggeredText: React.FC<ScrollTriggeredTextProps> = ({
    text,
    color,
    marginLeft,
    marginTop,
    startScroll,
    endScroll,
    scrollPosition,
}) => {
    return (
        <div
            className="pulsing-element"
            style={{
                position: "fixed",
                top: marginTop,
                left: marginLeft,
                // height: "100%",
                // width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                zIndex: 0,
                // background: 'red',
            }}
        >
            <div
                style={{
                    opacity:
                        scrollPosition > startScroll &&
                        scrollPosition < endScroll
                            ? "100%"
                            : 0,
                    transition: "opacity 0.3s ease-in-out",
                    // fontFamily: "space mono",
                    color: color,
                    // marginLeft: marginLeft,
                    // marginTop: marginTop,
                    // marginInline: "1vw",
                    // marginTop: "12vw",
                    lineHeight: "90%",
                    fontWeight: 200,
                    fontSize: "3vw",
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

interface SectionProps {
    right: boolean;
    marginTop: string;
    title: string;
    text: string;
    href: string;
    linkText: string;
    scrollToObjectIndex: number;
    scrollUpOrDown: (newState: boolean) => void;
}

const Section: React.FC<SectionProps> = ({
    right,
    marginTop,
    title,
    text,
    href,
    linkText,
    scrollToObjectIndex,
    scrollUpOrDown,
}) => {
    return (
        <div
            style={{
                paddingRight: "7vw",
                paddingLeft: "7vw",
                position: "absolute",
                top: marginTop,
                height: "100vw",
                zIndex: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: right ? "flex-end" : "flex-start",
                width: "100%",
                gap: "2vw",
            }}
        >
            <div
                style={{
                    paddingInline: "2vw",
                    paddingBlock: "2vw",
                    width: "46vw",
                    display: "flex",
                    flexDirection: "column",
                    // height: "100vw",
                    background: "#ffffff11",
                    borderRadius: "10px",
                    border: "1px solid #fff4",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                }}
            >
                <h2
                    style={{
                        marginTop: "1vw",
                        fontWeight: 400,
                        fontSize: "1.6rem",
                        // textTransform: "uppercase",
                        letterSpacing: "0.09em",
                        lineHeight: "120%",
                        // width: "36vw",
                        fontFamily: "korataki",
                    }}
                >
                    {title}
                </h2>
                <p
                    style={{
                        marginTop: "3vw",
                        fontWeight: 300,
                        fontSize: "1rem",
                        letterSpacing: "0.08em",
                        lineHeight: "170%",
                        // width: "36vw",
                        opacity: 0.8,
                    }}
                >
                    {text}
                </p>

                <Link
                    href={href}
                    style={{
                        marginTop: "1vw",
                        fontWeight: 600,
                        fontSize: "1rem",
                        letterSpacing: "0.08em",
                        lineHeight: "200%",
                        width: "36vw",
                    }}
                >
                    {linkText}
                </Link>
            </div>
            <ScrollToButton
                onClick={() => {
                    scrollUpOrDown(true);
                }}
            >
                {scrollToObjects[scrollToObjectIndex + 1].action}
            </ScrollToButton>
        </div>
    );
};

interface ScrollToProps {
    name: string;
    marginTop: number;
}

const ScrollTo: React.FC<ScrollToProps> = ({ name, marginTop }) => {
    return (
        <div
            id={name}
            style={{
                marginTop: marginTop + "vw",
                color: "red",
                position: "absolute",
            }}
        >
            {/* {name} */}
        </div>
    );
};

interface ProgressTrackerProps {
    scrollPosition: number;
    scrollToSection: (name: string) => void;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({
    scrollPosition,
    scrollToSection,
}) => {
    const scale = 0.03;

    return (
        <div
            style={{
                position: "fixed",
                top: "30vh",
                left: "1vw",
                height: `40vh`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                overflow: "hidden",
                width: "16vw",
                fontFamily: "korataki",
                fontWeight: 200,
                // background: 'red',
                zIndex: 101,
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: "0",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    // marginLeft: "-2vw",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        width: "6px",
                        background: "#88ffff55",
                        borderLeft: "1px solid #fff4",
                        borderRight: "1px solid #fff4",
                    }}
                />
                <div
                    style={{
                        minHeight: "30px",
                        width: "6px",
                        background: "#88ffff99",
                        borderLeft: "1px solid #fff4",
                        borderRight: "1px solid #fff4",
                    }}
                />
                <div
                    style={{
                        height: "100%",
                        width: "6px",
                        background: "#fff2",
                        borderLeft: "1px solid #fff4",
                        borderRight: "1px solid #fff4",
                    }}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: `calc(${-scrollPosition * 100 * scale}vw + 50%)`,
                    height: `100%`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                {scrollToObjects.map((obj, index) => {
                    const isActive =
                        Math.abs(scrollPosition * 100 - obj.marginTop) < 20;
                    return (
                        <div
                        key={index}
                            style={{
                                position: "absolute",
                                top: `${obj.marginTop * scale}vw`,
                                height: 0,
                                // gap: "1vw",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "flex-end",
                                    flexDirection: "column",
                                    bottom: 0,
                                    zIndex: 101,
                                    cursor: "pointer",
                                    // gap: "1vw",
                                }}
                                onClick={() => {
                                    scrollToSection(obj.name);
                                }}
                            >
                                <div
                                    key={obj.name}
                                    style={{
                                        color: isActive
                                            ? "#88ffff"
                                            : "#ffffff66",
                                        transition: "0.5s ease-in-out",
                                        fontSize: isActive ? "1vw" : "0.8vw",
                                        marginLeft: "2vw",
                                    }}
                                >
                                    {obj.name}
                                </div>
                                <div
                                    style={{
                                        width: "100%",
                                        height: "1px",
                                        // marginLeft: '4px',
                                        transition: "0.5s ease-in-out",
                                        background: isActive
                                            ? "#88ffff"
                                            : "#ffffff66",
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
                {/* <div
                    style={{
                        position: "absolute",
                        height: "100%",
                    }}
                >
                    {Array.from({ length: 400 }, (_, index) => (
                        <div
                            key={index}
                            style={{
                                // height: index % 5 === 0 ? "10px" : "5px",
                                // width: "2px",
                                // background: "#fff6",
                                // marginBlock: "2px",
                                height: '1px',
                                width: index % 5 === 0 ? "20px" : "12px",
                                background: "#fff6",
                                marginBlock: "40px",
                            }}
                        />
                    ))}
                </div> */}
            </div>
        </div>
    );
};
