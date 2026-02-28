import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects, onProjectClick }) {
  if (projects.length === 0) {
    return (
      <section>
        <p>No projects match this filter.</p>
      </section>
    );
  }

  return (
    <section className="reveal-on-scroll pixel-mask" aria-label="Projects">
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
};