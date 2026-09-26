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

// One card per project
function ProjectCard({ icon, name, meta, description, role, tags, github, note }) {
  return (
    <div className="flex flex-col bg-cv-card border border-cv-teal/20 rounded-xl p-6 gap-3 transition-all duration-300 hover:border-cv-teal hover:-translate-y-1.5 hover:shadow-teal-md">
      <div className="flex items-center gap-3">
        <span className="text-2xl leading-none">{icon}</span>
        <span className="text-cv-muted text-xs">{meta}</span>
      </div>
      <p className="text-cv-bright font-bold text-base">{name}</p>
      <p className="text-cv-muted text-sm leading-relaxed">{description}</p>

      {/* Your part in a team project: only drawn if "role" is set */}
      {role && (
        <p className="text-cv-text text-sm leading-relaxed">
          <span className="text-cv-teal font-semibold">My role: </span>
          {role}
        </p>
      )}

      {/* Tools used */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="bg-cv-teal/10 text-cv-text text-[0.7rem] font-medium px-2.5 py-0.5 rounded-md">
              {t}
            </span>
          ))}
        </div>
      )}

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
          <p className="text-cv-muted text-xs">{note}</p>
        )}
      </div>
    </div>
  );
}

// Heading + grid for one group of projects
function ProjectGroup({ title, items }) {
  if (items.length === 0) return null;
  return (
    <div className="mb-10 last:mb-0">
      <p className="text-cv-teal text-[0.7rem] font-bold tracking-[0.14em] uppercase mb-4">{title}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((p) => <ProjectCard key={p.name} {...p} />)}
      </div>
    </div>
  );
}

export default function Projects() {
  const practical = projects.filter((p) => p.type === 'practical');
  const academic  = projects.filter((p) => p.type === 'academic');
  return (
    <Section id="projects">
      <SectionHeader tag="What I've Built" title="Projects" />
      <ProjectGroup title="Practical" items={practical} />
      <ProjectGroup title="Academic" items={academic} />
    </Section>
  );
}
