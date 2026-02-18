import { useState, useMemo, useEffect } from "react";
import { TAGS, projects } from "./projectsData";
import "./App.css";

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
        🚧 This portfolio site is currently under construction. Styling and additional
        project examples are a work in progress. <br></br> Please check back soon but in the mean time
        feel free to review my{" "}
        <a
          href="/portfolio/Mandy_Lloyd_Front-End_Engineer_Accessibility.pdf"
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
          <p className="header-name">Mandy Lloyd</p>
          <p className="header-role">
            Frontend Engineer · React · DHS Trusted Tester
          </p>
        </div>
        <nav className="header-links" aria-label="Contact links">
          <a href="mailto:mandylloyd.tech@gmail.com">Email</a>
          <a
            href="https://github.com/mandylloyd?tab=overview&from=2024-12-01&to=2024-12-31"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lloydmandy"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="/portfolio/Mandy_Lloyd_Front-End_Engineer_Accessibility.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
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
      <h1 id="hero-heading" className="hero-title">
        Front-end development, accessibility, and modern JS.
      </h1>
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
      <h2 className="project-title">{project.title}</h2>
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
            <h2 id="project-modal-title">{project.title}</h2>
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
      <p>Built with React.</p>
    </footer>
  );
}

export default App;
