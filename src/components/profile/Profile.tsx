"use client";

import React from "react";
import Image from "next/image";
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaFire, FaGitAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import CatInteraction from './CatInteraction';

const Profile = () => {
  return (
    <div className="pt-14 bg-vaporwave-gradient">
      <CatInteraction />
      <div id="container" className="flex flex-col w-full max-w-4xl p-8 mx-auto space-y-8 ">
        
        {/* Section with Profile Information */}
        <section className="flex flex-col items-center justify-center w-full p-8 ">
          {/* Container with smaller size and background */}
          <div className="w-full p-8 border-4 rounded-lg shadow-xl bg-vaporwave_dark_blue border-vaporwave_dark_pink dark:bg-gray-700">
            <div className="flex flex-col items-center justify-center md:flex-row">
              {/* Left Side - Profile Image */}
              <div className="flex justify-center w-full p-5 md:justify-end md:w-1/2">
                <Image
                  src="/profilePic.png" 
                  alt="Profile Picture"
                  width={300}
                  height={300}
                  className="border-4 rounded-full shadow-xl"
                />
              </div>

              {/* Right Side - Text */}
              <div className="flex flex-col items-center w-full mt-8 text-center md:w-1/2 md:items-start md:text-left md:mt-0">
                <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-vaporwave_light_yellow dark:text-title1 font-saira drop-shadow-[2px_2px_0px_black]">
                  Hello, I&apos;m
                  <p className="text-4xl font-bold md:text-5xl lg:text-6xl text-title2 font-saira drop-shadow-[2px_2px_0px_black]">KENNY FEIERSTEIN</p>
                </h1>
                {/* Account Links */}
                <AccountLinks />
                <p className="max-w-md mt-4 text-lg md:text-xl text-vaporwave_light_blue dark:text-bodyText1">
                  Software Engineer with experience in full-stack development using Node.js. 
                  Skilled in building scalable applications and collaborating in Agile, remote work environments.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Tech Stack */}
        <TechStack />
      </div>
    </div>
  );
};

// LinkedIn and Github links Component
const AccountLinks = () => {
  return (
    <>
      <div className="!mt-3 flex justify-center sm:justify-start space-x-5 p-4  bg-gray-100 dark:bg-gray-900 border-0 rounded-full shadow-xl">
        <a href="https://www.linkedin.com/in/kenneth-feierstein-4b5376115/" target="_blank"><FaLinkedin className={`text-3xl transition duration-500 ease-in-out hover:scale-110 text-blue-500 hover:text-blue-600`} /></a>
        <a href="https://github.com/Feierstein1" target="_blank"><FaGithub className={`text-3xl transition duration-500 ease-in-out hover:scale-110 text-violet-500 hover:text-violet-600`} /></a>
        <ResumeLink/>
      </div>
    </>
  )
}

// Resume Link Component
const ResumeLink = () => {
  return (
    <>
      <a href="/resume" className="p-2 text-white rounded-full bg-vaporwave_dark_blue hover:bg-blue-700 dark:bg-vaporwave_pink dark:hover:bg-vaporwave_dark_pink ">
        <b className="drop-shadow-[1px_1px_0px_black]">View Resume</b>
      </a>
    </>
  )
}

// Tech Stack Component with Auto Scrolling
const TechStack = () => {
  const stackArr = [
    { type: "JavaScript", icon: FaJs, color: "text-yellow-500 hover:text-yellow-600" },
    { type: "React", icon: FaReact, color: "text-blue-500 hover:text-blue-600" },
    { type: "Node.js", icon: FaNodeJs, color: "text-green-500 hover:text-green-600" },
    { type: "SQL", icon: FaDatabase, color: "text-gray-500 hover:text-gray-600" },
    { type: "MongoDB", icon: SiMongodb, color: "text-green-400 hover:text-green-500" },
    { type: "Firebase", icon: FaFire, color: "text-orange-500 hover:text-orange-600" },
    { type: "Git", icon: FaGitAlt, color: "text-red-500 hover:text-red-600" },
  ];

  return (
    <div className="flex flex-wrap justify-between sm:space-x-8 md:space-x-10 gap-y-4 sm:gap-y-6">
      {stackArr.map(({ type, icon: Icon, color }, index) => (
        <div key={index} className="flex flex-col items-center">
          <Icon className={`text-5xl md:text-3xl lg:text-4xl transition ${color}`} />
          <p className="hidden mt-2 lg:block">{type}</p>
        </div>
      ))}
    </div>
  );
};

// Inject Tailwind Animations
export default function ProfileWrapper() {
  return (
    <>
      <Profile />
    </>
  );
}
