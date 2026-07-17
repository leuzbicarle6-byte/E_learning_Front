import ForgotPwd from "../pages/auth/ForgotPwd";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ResetPwd from "../pages/auth/ResetPwd";
import About from "../pages/public/About";
import Home from "../pages/public/Home";

const PublicRoutes = [
  { path: "/", element: <Home /> },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "about", element: <About /> },
  { path: "forgot-password", element: <ForgotPwd /> },
  { path: "reset/password/:uid/:token", element: <ResetPwd /> },
];

export default PublicRoutes;
