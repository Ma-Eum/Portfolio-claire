import { Link } from 'react-router-dom'
import './ProjectCard.scss'

// Carte réutilisable pour afficher un projet.
// Chaque carte présente un aperçu visuel, le contexte,
// la description courte, la stack et les actions principales.
function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img
        src={project.image}
        alt={`Aperçu du projet ${project.title}`}
        className="project-card__image"
      />

      <div className="project-card__content">
        <p className="project-card__context">{project.context}</p>

        <h3 className="project-card__title">{project.title}</h3>

        <p className="project-card__description">{project.shortDescription}</p>

        <ul className="project-card__stack" aria-label={`Technologies du projet ${project.title}`}>
          {project.stack.map((item) => (
            <li key={item} className="project-card__tag">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="project-card__actions">
        <a
          className="project-card__link project-card__link--secondary"
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`Voir le code source du projet ${project.title} sur GitHub`}
        >
          Voir le code
        </a>

        <Link
          className="project-card__link project-card__link--primary"
          to={`/project/${project.id}`}
          aria-label={`Voir le détail du projet ${project.title}`}
        >
          Voir le détail
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard