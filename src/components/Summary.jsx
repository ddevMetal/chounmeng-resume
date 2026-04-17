import Section, { SectionHeader } from './Section';
import { summary } from '../data/resume';

export default function Summary() {
  return (
    <Section id="summary">
      <SectionHeader tag="About Me" title="Professional Summary" />
      <blockquote className="border-l-[3px] border-cv-teal bg-cv-card rounded-r-xl px-6 py-5 text-cv-text leading-[1.95] max-w-3xl text-[0.97rem]">
        {summary}
      </blockquote>
    </Section>
  );
}
