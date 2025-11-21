import { useState, useMemo } from "react";
import { TAGS, projects } from "./projectsData";
import "./App.css";

function App() {
  const [selectedTags, setSelectedTags] = useState([]); 
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) {
      return projects;
    }

    // only include projects that have *all* selected tags
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
        ? prev.filter((t) => t !== tag) // rm if already selected
        : [...prev, tag] // add if not selected
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <div className="app-root">
      <div className="app-shell">
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
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
}

/* Header */

function Header() {
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="header-left">
          <p className="header-name">Mandy Lloyd</p>
          <p className="header-role">
            Front-End Developer · React · Accessibility
          </p>
        </div>
        <nav className="header-links" aria-label="Contact links">
          <a href="mailto:mandylloyd.tech@gmail.com">Email</a>
          <a
            href="https://github.com/mandylloyd"
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
            href="https://docs.google.com/document/d/1QQ-oGmQBPnZbfIuVyJo9Wc1ukaulPoLk/edit?usp=sharing&ouid=113600780315734836168&rtpof=true&sd=true" 
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

/* Hero / intro */

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <p className="hero-eyebrow">Portfolio</p>
      <h1 id="hero-heading" className="hero-title">
        Front-end development, accessibility, and modern JS.
      </h1>
      <p className="hero-text">
        I build accessible, component-driven interfaces using React, JavaScript,
        and modern CSS. This page highlights a few projects and patterns I’ve
        worked on.
      </p>
      <ul className="hero-keywords" aria-label="Key skills">
        <li>React</li>
        <li>JavaScript</li>
        <li>CSS / Sass</li>
        <li>Accessibility</li>
        <li>Performance</li>
        <li>Blogs</li>
      </ul>
    </section>
  );
}

/* Filter bar */

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


/* Project grid */

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

/* Modal */

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
            {project.role && <p className="modal-role">{project.role}</p>}
          </div>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </header>

        <div className="modal-body">
          <section aria-label="Project overview">
            <h3>Overview</h3>
            <p>{project.longDescription}</p>
          </section>

          {project.techStack && project.techStack.length > 0 && (
            <section aria-label="Technologies used">
              <h3>Tech Stack</h3>
              <ul>
                {project.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </section>
          )}

          {project.images && project.images.length > 0 && (
            <section aria-label="Project screenshots">
              <h3>Screenshots</h3>
              <div>
                {project.images.map((img) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className="modal-image"
                  />
                ))}
              </div>
            </section>
          )}

          {(project.links?.live || project.links?.repo) && (
            <section aria-label="Project links">
              <h3>Links</h3>
              <ul className="modal-links">
                {project.links.live && (
                  <li>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live site
                    </a>
                  </li>
                )}
                {project.links.repo && (
                  <li>
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source code
                    </a>
                  </li>
                )}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

/* Footer */

function FooterNote() {
  return (
    <footer className="footer-note">
      <p>Built with React. Style is WIP.</p>
    </footer>
  );
}

export default App;
