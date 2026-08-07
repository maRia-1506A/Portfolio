import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  diu,
  campusLostFound,
  studentGrades,
  safesignal,
  diceGame,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "learning",
    title: "Learning",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Database & SQL",
    icon: web,
  },
  {
    title: "Data Science Learner",
    icon: creator,
  },
  {
    title: "Problem Solver",
    icon: mobile,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Bachelor of Software Engineering",
    company_name: "Daffodil International University",
    icon: diu,
    iconBg: "#383E56",
    date: "2023 – Present",
    points: [
      "Studying core Software Engineering concepts including data structures, algorithms, OOP, and software design.",
      "Building software applications with Python, Java, C++, SQL, and foundational web tools.",
      "Developing Python projects including games, database systems, and scripting tools.",
      "Currently exploring Machine Learning, Data Science, and Python libraries: Pandas, NumPy, and Scikit-learn.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Campus Lost & Found",
    description:
      "A university campus application designed to help students report, search, and recover misplaced items across campus grounds. Features item listing, status tracking, and reporting tools. (Work In Progress)",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "database",
        color: "green-text-gradient",
      },
      {
        name: "in-progress",
        color: "pink-text-gradient",
      },
    ],
    image: campusLostFound,
    source_code_link: "https://campus-lost-and-found-seven-ruby.vercel.app/",
  },
  {
    name: "Campus Market",
    description:
      "A student marketplace platform built to facilitate buying, selling, and trading study materials, textbooks, and campus essentials safely within the university community.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "database",
        color: "pink-text-gradient",
      },
    ],
    image: safesignal,
    source_code_link: "https://github.com/maRia-1506A/Campus_Market_Project",
  },
  {
    name: "BMI Calculator",
    description:
      "An intuitive health application that calculates Body Mass Index (BMI) based on height and weight metrics, providing health category classifications and visual feedback.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "logic",
        color: "green-text-gradient",
      },
      {
        name: "algorithm",
        color: "pink-text-gradient",
      },
    ],
    image: diceGame,
    source_code_link: "https://bmi-calculator-one-pi-70.vercel.app/",
  },
  {
    name: "SQL Database Queries",
    description:
      "A structured relational database project featuring complex SQL queries, database schema design, table relationships, aggregation, and database management tasks.",
    tags: [
      {
        name: "sql",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "database",
        color: "pink-text-gradient",
      },
    ],
    image: studentGrades,
    source_code_link: "https://github.com/maRia-1506A/SQL_PROJECT",
  },
];

export { services, technologies, experiences, testimonials, projects };
