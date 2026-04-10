import { Link, Navigate, useParams } from 'react-router-dom'
import SakuraPetals from '../../components/SakuraPetals/SakuraPetals'
import projects from '../../data/projects'
import './Project.scss'

// Page de détail d'un projet.
// Elle récupère l'identifiant dans l'URL, affiche le contenu associé
// et permet de naviguer facilement vers le projet précédent ou suivant.
function Project() {
  const { id } = useParams()
  const projectIndex = projects.findIndex((item) => item.id === id)
  const project = projects[projectIndex]

  // Redirige vers la page 404 si l'identifiant ne correspond à aucun projet.
  if (!project) {
    return <Navigate to="/404" replace />
  }

  // Permet de créer une navigation séquentielle entre les projets.
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  return (
    <main id="main-content" className="project project--enhanced">
      <SakuraPetals />

      <div className="container project__container">
        {/* Hero de présentation du projet */}
        <header className="project__hero">
          <p className="project__context">{project.context}</p>
          <h1 className="project__title">{project.title}</h1>
          <p className="project__meta">Durée estimée : {project.duration}</p>

          {project.image ? (
            <img
              className="project__image"
              src={project.image}
              alt={project.imageAlt || `Aperçu du projet ${project.title}`}
              loading="lazy"
            />
          ) : null}
        </header>

        <div className="project__grid">
          {/* Contenu principal : contexte, réalisation et compétences */}
          <article className="project__content" aria-labelledby="project-content-title">
            <h2 id="project-content-title" className="visually-hidden">
              Contenu du projet
            </h2>

            <section className="project__section project__section--intro">
              <h3 className="project__section-title">Présentation</h3>
              <p className="project__text">{project.fullDescription}</p>
            </section>

            <section className="project__section">
              <h3 className="project__section-title">Ce que ce projet montre</h3>
              <p className="project__text">{project.recruiterHighlight}</p>
            </section>

            <section className="project__section">
              <h3 className="project__section-title">Ce que j’ai réalisé</h3>
              <ul className="project__list">
                {project.work.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="project__section">
              <h3 className="project__section-title">Compétences mobilisées</h3>
              <ul className="project__list">
                {project.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>
          </article>

          {/* Aside latéral : stack technique et liens utiles */}
          <aside className="project__side" aria-labelledby="project-side-title">
            <section className="project__section project__section--sticky">
              <h2 id="project-side-title" className="project__section-title">
                Stack et liens
              </h2>

              <ul
                className="project__tags"
                aria-label={`Technologies utilisées pour ${project.title}`}
              >
                {project.stack.map((item) => (
                  <li key={item} className="project__tag">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="project__actions">
                {project.github ? (
                  <a
                    className="project__link project__link--primary"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Voir le code du projet ${project.title}`}
                  >
                    Voir le code
                  </a>
                ) : null}

                {project.demo ? (
                  <a
                    className="project__link project__link--secondary"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Voir la démo du projet ${project.title}`}
                  >
                    Voir le projet
                  </a>
                ) : null}

                <Link to="/projects" className="project__back-link">
                  Retour aux projets
                </Link>
              </div>
            </section>
          </aside>
        </div>

        {/* Navigation séquentielle entre les projets */}
        <nav className="project__pagination" aria-label="Navigation entre les projets">
          <div className="project__pagination-item project__pagination-item--prev">
            {previousProject ? (
              <Link
                to={`/project/${previousProject.id}`}
                className="project__pagination-link"
                aria-label={`Voir le projet précédent : ${previousProject.title}`}
              >
                ← {previousProject.title}
              </Link>
            ) : (
              <span className="project__pagination-placeholder" aria-hidden="true" />
            )}
          </div>

          <div className="project__pagination-item project__pagination-item--center">
            <Link
              to="/projects"
              className="project__pagination-link project__pagination-link--center"
            >
              Tous les projets
            </Link>
          </div>

          <div className="project__pagination-item project__pagination-item--next">
            {nextProject ? (
              <Link
                to={`/project/${nextProject.id}`}
                className="project__pagination-link"
                aria-label={`Voir le projet suivant : ${nextProject.title}`}
              >
                {nextProject.title} →
              </Link>
            ) : (
              <span className="project__pagination-placeholder" aria-hidden="true" />
            )}
          </div>
        </nav>
      </div>
    </main>
  )
}

export default Project