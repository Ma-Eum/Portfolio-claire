import { Link } from 'react-router-dom'
import './Footer.scss'

// Le footer complète les informations de contact
// et donne des liens rapides utiles en bas de page.
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__content">
        <div className="site-footer__block">
          <p className="site-footer__title">Claire Gachelin</p>
          <p className="site-footer__text">
            Portfolio de développeuse front-end junior orientée React.
          </p>
        </div>

        <div className="site-footer__block">
          <p className="site-footer__title">Liens utiles</p>
          <ul className="site-footer__list">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
            <li>
              <a
                href="https://github.com/Ma-Eum"
                target="_blank"
                rel="noreferrer"
                aria-label="Voir le profil GitHub de Claire Gachelin"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className="site-footer__block">
          <p className="site-footer__title">Contact</p>
          <ul className="site-footer__list">
            <li>
              <a href="mailto:cl.gachelin@gmail.com">cl.gachelin@gmail.com</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/claire-gachelin"
                target="_blank"
                rel="noreferrer"
                aria-label="Voir le profil LinkedIn de Claire Gachelin"
              >
                Profil LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer