import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";

import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Notfound from "./Components/Notfound/Notfound";

function App() {
  let x = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "Home", element: <Home /> },
        { path: "About", element: <About /> },

        { path: "Projects", element: <Projects /> },
        { path: "Skills", element: <Skills /> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);
  return <RouterProvider router={x}></RouterProvider>;
}

export default App;
