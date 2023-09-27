import Link from "next/link";
import React from "react";
import Logo from "./Logo";

type FooterLink = {
    name: string;
    href: string;
};

const Footer: React.FC = () => {
    const links: FooterLink[] = [
        { name: "Home", href: "/" },
        { name: "Product", href: "/product" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "About", href: "/about" },
        { name: "Blogs", href: "/blogs" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <footer
            className="page-padding"
            style={{
                backgroundColor: "#1d1d1d",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                position: 'absolute',
            }}
        >
            <div
            style={{
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                paddingBlock: "1rem",
                paddingTop: "2rem",
                gap: "4.6rem",
                maxWidth: '60rem',
            }}>
                <Logo />

                <div
                    style={{
                        marginTop: "-1rem",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.8rem",
                        fontWeight: 500,
                    }}
                >
                    <div>
                        <div
                            style={{
                                fontWeight: 300,
                                opacity: 0.5,
                                fontSize: "0.6rem",
                                letterSpacing: "0.1em",
                                fontFamily: "korataki",
                            }}
                        >
                            email
                        </div>
                        <Link
                            href="mailto:info@3laws.io"
                            style={{ textDecoration: "none" }}
                        >
                            info@3laws.io
                        </Link>
                    </div>
                    <div>
                        <div
                            style={{
                                fontWeight: 300,
                                opacity: 0.5,
                                fontSize: "0.6rem",
                                letterSpacing: "0.1em",
                                fontFamily: "korataki",
                            }}
                        >
                            address
                        </div>
                        271 S Chester Ave, Pasadena, CA, 91106
                    </div>
                </div>

                <div
                    style={{
                        textTransform: "uppercase",
                        display: "flex",
                        flexWrap: "wrap",
                        columnGap: "1.6rem",
                        rowGap: "0.5rem",
                        fontSize: "0.6rem",
                        opacity: 0.8,
                        letterSpacing: "0.1em",
                        fontFamily: "korataki",
                        fontWeight: 300,
                        justifyContent: "space-between",
                    }}
                >
                    {links.map((link, index) => (
                        <Link key={index} href={link.href} style={{}}>
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div
                    style={{
                        opacity: 0.8,
                        display: "flex",
                        gap: "1.2rem",
                        fontSize: "0.8rem",
                        marginTop: "-2.6rem",
                    }}
                >
                    <Link href="/security" style={{}}>
                        Security
                    </Link>
                    |
                    <Link href="/privacy" style={{}}>
                        Privacy
                    </Link>
                </div>

                <p
                    style={{
                        opacity: 0.5,
                        fontSize: "0.7rem",
                        fontWeight: 300,
                    }}
                >
                    &copy; {new Date().getFullYear()} 3laws.io. All Rights
                    Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
