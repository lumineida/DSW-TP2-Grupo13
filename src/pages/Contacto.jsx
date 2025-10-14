import React from "react";
import "../styles/contacto.css";

export default function Contacto() {
  return (
    <section className="contact-section">
      <h2>Información de Contacto</h2>

      <div className="contact-card">
        {/* Email */}
        <div className="contact-item">
          <div className="icon-circle email">
            📧
          </div>
          <div className="contact-info">
            <h4>Email del Equipo</h4>
            <p>grupo13.dsw@ifts29.edu.ar</p>
          </div>
        </div>

        {/* Institución */}
        <div className="contact-item">
          <div className="icon-circle institucion">
            🏫
          </div>
          <div className="contact-info">
            <h4>Institución</h4>
            <p>IFTS N°29 - Tecnicatura en Desarrollo de Software</p>
          </div>
        </div>

        {/* Período */}
        <div className="contact-item">
          <div className="icon-circle calendario">
            📅
          </div>
          <div className="contact-info">
            <h4>Período Académico</h4>
            <p>2025 - Segundo Cuatrimestre</p>
          </div>
        </div>

        {/* GitHub */}
        <div className="contact-item">
          <div className="icon-circle github">
            💻
          </div>
          <div className="contact-info">
            <h4>Repositorio GitHub</h4>
            <a 
              href="https://github.com/lumineida/DSW-TP2-Grupo13" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              github.com/lumineida/DSW-TP2-Grupo13
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
