import { Skill } from '@/types';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

interface SkillsSectionProps {
  skills: Skill[];
}

/**
 * SkillsSection Component - Black Box for Technical Skills Display
 * 
 * Purpose: Displays technical skills organized by category
 * Interface: Takes array of skill categories with items
 * Replaceable: Entire skills display logic can be swapped without affecting other sections
 * 
 * Black Box Principles:
 * - Single responsibility: Only handles skills display
 * - Clean interface: Simple skills data array input
 * - Implementation agnostic: Can change layout/styling without breaking consumers
 */
export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <Section id="skills" className="bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Technical Skills
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I use to build amazing experiences
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skillCategory) => (
          <Card key={skillCategory.category}>
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              {skillCategory.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillCategory.items.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-2 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
