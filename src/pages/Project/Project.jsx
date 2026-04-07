import { Link, Navigate, useParams } from 'react-router-dom'
import projects from '../../data/projects'
import './Project.scss'

function Project() {
  const { id } = useParams()
  const project = projects.find((item) => item.id === id)

  if (!project) {
    return <Navigate to="/404" replace />
  }

  return (
    <section className="project project--enhanced">
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
      </div>
    </section>
  )
}

export default Project