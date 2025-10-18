import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moviesData from "../data/movies.json";

// Importa dinámicamente todas las imágenes de películas.
// Vite las procesará y nos dará las URLs finales para producción.
const movieImageModules = import.meta.glob('../assets/img/movie*.jpg', { eager: true, as: 'url' });
const movieImages = Object.fromEntries(Object.entries(movieImageModules).map(([path, url]) => [path.split('/').pop(), url]));

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('favorites') || '[]');
    } catch (e) {
      return [];
    }
  });

  const navigate = useNavigate();

  useEffect(() => {
    setMovies(moviesData);
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  if (loading) return <div style={{ padding: '2rem', color: 'white' }}>Cargando películas...</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ color: 'white' }}>Películas</h2>
      <div className="team-grid">
        {movies.map((m) => (
          <div key={m.id} className="member-card">
            <div className="card-image">
              <img src={movieImages[m.image]} alt={m.title} loading="lazy" />
            </div>
            <div className="card-content">
              <h4 className="member-name">{m.title}</h4>
              <p className="member-theme">{m.year} • ⭐ {m.rating}</p>
              <p className="member-description">{m.synopsis}</p>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                <button className={`btn ${favorites.includes(m.id) ? 'btn-primary' : ''}`} onClick={() => toggleFavorite(m.id)} style={{ minWidth: '100px' }}>
                  {favorites.includes(m.id) ? '💖 Favorito' : '🤍 Favorito'}  
                </button>
                <button className="btn btn-primary" onClick={() => navigate(`/movies/${m.id}`)}>Ver detalles</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
