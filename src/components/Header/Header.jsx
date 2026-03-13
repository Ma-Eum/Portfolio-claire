import { NavLink } from 'react-router-dom'
import './header.scss'

function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__content">
        <NavLink className="site-header__brand" to="/">
          Claire Gachelin
        </NavLink>

        <nav className="site-header__nav" aria-label="Navigation principale">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'site-header__link site-header__link--active' : 'site-header__link'
            }
          >
            Projets
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'site-header__link site-header__link--active' : 'site-header__link'
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