export default function ProjectCard({ project, onClick }) {
  return (
    <article
      className="project-card reveal-on-scroll pixel-mask"
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
};