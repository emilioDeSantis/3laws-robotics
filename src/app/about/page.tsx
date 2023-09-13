import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import PageContentContainer from "@/components/PageContentContainer";
import Title from "@/components/Title";


export default async function About() {
    const client = createClient();
    const page = await client.getSingle("about");

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100vw",
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



