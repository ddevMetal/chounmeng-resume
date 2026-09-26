import Section from './Section';
import { summary } from '../data/resume';

export default function Summary() {
  return (
    <Section id="summary" number="01" label="Summary" title={summary.heading} split>
      <div className="flex flex-col">
        <p className="text-cv-bright text-base md:text-lg leading-relaxed mb-5">{summary.tagline}</p>

        {/* Only drawn when intro has text */}
        {summary.intro && <p className="text-cv-text leading-relaxed mb-5">{summary.intro}</p>}

        {/* One row per highlight: label left, text right (stacked on phones) */}
        <dl className="border-b border-cv-deep">
          {summary.highlights.map((h) => (
            <div
              key={h.label}
              className="grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)] gap-1 md:gap-8 py-4 md:py-5 border-t border-cv-deep"
            >
              <dt className="font-mono text-xs md:text-sm text-cv-muted md:pt-0.5">{h.label}</dt>
              <dd className="text-cv-text text-[0.95rem] leading-relaxed">{h.text}</dd>
            </div>
          ))}
        </dl>

        <p className="text-cv-muted leading-relaxed mt-5">{summary.closing}</p>
      </div>
    </Section>
  );
}
