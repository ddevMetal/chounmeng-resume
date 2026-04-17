import { useReveal } from '../hooks/useReveal';

/** Shared section tag + heading with teal underline */
export function SectionHeader({ tag, title }) {
  return (
    <div className="mb-10">
      <p className="text-cv-teal text-[0.7rem] font-bold tracking-[0.2em] uppercase mb-1">
        {tag}
      </p>
      <h2 className="text-cv-bright text-3xl md:text-4xl font-extrabold leading-tight">
        {title}
        <span
          className="block h-[3px] w-14 bg-cv-teal mt-2.5 rounded"
          aria-hidden="true"
        />
      </h2>
    </div>
  );
}

/** Wraps every section with scroll-reveal fade-up and standard container */
export default function Section({ id, children }) {
  const [ref, visible] = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 lg:py-24 transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        {children}
      </div>
    </section>
  );
}
