import SakuraPetals from '../../components/SakuraPetals/SakuraPetals'
import './About.scss'

function About() {
  return (
    <main id="main-content" className="about">
      <SakuraPetals />

      <div className="container about__container">
        <section className="about__intro">
          <h1 className="about__title">À propos</h1>

          <p className="about__text">
            Après une reconversion dans le développement web, j’ai construit un parcours
            orienté front-end à travers des projets professionnalisants en HTML, CSS,
            JavaScript, React, consommation d’API, débogage, tests et migration
            d’applications.
          </p>

          <p className="about__text">
            Mon objectif aujourd’hui est de rejoindre une équipe où je pourrai consolider
            mes compétences, contribuer à des interfaces utiles et continuer à progresser
            dans de bonnes pratiques de développement, d’accessibilité et de qualité
            front-end.
          </p>
        </section>

        <section className="about__section about__section--contribution">
          <div className="about__panel">
            <div className="about__panel-header">
              <h2 className="about__section-title">Ce que je souhaite apporter</h2>

              <p className="about__panel-intro">
                Une attention réelle à la lisibilité, à la structure, à la qualité du code
                et à une progression continue au service de l’équipe et du produit.
              </p>
            </div>

            <div className="about__grid">
              <article className="about__card">
                <p className="about__card-number">01</p>
                <h3 className="about__card-title">Clarté d’interface</h3>
                <p className="about__card-text">
                  J’aime construire des interfaces lisibles, cohérentes et pensées pour
                  faciliter la compréhension côté utilisateur.
                </p>
              </article>

              <article className="about__card">
                <p className="about__card-number">02</p>
                <h3 className="about__card-title">Code structuré</h3>
                <p className="about__card-text">
                  Je porte une attention particulière à l’organisation du code, à la
                  séparation des responsabilités et à la maintenabilité.
                </p>
              </article>

              <article className="about__card">
                <p className="about__card-number">03</p>
                <h3 className="about__card-title">Progression continue</h3>
                <p className="about__card-text">
                  Mon parcours m’a appris à apprendre vite, à m’adapter et à approfondir
                  mes compétences de manière progressive et concrète.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="about__section">
          <h2 className="about__section-title">Environnement recherché</h2>

          <p className="about__text">
            Je recherche un cadre dans lequel je pourrai évoluer en tant que développeuse
            front-end junior, travailler sur des interfaces web utiles, continuer à
            renforcer mes bases React et contribuer à une qualité de développement durable.
          </p>
        </section>
      </div>
    </main>
  )
}

export default About