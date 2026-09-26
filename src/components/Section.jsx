import { useReveal } from '../hooks/useReveal';

/**
 * Section heading: small numbered label ("01 / Summary") above a big title.
 *   number: "01", "02", ...
 *   label:  short section name
 *   title:  the big heading
 *   note:   optional small grey line under the title
 */
export function SectionHeader({ number, label, title, note }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-mono text-[0.8rem] text-cv-teal">
        {number} / {label}
      </p>
      <h2 className="font-display text-cv-bright text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
        {title}
      </h2>
      {note && <p className="text-cv-muted text-sm">{note}</p>}
    </div>
  );
}

/**
 * Wraps every section: fade-in on scroll, standard width, divider line.
 *   split = true  → heading on the left, content on the right (desktop); stacked on phones
 *   split = false → heading on top, content full width underneath
 */
export default function Section({ id, number, label, title, note, split = false, children }) {
  const [ref, visible] = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      className={`border-b border-cv-deep py-16 md:py-24 transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div
        className={`max-w-6xl mx-auto px-5 md:px-10 lg:px-16
          ${split
            ? 'grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-8 lg:gap-16'
            : 'flex flex-col gap-10'}`}
      >
        <SectionHeader number={number} label={label} title={title} note={note} />
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
