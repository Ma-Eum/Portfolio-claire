import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
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

  return (
    <>
      <a className="skip-link" href="#main-content">
        Aller au contenu principal
      </a>

      <Header />

      <ScrollToTop />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:slug" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isProjectDetailPage && <Footer />}
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