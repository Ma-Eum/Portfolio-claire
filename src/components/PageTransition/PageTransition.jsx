import { useLocation } from 'react-router-dom'
import './PageTransition.scss'

function PageTransition({ children }) {
  const location = useLocation()
  const isProjectPage = location.pathname.startsWith('/project/')

  return (
    <div
      key={location.pathname}
      className={`page-transition ${
        isProjectPage ? 'page-transition--project' : 'page-transition--default'
      }`}
    >
      {children}
    </div>
  )
}

export default PageTransition