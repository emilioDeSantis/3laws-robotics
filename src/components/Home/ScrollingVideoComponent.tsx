"use client";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { useScreenSize } from "@/hooks/useScreenSize";
import { useScrollProgress } from "@/hooks/useScrollProgess";
import React, { useRef, useEffect, useState, use } from "react";

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
    children,
}: {
    children: React.ReactNode;
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

        if (canvasAspectRatio < imageAspectRatio) {
            drawWidth = screenSize.height * imageAspectRatio;
            drawHeight = screenSize.height;
        } else {
            drawWidth = screenSize.width;
            drawHeight = screenSize.width / imageAspectRatio;
        }

        const offsetX = (screenSize.width - drawWidth) / 2;
        const offsetY = (screenSize.height - drawHeight) / 2;

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
        const resolution = (index: number) => (index < CHUNK_SIZE ? isDesktop ? highRes : medRes : lowRes);
        const qualityValue = (index: number) => (index < CHUNK_SIZE ? isDesktop ? highQuality : medQuality : lowQuality);

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
                    setLoadingProgress(Math.floor(progress));

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
                img.src = createImageSrc(index, isDesktop ? highRes : medRes, isDesktop ? highQuality : medQuality);
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
    }, [dpr, isDesktop, loadHiResImages, loadLowResImages]);

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

            const frameIndex = Math.floor(scrollProgress * framerate);


            if (frameRef.current !== frameIndex && loadedImages[frameIndex]) {
                drawImageOnCanvas(loadedImages[frameIndex], frameIndex);
            }
        }
    }, [canvasRef.current, loadedImages, scrollProgress, showLoadingScreen, drawImageOnCanvas]);


    useEffect(() => {

        if (canvasRef.current) {
            const framerate = 24;

            const frameIndex = Math.floor(scrollProgress * framerate);


            if (loadedImages[frameIndex]) {
                drawImageOnCanvas(loadedImages[frameIndex], frameIndex);
            }
        }
    }, [screenSize, drawImageOnCanvas,]);

    return (
        <div>
            <div
                className="scroll-video-container"
                style={{ height: "100vh", width: "100vw" }}
            >
                <div style={{ position: "fixed" }}>
                    {screenSize.width && screenSize.height ? (
                        <canvas
                            ref={canvasRef}
                            width={screenSize.width * dpr}
                            height={screenSize.height * dpr}
                            style={{
                                width: `${screenSize.width}px`,
                                height: `${screenSize.height}px`,
                            }}
                        ></canvas>
                    ) : null}
                </div>
            </div>
            {children}
            {showLoadingScreen && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        height: "100vh",
                        width: "100vw",
                        zIndex: 999,
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        background: "black",
                    }}
                >
                    <div 
                    className="loading-text"
                    style={{
                        fontFamily: "korataki",
                        color: "white",
                        letterSpacing: "0.2em",
                        lineHeight: "80%",
                        
                    }}>{loadingProgress}%</div>
                </div>
            )}
        </div>
    );
}
