import { Project } from '@/types';
import { Card } from '@/components/ui/Card';

interface ProjectCardProps {
  project: Project;
}

/**
 * ProjectCard Component - Black Box for Individual Project Display
 * 
 * Purpose: Displays a single project's information in a consistent format
 * Interface: Takes Project object - doesn't know about layout context
 * Replaceable: Card design can be completely changed without affecting project data
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const statusColors = {
    'completed': 'bg-green-600',
    'in-progress': 'bg-yellow-600', 
    'planned': 'bg-blue-600'
  };

  const statusLabels = {
    'completed': 'Completed',
    'in-progress': 'In Progress',
    'planned': 'Planned'
  };

  return (
    <Card className="h-full flex flex-col">
      {/* Project Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <span className={`px-2 py-1 rounded text-xs font-medium text-white ${statusColors[project.status]}`}>
          {statusLabels[project.status]}
        </span>
      </div>

      {/* Project Description */}
      <p className="text-gray-300 mb-4 flex-grow">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Highlights */}
      {project.highlights.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-400 mb-2">Key Highlights:</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Links */}
      <div className="flex gap-3 mt-auto pt-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        )}
        
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </Card>
  );
}
