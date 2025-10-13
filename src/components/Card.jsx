import { useNavigate } from "react-router-dom";
import "../styles/team.css";

export default function Card({ integrante, detallado = false }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!detallado) {
      navigate(`/integrantes/${integrante.path}`);
    }
  };

  return (
    <div
      className={`member-card ${detallado ? "member-detail" : "member-summary"}`}
      onClick={!detallado ? handleClick : undefined}
    >
      <div className="card-image">
        <img
          src={integrante.foto}
          alt={`${integrante.nombre} - ${integrante.rol}`}
          loading="lazy"
        />
        
        {/* OVERLAY SOLO PARA VISTA RESUMEN */}
        {!detallado && (
          <div className="card-overlay">
            <div className="overlay-content">
              <h4 className="overlay-name">{integrante.nombre}</h4>
              <p className="overlay-specialty">{integrante.especialidad}</p>
            </div>
          </div>
        )}
        
        {/* EFECTO VISUAL SOLO PARA VISTA DETALLADA */}
        {detallado && (
          <div className="image-overlay-detalle"></div>
        )}
      </div>

      <div className="card-content">
        <h4 className="member-name">{integrante.nombre}</h4>
        <p className="member-role">{integrante.rol}</p>
        <p className="member-city">{integrante.ciudad}</p>

        {detallado && (
          <>
            <p className="member-age">Edad: {integrante.edad}</p>
            <div className="member-section">
              <h5>Habilidades</h5>
              <div className="member-skills">
                {integrante.habilidades.map((h, i) => (
                  <span key={i} className="skill-tag">{h}</span>
                ))}
              </div>
            </div>

            <div className="member-section">
              <h5>Películas favoritas</h5>
              <ul>
                {integrante.peliculas.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>

            <div className="member-section">
              <h5>Música favorita</h5>
              <ul>
                {integrante.musica.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
          </>
        )}

        {!detallado && (
          <button className="btn-more">Más info</button>
        )}
      </div>
    </div>
  );
}