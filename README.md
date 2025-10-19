# DSW-TP2-Grupo13 — Frontend

Proyecto de la Tecnicatura en Desarrollo de Software — Trabajo Práctico 2 (Grupo 13).
Interfaz frontend construida con React + Vite. Contiene un layout con `Header`, `Sidebar`, `Footer` y una sección `Main` que sirve rutas para varias páginas (Inicio, Integrantes, Movies, Books, Arquitectura, Contacto, etc.).

## Estructura relevante

- `src/` — código fuente (componentes, páginas, estilos, datos).
- `src/components/` — componentes reutilizables (Header, Sidebar, Card, Footer, Hero, ...).
- `src/pages/` — páginas renderizadas por las rutas (Integrantes, Integrante, Movies, MovieDetail, Books, BookDetail, Arquitectura, ...).
- `src/data/integrantes.jsx` — datos de integrantes (importa imágenes desde `src/assets/img`).
- `src/styles/` — CSS del proyecto (incluye variables CSS para dark/light mode en `styles.css`).
- `public/` — archivos estáticos servidos directamente.

## Características

- Enrutado con `react-router-dom` (rutas públicas para páginas y rutas dinámicas `/integrantes/:path`, `/movies/:id`, `/books/:key`).
- Sidebar con menú y submenú colapsable para `Integrantes`.
- Modo oscuro / claro implementado mediante variables CSS y la clase `body.dark-mode` / `body.light-mode`. Un botón en `Header` alterna el modo.
- Uso de componentes `Card` para listar integrantes, películas y libros. Desde un `Card` puedes navegar a la página detallada del elemento.

## Requisitos

- Node.js (>=16 recomendado)
- npm o yarn

## Instalar y correr en desarrollo

1. Instalar dependencias:

```powershell
npm install
```

2. Levantar el servidor de desarrollo:

```powershell
npm run dev
```

3. Abrir en el navegador: `http://localhost:5173` (o la URL que muestre Vite).

## Build para producción

```powershell
npm run build
```

El contenido de `dist/` puede ser desplegado en cualquier hosting estático.

## Rutas principales

- `/` → `Inicio.jsx`
- `/integrantes` → `Integrantes.jsx`
- `/integrantes/:path` → `Integrante.jsx`
- `/movies` → `Movies.jsx`
- `/movies/:id` → `MovieDetail.jsx`
- `/books` → `Books.jsx`
- `/books/:key` → `BookDetail.jsx`
- `/arquitectura` → `Arquitectura.jsx`
- `/contacto` → `Contacto.jsx`
