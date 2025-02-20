"use client";

import {useEffect, useState, useRef} from "react"
import Link from "next/link";
import ThemeToggle from "./ToggleLightDark"
import BeamEffect from "./BeamEffect"

const headerArr = [
    {
        text: "Home",
        link: "/"
    },
    {
        text: "Projects",
        link: "/projects"
    },
    {
        text: "Contact",
        link: "/contact"
    }
]

const HeaderBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 50); 
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed p-3 top-2 left-0 w-full transition-transform duration-300 ${
                    isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <nav className="container flex justify-center mx-auto mb-4">
                    <ul className="flex gap-2 pt-1">
                        {headerArr.map(({text, link},i) => (
                            <li key={i}><Link href={link} className="p-5 justify-center transform transition-all duration-500 ease-in-out hover:scale-110 hover:text-vaporwave_dark_pink dark:hover:text-vaporwave_pink">{text}</Link></li>
                        ))}
                    </ul>
                    <ThemeToggle/>
                </nav>
                <BeamEffect />
            </header>
        </>
    )
}

export default HeaderBar;