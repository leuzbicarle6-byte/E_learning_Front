import React from "react";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import PublicRoutes from "./PublicRoutes";

export const configRoutes = [
  {
    path: "/",
    layout: "PublicLayout",
    routes: PublicRoutes,
  },
  {
    path: "/admin",
    layout: "AdminLayout",
    routes: AdminRoutes,
  },
  {
    path: "/user",
    layout: "UserLayout",
    routes: UserRoutes,
  },
];
