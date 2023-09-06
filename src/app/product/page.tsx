import Button from "@/components/Button";
import Description from "@/components/Description";
import Title from "@/components/Title";
import Image from "next/image";
import Link from "next/link";

export default async function Product() {
    return (
        <main
            style={{
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    zIndex: -1,
                    top: "3rem",
                }}
            >
                <div
                    style={{
                        width: "100vw",
                        height: "120vh",
                        position: "relative",
                        opacity: 0.3,
                    }}
                >
                    <Image
                        fill
                        src={"/bg1.png"}
                        alt={"ets"}
                        sizes="3000px"
                        priority
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Title>3Laws Safety Supervisor</Title>
                <Description>
                    your complete system for an unparalleled robotic experience
                    (this should explain clearly what the product is)
                </Description>
            </div>
            <div
                style={{
                    display: "flex",
                    paddingTop: "8rem",
                    gap: "20px",
                }}
            >
                <Card
                    title="Real-Time Analytics, Diagnostics"
                    text="Get unique insights into your robot’s operation. View live metrics on resource utilization, performance, and safety adherence. Leverage Supervisor AI to observe otherwise undetectable patterns."
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        {/* <div
                            style={{
                                height: "5rem",
                                width: "5rem",
                                filter: "blur(6px)",
                            }}
                        >
                            <AnaliticsIcon color="#8ff" />
                        </div> */}
                        <div
                            style={{
                                height: "5rem",
                                width: "5rem",
                                position: "absolute",
                            }}
                        >
                            <AnaliticsIcon color="#ddffff" />
                        </div>
                    </div>
                </Card>
                <Card
                    title="Automated Issue Discovery, Root-Cause Analysis"
                    text="Take advantage of AI-generated system identification to proactively detect system performance or safety deterioration. Automatically correlate events for easier root cause analysis."
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        {/* <div
                            style={{
                                height: "5rem",
                                width: "5rem",
                                filter: "blur(6px)",
                            }}
                        >
                            <MagnifyingGlassIcon color="#8ff" />
                        </div> */}
                        <div
                            style={{
                                height: "5rem",
                                width: "5rem",
                                position: "absolute",
                            }}
                        >
                            <MagnifyingGlassIcon color="#ddffff" />
                        </div>
                    </div>
                </Card>
                <Card
                    title="Certifiable Safe, High-Performance Operations"
                    text="Define your safety envelope and enable embedded operational safety. Get maximum performance within your safety requirements. Leverage system ID documentation and our safety-certified stack (pending) to accelerate your certification path."
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        {/* <div
                            style={{
                                height: "5rem",
                                width: "5rem",
                                filter: "blur(6px)",
                            }}
                        >
                            <ShieldIcon color="#8ff" />
                        </div> */}
                        <div
                            style={{
                                height: "5rem",
                                width: "5rem",
                                position: "absolute",
                            }}
                        >
                            <ShieldIcon color="#ddffff" />
                        </div>
                    </div>
                </Card>
            </div>
            <div
                style={{
                    position: "relative",
                    height: 0,
                    width: "100vw",
                    // zIndex: -1,
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        zIndex: -1,
                        top: "12rem",
                    }}
                >
                    <div
                        style={{
                            width: "100vw",
                            height: "100vh",
                            position: "relative",
                            opacity: 0.3,
                        }}
                    >
                        <Image
                            fill
                            src={"/bg2.png"}
                            alt={"ets"}
                            sizes="3000px"
                            priority
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>
            </div>
            <div
                style={{
                    width: "100vw",
                    marginBottom: "6rem",
                    // marginTop: "6rem",
                }}
            >
                {/* <div
                style={{
                    lineHeight: "128%",
                    fontWeight: 500,
                    fontSize: "3.4vw",
                    fontFamily: "korataki",
                    letterSpacing: "0.12em",
                    // textTransform: "uppercase",
                    marginTop: "24rem",
                    marginBottom: "6rem",
                }}
            >
                Features
            </div> */}
                <Title>Features</Title>
            </div>

            <div
                style={{
                    display: "flex",
                    gap: "2rem",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "30rem",
                        background: "#ffffff11",
                        borderRadius: "10px",
                        border: "1px solid #fff4",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        paddingInline: "2vw",
                        paddingBlock: "3rem",
                    }}
                >
                    <div
                        style={{
                            fontSize: "1.6rem",
                            lineHeight: "130%",
                            fontWeight: 300,
                            textTransform: "uppercase",
                            fontFamily: "korataki",
                            letterSpacing: "0.12em",
                            marginBottom: "50px",
                        }}
                    >
                        Development
                    </div>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                        }}
                    >
                        <div
                            style={{
                                borderRadius: "1000px",
                                background: "#5855EB",
                                height: "8px",
                                width: "8px",
                            }}
                        />
                        <p
                            style={{
                                fontSize: "0.9rem",
                                lineHeight: "130%",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                fontFamily: "korataki",
                                letterSpacing: "0.12em",
                            }}
                        >
                            Faster time to market
                        </p>
                    </div>

                    <div
                        style={{
                            fontWeight: 300,
                            fontSize: "0.96rem",
                            color: "#dddddd",
                            marginBottom: "50px",
                            marginTop: "1rem",
                        }}
                    >
                        Get unique insights into your robot’s operation. View
                        live metrics on resource utilization.
                    </div>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                        }}
                    >
                        <div
                            style={{
                                borderRadius: "1000px",
                                background: "#5855EB",
                                height: "8px",
                                width: "8px",
                            }}
                        />
                        <p
                            style={{
                                fontSize: "0.9rem",
                                lineHeight: "130%",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                fontFamily: "korataki",
                                letterSpacing: "0.1em",
                            }}
                        >
                            Root Cause Analysis
                        </p>
                    </div>

    
                    <div
                        style={{
                            fontWeight: 300,
                            fontSize: "0.96rem",
                            color: "#dddddd",
                            marginBottom: "50px",
                            marginTop: "1rem",
                        }}
                    >
                        Get unique insights into your robot’s operation. View
                        live metrics on resource utilization.
                    </div>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                        }}
                    >
                        <div
                            style={{
                                borderRadius: "1000px",
                                background: "#5855EB",
                                height: "8px",
                                width: "8px",
                            }}
                        />
                        <p
                            style={{
                                fontSize: "0.9rem",
                                lineHeight: "130%",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                fontFamily: "korataki",
                                letterSpacing: "0.1em",
                            }}
                        >
                            Real Time Diagnostics
                        </p>
                    </div>

                    <div
                        style={{
                            fontWeight: 300,
                            fontSize: "0.96rem",
                            color: "#dddddd",
                            // marginBottom: "50px",
                            marginTop: "1rem",
                        }}
                    >
                        Get unique insights into your robot’s operation. View
                        live metrics on resource utilization.
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "30rem",
                        background: "#ffffff11",
                        borderRadius: "10px",
                        border: "1px solid #fff4",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        paddingInline: "2vw",
                        paddingBlock: "3rem",
                    }}
                >
                    <div
                        style={{
                            fontSize: "1.6rem",
                            lineHeight: "130%",
                            fontWeight: 300,
                            textTransform: "uppercase",
                            fontFamily: "korataki",
                            letterSpacing: "0.12em",
                            marginBottom: "50px",
                        }}
                    >
                        Operations
                    </div>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                        }}
                    >
                        <div
                            style={{
                                borderRadius: "1000px",
                                background: "#5855EB",
                                height: "8px",
                                width: "8px",
                            }}
                        />
                        <p
                            style={{
                                fontSize: "0.9rem",
                                lineHeight: "130%",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                fontFamily: "korataki",
                                letterSpacing: "0.1em",
                            }}
                        >
                            Faster time to Resolution
                        </p>
                    </div>


                    <div
                        style={{
                            fontWeight: 300,
                            fontSize: "0.96rem",
                            color: "#dddddd",
                            marginBottom: "50px",
                            marginTop: "1rem",
                        }}
                    >
                        Get unique insights into your robot’s operation. View
                        live metrics on resource utilization.
                    </div>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                        }}
                    >
                        <div
                            style={{
                                borderRadius: "1000px",
                                background: "#5855EB",
                                height: "8px",
                                width: "8px",
                            }}
                        />
                        <p
                            style={{
                                fontSize: "0.9rem",
                                lineHeight: "130%",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                fontFamily: "korataki",
                                letterSpacing: "0.1em",
                            }}
                        >
                            Proactive issue Discovery
                        </p>
                    </div>

                    <div
                        style={{
                            fontWeight: 300,
                            fontSize: "0.96rem",
                            color: "#dddddd",
                            marginBottom: "50px",
                            marginTop: "1rem",
                        }}
                    >
                        Get unique insights into your robot’s operation. View
                        live metrics on resource utilization.
                    </div>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                        }}
                    >
                        <div
                            style={{
                                borderRadius: "1000px",
                                background: "#5855EB",
                                height: "8px",
                                width: "8px",
                            }}
                        />
                        <p
                            style={{
                                fontSize: "0.9rem",
                                lineHeight: "130%",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                fontFamily: "korataki",
                                letterSpacing: "0.1em",
                            }}
                        >
                            Real Time Field Visibility
                        </p>
                    </div>

 
                    <div
                        style={{
                            fontWeight: 300,
                            fontSize: "0.96rem",
                            color: "#dddddd",
                            // marginBottom: "50px",
                            marginTop: "1rem",
                        }}
                    >
                        Get unique insights into your robot’s operation. View
                        live metrics on resource utilization.
                    </div>
                </div>
            </div>
            {/* <Title>Why Should you use 3Laws</Title> */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "46rem",
                    paddingTop: "2rem",
                    fontWeight: 300,
                    fontSize: "2.2rem",
                    color: "#ffffff",
                    lineHeight: "150%",
                    gap: "4rem",
                }}
            >
                <div
                    style={{
                        paddingTop: "16rem",
                        fontWeight: 300,
                        fontSize: "0.8rem",
                        color: "#dddddd",
                        fontFamily: "korataki",
                        letterSpacing: "0.12em",
                        // textTransform: 'uppercase',
                    }}
                >
                    Why Should you use 3Laws
                </div>
                <div
                    style={
                        {
                            // marginTop: "1rem",
                        }
                    }
                >
                    Deploying robotic systems in the real world is hard. 3Laws
                    makes it easier.
                </div>

                <div style={{}}>
                    We provide a Supervisor for autonomous and human-operated
                    robotic systems, monitoring and ensuring safety in a way
                    that allows for maximum performance.
                </div>
                <div style={{}}>
                    Our real-time safety analytics and robust collision
                    avoidance software installs quickly and enables faster,
                    safer, and cheaper innovation and lowers time-to-resolution
                    of issues.
                </div>

                <Button
                    href="/case-studies"
                    text="Explore real-life case studies →"
                />
                <div
                    style={{
                        fontWeight: 300,
                        fontSize: "2.2rem",
                        color: "#ffffff",
                        lineHeight: "150%",
                    }}
                >
                    Our technology is provably robust to uncertainty in modeling
                    and perception.
                </div>
                <div
                    style={{
                        fontWeight: 300,
                        fontSize: "2.2rem",
                        color: "#ffffff",
                        lineHeight: "150%",
                    }}
                >
                    Read more below.
                </div>

                <div
                    style={{
                        paddingTop: "16rem",
                        fontWeight: 300,
                        fontSize: "0.8rem",
                        color: "#dddddd",
                        fontFamily: "korataki",
                        letterSpacing: "0.12em",
                        // textTransform: 'uppercase',
                    }}
                >
                    Technology
                </div>
                <div
                    style={
                        {
                            // marginTop: "1rem",
                        }
                    }
                >
                    Born from innovative research at Caltech, the 3Laws Safety
                    Supervisor is a testament to pioneering thought and
                    meticulous engineering. Discover the journey from idea to
                    realization and the science that powers our transformative
                    robotic solutions.
                </div>

                <Button
                    href="/case-studies"
                    text="Explore the origins of the 3Laws tech →"
                />
            </div>
            <div
                style={{
                    height: "200px",
                }}
            />
        </main>
    );
}

