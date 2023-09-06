// import { Metadata } from "next";
// import { SliceZone } from "@prismicio/react";

// import { createClient } from "@/prismicio";
// import { components } from "@/slices";
// import PageContentContainer from "@/components/PageContentContainer";
// import Title from "@/components/Title";
// //

// export default async function About() {
//     const client = createClient();
//     const page = await client.getSingle("about");

//     return (
//         <div
//             style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 width: "100vw",
//             }}
//         >
//         <Title>Technology Development </Title>
//             <PageContentContainer>
//                 <div
//                     className="underlineLinks"
//                     style={{
//                         display: "flex",
//                         marginTop: "160px",
//                         gap: "50px",
//                     }}
//                 >
//                     <div
//                         style={{
//                             minWidth: "4px",
//                             background: "white",
//                             marginLeft: "20rem",
//                             minHeight: "100%",
//                             marginTop: "1.5rem",
//                         }}
//                     />
//                     <div
//                         style={{
//                             display: "flex",
//                             flexDirection: "column",
//                         }}
//                     >
//                         <SliceZone
//                             slices={page.data.slices}
//                             components={components}
//                         />
//                     </div>
//                 </div>
//             </PageContentContainer>
//         </div>
//     );
// }

// export async function generateMetadata(): Promise<Metadata> {
//     const client = createClient();
//     const page = await client.getSingle("about");

//     return {
//         title: page.data.meta_title,
//         description: page.data.meta_description,
//     };
// }



//

export default async function About() {
    

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100vw",
            }}
        />
    );
}

