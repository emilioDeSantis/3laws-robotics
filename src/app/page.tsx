// "use client"
import Button from "@/components/Button";
import ScrollTo from "@/components/Home/ScrollTo";
import ScrollToButton from "@/components/Home/ScrollToButton";
import ScrollTriggeredText from "@/components/Home/ScrollTriggeredText";
import Section from "@/components/Home/Section";
import ScrollingVideoComponent from "@/components/Home/ScrollingVideoComponent";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { useScrollProgress } from "@/hooks/useScrollProgess";
import Link from "next/link";
import React, { use, useEffect, useRef, useState } from "react";

import { Metadata } from "next";
import { createClient } from "@/prismicio";



// export const metadata: Metadata = {
//   openGraph: {
//     title: '3Lawsrobotics.com',
//     description: 'The React Framework for the Web',
//     url: 'https://3laws-robotics.vercel.app/',
//     siteName: '3Lawsrobotics.com',
//     images: [
//       {
//         url: 'https://3laws-robotics.vercel.app/og.png',
//         width: 800,
//         height: 600,
//       },
//       {
//         url: 'https://3laws-robotics.vercel.app/og-alt.png',
//         width: 1800,
//         height: 1600,
//         alt: 'My custom alt',
//       },
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
// };


export const fetchCache = "force-no-store";

