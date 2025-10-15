import React from "react";
import iconoL from "../assets/img/iconoL.png";

import "../styles/header.css";

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header>
      <div className="header-content">
        <img src={iconoL} alt="Logo Grupo 13" className="header-icon" />
        <div className="header-text">
          <h1>Grupo 13 - Proyecto React</h1>
          <p className="header-subtitle">
            Tecnicatura en Desarrollo de Software - IFTS 29
          </p>
        </div>
      </div>
      <button onClick={toggleDarkMode} className="themeButton">
        {darkMode ? (
          <>
            <span role="img" aria-label="Light Mode" style={{ marginRight: 8 }}>
              🌞
            </span>
            Modo Claro
          </>
        ) : (
          <>
            <span role="img" aria-label="Dark Mode" style={{ marginRight: 8 }}>
              🌙
            </span>
            Modo Oscuro
          </>
        )}
      </button>
    </header>
  );
}
