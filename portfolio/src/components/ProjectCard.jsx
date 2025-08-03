import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import '../styles/ProjectCard.css';

function ProjectCard({ project }) {
  const { title, description, techStack, githubLink, siteLink } = project;

  return (
    <div className="project-card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <div className="card-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
              <FaGithub />
            </a>
          )}
          {siteLink && (
            <a href={siteLink} target="_blank" rel="noopener noreferrer" aria-label="Live Site">
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>
      <p className="card-description">{description}</p>
      <div className="card-footer">
        <ul className="tech-stack">
          {techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;