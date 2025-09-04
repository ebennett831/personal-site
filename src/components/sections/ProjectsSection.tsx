import { Project } from '@/types';
import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/ui/ProjectCard';

interface ProjectsSectionProps {
  projects: Project[];
}

/**
 * ProjectsSection Component - Black Box for Projects Display
 * 
 * Purpose: Displays all projects in a grid layout
 * Interface: Takes array of Project objects
 * Replaceable: Grid layout and section styling can change without affecting project cards
 */
export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section id="projects" className="bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          A showcase of my technical projects, from 3D graphics rendering to VR applications
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
