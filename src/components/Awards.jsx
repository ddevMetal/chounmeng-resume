import Section, { SectionHeader } from './Section';
import { awards } from '../data/resume';

export default function Awards() {
  return (
    <Section id="awards">
      <SectionHeader tag="Recognition" title="Awards" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {awards.map(({ icon, name, meta }) => (
          <div
            key={name}
            className="flex items-center gap-4 bg-cv-card border border-cv-teal/20 rounded-xl px-5 py-4 transition-all duration-300 hover:border-cv-teal hover:translate-x-1.5 hover:shadow-teal-sm"
          >
            <span className="text-2xl flex-shrink-0">{icon}</span>
            <div>
              <p className="text-cv-text font-semibold text-sm">{name}</p>
              <p className="text-cv-teal text-xs mt-0.5">{meta}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
