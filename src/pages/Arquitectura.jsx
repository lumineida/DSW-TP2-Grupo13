import React, { useState } from "react";
import Hero from "../components/Hero";

// Componente para los botones de navegación
const DiagramSelector = ({ activeView, onViewChange }) => {
  const buttons = [
    { id: 'components', label: 'Componentes React', icon: '⚛️' },
    { id: 'folders', label: 'Estructura de Carpetas', icon: '📁' }
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '2rem'
    }}>
      {buttons.map(button => (
        <button
          key={button.id}
          onClick={() => onViewChange(button.id)}
          style={{
            padding: '1rem 2rem',
            border: 'none',
            borderRadius: 'var(--radius-lg)',
            background: activeView === button.id 
              ? 'var(--primary-color)' 
              : 'var(--bg-secondary)',
            color: activeView === button.id 
              ? 'white' 
              : 'var(--text-primary)',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            boxShadow: activeView === button.id 
              ? 'var(--shadow-lg)' 
              : 'var(--shadow-sm)',
            transform: activeView === button.id ? 'translateY(-2px)' : 'none'
          }}
          onMouseEnter={(e) => {
            if (activeView !== button.id) {
              e.target.style.background = 'var(--bg-tertiary)';
              e.target.style.transform = 'translateY(-1px)';
            }
          }}
          onMouseLeave={(e) => {
            if (activeView !== button.id) {
              e.target.style.background = 'var(--bg-secondary)';
              e.target.style.transform = 'none';
            }
          }}
        >
          <span style={{ marginRight: '0.5rem' }}>{button.icon}</span>
          {button.label}
        </button>
      ))}
    </div>
  );
};

