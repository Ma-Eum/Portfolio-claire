import { Link } from 'react-router-dom'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import SakuraPetals from '../../components/SakuraPetals/SakuraPetals'
import projects from '../../data/projects'
import './Home.scss'

function Home() {
  const featuredProject =
    projects.find((project) => project.id === 'handifun') || projects[0]

  const otherProjects = projects.filter((project) => project.id !== featuredProject.id)

  return (
    <main id="main-content" className="home">
      <div className="home__background" aria-hidden="true" />

      <SakuraPetals />

      <div className="container home__container">
        <section className="home__hero" aria-labelledby="home-title">
          <div className="home__hero-content">
            <p className="home__eyebrow">Développeuse Front-End React</p>

            <h1 id="home-title" className="home__title">
              Claire Gachelin
            </h1>

            <p className="home__subtitle">
              Interfaces accessibles, soignées et maintenables
            </p>

            <p className="home__intro">
              En reconversion dans le développement web, je conçois des interfaces
              front-end lisibles, responsive et accessibles, avec une attention
              particulière portée à l’expérience utilisateur, à la clarté du code et à la
              qualité d’intégration.
            </p>

            <p className="home__intro">
              À travers mes projets, je démontre une progression concrète en React,
              JavaScript, intégration, consommation d’API, débogage, tests et refactor.
              Mon objectif est aujourd’hui de rejoindre une équipe où je pourrai
              contribuer à des interfaces utiles, continuer à progresser et apporter un
              travail rigoureux, fiable et structuré.
            </p>

            <ul className="home__highlights">
              <li>React et architecture de composants</li>
              <li>Intégration responsive et fidélité visuelle</li>
              <li>Accessibilité et navigation clavier</li>
              <li>API, debug, tests et refactor</li>
            </ul>

            <div className="home__hero-actions">
              <a href="#featured-project" className="home__button home__button--primary">
                Voir le projet mis en avant
              </a>
              <a href="#projects" className="home__button home__button--secondary">
                Voir mes projets
              </a>
              <a href="#skills" className="home__button home__button--secondary">
                Voir mes compétences
              </a>
            </div>
          </div>
        </section>

        <section
          id="featured-project"
          className="home__section home__section--featured"
          aria-labelledby="featured-project-title"
        >
          <div className="home__featured-card">
            <div className="home__featured-content">
              <p className="home__featured-label">Projet mis en avant</p>

              <h2 id="featured-project-title" className="home__featured-title">
                {featuredProject.title}
              </h2>

              <p className="home__featured-context">
                {featuredProject.context} • {featuredProject.duration}
              </p>

              <p className="home__featured-description">
                {featuredProject.fullDescription}
              </p>

              <div className="home__featured-highlight">
                <h3 className="home__featured-subtitle">Pourquoi ce projet est important</h3>
                <p className="home__featured-text">{featuredProject.recruiterHighlight}</p>
              </div>

              <ul
                className="home__featured-tags"
                aria-label={`Technologies du projet ${featuredProject.title}`}
              >
                {featuredProject.stack.map((item) => (
                  <li key={item} className="home__featured-tag">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="home__featured-actions">
                <Link
                  to={`/project/${featuredProject.id}`}
                  className="home__button home__button--primary"
                >
                  Voir le détail
                </Link>

                {featuredProject.github ? (
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="home__button home__button--secondary"
                    aria-label={`Voir le code du projet ${featuredProject.title} sur GitHub`}
                  >
                    Voir le code
                  </a>
                ) : null}
              </div>
            </div>

            <div className="home__featured-visual">
              <Link
                to={`/project/${featuredProject.id}`}
                className="home__featured-image-link"
                aria-label={`Voir le détail du projet ${featuredProject.title}`}
              >
                {featuredProject.image ? (
                  <img
                    className="home__featured-image"
                    src={featuredProject.image}
                    alt={`Aperçu du projet ${featuredProject.title}`}
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="home__featured-image home__featured-image--placeholder"
                    aria-hidden="true"
                  />
                )}
              </Link>
            </div>
          </div>
        </section>

        <section id="skills" className="home__section" aria-labelledby="skills-title">
          <h2 id="skills-title" className="home__section-title">
            Compétences clés
          </h2>

          <div className="home__skills-grid">
            <article className="home__info-card">
              <h3 className="home__card-title">Front-end React</h3>
              <p className="home__card-text">
                Développement d’interfaces en React avec une logique de composants
                réutilisables, une organisation claire du code et une attention portée à
                la maintenabilité.
              </p>
            </article>

            <article className="home__info-card">
              <h3 className="home__card-title">Intégration et responsive</h3>
              <p className="home__card-text">
                Intégration de maquettes en interfaces web fidèles, adaptables aux
                différents formats d’écran et pensées pour garantir une lecture fluide sur
                desktop, tablette et mobile.
              </p>
            </article>

            <article className="home__info-card">
              <h3 className="home__card-title">API et données</h3>
              <p className="home__card-text">
                Consommation d’API, affichage dynamique des données et structuration des
                informations pour une restitution claire et compréhensible côté
                utilisateur.
              </p>
            </article>

            <article className="home__info-card">
              <h3 className="home__card-title">Accessibilité et qualité</h3>
              <p className="home__card-text">
                Prise en compte de l’accessibilité dès la conception : structure
                sémantique, navigation clavier, lisibilité et attention portée à la
                qualité front-end.
              </p>
            </article>
          </div>
        </section>

        <section className="home__section" aria-labelledby="projects-value-title">
          <h2 id="projects-value-title" className="home__section-title">
            Ce que mes projets montrent
          </h2>

          <div className="home__value-list">
            <article className="home__value-item">
              <h3 className="home__card-title">Une progression structurée</h3>
              <p className="home__card-text">
                Mes projets montrent une montée en compétences cohérente, de
                l’intégration HTML/CSS jusqu’au développement d’interfaces React, à la
                consommation d’API, au debug, aux tests et au refactor.
              </p>
            </article>

            <article className="home__value-item">
              <h3 className="home__card-title">Une logique de travail claire</h3>
              <p className="home__card-text">
                J’accorde une importance particulière à l’organisation du code, à sa
                lisibilité et à sa maintenabilité, afin de produire des interfaces
                compréhensibles et durables.
              </p>
            </article>

            <article className="home__value-item">
              <h3 className="home__card-title">Un potentiel opérationnel</h3>
              <p className="home__card-text">
                Mon objectif est désormais de transformer cette base solide en expérience
                concrète en équipe, sur des interfaces utiles, accessibles et bien
                conçues.
              </p>
            </article>
          </div>
        </section>

        <section
          id="projects"
          className="home__section home__section--projects"
          aria-labelledby="projects-title"
        >
          <div className="home__projects-panel">
            <div className="home__projects-header">
              <h2 id="projects-title" className="home__section-title">
                Projets
              </h2>

              <p className="home__projects-intro">
                Des projets qui illustrent concrètement ma progression en développement
                front-end : intégration, accessibilité, React, API, refactor et qualité
                du code.
              </p>
            </div>

            <div className="home__projects-grid">
              {otherProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="home__project-item"
                  style={{ '--delay': `${index * 90}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="home__section home__section--contribution"
          aria-labelledby="contribution-title"
        >
          <div className="home__contribution-panel">
            <div className="home__contribution-header">
              <h2 id="contribution-title" className="home__section-title">
                Ce que je peux apporter à une équipe
              </h2>

              <p className="home__contribution-intro">
                Au-delà des outils, j’apporte une manière de travailler sérieuse,
                impliquée et tournée vers la qualité du produit final.
              </p>
            </div>

            <div className="home__contribution-grid">
              <article className="home__contribution-card">
                <p className="home__contribution-number">01</p>
                <h3 className="home__card-title">Rigueur et sens de l’organisation</h3>
                <p className="home__card-text">
                  Mon parcours m’a appris à travailler avec méthode, à structurer les
                  priorités et à avancer de façon fiable sur des tâches concrètes.
                </p>
              </article>

              <article className="home__contribution-card">
                <p className="home__contribution-number">02</p>
                <h3 className="home__card-title">Attention à l’utilisateur</h3>
                <p className="home__card-text">
                  Je veille à produire des interfaces compréhensibles, accessibles et
                  agréables à utiliser, avec un vrai souci de lisibilité et
                  d’expérience utilisateur.
                </p>
              </article>

              <article className="home__contribution-card">
                <p className="home__contribution-number">03</p>
                <h3 className="home__card-title">Envie d’apprendre et de progresser</h3>
                <p className="home__card-text">
                  Je suis dans une dynamique de progression continue, avec l’envie de
                  consolider mes acquis, de recevoir du feedback et de monter en
                  compétence en équipe.
                </p>
              </article>

              <article className="home__contribution-card">
                <p className="home__contribution-number">04</p>
                <h3 className="home__card-title">Code propre et maintenable</h3>
                <p className="home__card-text">
                  J’accorde de l’importance à la clarté du code, à la structure des
                  composants et à une base de travail compréhensible pour la suite du
                  projet.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="home__section" aria-labelledby="contact-title">
          <div className="home__contact-card">
            <h2 id="contact-title" className="home__section-title">
              Travaillons ensemble
            </h2>

            <p className="home__contact-text">
              Je recherche aujourd’hui une opportunité en front-end React pour
              contribuer à des interfaces accessibles, utiles et bien construites, tout
              en continuant à progresser au sein d’une équipe.
            </p>

            <div className="home__contact-actions">
              <a
                href="mailto:claire.gachelin@gmail.com"
                className="home__button home__button--primary"
              >
                Me contacter par email
              </a>

              <a
                href="https://www.linkedin.com/in/claire-gachelin"
                target="_blank"
                rel="noreferrer"
                className="home__button home__button--secondary"
                aria-label="Voir mon profil LinkedIn"
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