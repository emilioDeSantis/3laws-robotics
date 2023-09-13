"use client";
import Button from "@/components/Button";
import ScrollTo from "@/components/Home/ScrollTo";
import ScrollToButton from "@/components/Home/ScrollToButton";
import ScrollTriggeredText from "@/components/Home/ScrollTriggeredText";
import Section from "@/components/Home/Section";
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

export default function HomePage() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [scrollScale, setScrollScale] = useState<number>(1.44);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [mobile, setMobile] = useState<boolean>(true);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            // Cleanup to avoid potential memory leaks
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array means this useEffect runs once when the component mounts, and the cleanup runs when it unmounts

    useEffect(() => {
        if (windowWidth <= 768) {
            setScrollScale(0.9);
            setMobile(true);
        } else {
            setScrollScale(1.44);
            setMobile(false);
        }
    }, [windowWidth]);

    useEffect(() => {
        const handleScroll = throttle(() => {
            const viewportWidth = window.innerWidth;
            const scrollFactor = viewportWidth;

            setScrollPosition(window.pageYOffset / scrollFactor);

            if (videoRef.current) {
                const scrollPos = window.pageYOffset;
                const scrollPercent = scrollPos / scrollFactor;
                videoRef.current.currentTime = scrollPercent * scrollScale;
            }
        }, 40);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollScale]);

    return (
        <div
            style={{
                color: "white",
            }}
        >
            <div className="scroll-video-container">
                <video
                    autoPlay={mobile ? true : false}
                    ref={videoRef}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
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
                className="collision"
                startScroll={3 / scrollScale}
                endScroll={4.2 / scrollScale}
                scrollPosition={scrollPosition}
            />
            <ScrollTriggeredText
                text="down time"
                color="#fd8"
                marginLeft="16vw"
                marginTop="18vw"
                className="down-time"
                startScroll={5.05 / scrollScale}
                endScroll={7.0 / scrollScale}
                scrollPosition={scrollPosition}
            />
            {/* <ScrollTriggeredText
                text="Ready"
                color="#9f9"
                marginLeft="20vw"
                marginTop="20vw"
                startScroll={7.08 / scrollScale}
                endScroll={7.75 / scrollScale}
                scrollPosition={scrollPosition}
            /> */}
            <ScrollTriggeredText
                text="activating..."
                color="#6ff"
                className="activating"
                marginLeft="48vw"
                marginTop="16vw"
                startScroll={8.375 / scrollScale}
                endScroll={10.1 / scrollScale}
                scrollPosition={scrollPosition}
            />
            <ScrollTriggeredText
                text="Activated"
                color="#C1FFFF"
                className="activating"
                marginLeft="48vw"
                marginTop="16vw"
                startScroll={10.42 / scrollScale}
                endScroll={11.2 / scrollScale}
                scrollPosition={scrollPosition}
            />
            <ScrollTriggeredText
                text="Obstacle avoided"
                color="#C1FFFF"
                className="obstacle-avoided"
                marginLeft="58vw"
                marginTop="16vw"
                startScroll={13.6 / scrollScale}
                endScroll={15.3 / scrollScale}
                scrollPosition={scrollPosition}
            />
            <div
                className="page-padding"
                style={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    width: "100vw",
                }}
            >
                <div
                    className="hero-subtitle"
                    style={{
                        fontWeight: 200,
                        letterSpacing: "0.08em",
                        fontFamily: "korataki",
                    }}
                >
                    {`Introducing the 3 Laws'`}
                </div>
                <h1
                    className="hero-title"
                    style={{
                        fontWeight: 500,
                        fontFamily: "korataki",
                        letterSpacing: "0.12em",
                    }}
                >
                    A.I. Robotics Safety Supervisor
                </h1>
            </div>

            <ScrollToButton
                nextSection="Explore Beyond"
                duration={1800}
                className="Uncover-Deeper-Insights"
            />
            <Section
                right={false}
                marginTop={"1520vw"}
                className="metrics"
                title={"See Beyond the Surface with 3Laws Robot Metrics"}
                text={
                    "With the 3Laws Safety Supervisor, gain real-time insights into your robot's performance. Our system provides live metrics that help users understand robot behaviors, make informed decisions, and proactively address potential issues."
                }
                linkText="Learn More About the Metrics →"
                href="https://webflow.com/made-in-webflow/website/relume-timeline-cloneable"
            />
            <ScrollToButton
                nextSection="Uncover Deeper Insights"
                duration={6000}
                className="Continue"
            />
            <Section
                right={true}
                marginTop={"1130vw"}
                className="diagnostic-tools"
                title={"Unlock Real-time Insights with 3Laws Diagnostic Tools"}
                text={
                    "The 3Laws Safety Supervisor offers real-time diagnostics and quick root cause analytics for faster development. In operations, it gives clear field visibility and detects issues early, reducing resolution times."
                }
                linkText="Learn More About the Product →"
                href="https://webflow.com/made-in-webflow/website/relume-timeline-cloneable"
            />
            <ScrollToButton
                nextSection="Continue"
                duration={2000}
                className="Reenter-Dynamic-Environment"
            />

            <ScrollToButton
                nextSection="Reenter Dynamic Environment"
                duration={3300}
                className="Activate-Safety-Supervisor"
            />
            <ScrollToButton
                nextSection="Activate Safety Supervisor"
                duration={2700}
                className="Face-the-Repercussions"
            />
            <Section
                right={false}
                marginTop={"590vw"}
                className="safety-supervisor"
                title={"Introducing the 3Laws safety supervisor"}
                text={
                    "Inspired by Asimov's Three Laws, the 3Laws Safety Supervisor represents the future of robotic safety. It helps robots handle unforeseen challenges efficiently and safely. With our solution, robots achieve faster safety certification, cutting down traditional costs. Trust in a system that upholds the prime directive: safety first."
                }
                linkText="Meet the Team Behind 3Laws →"
                href="/about"
            />
            <ScrollToButton
                nextSection="Face the Repercussions"
                duration={2500}
                className="Witness-the-Impact"
            />
            <Section
                right={true}
                marginTop={"355vw"}
                className="collisions"
                title={"Collisions result in costly consequences"}
                text={
                    "In high-tech settings, disruptions bring with them substantial financial and safety repercussions. Accidents may cause downtime and expensive repairs, as well as risk of injury. This underscores the need for robotic systems to be reliable and safe."
                }
                linkText="See the Market Data →"
                href="https://webflow.com/made-in-webflow/website/relume-timeline-cloneable"
            />
            <ScrollToButton
                nextSection="Witness the Impact"
                duration={1600}
                className="Enter-Dynamic-Environment"
            />
            <ScrollToButton
                nextSection="Enter Dynamic Environment"
                duration={2000}
                className="Scroll-or-Click-to-Explore"
            />
            <Section
                right={false}
                marginTop={"110vw"}
                className="dynamic-environment"
                title={"Operating in a dynamic environment without 3Laws"}
                text={
                    "In today's rapidly evolving world, robots face numerous hazards, from unpredictable humans to swift moving machinery. These autonomous agents are constantly at risk of collisions, injuries, or other unforeseen complications."
                }
                linkText="See the Market Data →"
                href="https://webflow.com/made-in-webflow/website/relume-timeline-cloneable"
            />
            <ScrollToButton
                nextSection="Scroll or Click to Explore"
                className="start"
                duration={1500}
            />

            <ScrollTo className="start" name="start" />
            <ScrollTo
                className="Scroll-or-Click-to-Explore"
                name="Scroll or Click to Explore"
            />
            <ScrollTo
                className="Enter-Dynamic-Environment"
                name="Enter Dynamic Environment"
            />
            <ScrollTo
                className="Witness-the-Impact"
                name="Witness the Impact"
            />
            <ScrollTo
                className="Face-the-Repercussions"
                name="Face the Repercussions"
            />
            <ScrollTo
                className="Activate-Safety-Supervisor"
                name="Activate Safety Supervisor"
            />
            <ScrollTo
                className="Reenter-Dynamic-Environment"
                name="Reenter Dynamic Environment"
            />
            <ScrollTo className="Continue" name="Continue" />
            <ScrollTo
                className="Uncover-Deeper-Insights"
                name="Uncover Deeper Insights"
            />
            <ScrollTo className="Explore-Beyond" name="Explore Beyond" />
            <div
                className="homepage-bottom-container page-padding"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100vw",
                    background: "#1111",
                    position: "absolute",
                    zIndex: 102,
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                }}
            >
                <div
                    className="big-text page-previews-container"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            fontSize: "2rem",
                            paddingTop: "8rem",
                            fontWeight: 300,
                            color: "#dddddd",
                            fontFamily: "korataki",
                            letterSpacing: "0.12em",
                            // textTransform: 'uppercase',
                        }}
                    >
                        Technology
                    </div>
                    <div>
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
                            fontSize: "2rem",
                            paddingTop: "8rem",
                            fontWeight: 300,
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
