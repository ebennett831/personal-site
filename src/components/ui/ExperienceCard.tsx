import { Experience } from '@/types';
import { Card } from '@/components/ui/Card';

interface ExperienceCardProps {
  experience: Experience;
}

/**
 * ExperienceCard Component - Black Box for Work Experience Display
 * 
 * Purpose: Displays work experience in a consistent format
 * Interface: Takes Experience object - doesn't care about surrounding layout
 * Replaceable: Can completely change styling without affecting experience data
 */
export function ExperienceCard({ experience }: ExperienceCardProps) {
  const formatDateRange = (startDate: string, endDate?: string) => {
    return endDate ? `${startDate} – ${endDate}` : `${startDate} – Present`;
  };

  return (
    <Card>
      {/* Company and Position */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-white mb-1">
          {experience.position}
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-400">
          <span className="font-medium text-blue-400">{experience.company}</span>
          <span className="text-sm">{experience.location}</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          {formatDateRange(experience.startDate, experience.endDate)}
        </p>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-4">
        {experience.description}
      </p>

      {/* Responsibilities */}
      {experience.responsibilities.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-2">Key Responsibilities:</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}
