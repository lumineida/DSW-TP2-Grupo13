import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function BookDetail() {
  const { key } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(() => {
    try { 
      return JSON.parse(localStorage.getItem('favoriteBooks') || '[]'); 
    } catch { 
      return []; 
    }
  });
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const fetchBookDetail = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Obtenemos detalles del libro desde Open Library
        const response = await fetch(`https://openlibrary.org/works/${key}.json`);
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const bookData = await response.json();
        
        // También buscamos información adicional del libro
        const searchResponse = await fetch(`https://openlibrary.org/search.json?q=key:${bookData.key}&limit=1`);
        let searchData = null;
        if (searchResponse.ok) {
          const search = await searchResponse.json();
          searchData = search.docs[0];
        }
        
        // Combinamos la información
        const combinedBook = {
          ...bookData,
          cover_i: searchData?.cover_i,
          author_name: searchData?.author_name,
          first_publish_year: searchData?.first_publish_year,
          publisher: searchData?.publisher,
          isbn: searchData?.isbn,
          subject: searchData?.subject,
          language: searchData?.language
        };
        
        setBook(combinedBook);
        console.log(' Detalle de libro cargado desde Open Library API');
        
      } catch (err) {
        console.error('❌ Error fetching book detail:', err);
        setError('No se pudo cargar la información del libro.');
      } finally {
        setLoading(false);
      }
    };

    if (key) {
      fetchBookDetail();
    }
  }, [key]);

  useEffect(() => {
    localStorage.setItem('favoriteBooks', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (bookKey) => {
    const fullKey = `/works/${bookKey}`;
    setFavorites((prev) => 
      prev.includes(fullKey) 
        ? prev.filter((x) => x !== fullKey) 
        : [...prev, fullKey]
    );
  };

  const getCoverUrl = (coverId, size = 'L') => {
    return `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`;
  };

  if (loading) return <div className="movie-message">Cargando detalles del libro...</div>;
  
  if (error) return (
    <div className="movie-message">
      <p>{error}</p>
      <button className="btn btn-primary" onClick={() => navigate('/books')}>
        Volver a Libros
      </button>
    </div>
  );
  
  if (!book) return <div className="movie-message">Libro no encontrado</div>;

  const fullKey = `/works/${key}`;

  return (
    <div className="movie-detail book-detail">
      <button className="btn" onClick={() => navigate('/books')}>
        ← Volver a Libros
      </button>
      
      <div className="movie-detail__layout">
        <div className={`movie-detail__poster ${imageLoaded ? 'loaded' : ''}`}>
          <div className="movie-poster-skeleton" aria-hidden></div>
          {book.cover_i ? (
            <img
              src={getCoverUrl(book.cover_i)}
              alt={book.title}
              className={`movie-poster-image ${imageLoaded ? 'loaded' : ''}`}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                e.target.src = '/src/assets/img/book-placeholder.svg';
              }}
            />
          ) : (
            <div className="no-cover-placeholder" style={{
              background: 'var(--bg-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              aspectRatio: '2/3',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-secondary)'
            }}>
              📚 Sin portada
            </div>
          )}
        </div>
        
        <div className="movie-detail__meta">
          <h2>{book.title}</h2>
          
          <div className="book-badges" style={{ marginBottom: '1rem' }}>
            {book.first_publish_year && (
              <span className="skill-tag">📅 {book.first_publish_year}</span>
            )}
            {book.language && book.language.length > 0 && (
              <span className="skill-tag">🌐 {book.language.slice(0, 2).join(', ').toUpperCase()}</span>
            )}
          </div>
          
          <div className="book-info-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            {book.author_name && (
              <div>
                <strong>📝 Autor(es):</strong><br />
                {book.author_name.slice(0, 3).join(', ')}
              </div>
            )}
            {book.publisher && (
              <div>
                <strong>🏢 Editorial:</strong><br />
                {book.publisher.slice(0, 2).join(', ')}
              </div>
            )}
          </div>
          
          {book.description && (
            <div style={{ marginBottom: '1.5rem' }}>
              <h4>📖 Descripción</h4>
              <p>
                {typeof book.description === 'string' 
                  ? book.description 
                  : book.description.value || 'Descripción no disponible'
                }
              </p>
            </div>
          )}

          {book.subject && book.subject.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <h4>🏷️ Géneros y Temas</h4>
              <div className="book-subjects" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {book.subject.slice(0, 10).map((subject, index) => (
                  <span key={index} className="skill-tag">{subject}</span>
                ))}
              </div>
            </div>
          )}

          <div className={`movie-detail__actions ${imageLoaded ? 'visible' : ''}`}>
            <button 
              className={`btn ${favorites.includes(fullKey) ? 'btn-primary' : ''}`}
              onClick={() => toggleFavorite(key)}
            >
              {favorites.includes(fullKey) ? '💖 Favorito' : '🤍 Favorito'}
            </button>
            <a 
              className="btn btn-primary" 
              href={`https://openlibrary.org${book.key}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              📚 Ver en Open Library
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}