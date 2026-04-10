import { Link } from 'react-router-dom'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import './Footer.scss'

// Footer global du site.
// Il regroupe une présentation rapide, la navigation principale
// et les liens de contact (réseaux + email).
function Footer() {
  return (
    <footer className="site-footer">
      {/* Effet visuel décoratif (glow) en arrière-plan */}
      <div className="site-footer__glow" aria-hidden="true" />

      <div className="container site-footer__content">
        {/* Présentation */}
        <section className="site-footer__block" aria-labelledby="footer-about-title">
          <h2 id="footer-about-title" className="site-footer__title">
            Claire Gachelin
          </h2>

          <p className="site-footer__text">
            Développeuse front-end junior orientée React, sensible à
            l’accessibilité, à l’expérience utilisateur et aux interfaces
            soignées.
          </p>
        </section>

        {/* Navigation principale */}
        {/* Utilisation d’aria-label sur les icônes pour garantir l’accessibilité
    même sans texte visible */}
        <nav
          className="site-footer__block"
          aria-labelledby="footer-navigation-title"
        >
          <h2 id="footer-navigation-title" className="site-footer__title">
            Navigation
          </h2>

          <ul className="site-footer__list">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/projects">Projets</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
          </ul>
        </nav>

        {/* Liens de contact avec icônes accessibles */}
        <section className="site-footer__block" aria-labelledby="footer-contact-title">
          <h2 id="footer-contact-title" className="site-footer__title">
            Me contacter
          </h2>

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
              href="mailto:claire.gachelin@gmail.com"
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
        </section>
      </div>

      {/* Signature / crédit */}
      <div className="container site-footer__bottom">
        <p className="site-footer__signature">
          Conçu et développé avec soin par Claire Gachelin
        </p>
      </div>
    </footer>
  )
}

export default Footer