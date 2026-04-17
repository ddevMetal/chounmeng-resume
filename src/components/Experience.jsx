import Section, { SectionHeader } from './Section';
import { experience } from '../data/resume';

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader tag="Work History" title="Experience" />

      {/* Timeline container */}
      <div className="relative flex flex-col gap-5 pl-11">

        {/* Vertical line */}
        <div
          aria-hidden="true"
          className="absolute left-[9px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-cv-teal to-transparent"
        />

        {experience.map(({ role, company, period }) => (
          <div
            key={`${company}-${role}`}
            className="relative bg-cv-card border border-cv-teal/20 rounded-xl px-6 py-5 transition-all duration-300 hover:border-cv-teal hover:translate-x-1.5 hover:shadow-teal-sm"
          >
            {/* Timeline dot */}
            <span
              aria-hidden="true"
              style={{ left: '-2.19rem' }}
              className="absolute top-5 w-3 h-3 rounded-full bg-cv-teal border-2 border-cv-navy shadow-[0_0_0_3px_rgba(100,255,218,0.18),0_0_10px_rgba(100,255,218,0.35)]"
            />

            <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
              <span className="text-cv-bright font-bold text-base">{role}</span>
              <span className="text-cv-teal text-[0.74rem] font-semibold bg-cv-teal/10 px-3 py-1 rounded-full whitespace-nowrap">
                {period}
              </span>
            </div>
            <p className="text-cv-muted text-sm">{company}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
