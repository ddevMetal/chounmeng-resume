import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#summary',        label: 'Summary'    },
  { href: '#skills',         label: 'Skills'     },
  { href: '#experience',     label: 'Experience' },
  { href: '#education',      label: 'Education'  },
  { href: '#projects',       label: 'Projects'   },
  { href: '#certifications', label: 'Certs'      },
  { href: '#awards',         label: 'Awards'     },
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-cv-navy/95 backdrop-blur-md border-b border-cv-teal/20 shadow-teal-sm'
          : 'bg-cv-navy/75 backdrop-blur-sm'}`}
    >
      <div className="max-w-5xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <span className="text-cv-teal font-extrabold tracking-widest text-sm select-none">
          &lt; TCM /&gt;
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-cv-muted hover:text-cv-teal text-xs font-semibold tracking-widest uppercase transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden flex flex-col gap-[5px] p-2 rounded"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className={`block h-0.5 w-[22px] bg-cv-teal rounded transition-transform duration-300 origin-center
            ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block h-0.5 w-[22px] bg-cv-teal rounded transition-all duration-300
            ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block h-0.5 w-[22px] bg-cv-teal rounded transition-transform duration-300 origin-center
            ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? 'max-h-96 border-b border-cv-teal/20' : 'max-h-0'}`}
      >
        <ul className="bg-cv-navy/98 max-w-5xl mx-auto">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href} className="border-b border-cv-teal/10 last:border-0">
              <a
                href={href}
                onClick={close}
                className="block px-6 py-3.5 text-cv-muted hover:text-cv-teal hover:bg-cv-teal/5 text-sm font-semibold tracking-widest uppercase transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
