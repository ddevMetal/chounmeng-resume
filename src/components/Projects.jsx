import Section, { SectionHeader } from './Section';
import { projects } from '../data/resume';

function ArrowIcon() {
  return (
    <svg
      width="13" height="13"
      viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2.5"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader tag="What I've Built" title="Projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map(({ icon, name, description, github, org }) => (
          <div
            key={name}
            className="flex flex-col bg-cv-card border border-cv-teal/20 rounded-xl p-6 gap-3 transition-all duration-300 hover:border-cv-teal hover:-translate-y-1.5 hover:shadow-teal-md"
          >
            <span className="text-3xl leading-none">{icon}</span>
            <p className="text-cv-bright font-bold text-base">{name}</p>
            <p className="text-cv-muted text-sm leading-relaxed flex-1">{description}</p>

            <div className="border-t border-cv-teal/10 pt-4 mt-auto">
              {github ? (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cv-teal text-xs font-bold hover:gap-3 hover:text-cv-bright transition-all duration-200"
                >
                  View on GitHub <ArrowIcon />
                </a>
              ) : (
                <p className="text-cv-muted text-xs">{org}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
