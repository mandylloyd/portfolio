import { EnvelopeIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="header-left">
          <h1 className="header-name pixel-reveal">Mandy Lloyd</h1>
          <p className="header-role">
            Frontend Engineer · React · DHS Trusted Tester
          </p>
        </div>

        <nav className="header-links" aria-label="External links of contact">
          <a
            href="mailto:mandylloyd.tech@gmail.com"
            aria-label="Email"
          >
            <EnvelopeIcon />
          </a>
          <a
            href="https://github.com/mandylloyd?tab=overview&from=2024-12-01&to=2024-12-31"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.94c.6.1.82-.26.82-.58v-2.03c-3.26.71-3.95-1.57-3.95-1.57-.54-1.36-1.31-1.73-1.31-1.73-1.07-.74.08-.73.08-.73 1.18.08 1.8 1.21 1.8 1.21 1.05 1.8 2.76 1.28 3.43.98.11-.76.41-1.28.74-1.57-2.6-.3-5.34-1.3-5.34-5.78 0-1.28.46-2.32 1.2-3.14-.12-.3-.52-1.52.12-3.17 0 0 .98-.31 3.2 1.2a11.1 11.1 0 015.82 0c2.22-1.51 3.2-1.2 3.2-1.2.64 1.65.24 2.87.12 3.17.74.82 1.2 1.86 1.2 3.14 0 4.49-2.74 5.48-5.35 5.78.42.36.8 1.08.8 2.18v3.23c0 .32.22.69.82.57A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/lloydmandy"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6 1.11 6 0 4.88 0 3.5 0 2.12 1.11 1 2.49 1 3.87 1 4.98 2.12 4.98 3.5zM.22 8.98H4.7V24H.22V8.98zM8.34 8.98h4.29v2.05h.06c.6-1.14 2.08-2.34 4.29-2.34 4.59 0 5.44 3.02 5.44 6.95V24h-4.48v-6.83c0-1.63-.03-3.73-2.27-3.73-2.27 0-2.62 1.77-2.62 3.61V24H8.34V8.98z" />
            </svg>
          </a>
          <a
            href="/Mandy_Lloyd_Front-End_Engineer_Accessibility.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Resume"
          >
            <DocumentTextIcon />
          </a>
        </nav>


      </div>
    </header>
  );
};