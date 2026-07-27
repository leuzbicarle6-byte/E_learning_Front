import React, { lazy, Suspense } from "react";

// Lazy loading des pages pour optimiser les performances de chargement
const Dashboard = lazy(() => import("../pages/user/Dashboard"));
const Profile = lazy(() => import("../pages/user/Profile"));
const Cours = lazy(() => import("../pages/user/coursProgress/Cours"));
const CoursDetail = lazy(() => import("../pages/user/coursProgress/CoursDetail"));
const CoursFreeDetail = lazy(() => import("../pages/user/courfreeid/CoursFreeDetail"));
const Exercice = lazy(() => import("../pages/user/Exercice"));
const CoursProgressifPage = lazy(() => import("../pages/user/coursProgress/CoursProgressifPage"));
const CoursGratuit = lazy(() => import("../components/courses/cour/CoursGratuit"));

// Composant Loader simple pour attendre le chargement des vues
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-100">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
  </div>
);

// Wrapper HOC pour englober chaque composant dans un Suspense
const withSuspense = (Component) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

const UserRoutes = [
  { path: "dashboard", element: withSuspense(Dashboard) },
  { path: "profile", element: withSuspense(Profile) },
  { path: "courses", element: withSuspense(Cours) },
  { path: "progressif", element: withSuspense(CoursProgressifPage) },
  { path: "gratuit", element: withSuspense(CoursGratuit) },
  { path: "courses/:id", element: withSuspense(CoursDetail) },
  { path: "free-courses/:id", element: withSuspense(CoursFreeDetail) },
  { path: "exercices", element: withSuspense(Exercice) },
];

export default UserRoutes;