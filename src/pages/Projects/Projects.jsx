import projects from '../../data/projects'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import './Projects.scss'

function Projects() {
  return (
    <main id="main-content" className="projects-page">
        <div className="projects-page__petals" aria-hidden="true">
            <span className="petal petal--1" />
            <span className="petal petal--2" />
            <span className="petal petal--3" />
            <span className="petal petal--4" />
            <span className="petal petal--5" />
            <span className="petal petal--6" />
            <span className="petal petal--7" />
            <span className="petal petal--8" />
            <span className="petal petal--9" />
        </div>
      <div className="container">
        <header className="projects-page__header">
          <h1 className="projects-page__title">Mes réalisations</h1>
          <p className="projects-page__intro">
            Des projets qui illustrent mon évolution en développement front-end,
            avec une attention particulière portée à l’accessibilité, à la qualité
            du code et à l’expérience utilisateur.
          </p>
        </header>

        <section className="projects-page__panel" aria-label="Liste des projets">
          <div className="projects-page__grid">
            {projects.map((project) => (
              <article key={project.id} className="projects-page__item">
                <ProjectCard project={project} />
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Projects