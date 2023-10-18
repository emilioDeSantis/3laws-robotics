import Founder from "@/components/About/Founder";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `TeamMember`.
 */
export type TeamMemberProps = SliceComponentProps<Content.TeamMemberSlice>;

/**
 * Component for "TeamMember" Slices.
 */
const TeamMember = ({ slice }: TeamMemberProps): JSX.Element => {
    return (
        <div
            key={slice.primary.name}
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
                    <PrismicNextImage
                        field={slice.primary.picture}
                        fill
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
                    {slice.primary.position}
                </h2>
                <h3
                    style={{
                        fontFamily: "korataki",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontWeight: 600,
                        fontSize: "1rem",
                    }}
                >
                    {slice.primary.name}
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
                {slice.primary.bio}
            </p>
        </div>
    );
};

export default TeamMember;
