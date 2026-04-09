import { Link } from 'react-router-dom'
import './ProjectCard.scss'

function ProjectCard({ project }) {
  const projectUrl = `/project/${project.id}`
  const titleId = `project-card-title-${project.id}`
  const stackLabel = `Technologies utilisées pour ${project.title}`

  return (
    <article className="project-card" aria-labelledby={titleId}>
      <Link
        to={projectUrl}
        className="project-card__media-link"
        aria-label={`Voir le détail du projet ${project.title}`}
      >
        <div className="project-card__media">
          {project.image ? (
            <img
              className="project-card__image"
              src={project.image}
              alt={project.imageAlt || `Aperçu du projet ${project.title}`}
              loading="lazy"
            />
          ) : (
            <div
              className="project-card__image project-card__image--placeholder"
              aria-hidden="true"
            />
          )}

          <span className="project-card__overlay-icon" aria-hidden="true">
            ↗
          </span>
        </div>
      </Link>

      <div className="project-card__body">
        <p className="project-card__context">
          {project.context} • {project.duration}
        </p>

        <h3 id={titleId} className="project-card__title">
          <Link to={projectUrl} className="project-card__title-link">
            {project.title}
          </Link>
        </h3>

        <p className="project-card__description">{project.shortDescription}</p>

        {project.recruiterHighlight ? (
          <div className="project-card__highlight">
            <p className="project-card__highlight-label">Ce que ce projet démontre</p>
            <p className="project-card__highlight-text">{project.recruiterHighlight}</p>
          </div>
        ) : null}

        <ul className="project-card__tags" aria-label={stackLabel}>
          {project.stack.map((item) => (
            <li key={item} className="project-card__tag">
              {item}
            </li>
          ))}
        </ul>

        <div className="project-card__actions">
          {project.github ? (
            <a
              className="project-card__link project-card__link--secondary"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`Voir le code du projet ${project.title}`}
            >
              Voir le code
            </a>
          ) : null}

          <Link
            to={projectUrl}
            className="project-card__link project-card__link--primary"
            aria-label={`Voir le détail du projet ${project.title}`}
          >
            Voir le détail
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard