import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Project from './pages/Project/Project'
import NotFound from './pages/NotFound/NotFound'

import './components/PageTransition/PageTransition.scss'

function AnimatedRoutes() {
  const location = useLocation()
  const isProjectPage = location.pathname.startsWith('/project/')

  return (
    <div
      key={location.pathname}
      className={`page-transition ${
        isProjectPage ? 'page-transition--project' : 'page-transition--default'
      }`}
    >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="app-shell">
        <a className="skip-link" href="#main-content">
          Aller au contenu principal
        </a>

        <Header />

        <main id="main-content" className="app-main">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App