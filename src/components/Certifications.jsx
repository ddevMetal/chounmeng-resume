import Section, { SectionHeader } from './Section';
import { certifications } from '../data/resume';

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader tag="Credentials" title="Certifications" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map(({ icon, name, date }) => (
          <div
            key={name}
            className="flex items-start gap-4 bg-cv-card border border-cv-teal/20 rounded-xl p-5 transition-all duration-300 hover:border-cv-teal hover:-translate-y-1 hover:shadow-teal-sm"
          >
            <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
            <div>
              <p className="text-cv-bright font-semibold text-sm mb-1">{name}</p>
              <p className="text-cv-teal text-xs font-medium">{date}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
