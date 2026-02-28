import { useState, useMemo, useEffect } from "react";
import { TAGS, projects } from "./projectsData";
import "./App.css";
import FooterNote from "./components/FooterNote";
import ConstructionBanner from "./components/ConstructionBanner";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectGrid  from "./components/ProjectGrid";
import ProjectModal from "./components/ProjectModal";
import FullProjectPage from "./pages/FullProjectPage";


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

export default App;
