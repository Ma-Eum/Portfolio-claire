import { Link, Navigate, useParams } from 'react-router-dom'
import projects from '../../data/projects'
import './Project.scss'

function Project() {
  const { id } = useParams()
  const projectIndex = projects.findIndex((item) => item.id === id)
  const project = projects[projectIndex]

  if (!project) {
    return <Navigate to="/404" replace />
  }

  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  return (
    <main id="main-content" className="project project--enhanced">
      <div className="container">
        <header className="project__hero">
          <p className="project__context">{project.context}</p>
          <h1 className="project__title">{project.title}</h1>
          <p className="project__meta">Durée estimée : {project.duration}</p>

          {project.image ? (
            <img
              className="project__image"
              src={project.image}
              alt={`Aperçu du projet ${project.title}`}
            />
          ) : null}
        </header>

        <div className="project__grid">
          <article className="project__content">
            <section className="project__section project__section--intro">
              <h2 className="project__section-title">Présentation</h2>
              <p className="project__text">{project.fullDescription}</p>
            </section>

            <section className="project__section">
              <h2 className="project__section-title">Ce que ce projet montre</h2>
              <p className="project__text">{project.recruiterHighlight}</p>
            </section>

            <section className="project__section">
              <h2 className="project__section-title">Ce que j’ai réalisé</h2>
              <ul className="project__list">
                {project.work.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="project__section">
              <h2 className="project__section-title">Compétences mobilisées</h2>
              <ul className="project__list">
                {project.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="project__side">
            <section className="project__section project__section--sticky">
              <h2 className="project__section-title">Stack</h2>
              <ul className="project__tags">
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

        <nav className="project__pagination" aria-label="Navigation entre les projets">
          <div className="project__pagination-item project__pagination-item--prev">
            {previousProject ? (
              <Link to={`/project/${previousProject.id}`} className="project__pagination-link">
                ← {previousProject.title}
              </Link>
            ) : (
              <span className="project__pagination-placeholder"> </span>
            )}
          </div>

          <div className="project__pagination-item project__pagination-item--center">
            <Link to="/projects" className="project__pagination-link project__pagination-link--center">
              Tous les projets
            </Link>
          </div>

          <div className="project__pagination-item project__pagination-item--next">
            {nextProject ? (
              <Link to={`/project/${nextProject.id}`} className="project__pagination-link">
                {nextProject.title} →
              </Link>
            ) : (
              <span className="project__pagination-placeholder"> </span>
            )}
          </div>
        </nav>
      </div>
    </main>
  )
}

export default Project