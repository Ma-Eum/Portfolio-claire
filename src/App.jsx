import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Project from './pages/Project/Project'

// App gère la structure générale du site.
// Le Header et le Footer sont communs à toutes les pages.
// Les Routes permettent d'afficher la bonne page selon l'URL.
function App() {
  return (
    <BrowserRouter>
      {/* Lien d'évitement pour l'accessibilité :
          il permet aux utilisateurs clavier et lecteurs d'écran
          de passer directement au contenu principal. */}
      <a className="skip-link" href="#main-content">
        Aller au contenu principal
      </a>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App