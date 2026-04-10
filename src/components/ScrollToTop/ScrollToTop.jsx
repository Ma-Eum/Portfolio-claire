import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Permet de réinitialiser le scroll en haut de page
// à chaque changement de route.
function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    // Force le retour en haut immédiatement après le changement de page
    // pour éviter un effet de "scroll conservé" entre les routes
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop