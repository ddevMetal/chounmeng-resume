import { personal } from '../data/resume';

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  );
}

// Outline button style shared by LinkedIn and GitHub
const outlineBtn =
  'inline-flex items-center justify-center h-12 px-5 rounded-lg border border-cv-deep text-cv-bright text-sm font-medium hover:border-cv-teal transition-colors duration-200';

// Faint dot grid behind the hero (pure CSS, no image file)
const dotGrid = {
  backgroundImage: 'radial-gradient(#1e272f 1px, transparent 1px)',
  backgroundSize: '28px 28px',
};

export default function Hero() {
  return (
    <section id="hero" style={dotGrid} className="border-b border-cv-deep">
      <div className="max-w-6xl mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">

        {/* ── Left: text ── */}
        <div className="flex-1 flex flex-col gap-6 animate-fade-up">
          <div className="flex items-center gap-4">
            {/* Optional photo: only shown if personal.photo is set in resume.js */}
            {personal.photo && (
              <img
                src={`${import.meta.env.BASE_URL}${personal.photo}`}
                alt={personal.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-cv-teal flex-shrink-0"
              />
            )}
            <p className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-cv-deep bg-cv-card text-cv-text text-xs md:text-sm">
              <span className="w-2 h-2 rounded-full bg-cv-teal flex-shrink-0" aria-hidden="true" />
              {personal.badge}
            </p>
          </div>

          <h1 className="font-display text-cv-bright font-bold leading-[0.98] tracking-tight text-5xl sm:text-6xl lg:text-7xl">
            {personal.name}
          </h1>

          <p className="font-mono text-cv-teal text-sm md:text-base">{personal.title}</p>

          <p className="text-cv-muted text-base md:text-lg leading-relaxed max-w-2xl">{personal.intro}</p>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-lg bg-cv-teal text-cv-navy text-sm font-semibold hover:brightness-110 transition"
            >
              <EmailIcon /> Get in touch
            </a>
            <div className="grid grid-cols-2 sm:flex gap-3">
              <a href={personal.linkedin.url} target="_blank" rel="noopener noreferrer" className={outlineBtn}>LinkedIn</a>
              <a href={personal.github.url} target="_blank" rel="noopener noreferrer" className={outlineBtn}>GitHub</a>
            </div>
          </div>
        </div>

        {/* ── Right: terminal card (rows come from personal.whoami) ── */}
        <div className="w-full lg:w-[400px] flex-shrink-0 rounded-xl border border-cv-deep bg-cv-card overflow-hidden font-mono animate-fade-up-2">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-cv-deep text-xs text-cv-muted">
            <span className="w-2.5 h-2.5 rounded-full bg-cv-deep" aria-hidden="true" />
            <span className="w-2.5 h-2.5 rounded-full bg-cv-deep" aria-hidden="true" />
            <span className="w-2.5 h-2.5 rounded-full bg-cv-deep" aria-hidden="true" />
            <span className="pl-2">~/whoami</span>
          </div>
          <div className="p-5 md:p-6 flex flex-col gap-3 text-[0.8rem] md:text-sm">
            <p className="text-cv-muted">$ cat profile.txt</p>
            <dl className="grid grid-cols-[88px_minmax(0,1fr)] gap-y-2.5">
              {personal.whoami.map(({ key, value }) => (
                <div key={key} className="contents">
                  <dt className="text-cv-muted">{key}</dt>
                  <dd className="text-cv-bright">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="flex items-center gap-2 text-cv-teal">
              <span>$</span>
              <span className="w-2 h-4 bg-cv-teal animate-pulse" aria-hidden="true" />
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
