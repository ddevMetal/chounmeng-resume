import Section from './Section';
import { education } from '../data/resume';

export default function Education() {
  return (
    <Section id="education" number="06" label="Education" title="Academic background" split>
      <div className="border-b border-cv-deep">
        {education.map(({ degree, school, period, coursework }) => (
          <div
            key={degree}
            className="grid grid-cols-1 md:grid-cols-[160px_minmax(0,1fr)] gap-1 md:gap-8 py-5 md:py-6 border-t border-cv-deep"
          >
            <p className="font-mono text-xs md:text-sm text-cv-muted md:pt-1">{period}</p>
            <div className="flex flex-col gap-1.5">
              <p className="text-cv-bright text-lg font-semibold">{degree}</p>
              <p className="text-cv-muted text-sm">{school}</p>

              {/* Key coursework: only drawn if the degree has it */}
              {coursework && coursework.length > 0 && (
                <div className="mt-3">
                  <p className="font-mono text-xs text-cv-teal mb-2">Key coursework</p>
                  <ul className="list-disc pl-5 space-y-1 text-cv-text text-sm leading-relaxed">
                    {coursework.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
