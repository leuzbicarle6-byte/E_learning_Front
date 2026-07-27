import React, { lazy, Suspense } from "react";

// Lazy loading des pages publiques et d'authentification
const Home = lazy(() => import("../pages/public/Home"));
const About = lazy(() => import("../pages/public/About"));
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const ForgotPwd = lazy(() => import("../pages/auth/ForgotPwd"));
const ResetPwd = lazy(() => import("../pages/auth/ResetPwd"));

// Composant de chargement discret
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-100">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
  </div>
);

// Wrapper HOC pour englober dans Suspense
const withSuspense = (Component) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

const PublicRoutes = [
  { path: "/", element: withSuspense(Home) },
  { path: "about", element: withSuspense(About) },
  { path: "login", element: <Login /> },
  { path: "register", element: withSuspense(Register) },
  { path: "forgot-password", element: withSuspense(ForgotPwd) },
  { path: "reset/password/:uid/:token", element: withSuspense(ResetPwd) },
];

export default PublicRoutes;
