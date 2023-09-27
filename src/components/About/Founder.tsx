import Image from "next/image";

interface FounderProps {
    role: string;
    name: string;
    description: string;
    link: string;
    image: string;
}

const Founder: React.FC<FounderProps> = ({
    role,
    name,
    description,
    link,
    image,
}) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                gap: "2rem",
                maxWidth: "24rem",
                background: "#ffffff11",
                paddingInline: "1rem",
                paddingBlock: "1.6rem",
                borderRadius: "10px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    height: "15rem",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        aspectRatio: 1,
                        position: "relative",
                    }}
                >
                    <Image
                        fill
                        src={image}
                        alt={image}
                        sizes="100vw"
                        priority
                        style={{
                            borderRadius: "50%",
                            objectFit: "cover",
                        }}
                    />
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                }}
            >
                <h2
                    style={{
                        fontWeight: 300,
                        fontSize: "0.9rem",
                        opacity: 0.6,
                    }}
                >
                    {role}
                </h2>
                <h3
                    style={{
                        fontFamily: "korataki",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontWeight: 600,
                        fontSize: "1.2rem",
                    }}
                >
                    {name}
                </h3>
            </div>
            <p
                style={{
                    fontSize: "0.96rem",
                    fontWeight: 300,
                    lineHeight: "160%",
                    opacity: 0.7,
                }}
            >
                {description}
            </p>
        </div>
    );
};

export default Founder;
