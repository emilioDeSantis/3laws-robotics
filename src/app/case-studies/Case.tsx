"use client"
import React, { useState } from "react";
import Image from "next/image";
import { roboto_mono } from "../fonts";
import Button2 from "@/components/Button2";

interface CaseProps {
    image: string;
    alt: string;
    title: string;
    company: string;
    video: string;
    children: React.ReactNode; // using React.ReactNode for children prop
}

const Case: React.FC<CaseProps> = ({
    image,
    alt,
    title,
    company,
    video,
    children, // this replaces the description prop
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <article
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
                    fontSize: "1.4rem",
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
            {/* This is where the children prop is used, allowing any content to be inserted */}
            <div
                style={{
                    fontSize: "1rem",
                    lineHeight: "120%",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                }}
            >
                {children}
            </div>
        </article>
    );
};

export default Case;
