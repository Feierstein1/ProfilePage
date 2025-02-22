"use client";

import { useRef } from "react";
import Image from "next/image";
import {experience, skills} from "./resume_info"
import {StackList} from "../../components/utils"

const titleStyle = 'text-xl text-blue-500 tracking-widest font-semibold  border-b pb-2'

const Resume = () => {
  const resumeRef = useRef(null);

  return (
      <div className="pt-14 bg-vaporwave-gradient">
        <div id="container" className="flex flex-col w-full max-w-4xl p-8 mx-auto space-y-8 ">
          <h1 className="pb-4 text-3xl font-bold text-center text-vaporwave_pink font-saira">Resume</h1>
          <div className="flex justify-center">
            <button 
              onClick={() => window.open('/Kenny_Feierstein_Resume.pdf', '_blank')}
              className="px-4 py-2 text-white rounded-lg shadow-md bg-vaporwave_dark_pink hover:bg-pink-500"
            >
              Download Resume
            </button>
          </div>

          <div ref={resumeRef} className="max-w-4xl p-8 mx-auto space-y-6 bg-white border-2 rounded-lg shadow-lg border-vaporwave_dark_pink dark:bg-gray-900">
            {/* Header Section */}
            <Header/>

            {/* Summary Section */}
            <Summary/>

            {/* Experience Section */}
            <Experience/>

            {/* Education Section */}
            <Education/>

            {/* Skills Section */}
            <Skills/>
          </div>
        </div>
      </div>
  );
};

const Header = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-widest text-gray-900 dark:text-gray-100">Kenny Feierstein</h1>
        <p className="text-sm text-gray-600 sm:text-lg dark:text-gray-300">
          Software Engineer <b className="text-blue-500">| </b> 
          Agile Experience <b className="text-blue-500">| </b> 
          Full Stack <b className="text-blue-500">| </b> 
          Node.js
        </p>
      </div>
    </>
  )
}

const Summary = () => {
  return (
    <>
      <section>
        <h2 className={`${titleStyle}`}>Summary</h2>
        <p className="text-sm sm:text-lg mt-4 text-gray-700 dark:text-gray-300">
          <b className="tracking-widest">SOFTWARE ENGINEER (FULL STACK)</b> with extensive experience developing and maintaining technical systems in Agile environments. 
          Skilled in synthesizing complex information, collaborating with cross-functional teams, and delivering solutions that achieve key performance indicators. 
          Proven ability to excel in autonomous and remote work settings while leveraging front-end, back-end, and server-side technologies.
        </p>
      </section>
    </>
  )
}

const Experience = () => {
  return (
    <>
      <section>
        <h2 className={`${titleStyle}`}>Experience</h2>
        {experience.map(({ title, company, location, date, details }, index) => (
          <div key={index} className="p-6 mt-4 bg-violet-800 rounded-xl dark:bg-gray-800">
            <div className="flex justify-between">
              <h3 className="text-md sm:text-lg font-medium text-gray-200">{company}</h3>
              <p className="text-gray-200 text-sm sm:text-md">{date}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-200 text-sm sm:text-lg">{title}</p>
              <p className="text-gray-200 text-sm sm:text-md">{location}</p> 
            </div>
            <ul className="sm:pl-6 mt-2 text-gray-300 list-none list-outside">
              {details.map(({text, stack}, i) =>  (
                <li key={i} className="text-sm sm:text-lg pb-4 relative pl-5 sm:pl-6 before:absolute before:left-0 before:top-1 before:text-blue-500 before:content-['\2726']">
                  {text}
                  <br/>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <StackList arr={stack} color="bg-violet-500"/>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  )
}

const Skills = () => {
  return (
    <>
      <section>
        <h2 className={`${titleStyle}`}>Skills</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          <StackList arr={skills} color="bg-blue-500"/>
        </div>
      </section>
    </>
  )
}

const Education = () => {
  return (
    <>
    <section>
        <h2 className={`${titleStyle}`}>Education</h2>
        <div className="flex justify-start">
          <Image 
            src="/unf.png"
            alt="UNF Logo"
            unoptimized
            width={80} 
            height={80} 
            className="w-20 h-20 mt-3 mr-3 border-4 rounded-lg border-white-500 "
          />
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Bachelor of Science</h3>
          <h2 className="text-sm sm:text-lg">Information Science (Computer Science Program)</h2>
          <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-400">University of North Florida | 2018</p>
        </div>
        </div>
      </section>
    </>
  )
}

export default Resume;
