import { personal } from '../data/resume';

export default function Footer() {
  return (
    <footer className="border-t border-cv-teal/20 py-10 text-center text-cv-muted text-sm">
      <p>
        Designed &amp; built by{' '}
        <strong className="text-cv-teal font-semibold">Teo Choun Meng</strong>
        {' · '}
        <a
          href={personal.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cv-bright transition-colors duration-200"
        >
          {personal.github.label}
        </a>
      </p>
      <p className="mt-1 text-xs">© {new Date().getFullYear()} · All rights reserved</p>
    </footer>
  );
}
