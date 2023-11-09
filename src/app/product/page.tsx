import BoldParagraph from "@/components/BoldParagraph";
import Button from "@/components/Button";
import Description from "@/components/Description";
import Divider from "@/components/Divider";
import GradientArrow from "@/components/GradientArrow";
import Paragraph from "@/components/Paragraph";
import Subtitle from "@/components/Subtitle";
import SuiteTitle from "@/components/SuiteTitle";
import Title from "@/components/Title";
import { createClient } from "@/prismicio";
import {
    ClockIcon,
    GlobeAltIcon,
    ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const fetchCache = "force-no-store";


export default async function Product() {

    const features = [
        {
            title: "Size",
            description:
                "Whether you're a large manufacturer or a budding tech startup, the Supervisor Suite is tailored to fit.",
        },
        {
            title: "Application",
            description:
                "From ventures into autonomous boats to pioneering human-robot collaboration, our solution is versatile enough to support your innovation.",
        },
        {
            title: "Adaptability",
            description:
                "Built for scalability, the Supervisor Suite seamlessly adapts to your growing needs.",
        },
        {
            title: "Community",
            description:
                "Join a league of forward-thinking companies redefining the horizons of robotic safety with the Supervisor Suite.",
        },
    ];

    const cards = [
        {
            title: "Universal Compatibility",
            description: "Tailored for any robotic system",
            icon: <GlobeAltIcon color="#88C6FF" />,
        },
        {
            title: "Fast Development",
            description: "Seamless integration and swift setup",
            icon: <ClockIcon color="#8CFFF1" />,
        },
        {
            title: "Robust Safety",
            description:
                "Prepared for the unpredictable, ensuring utmost safety",
            icon: <ShieldCheckIcon color="#83FFA6" />,
        },
    ];

    return (
        <main
            style={{
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                paddingTop: "10rem",
            }}
        >
            <div
                className="page-padding"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        width: "0.5em", // or adjust based on your desired circle size
                        height: "0.5em",
                        borderRadius: "50%",
                        border: "2px solid #FFFFFF99", // adjust the color and width of the stroke as needed
                        marginRight: "0.4em",
                    }}
                ></div>
                <span
                    style={{
                        fontSize: "1.2rem",
                        fontWeight: 500,
                        lineHeight: "105%",
                        color: "#FFFFFF99",
                    }}
                >
                    3Laws Supervisor Suite
                </span>
            </div>
            <h2
                className="page-padding"
                style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "100%",
                }}
            >
                <span
                    className="product-title"
                    style={{
                        fontWeight: 800,
                        lineHeight: "105%",
                        width: "56rem",
                        marginTop: "3rem",
                    }}
                >
                    Revolutionizing Robotic Safety for an Unpredictable World.
                </span>
            </h2>
            <div
                className="page-padding"
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "100%",
                }}
            >
                <span
                    style={{
                        fontSize: "1.6rem",
                        fontWeight: 500,
                        color: "#FFFFFF99",
                        lineHeight: "170%",
                        width: "44rem",
                        marginTop: "5rem",
                    }}
                >
                    {`As robots move from the confines of factories into our everyday world, a universal safety solution becomes essential. The Supervisor Suite offers a consistent safety protocol for any challenge in any setting.`}
                </span>
            </div>
            <Divider />
            <Subtitle>What is the Supervisor Suite?</Subtitle>
            <Paragraph>
                {`The Supervisor Suite is an advanced software solution positioned
                between a robot's controls and hardware. It ensures operator
                signals are safe, and if not, adjusts them to maintain safety
                while closely adhering to the intended task.`}
            </Paragraph>
            <div
                className="page-padding"
                style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    height: "30vw",
                    gap: "2vw",
                    fontFamily: "korataki",
                    letterSpacing: "0.05em",
                    lineHeight: "130%",
                    marginTop: "2rem",
                }}
            >
                <div
                    style={{
                        flex: "4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        height: "100%",
                    }}
                >
                    <Image
                        src="/cpu.png"
                        fill
                        alt="cpu chip"
                        style={{
                            objectFit: "contain",
                            mixBlendMode: "lighten",
                        }}
                    />
                    <span
                        style={{
                            position: "absolute",
                            bottom: "2vw",
                            color: "#BFE0FF",
                            fontSize: "clamp(0.5rem, 1.2vw, 1rem)",
                        }}
                    >
                        Controls
                    </span>
                </div>

                <div
                    style={{
                        height: "100%",
                        flex: "3.6",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-between",
                        position: "relative",
                    }}
                >
                    <GradientArrow color="#D6BEAD" />
                    <span
                        style={{
                            color: "#DAC4B4",
                            fontWeight: 600,
                            position: "absolute",
                            bottom: "6vw",
                            whiteSpace: "nowrap",
                            fontSize: "clamp(0.5rem, 1.6vw, 1.3rem)",
                        }}
                    >
                        Planning signals
                    </span>
                </div>

                <div
                    style={{
                        flex: "5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        height: "100%",
                    }}
                >
                    <Image
                        src="/3laws shield.png"
                        fill
                        alt="shield"
                        style={{
                            objectFit: "contain",
                            mixBlendMode: "lighten",
                        }}
                    />
                    <span
                        style={{
                            color: "#CDF7FF",
                            fontWeight: 700,
                            position: "absolute",
                            fontSize: "clamp(0.55rem, 1.7vw, 1.4rem)",
                            lineHeight: "130%",
                            textAlign: "center",
                        }}
                    >
                        Supervisor Software
                    </span>
                </div>

                <div
                    style={{
                        height: "100%",
                        flex: "3.6",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-between",
                        position: "relative",
                    }}
                >
                    <GradientArrow color="#7AE6FF" />
                    <span
                        style={{
                            color: "#8BEAFF",
                            marginTop: "1vw",
                            position: "absolute",
                            bottom: "6vw",
                            whiteSpace: "nowrap",
                            fontWeight: 600,
                            fontSize: "clamp(0.5rem, 1.6vw, 1.3rem)",
                        }}
                    >
                        ✓ Safe signals
                    </span>
                </div>

                <div
                    style={{
                        flex: "4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        height: "100%",
                    }}
                >
                    <Image
                        src="/gear.png"
                        fill
                        alt="gear"
                        style={{
                            objectFit: "contain",
                            mixBlendMode: "lighten",
                        }}
                    />
                    <span
                        style={{
                            color: "#E5BEFF",
                            position: "absolute",
                            bottom: "2vw",
                            fontSize: "clamp(0.5rem, 1.2vw, 1rem)",
                        }}
                    >
                        Hardware
                    </span>
                </div>
            </div>
            <Divider />
            <Subtitle>What is the Suite Comprised of?</Subtitle>
            <div
                className="page-padding"
                style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "100%",
                }}
            >
                <span
                    style={{
                        fontSize: "1.6rem",
                        fontWeight: 500,
                        color: "#FFFFFF99",
                        lineHeight: "170%",
                        width: "38rem",
                        marginTop: "3.2rem",
                    }}
                >
                    The Supervisor Suite is made up of a trio of specialized
                    tools, each designed to optimize and safeguard your robotic
                    operations: the{" "}
                    <b
                        style={{
                            color: "#ffffff",
                        }}
                    >
                        Monitor
                    </b>
                    , the{" "}
                    <b
                        style={{
                            color: "#ffffff",
                        }}
                    >
                        Modeler
                    </b>
                    , and the{" "}
                    <b
                        style={{
                            color: "#ffffff",
                        }}
                    >
                        Copilot
                    </b>
                    .
                </span>
            </div>
            <Divider />
            <SuiteTitle>Monitor</SuiteTitle>
            <BoldParagraph>
                Provides deep insights into performance, reliability, and
                safety.
            </BoldParagraph>


            <video
            controls
            poster={'/Monitorthumbnail.png'}
                style={{
                    display: "block",
                    objectFit: "cover",
                    background: '#fff1',
                    width: "clamp(64vw,768px,96vw)",
                    height: "auto",
                    marginBlock: "5rem",
                }}
                src={'Monitor.mp4'}
            />
            {/* <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    width: "clamp(64vw,768px,96vw)",
                    height: "clamp(40vw,480px, 60vw)",
                    marginBlock: "5rem",
                }}
            >
                <Image
                    src="/monitor dashboard 1.png"
                    fill
                    alt="monitor dashboard"
                    style={{
                        objectFit: "cover",
                        mixBlendMode: "lighten",
                        borderRadius: "2vw",
                        boxShadow: "0 4px 40px rgba(10, 10, 11, 1)",
                    }}
                />
            </div> */}
            {/* <BoldParagraph>
                {`Understand what’s happening on your system, and decrease
                time-to-resolution of subsystem failures.`}
            </BoldParagraph>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    width: "clamp(64vw,768px,96vw)",
                    height: "clamp(40vw,480px, 60vw)",
                    marginBlock: "5rem",
                }}
            >
                <Image
                    src="/monitor dashboard 2.png"
                    fill
                    alt="monitor dashboard robot overview"
                    style={{
                        objectFit: "cover",
                        mixBlendMode: "lighten",
                        borderRadius: "2vw",
                        boxShadow: "0 4px 40px rgba(10, 10, 11, 1)",
                    }}
                />
            </div> */}
            <Divider />
            <SuiteTitle>Modeler</SuiteTitle>
            <BoldParagraph>
                Generates data-driven dynamics and environmental models of your
                systems.
            </BoldParagraph>
            {/* <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "clamp(4rem,16vw,5rem)",
                    marginBottom: "clamp(0rem,5vw,3rem)",
                    gap: '5vw',
                    flexWrap: 'wrap',
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: "clamp(40vw,360px,96vw)",
                        height: "clamp(20vw,180px, 48vw)",
                    }}
                >
                    <Image
                        src="/modeler diagram 1.png"
                        fill
                        alt="modeler diagram"
                        style={{
                            objectFit: "cover",
                            mixBlendMode: "lighten",
                            borderRadius: "2vw",
                            boxShadow: "0 4px 40px rgba(10, 10, 11, 1)",
                        }}
                    />
                </div>
                <div
                    style={{
                        position: "relative",
                        width: "clamp(40vw,360px,96vw)",
                        height: "clamp(20vw,180px, 48vw)",
                    }}
                >
                    <Image
                        src="/modeler diagram 2.png"
                        fill
                        alt="modeler diagram"
                        style={{
                            objectFit: "cover",
                            mixBlendMode: "lighten",
                            borderRadius: "2vw",
                            boxShadow: "0 4px 40px rgba(10, 10, 11, 1)",
                        }}
                    />
                </div>
            </div> */}
                        <video
            controls
            poster={'/Modelerthumbnail.png'}
                style={{
                    display: "block",
                    objectFit: "cover",
                    background: '#fff1',
                    width: "clamp(64vw,768px,96vw)",
                    height: "auto",
                    marginBlock: "5rem",
                }}
                src={'Modeler.mp4'}
            />
            <Divider />
            <SuiteTitle>Copilot</SuiteTitle>
            <BoldParagraph>
                Ensures constraints are always satisfied, resulting in smooth
                operations.
            </BoldParagraph>

            <video
            controls
            poster={'/Copilot thumbnail.png'}
                style={{
                    display: "block",
                    objectFit: "cover",
                    background: '#fff1',
                    width: "clamp(64vw,768px,96vw)",
                    height: "auto",
                    marginBlock: "5rem",
                }}
                src={'Copilot.mp4'}
            />
            <Divider />
            <Subtitle>Who Uses the Supervisor Suite?</Subtitle>
            <div
                className="page-padding"
                style={{
                    width: "100%",
                    marginTop: "1rem",
                }}
            >
                {features.map((feature, index) => (
                    <div key={index}>
                        <h2
                            style={{
                                fontWeight: 600,
                                fontSize: "1.5rem",
                                marginTop: "2rem",
                            }}
                        >
                            {feature.title}
                        </h2>
                        <p
                            style={{
                                fontSize: "1.2rem",
                                fontWeight: 400,
                                color: "#FFFFFF99",
                                lineHeight: "170%",
                                maxWidth: "48rem",
                                marginTop: "0.6rem",
                            }}
                        >
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
            <Divider />
            <div
                style={{
                    background: "#0A0A0A",
                    width: "100%",
                }}
            >
                <Subtitle>Why Chose the Supervisor Suite?</Subtitle>
                <div
                    className="page-padding"
                    style={{
                        display: "flex",
                        gap: "1.4rem",
                        marginTop: "clamp(4rem,10vw,8rem)",
                        marginBottom: "clamp(4rem,7vw,4rem)",
                        flexWrap: "wrap",
                    }}
                >
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            style={{
                                flex: 1,
                                borderRadius: "1.2rem",
                                padding: "2rem",
                                boxSizing: "border-box",
                                textAlign: "center",
                                background: "#151516",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                minWidth: "22rem",
                            }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <div
                                    style={{
                                        width: "4rem",
                                    }}
                                >
                                    {card.icon}
                                </div>
                            </div>
                            <h2
                                style={{
                                    fontWeight: 700,
                                    fontSize: "1.6rem",
                                    marginTop: "1rem",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {card.title}
                            </h2>
                            <p
                                style={{
                                    fontWeight: 500,
                                    opacity: 0.6,
                                    lineHeight: "170%",
                                    width: "15rem",
                                    marginTop: "0.4rem",
                                }}
                            >
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();
    const page = await client.getSingle("product");
  
    return {
      title: page.data.meta_title,
      description: page.data.meta_description,
    };
  }