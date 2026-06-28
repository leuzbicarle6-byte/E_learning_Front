import React from "react";
import Dashboard from "../pages/user/Dashboard";
import Profile from "../pages/user/Profile";
import Cours from "../pages/user/Cours";
import CoursDetail from "../pages/user/CoursDetail";

const UserRoutes = [
  { path: "dashboard", element: <Dashboard /> },
  { path: "profile", element: <Profile /> },
  { path: "courses", element: <Cours /> },
  { path: "courses/:id", element: <CoursDetail /> },
];

export default UserRoutes;
