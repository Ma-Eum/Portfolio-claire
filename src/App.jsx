import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
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
  const isProjectDetailPage = location.pathname.startsWith('/project/')
  const isNotFoundPage = location.pathname === '/404'

  return (
    <>
      <a className="skip-link" href="#main-content">
        Aller au contenu principal
      </a>

      <Header />
      <ScrollToTop />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>

      {!isProjectDetailPage && !isNotFoundPage && <Footer />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App