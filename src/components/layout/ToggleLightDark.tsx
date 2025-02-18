"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const htmlElement = document.documentElement;
    
    if (savedTheme) {
        setTheme(savedTheme);
        if (savedTheme === "dark") htmlElement.classList.add("dark");
    } else {
      setTheme("light"); 
    }
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    const htmlElement = document.documentElement;
    htmlElement.classList.toggle("dark", newTheme === "dark");

    // Save the theme and timestamp
    localStorage.setItem("theme", newTheme);
    localStorage.setItem("themeTimestamp", Date.now().toString());
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-gray-800 transition-colors bg-gray-200 rounded-full dark:bg-gray-800 hover:bg-gray-800 hover:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-800 dark:text-gray-200"
    >
      {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
};

export default ThemeToggle;
