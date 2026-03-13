import ProjectCard from '../../components/ProjectCard/ProjectCard'
import projects from '../../data/projects'
import './Home.scss'

// Home est la page d'accueil du portfolio.
// Le contenu est découpé en sections sémantiques pour améliorer
// la compréhension, la maintenance et l'accessibilité.
//
// Cette page doit répondre rapidement à 4 questions pour un recruteur :
// 1. Qui suis-je ?
// 2. Quelles compétences je mobilise ?
// 3. Quels projets démontrent mon potentiel ?
// 4. Comment me contacter ?
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
            Développeuse front-end junior orientée React, je présente ici une sélection de projets
            réalisés pendant ma formation pour montrer ma capacité à intégrer des interfaces,
            structurer des composants, exploiter des données, améliorer l’expérience utilisateur et
            progresser dans les bonnes pratiques du développement web.
          </p>

          {/* Points forts visibles immédiatement pour un recruteur */}
          <ul className="home__highlights" aria-label="Points forts du profil">
            <li>React et architecture de composants</li>
            <li>Intégration responsive et interfaces lisibles</li>
            <li>Accessibilité, structure sémantique et focus clavier</li>
            <li>API, debug, tests et refactor</li>
          </ul>

          <div className="home__hero-actions">
            <a className="home__button home__button--primary" href="#projects-section">
              Voir mes projets
            </a>

            <a className="home__button home__button--secondary" href="#skills-section">
              Voir mes compétences
            </a>

            <a
              className="home__button home__button--secondary"
              href="https://github.com/Ma-Eum"
              target="_blank"
              rel="noreferrer"
              aria-label="Voir le profil GitHub de Claire Gachelin"
            >
              Voir mon GitHub
            </a>
          </div>
        </section>

        <section
          id="skills-section"
          className="home__section"
          aria-labelledby="home-skills-title"
        >
          <h2 id="home-skills-title" className="home__section-title">
            Compétences clés
          </h2>

          <div className="home__skills-grid">
            <article className="home__info-card">
              <h3 className="home__card-title">Front-end React</h3>
              <p className="home__card-text">
                Construction d’interfaces en composants, structuration du code, navigation,
                organisation des pages et logique de réutilisation.
              </p>
            </article>

            <article className="home__info-card">
              <h3 className="home__card-title">Intégration et responsive</h3>
              <p className="home__card-text">
                Transformation de maquettes en interfaces lisibles, adaptables et cohérentes sur
                différents formats d’écran.
              </p>
            </article>

            <article className="home__info-card">
              <h3 className="home__card-title">API et données</h3>
              <p className="home__card-text">
                Exploitation de données, affichage dynamique, structuration d’informations et mise
                en avant de la lisibilité pour l’utilisateur.
              </p>
            </article>

            <article className="home__info-card">
              <h3 className="home__card-title">Accessibilité et qualité</h3>
              <p className="home__card-text">
                Sensibilité à l’accessibilité, au focus clavier, à la structure sémantique et à une
                expérience de navigation plus inclusive.
              </p>
            </article>
          </div>
        </section>

        <section className="home__section" aria-labelledby="home-method-title">
          <h2 id="home-method-title" className="home__section-title">
            Ce que mes projets montrent
          </h2>

          <div className="home__value-list">
            <article className="home__value-item">
              <h3 className="home__card-title">Une progression structurée</h3>
              <p className="home__card-text">
                Mes projets montrent une montée en compétences progressive : intégration, JavaScript,
                accessibilité, React, API, tests, debug et refactor.
              </p>
            </article>

            <article className="home__value-item">
              <h3 className="home__card-title">Une logique de travail claire</h3>
              <p className="home__card-text">
                J’accorde de l’importance à l’organisation du code, à la lisibilité, à la
                maintenabilité et à la compréhension par d’autres développeurs.
              </p>
            </article>

            <article className="home__value-item">
              <h3 className="home__card-title">Un potentiel opérationnel</h3>
              <p className="home__card-text">
                Mon objectif est de transformer cette base solide en expérience concrète en équipe,
                sur des interfaces utiles et bien conçues.
              </p>
            </article>
          </div>
        </section>

        <section
          id="projects-section"
          className="home__section"
          aria-labelledby="home-projects-title"
        >
          <h2 id="home-projects-title" className="home__section-title">
            Projets sélectionnés
          </h2>

          <div className="home__projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Section de prise de contact :
            contrairement au footer, ce bloc ne duplique pas toutes les coordonnées.
            Il sert surtout d'appel à l'action pour inviter un recruteur à me contacter. */}
        <section
          id="contact-section"
          className="home__section"
          aria-labelledby="home-contact-title"
        >
          <h2 id="home-contact-title" className="home__section-title">
            Travaillons ensemble
          </h2>

          <div className="home__contact-card">
            <p className="home__contact-text">
              Je recherche une opportunité pour continuer à évoluer en développement front-end,
              contribuer à des interfaces web utiles et consolider mes compétences React au sein
              d’une équipe.
            </p>

            <div className="home__contact-actions">
              <a className="home__button home__button--primary" href="mailto:cl.gachelin@gmail.com">
                Me contacter par email
              </a>

              <a
                className="home__button home__button--secondary"
                href="https://www.linkedin.com/in/claire-gachelin"
                target="_blank"
                rel="noreferrer"
                aria-label="Voir le profil LinkedIn de Claire Gachelin"
              >
                Voir mon LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home