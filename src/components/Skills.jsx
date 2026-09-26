import Section from './Section';
import { skills, learningNext } from '../data/resume';

export default function Skills() {
  return (
    <Section id="skills" number="03" label="Skills" title="What I use" note="Each skill with where I used it." split>
      <div className="flex flex-col gap-9">
        {skills.map(({ category, items }) => (
          <div key={category}>
            <p className="font-mono text-xs uppercase tracking-wider text-cv-muted mb-2">{category}</p>
            {/* Each row = skill (left) + where it was used (right); stacked on phones */}
            <ul className="border-b border-cv-deep">
              {items.map(({ name, evidence }) => (
                <li
                  key={name}
                  className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-x-6 gap-y-0.5 py-3 border-t border-cv-deep"
                >
                  <span className="text-cv-bright text-sm md:text-[0.95rem] font-semibold">{name}</span>
                  <span className="text-cv-muted text-sm leading-relaxed">{evidence}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Learning next: only drawn if the list has items */}
        {learningNext && learningNext.length > 0 && (
          <p className="text-sm text-cv-muted leading-relaxed">
            <span className="font-mono text-cv-teal">Learning next · </span>
            {learningNext.join(' · ')}
          </p>
        )}
      </div>
    </Section>
  );
}
