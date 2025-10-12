import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import '../styles/sidebar.css';

const pages = [
  { path: "/", name: "Inicio", nivel: "1" },
  { path: "/bitacora", name: "Bitácora", nivel: "1" },
  { path: "/integrantes", name: "Integrantes", nivel: "1" },
  { path: "/integrantes/marcos", name: "Marcos", nivel: "2" },
  { path: "/integrantes/mariano", name: "Mariano", nivel: "2" },
  { path: "/integrantes/juan", name: "Juan", nivel: "2" },
  { path: "/integrantes/cecilia", name: "Cecilia", nivel: "2" },
  { path: "/contacto", name: "Contacto", nivel: "1" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
            <ul>
            {pages.map((p) => (
                <li key={p.path} className={p.nivel === "2" ? "anidado" : ""}>
                <NavLink to={p.path} className={({ isActive }) => (isActive ? "active" : "")}>{p.name}</NavLink>
                </li>
            ))}
            </ul>
        </nav>
      </aside>
  );
}

export default Sidebar;