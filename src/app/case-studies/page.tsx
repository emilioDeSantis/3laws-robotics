import React from "react";
import Case from "./Case";
import PageContentContainer from "@/components/PageContentContainer";
import Title from "@/components/Title";
import Description from "@/components/Description";

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
                        title="Flippy 2"
                        company="Miso Robotics"
                        description="Robotic arm kitchen application"
                        video="/short2.mp4"
                    />
                    <Case
                        image="/canyon.png"
                        alt="example"
                        title="Canyon 336"
                        company="Grady-white"
                        description="Boat collision avoidance"
                        video="/short2.mp4"
                    />
                    <Case
                        image="/unitree.png"
                        alt="example"
                        title="A1"
                        company="Unitree"
                        description="Robot obstacle avoidance"
                        video="/short2.mp4"
                    />
                    <Case
                        image="/drone.png"
                        alt="example"
                        title="Racing Drone"
                        company="3Laws Robotics"
                        description="Racing drone geofencing above 100kph"
                        video="/short2.mp4"
                    />
                </div>
            </PageContentContainer>
        </section>
    );
};

export default CaseStudies;
