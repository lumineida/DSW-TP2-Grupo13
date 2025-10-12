import { useNavigate } from "react-router-dom";

                            
export default function Card({ integrante })  {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/integrantes/${integrante.path}`);
    };
    return (
        <div className="member-card" onClick={handleClick}>
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
            </div>
        </div>
    );

};



     