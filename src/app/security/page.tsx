import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import PageContentContainer from "@/components/PageContentContainer";

export default async function Security() {
    const client = createClient();
    const page = await client.getSingle("security");

    function convertDateFormat(dateStr: string | null): string {
        if (!dateStr) return "Unknown Date";
    
        const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const parts: string[] = dateStr.split('-');
        const year: string = parts[0];
        const month: string = months[parseInt(parts[1], 10) - 1];
        const day: number = parseInt(parts[2], 10);
    
        return `${month} ${day}, ${year}`;
    }

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
            <p style={{
                fontSize: '1rem',
                fontWeight: 700,
                marginBottom: '4rem',
            }}>Last Updated: {convertDateFormat(page.data.last_updated)}</p>
                <SliceZone slices={page.data.slices} components={components} /></div>
            </PageContentContainer>
        </div>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();
    const page = await client.getSingle("security");

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
    };
}
