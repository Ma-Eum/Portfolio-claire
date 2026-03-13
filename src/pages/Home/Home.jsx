import ProjectCard from '../../components/ProjectCard/ProjectCard'
import projects from '../../data/projects'
import './home.scss'

// Home est la page d'accueil du portfolio.
// Le contenu principal présente le profil puis une sélection de projets.
// Les projets sont générés dynamiquement à partir du fichier data/projects.js
// pour faciliter la maintenance et la réutilisation.
function Home() {
  return (
    <main id="main-content" className="home">
      <div className="container">
        <section className="home__hero" aria-labelledby="home-title">
          <p className="home__eyebrow">Portfolio développeuse front-end</p>

          <h1 id="home-title" className="home__title">
            Claire Gachelin
          </h1>

          <p className="home__intro">
            Développeuse front-end orientée React, je présente ici une sélection de projets
            réalisés pendant ma formation afin de montrer mes compétences en intégration,
            architecture de composants, JavaScript, accessibilité et résolution de problèmes.
          </p>
        </section>

        <section className="home__section" aria-labelledby="home-projects-title">
          <h2 id="home-projects-title" className="home__section-title">
            Projets sélectionnés
          </h2>

          <div className="home__projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home