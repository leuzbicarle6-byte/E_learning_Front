import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// Importation de la protection de route séparée
import ProtectedRoute from "./ProtectedRoute";

// Importation de tes Layouts
import LayoutUser from "../Layouts/LayoutUser";
import LayoutAdmin from "../layouts/LayoutAdmin";

// Importation de tes listes de routes (tableaux d'objets)
import PublicRoutes from "./PublicRoutes";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      ...PublicRoutes,
      { path: "", element: <Navigate to="/login" replace /> },
    ],
  },

  // 2. Espace Utilisateur (Protégé)
  {
    path: "/user",
    element: (
      <ProtectedRoute allowedRoles={["user", "admin"]}>
        <LayoutUser />
      </ProtectedRoute>
    ),
    children: [
      ...UserRoutes,
      { path: "", element: <Navigate to="dashboard" replace /> },
    ],
  },

  // 3. Espace Admin (Strictement réservé aux Admins)
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <LayoutAdmin />
      </ProtectedRoute>
    ),
    children: [
      ...AdminRoutes,
      { path: "", element: <Navigate to="dashboard" replace /> },
    ],
  },

  // 4. Gestion des erreurs 404 / Routes inconnues
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function AppNavigation() {
  return <RouterProvider router={router} />;
}
