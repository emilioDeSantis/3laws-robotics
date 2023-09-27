import { Metadata } from "next";
import PageContentContainer from "@/components/PageContentContainer";
import Title from "@/components/Title";
import Link from "next/link";

export default function Contact() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100vw",
                paddingBottom: "6rem",
                alignItems: "center",
                justifyContent: "flex-start",
                height: "100vh",
            }}
        >
            <Title>Contact</Title>
            <PageContentContainer>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        // alignItems: "center",
                        gap: "1rem",
                        paddingBlock: "6rem",
                        color: "white",
                        fontWeight: 300,
                        fontSize: "1rem",
                        letterSpacing: "0.1em",
                        lineHeight: "180%",
                    }}
                >
                    <div style={{}}>
                        <p
                            style={{
                                textTransform: "uppercase",
                                fontWeight: 300,
                                letterSpacing: "0.1em",
                                opacity: 0.6,
                                fontSize: "0.8rem",
                            }}
                        >
                            Email
                        </p>
                        <Link style={{
                        fontFamily: "korataki",}} href="mailto:info@3laws.io">
                            info@3laws.io
                        </Link>
                    </div>
                    <div>
                        <p
                            style={{
                                textTransform: "uppercase",
                                fontWeight: 300,
                                letterSpacing: "0.1em",
                                opacity: 0.6,
                                fontSize: "0.8rem",
                            }}
                        >
                            Address
                        </p>
                        <p style={{
                        fontFamily: "korataki",}}>271 S Chester Ave, Pasadena, CA, 91106</p>
                    </div>
                    <Link href={'https://www.linkedin.com/company/3laws/'} style={{
                        fontFamily: "korataki",
                    }}>
                        LinkedIn →
                    </Link>
                </div>
            </PageContentContainer>
        </div>
    );
}
