import { PersonalInfo, Project, Experience, Education, Skill, ExtracurricularActivity } from '@/types';

// Personal Information (Single Source of Truth)
export const personalInfo: PersonalInfo = {
  name: "Ethan Bennett",
  email: "ethanjb500@gmail.com",
  phone: "(609) 819-5929",
  github: "https://github.com/ebennett831",
  aboutMe: "Computer science student interested in data science, machine learning, and software engineering. I build projects across predictive modeling, web development, computer graphics, and interactive systems, and enjoy collaborative work that connects strong technical foundations with practical applications."
};

// Education Data
export const education: Education = {
  id: "arcadia-cs",
  institution: "Arcadia University",
  degree: "Bachelor of Science in Computer Science",
  location: "Glenside, PA",
  graduationDate: "Expected May 2028",
  gpa: "3.88",
  relevantCoursework: [
    "Introduction to Data Science",
    "Deep Learning",
    "Linear Algebra",
    "Discrete Structures",
    "Data Structures",
    "Design & Analysis of Algorithms",
    "Database Management System Design",
    "Operating Systems",
    "Computer Organization & Architecture",
    "Computer Ethics"
  ]
};

// Projects Data
export const projects: Project[] = [
  {
    id: "rocket-league-skillshot-classification",
    title: "Rocket League Skillshot Classification",
    description: "A machine learning project that classifies Rocket League gameplay sequences using gameplay telemetry and statistical feature engineering.",
    technologies: ["Python", "PyTorch", "Pandas", "NumPy", "Scikit-learn", "Seaborn"],
    githubUrl: "https://github.com/ebennett831/rocket-league-skillshot-classification",
    highlights: [
      "Developed a multiclass classifier across seven gameplay categories using 298 labeled sequences",
      "Engineered 84 numerical features from 18 raw variables",
      "Conducted exploratory data analysis and feature correlation analysis",
      "Achieved 85.3% test accuracy and a macro F1-score of 0.852"
    ],
    status: "completed"
  },
  {
    id: "cyberford",
    title: "CyberFord — AI-Enhanced Cybersecurity Education Platform",
    description: "A cybersecurity education platform designed to teach high school students through interactive lessons, AI-generated news summaries, and personalized review exercises.",
    technologies: ["Cybersecurity Education", "Interactive Learning", "Curriculum Development"],
    highlights: [
      "Collaborating with a professor and fellow student developers to develop educational curriculum",
      "Developing and integrating interactive learning materials that simplify technical cybersecurity topics and emphasize practical, hands-on learning",
      "Contributing to the organization, formatting, and presentation of technical educational content"
    ],
    status: "in-progress"
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    description: "A responsive personal portfolio website built with a modular component architecture and serverless cloud infrastructure.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Cloudflare Workers", "Cloudflare D1"],
    githubUrl: "https://github.com/ebennett831/personal-site",
    liveUrl: "https://bennettethan.com",
    highlights: [
      "Developed a responsive, interactive website with reusable components",
      "Implemented serverless contact form functionality and database integration",
      "Integrated Cloudflare Turnstile spam prevention and Discord webhook notifications"
    ],
    status: "completed"
  },
  {
    id: "vr-rehabilitation",
    title: "VR Rehabilitation Simulation",
    description: "Collaborating with students and professor to design a VR game for ACL surgery recovery using Unreal Engine.",
    technologies: ["Unreal Engine", "Blueprints", "VR Development"],
    highlights: [
      "Creating immersive environment requiring players to duck, step over, and navigate obstacles",
      "Encouraging controlled knee movement for physical therapy applications",
      "Developing on structured schedule for polished, functional prototype"
    ],
    status: "in-progress"
  },
  {
    id: "3d-renderer",
    title: "3D Graphics Renderer",
    description: "Real-time 3D pipeline using matrix transformations, barycentric rasterization, Z-buffering, lighting, and back-face culling.",
    technologies: ["Java", "Swing", "Linear Algebra", "Computer Graphics"],
    githubUrl: "https://github.com/ebennett831/3D-Rendering",
    highlights: [
      "Engineered complete 3D rendering pipeline from scratch",
      "Developed interactive first-person camera controls (yaw/pitch)",
      "Implemented modular shape composition and system optimization",
      "Applied advanced linear algebra and computational modeling"
    ],
    status: "in-progress"
  },
  {
    id: "minimax-games",
    title: "Tic-Tac-Toe & Connect Four with Minimax AI",
    description: "Board games with graphical interface, persistent scoring, and AI using Minimax with Alpha-Beta pruning.",
    technologies: ["Java", "Swing", "AI Algorithms", "Game Development"],
    githubUrl: "https://github.com/solabdullah5/GroupProject",
    highlights: [
      "Built complete graphical Java Swing interface",
      "Implemented AI using Minimax with Alpha–Beta pruning",
      "Optimized decision-tree search for efficient performance",
      "Added persistent score tracking functionality"
    ],
    status: "completed"
  }
];

