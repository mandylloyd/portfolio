export default function ProjectModal({ project, onClose }) {
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
};