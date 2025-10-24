import { createBrowserRouter, Navigate } from "react-router";
import Login from "../Pages/Login/Login.jsx";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error";
import MainLayouts from "../components/Layout/MainLayouts";
import Register from "../Pages/Register/Register.jsx";
import About from "../components/Footer/about.jsx"
import PrivacyPolicy from "../components/Footer/PrivacyPolicy.jsx";
import SkillDetails from "../Pages/Home/Sections/SkillDetails.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import ForgotPassword from "../components/ForgotPassword.jsx";
import ResetPassword from "../components/ResetPassword.jsx";
import MyProfile from "../Pages/MyProfile/MyProfile.jsx";

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
    path: "/myprofile",
    element: <PrivateRoute>

      <MyProfile />
    </PrivateRoute>
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
  {
  path: "/skill-details/:id",
  element: <PrivateRoute>
              <SkillDetails />
            </PrivateRoute>
}, 
{
path:"/forgot-password" ,
element:<ForgotPassword />,
},
{
path:"/reset-password" ,
element:<ResetPassword />,
}
  
    ],
  },
  
]);

export default router;