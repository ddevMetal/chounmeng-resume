import Section, { SectionHeader } from './Section';
import { skills, learningNext } from '../data/resume';

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader tag="What I Use" title="Skills" />

      {/* One card per group; each row = skill (left) + where it was used (right) */}
      <div className="flex flex-col gap-4">
        {skills.map(({ category, icon, items }) => (
          <div
            key={category}
            className="bg-cv-card border border-cv-teal/20 rounded-xl p-5 transition-all duration-300 hover:border-cv-teal hover:shadow-teal-md"
          >
            <p className="text-cv-teal text-[0.7rem] font-bold tracking-[0.14em] uppercase mb-3">
              {icon} {category}
            </p>
            <ul className="divide-y divide-cv-teal/10">
              {items.map(({ name, evidence }) => (
                <li
                  key={name}
                  className="py-2.5 grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-x-6 gap-y-0.5"
                >
                  <span className="text-cv-bright text-sm font-semibold">{name}</span>
                  <span className="text-cv-muted text-sm">{evidence}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Learning next: only drawn if the list has items */}
      {learningNext && learningNext.length > 0 && (
        <p className="mt-5 text-sm text-cv-muted">
          <span className="text-cv-teal font-semibold">Learning next: </span>
          {learningNext.join(' · ')}
        </p>
      )}
    </Section>
  );
}
