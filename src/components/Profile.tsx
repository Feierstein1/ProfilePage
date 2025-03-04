"use client";

import React from "react";
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaFire, FaGitAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold tracking-widest transition-all duration-500 ease-in-out transform text-gray-white hover:scale-110 hover:text-blue-500">
          Kenny Feierstein
        </h2>
      </div>
      <div className="grid items-center grid-cols-1 p-6 m-6 bg-gray-100 sm:grid-cols-1 md:grid-cols-2 dark:bg-gray-900 border-brackets">
        <Summary />
        <Picture />
      </div>
      <TechStack />
    </div>
  );
};

// Profile Picture Component
const Picture = () => {
  return (
    <div className="flex justify-center">
      <div className="w-48 h-56 overflow-hidden rounded-lg">
        <img src="/profilePic.png" alt="Your Name" className="object-cover w-full h-full transition-all ease-in-out hover:w-38 " />
      </div>
    </div>
  );
};

// Summary Component
const Summary = () => {
  return (
    <div className="space-y-8 text-center md:text-left">
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Software Engineer with experience in full-stack development using Node.js. 
        Skilled in building scalable applications and collaborating in Agile, remote work environments.
      </p>
      <AccountLinks/>
    </div>
  );
};

//LinkedIn and Github links Component
const AccountLinks = () => {
  return (
    <>
      <div className="!mt-5 flex justify-center sm:justify-start space-x-5 pb-5">
        <a href="https://www.linkedin.com/in/kenneth-feierstein-4b5376115/" target="_blank"><FaLinkedin className={`text-3xl transition duration-500 ease-in-out hover:scale-110 text-blue-500 hover:text-blue-600`} /></a>
        <a href="https://github.com/Feierstein1" target="_blank"><FaGithub className={`text-3xl transition duration-500 ease-in-out hover:scale-110 text-violet-500 hover:text-violet-600`} /></a>
        <ResumeLink/>
      </div>
    </>
  )
}

//Resume Link Component
const ResumeLink = () => {
  return (
    <>
      <a href="/resume" className="px-4 py-2 text-sm text-white transition duration-300 ease-in-out transform bg-blue-600 rounded-full sm:text-md hover:bg-blue-800 hover:scale-105 dark:bg-gray-600 dark:hover:bg-gray-800 ">
        <h2>View Resume</h2>
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
