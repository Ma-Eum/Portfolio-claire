import { Link, useNavigate } from 'react-router-dom'
import './NotFound.scss'

function NotFound() {
  const navigate = useNavigate()

  return (
    <main id="main-content" className="not-found">
      <section className="not-found__content" aria-labelledby="not-found-title">
        <div className="not-found__visual" aria-hidden="true" />

        <div className="not-found__petals" aria-hidden="true">
          <span className="petal petal--1" />
          <span className="petal petal--2" />
          <span className="petal petal--3" />
          <span className="petal petal--4" />
          <span className="petal petal--5" />
          <span className="petal petal--6" />
          <span className="petal petal--7" />
          <span className="petal petal--8" />
        </div>

        <div className="not-found__text">
          <span className="not-found__kanji" aria-hidden="true">
            桜
          </span>

          <p className="not-found__eyebrow">Erreur de navigation</p>

          <h1 id="not-found-title" className="not-found__title">
            404 — Les pétales
            <br />
            ont emporté ce
            <br />
            chemin
          </h1>

          <p className="not-found__description">
            Parfois, certains chemins s’éloignent sans bruit, comme des pétales
            de sakura portés par le vent.
          </p>

          <p className="not-found__description">
            Cette page s’est effacée ailleurs, mais il reste toujours un sentier
            pour revenir vers l’essentiel.
          </p>

          <div className="not-found__actions">
            <Link to="/" className="not-found__button not-found__button--primary">
              Retour à l’accueil
            </Link>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="not-found__button not-found__button--secondary"
            >
              Revenir en arrière
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NotFound