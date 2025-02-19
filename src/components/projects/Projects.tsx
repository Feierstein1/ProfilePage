"use client";

import { StackList } from "../../components/utils";
import { useState } from "react";
import Image from "next/image";
import { projectsArr } from "./projects_info";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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
              className="mb-4 bg-transparent hover:bg-transparent text-sm text-white flex items-center space-x-2"
            >
              {isDescriptionOpen ? (
                <>
                  <FaChevronUp />
                  <span>Show less</span>
                </>
              ) : (
                <>
                  <FaChevronDown />
                  <span>Show more</span>
                </>
              )}
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isDescriptionOpen ? "max-h-screen" : "max-h-0"}`}>
              {isDescriptionOpen && <DescriptionList list={descriptionList} />}
            </div>
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

  const validUrl = url && url.trim() !== "" ? url : undefined;

  return (
    <div className="flex justify-start">
      {image ? (
        <div className="flex items-center pb-2">
          <a href={url ? validUrl : "#"} target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <Image 
              src={image} 
              alt={title} 
              unoptimized
              width={50} 
              height={50} 
              className="object-cover border-2" 
            />
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