// Experience Data
export const experiences: Experience[] = [
  {
    id: "eagles-landing-senior",
    company: "Eagle's Landing Day Camp",
    position: "Senior Counselor",
    location: "North Brunswick, NJ",
    startDate: "2023",
    endDate: "2024",
    description: "Leadership role managing groups of children while ensuring safety and engagement.",
    responsibilities: [
      "Mentored and managed groups of 10–12 children (ages 9–10)",
      "Ensured safety and engagement in all activities",
      "Coordinated daily schedules, activities, and logistics",
      "Built strong organizational and communication skills"
    ]
  },
  {
    id: "eagles-landing-junior",
    company: "Eagle's Landing Day Camp", 
    position: "Junior Counselor",
    location: "North Brunswick, NJ",
    startDate: "2022",
    description: "Entry-level counselor role supporting camp activities and child supervision.",
    responsibilities: [
      "Assisted senior counselors with daily activities",
      "Supervised children during recreational activities",
      "Maintained safe and fun environment for campers"
    ]
  },
  {
    id: "spotswood-aide",
    company: "Spotswood School After Care Program",
    position: "Aide",
    location: "Spotswood, NJ", 
    startDate: "Fall 2022",
    endDate: "Fall 2023",
    description: "Supporting children in structured after-school environment.",
    responsibilities: [
      "Supervised and supported children (ages 4–7)",
      "Assisted teachers with games and educational exercises", 
      "Facilitated group activities and maintained order"
    ]
  }
];

// Skills Data
export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "TypeScript"]
  },
  {
    category: "Data Science & Machine Learning",
    items: ["PyTorch", "Pandas", "NumPy", "Scikit-learn", "Seaborn", "Exploratory Data Analysis", "Feature Engineering", "Multiclass Classification"]
  },
  {
    category: "Web Development",
    items: ["Next.js", "React", "Tailwind CSS", "Serverless APIs", "Modular Architecture"]
  },
  {
    category: "Databases & Cloud Infrastructure",
    items: ["Cloudflare Workers", "Cloudflare D1", "Cloudflare Turnstile", "Discord Webhooks", "Database Design"]
  },
  {
    category: "Mathematics & Algorithms",
    items: ["3D Linear Algebra", "Algorithmic Design", "Numerical Computation", "Minimax", "Alpha-Beta Pruning", "Matrix Transformations", "Barycentric Rasterization", "Z-Buffering"]
  },
  {
    category: "Developer Tools & Game Development",
    items: ["Git/GitHub", "Version Control", "Unreal Engine (Blueprints)", "VR Development", "Java Swing UI", "Real-time Rendering", "Performance Optimization", "Simulation Concepts", "Collaborative Software Development"]
  }
];

// Extracurricular Activities
export const extracurriculars: ExtracurricularActivity[] = [
  {
    id: "lacrosse",
    name: "Arcadia University Men's Lacrosse Team",
    timeframe: "Fall 2024 – Present",
    description: "NCAA student-athlete balancing rigorous academics with athletics, developing resilience, teamwork, and time management in high-pressure environments."
  }
];
