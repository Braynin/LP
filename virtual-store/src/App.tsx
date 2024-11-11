import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importa tus vistas
import Home from "./views/Home";
import Details from "./views/Details.tsx";
import Penal from "./views/Penal.tsx";
import Civil from "./views/Civil.tsx";
import Familia from "./views/Familia.tsx";
import Administrativo from "./views/Administrativo.tsx";
import Constitucional from "./views/Constitucional.tsx";
import QuienesSomos from "./views/QuienesSomos.tsx";
import Opiniones from "./views/Opiniones.tsx";
import PreguntasFrecuentes from "./views/PreguntasFrecuentes.tsx";
import CambiosYDevoluciones from "./views/CambiosYDevoluciones.tsx";
import PoliticasDePrivacidad from "./views/PoliticasDePrivacidad.tsx";
import PoliticasDeCookies from "./views/PoliticasDeCookies.tsx";
import TerminosYCondiciones from "./views/TerminosYCondiciones.tsx";
import TerminosYCondicionesPromocionales from "./views/TerminosYCondicionesPromocionales.tsx";
import RecojoEnTienda from "./views/RecojoEnTienda.tsx";

function App() {
  const browserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/details", element: <Details /> },

    // Rutas generadas a partir del nav
    { path: "/penal", element: <Penal /> },
    { path: "/civil", element: <Civil /> },
    { path: "/familia", element: <Familia /> },
    { path: "/administrativo", element: <Administrativo /> },
    { path: "/constitucional", element: <Constitucional /> },
    

    // Rutas generadas a partir de tu array
    { path: "/quienes-somos", element: <QuienesSomos /> },
    { path: "/opiniones-de-clientes", element: <Opiniones /> },
    { path: "/preguntas-frecuentes", element: <PreguntasFrecuentes /> },
    { path: "/cambios-y-devoluciones", element: <CambiosYDevoluciones /> },

    { path: "/politicas-de-privacidad", element: <PoliticasDePrivacidad /> },
    { path: "/politicas-de-cookies", element: <PoliticasDeCookies /> },
    { path: "/terminos-y-condiciones", element: <TerminosYCondiciones /> },
    { path: "/terminos-y-condiciones-promocionales", element: <TerminosYCondicionesPromocionales /> },
    { path: "/recojo-en-tienda", element: <RecojoEnTienda /> },
  ]);

  return <RouterProvider router={browserRouter} />;
}

export default App;
