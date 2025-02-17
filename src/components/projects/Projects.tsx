"use client";

import { StackList } from "../../components/utils";
import { useState } from "react";

const projectsArr = [
  {
    title: "DCFpro.com",
    image: "dcfpro.png",
    url: "https://www.dcfpro.com", 
    description: "I created the entire website for DCFpro.com, an e-commerce Single Page Application (SPA) designed to streamline the organization and generation of reports for commercial property discount cash flows, incorporating subscription-based e-commerce functionalities. Led the end-to-end development across the technology stack, encompassing front-end, back-end, server-side, and database components.",
    descriptionList: [
      "Utilized front-end UI libraries such as MUI and Chart.js for robust design and data readability on both desktop and mobile devices.",
      "Defined and tested NoSQL rules in Firestore to secure CRUD operations and prevent unauthorized access.",
      "Created pipeline between database and Stripe for smooth subscription-based access.",
      "Designed an organized ticket system for customer support.",
      "Optimized deployment of new features by setting test environment only accessible to team members. This allowed us to test new features in a QA environment before deploying in production.",
      "Increased user traffic by launching a Google Ad campaign",
    ],
    stack: [
      "JavaScript",
      "React",
      "Redux",
      "Node.js",
      "Express",
      "Stripe",
      "Firebase",
      "NoSQL",
    ],
  },
];

const Projects = () => {
  return (
    <div className="pt-14 bg-vaporwave-gradient">
      <div id="container" className="flex flex-col w-full max-w-4xl p-8 mx-auto space-y-8 ">
        <div className="max-w-4xl p-8 mx-auto space-y-6 bg-gray-100 dark:bg-gray-900 dark:border-gray-700 rounded-xl">
          <div className="pt-3 text-center">
            <h1 className="pb-4 text-3xl font-bold tracking-widest text-gray-900 font-saira dark:text-gray-100">Projects</h1>
            <ProjectListContainer projects={projectsArr} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectListContainer = ({ projects }) => {
  return (
    <div className="flex flex-col space-y-6">
      {projects.map((proj, index) => (
        <ProjectListItem key={index} proj={proj} />
      ))}
    </div>
  );
};

const ProjectListItem = ({ proj }) => {
  const { title, image, url, description, descriptionList, stack } = proj;
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  return (
    <div key={title} className="flex flex-col justify-between p-4 md:flex-row border-brackets-horz">
      <div className="flex justify-center md:w-1/3">
        {image && (
          <a href={url || "#"} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={title} className="w-20 h-20 mt-3 mb-3 border-4 border-gray-500 rounded-lg sm:w-32 sm:h-32" />
          </a>
        )}
      </div>
      <div className="w-full md:w-2/3">
        <div>
          <h1 className="pb-2 text-xl font-bold text-left sm:text-3xl">
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {title}
              </a>
            ) : (
              title
            )}
          </h1>

          <h3 className="pb-3 text-sm text-left text-gray-700 dark:text-gray-300">{description}</h3>

          {descriptionList && (
            <div className="sm:hidden">
              <button 
                onClick={() => setIsDescriptionOpen(!isDescriptionOpen)} 
                className="mb-4 text-sm text-white bg-vaporwave_purple hover:bg-vaporwave_dark_purple"
              >
                {isDescriptionOpen ? "Show less" : "Show more"}
              </button>
              {isDescriptionOpen && <DescriptionList list={descriptionList} />}
            </div>
          )}
          
          <div className="hidden sm:block">
            {descriptionList && <DescriptionList list={descriptionList} />}
          </div>

          <StackList arr={stack} color="bg-blue-500" />
        </div>
      </div>
    </div>
  );
};

const DescriptionList = ({ list }) => {
  return (
    <ul className="pl-5 text-sm text-left text-gray-800 list-disc dark:text-gray-300">
      {list.map((item, i) => (
        <li key={i} className="pb-1">{item}</li>
      ))}
    </ul>
  );
};

export default Projects;
