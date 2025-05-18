import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFound from "../pages/NotFound.jsx";

// Capitaliza: "home" → "Home"
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// Importa dinámicamente todas las páginas de la carpeta "pages"
const pages = import.meta.glob("../pages/*.jsx");

// Convierte los archivos en rutas
const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\/([^/]+)\.jsx$/)[1]; // Ej: "home"

  // Omitimos NotFound
  if (name === "NotFound") return null;

  const routePath = name === "Home" ? "/" : `/${name.toLowerCase()}`;

  const Component = lazy(() =>
    pages[path]().then((mod) => {
      if (mod.default) return { default: mod.default };

      const namedExport = mod[capitalize(name)];
      if (namedExport) return { default: namedExport };

      throw new Error(`No se pudo encontrar un export válido en ${path}`);
    })
  );

  return { path: routePath, Component };
});

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          {routes
            .filter(route => route !== null)
            .map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
