import React from "react";
import Case from "./Case";
import PageContentContainer from "@/components/PageContentContainer";
import Title from "@/components/Title";
import Description from "@/components/Description";

const CaseStudies: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100vw",
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
                        gap: "200px",
                        paddingTop: "160px",
                    }}
                >
                    <Case
                        image="/example.png"
                        alt="example"
                        title="Flippy 2"
                        company="Miso Robotics"
                        description="Robotic arm kitchen application"
                        video="/short2.mp4"
                    />
                    <Case
                        image="/example.png"
                        alt="example"
                        title="Canyon 336"
                        company="Grady-white"
                        description="Boat collision avoidance"
                        video="/short2.mp4"
                    />
                    <Case
                        image="/example.png"
                        alt="example"
                        title="Flippy 2"
                        company="Miso Robotics"
                        description="Robotic arm kitchen application"
                        video="/short2.mp4"
                    />
                </div>
            </PageContentContainer>
        </div>
    );
};

export default CaseStudies;
