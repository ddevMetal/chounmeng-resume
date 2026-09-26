import Section from './Section';
import { experience } from '../data/resume';

export default function Experience() {
  return (
    <Section id="experience" number="04" label="Experience" title="Work history" split>
      <div className="border-b border-cv-deep">
        {experience.map(({ role, company, period, bullets, note }) => {
          // Roles without bullets are shown in a compact style (older, lower-priority roles)
          const compact = !bullets || bullets.length === 0;
          return (
            <div
              key={`${company}-${role}`}
              className={`grid grid-cols-1 md:grid-cols-[160px_minmax(0,1fr)] gap-1 md:gap-8 border-t border-cv-deep ${compact ? 'py-5' : 'py-6 md:py-7'}`}
            >
              <p className="font-mono text-xs md:text-sm text-cv-muted md:pt-1">{period}</p>
              <div className="flex flex-col gap-1.5">
                <p className={compact ? 'text-cv-text font-semibold' : 'text-cv-bright text-lg font-semibold'}>{role}</p>
                <p className="text-cv-muted text-sm">{company}</p>

                {/* Bullet points: only drawn if this role has them */}
                {!compact && (
                  <ul className="mt-2 list-disc pl-5 space-y-1.5 text-cv-text text-[0.95rem] leading-relaxed">
                    {bullets.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                )}

                {/* Single plain line: used for older, lower-priority roles */}
                {note && <p className="mt-1 text-cv-muted text-sm leading-relaxed">{note}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
