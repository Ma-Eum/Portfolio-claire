import ProjectCard from '../../components/ProjectCard/ProjectCard'
import SakuraPetals from '../../components/SakuraPetals/SakuraPetals'
import projects from '../../data/projects'
import './Projects.scss'

function Projects() {
  return (
    <main id="main-content" className="projects-page">
      <SakuraPetals />

      <div className="container projects-page__container">
        <header className="projects-page__header">
          <h1 className="projects-page__title">Mes réalisations</h1>

          <p className="projects-page__intro">
            Des projets qui illustrent mon évolution en développement front-end, avec une
            attention particulière portée à l’accessibilité, à la qualité du code et à
            l’expérience utilisateur.
          </p>
        </header>

        <section className="projects-page__panel" aria-labelledby="projects-list-title">
          <h2 id="projects-list-title" className="visually-hidden">
            Liste des projets
          </h2>

          <div className="projects-page__grid">
            {projects.map((project) => (
              <div key={project.id} className="projects-page__item">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Projects