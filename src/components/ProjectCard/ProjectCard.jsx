import { Link } from 'react-router-dom'
import './ProjectCard.scss'

// Carte réutilisable pour afficher un projet.
// Chaque carte présente un aperçu visuel, le contexte,
// la description courte, la stack et les actions principales.
function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link
        to={`/project/${project.id}`}
        className="project-card__media-link"
        aria-label={`Voir le détail du projet ${project.title}`}
      >
        <div className="project-card__media">
          {project.image ? (
            <img
              className="project-card__image"
              src={project.image}
              alt={`Aperçu du projet ${project.title}`}
            />
          ) : (
            <div className="project-card__image project-card__image--placeholder" aria-hidden="true" />
          )}

          <span className="project-card__overlay-icon" aria-hidden="true">
            ↗
          </span>
        </div>
      </Link>

      <div className="project-card__body">
        <p className="project-card__context">{project.context}</p>

        <h3 className="project-card__title">
          <Link
            to={`/project/${project.id}`}
            className="project-card__title-link"
          >
            {project.title}
          </Link>
        </h3>

        <p className="project-card__description">{project.shortDescription}</p>

        <ul className="project-card__tags" aria-label={`Technologies utilisées pour ${project.title}`}>
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
            >
              Voir le code
            </a>
          ) : null}

          <Link
            to={`/project/${project.id}`}
            className="project-card__link project-card__link--primary"
          >
            Voir le détail
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard