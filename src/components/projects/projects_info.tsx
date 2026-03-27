export const projectsArr = [
 {
  title: "ContractAI",
  url: "https://github.com/Feierstein1/contractAI", 
  description: "AI-powered contract analysis platform that processes uploaded documents through a multi-agent pipeline to identify risks and generate structured, actionable insights.",
  descriptionList: [
    "Implemented secure authentication using NextAuth with OAuth and credential-based login backed by MongoDB.",
    "Built an interactive client UI allowing users to upload contracts, select LLM providers/models, and view token-based cost estimates.",
    "Designed and integrated AWS S3 storage for secure file handling, organization, and controlled access.",
    "Developed a Python FastAPI backend to orchestrate LLM workflows and RESTful API communication.",
    "Engineered multi-agent processing pipelines using CrewAI to analyze contracts and return structured outputs via Pydantic schemas.",
    "Stored dynamic analysis results in a NoSQL database and rendered UI components based on structured output keys.",
    "Implemented history tracking for uploaded contracts and generated insights."
  ],
  stack: [
    "JavaScript",
    "TypeScript",
    "Python",
    "FastAPI",
    "CrewAI",
    "React",
    "Redux",
    "Next.js",
    "NextAuth",
    "Node.js",
    "AWS (S3)"      
  ],
},
  {
    title: "DCFpro.com",
    image: "/dcfpro.png",
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
      "MUI"
    ],
  },
  {
    title: "Next.js Authenticated Login Template",
    url: "https://github.com/Feierstein1/nextjs-login-template", 
    description: "This is a Next.js project bootstrapped with create-next-app. It provides a bare-bones template for implementing basic login functionality using Next.js, React, and MongoDB.",
    descriptionList: [
      "User Authentication: Users are created and stored in a MongoDB cluster.",
      "Password Security: Passwords are hashed using bcrypt for secure storage.",
      "JWT Authentication: JSON Web Tokens (JWT) are generated upon login and stored in HTTP-only cookies for enhanced security.",
      "Middleware Routing: Middleware is used to redirect users to either auth or unauth subdomains based on their authentication status.",
    ],
    stack: [
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "JWT"
    ],
  },
    {
    title: "Profile Website",
    url: "", 
    description: "This personal portfolio website showcases my projects and skills. Built using Next.js, React, and TailwindCSS, the site is hosted on Firebase and incorporates Firebase Functions for dynamic interaction.",
    descriptionList: [
      "Designed and developed responsive, mobile-friendly components for seamless browsing",
      "Leveraged Next.js routing for efficient URL management and navigation",
      "Integrated Firebase Functions to handle HTTP requests, enabling dynamic functionality from static pages",
      "Crafted a visually appealing and user-friendly interface using TailwindCSS"
    ],
    stack: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "TailwindCSS",
      "Firebase",
    ],
  },
];