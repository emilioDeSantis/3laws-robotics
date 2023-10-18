"use client";
import { useState, useRef, useEffect, FC } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const navLinks = [
    { path: "/", label: "Home" },
    { path: "/product", label: "Product" },
    { path: "/case-studies", label: "Case Studies" },
    { path: "/about", label: "About" },
    { path: "/blogs", label: "Blogs" },
    // { path: "/contact", label: "Contact" },
];

const DropdownMenu: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const pathname = usePathname();

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                // alert('close')
            }
        };
        window.addEventListener("click", handleOutsideClick);
        return () => window.removeEventListener("click", handleOutsideClick);
    }, []);

    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);

    return (
        <div style={{ position: "relative" }}>
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                style={{
                    border: "none",
                    cursor: "pointer",
                    height: "3rem",
                    width: "3rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 10,
                }}
            >
                {isOpen && <XMarkIcon className="h-6 w-6" />}
                {!isOpen && <Bars3Icon className="h-6 w-6" />}
            </button>
            <div
                className="nav-texture"
                style={{
                    width: "100vw",
                    position: "fixed",
                    top: 0,
                    right: 0,
                    transform: isOpen ? "translateY(0)" : "translateY(-30rem)",
                    transition: "transform 0.3s ease",
                    color: "white",
                    zIndex: -1,
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "6rem",
                    paddingBottom: "3rem",
                    height: "30rem",
                    fontSize: "0.8rem",
                    fontWeight: 300,
                    borderBottom: "1px solid #fff4",
                    borderRadius: "none",
                }}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        href={link.path}
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                opacity: pathname === link.path ? 1 : 0.6,
                            }}
                        >
                            {pathname === link.path && (
                                <div
                                    style={{
                                        borderRadius: "1000px",
                                        background: "#88ffee",
                                        height: "8px",
                                        width: "8px",
                                        marginBottom: "2px",
                                    }}
                                />
                            )}
                            <p>{link.label}</p>
                        </div>
                    </Link>
                ))}

                <a
                    onClick={() => {
                        setIsOpen(false);
                    }}
                    href="#footer"
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            opacity: 0.6,
                        }}
                    >
                        <p>Contact</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default DropdownMenu;
