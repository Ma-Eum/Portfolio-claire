import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Project from './pages/Project/Project'
import NotFound from './pages/NotFound/NotFound'

// App gère la structure générale du site.
// Le Header et le Footer sont communs à toutes les pages.
// Les Routes permettent d'afficher la bonne page selon l'URL.
function App() {
  return (
    <BrowserRouter>
      <a className="skip-link" href="#main-content">
        Aller au contenu principal
      </a>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App