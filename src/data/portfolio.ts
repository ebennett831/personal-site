import { PersonalInfo, Project, Experience, Education, Skill, ExtracurricularActivity } from '@/types';

// Personal Information (Single Source of Truth)
export const personalInfo: PersonalInfo = {
  name: "Ethan Bennett",
  email: "ethanjb500@gmail.com",
  phone: "(609) 819-5929",
  github: "https://github.com/ebennett831",
  aboutMe: "Computer Science student with a strong academic foundation in algorithms, computational modeling, and simulation. Experienced in building interactive systems and collaborating on multidisciplinary projects that combine programming, mathematics, and design. Excited to expand my skills by contributing to research in fusion energy and plasma physics, and eager to apply computational approaches to real world scientific challenges."
};

// Education Data
export const education: Education = {
  id: "arcadia-cs",
  institution: "Arcadia University",
  degree: "Bachelor of Science in Computer Science",
  location: "Glenside, PA",
  graduationDate: "Expected May 2028",
  gpa: "3.80",
  relevantCoursework: [
    "Data Structures",
    "Design & Analysis of Algorithms", 
    "Database Management System Design",
    "Computer Organization & Architecture",
    "Linear Algebra"
  ]
};

// Projects Data
export const projects: Project[] = [
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
    category: "Programming & Math",
    items: ["Java", "Python", "3D Linear Algebra", "Algorithmic Design", "Numerical Computation"]
  },
  {
    category: "Tools & Technologies", 
    items: ["Unreal Engine (Blueprints)", "Java Swing UI", "Git/GitHub", "Version Control", "Collaborative Software Development"]
  },
  {
    category: "Applied Systems",
    items: ["Real-time Rendering", "Modular Architecture", "Performance Optimization", "Simulation Concepts"]
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
