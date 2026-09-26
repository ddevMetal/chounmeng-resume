import Section from './Section';
import { projects } from '../data/resume';

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

// One card per project
function ProjectCard({ name, meta, description, role, tags, github, note }) {
  return (
    <div className="flex flex-col gap-3 p-6 rounded-xl border border-cv-deep bg-cv-card hover:border-cv-muted/40 transition-colors duration-300">
      <div className="flex items-start justify-between gap-3">
        <p className="font-mono text-xs text-cv-muted pt-1">{meta}</p>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on GitHub`}
            className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-lg border border-cv-deep text-cv-text hover:border-cv-teal hover:text-cv-teal transition-colors"
          >
            <ArrowIcon />
          </a>
        )}
      </div>

      <p className="font-display text-cv-bright text-xl font-semibold leading-snug">{name}</p>
      <p className="text-cv-muted text-sm leading-relaxed">{description}</p>

      {/* Your part in a team project: only drawn if "role" is set */}
      {role && (
        <p className="text-cv-text text-sm leading-relaxed">
          <span className="font-mono text-xs text-cv-teal">My role · </span>
          {role}
        </p>
      )}

      {/* Tools used */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-1">
          {tags.map((t) => (
            <span key={t} className="font-mono text-[0.7rem] text-cv-text bg-cv-deep px-2.5 py-1 rounded-md">{t}</span>
          ))}
        </div>
      )}

      {/* Small line when there is no link, e.g. "Private repository" */}
      {!github && note && <p className="font-mono text-xs text-cv-muted">{note}</p>}
    </div>
  );
}

// Group label + grid for one group of projects
function ProjectGroup({ title, items, columns }) {
  if (items.length === 0) return null;
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wider text-cv-muted mb-4">{title}</p>
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''} gap-4 md:gap-5`}>
        {items.map((p) => <ProjectCard key={p.name} {...p} />)}
      </div>
    </div>
  );
}

export default function Projects() {
  const practical = projects.filter((p) => p.type === 'practical');
  const academic  = projects.filter((p) => p.type === 'academic');
  return (
    <Section id="projects" number="05" label="Projects" title="What I've built">
      <div className="flex flex-col gap-10">
        <ProjectGroup title="Practical" items={practical} columns={2} />
        <ProjectGroup title="Academic"  items={academic}  columns={3} />
      </div>
    </Section>
  );
}
