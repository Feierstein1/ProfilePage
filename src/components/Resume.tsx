"use client";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 space-y-6 border border-gray-300 dark:border-gray-700">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Kenny Feierstein</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Software Engineer | JavaScript | React | Node.js</p>
      </div>

      {/* Summary Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 border-b pb-2">Summary</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Experienced software engineer specializing in full-stack development with expertise in React, Node.js, and cloud platforms.
        </p>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 border-b pb-2">Experience</h2>
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Software Engineer</h3>
          <p className="text-gray-600 dark:text-gray-400">Company Name | 2020 - Present</p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
            <li>Developed scalable web applications using React and Node.js.</li>
            <li>Implemented RESTful APIs and optimized database queries for performance.</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software.</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 border-b pb-2">Skills</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {["JavaScript", "React", "Node.js", "TypeScript", "MongoDB", "TailwindCSS"].map((skill, index) => (
            <span key={index} className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 border-b pb-2">Education</h2>
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Bachelor’s Degree in Information</h3>
          <p className="text-gray-600 dark:text-gray-400">University Name | Year</p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
