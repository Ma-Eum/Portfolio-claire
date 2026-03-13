import { Link, useParams } from 'react-router-dom'
import projects from '../../data/projects'
import './Project.scss'

// Page de détail projet.
// L'id est récupéré depuis l'URL grâce à useParams().
// On cherche ensuite le projet correspondant dans la source de données.
// Si aucun projet n'est trouvé, on affiche un message clair.
function Project() {
  const { id } = useParams()

  const project = projects.find((item) => item.id === id)

  if (!project) {
    return (
      <main id="main-content" className="project">
        <div className="container">
          <h1 className="project__title">Projet introuvable</h1>
          <p className="project__text">
            Le projet demandé n’existe pas ou n’est pas encore disponible.
          </p>

          <Link className="project__back-link" to="/">
            Retour aux projets
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main id="main-content" className="project">
      <div className="container">
        <p className="project__context">{project.context}</p>

        <h1 className="project__title">{project.title}</h1>

        <p className="project__meta">
          <strong>Durée estimée :</strong> {project.duration}
        </p>

        {/* Sections de contenu du projet :
            on sépare la présentation, la valeur démontrée,
            les compétences mobilisées et la stack technique
            pour garder une lecture claire et structurée. */}

        <section className="project__section" aria-labelledby="project-description-title">
          <h2 id="project-description-title" className="project__section-title">
            Présentation
          </h2>
          <p className="project__text">{project.fullDescription}</p>
        </section>

        <section className="project__section" aria-labelledby="project-recruiter-title">
          <h2 id="project-recruiter-title" className="project__section-title">
            Ce que ce projet montre
          </h2>
          <p className="project__text">{project.recruiterHighlight}</p>
        </section>

        <section className="project__section" aria-labelledby="project-skills-title">
          <h2 id="project-skills-title" className="project__section-title">
            Compétences mobilisées
          </h2>

          <ul className="project__list">
            {project.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="project__section" aria-labelledby="project-stack-title">
          <h2 id="project-stack-title" className="project__section-title">
            Stack
          </h2>

          <ul className="project__tags" aria-label={`Stack technique du projet ${project.title}`}>
            {project.stack.map((item) => (
              <li key={item} className="project__tag">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="project__actions">
          <a
            className="project__link project__link--secondary"
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`Voir le code source du projet ${project.title} sur GitHub`}
          >
            Voir le code
          </a>

          <Link className="project__link project__link--primary" to="/">
            Retour aux projets
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Project