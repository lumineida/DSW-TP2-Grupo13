import React from "react";
import grupoImg from "../assets/img/grupo.png";
import "../styles/hero.css";

export default function Hero({ titulo, descripcion, imagen = grupoImg }) {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <div className="hero-text-content">
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
        </div>

        <div className="hero-image-container">
          <img src={imagen} alt="Imagen del hero" />
        </div>
      </div>
    </section>
  );
}