export default async function HomePage() {
    const client = createClient();
    const page = await client.getSingle("home");
    const { data } = page;
    // console.log("test", data);

    return (
        <ScrollingVideoComponent data={data}/>

        // </ScrollingVideoComponent>
    );
}


            //  <div
            //     className="homepage-container"
            //     style={{
            //         color: "white",
            //     }}
            // >
            //     <ScrollTriggeredText
            //         text={data.animation_captions[0]?.collision || ""}
            //         color="#fa8"
            //         marginLeft="60vw"
            //         marginTop="20vw"
            //         className="collision"
            //         startScroll={3}
            //         endScroll={4.2}
            //     />
            //     <ScrollTriggeredText
            //         text={data.animation_captions[0]?.down_time || ""}
            //         color="#fd8"
            //         marginLeft="16vw"
            //         marginTop="18vw"
            //         className="down-time"
            //         startScroll={5.05}
            //         endScroll={7.0}
            //     />
            //     <ScrollTriggeredText
            //         text={data.animation_captions[0]?.activating || ""}
            //         color="#6ff"
            //         className="activating"
            //         marginLeft="48vw"
            //         marginTop="16vw"
            //         startScroll={8.375}
            //         endScroll={10.1}
            //     />
            //     <ScrollTriggeredText
            //         text={data.animation_captions[0]?.activated || ""}
            //         color="#C1FFFF"
            //         className="activating"
            //         marginLeft="48vw"
            //         marginTop="16vw"
            //         startScroll={10.42}
            //         endScroll={11.2}
            //     />
            //     <ScrollTriggeredText
            //         text={data.animation_captions[0]?.obstacle_avoided || ""}
            //         color="#C1FFFF"
            //         className="obstacle-avoided"
            //         marginLeft="58vw"
            //         marginTop="16vw"
            //         startScroll={13.6}
            //         endScroll={15.3}
            //     />

            //     <div
            //         className="page-padding"
            //         style={{
            //             position: "absolute",
            //             display: "flex",
            //             flexDirection: "column",
            //             width: "100vw",
            //         }}
            //     >
            //         <div
            //             className="hero-subtitle"
            //             style={{
            //                 fontWeight: 200,
            //                 letterSpacing: "0.08em",
            //                 fontFamily: "korataki",
            //             }}
            //         >
            //             {`Introducing the 3 Laws'`}
            //         </div>
            //         <h1
            //             className="hero-title"
            //             style={{
            //                 fontWeight: 500,
            //                 fontFamily: "korataki",
            //                 letterSpacing: "0.12em",
            //             }}
            //         >
            //             A.I. Robotics Safety Supervisor
            //         </h1>
            //     </div>

            //     <ScrollToButton
            //         nextSection={
            //             data.scroll_to_next_section_buttons[0]
            //                 ?.explore_beyond || ""
            //         }
            //         duration={1800}
            //         className="Uncover-Deeper-Insights"
            //     />
            //     <Section
            //         right={false}
            //         marginTop={"1520vw"}
            //         className="metrics"
            //         title={data.metrics_card[0]?.title || ""}
            //         text={data.metrics_card[0]?.text || ""}
            //         linkText={data.metrics_card[0]?.link_text || ""}
            //         href={data.metrics_card[0]?.link_href || ""}
            //     />
            //     <ScrollToButton
            //         nextSection={
            //             data.scroll_to_next_section_buttons[0]
            //                 ?.uncover_deeper_insights || ""
            //         }
            //         duration={6000}
            //         className="Continue"
            //     />
            //     <Section
            //         right={true}
            //         marginTop={"1130vw"}
            //         className="diagnostic-tools"
            //         title={data.dynamic_environment_card[0]?.title || ""}
            //         text={data.dynamic_environment_card[0]?.text || ""}
            //         linkText={data.dynamic_environment_card[0]?.link_text || ""}
            //         href={data.dynamic_environment_card[0]?.link_href || ""}
            //     />
            //     <ScrollToButton
            //         nextSection={
            //             data.scroll_to_next_section_buttons[0]?.continue || ""
            //         }
            //         duration={2000}
            //         className="Reenter-Dynamic-Environment"
            //     />
            //     <ScrollToButton
            //         nextSection={
            //             data.scroll_to_next_section_buttons[0]
            //                 ?.reenter_dynamic_environment || ""
            //         }
            //         duration={3300}
            //         className="Activate-Safety-Supervisor"
            //     />
            //     <ScrollToButton
            //         nextSection={
            //             data.scroll_to_next_section_buttons[0]
            //                 ?.activate_safety_supervisor || ""
            //         }
            //         duration={2700}
            //         className="Face-the-Repercussions"
            //     />
            //     <Section
            //         right={false}
            //         marginTop={"590vw"}
            //         className="safety-supervisor"
            //         title={
            //             data.introducing_safety_supervisor_card[0]?.title || ""
            //         }
            //         text={
            //             data.introducing_safety_supervisor_card[0]?.text || ""
            //         }
            //         linkText={
            //             data.introducing_safety_supervisor_card[0]?.link_text ||
            //             ""
            //         }
            //         href={
            //             data.introducing_safety_supervisor_card[0]?.link_href ||
            //             ""
            //         }
            //     />
            //     <ScrollToButton
            //         nextSection={
            //             data.scroll_to_next_section_buttons[0]
            //                 ?.face_the_repercussions || ""
            //         }
            //         duration={2500}
            //         className="Witness-the-Impact"
            //     />
            //     <Section
            //         right={true}
            //         marginTop={"355vw"}
            //         className="collisions"
            //         title={data.collision_card[0]?.title || ""}
            //         text={data.collision_card[0]?.text || ""}
            //         linkText={data.collision_card[0]?.link_text || ""}
            //         href={data.collision_card[0]?.link_href || ""}
            //     />
            //     <ScrollToButton
            //         nextSection={
            //             data.scroll_to_next_section_buttons[0]
            //                 ?.witness_the_impact || ""
            //         }
            //         duration={1600}
            //         className="Enter-Dynamic-Environment"
            //     />
            //     <ScrollToButton
            //         nextSection={
            //             data.scroll_to_next_section_buttons[0]
            //                 ?.enter_dynamic_environment || ""
            //         }
            //         duration={2000}
            //         className="Scroll-or-Click-to-Explore"
            //     />
            //     <Section
            //         right={false}
            //         marginTop={"110vw"}
            //         className="dynamic-environment"
            //         title={data.more_info_about_supervisor_card[0]?.title || ""}
            //         text={data.more_info_about_supervisor_card[0]?.text || ""}
            //         linkText={
            //             data.more_info_about_supervisor_card[0]?.link_text || ""
            //         }
            //         href={
            //             data.more_info_about_supervisor_card[0]?.link_href || ""
            //         }
            //     />
            //     <ScrollToButton
            //         nextSection={
            //             data.scroll_to_next_section_buttons[0]
            //                 ?.scroll_or_click_to_explore || ""
            //         }
            //         className="start"
            //         duration={1500}
            //     />

            //     <ScrollTo
            //         className="Scroll-or-Click-to-Explore"
            //         name={
            //             data.scroll_to_next_section_buttons[0]
            //                 ?.scroll_or_click_to_explore ||
            //             "Scroll or Click to Explore"
            //         }
            //     />
            //     <ScrollTo
            //         className="Enter-Dynamic-Environment"
            //         name={
            //             data.scroll_to_next_section_buttons[0]
            //                 ?.enter_dynamic_environment ||
            //             "Enter Dynamic Environment"
            //         }
            //     />
            //     <ScrollTo
            //         className="Witness-the-Impact"
            //         name={
            //             data.scroll_to_next_section_buttons[0]
            //                 ?.witness_the_impact || "Witness the Impact"
            //         }
            //     />
            //     <ScrollTo
            //         className="Face-the-Repercussions"
            //         name={
            //             data.scroll_to_next_section_buttons[0]
            //                 ?.face_the_repercussions || "Face the Repercussions"
            //         }
            //     />
            //     <ScrollTo
            //         className="Activate-Safety-Supervisor"
            //         name={
            //             data.scroll_to_next_section_buttons[0]
            //                 ?.activate_safety_supervisor ||
            //             "Activate Safety Supervisor"
            //         }
            //     />
            //     <ScrollTo
            //         className="Reenter-Dynamic-Environment"
            //         name={
            //             data.scroll_to_next_section_buttons[0]
            //                 ?.reenter_dynamic_environment ||
            //             "Reenter Dynamic Environment"
            //         }
            //     />
            //     <ScrollTo
            //         className="Continue"
            //         name={
            //             data.scroll_to_next_section_buttons[0]?.continue ||
            //             "Continue"
            //         }
            //     />
            //     <ScrollTo
            //         className="Uncover-Deeper-Insights"
            //         name={
            //             data.scroll_to_next_section_buttons[0]
            //                 ?.uncover_deeper_insights ||
            //             "Uncover Deeper Insights"
            //         }
            //     />
            //     <ScrollTo
            //         className="Explore-Beyond"
            //         name={
            //             data.scroll_to_next_section_buttons[0]
            //                 ?.explore_beyond || "Explore Beyond"
            //         }
            //     />
            // </div>

            // <div
            //     className="homepage-bottom-container page-padding"
            //     style={{
            //         display: "flex",
            //         flexDirection: "column",
            //         alignItems: "center",
            //         width: "100vw",
            //         background: "#1111",
            //         // position: "absolute",
            //         zIndex: 102,
            //         backdropFilter: "blur(10px)",
            //         WebkitBackdropFilter: "blur(10px)",
            //     }}
            // >
            //     <div
            //         className="big-text page-previews-container"
            //         style={{
            //             display: "flex",
            //             flexDirection: "column",
            //         }}
            //     >
            //         <div
            //             style={{
            //                 fontSize: "2rem",
            //                 paddingTop: "8rem",
            //                 fontWeight: 300,
            //                 color: "#dddddd",
            //                 fontFamily: "korataki",
            //                 letterSpacing: "0.12em",
            //                 // textTransform: 'uppercase',
            //             }}
            //         >
            //             Technology
            //         </div>
            //         <div>
            //             {`The 3Laws Safety Supervisor stands as a beacon of
            //             advanced robotic safety. Beyond just technology, it's a
            //             product designed to revolutionize robotic operations,
            //             merging safety with peak performance.`}
            //         </div>

            //         <Button
            //             href="/product"
            //             text="Learn more about the Safety Supervisor →"
            //         />
            //         <div
            //             style={{
            //                 fontSize: "2rem",
            //                 paddingTop: "8rem",
            //                 fontWeight: 300,
            //                 color: "#dddddd",
            //                 fontFamily: "korataki",
            //                 letterSpacing: "0.12em",
            //                 // textTransform: 'uppercase',
            //             }}
            //         >
            //             Case Studies
            //         </div>
            //         <div
            //             style={
            //                 {
            //                     // marginTop: "1rem",
            //                 }
            //             }
            //         >
            //             See the 3Laws Safety Supervisor in real-world scenarios.
            //             From factories to autonomous vehicles, our case studies
            //             spotlight the tangible benefits of our groundbreaking
            //             product.
            //         </div>

            //         <Button
            //             href="/case-studies"
            //             text="See our tech in action →"
            //         />
            //     </div>
            // </div>

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();
    const page = await client.getSingle("home");

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
    };
}
