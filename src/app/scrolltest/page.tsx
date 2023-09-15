"use client";import React, { useRef, useEffect, useState } from "react";

const totalFrames = 551;
const framePath = "/scroll-video-3240 copy/3lawschoppyandfastportraitarCopy_";

export default function ScrollingVideoComponent() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const frameRef = useRef<number>(0);
    const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([]);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [dpr, setDPR] = useState<number>(1);

    useEffect(() => {
        // Set device pixel ratio first
        if (window.devicePixelRatio) {
            setDPR(window.devicePixelRatio);
            console.log('dpr', window.devicePixelRatio);
            
        }
        else{
            alert('dpr fail')
        }
    }, []);

    useEffect(() => {
        setDimensions({
            width: window.innerWidth * dpr,
            height: window.innerHeight * dpr,
        });

        // Async function to load all images
        const loadImages = async () => {
            const imagePromises: Promise<HTMLImageElement>[] = [];

            for (let i = 0; i < totalFrames; i++) {
                const img = new Image();

                // Push each image load promise to the promises array
                imagePromises.push(new Promise((resolve, reject) => {
                    img.onload = () => resolve(img);
                    img.onerror = reject;
                    const localSrc = `${framePath}${String(i).padStart(5, "0")}.png`;
                    const resolution = 3840
                    const quality = 85
                    const optimizedSrc = `/_next/image?url=${encodeURIComponent(localSrc)}&w=${resolution}&q=${quality}`
                    // const optimizedSrc = `/_next/image?url=${encodeURIComponent('/3240.png')}&w=${resolution}&q=${quality}`
                    console.log(optimizedSrc);
                    
                    img.src = optimizedSrc;
                }));
            }

            try {
                const imgs = await Promise.all(imagePromises);
                setLoadedImages(imgs);
            } catch (error) {
                console.error("Error loading images", error);
            }
        };

        loadImages();
    }, [dpr]);

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            ctx?.scale(dpr, dpr);
        }

        const handleScroll = () => {
            if (canvasRef.current) {
                const ctx = canvasRef.current.getContext("2d");
        
                const scrollY = window.scrollY;
                const maxScroll = document.body.scrollHeight - window.innerHeight;
                const frameIndex = Math.floor((scrollY / maxScroll) * totalFrames);
        
                if (frameRef.current !== frameIndex) {
                    if (ctx && loadedImages[frameIndex]) {
                        // ctx.clearRect(0, 0, dimensions.width / dpr, dimensions.height / dpr);
        
                        const imageAspectRatio = loadedImages[frameIndex].naturalWidth / loadedImages[frameIndex].naturalHeight;
                        const canvasAspectRatio = (dimensions.width) / (dimensions.height);
                        

        
                        let drawWidth, drawHeight;
        
                        // If the canvas aspect ratio is greater, it means the canvas width is larger relative to its height.
                        if (canvasAspectRatio < imageAspectRatio) {
                            drawWidth = (dimensions.height / dpr / dpr) * imageAspectRatio;
                            drawHeight = dimensions.height / dpr / dpr;
                        } else {
                            drawWidth = dimensions.width / dpr / dpr;
                            drawHeight = (dimensions.width / dpr / dpr) / imageAspectRatio;
                        }
        
                        const offsetX = ((dimensions.width / dpr / dpr) - drawWidth) / 2;
                        const offsetY = ((dimensions.height / dpr / dpr) - drawHeight) / 2;
                        
        
                        ctx.drawImage(loadedImages[frameIndex], offsetX, offsetY, drawWidth, drawHeight);
                        frameRef.current = frameIndex;
                    }
                }
            }
        };
        

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [dimensions, loadedImages]);

    return (
        <div style={{ height: "500vh" }}>
            <div style={{ position: "fixed", zIndex: -1 }}>
                {dimensions.width && dimensions.height ? (
                    <canvas
                        ref={canvasRef}
                        width={dimensions.width}
                        height={dimensions.height}
                        style={{
                            background: "#522",
                            width: `${dimensions.width / dpr}px`,
                            height: `${dimensions.height / dpr}px`,
                        }}
                    ></canvas>
                ) : null}
            </div>
        </div>
    );
}
