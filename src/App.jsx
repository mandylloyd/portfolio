import { useState, useMemo, useEffect } from "react";
import { TAGS, projects } from "./projectsData";
import "./App.css";
import { EnvelopeIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

function App() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const projectMatch = currentHash.match(/^#\/projects\/(.+)/);
  const projectIdFromHash = projectMatch ? projectMatch[1] : null;

  const fullProject = projectIdFromHash
    ? projects.find((p) => p.id === projectIdFromHash)
    : null;

  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) {
      return projects;
    }

    return projects.filter((project) =>
      selectedTags.every((tag) => project.tags.includes(tag))
    );
  }, [selectedTags]);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <div className="app-root">
      {fullProject ? (
        <FullProjectPage project={fullProject} />
      ) : (
        <div className="app-shell">
          <ConstructionBanner />
          <Header />
          <main>
            <Hero />
            <FilterBar
              tags={TAGS}
              selectedTags={selectedTags}
              onToggleTag={toggleTag}
              onClearFilters={clearFilters}
            />
            <ProjectGrid
              projects={filteredProjects}
              onProjectClick={handleCardClick}
            />
            <FooterNote />
          </main>

          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={handleCloseModal}
            />
          )}
        </div>
      )}
    </div>
  );
}

/* ================= FULL PROJECT PAGE ================= */

function FullProjectPage({ project }) {
  return (
    <div className="app-root">
      <div className="app-shell">
        <button
          className="back-button"
          onClick={() => {
            window.location.hash = "";
          }}
        >
          ← Back to portfolio
        </button>

        <h1>{project.title}</h1>
        {project.role && <p className="project-role">{project.role}</p>}
        <p>{project.longDescription}</p>

        {project.impact && (
          <>
            <h2>Impact</h2>
            <ul>
              {project.impact.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {project.techStack && (
          <>
            <h2>Tech Stack</h2>
            <ul>
              {project.techStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </>
        )}

        {project.links?.codeExamples?.length > 0 && (
          <>
            <h2>All Code Examples</h2>
            <ul className="modal-links">
              {project.links.codeExamples.map((example) => (
                <li key={example.link}>
                  <a
                    href={example.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {example.text}
                  </a>
                  <p>{example.description}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

/* ================= BANNER ================= */

function ConstructionBanner() {
  return (
    <div className="construction-banner">
      <p>
        ✦ This portfolio site is currently under construction. Styling and additional
        project examples are a work in progress. ✦<br></br> Please check back soon but in the mean time
        feel free to review my{" "}
        <a
          href="/Mandy_Lloyd_Front-End_Engineer_Accessibility.pdf"
          target="_blank"
          rel="noreferrer"
        >
          resume
        </a>{" "}
        for full experience and work history!
      </p>
    </div>
  );
}


/* ================= HEADER ================= */

function Header() {
  return (
    <header className="app-header">
      <div className="header-inner">
<div className="header-left">
  <h1 className="header-name">Mandy Lloyd</h1>
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
}

/* ================= HERO ================= */

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <p className="hero-eyebrow">Portfolio</p>
      <h2 id="hero-heading" className="hero-title">
        Front-end development, accessibility, and modern JS.
      </h2>
      <p className="hero-text">
        I build accessible, component-driven interfaces using React, JavaScript,
        and modern CSS.
      </p>
      {/* <ul className="hero-keywords">
        <li>React</li>
        <li>JavaScript</li>
        <li>CSS / Sass</li>
        <li>Accessibility</li>
      </ul> */}
    </section>
  );
}

/* ================= FILTER BAR ================= */

function FilterBar({ tags, selectedTags, onToggleTag, onClearFilters }) {
  const hasActiveFilters = selectedTags.length > 0;

  return (
    <section
      className="filter-bar"
      aria-label="Filter projects by technology"
    >
      <span>Filter by:</span>

      <button
        type="button"
        onClick={onClearFilters}
        className={
          "filter-button filter-button--all" +
          (!hasActiveFilters ? " filter-button--active" : "")
        }
        aria-pressed={!hasActiveFilters}
      >
        #all
      </button>

      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag);

        return (
          <button
            key={tag}
            type="button"
            onClick={() => onToggleTag(tag)}
            className={
              "filter-button" + (isSelected ? " filter-button--active" : "")
            }
            aria-pressed={isSelected}
          >
            #{tag}
          </button>
        );
      })}
    </section>
  );
}

/* ================= PROJECT GRID ================= */

function ProjectGrid({ projects, onProjectClick }) {
  if (projects.length === 0) {
    return (
      <section>
        <p>No projects match this filter.</p>
      </section>
    );
  }

  return (
    <section aria-label="Projects">
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onProjectClick(project)}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <article
      className="project-card"
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
    >
      {project.role && <p className="project-role">{project.role}</p>}
      <h3 className="project-title">{project.title}</h3>
      <p className="project-short">{project.shortDescription}</p>
      <ul className="project-tags">
        {project.tags.map((tag) => (
          <li key={tag}>#{tag}</li>
        ))}
      </ul>
    </article>
  );
}

/* ================= MODAL ================= */

function ProjectModal({ project, onClose }) {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="modal">
        <header className="modal-header">
          <div>
            <h3 id="project-modal-title">{project.title}</h3>
            {project.role && (
              <p className="modal-role">{project.role}</p>
            )}
          </div>

          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </header>

        <div className="modal-body">
          <section>
            <h3>Overview</h3>
            <p>{project.longDescription}</p>
          </section>

          {project.links?.codeExamples?.length > 0 && (
            <section>
              <h3>Selected Code Examples</h3>
              <ul className="modal-links">
                {project.links.codeExamples
                  .slice(0, 4)
                  .map((example) => (
                    <li key={example.link}>
                      <a
                        href={example.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {example.text}
                      </a>
                      <p>{example.description}</p>
                    </li>
                  ))}
              </ul>
            </section>
          )}

          <button
            className="view-full-project-button"
            onClick={() => {
              window.location.hash = `#/projects/${project.id}`;
              onClose();
            }}
          >
            Show More →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================= FOOTER ================= */

function FooterNote() {
  return (
    <footer className="footer-note">
      <p>✦ Built with React ✦</p>
    </footer>
  );
}

export default App;
