import './home.scss'

// Home est la page d'accueil du portfolio.
// Le <main> porte l'id "main-content" pour fonctionner avec le lien d'évitement.
// On structure le contenu avec des sections sémantiques.
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
            Projets
          </h2>

          <p className="home__placeholder">
            La liste détaillée des projets sera ajoutée à l’étape suivante avec les cartes projet
            et les données dynamiques.
          </p>
        </section>
      </div>
    </main>
  )
}

export default Home