import { createClient } from "@/prismicio";
import Image from "next/image";
import dateDifference from "../../functions/dateDifference";
import Link from "next/link";
import PageContentContainer from "@/components/PageContentContainer";
import Title from "@/components/Title";
import Description from "@/components/Description";

export default async function Blogs() {
    const client = createClient();

    const pages = await client.getAllByType("blog_post", {
        limit: 3
    });
    // const pages = await client.getByUID("blog_post", 'culture')

    // return (
    //     <div
    //         style={{
    //             display: "flex",
    //             flexDirection: "column",
    //             width: "100vw",
    //         }}
    //     />
    // );

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100vw",
            }}
        >
        <Title>Industry Insights</Title>
            <PageContentContainer>
                <Description>
                    This guide by 3Laws Robotics covers essential robotic safety
                    standards. Understand key methods for reliable system
                    operation.
                </Description>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "32px",
                        paddingTop: "80px",
                    }}
                >
                    {pages.map((blog, index) => (
                        <Link
                            key={index}
                            href={
                                blog.data.route_name
                                    ? "/blogs/" + blog.data.route_name
                                    : ""
                            }
                            style={{
                                background: "#333333",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    height: "18rem",
                                    position: "relative",
                                }}
                            >
                                <Image
                                    fill
                                    src={
                                        blog.data?.preview_image?.url ?? "fail"
                                    }
                                    alt={blog.data?.preview_image?.alt ?? "alt"}
                                    sizes="40vw"
                                    priority
                                    style={{
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    paddingInline: "24px",
                                    paddingTop: "30px",
                                    paddingBottom: "50px",
                                    gap: "16px",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        fontWeight: 200,
                                        gap: "0.5rem",
                                        fontSize: "0.8rem",
                                        color: "#cccccc",
                                    }}
                                >
                                    <div style={{ textDecoration: "none" }}>
                                        {blog.data.author}
                                    </div>
                                    <div>•</div>
                                    <>
                                        {blog.data.publish_date
                                            ? dateDifference(
                                                  blog.data.publish_date
                                              )
                                            : "Invalid Date"}
                                    </>
                                    <div>•</div>
                                    <>
                                        {blog.data.read_time == 1
                                            ? "1 min"
                                            : blog.data.read_time + " mins"}
                                    </>
                                </div>
                                <div
                                    style={{
                                        fontSize: "1.5rem",
                                        color: "#ffffff",
                                        fontWeight: 700,
                                        lineHeight: "130%",
                                    }}
                                >
                                    {blog.data.title}
                                </div>
                                <div
                                    style={{
                                        fontWeight: 300,
                                        fontSize: "0.96rem",
                                    }}
                                >
                                    {blog.data.summary}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </PageContentContainer>
        </div>
    );
}

