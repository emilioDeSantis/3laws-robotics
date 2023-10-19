"use client";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import useHideNavOnScroll from "@/hooks/useHideNavOnScroll";
import { link } from "fs";
import { usePathname } from "next/navigation";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import Logo from "./Logo";
import { use, useEffect, useRef, useState } from "react";
import { useScreenSize } from "@/hooks/useScreenSize";

const Header: React.FC = () => {
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const [underlineLeft, setUnderlineLeft] = useState<number>(0);

    const screenSize = useScreenSize()

    const pathname = usePathname();

    const [isSwitchingTabs, setIsSwitchingTabs] = useState(false);

    useEffect(() => {
            setIsSwitchingTabs(true);
            // reset isSwitchingTabs to false after 300ms. Adjust the delay if needed.
            setTimeout(() => setIsSwitchingTabs(false), 500);

    }, [pathname]);

    useEffect(() => {
        const activeIndex = links.findIndex((link) => link.href === pathname);
        const activeLink = linkRefs.current[activeIndex];

        if (activeLink) {
            const left = activeLink.offsetLeft;
            setUnderlineLeft(left);
        }
    }, [pathname, screenSize]);


    const visable = useHideNavOnScroll();
    const isDesktop = useIsDesktop();

    const links = [
        { name: "Home", href: "/" },
        { name: "Product", href: "/product" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "About", href: "/about" },
        { name: "Blogs", href: "/blogs" },
        // { name: "Contact", href: "/contact" },
    ];
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                position: "fixed",
                top: 0,
                transform: `translateY(${visable || isDesktop ? 0 : -4}rem)`,
                transition: "0.3s",
                zIndex: 1000,
            }}
        >
            <div
                className="page-padding"
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "stretch",
                    backgroundColor: pathname == "/" ? "#0000" : "#151516",
                    color: "white",
                    zIndex: 1000,
                    fontFamily: "korataki",
                    letterSpacing: "0.1em",
                }}
            >
                <Link href="/">
                    <Logo />
                </Link>
                <nav
                    className="desktop"
                    style={{
                        color: "#EEFDFF",
                        gap: "2.4rem",
                        fontSize: "0.7rem",
                        fontWeight: 400,
                        letterSpacing: "0.05em",
                    }}
                >
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            ref={(el) => (linkRefs.current[index] = el)}
                            className={link.href == pathname ? "" : "nav-link"}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            href={link.href}
                        >
                            <div>{link.name}</div>
                        </Link>
                    ))}
                    <a
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: '3rem'
                        }}
                        className="nav-link"
                        href="#footer"
                    >
                        <div>Contact</div>
                    </a>
                </nav>
                <div className="mobile">
                    <DropdownMenu />
                </div>
            </div>
            <div
                className="desktop"
                style={{
                    width: "100%",
                    height: "2.5px",
                    backgroundColor: pathname == "/" ? "#0000" : "#0A0A0A",
                }}
            >
                <div
                    style={{
                        width: "2rem",
                        height: "100%",
                        backgroundColor: "#5E5CE6",
                        marginInlineStart: `${underlineLeft}px`,
                        transition: `${isSwitchingTabs ? "0.5s" : "0s"} ease`,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Header;