interface CardProps {
    children: React.ReactNode;
    title: String;
    text: String;
}

const Card: React.FC<CardProps> = ({ children, title, text }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                width: "23rem",
                paddingInline: "2vw",
                paddingBlock: "2vw",
                // height: "100vw",
                background: "#ffffff11",
                borderRadius: "10px",
                border: "1px solid #fff4",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    // justifyContent: "center",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        height: "8rem",
                        width: "8rem",
                        marginBottom: "0px",
                        marginTop: "40px",
                    }}
                >
                    {children}
                </div>
            </div>
            <div
                style={{
                    fontSize: "1.2rem",
                    lineHeight: "128%",
                    fontWeight: 600,
                    fontFamily: "korataki",
                    letterSpacing: "0.1em",
                }}
            >
                {title}
            </div>
            <div
                style={{
                    fontWeight: 300,
                    fontSize: "0.96rem",
                    color: "#dddddd",
                }}
            >
                {text}
            </div>
        </div>
    );
};

interface SvgProps {
    color?: string;
}

const AnaliticsIcon: React.FC<SvgProps> = ({ color = "black" }) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            fill={color}
            d="M4.75,20.75A.25.25,0,0,0,5,20.5v-2a1,1,0,0,0-1-1H2a1,1,0,0,0-1,1v2a.25.25,0,0,0,.25.25Z"
        />
        <path
            fill={color}
            d="M10.75,20.75A.25.25,0,0,0,11,20.5v-7a1,1,0,0,0-1-1H8a1,1,0,0,0-1,1v7a.25.25,0,0,0,.25.25Z"
        />
        <path
            fill={color}
            d="M16.75,20.75A.25.25,0,0,0,17,20.5v-5a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1v5a.25.25,0,0,0,.25.25Z"
        />
        <path
            fill={color}
            d="M22.75,20.75A.25.25,0,0,0,23,20.5V8.5a1,1,0,0,0-1-1H20a1,1,0,0,0-1,1v12a.25.25,0,0,0,.25.25Z"
        />
        <path
            fill={color}
            d="M3.5,13.5a2,2,0,0,0,2-2,1.981,1.981,0,0,0-.1-.6l3.167-2.64A1.955,1.955,0,0,0,11.011,7.8l2.5.834A2,2,0,0,0,17.5,8.5a1.964,1.964,0,0,0-.231-.912l3.287-3.835A1.994,1.994,0,1,0,19.5,2a1.962,1.962,0,0,0,.093.571L16.13,6.612a1.932,1.932,0,0,0-2.141.593l-2.5-.833A1.995,1.995,0,1,0,7.6,7.1L4.436,9.744A1.975,1.975,0,0,0,3.5,9.5a2,2,0,0,0,0,4Z"
        />
        <path
            fill={color}
            d="M23,22H1a1.016,1.016,0,0,0-1,1,1,1,0,0,0,1,1H23a1,1,0,0,0,1-1A1.015,1.015,0,0,0,23,22Z"
        />
    </svg>
);

const MagnifyingGlassIcon: React.FC<SvgProps> = ({ color = "black" }) => (
    <svg viewBox="0 0 516 516" xmlns="http://www.w3.org/2000/svg">
        <path
            fill={color}
            d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
        />
    </svg>
);

const ShieldIcon: React.FC<SvgProps> = ({ color = "black" }) => (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
            fill={color}
            d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
        />
    </svg>
);
