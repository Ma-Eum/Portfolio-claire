import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Footer.scss'

// Le footer complète les informations de contact
// et donne des liens rapides utiles en bas de page.
function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__glow" aria-hidden="true"></div>

      <div className="container site-footer__content">
        <div className="site-footer__block">
          <p className="site-footer__title">Claire Gachelin</p>
          <p className="site-footer__text">
            Développeuse front-end junior orientée React, sensible à
            l’accessibilité, à l’expérience utilisateur et aux interfaces
            soignées.
          </p>
        </div>

        <div className="site-footer__block">
          <p className="site-footer__title">Navigation</p>
          <ul className="site-footer__list">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
          </ul>
        </div>

        <div className="site-footer__block">
          <p className="site-footer__title">Me contacter</p>

          <div className="site-footer__icons" aria-label="Liens de contact">
            <a
              href="https://github.com/Ma-Eum"
              target="_blank"
              rel="noreferrer"
              aria-label="Voir le profil GitHub de Claire Gachelin"
              className="site-footer__icon-link"
              data-label="GitHub"
            >
              <FaGithub aria-hidden="true" focusable="false" />
            </a>

            <a
              href="mailto:cl.gachelin@gmail.com"
              aria-label="Envoyer un email à Claire Gachelin"
              className="site-footer__icon-link"
              data-label="Email"
            >
              <FaEnvelope aria-hidden="true" focusable="false" />
            </a>

            <a
              href="https://www.linkedin.com/in/claire-gachelin"
              target="_blank"
              rel="noreferrer"
              aria-label="Voir le profil LinkedIn de Claire Gachelin"
              className="site-footer__icon-link"
              data-label="LinkedIn"
            >
              <FaLinkedin aria-hidden="true" focusable="false" />
            </a>
          </div>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p className="site-footer__signature">
          Conçu et développé avec soin par Claire Gachelin
        </p>
      </div>
    </footer>
  )
}

export default Footer