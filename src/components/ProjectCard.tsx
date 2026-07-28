import type { Project } from "../projects";
import DefaultAnimation from "./animations/DefaultAnimation";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="project-card"
      style={
        project.accent
          ? ({ "--accent": project.accent } as React.CSSProperties)
          : undefined
      }
    >
      <div className="project-card-banner">
        {project.animation ?? <DefaultAnimation />}
      </div>
      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tech-tags">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {project.links?.map((link) => (
          <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
