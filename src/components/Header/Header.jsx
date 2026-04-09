import { useEffect, useId, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigationId = useId()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink
          to="/"
          className="site-header__brand"
          aria-label="Accueil - Claire Gachelin"
          onClick={closeMenu}
        >
          <span className="site-header__name">Claire Gachelin</span>
          <span className="site-header__role">Front-End React</span>
        </NavLink>

        <button
          className="site-header__toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls={navigationId}
          aria-label={isMenuOpen ? 'Fermer le menu principal' : 'Ouvrir le menu principal'}
          onClick={toggleMenu}
        >
          <span className="site-header__toggle-line" aria-hidden="true" />
          <span className="site-header__toggle-line" aria-hidden="true" />
          <span className="site-header__toggle-line" aria-hidden="true" />
        </button>

        <nav
          id={navigationId}
          className={`site-header__nav ${isMenuOpen ? 'site-header__nav--open' : ''}`}
          aria-label="Navigation principale"
        >
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              `site-header__link ${isActive ? 'site-header__link--active' : ''}`
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/projects"
            onClick={closeMenu}
            className={({ isActive }) =>
              `site-header__link ${isActive ? 'site-header__link--active' : ''}`
            }
          >
            Projets
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              `site-header__link ${isActive ? 'site-header__link--active' : ''}`
            }
          >
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header