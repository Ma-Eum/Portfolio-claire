import './About.scss'

// Page de présentation.
// Elle permet de contextualiser le parcours et les objectifs professionnels.
function About() {
  return (
    <main id="main-content" className="about">
      <div className="container">
        <h1 className="about__title">À propos</h1>

        <p className="about__text">
          Après une reconversion dans le développement web, j’ai construit un parcours orienté
          front-end à travers des projets professionnalisants en HTML, CSS, JavaScript, React,
          consommation d’API, débogage, tests et migration d’applications.
        </p>

        <p className="about__text">
          Mon objectif est aujourd’hui de rejoindre une équipe où je pourrai consolider mes
          compétences, contribuer à des interfaces utiles et continuer à progresser dans de bonnes
          pratiques de développement et d’accessibilité.
        </p>
      </div>
    </main>
  )
}

export default About