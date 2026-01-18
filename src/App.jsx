import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./pages/Home/Home";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Notfound from "./pages/Notfound/Notfound";

function App() {
  let x = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "Home", element: <Home /> },

        { path: "Projects", element: <Projects /> },

        { path: "Experience", element: <Experience /> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);
  return <RouterProvider router={x}></RouterProvider>;
}

export default App;
