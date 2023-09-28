import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import PageContentContainer from "@/components/PageContentContainer";

export default async function Page() {
    const client = createClient();
    const page = await client.getSingle("privacy");
    

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100vw",
                paddingBottom: "6rem",
            }}
        >
            <PageContentContainer>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                paddingBlock: '8rem',
                paddingBottom: '2rem',
            }}>

        <h1 style={{
            fontSize: '3rem',
            fontWeight: 700,
            lineHeight: '120%',
            marginBottom: '2rem',
        }}>{page.data.title}</h1>
            <SliceZone slices={page.data.slices} components={components} /></div>
        </PageContentContainer>
        </div>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();
    const page = await client.getSingle("privacy");

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
    };
}
