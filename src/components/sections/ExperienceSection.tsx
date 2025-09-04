import { Experience } from '@/types';
import { Section } from '@/components/ui/Section';
import { ExperienceCard } from '@/components/ui/ExperienceCard';

interface ExperienceSectionProps {
  experiences: Experience[];
}

/**
 * ExperienceSection Component - Black Box for Experience Display
 * 
 * Purpose: Displays work experience in chronological order
 * Interface: Takes array of Experience objects
 * Replaceable: Layout can change without affecting individual experience cards
 */
export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <Section id="experience" className="bg-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Experience
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Leadership and mentoring experience with a focus on communication and organization
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </Section>
  );
}
