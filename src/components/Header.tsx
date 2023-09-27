"use client";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import useHideNavOnScroll from "@/hooks/useHideNavOnScroll";
import { link } from "fs";
import { usePathname } from "next/navigation";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import Logo from "./Logo";

const Header: React.FC = () => {
    const visable = useHideNavOnScroll();
    const isDesktop = useIsDesktop();

    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/" },
        { name: "Product", href: "/product" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "About", href: "/about" },
        { name: "Blogs", href: "/blogs" },
        { name: "Contact", href: "/contact" },
    ];
    return (
        <div
            className="page-padding"
            style={{
                position: "fixed",
                top: 0,
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "stretch",
                backgroundColor: pathname == "/" ? "#0000" : "#0b0b0b",
                color: "white",
                zIndex: 1000,
                fontFamily: "korataki",
                letterSpacing: "0.1em",
                transform: `translateY(${visable || isDesktop ? 0 : -4}rem)`,
                transition: "0.3s",
            }}
        >
            <Link href="/">
                <Logo />
            </Link>
            <nav
                className="desktop"
                style={{
                    color: "#fff",
                    gap: "3.6vw",
                    fontSize: "0.64rem",
                    fontWeight: 200,
                    letterSpacing: "0.12em",
                }}
            >
                {links.map((link, index) => (
                    <Link
                        key={index}
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
            </nav>
            <div className="mobile">
                <DropdownMenu />
            </div>
        </div>
    );
};

export default Header;
