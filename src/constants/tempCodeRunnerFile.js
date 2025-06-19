import { h1 } from "framer-motion/client";



import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  FOOD,
  PLANT,
} from "../assets";

// Use FOOD and PLANT as image sources

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Python developer",
    icon: backend,
  },
  {
    title: "Data Analysis ",
    icon: creator,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
 
];

const experiences = [
    {
        title: "INTERN",
        company_name: "Anudip Foundation",
        icon: starbucks,
        iconBg: "#383E56",
        date: "(Jul 2024 - Aug 2024)",
        points: [
            "Utilized Python libraries such as Pandas, NumPy, Matplotlib, and Seaborn for data cleaning, manipulation, and visualization.",
            "Gained hands-on experience in data analysis & project management, working on Uber Data Analysis and creating Power BI dashboards using Python (Pandas, NumPy, Matplotlib, Seaborn)",
            "Created insightful visualizations like heatmaps, bar charts, and time-based analyses to identify peak ride hours, popular destinations, and fare trends.",
        ],
    },
    {
        title: "Learner|ML Course",
        company_name: "Soft Pro India",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jun 2024 - Jul 2024",
        points: [
            "Applied Pandas for large dataset manipulation, data aggregation, and exploratory data analysis (EDA).",
            "Enhanced practical knowledge in debugging, code optimization, and real-time problem-solving",
            "Gained experience in project documentation, debugging, and optimizing Python scripts for better performance and readability.",
        ],
    },
    {
        title: "Intern",
        company_name: "scyn",
        icon: shopify,
        iconBg: "#383E56",
        date: "Feb 2023 - Mar 2023",
        points: [
            "Designed and developed multiple web applications including a URL shortener, resume builder, landing page, chatbot messenger",
            "and an online code editor. Focused on creating responsive, user-friendly interfaces using modern web technologies like React,",
            "Tailwind CSS, and JavaScript. Gained hands-on experience in real-time messaging, PDF generation, dynamic UI design, and browser-based development tools.",
        ],
    },
];

const Achievements = [
  {

 Achievements: "Participating in the Smart India Hackathon 2023 was an incredible experience where I collaborated with talented peers to solve real-world challenges. It enhanced my problem-solving skills, teamwork, and ability to build innovative tech solutions under pressure.",
  name: "Manish ",
  designation: "Participant--Bachelor of Technology Student",
  company: "Smart India Hackathon 2023, Chandigarh Group of Colleges, Mohali",
  image: "https://randomuser.me/api/portraits/men/4.jpg"
},
  {
  Achievements: "Completing the Machine Learning Certification gave me hands-on experience in data preprocessing, model training, and real-world machine learning projects. It boosted my ability to build data-driven solutions with confidence.",
  name: "Manish Vishnoi",
  designation: "Bachelor of Technology Student",
  company: "ABES Institute of Technology, Ghaziabad",
  image: "https://randomuser.me/api/portraits/men/4.jpg"
},
  {
  Achievements: "Completing the Data Visualization-1 course by Anudip Foundation boosted my ability to turn complex datasets into clear, actionable insights. It was a valuable 120-hour learning journey where I earned an 'A' grade, strengthening my skills in data storytelling and visualization tools.",
  name: "Manish-vishnoi",
  designation: "Participant--Bachelor of Technology Student",
  company: "Anudip Foundation Intern",
  image: "https://randomuser.me/api/portraits/men/5.jpg"
},
];

const projects = [
  {
    name: "Uber Data Analysis",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "python/Pandas",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/manish569975/Data_Visualization/blob/master/uber.ipynb",
  },
  {
    name: "Food website",
    description:
      "Web application that enables users to search for food ordering website using React with clean UI and dynamic menus",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html/css/javascript",
        color: "green-text-gradient",
      },
      {
        name: "react-icons",
        color: "pink-text-gradient",
      },
    ],
    image: FOOD,
    source_code_link: "https://github.com/manish569975/food-site-website.git",
  },
  {
    name: "PLANT disease detaction system",
    description:
      "A Machine Learning system to detect plant diseases from leaf images.",

    tags: [
      {
        name: "python/AI/ML",
        color: "blue-text-gradient",
      },
      {
        name: "ANN/CNN",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient", 
      },
    ],
    image: PLANT,
    source_code_link: "https://github.com/manish569975/plant-disease.git",
  },
];

export { services, technologies, experiences, Achievements, projects };