// Componente para mostrar diagramas con contenido completo
const DiagramViewer = ({ type }) => {
  if (type === 'components') {
    return (
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{ 
          fontSize: '2rem', 
          marginBottom: '1.5rem', 
          color: 'var(--primary-color)',
          textAlign: 'center'
        }}>
          Árbol de Renderizado de Componentes
        </h3>
        
        <div style={{ 
          background: 'var(--bg-primary)', 
          padding: '2rem', 
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lg)',
          marginBottom: '2rem'
        }}>
          <h4 style={{ marginBottom: '1rem', color: 'var(--secondary-color)' }}>
            Jerarquía de Componentes React
          </h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Este diagrama muestra cómo se organiza la aplicación a nivel de componentes, 
            incluyendo las rutas SPA y la relación padre-hijo entre componentes.
          </p>
          
          <div className="component-tree" style={{
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            lineHeight: '1.6',
            background: 'var(--bg-secondary)',
            padding: '1.5rem',
            borderRadius: 'var(--radius-md)',
            overflow: 'auto'
          }}>
            <div><strong>App.jsx</strong> (Estado: darkMode, router principal)</div>
            <div style={{ marginLeft: '20px' }}>├── Router (react-router-dom)</div>
            <div style={{ marginLeft: '40px' }}>│   ├── Sidebar.jsx</div>
            <div style={{ marginLeft: '40px' }}>│   ├── Header.jsx</div>
            <div style={{ marginLeft: '40px' }}>│   ├── Routes</div>
            <div style={{ marginLeft: '60px' }}>│   │   ├── / → Inicio.jsx</div>
            <div style={{ marginLeft: '80px' }}>│   │   │   └── Hero.jsx</div>
            <div style={{ marginLeft: '60px' }}>│   │   ├── /integrantes → Integrantes.jsx</div>
            <div style={{ marginLeft: '80px' }}>│   │   │   ├── Hero.jsx</div>
            <div style={{ marginLeft: '80px' }}>│   │   │   └── Card.jsx (x4)</div>
            <div style={{ marginLeft: '60px' }}>│   │   ├── /integrantes/:path → Integrante.jsx</div>
            <div style={{ marginLeft: '80px' }}>│   │   │   └── Hero.jsx</div>
            <div style={{ marginLeft: '60px' }}>│   │   ├── /bitacora → Bitacora.jsx</div>
            <div style={{ marginLeft: '80px' }}>│   │   │   └── Hero.jsx</div>
            <div style={{ marginLeft: '60px' }}>│   │   ├── /movies → Movies.jsx</div>
            <div style={{ marginLeft: '80px' }}>│   │   │   ├── Hero.jsx</div>
            <div style={{ marginLeft: '80px' }}>│   │   │   └── Card.jsx (x20)</div>
            <div style={{ marginLeft: '60px' }}>│   │   ├── /movies/:id → MovieDetail.jsx</div>
            <div style={{ marginLeft: '80px' }}>│   │   │   └── Hero.jsx</div>
            <div style={{ marginLeft: '60px' }}>│   │   ├── /books → Books.jsx (API: Open Library)</div>
            <div style={{ marginLeft: '80px' }}>│   │   │   ├── Hero.jsx</div>
            <div style={{ marginLeft: '80px' }}>│   │   │   └── Card.jsx (x20)</div>
            <div style={{ marginLeft: '60px' }}>│   │   ├── /books/:key → BookDetail.jsx (API)</div>
            <div style={{ marginLeft: '80px' }}>│   │   │   └── Hero.jsx</div>
            <div style={{ marginLeft: '60px' }}>│   │   ├── /arquitectura → Arquitectura.jsx</div>
            <div style={{ marginLeft: '80px' }}>│   │   │   └── Hero.jsx</div>
            <div style={{ marginLeft: '60px' }}>│   │   ├── /contacto → Contacto.jsx</div>
            <div style={{ marginLeft: '80px' }}>│   │   │   └── Hero.jsx</div>
            <div style={{ marginLeft: '60px' }}>│   │   └── /* → NotFoundPage.jsx</div>
            <div style={{ marginLeft: '40px' }}>│   └── Footer.jsx</div>
          </div>
          
          <div style={{ 
            marginTop: '1.5rem', 
            padding: '1rem', 
            background: 'var(--bg-tertiary)', 
            borderRadius: 'var(--radius-md)' 
          }}>
            <h5 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
              Notas Técnicas:
            </h5>
            <ul style={{ color: 'var(--text-secondary)', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Hero.jsx:</strong> Componente reutilizado en todas las páginas</li>
              <li><strong>Card.jsx:</strong> Componente genérico para mostrar datos</li>
              <li><strong>Estado Global:</strong> Dark mode manejado en App.jsx</li>
              <li><strong>API Externa:</strong> Open Library para libros (sin CORS)</li>
              <li><strong>SPA:</strong> React Router para navegación sin recarga</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'folders') {
    return (
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{ 
          fontSize: '2rem', 
          marginBottom: '1.5rem', 
          color: 'var(--primary-color)',
          textAlign: 'center'
        }}>
          Estructura de Carpetas y Archivos
        </h3>
        
        <div style={{ 
          background: 'var(--bg-primary)', 
          padding: '2rem', 
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <h4 style={{ marginBottom: '1rem', color: 'var(--secondary-color)' }}>
            Organización del Proyecto
          </h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Estructura de carpetas que sigue las mejores prácticas de React, 
            separando responsabilidades y facilitando el mantenimiento.
          </p>
          
          <div className="folder-structure" style={{
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            lineHeight: '1.6',
            background: 'var(--bg-secondary)',
            padding: '1.5rem',
            borderRadius: 'var(--radius-md)',
            overflow: 'auto'
          }}>
            <div><strong>DSW-TP2-Grupo13/</strong> (Proyecto Principal)</div>
            <div style={{ marginLeft: '20px' }}>├── package.json (dependencias React, Vite, Router)</div>
            <div style={{ marginLeft: '20px' }}>├── vite.config.js (configuración del bundler)</div>
            <div style={{ marginLeft: '20px' }}>├── eslint.config.js (reglas de código)</div>
            <div style={{ marginLeft: '20px' }}>├── index.html (HTML base SPA)</div>
            <div style={{ marginLeft: '20px' }}>├── public/ (recursos estáticos)</div>
            <div style={{ marginLeft: '40px' }}>│   └── data/</div>
            <div style={{ marginLeft: '60px' }}>│       └── movies.json (datos locales)</div>
            <div style={{ marginLeft: '20px' }}>└── src/ (código fuente)</div>
            <div style={{ marginLeft: '40px' }}>    ├── main.jsx (punto de entrada React)</div>
            <div style={{ marginLeft: '40px' }}>    ├── App.jsx (componente raíz + router)</div>
            <div style={{ marginLeft: '40px' }}>    ├── components/ (componentes reutilizables)</div>
            <div style={{ marginLeft: '60px' }}>    │   ├── Header.jsx</div>
            <div style={{ marginLeft: '60px' }}>    │   ├── Sidebar.jsx</div>
            <div style={{ marginLeft: '60px' }}>    │   ├── Footer.jsx</div>
            <div style={{ marginLeft: '60px' }}>    │   ├── Hero.jsx</div>
            <div style={{ marginLeft: '60px' }}>    │   └── Card.jsx</div>
            <div style={{ marginLeft: '40px' }}>    ├── pages/ (componentes de página)</div>
            <div style={{ marginLeft: '60px' }}>    │   ├── Inicio.jsx</div>
            <div style={{ marginLeft: '60px' }}>    │   ├── Integrantes.jsx</div>
            <div style={{ marginLeft: '60px' }}>    │   ├── Integrante.jsx</div>
            <div style={{ marginLeft: '60px' }}>    │   ├── Bitacora.jsx</div>
            <div style={{ marginLeft: '60px' }}>    │   ├── Movies.jsx</div>
            <div style={{ marginLeft: '60px' }}>    │   ├── MovieDetail.jsx</div>
            <div style={{ marginLeft: '60px' }}>    │   ├── Books.jsx</div>
            <div style={{ marginLeft: '60px' }}>    │   ├── BookDetail.jsx</div>
            <div style={{ marginLeft: '60px' }}>    │   ├── Arquitectura.jsx</div>
            <div style={{ marginLeft: '60px' }}>    │   ├── Contacto.jsx</div>
            <div style={{ marginLeft: '60px' }}>    │   └── NotFoundPage.jsx</div>
            <div style={{ marginLeft: '40px' }}>    ├── styles/ (hojas de estilo)</div>
            <div style={{ marginLeft: '60px' }}>    │   ├── styles.css (estilos principales)</div>
            <div style={{ marginLeft: '60px' }}>    │   ├── header.css</div>
            <div style={{ marginLeft: '60px' }}>    │   ├── sidebar.css</div>
            <div style={{ marginLeft: '60px' }}>    │   └── team.css</div>
            <div style={{ marginLeft: '40px' }}>    ├── assets/ (recursos del código)</div>
            <div style={{ marginLeft: '60px' }}>    │   └── img/ (imágenes)</div>
            <div style={{ marginLeft: '80px' }}>    │       ├── marcos.jpeg</div>
            <div style={{ marginLeft: '80px' }}>    │       ├── mariano.png</div>
            <div style={{ marginLeft: '80px' }}>    │       ├── julian.png</div>
            <div style={{ marginLeft: '80px' }}>    │       ├── cecilia.jpg</div>
            <div style={{ marginLeft: '80px' }}>    │       ├── movie1-20.jpg</div>
            <div style={{ marginLeft: '80px' }}>    │       └── book-placeholder.svg</div>
            <div style={{ marginLeft: '40px' }}>    └── data/ (datos estructurados)</div>
            <div style={{ marginLeft: '60px' }}>        └── integrantes.jsx (datos del equipo)</div>
          </div>
          
          <div style={{ 
            marginTop: '1.5rem', 
            padding: '1rem', 
            background: 'var(--bg-tertiary)', 
            borderRadius: 'var(--radius-md)' 
          }}>
            <h5 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
              Principios de Organización:
            </h5>
            <ul style={{ color: 'var(--text-secondary)', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Separación clara:</strong> components/ vs pages/ vs styles/</li>
              <li><strong>Reutilización:</strong> componentes genéricos en carpeta específica</li>
              <li><strong>Escalabilidad:</strong> fácil agregar nuevas páginas y componentes</li>
              <li><strong>Mantenimiento:</strong> cada tipo de archivo en su lugar lógico</li>
              <li><strong>Assets organizados:</strong> imágenes y recursos bien estructurados</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default function Arquitectura() {
  const [activeView, setActiveView] = useState('components');

  return (
    <div>
      <Hero 
        titulo="Arquitectura del Proyecto" 
        descripcion="Explora la estructura de componentes React y la organización de carpetas mediante diagramas interactivos." 
      />
      
      <section style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Selector de Diagramas */}
        <DiagramSelector 
          activeView={activeView} 
          onViewChange={setActiveView} 
        />

        {/* Visor de Diagramas */}
        <DiagramViewer type={activeView} />
        
        {/* Resumen Técnico */}
        <div style={{ 
          background: 'var(--bg-primary)', 
          padding: '2rem', 
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <h3 style={{ 
            fontSize: '2rem', 
            marginBottom: '1.5rem', 
            color: 'var(--primary-color)',
            textAlign: 'center'
          }}>
            Stack Tecnológico
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginTop: '1.5rem'
          }}>
            <div style={{
              background: 'var(--bg-secondary)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center'
            }}>
              <strong>Frontend</strong><br />
              React 19<br />
              JSX Syntax<br />
              Hooks (useState, useEffect)
            </div>
            
            <div style={{
              background: 'var(--bg-secondary)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center'
            }}>
              <strong>Build Tool</strong><br />
              Vite<br />
              Hot Module Replacement<br />
              Fast Development
            </div>
            
            <div style={{
              background: 'var(--bg-secondary)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center'
            }}>
              <strong>Routing</strong><br />
              React Router DOM<br />
              Single Page App<br />
              Dynamic Routes
            </div>
            
            <div style={{
              background: 'var(--bg-secondary)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center'
            }}>
              <strong>Styling</strong><br />
              CSS Variables<br />
              Bootstrap Integration<br />
              Custom Components
            </div>
            
            <div style={{
              background: 'var(--bg-secondary)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center'
            }}>
              <strong>Data</strong><br />
              Open Library API<br />
              Local JSON<br />
              Fetch API
            </div>
            
            <div style={{
              background: 'var(--bg-secondary)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center'
            }}>
              <strong>Features</strong><br />
              Responsive Design<br />
              Dark/Light Theme
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}