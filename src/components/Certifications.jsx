import Section, { SectionHeader } from './Section';
import { certifications } from '../data/resume';

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader tag="Credentials" title="Certifications" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map(({ icon, name, date, status }) => (
          <div
            key={name}
            className="flex items-start gap-4 bg-cv-card border border-cv-teal/20 rounded-xl p-5 transition-all duration-300 hover:border-cv-teal hover:-translate-y-1 hover:shadow-teal-sm"
          >
            <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="text-cv-bright font-semibold text-sm">{name}</p>
                {status === "in_progress" && (
                  <span className="text-[10px] font-medium uppercase tracking-wide text-amber-400 border border-amber-400/40 rounded-full px-2 py-0.5">
                    In Progress
                  </span>
                )}
              </div>
              <p className="text-cv-teal text-xs font-medium">{date}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
