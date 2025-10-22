import { createBrowserRouter, Navigate } from "react-router";
import Login from "../Pages/Login/Login.jsx";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error";
import MainLayouts from "../components/Layout/MainLayouts";
import Register from "../Pages/Register/Register.jsx";
import About from "../components/Footer/about.jsx"
import Contact from "../components/Footer/Contact.jsx";
import PrivacyPolicy from "../components/Footer/PrivacyPolicy.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    errorElement: <Error/>,
    children: [
      {
    index: true, 
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Navigate to="/register" replace/>,
    // path: "/category/:id",
    // element: <CategoryNews />,
    // loader: () => fetch("/news.json"),
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
  
    ],
  },
  
]);

export default router;