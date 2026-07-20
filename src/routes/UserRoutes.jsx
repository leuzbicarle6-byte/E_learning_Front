import React from "react";
import Dashboard from "../pages/user/Dashboard";
import Profile from "../pages/user/Profile";
import Cours from "../pages/user/Cours";
import CoursDetail from "../pages/user/CoursDetail";
import Exercice from "../pages/user/Exercice";
import CoursFreeDetail from "../pages/user/courfreeid/CoursFreeDetail";
import CoursProgressifPage from "../pages/user/CoursProgressifPage";
import CoursGratuit from "../components/courses/cour/CoursGratuit";

const UserRoutes = [
  { path: "dashboard", element: <Dashboard /> },
  { path: "profile", element: <Profile /> },
  { path: "courses", element: <Cours /> },
  { path: "courses/:id", element: <CoursDetail /> },
  { path: "exercices", element: <Exercice /> },
  { path: "progressif", element: <CoursProgressifPage /> },
  { path: "gratuit", element: <CoursGratuit /> },
  { path: "free-courses/:id", element: <CoursFreeDetail /> },
];

export default UserRoutes;
