import React from "react";


import '../styles/header.css';

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header
    >
      <div className="header-content">
        <h1>Grupo 13 - Desarrollo Frontend</h1>
        <p className="header-subtitle">Tecnicatura en Desarrollo de Software</p>
      </div>
      <button
        onClick={toggleDarkMode}
        className="themeButton"
      >
        {darkMode ? (
          <>
            <span role="img" aria-label="Light Mode" style={{ marginRight: 8 }}>🌞</span>
            Modo Claro
          </>
        ) : (
          <>
            <span role="img" aria-label="Dark Mode" style={{ marginRight: 8 }}>🌙</span>
            Modo Oscuro
          </>
        )}
      </button>

    </header>
  );
}