"use client";

interface StackListProps {
  arr: string[];
  color: string;
}

const skills = [
  "JavaScript", "React", "Node.js", "TypeScript", "MongoDB", "TailwindCSS", "Postgre", "Firebase", "BootStrap", "MUI", "HTML", "CSS", "GIT"
]

const experience = [
  {
    title: "Software Engineer",
    company: "XCEL Solutions",
    location: "Jacksonville, FL",
    date: "2014 - 2021",
    details: [
      {
        text:"Developed, launched, and updated course content using front-end, back-end, and server-side web development languages based on business requirements. ",
        stack: [
          "HTML", "JavaScript", "CSS", "PHP"
        ]
      },
      {
        text:"Devised and maintained a database of student information needed to complete course audits and ensure regulatory compliance for each state, facilitating continued sales in the most profitable locations. ",
        stack: [
          "Postgre", "SQL", "Excel"
        ]
      },
      {
        text:"Optimized and maintained dynamic email reporting system for client progress. Increased office efficiency by automating report generation and delivery that was originally done manually.",
        stack: [
          "HTML", "JavaScript", "CSS", "PHP", "VBA", "SQL", "Node.js"
        ]
      }
    ]
  },
  {
    title: "Software Engineer",
    company: "Time4Learning ",
    location: "Jacksonville, FL",
    date: "2021 - 2024",
    details: [
      {
        text:"Collaborated with academic course curriculum developers to create complex online interactive experiences for grade school students.",
        stack: [
          "HTML", "JavaScript", "CSS", "PixiJS", "JSON"
        ]
      },
      {
        text:"Developed and maintained features while ensuring timely delivery and adherence to requirements outlined in Jira tickets.",
        stack: [
          "Vue 2", "JavaScript", "C#", "ASP.NET", "SQL"
        ]
      },
      
    ]
  }
]

// Style sets
const titleStyle = 'text-xl text-blue-500  tracking-widest font-semibold  border-b pb-2'

const Resume = () => {
  return (

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 space-y-6 border-t-4 border-b-4 border-gray-300 dark:border-gray-700">
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
  );
};

const Header = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl tracking-widest font-bold text-gray-900 dark:text-gray-100">Kenny Feierstein</h1>
        <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-300">
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
        <p className="text-gray-700 dark:text-gray-300 mt-4">
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
          <div key={index} className="mt-4 bg-violet-800 p-6 rounded-xl dark:bg-gray-800">
            <div className="flex justify-between">
              <h3 className="text-lg font-medium text-gray-200">{company}</h3>
              <p className="text-gray-200">{date}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-200">{title}</p>
              <p className="text-gray-200">{location}</p> 
            </div>
            <ul className="list-none list-outside pl-6 text-gray-300 mt-2">
              {details.map(({text, stack}, i) =>  (
                <li key={i} className="pb-4 relative pl-6 before:absolute before:left-0 before:top-1 before:text-blue-500 before:content-['\2726']">
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
        <img src="/unf.png" alt="Your Name" className="mt-3 mr-3 w-20 h-20 rounded-lg border-4 border-white-500 " />
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Bachelor of Science</h3>
          <h2>Information Science (Computer Science Program)</h2>
          <p className="text-gray-600 dark:text-gray-400">University of North Florida | 2018</p>
        </div>
        </div>
      </section>
    </>
  )
}

const StackList = ({ arr, color }: StackListProps) => {
  return (
    <>
      {arr.map((skill, index) => (
        <span key={index} className={`${color} text-white text-sm px-3 py-1 p-2 rounded-full`}>
          {skill}
        </span>
      ))}
    </>
  )
}


export default Resume;
