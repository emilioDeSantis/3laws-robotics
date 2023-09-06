"use client"
import Image from "next/image";
import React, { useState } from "react";
import { roboto_mono } from "../fonts";
import Button2 from "@/components/Button2";

// Define the props type
interface CaseProps {
    image: string;
    alt: string;
    title: string;
    company: string;
    description: string;
    video: string;
}

// Use the defined props type with React.FC
const Case: React.FC<CaseProps> = ({
    image,
    alt,
    title,
    company,
    description,
    video,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div style={{ width: "100%", position: "relative" }}>
            <div
                style={{
                    width: "100%",
                    height: "22rem",
                    position: "relative",
                    zIndex: -10
                }}
            >
                <Image
                    fill
                    src={image}
                    alt={alt}
                    sizes="100vw"
                    priority
                    style={{
                        objectFit: "cover",
                        mixBlendMode: "lighten",
                    }}
                />
            </div>
            {/* <div
                style={{
                    position: "absolute",
                    top: 0,
                    height: "100%",
                    background: 'linear-gradient(90deg, rgba(17,17,17,1) 50%, rgba(17,17,17,0) 100%)',
                    width: '30rem'
                }}
            /> */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "absolute",
                    top: 0,
                    height: "100%",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                    }}
                >
                    <h2
                        // className={roboto_mono.className}
                        style={{
                            fontSize: "4rem",
                            lineHeight: "100%",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            fontFamily: 'korataki',
                            letterSpacing: '0.1em',
                        }}
                    >
                        {title}
                    </h2>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                        }}
                    >
                        <div
                            style={{
                                borderRadius: "1000px",
                                background: "#88ffee",
                                height: "8px",
                                width: "8px",
                            }}
                        />
                        <p
                            className={roboto_mono.className}
                            style={{
                                fontSize: "1rem",
                                lineHeight: "130%",
                                fontWeight: 300,
                                textTransform: "uppercase",
                            }}
                        >
                            {company}
                        </p>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                    }}
                >
                    <h2
                        // className={roboto_mono.className}
                        style={{
                            fontSize: "1rem",
                            lineHeight: "120%",
                            fontWeight: 500,
                            textTransform: "uppercase",
                            width: "25rem",
                            fontFamily: 'korataki',
                            letterSpacing: '0.1em',
                        }}
                    >
                        {description}
                    </h2>
                    <Button2 onClick={openModal} text={`▶ Watch ${title} in Action`}></Button2>
                    {isModalOpen && <VideoModal onClose={closeModal} videoSrc={video}/>}
                </div>
            </div>
        </div>
    );
};

const VideoModal: React.FC<{ onClose: () => void, videoSrc: string }> = ({ onClose, videoSrc }) => {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
                padding: "2rem",
            }}
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()} // Prevent the video container from closing the modal when clicked
                style={{
                    backgroundColor: "#FFF",
                    maxWidth: "90vw",
                    maxHeight: "90vh",
                    // overflowY: "auto",
                }}
            >
                {/* <button onClick={onClose} style={{ float: "right" }}>
                    X
                </button> */}
                <video
                    controls
                    width="100%"
                    height="100%"
                    src={videoSrc}
                />
            </div>
        </div>
    );
};

export default Case;
