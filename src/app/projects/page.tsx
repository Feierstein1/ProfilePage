"use client";

import {StackList} from "../../components/utils"

const projectsArr = [
  {
    title: "DCFpro.com",
    image: "dcfpro.png",
    url: "https://www.dcfpro.com", 
    description: "Founded and engineered DCFpro.com, an e-commerce Single Page Application (SPA) designed to streamline the organization and generation of reports for commercial property discount cash flows, incorporating subscription-based e-commerce functionalities. Led the end-to-end development across the technology stack, encompassing front-end, back-end, server-side, and database components.",
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
    <div className="max-w-4xl p-8 mx-auto space-y-6 dark:bg-gray-900 dark:border-gray-700 border-brackets">
      <div className="text-center">
        <h1 className="pb-4 text-3xl font-bold tracking-widest text-gray-900 dark:text-gray-100">Projects</h1>
        <ProjectListContainer projects={projectsArr} />
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

  return (
    <div key={title} className="flex p-4 border-brackets-horz">
      <div className="w-1/5">
        {image && (
          <a href={url || "#"} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={title} className="w-32 h-32 mt-3 mb-3 border-4 border-gray-500 rounded-lg" />
          </a>
        )}
      </div>
      <div className="w-4/5">
        <div>
          <h1 className="pb-2 text-3xl font-bold text-left justify-left">
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {title}
              </a>
            ) : (
              title
            )}
          </h1>

          <h3 className="pb-3 text-sm text-left text-gray-700 dark:text-gray-300">{description}</h3>

          {descriptionList && <DescriptionList list={descriptionList} />}

          <StackList arr={stack} color="bg-blue-500" />
        </div>
      </div>
    </div>
  );
};

const DescriptionList = ({ list }) => {
  return (
    <ul className="pl-5 text-sm text-left text-gray-600 list-disc dark:text-gray-400">
      {list.map((item, i) => (
        <li key={i} className="pb-1">{item}</li>
      ))}
    </ul>
  );
};

export default Projects;
