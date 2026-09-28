import { personal } from '../data/resume';

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-5 md:px-10 lg:px-16 py-8 flex flex-col sm:flex-row gap-2 justify-between font-mono text-xs text-cv-muted">
        <p>
          © {new Date().getFullYear()} {personal.name}
          {/* Visitor stats notice (see index.html) */}
          <span className="block sm:inline sm:before:content-['·'] sm:before:mx-2">
            Anonymous visit stats via{' '}
            <a
              href="https://www.goatcounter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cv-bright transition-colors duration-200"
            >
              GoatCounter
            </a>
          </span>
        </p>
        <a
          href={personal.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cv-bright transition-colors duration-200"
        >
          {personal.github.label}
        </a>
      </div>
    </footer>
  );
}
