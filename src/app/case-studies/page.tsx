import React from "react";
import Case from "./Case";
import PageContentContainer from "@/components/PageContentContainer";
import Title from "@/components/Title";
import Description from "@/components/Description";
import { createClient } from "@/prismicio";
import { Metadata } from "next";
import Link from "next/link";

export const fetchCache = "force-no-store";

const CaseStudies: React.FC = () => {
    return (
        <section
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100vw",
                paddingBottom: "6rem",
            }}
        >
            <Title>See our tech in action</Title>
            <Description>
                Dive into real-life scenarios where our advanced safety systems
                have made a significant impact. From navigating unpredictable
                environments to minimizing costly downtimes, discover how 3 Laws
                Robotics is reshaping the future of robot interactions.
            </Description>
            <PageContentContainer>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5rem",
                        paddingTop: "5rem",
                    }}
                >
                    <Case
                        image="/flippy2.png"
                        alt="example"
                        title="Robotic Manipulators"
                        company="Miso Robotics"
                        video="/Miso.mp4"
                    >
                        <p>
                            {`Our technology was implemented alongside Miso
                            Robotics, where we were able to increase planning
                            reliability and decrease planning time in tightly
                            constrained, dynamic cooking environments. Read more
                            in the award-winning paper`}{" "}
                            <a
                                style={{ color: "#88FFFF" }}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={
                                    "https://ieeexplore.ieee.org/abstract/document/9834089?casa_token=VaTPRLjxruoAAAAA:UytQRnmQ2Cnw4uOkiKjI-BGcXH8BjK41vWW00CI2zIRChQ68QhB66nbzlCK32Gc4Q09EKxEl"
                                }
                            >
                                here
                            </a>
                            .
                        </p>
                    </Case>
                    <Case
                        image="/canyon.png"
                        alt="example"
                        title="Intelligent Boats"
                        company="Grady-white"
                        video="/Boat.mp4"
                    >
                        <p>
                            {`Yamaha needed high-speed ADAS that seamlessly protected the pilot without making them feel they lost control of the vessel. The 3Laws team delivered a smooth collision avoidance system that seamlessly avoided obstacles at speeds up to 45 mph.`}{" "}
                        </p>
                    </Case>
                    <Case
                        image="/unitree.png"
                        alt="example"
                        title="Unitree A1"
                        company="Unitree"
                        video="/Quadruped.mp4"
                    >
                        <p>
                            {`The Boston Dynamics Spot has a smooth collision avoidance layer that does not let the operator (or autonomy stack) run into obstacles. We implemented the same functionality on the Unitree A1 and added certificates of avoidance! Read more `}{" "}
                            <a
                                style={{ color: "#88FFFF" }}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={
                                    "https://ieeexplore.ieee.org/document/9652122"
                                }
                            >
                                here
                            </a>
                            .
                        </p>
                    </Case>
                    <Case
                        image="/drone.png"
                        alt="example"
                        title="Racing Drone"
                        company="Aerovironment"
                        video="/RacingDrone.mp4"
                    >
                        <p>
                            {`Aerovironment wanted a single geofencing and collision avoidance module that worked at both low speeds and very high speeds. 3Laws delivered on this with a solution that worked both indoors and outdoors at speeds above 100 km/hr. Read more `}{" "}
                            <a
                                style={{ color: "#88FFFF" }}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={
                                    "https://ieeexplore.ieee.org/document/9691815"
                                }
                            >
                                here
                            </a>
                            .
                        </p>
                    </Case>
                </div>
            </PageContentContainer>
        </section>
    );
};

export default CaseStudies;

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();
    const page = await client.getSingle("case_studies");

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
    };
}
