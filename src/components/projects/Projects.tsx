"use client";

import { StackList } from "../../components/utils";
import { useState } from "react";
import { projectsArr } from "./projects_info";

// Define Project interface
interface Project {
  title: string;
  image?: string;
  url?: string;
  description: string;
  descriptionList?: string[];
  stack: string[];
}

const Projects = () => {
  return (
    <div className="pt-14 bg-vaporwave-gradient">
      <div id="container" className="flex flex-col w-full max-w-4xl p-8 mx-auto space-y-8">
        <h1 className="pb-4 text-3xl font-bold text-center text-vaporwave_pink font-saira">Projects</h1>
        <ProjectListContainer projects={projectsArr} />
      </div>
    </div>
  );
};

// Props for ProjectListContainer
interface ProjectListContainerProps {
  projects: Project[];
}

const ProjectListContainer: React.FC<ProjectListContainerProps> = ({ projects }) => {
  return (
    <div className="flex flex-col space-y-6">
      {projects.map((proj, index) => (
        <ProjectListItem key={index} proj={proj} />
      ))}
    </div>
  );
};

// Props for ProjectListItem
interface ProjectListItemProps {
  proj: Project;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({ proj }) => {
  const { title, image, url, description, descriptionList, stack } = proj;
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);

  return (
    <div className="p-4 bg-violet-800 border-2 border-vaporwave_dark_pink md:flex-row dark:bg-gray-900 rounded-xl">
      <DescriptionTitle title={title} image={image} url={url} />
      <div>
        <h3 className="pb-3 text-sm text-left text-gray-300">{description}</h3>

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
  );
};

// Props for DescriptionTitle
interface DescriptionTitleProps {
  title: string;
  image?: string;
  url?: string;
}

const DescriptionTitle: React.FC<DescriptionTitleProps> = ({ title, image, url }) => {
  return (
    <div className="flex justify-start">
      {image ? (
        <div className="flex items-center">
          <a href={url || "#"} target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <img src={image} alt={title} className="w-10 h-10 mt-3 mb-3 border-4 border-gray-500 rounded-lg sm:w-20 sm:h-20" />
          </a>
          <h1 className="pl-3 text-xl font-bold text-left sm:text-3xl font-saira text-blue-400 drop-shadow-[2px_2px_0px_black]">
            {title}
          </h1>
        </div>
      ) : (
        <div className="w-full">
          <h1 className="pb-2 text-xl font-bold text-left sm:text-3xl font-saira drop-shadow-[2px_2px_0px_black]">
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                {title}
              </a>
            ) : (
              <b className="text-blue-400">{title}</b>
            )}
          </h1>
        </div>
      )}
    </div> 
  );
};

// Props for DescriptionList
interface DescriptionListProps {
  list: string[];
}

const DescriptionList: React.FC<DescriptionListProps> = ({ list }) => {
  return (
    <ul className="pl-5 text-sm text-left text-gray-200 list-none list-outside">
      {list.map((item, i) => (
        <li key={i} className="pb-4 relative pl-6 before:absolute before:left-0 before:top-1 before:text-blue-500 before:content-['\2726']">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Projects;
