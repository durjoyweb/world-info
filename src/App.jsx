import Country from "./Pages/Country";
import Contact from "./Pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Applayout from "./component/Applayout";
import Errorpage from "./Pages/Errorpage";
import About from "./Pages/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      errorElement: <Errorpage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/country", element: <Country /> },
      ],
    },
  ]);
  return <RouterProvider router={router}>up coming.....</RouterProvider>;
}

export default App;
