import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={toggleMenu}
        >
          <span className="site-header__toggle-line" />
          <span className="site-header__toggle-line" />
          <span className="site-header__toggle-line" />
        </button>

        <nav
          id="primary-navigation"
          className={`site-header__nav ${isMenuOpen ? 'site-header__nav--open' : ''}`}
          aria-label="Navigation principale"
        >
          <NavLink
            to="/"
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