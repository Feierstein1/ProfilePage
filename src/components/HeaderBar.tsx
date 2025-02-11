"use client";

import {useEffect, useState} from "react"
import ThemeToggle from "./ToggleLightDark"

const HeaderBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    let lastScrollY = 0

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50); 
        lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const style = "p-5 justify-center transform transition-all duration-500 ease-in-out hover:scale-110 hover:text-blue-500"

    return (
        <>
            <header
                className={`fixed p-3  top-2 left-0 w-full transition-transform duration-300 ${
                    isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <nav className="container mx-auto flex justify-center">
                    <ul className="flex gap-2 pt-1">
                        <li><a href="/" className={`${style}`}>Home</a></li>
                        <li><a href="/projects" className={`${style}`}>Projects</a></li>
                        <li><a href="/contact" className={`${style}`}>Contact</a></li>
                    </ul>
                    <ThemeToggle/>
                </nav>
            </header>
        </>
    )
}

export default HeaderBar;