import ProjectCard from "./ProjectCard";
import { data } from "../data/portfolioData";
import "../styles/Projects.css";

function Project() {
  return (
    <section className="projects-section">
      <div className="section-container">
        <h1 className="page-title">Work & Projects</h1>
        <div className="projects-grid">
          {data.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
