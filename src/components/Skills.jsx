import Section, { SectionHeader } from './Section';
import { skills } from '../data/resume';

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader tag="What I Know" title="Skills" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map(({ category, icon, items }) => (
          <div
            key={category}
            className="bg-cv-card border border-cv-teal/20 rounded-xl p-5 transition-all duration-300 hover:border-cv-teal hover:-translate-y-1 hover:shadow-teal-md"
          >
            <p className="text-cv-teal text-[0.7rem] font-bold tracking-[0.14em] uppercase mb-4">
              {icon} {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map(item => (
                <span
                  key={item}
                  className="bg-cv-teal/10 border border-cv-teal/20 text-cv-text text-[0.75rem] font-medium px-3 py-1 rounded-full cursor-default transition-all duration-200 hover:bg-cv-teal hover:border-cv-teal hover:text-cv-navy hover:-translate-y-0.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
