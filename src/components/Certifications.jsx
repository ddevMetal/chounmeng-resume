import Section, { SectionHeader } from './Section';
import { certifications } from '../data/resume';

// Label text and colour for each status value used in resume.js
const STATUS_STYLES = {
  certified:   { label: 'Certified',   cls: 'text-cv-navy bg-cv-teal border-cv-teal' },
  completed:   { label: 'Completed',   cls: 'text-cv-teal border-cv-teal/40' },
  in_progress: { label: 'In Progress', cls: 'text-amber-400 border-amber-400/40' },
  upcoming:    { label: 'Upcoming',    cls: 'text-cv-muted border-cv-muted/40 border-dashed' },
  course:      { label: 'Course',      cls: 'text-cv-muted border-cv-muted/40' },
};

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader tag="Credentials" title="Certifications & Training" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map(({ icon, name, date, status }) => (
          <div
            key={name}
            className="flex items-start gap-4 bg-cv-card border border-cv-teal/20 rounded-xl p-5 transition-all duration-300 hover:border-cv-teal hover:-translate-y-1 hover:shadow-teal-sm"
          >
            <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="text-cv-bright font-semibold text-sm">{name}</p>
                {STATUS_STYLES[status] && (
                  <span className={`text-[10px] font-medium uppercase tracking-wide border rounded-full px-2 py-0.5 whitespace-nowrap ${STATUS_STYLES[status].cls}`}>
                    {STATUS_STYLES[status].label}
                  </span>
                )}
              </div>
              <p className="text-cv-teal text-xs font-medium">{date}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
