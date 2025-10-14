import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState } from "react";
import "../styles/sidebar.css";

const pages = [
  { path: "/", name: "Inicio", nivel: "1" },
  { path: "/bitacora", name: "Bitácora", nivel: "1" },
  { path: "/integrantes", name: "Integrantes", nivel: "1" },
  { path: "/integrantes/marcos", name: "Marcos", nivel: "2" },
  { path: "/integrantes/mariano", name: "Mariano", nivel: "2" },
  { path: "/integrantes/julian", name: "Julian", nivel: "2" },
  { path: "/integrantes/cecilia", name: "Cecilia", nivel: "2" },
  { path: "/movies", name: "Películas", nivel: "1" },
  { path: "/contacto", name: "Contacto", nivel: "1" },
];

function Sidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Botón hamburguesa (solo visible en pantallas pequeñas, via CSS) */}
      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul>
            {(() => {
              // Build hierarchical menu: each nivel:1 may have subsequent nivel:2 items
              const menu = [];
              pages.forEach((p) => {
                if (p.nivel === "1") {
                  menu.push({ ...p, children: [] });
                } else if (p.nivel === "2") {
                  if (menu.length > 0) menu[menu.length - 1].children.push(p);
                }
              });

              return menu.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isActiveParent = hasChildren && (item.path === location.pathname || item.children.some((c) => c.path === location.pathname));
                return (
                  <li key={item.path} className={hasChildren ? `parent ${isActiveParent ? 'open' : ''}` : ''}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => (isActive ? "active" : "")}
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                      {hasChildren && <span className="chevron" aria-hidden>▸</span>}
                    </NavLink>

                    {hasChildren && (
                      <ul className="submenu">
                        {item.children.map((child) => (
                          <li key={child.path} className="anidado">
                            <NavLink to={child.path} className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setOpen(false)}>
                              {child.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              });
            })()}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
