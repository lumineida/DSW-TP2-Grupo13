import { useNavigate, useParams } from "react-router-dom";
import integrantes from "../data/integrantes";
import Card from "../components/Card";
import { Button } from "react-bootstrap";

export default function Integrante() {

  const { path } = useParams();

  const integrante = integrantes.find((integrante) => integrante.path === path);

  const navigate = useNavigate();

if (!integrante) {
  return (
    <div className="team-grid">
      {integrantes.map((integrante, index) => (
        <Card key={index} integrante={integrante} detallado={false} />
      ))}
    </div>
  );
}

  return (
    <>
       
        <Card integrante={integrante} detallado={true} />

      <div className="button-container">
        <Button variant="primary" onClick={() => navigate("/integrantes")}>
          Ver todos
        </Button>
      </div>
    </>

  );

}

      