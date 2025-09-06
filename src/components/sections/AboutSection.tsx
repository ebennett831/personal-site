import { Education } from '@/types';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

interface AboutSectionProps {
  education: Education;
}

/**
 * AboutSection Component - Black Box for About/Education Information
 * 
 * Purpose: Displays personal introduction and educational background
 * Interface: Takes education data only
 * Replaceable: Layout and styling can change without affecting other sections
 * 
 * Black Box Principles:
 * - Single responsibility: Only handles about/education content
 * - Skills moved to dedicated SkillsSection for better separation of concerns
 * - Clean interface: Simple education data input
 */
export function AboutSection({ education }: AboutSectionProps) {
  return (
    <Section id="about" className="bg-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          About Me
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Computer Science student passionate about algorithms, graphics, and interactive systems
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Education */}
        <Card>
          <h3 className="text-2xl font-semibold text-white mb-4">Education</h3>
          <div className="space-y-3">
            <div>
              <h4 className="text-lg font-medium text-blue-400">{education.institution}</h4>
              <p className="text-gray-300">{education.degree}</p>
              <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-400 mt-1">
                <span>{education.location}</span>
                <span>{education.graduationDate}</span>
              </div>
              {education.gpa && (
                <p className="text-sm text-gray-400 mt-1">GPA: {education.gpa}</p>
              )}
            </div>
            
            {education.relevantCoursework.length > 0 && (
              <div className="mt-4">
                <h5 className="text-sm font-medium text-gray-400 mb-2">Relevant Coursework:</h5>
                <div className="flex flex-wrap gap-2">
                  {education.relevantCoursework.map((course) => (
                    <span 
                      key={course}
                      className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </Section>
  );
}
