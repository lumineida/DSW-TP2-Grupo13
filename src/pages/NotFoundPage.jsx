import { Link } from "react-router-dom";

 
                            
function NotFoundPage() {

  return (
    <div>
      <h1>Oops!</h1>
      <p>No hemos encontrado la página que estás buscando.</p>
      <Link to="/">Volver a la página de inicio</Link>
    </div>

  );

}

export default NotFoundPage;

 