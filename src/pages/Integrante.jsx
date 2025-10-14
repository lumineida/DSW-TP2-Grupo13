import { useNavigate, useParams } from "react-router-dom";
import integrantes from "../data/integrantes";
import Card from "../components/Card";

export default function Integrante() {

  const { path } = useParams();

  const integrante = integrantes.find((integrante) => integrante.path === path);

  const navigate = useNavigate();

  if (!integrante) {
    console.log(integrante);
    return (
      <div className="team-grid">
        {integrantes.map((integrante, index) => (
          <Card key={index} integrante={integrante} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="member-card" >
            <div className="card-image">
                <img
                  src={integrante.foto}
                  alt={`${integrante.nombre} - ${integrante.rol}`}
                  loading="lazy"
                />
                <div className="card-overlay">
                  <div className="overlay-content">
                    <h4 className="overlay-name">{integrante.nombre}</h4>
                    <p className="overlay-specialty">{integrante.especialidad}</p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h4 className="member-name">{integrante.nombre}</h4>
                <p className="member-role">{integrante.rol}</p>
                <p className="member-description">
                  {integrante.descripcion}
                </p>
                <div className="member-skills">
                  {integrante.habilidades.map((habilidad, index) => (
                    <span key={index} className="skill-tag">{habilidad}</span>
                  ))}
                </div>
                <div className="member-skills">
                  {integrante.peliculas.map((pelicula, index) => (
                    <span key={index} className="skill-tag">{pelicula}</span>
                  ))}
                </div>
                <div className="member-skills">
                  {integrante.musica.map((m, index) => (
                    <span key={index} className="skill-tag">{m}</span>
                  ))}
                </div>
            </div>
        </div>

  <button className="btn btn-primary" onClick={() => navigate("/integrantes")}>Ver todos</button>
    </>

  );

}

      