import Section from './Section';
import { certifications } from '../data/resume';

// Label text and colour for each status value used in resume.js
const STATUS_STYLES = {
  certified:   { label: 'Certified',   cls: 'bg-cv-teal text-cv-navy border-cv-teal' },
  completed:   { label: 'Completed',   cls: 'text-cv-teal border-cv-teal/60' },
  in_progress: { label: 'In progress', cls: 'text-amber-400 border-amber-400/60' },
  upcoming:    { label: 'Upcoming',    cls: 'text-cv-muted border-cv-muted/50 border-dashed' },
  course:      { label: 'Course',      cls: 'text-cv-muted border-cv-muted/50' },
};

export default function Certifications() {
  return (
    <Section id="certifications" number="02" label="Certifications & Training" title="Credentials">
      {/* 1 column on phones, 2 on tablets, 3 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {certifications.map(({ name, date, status }) => {
          const style = STATUS_STYLES[status];
          const highlight = status === 'certified';
          return (
            <div
              key={name}
              className={`flex flex-col gap-3 p-6 rounded-xl border transition-colors duration-300
                ${highlight ? 'border-cv-teal bg-cv-card' : 'border-cv-deep bg-cv-card hover:border-cv-muted/40'}`}
            >
              {style && (
                <span className={`self-start font-mono text-[0.7rem] px-2.5 py-1 rounded-md border ${style.cls}`}>
                  {style.label}
                </span>
              )}
              <p className="font-display text-cv-bright text-lg md:text-xl font-semibold leading-snug">{name}</p>
              <p className="text-cv-muted text-sm leading-relaxed">{date}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
