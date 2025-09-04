import { ExtracurricularActivity } from '@/types';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

interface ExtracurricularsSectionProps {
  activities: ExtracurricularActivity[];
}

/**
 * ExtracurricularsSection Component - Black Box for Activities Display
 * 
 * Purpose: Displays extracurricular activities and achievements
 * Interface: Takes array of ExtracurricularActivity objects
 * Replaceable: Can change layout without affecting activity data
 */
export function ExtracurricularsSection({ activities }: ExtracurricularsSectionProps) {
  return (
    <Section id="extracurriculars" className="bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Extracurriculars
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Building character and leadership through athletics and team commitment
        </p>
      </div>

      <div className="grid gap-6">
        {activities.map((activity) => (
          <Card key={activity.id}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <h3 className="text-xl font-semibold text-white">
                {activity.name}
              </h3>
              <span className="text-sm text-gray-400">{activity.timeframe}</span>
            </div>
            
            {activity.role && (
              <p className="text-blue-400 font-medium mb-2">{activity.role}</p>
            )}
            
            <p className="text-gray-300">{activity.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
