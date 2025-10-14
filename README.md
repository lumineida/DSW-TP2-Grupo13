# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Setup (Node/npm)

This project requires Node.js and npm to install dependencies and run the dev server.

- Install Node.js (which includes npm): https://nodejs.org/
- From PowerShell, in the project root run:

```powershell
cd <$HomeFolder>\DSW-TP2-Grupo13
npm install
npm run dev
```

Notes:
- The project imports Bootstrap CSS in `src/main.jsx` so most UI components will use Bootstrap classes.
- One file (`src/pages/Integrante.jsx`) used a `react-bootstrap` Button. To avoid requiring that package in this template, it was replaced with a plain `<button className="btn btn-primary">` which uses Bootstrap styles.
