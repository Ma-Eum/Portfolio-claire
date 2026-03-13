import './Project.scss'

// Page de détail projet.
// Pour l'instant, on prépare une base simple.
// On branchera ensuite cette page sur les données dynamiques des projets.
function Project() {
  return (
    <main id="main-content" className="project">
      <div className="container">
        <h1 className="project__title">Détail du projet</h1>

        <p className="project__text">
          Cette page sera complétée à l’étape suivante avec les informations détaillées de chaque
          projet.
        </p>
      </div>
    </main>
  )
}

export default Project