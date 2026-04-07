import './About.scss'

function About() {
  return (
    <div className="about">
      <div className="container about__container">
        <section className="about__intro" aria-labelledby="about-title">
          <h1 id="about-title" className="about__title">
            À propos
          </h1>

          <p className="about__text">
            Après une reconversion dans le développement web, j’ai construit un parcours
            orienté front-end à travers des projets professionnalisants en HTML, CSS,
            JavaScript et React.
          </p>

          <p className="about__text">
            J’ai développé des compétences en intégration, consommation d’API, débogage,
            tests et refactor, avec une attention particulière portée à la lisibilité du
            code, à l’expérience utilisateur et à l’accessibilité.
          </p>

          <p className="about__text">
            Mon objectif aujourd’hui est de rejoindre une équipe où je pourrai consolider
            mes compétences, contribuer à des interfaces utiles et continuer à progresser
            dans de bonnes pratiques de développement, d’accessibilité et de qualité
            front-end.
          </p>
        </section>

        <section
          className="about__section"
          aria-labelledby="about-positioning-title"
        >
          <div className="about__panel">
            <div className="about__panel-header">
              <h2 id="about-positioning-title" className="about__section-title">
                Mon positionnement
              </h2>

              <p className="about__panel-intro">
                Je recherche une opportunité en front-end React pour contribuer à des
                interfaces accessibles, lisibles et bien construites, tout en continuant à
                progresser au sein d’une équipe.
              </p>
            </div>

            <div className="about__grid">
              <article className="about__card">
                <p className="about__card-number">01</p>
                <h3 className="about__card-title">Développement front-end</h3>
                <p className="about__card-text">
                  Je conçois des interfaces en React avec une logique de composants
                  réutilisables, une organisation claire du code et une attention portée à
                  la maintenabilité.
                </p>
              </article>

              <article className="about__card">
                <p className="about__card-number">02</p>
                <h3 className="about__card-title">Intégration soignée</h3>
                <p className="about__card-text">
                  J’accorde une importance particulière à la fidélité visuelle, à la
                  cohérence des interfaces et à leur adaptation sur desktop, tablette et
                  mobile.
                </p>
              </article>

              <article className="about__card">
                <p className="about__card-number">03</p>
                <h3 className="about__card-title">Accessibilité</h3>
                <p className="about__card-text">
                  L’accessibilité fait partie de ma manière de travailler : structure
                  sémantique, navigation clavier, lisibilité des contenus et attention
                  portée au confort d’usage.
                </p>
              </article>

              <article className="about__card">
                <p className="about__card-number">04</p>
                <h3 className="about__card-title">Qualité et progression</h3>
                <p className="about__card-text">
                  Mon parcours m’a appris à travailler avec sérieux, à apprendre en
                  continu, à prendre du recul sur mon code et à progresser de façon
                  structurée.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="about__section"
          aria-labelledby="about-value-title"
        >
          <div className="about__panel">
            <div className="about__panel-header">
              <h2 id="about-value-title" className="about__section-title">
                Ce que je souhaite apporter
              </h2>

              <p className="about__panel-intro">
                Au-delà des outils, j’apporte une façon de travailler sérieuse, impliquée
                et attentive à la qualité du rendu comme à la compréhension du produit.
              </p>
            </div>

            <div className="about__grid">
              <article className="about__card">
                <p className="about__card-number">01</p>
                <h3 className="about__card-title">Rigueur</h3>
                <p className="about__card-text">
                  Je travaille avec méthode, en portant attention aux détails, à la
                  cohérence des interfaces et à la clarté de l’ensemble.
                </p>
              </article>

              <article className="about__card">
                <p className="about__card-number">02</p>
                <h3 className="about__card-title">Lisibilité</h3>
                <p className="about__card-text">
                  J’aime produire des interfaces compréhensibles et un code structuré,
                  afin de faciliter autant l’expérience utilisateur que la reprise du
                  projet par d’autres développeurs.
                </p>
              </article>

              <article className="about__card">
                <p className="about__card-number">03</p>
                <h3 className="about__card-title">Sens de l’utilisateur</h3>
                <p className="about__card-text">
                  Je veille à proposer des parcours fluides, des contenus lisibles et des
                  interfaces agréables à utiliser, avec une vraie attention portée aux
                  besoins de l’utilisateur final.
                </p>
              </article>

              <article className="about__card">
                <p className="about__card-number">04</p>
                <h3 className="about__card-title">Esprit d’évolution</h3>
                <p className="about__card-text">
                  Je suis dans une dynamique d’apprentissage continue, avec l’envie de
                  consolider mes acquis, de recevoir du feedback et de progresser en
                  équipe sur des projets concrets.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="about__section"
          aria-labelledby="about-goal-title"
        >
          <div className="about__panel">
            <div className="about__panel-header">
              <h2 id="about-goal-title" className="about__section-title">
                Mon objectif aujourd’hui
              </h2>

              <p className="about__panel-intro">
                Transformer cette base solide en expérience concrète en entreprise, sur
                des produits utiles, accessibles et bien pensés.
              </p>
            </div>

            <p className="about__text">
              Je recherche aujourd’hui une opportunité en front-end React pour contribuer
              à des interfaces performantes, accessibles et bien construites, tout en
              continuant à développer mes compétences au contact d’une équipe.
            </p>

            <p className="about__text">
              Mon parcours de reconversion m’a permis de développer une méthode de travail
              sérieuse, rigoureuse et orientée progression. Je souhaite désormais mettre
              cette énergie au service de projets réels, avec une attention particulière
              portée à la qualité du rendu, à la lisibilité et à l’expérience
              utilisateur.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About