import { useState, useEffect } from 'react';

// Top menu links. Add or reorder freely; each href must match a section id.
const NAV_LINKS = [
  { href: '#summary',        label: 'Summary'        },
  { href: '#certifications', label: 'Certifications' },
  { href: '#skills',         label: 'Skills'         },
  { href: '#experience',     label: 'Experience'     },
  { href: '#projects',       label: 'Projects'       },
  { href: '#education',      label: 'Education'      },
  { href: '#beyond',         label: 'Beyond work'    },
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
      className={`sticky top-0 z-50 transition-all duration-300 border-b
        ${scrolled ? 'bg-cv-navy/95 backdrop-blur-md border-cv-deep' : 'bg-cv-navy/80 backdrop-blur-sm border-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-10 lg:px-16 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 font-mono text-sm font-medium text-cv-bright">
          <span className="w-2.5 h-2.5 rounded-sm bg-cv-teal" aria-hidden="true" />
          teo.choun.meng
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="text-cv-muted hover:text-cv-bright text-sm transition-colors duration-200">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Menu button (phones and tablets) */}
        <button
          onClick={() => setOpen(o => !o)}
          className="lg:hidden flex flex-col items-center justify-center gap-[5px] w-11 h-11 rounded-lg border border-cv-deep"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className={`block h-0.5 w-[18px] bg-cv-bright rounded transition-transform duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block h-0.5 w-[18px] bg-cv-bright rounded transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block h-0.5 w-[18px] bg-cv-bright rounded transition-transform duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[28rem] border-t border-cv-deep' : 'max-h-0'}`}>
        <ul className="bg-cv-navy max-w-6xl mx-auto">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href} className="border-b border-cv-deep last:border-0">
              <a href={href} onClick={close} className="block px-5 py-3.5 text-cv-text hover:text-cv-teal text-sm transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
