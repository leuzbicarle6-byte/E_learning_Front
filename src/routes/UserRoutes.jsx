import React from "react";
import Dashboard from "../pages/user/Dashboard";
import Profile from "../pages/user/Profile";
import Cours from "../pages/user/Cours";
import CoursDetail from "../pages/user/CoursDetail";
import Exercice from "../pages/user/Exercice";
import WordFree from "../components/courses/cour/gratuit/wordFree/WordFree";

const UserRoutes = [
  { path: "dashboard", element: <Dashboard /> },
  { path: "profile", element: <Profile /> },
  { path: "courses", element: <Cours /> },
  { path: "courses/:id", element: <CoursDetail /> },
  { path: "exercices", element: <Exercice /> },

  // mes cours gratuites par id
  { path: "free-courses/:id", element: <WordFree /> },
];

export default UserRoutes;
