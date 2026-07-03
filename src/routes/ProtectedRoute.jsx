import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../backend/features/auth/authSlice";

export default function ProtectedRoute({ children, allowedRoles }) {
  const user = useSelector(selectCurrentUser);
  const role = user?.role;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/403" replace />;
  }

  return children;
}
