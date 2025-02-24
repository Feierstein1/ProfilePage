"use client"

import { useState } from "react";
import Profile from "./Profile"
import Blog from "../blog/Blog"

const sections = [
  { id: "profile", label: "Profile" },
  { id: "blog", label: "Blog" }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <div className="pt-20 bg-vaporwave-gradient">
      <div id="container" className="flex pt-5 flex-col w-full max-w-4xl mx-auto">
        
      {/* Navigation Bar */}
      <div className="flex justify-center max-w-4xl space-x-12">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`px-4 py-2 text-lg font-semibold rounded-md transition-all ${
              activeSection === section.id
                ? " text-vaporwave_dark_pink"
                : "text-gray-500 dark:text-gray-300"
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div>
        {activeSection === "profile" && <Profile />}
        {activeSection === "blog" && <Blog />}
      </div>
    </div>
    </div>
  );
}

