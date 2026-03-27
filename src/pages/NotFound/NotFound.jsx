import { Link, useNavigate } from 'react-router-dom'
import './NotFound.scss'

// Page 404 version sakura.
// L'objectif est de proposer une expérience poétique, douce et lisible,
// tout en laissant des actions simples pour revenir dans la navigation.
function NotFound() {
  const navigate = useNavigate()

  return (
    <main id="main-content" className="not-found">
      <div className="container">
        <section className="not-found__content" aria-labelledby="not-found-title">
          <div className="not-found__visual" aria-hidden="true">
            <div className="not-found__sun"></div>
            <div className="not-found__branch"></div>

            <span className="not-found__petal not-found__petal--1"></span>
            <span className="not-found__petal not-found__petal--2"></span>
            <span className="not-found__petal not-found__petal--3"></span>
            <span className="not-found__petal not-found__petal--4"></span>
            <span className="not-found__petal not-found__petal--5"></span>
          </div>

          <div className="not-found__text-block">
            <p className="not-found__eyebrow">Erreur de navigation</p>

            <h1 id="not-found-title" className="not-found__title">
              404 — Les pétales ont emporté cette page
            </h1>

            <p className="not-found__text">
              Parfois, certains chemins se dispersent comme des fleurs de sakura dans le vent.
            </p>

            <p className="not-found__text not-found__text--secondary">
              Cette page n’est plus ici, mais vous pouvez revenir vers un endroit plus familier.
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