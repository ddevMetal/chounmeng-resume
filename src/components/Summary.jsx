import Section, { SectionHeader } from './Section';
import { summary } from '../data/resume';

export default function Summary() {
  return (
    <Section id="summary">
      <SectionHeader tag="About Me" title="Professional Summary" />
      <blockquote className="border-l-[3px] border-cv-teal bg-cv-card rounded-r-xl px-6 py-5 max-w-3xl space-y-4">
        <p className="text-cv-bright font-semibold leading-[1.85] text-[0.97rem]">{summary.tagline}</p>
        <p className="text-cv-text leading-[1.95] text-[0.97rem]">{summary.intro}</p>
        <ul className="space-y-3">
          {summary.highlights.map((h) => (
            <li key={h.label} className="text-cv-text leading-[1.95] text-[0.97rem]">
              <span className="text-cv-bright font-semibold">{h.label}: </span>
              {h.text}
            </li>
          ))}
        </ul>
        <p className="text-cv-text leading-[1.95] text-[0.97rem]">{summary.closing}</p>
      </blockquote>
    </Section>
  );
}
