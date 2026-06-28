import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../backend/features/auth/authSlice"; // Ajuste le chemin selon ton projet

export default function ProtectedRoute({ children, allowedRoles }) {
  const user = useSelector(selectCurrentUser);
  const role = user?.role; // Attend 'admin' ou 'user' de ton backend Django

  if (!user) {
    // Si l'utilisateur n'est pas connecté, redirection immédiate vers le login
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    // Si connecté mais pas le bon rôle, redirection intelligente selon son profil
    return (
      <Navigate
        to={role === "admin" ? "/admin/dashboard" : "/user/dashboard"}
        replace
      />
    );
  }

  // Si tout est OK, on affiche la page demandée
  return children;
}
