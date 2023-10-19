"use client";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { useScreenSize } from "@/hooks/useScreenSize";
import { useScrollProgress } from "@/hooks/useScrollProgess";
import React, { useRef, useEffect, useState, use } from "react";
import Button from "../Button";
import ScrollTo from "./ScrollTo";
import Section from "./Section";
import ScrollToButton from "./ScrollToButton";
import ScrollTriggeredText from "./ScrollTriggeredText";
import { HomeDocumentData, Simplify } from "../../../prismicio-types";

const totalFrames = 5;
const framePath = "/scroll-video-3240 copy/3lawschoppyandfastportraitarCopy_";

type FrameImage = HTMLImageElement | null;

function createImageSrc(
    index: number,
    resolution: number,
    qualityValue: number
) {
    const localSrc = `${framePath}${String(index).padStart(5, "0")}.png`;
    const optimizedSrc = `/_next/image?url=${encodeURIComponent(
        localSrc
    )}&w=${resolution}&q=${qualityValue}`;

    return optimizedSrc;
}
  
  export default function ScrollingVideoComponent({
      data,
  }: {
      data: Simplify<HomeDocumentData>;
  }) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const frameRef = useRef<number>(-1);
    const [loadedImages, setLoadedImages] = useState<FrameImage[]>([]);

    // const [loadedImages, setLoadedImages] = useState<FrameImage[]>(new Array(totalFrames).fill({ lowRes: null, hiRes: null }));
    const [dpr, setDPR] = useState<number>(0);
    const screenSize = useScreenSize();
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [showLoadingScreen, setShowLoadingScreen] = useState(true);
    const scrollProgress = useScrollProgress();
    const isDesktop = useIsDesktop();

    const drawImageOnCanvas = (img: FrameImage, index: number) => {
        if (!img || !canvasRef.current) return;

        const ctx = canvasRef.current.getContext("2d");

        const imageAspectRatio = img.naturalWidth / img.naturalHeight;
        const canvasAspectRatio = screenSize.width / screenSize.height;

        let drawWidth, drawHeight;

        // if (canvasAspectRatio < imageAspectRatio) {
        //     drawWidth = screenSize.height * imageAspectRatio;
        //     drawHeight = screenSize.height;
        // } else {
        //     drawWidth = screenSize.width;
        //     drawHeight = screenSize.width / imageAspectRatio;
        // }

        const mobileZoomFactor = 1.46;
        if (isDesktop) {
            drawWidth = screenSize.width;
            drawHeight = screenSize.width / imageAspectRatio;
        } else {
            drawWidth = screenSize.width * mobileZoomFactor;
            drawHeight =
                (screenSize.width / imageAspectRatio) * mobileZoomFactor;
        }

        const offsetX = (screenSize.width - drawWidth) / 2;
        const offsetY = isDesktop ? (screenSize.height - drawHeight) / 2 : 0;

        ctx?.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        frameRef.current = index;
    };

    const CHUNK_SIZE = 24;

    const highRes = 3840;
    const medRes = 1200;
    const lowRes = 640;
    const highQuality = 85;
    const medQuality = 60;
    const lowQuality = 1;

    const loadLowResImages = async () => {
        const resolution = (index: number) =>
            index < CHUNK_SIZE ? (isDesktop ? highRes : medRes) : lowRes;
        const qualityValue = (index: number) =>
            index < CHUNK_SIZE
                ? isDesktop
                    ? highQuality
                    : medQuality
                : lowQuality;

        const loadImage = async (index: number): Promise<HTMLImageElement> => {
            const img = new Image();

            return new Promise((resolve, reject) => {
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = createImageSrc(
                    index,
                    resolution(index),
                    qualityValue(index)
                );
            });
        };

        const allImagesPromises: Promise<HTMLImageElement>[] = [];
        const loadedLowResImages: HTMLImageElement[] = new Array(
            totalFrames
        ).fill(null);

        for (let i = 0; i < totalFrames; i++) {
            allImagesPromises.push(
                loadImage(i).then((img) => {
                    loadedLowResImages[i] = img;

                    const loadedCount = loadedLowResImages.filter(
                        (i) => i
                    ).length;
                    const progress = (loadedCount / totalFrames) * 100;
                    setLoadingProgress((prevProgress) =>
                        Math.max(prevProgress, Math.floor(progress))
                    );

                    return img;
                })
            );
        }

        try {
            await Promise.all(allImagesPromises);
            setLoadedImages(loadedLowResImages);
        } catch (error) {
            console.error("Error loading images", error);
        }
    };

    const loadHiResImages = async () => {
        const loadImage = async (index: number): Promise<HTMLImageElement> => {
            const img = new Image();

            return new Promise((resolve, reject) => {
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = createImageSrc(
                    index,
                    isDesktop ? highRes : medRes,
                    isDesktop ? highQuality : medQuality
                );
            });
        };

        // Helper function to load a chunk of images
        const loadChunk = async (start: number) => {
            const promises: Promise<HTMLImageElement>[] = [];
            for (
                let i = start;
                i < start + CHUNK_SIZE && i < totalFrames;
                i++
            ) {
                promises.push(loadImage(i));
            }

            const images = await Promise.all(promises);

            images.forEach((img, index) => {
                setLoadedImages((prevImages) => {
                    const newImages = [...prevImages];
                    const actualIndex = start + index;

                    if (newImages[actualIndex]) {
                        newImages[actualIndex] = img;
                    } else {
                        newImages.push(img);
                    }

                    return newImages;
                });
            });
        };

        // Skip the first chunk and loop through the remaining chunks
        for (let i = CHUNK_SIZE; i < totalFrames; i += CHUNK_SIZE) {
            try {
                await loadChunk(i);
            } catch (error) {
                console.error(
                    `Error loading hi-res image chunk starting from ${i}`,
                    error
                );
            }
        }
    };

    useEffect(() => {
        // Set device pixel ratio first
        if (window.devicePixelRatio) {
            setDPR(window.devicePixelRatio);
        } else {
            alert("dpr fail");
        }
    }, []);

    useEffect(() => {
        if (dpr && isDesktop !== null) {
            loadLowResImages().then(() => {
                setShowLoadingScreen(false);
                loadHiResImages();
            });
        }
    }, [dpr, isDesktop]);

    useEffect(() => {
        if (screenSize.width && canvasRef.current) {
            console.log("SET CANVAS SCALE", dpr);

            const ctx = canvasRef.current.getContext("2d");
            ctx?.setTransform(1, 0, 0, 1, 0, 0); // Reset the transformation matrix.
            ctx?.scale(dpr, dpr);
        }
    }, [screenSize, dpr, canvasRef.current]);

    useEffect(() => {
        if (canvasRef.current) {
            const framerate = 24;

            let frameIndex = Math.max(Math.floor(scrollProgress * framerate), 0);
            if (frameIndex >= totalFrames) frameIndex = totalFrames - 1;

            if (frameRef.current !== frameIndex && loadedImages[frameIndex]) {
                drawImageOnCanvas(loadedImages[frameIndex], frameIndex);
            }
        }
    }, [canvasRef.current, loadedImages, scrollProgress, showLoadingScreen]);

    useEffect(() => {
        if (canvasRef.current) {
            const framerate = 24;

            let frameIndex = Math.floor(scrollProgress * framerate);
            if (frameIndex >= totalFrames) frameIndex = totalFrames - 1;

            if (loadedImages[frameIndex]) {
                drawImageOnCanvas(loadedImages[frameIndex], frameIndex);
            }
        }
    }, [screenSize, isDesktop]);

    return (
        <div>
            <div
                className="scroll-video-container"
                style={{
                    position: "fixed",
                    left: 0,
                    height: "260vw",
                    width: "100%",
                    overflow: "hidden",
                    background: 'black'
                        // "linear-gradient(0deg, rgb(0,0,0) 45%, rgb(255,255,255) 60%)",
                }}
            >
                {screenSize.width && screenSize.height ? (
                    <canvas
                        ref={canvasRef}
                        width={screenSize.width * dpr}
                        height={screenSize.height * dpr}
                        style={{
                            width: `${screenSize.width}px`,
                            height: `${screenSize.height}px`,
                            // mixBlendMode: "multiply",
                            // background: 'red',
                        }}
                    ></canvas>
                ) : null}
            </div>
            <div
                className="homepage-container"
                style={{
                    color: "white",
                }}
            >
                <ScrollTriggeredText
                    text={data.animation_captions[0]?.collision || ""}
                    color="#fa8"
                    marginLeft="60vw"
                    marginTop="20vw"
                    className="collision"
                    startScroll={3}
                    endScroll={4.2}
                />
                <ScrollTriggeredText
                    text={data.animation_captions[0]?.down_time || ""}
                    color="#fd8"
                    marginLeft="16vw"
                    marginTop="18vw"
                    className="down-time"
                    startScroll={5.05}
                    endScroll={7.0}
                />
                <ScrollTriggeredText
                    text={data.animation_captions[0]?.activating || ""}
                    color="#6ff"
                    className="activating"
                    marginLeft="48vw"
                    marginTop="16vw"
                    startScroll={8.375}
                    endScroll={10.1}
                />
                <ScrollTriggeredText
                    text={data.animation_captions[0]?.activated || ""}
                    color="#C1FFFF"
                    className="activating"
                    marginLeft="48vw"
                    marginTop="16vw"
                    startScroll={10.42}
                    endScroll={11.2}
                />
                <ScrollTriggeredText
                    text={data.animation_captions[0]?.obstacle_avoided || ""}
                    color="#C1FFFF"
                    className="obstacle-avoided"
                    marginLeft="58vw"
                    marginTop="16vw"
                    startScroll={13.6}
                    endScroll={15.3}
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
                        {`Deep Insights, Improved Reliability, Higher Performance`}
                    </div>
                    <h1
                        className="hero-title"
                        style={{
                            fontWeight: 500,
                            fontFamily: "korataki",
                            letterSpacing: "0.12em",
                        }}
                    >
                        3Laws A.I. Supervisor Suite
                    </h1>
                </div>

                <ScrollToButton
                    nextSection={
                        data.scroll_to_next_section_buttons[0]
                            ?.explore_beyond || ""
                    }
                    duration={1800}
                    className="Uncover-Deeper-Insights"
                />
                <Section
                    right={false}
                    marginTop={"1520vw"}
                    className="metrics"
                    title={data.metrics_card[0]?.title || ""}
                    text={data.metrics_card[0]?.text || ""}
                    linkText={data.metrics_card[0]?.link_text || ""}
                    href={data.metrics_card[0]?.link_href || ""}
                />
                <ScrollToButton
                    nextSection={
                        data.scroll_to_next_section_buttons[0]
                            ?.uncover_deeper_insights || ""
                    }
                    duration={6000}
                    className="Continue"
                />
                <Section
                    right={true}
                    marginTop={"1130vw"}
                    className="diagnostic-tools"
                    title={data.dynamic_environment_card[0]?.title || ""}
                    text={data.dynamic_environment_card[0]?.text || ""}
                    linkText={data.dynamic_environment_card[0]?.link_text || ""}
                    href={data.dynamic_environment_card[0]?.link_href || ""}
                />
                <ScrollToButton
                    nextSection={
                        data.scroll_to_next_section_buttons[0]?.continue || ""
                    }
                    duration={2000}
                    className="Reenter-Dynamic-Environment"
                />
                <ScrollToButton
                    nextSection={
                        data.scroll_to_next_section_buttons[0]
                            ?.reenter_dynamic_environment || ""
                    }
                    duration={3300}
                    className="Activate-Safety-Supervisor"
                />
                <ScrollToButton
                    nextSection={
                        data.scroll_to_next_section_buttons[0]
                            ?.activate_safety_supervisor || ""
                    }
                    duration={2700}
                    className="Face-the-Repercussions"
                />
                <Section
                    right={false}
                    marginTop={"590vw"}
                    className="safety-supervisor"
                    title={
                        data.introducing_safety_supervisor_card[0]?.title || ""
                    }
                    text={
                        data.introducing_safety_supervisor_card[0]?.text || ""
                    }
                    linkText={
                        data.introducing_safety_supervisor_card[0]?.link_text ||
                        ""
                    }
                    href={
                        data.introducing_safety_supervisor_card[0]?.link_href ||
                        ""
                    }
                />
                <ScrollToButton
                    nextSection={
                        data.scroll_to_next_section_buttons[0]
                            ?.face_the_repercussions || ""
                    }
                    duration={2500}
                    className="Witness-the-Impact"
                />
                <Section
                    right={true}
                    marginTop={"355vw"}
                    className="collisions"
                    title={data.collision_card[0]?.title || ""}
                    text={data.collision_card[0]?.text || ""}
                    linkText={data.collision_card[0]?.link_text || ""}
                    href={data.collision_card[0]?.link_href || ""}
                />
                <ScrollToButton
                    nextSection={
                        data.scroll_to_next_section_buttons[0]
                            ?.witness_the_impact || ""
                    }
                    duration={1600}
                    className="Enter-Dynamic-Environment"
                />
                <ScrollToButton
                    nextSection={
                        data.scroll_to_next_section_buttons[0]
                            ?.enter_dynamic_environment || ""
                    }
                    duration={2000}
                    className="Scroll-or-Click-to-Explore"
                />
                <Section
                    right={false}
                    marginTop={"110vw"}
                    className="dynamic-environment"
                    title={data.more_info_about_supervisor_card[0]?.title || ""}
                    text={data.more_info_about_supervisor_card[0]?.text || ""}
                    linkText={
                        data.more_info_about_supervisor_card[0]?.link_text || ""
                    }
                    href={
                        data.more_info_about_supervisor_card[0]?.link_href || ""
                    }
                />
                <ScrollToButton
                    nextSection={
                        data.scroll_to_next_section_buttons[0]
                            ?.scroll_or_click_to_explore || ""
                    }
                    className="start"
                    duration={1500}
                />

                <ScrollTo
                    className="Scroll-or-Click-to-Explore"
                    name={
                        data.scroll_to_next_section_buttons[0]
                            ?.scroll_or_click_to_explore ||
                        "Scroll or Click to Explore"
                    }
                />
                <ScrollTo
                    className="Enter-Dynamic-Environment"
                    name={
                        data.scroll_to_next_section_buttons[0]
                            ?.enter_dynamic_environment ||
                        "Enter Dynamic Environment"
                    }
                />
                <ScrollTo
                    className="Witness-the-Impact"
                    name={
                        data.scroll_to_next_section_buttons[0]
                            ?.witness_the_impact || "Witness the Impact"
                    }
                />
                <ScrollTo
                    className="Face-the-Repercussions"
                    name={
                        data.scroll_to_next_section_buttons[0]
                            ?.face_the_repercussions || "Face the Repercussions"
                    }
                />
                <ScrollTo
                    className="Activate-Safety-Supervisor"
                    name={
                        data.scroll_to_next_section_buttons[0]
                            ?.activate_safety_supervisor ||
                        "Activate Safety Supervisor"
                    }
                />
                <ScrollTo
                    className="Reenter-Dynamic-Environment"
                    name={
                        data.scroll_to_next_section_buttons[0]
                            ?.reenter_dynamic_environment ||
                        "Reenter Dynamic Environment"
                    }
                />
                <ScrollTo
                    className="Continue"
                    name={
                        data.scroll_to_next_section_buttons[0]?.continue ||
                        "Continue"
                    }
                />
                <ScrollTo
                    className="Uncover-Deeper-Insights"
                    name={
                        data.scroll_to_next_section_buttons[0]
                            ?.uncover_deeper_insights ||
                        "Uncover Deeper Insights"
                    }
                />
                <ScrollTo
                    className="Explore-Beyond"
                    name={
                        data.scroll_to_next_section_buttons[0]
                            ?.explore_beyond || "Explore Beyond"
                    }
                />
            </div>

            <div
                className="homepage-bottom-container page-padding"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100vw",
                    background: "#1111",
                    // position: "absolute",
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
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "100vh",
                    width: "100vw",
                    zIndex: 1001,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "black",
                    flexDirection: "column",
                    opacity: showLoadingScreen ? 1 : 0,
                    pointerEvents: showLoadingScreen ? 'auto' : 'none',
                    transition: 'opacity ease 1.4s',

                }}
            >
                {showLoadingScreen &&<div
                    className="loading-text"
                    style={{
                        fontFamily: "korataki",
                        color: "white",
                        letterSpacing: "0.2em",
                        lineHeight: "80%",
                    }}
                >
                    {loadingProgress}%
                </div>}
                {showLoadingScreen &&<div
                    style={{
                        height: "10px",
                        background: "white",
                        width: `${loadingProgress}%`,
                    }}
                ></div>}
            </div>
        </div>
    );
}
