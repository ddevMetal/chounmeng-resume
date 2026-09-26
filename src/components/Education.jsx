import Section, { SectionHeader } from './Section';
import { education } from '../data/resume';

export default function Education() {
  return (
    <Section id="education">
      <SectionHeader tag="Academic Background" title="Education" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {education.map(({ degree, school, period, coursework }) => (
          <div
            key={degree}
            className={`relative overflow-hidden ${coursework ? 'sm:col-span-2 lg:col-span-3' : ''} bg-cv-card border border-cv-teal/20 rounded-xl p-5 pl-6 transition-all duration-300 hover:border-cv-teal hover:-translate-y-1 hover:shadow-teal-md group`}
          >
            {/* Left accent bar — slides in on hover */}
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 bottom-0 w-[3px] bg-cv-teal rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <p className="text-cv-bright font-bold text-base mb-1">{degree}</p>
            <p className="text-cv-teal text-sm font-medium mb-1">{school}</p>
            <p className="text-cv-muted text-xs">{period}</p>

            {/* Key coursework: only drawn if the degree has it */}
            {coursework && coursework.length > 0 && (
              <div className="mt-4">
                <p className="text-cv-teal text-[0.7rem] font-bold tracking-[0.14em] uppercase mb-2">Key coursework</p>
                <ul className="list-disc pl-5 space-y-1 text-cv-text text-sm leading-relaxed">
                  {coursework.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
