import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('favoriteBooks') || '[]');
    } catch {
      return [];
    }
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Buscamos libros populares de ficción
        const response = await fetch('https://openlibrary.org/search.json?q=subject:fiction&sort=rating&limit=24');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Filtramos libros que tengan información completa
        const filteredBooks = data.docs.filter(book => 
          book.title && 
          book.author_name && 
          book.first_publish_year &&
          book.cover_i
        ).slice(0, 20);
        
        setBooks(filteredBooks);
        console.log('✅ Libros cargados desde Open Library API:', filteredBooks.length);
        
      } catch (err) {
        console.error('❌ Error fetching books:', err);
        setError('No se pudieron cargar los libros. Verifica tu conexión a internet.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteBooks', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (key) => {
    setFavorites((prev) => 
      prev.includes(key) 
        ? prev.filter((x) => x !== key) 
        : [...prev, key]
    );
  };

  const getCoverUrl = (coverId, size = 'M') => {
    return `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`;
  };

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>📚 Biblioteca Digital</h2>
        <div className="loading-spinner">
          <p>Cargando libros increíbles... 📖</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>📚 Biblioteca Digital</h2>
        <div className="error-message" style={{ 
          background: 'var(--error-color)', 
          color: 'white', 
          padding: '1rem', 
          borderRadius: 'var(--radius-md)',
          margin: '1rem 0'
        }}>
          <p>{error}</p>
          <button 
            className="btn btn-primary" 
            onClick={() => window.location.reload()}
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📚 Biblioteca Digital</h2>
      <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
        Descubre libros populares de ficción de la biblioteca más grande del mundo
      </p>
      
      <div style={{ 
        marginBottom: '2rem', 
        padding: '0.75rem', 
        background: 'var(--bg-tertiary)', 
        borderRadius: 'var(--radius-md)',
        fontSize: '0.9rem',
        color: 'var(--text-primary)'
      }}>
        📡 <strong>Fuente de datos:</strong> Open Library API (Internet Archive)
      </div>
      
      <div className="team-grid">
        {books.map((book) => (
          <div key={book.key} className="member-card book-card">
            <div className="card-image">
              <img 
                src={getCoverUrl(book.cover_i)}
                alt={book.title}
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/src/assets/img/book-placeholder.svg';
                }}
              />
              <div className="book-year-badge">
                {book.first_publish_year}
              </div>
            </div>
            
            <div className="card-content">
              <h4 className="member-name">{book.title}</h4>
              <p className="member-role">
                📝 {book.author_name ? book.author_name.slice(0, 2).join(', ') : 'Autor desconocido'}
              </p>
              <p className="member-description">
                {book.subject ? 
                  `Géneros: ${book.subject.slice(0, 3).join(', ')}` : 
                  'Libro de ficción popular'
                }
              </p>
              
              <div className="book-metadata">
                {book.publisher && (
                  <span className="book-publisher">🏢 {book.publisher.slice(0, 2).join(', ')}</span>
                )}
                {book.language && (
                  <span className="book-language">🌐 {book.language.slice(0, 2).join(', ').toUpperCase()}</span>
                )}
              </div>
              
              <div style={{ 
                display: 'flex', 
                gap: '0.5rem', 
                marginTop: '1rem',
                flexWrap: 'wrap'
              }}>
                <button 
                  className={`btn ${favorites.includes(book.key) ? 'btn-primary' : ''}`}
                  onClick={() => toggleFavorite(book.key)}
                  style={{ flex: '1', minWidth: '100px' }}
                >
                  {favorites.includes(book.key) ? '💖 Favorito' : '🤍 Favorito'}
                </button>
                <button 
                  className="btn btn-primary" 
                  onClick={() => navigate(`/books/${book.key.replace('/works/', '')}`)}
                  style={{ flex: '1', minWidth: '100px' }}
                >
                  Ver detalles
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}