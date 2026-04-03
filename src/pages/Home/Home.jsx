import ProjectCard from '../../components/ProjectCard/ProjectCard'
import projects from '../../data/projects'
import './Home.scss'

function Home() {
  return (
    <div className="home">
      <div className="home__background" aria-hidden="true" />

      <div className="home__petals" aria-hidden="true">
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

      <div className="container home__container">
        <section className="home__hero">
          <div className="home__hero-content">
            <p className="home__eyebrow">Portfolio développeuse front-end</p>
            <h1 className="home__title">Claire Gachelin</h1>
            <p className="home__subtitle">Développeuse Front-End React</p>

            <p className="home__intro">
              Je conçois des interfaces accessibles, lisibles et élégantes, en accordant
              une attention particulière à l’expérience utilisateur, à la structure du
              code et à la qualité des interactions.
            </p>

            <ul className="home__highlights">
              <li>React et architecture de composants</li>
              <li>Intégration responsive et interfaces lisibles</li>
              <li>Accessibilité et navigation clavier</li>
              <li>API, debug et amélioration continue</li>
            </ul>

            <div className="home__hero-actions">
              <a href="#projects" className="home__button home__button--primary">
                Voir mes projets
              </a>
              <a href="#skills" className="home__button home__button--secondary">
                Voir mes compétences
              </a>
              <a
                href="https://github.com/Ma-Eum"
                target="_blank"
                rel="noreferrer"
                className="home__button home__button--secondary"
              >
                Voir mon GitHub
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="home__section">
          <h2 className="home__section-title">Compétences clés</h2>

          <div className="home__skills-grid">
            <article className="home__info-card">
              <h3 className="home__card-title">Front-end React</h3>
              <p className="home__card-text">
                Construction d’interfaces en composants, structuration du code,
                navigation, organisation des pages et logique de réutilisation.
              </p>
            </article>

            <article className="home__info-card">
              <h3 className="home__card-title">Intégration et responsive</h3>
              <p className="home__card-text">
                Transformation de maquettes en interfaces lisibles, adaptables et
                cohérentes sur différents formats d’écran.
              </p>
            </article>

            <article className="home__info-card">
              <h3 className="home__card-title">API et données</h3>
              <p className="home__card-text">
                Exploitation de données, affichage dynamique, structuration
                d’informations et mise en avant de la lisibilité pour l’utilisateur.
              </p>
            </article>

            <article className="home__info-card">
              <h3 className="home__card-title">Accessibilité et qualité</h3>
              <p className="home__card-text">
                Sensibilité à l’accessibilité, au focus clavier, à la structure
                sémantique et à une expérience de navigation plus inclusive.
              </p>
            </article>
          </div>
        </section>

        <section className="home__section">
          <h2 className="home__section-title">Ce que mes projets montrent</h2>

          <div className="home__value-list">
            <article className="home__value-item">
              <h3 className="home__card-title">Une progression structurée</h3>
              <p className="home__card-text">
                Mes projets montrent une montée en compétences progressive :
                intégration, JavaScript, accessibilité, React, API, tests, debug et
                refactor.
              </p>
            </article>

            <article className="home__value-item">
              <h3 className="home__card-title">Une logique de travail claire</h3>
              <p className="home__card-text">
                J’accorde de l’importance à l’organisation du code, à la lisibilité,
                à la maintenabilité et à la compréhension par d’autres développeurs.
              </p>
            </article>

            <article className="home__value-item">
              <h3 className="home__card-title">Un potentiel opérationnel</h3>
              <p className="home__card-text">
                Mon objectif est de transformer cette base solide en expérience
                concrète en équipe, sur des interfaces utiles et bien conçues.
              </p>
            </article>
          </div>
        </section>

        <section id="projects" className="home__section home__section--projects">
          <h2 className="home__section-title">Projets sélectionnés</h2>

          <div className="home__projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="home__project-item"
                style={{ '--delay': `${index * 90}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        <section className="home__section">
          <div className="home__contact-card">
            <h2 className="home__section-title">Travaillons ensemble</h2>
            <p className="home__contact-text">
              Je recherche une opportunité pour continuer à évoluer en développement
              front-end, contribuer à des interfaces web utiles et consolider mes
              compétences React au sein d’une équipe.
            </p>

            <div className="home__contact-actions">
              <a
                href="mailto:claire.gachelin@gmail.com"
                className="home__button home__button--primary"
              >
                Me contacter par email
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="home__button home__button--secondary"
              >
                Voir mon LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home