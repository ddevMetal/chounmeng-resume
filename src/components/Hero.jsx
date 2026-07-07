import { personal } from '../data/resume';

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.004 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .78 0 1.73v20.54C0 23.22.8 24 1.78 24h20.44C23.2 24 24 23.22 24 22.27V1.73C24 .78 23.2 0 22.22 0z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  );
}

const btnBase =
  'inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-cv-teal border border-cv-teal/20 rounded-lg hover:bg-cv-teal/10 hover:border-cv-teal hover:-translate-y-0.5 transition-all duration-200';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-cv-navy">
      <div className="max-w-5xl mx-auto px-5 md:px-8 w-full py-24 md:py-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 lg:gap-16">

          {/* ── Left: text ── */}
          <div className="flex-1">
            <p className="text-cv-teal text-sm font-medium tracking-widest mb-3 animate-fade-up">
              👋 Hi, I'm
            </p>

            <h1 className="text-cv-bright font-black leading-[1.05] tracking-tight mb-3 text-5xl sm:text-6xl lg:text-7xl animate-fade-up-1">
              Teo Choun&nbsp;Meng
            </h1>

            <p className="text-cv-muted text-xl sm:text-2xl font-light mb-6 animate-fade-up-2">
              {personal.title}
            </p>

            <p className="text-cv-muted leading-relaxed mb-8 max-w-md animate-fade-up-3">
              CS (Big Data) graduate from SIM/UOW, pivoting into cybersecurity —
              targeting SOC and security operations roles. Backed by a decade of
              cross-industry leadership and a foundation in data analytics and cloud security.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-up-4">
              <a href={personal.github.url}   target="_blank" rel="noopener noreferrer" className={btnBase}>
                <GithubIcon /> GitHub
              </a>
              <a href={personal.linkedin.url} target="_blank" rel="noopener noreferrer" className={btnBase}>
                <LinkedInIcon /> LinkedIn
              </a>
              <a href={`mailto:${personal.email}`} className={btnBase}>
                <EmailIcon /> Email
              </a>
            </div>
          </div>

          {/* ── Right: QR placeholder ── */}
          <div className="flex flex-col items-center gap-2 self-start md:self-center animate-fade-up-4">
            <img
              src="/chounmeng-resume/qr.png"
              alt="QR Code — ddevmetal.github.io/chounmeng-resume"
              width="112"
              height="112"
              className="rounded-xl border border-cv-teal/20 hover:border-cv-teal transition-colors duration-300"
            />
            <p className="text-[0.62rem] text-cv-muted text-center leading-relaxed">
              ddevmetal<br />.github.io
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
