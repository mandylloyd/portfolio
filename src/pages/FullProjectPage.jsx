export default function FullProjectPage({ project }) {
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
};