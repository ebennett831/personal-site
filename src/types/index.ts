// Core primitive data types for the personal site
// These are the fundamental data structures that flow through our system

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  github: string;
  location?: string;
  aboutMe: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  status: 'completed' | 'in-progress' | 'planned';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  responsibilities: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  graduationDate: string;
  gpa?: string;
  relevantCoursework: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ExtracurricularActivity {
  id: string;
  name: string;
  role?: string;
  timeframe: string;
  description: string;
}

// Component prop interfaces
export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export interface CardProps {
  className?: string;
  children: React.ReactNode;
}
