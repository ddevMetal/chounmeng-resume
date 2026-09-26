import Section from './Section';
import { beyondWork } from '../data/resume';

export default function BeyondWork() {
  return (
    <Section id="beyond" number="07" label="Beyond work" title="Off the clock">
      {/* 1 column on phones, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {beyondWork.map(({ label, title, text, items }) => (
          <div key={title} className="flex flex-col gap-3 p-6 rounded-xl border border-cv-deep bg-cv-card">
            <p className="font-mono text-xs uppercase tracking-wider text-cv-teal">{label}</p>
            <p className="font-display text-cv-bright text-xl font-semibold">{title}</p>

            {/* A sentence, a list, or both */}
            {text && <p className="text-cv-muted text-sm leading-relaxed">{text}</p>}
            {items && items.length > 0 && (
              <ul className="list-disc pl-4 space-y-1 text-cv-muted text-sm leading-relaxed">
                {items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
