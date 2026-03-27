"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiGooglecloud } from "react-icons/si";

const Profile = () => {
  return (
    <div className="pt-14 bg-vaporwave-gradient bg-opacity-30">
      <div className="flex flex-col w-full max-w-4xl p-6 mx-auto space-y-8">
        
        {/* TOP SECTION */}
        <section className="flex flex-col items-center w-full gap-8 md:flex-row md:items-stretch">
          
          {/* LEFT: IMAGE + LINKS */}
          <div className="flex flex-col items-center md:w-1/2">
            
            <Image
              src="/profilePic.png"
              alt="Profile Picture"
              width={200}
              height={200}
              className="object-cover mt-3 border-0 rounded-full shadow-xl w-50 h-50 md:w-60 md:h-60"
            />

            <AccountLinks />
          </div>

          {/* RIGHT: NAME */}
          <div className="flex items-center justify-center w-full md:w-1/2 md:justify-center">
            <h1 className="text-4xl font-bold text-center sm:text-5xl lg:text-6xl md:text-left text-vaporwave_light_pink dark:text-title1 font-saira drop-shadow-[2px_2px_0px_black]">
              KENNY FEIERSTEIN
            </h1>
          </div>
        </section>

        {/* SUMMARY (FULL WIDTH BELOW) */}
        <section className="w-full p-6 rounded-lg bg-white/80 backdrop-blur-sm dark:bg-black/50">
          <p className="max-w-2xl mx-auto text-center text-md sm:text-lg text-vaporwave_dark_blue dark:text-bodyText1">
            Security-focused Software Engineer with 10+ years of experience building and maintaining production web systems across full-stack and infrastructure layers. 
            Specializes in secure system design, cloud infrastructure, and scalable application development using Node.js, React, and modern database technologies. Proven track record of leading server migrations, optimizing APIs, and implementing security best practices across Linux-based environments.
            Experienced in both legacy and modern architectures, with a focus on reliability, performance, and long-term maintainability.
          </p>
        </section>

        {/* TECH STACK */}
        <TechStack />
      </div>
    </div>
  );
};

// Account Links
const AccountLinks = () => {
  return (
    <div className="flex mt-4 p-2 space-x-5 rounded-lg bg-white/80 backdrop-blur-sm dark:bg-black/50">
      <a
        href="https://www.linkedin.com/in/kenneth-feierstein-4b5376115/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-3xl text-blue-500 transition hover:scale-110 hover:text-blue-600" />
      </a>

      <a
        href="https://github.com/Feierstein1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-3xl text-violet-500 transition hover:scale-110 hover:text-violet-600" />
      </a>

      <ResumeLink />
    </div>
  );
};

// Resume Link
const ResumeLink = () => {
  return (
    <Link
      href="/resume"
      className="px-3 py-1 text-white rounded-full bg-vaporwave_dark_blue hover:bg-blue-700 dark:bg-vaporwave_pink dark:hover:bg-vaporwave_dark_pink"
    >
      <span className="text-sm font-bold drop-shadow-[1px_1px_0px_black]">
        Resume
      </span>
    </Link>
  );
};

// Tech Stack
const TechStack = () => {
  const stackArr = [
    { type: "JavaScript", icon: FaJs, color: "text-yellow-500 hover:text-yellow-600" },
    { type: "React", icon: FaReact, color: "text-blue-500 hover:text-blue-600" },
    { type: "Node.js", icon: FaNodeJs, color: "text-green-500 hover:text-green-600" },
    { type: "SQL", icon: FaDatabase, color: "text-gray-500 hover:text-gray-600" },
    { type: "MongoDB", icon: SiMongodb, color: "text-green-400 hover:text-green-500" },
    { type: "Docker", icon: FaDocker, color: "text-blue-400 hover:text-blue-500" },
    { type: "GCP", icon: SiGooglecloud, color: "text-red-500 hover:text-red-600" },
  ];

  return (
    <div className="flex flex-wrap justify-between gap-y-4 sm:gap-y-6 sm:space-x-8 md:space-x-10 bg-white dark:bg-black rounded-lg p-5">
      {stackArr.map(({ type, icon: Icon, color }, index) => (
        <div key={index} className="flex flex-col items-center">
          <Icon className={`text-4xl transition ${color}`} />
          <p className="hidden mt-2 lg:block">{type}</p>
        </div>
      ))}
    </div>
  );
};

export default function ProfileWrapper() {
  return <Profile />;
}