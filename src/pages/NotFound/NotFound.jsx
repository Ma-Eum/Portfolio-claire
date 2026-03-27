import { Link, useNavigate } from 'react-router-dom'
import './NotFound.scss'

// Page 404 affichée lorsqu'aucune route ne correspond.
// L'objectif est de guider l'utilisateur avec un message clair,
// un ton légèrement original et des actions de retour simples.
function NotFound() {
  const navigate = useNavigate()

  return (
    <main id="main-content" className="not-found">
      <div className="container">
        <section className="not-found__content" aria-labelledby="not-found-title">
          <div className="not-found__visual" aria-hidden="true">
            <div className="not-found__planet"></div>
            <div className="not-found__astronaut">🚀</div>
            <div className="not-found__stars"></div>
          </div>

          <div className="not-found__text-block">
            <p className="not-found__eyebrow">Erreur de navigation</p>

            <h1 id="not-found-title" className="not-found__title">
              404 — Houston, nous avons un souci
            </h1>

            <p className="not-found__text">
              La page que vous cherchez s’est perdue dans l’espace.
            </p>

            <p className="not-found__text not-found__text--secondary">
              Pas d’inquiétude, on peut vous ramener sur une orbite plus sûre.
            </p>

            <div className="not-found__actions">
              <Link className="not-found__button not-found__button--primary" to="/">
                Retour à l’accueil
              </Link>

              <button
                type="button"
                className="not-found__button not-found__button--secondary"
                onClick={() => navigate(-1)}
              >
                Revenir en arrière
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default NotFound