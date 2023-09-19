"use client";
import { useScreenSize } from "@/hooks/useScreenSize";
import React, { useRef, useEffect, useState } from "react";

const totalFrames = 551;
const framePath = "/scroll-video-3240 copy/3lawschoppyandfastportraitarCopy_";

type FrameImage = HTMLImageElement | null


function createImageSrc(index:number, resolution:number, qualityValue:number){
    const localSrc = `${framePath}${String(index).padStart(5, "0")}.png`;
    const optimizedSrc = `/_next/image?url=${encodeURIComponent(localSrc)}&w=${resolution}&q=${qualityValue}`;

    console.log(optimizedSrc);
    
    return optimizedSrc
}


export default function ScrollingVideoComponent() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const frameRef = useRef<number>(0);
    const [loadedImages, setLoadedImages] = useState<FrameImage[]>([]);

    // const [loadedImages, setLoadedImages] = useState<FrameImage[]>(new Array(totalFrames).fill({ lowRes: null, hiRes: null }));
    const [dpr, setDPR] = useState<number>(0);
    const screenSize = useScreenSize();
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [showLoadingScreen, setShowLoadingScreen] = useState(true);



    const drawImageOnCanvas = (frame: FrameImage, index: number) => {
        const img = frame;
        if (!img || !canvasRef.current) return;
    
        const ctx = canvasRef.current.getContext("2d");

    
        const imageAspectRatio = img.naturalWidth / img.naturalHeight;
        const canvasAspectRatio = (screenSize.width) / (screenSize.height);
    
        let drawWidth, drawHeight;
    
        if (canvasAspectRatio < imageAspectRatio) {
            drawWidth = (screenSize.height) * imageAspectRatio;
            drawHeight = screenSize.height;
        } else {
            drawWidth = screenSize.width;
            drawHeight = (screenSize.width) / imageAspectRatio;
        }
    
        const offsetX = ((screenSize.width) - drawWidth) / 2;
        const offsetY = ((screenSize.height) - drawHeight) / 2;

    

        
        ctx?.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        frameRef.current = index;
    };



    const loadLowResImages = async () => {
        const resolution = 640;
        const qualityValue = 1;
    
        const loadImage = async (index: number): Promise<HTMLImageElement> => {
            const img = new Image();
            
            return new Promise((resolve, reject) => {
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = createImageSrc(index, resolution, qualityValue);
            });
        };
    
        const allImagesPromises: Promise<HTMLImageElement>[] = [];
        const loadedLowResImages: HTMLImageElement[] = new Array(totalFrames).fill(null);
    
        for (let i = 0; i < totalFrames; i++) {

            allImagesPromises.push(loadImage(i).then(img => {

                loadedLowResImages[i]=img;
    
                const loadedCount = loadedLowResImages.filter(i=>i).length;
                const progress = (loadedCount / totalFrames) * 100;
                setLoadingProgress(Math.floor(progress));
    
                return img;
            }));
        }
    
        try {
            await Promise.all(allImagesPromises);
            setLoadedImages(loadedLowResImages);
        } 
        catch (error) {
            console.error("Error loading low-res images", error);
        }
    };
    



    const loadHiResImages = async () => {
        const resolution = 3840;
        const qualityValue = 85;
    
        const loadImage = async (index: number): Promise<HTMLImageElement> => {
            const img = new Image();
            
            return new Promise((resolve, reject) => {
                img.onload = () => resolve(img);
                img.onerror = reject;

                img.src = createImageSrc(index, resolution, qualityValue);

            });
        };
    
        for (let i = 0; i < totalFrames; i++) {
            try {
                const img = await loadImage(i);
                  setLoadedImages(prevImages => {   
                    const newImages = [...prevImages];

                    if(newImages[i]){
                        newImages[i] = img;
                    }
                    else{
                        newImages.push(img)
                    }
                    
                    return newImages;
                });
            } 
            catch (error) {
                console.error(`Error loading hi-res image ${i}`, error);
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
        
        if(dpr){
            loadLowResImages().then(() => {
                setShowLoadingScreen(false);
                loadHiResImages();
            });
        }
    
    }, [dpr]);
    
    
    
    




    useEffect(() => {
        if (screenSize.width && canvasRef.current) {
            console.log('SET CANVAS SCALE', dpr);
            
            const ctx = canvasRef.current.getContext("2d");
            ctx?.setTransform(1, 0, 0, 1, 0, 0);  // Reset the transformation matrix.
            ctx?.scale(dpr, dpr);
        }
    }, [screenSize, dpr, canvasRef.current]);



 

    useEffect(() => {
        
    
        const handleScroll = () => {

            
            if (!canvasRef.current) return;
        
            const scrollY = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const frameIndex = Math.floor((scrollY / maxScroll) * totalFrames);


            
        
            if (frameRef.current !== frameIndex && loadedImages[frameIndex]) {
                drawImageOnCanvas(loadedImages[frameIndex], frameIndex);
            }

        };
        
    
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [canvasRef.current, loadedImages, screenSize]); // added screenSize to the dependency array
       
    
    
    useEffect(() => {
        
        if (!showLoadingScreen && loadedImages[frameRef.current]) {

            drawImageOnCanvas(loadedImages[frameRef.current], frameRef.current);
        }

        
    }, [screenSize, showLoadingScreen, loadedImages]);



    return (
        <div style={{ height: "500vh" }}>
            {showLoadingScreen && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        height: '100vh',
                        width: '100vw',
                        zIndex: 999,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'black',
                    }}
                >
                    <div>Loading: {loadingProgress}%</div>
                    {/* You can add a progress bar or other visual representation here */}
                </div>
            )}

            <div style={{ position: "fixed", zIndex: -1 }}>
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
    );
}
