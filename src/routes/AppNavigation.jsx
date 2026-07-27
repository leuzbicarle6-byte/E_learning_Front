import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// l'import de la protection de route
import ProtectedRoute from "./ProtectedRoute";

// les imports de mes Layouts
import LayoutUser from "../Layouts/LayoutUser";
import LayoutAdmin from "../Layouts/LayoutAdmin";

// les imports de mes routes
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

  // 2. Fi partie User et Admin (genre admin peut acceder ici)
  {
    path: "/user",
    element: (
      <ProtectedRoute allowedRoles={["user", "super-admin"]}>
        <LayoutUser />
      </ProtectedRoute>
    ),
    children: [
      ...UserRoutes,
      { path: "", element: <Navigate to="dashboard" replace /> },
    ],
  },

  // 3. Fi partie Admin la
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={["super-admin"]}>
        <LayoutAdmin />
      </ProtectedRoute>
    ),
    children: [
      ...AdminRoutes,
      { path: "", element: <Navigate to="dashboard" replace /> },
    ],
  },

  // 4. fi route 404 not found 
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function AppNavigation() {
  return <RouterProvider router={router} />;
}
