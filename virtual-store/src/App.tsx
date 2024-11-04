import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Details from "./views/Details.tsx";
import Home from "./views/Home.tsx";

/*Components*/

function App() {
  const browserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },

    { path: "/details", element: <Details /> },
  ]);
  return <RouterProvider router={browserRouter} />;
}
export default App;
  