/**
 * Home Page - Main Portfolio Site
 * 
 * Architecture: Modular black-box components with clean data flow
 * Each section is self-contained and replaceable
 * Data flows from central source through clean interfaces
 */

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ExtracurricularsSection } from '@/components/sections/ExtracurricularsSection';
import { ContactSection } from '@/components/sections/ContactSection';

// Data imports - single source of truth
import { 
  personalInfo, 
  education, 
  projects, 
  experiences, 
  skills, 
  extracurriculars 
} from '@/data/portfolio';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Fixed navigation */}
      <Header />
      
      {/* Main content sections */}
      <main>
        <Hero personalInfo={personalInfo} />
        <AboutSection education={education} skills={skills} />
        <ProjectsSection projects={projects} />
        <ExperienceSection experiences={experiences} />
        <ExtracurricularsSection activities={extracurriculars} />
        <ContactSection personalInfo={personalInfo} />
      </main>
      
      {/* Site footer */}
      <Footer />
    </div>
  );
}
