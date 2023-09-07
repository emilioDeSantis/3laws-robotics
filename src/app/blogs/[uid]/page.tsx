import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import dateDifference from "@/functions/dateDifference";

type Params = { uid: string };

export const dynamicParams = false;

export default async function Page({ params }: { params: Params }) {
    // const client = createClient();
    // const page = await client
    //     .getByUID("blog_post", params.uid)
    //     .catch(() => notFound());

        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100vw",
                }}
            />
        );

    // return (
    //     <main
    //     className="underlineLinks"
    //         style={{
    //             background: "#111111",
    //             display: "flex",
    //             justifyContent: 'center',
    //         }}
    //     >
    //         <div
    //             style={{
    //                 width: "50rem",
    //                 display: "flex",
    //                 marginTop: '5rem',
    //                 flexDirection: 'column',
    //                 gap: '2rem',
    //                 lineHeight: '200%',
    //                 fontWeight: 300,
    //                 fontSize: '0.96rem',
    //                 color: "#dddddd",
    //             }}
    //         >
    //             <div
    //                 style={{
    //                     display: "flex",
    //                     flexDirection: "row",
    //                     fontWeight: 200,
    //                     gap: '0.5rem',
    //                     fontSize: '0.8rem',
    //                     color: "#cccccc",
    //                 }}
    //             >
    //             <div style={{}}>{page.data.author}</div>
    //                 <div>•</div>
    //                 <>
    //                     {page.data.publish_date
    //                         ? dateDifference(page.data.publish_date)
    //                         : "Invalid Date"}
    //                 </>
    //                 <div>•</div>
    //                 <>
    //                     {page.data.read_time == 1
    //                         ? "1 min"
    //                         : page.data.read_time + " mins"}
    //                 </>
    //             </div>
    //             <div  style={{
    //                 fontSize: '2.6rem',
    //                 fontWeight: 900,
    //                 lineHeight: '130%',
    //                 color: "#ffffff",
    //                 marginBottom: '3rem',
    //             }}>{page.data.title}</div>
    //             <SliceZone slices={page.data.slices} components={components} />
    //         </div>
    //     </main>
    // );
}

// export async function generateMetadata({
//     params,
// }: {
//     params: Params;
// }): Promise<Metadata> {
//     const client = createClient();
//     const page = await client.getByUID("blog_post", params.uid);

//     return {
//         title: page.data.meta_title,
//         description: page.data.meta_description,
//     };
// }

// export async function generateStaticParams() {
//     const client = createClient();
//     const pages = await client.getAllByType("blog_post");

//     return pages.map((page) => {
//         return { uid: page.uid };
//     });
// }

