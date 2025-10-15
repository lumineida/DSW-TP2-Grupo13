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
  const [imageLoaded, setImageLoaded] = useState(false);

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

  if (loading) return <div className="movie-message">Cargando...</div>;
  if (!movie) return <div className="movie-message">Película no encontrada</div>;

  return (
    <div className="movie-detail">
<button 
  className="btn-primary" 
  onClick={() => navigate(-1)}

>
  ← Volver
</button>
      <div className="movie-detail__layout">
        <div className={`movie-detail__poster ${imageLoaded ? 'loaded' : ''}`}>
          <div className="movie-poster-skeleton" aria-hidden></div>
          <img
            src={movie.image}
            alt={movie.title}
            className={`movie-poster-image ${imageLoaded ? 'loaded' : ''}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="movie-detail__meta">
          <h2>{movie.title} <span className="movie-year">({movie.year})</span></h2>
          <p>⭐ {movie.rating}</p>
          <p>{movie.synopsis}</p>
          <div className={`movie-detail__actions ${imageLoaded ? 'visible' : ''}`}>
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
