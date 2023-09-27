import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import PageContentContainer from "@/components/PageContentContainer";
import Title from "@/components/Title";
import Founder from "@/components/About/Founder";

const founders = [
    {
        role: "Chief Scientist",
        name: "Aaron Ames",
        description:
            "Aaron Ames, Ph.D. is a Caltech professor and world-renowned expert in control theory and bipedal robotics. He founded 3Laws Robotics to bring his advanced mathematical constructs to industry, creating safer and more efficient robots.",
        link: "#",
        image: "/aaron.png",
    },
    {
        role: "CEO",
        name: "Andrew Singletary",
        description:
            "Andrew Singletary, Ph.D. spent his time in academia showcasing power of control theory in the real world. After leading several industry partnerships in these technologies, he now leads the company in bringing these advances into production robotic systems.",
        link: "#",
        image: "/drew.png",
    },
    {
        role: "CTO",
        name: "Thomas Gurriet",
        description:
            "Thomas Gurriet, Ph.D. demonstrated some of the earliest hardware results of guaranteeing safe robot behavior. He is now leveraging his industry experience leading technical development for marine autonomy to lead the 3Laws' engineering efforts.",
        link: "#",
        image: "/tom.png",
    },
];

export default async function About() {
    const client = createClient();
    const page = await client.getSingle("about");

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100vw",
                paddingBottom: "6rem",
            }}
        >
            <Title>Technology Development </Title>
            <PageContentContainer>
                <div
                    className="underlineLinks timeline-container"
                    style={{
                        display: "flex",
                    }}
                >
                    <div
                        className="timeline-line"
                        style={{
                            background: "white",
                            minHeight: "100%",
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <SliceZone
                            slices={page.data.slices}
                            components={components}
                        />
                    </div>
                </div>
            </PageContentContainer>
            <Title>Meet the Visionaries</Title>
            <div
                className="page-padding"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "1rem",
                    alignItems: "stretch",
                    width: "100%",
                    marginTop: "4rem",
                }}
            >
                {founders.map((founder, index) => (
                    <Founder
                        key={index}
                        role={founder.role}
                        name={founder.name}
                        description={founder.description}
                        link={founder.link}
                        image={founder.image}
                    />
                ))}
            </div>
        </div>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();
    const page = await client.getSingle("about");

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
    };
}
