"use client";
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
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                gap: '1rem',
            }}
        >
            <h2
                style={{
                    fontSize: "1.8rem",
                    lineHeight: "100%",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    fontFamily: "korataki",
                    letterSpacing: "0.1em",
                }}
            >
                {title}
            </h2>
            <video
            controls
            poster={image}
                style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                    background: '#fff1'
                }}
                src={video}
            />
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
                        opacity: 0.6,
                    }}
                >
                    {company}
                </p>
            </div>
            <h2
                // className={roboto_mono.className}
                style={{
                    fontSize: "1rem",
                    lineHeight: "120%",
                    fontWeight: 500,
                    // textTransform: "uppercase",
                    letterSpacing: "0.1em",
                }}
            >
                {description}
            </h2>
        </div>
    );
};


export default Case;
