import React, { lazy, Suspense } from "react";

// Lazy loading des pages du panel admin
const DashboardA = lazy(() => import("../pages/admin/DashboardA"));
const ListeUsers = lazy(() => import("../pages/admin/ListeUsers"));
const Profile = lazy(() => import("../pages/admin/Profile"));
const AllCourses = lazy(() => import("../pages/admin/AllCourses"));
const AddCours = lazy(() => import("../pages/admin/AddCours"));
const DetailsCours = lazy(() => import("../pages/admin/DetailsCours"));
const EditCours = lazy(() => import("../pages/admin/EditCours"));
const UserDetails = lazy(() => import("../pages/admin/UserDetails"));
const ExercicesAdmin = lazy(() => import("../pages/admin/exos/ExercicesAdmin"));

// Loader pour l'espace d'administration
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-100">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
  </div>
);

// Wrapper avec Suspense
const withSuspense = (Component) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

const AdminRoutes = [
  { path: "dashboard", element: withSuspense(DashboardA) },
  { path: "users", element: withSuspense(ListeUsers) },
  { path: "profile", element: withSuspense(Profile) },
  { path: "courses", element: withSuspense(AllCourses) },
  { path: "courses/create", element: withSuspense(AddCours) },
  { path: "courses/details/:id", element: withSuspense(DetailsCours) },
  { path: "courses/edit/:id", element: withSuspense(EditCours) },
  { path: "detail/user/:id", element: withSuspense(UserDetails) },
  { path: "exercices", element: withSuspense(ExercicesAdmin) },
];

export default AdminRoutes;
