import './About.scss'

// La page About complète la page d'accueil.
// Elle permet de raconter le parcours, le positionnement professionnel
// et la manière de travailler, sans répéter simplement la liste des projets.
function About() {
  return (
    <main id="main-content" className="about">
      <div className="container">
        <section className="about__intro" aria-labelledby="about-title">
          <h1 id="about-title" className="about__title">
            À propos
          </h1>

          <p className="about__text">
            Après une reconversion dans le développement web, j’ai construit un parcours orienté
            front-end à travers des projets professionnalisants en HTML, CSS, JavaScript, React,
            consommation d’API, débogage, tests et migration d’applications.
          </p>

          <p className="about__text">
            Mon objectif aujourd’hui est de rejoindre une équipe où je pourrai consolider mes
            compétences, contribuer à des interfaces utiles et continuer à progresser dans de bonnes
            pratiques de développement, d’accessibilité et de qualité front-end.
          </p>
        </section>

        <section className="about__section" aria-labelledby="about-strengths-title">
          <h2 id="about-strengths-title" className="about__section-title">
            Ce que je souhaite apporter
          </h2>

          <div className="about__grid">
            <article className="about__card">
              <h3 className="about__card-title">Clarté d’interface</h3>
              <p className="about__card-text">
                J’aime construire des interfaces lisibles, cohérentes et pensées pour faciliter la
                compréhension côté utilisateur.
              </p>
            </article>

            <article className="about__card">
              <h3 className="about__card-title">Code structuré</h3>
              <p className="about__card-text">
                Je porte une attention particulière à l’organisation du code, à la séparation des
                responsabilités et à la maintenabilité.
              </p>
            </article>

            <article className="about__card">
              <h3 className="about__card-title">Progression continue</h3>
              <p className="about__card-text">
                Mon parcours m’a appris à apprendre vite, à m’adapter et à approfondir mes
                compétences de manière progressive et concrète.
              </p>
            </article>
          </div>
        </section>

        <section className="about__section" aria-labelledby="about-target-title">
          <h2 id="about-target-title" className="about__section-title">
            Environnement recherché
          </h2>

          <p className="about__text">
            Je recherche un cadre dans lequel je pourrai évoluer en tant que développeuse front-end
            junior, travailler sur des interfaces web utiles, continuer à renforcer mes bases React
            et contribuer à une qualité de développement durable.
          </p>
        </section>
      </div>
    </main>
  )
}

export default About