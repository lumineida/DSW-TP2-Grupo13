import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"
import './styles/styles.css'
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from './pages/inicio';
import Bitacora from './pages/bitacora';
import Integrantes from "./pages/Integrantes";
import Integrante from './pages/Integrante';
import NotFoundPage from './pages/NotFoundPage';
import Contacto from "./pages/Contacto";
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(darkMode ? "dark-mode" : "light-mode");
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <Router>
      <div className="container">
        <div style={{ display: "flex", flex: 1 }}>
          <Sidebar />
          <main>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/integrantes" element={<Integrantes />}>
                <Route index element={<Integrante />} />
                <Route path=":path" element={<Integrante />} />
              </Route>
              <Route path="/bitacora" element={<Bitacora />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:id" element={<MovieDetail />} />
              <Route path="/books" element={<Books />} />
              <Route path="/books/:key" element={<BookDetail />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App
