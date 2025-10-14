import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem('favorites') || '[]'); } catch { return []; }
  });

  useEffect(() => {
    fetch('/data/movies.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((m) => String(m.id) === String(id));
        setMovie(found);
        setLoading(false);
      })
      .catch((err) => { console.error(err); setLoading(false); });
  }, [id]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movieId) => {
    setFavorites((prev) => (prev.includes(movieId) ? prev.filter((x) => x !== movieId) : [...prev, movieId]));
  };

  if (loading) return <div style={{ padding: '2rem' }}>Cargando...</div>;
  if (!movie) return <div style={{ padding: '2rem' }}>Película no encontrada</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <button className="btn" onClick={() => navigate(-1)}>Volver</button>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
        <div style={{ flex: '0 0 360px' }}>
          <img src={movie.image} alt={movie.title} style={{ width: '100%', borderRadius: '12px' }} />
        </div>
        <div style={{ flex: 1 }}>
          <h2>{movie.title} <span style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>({movie.year})</span></h2>
          <p>⭐ {movie.rating}</p>
          <p>{movie.synopsis}</p>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <button className={`btn ${favorites.includes(movie.id) ? 'btn-primary' : ''}`} onClick={() => toggleFavorite(movie.id)}>
              {favorites.includes(movie.id) ? 'Favorita' : 'Favorito'}
            </button>
            <a className="btn btn-primary" href="#">Ver trailer</a>
          </div>
        </div>
      </div>
    </div>
  );
}
