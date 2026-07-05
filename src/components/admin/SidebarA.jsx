import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  GraduationCap,
  Users,
  LogOut,
  X,
  ShieldAlert,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../../backend/features/auth/authSlice";

export default function SidebarA({ isOpen, setIsOpen }) {
  const location = useLocation();
  const dispatch = useDispatch();

  // Liens d'administration
  const navigation = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      name: "Gérer les Cours",
      path: "/admin/courses",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      name: "Utilisateurs",
      path: "/admin/users",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  return (
    <aside
      className={`
      fixed inset-y-0 left-0 z-40 w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col justify-between
      transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      md:translate-x-0 md:static md:h-screen
    `}
    >
      <div className="space-y-8">
        {/* Header avec un badge Admin distinctif */}
        <div className="flex items-center justify-between pt-2 md:pt-0">
          <div className="space-y-1">
            <div className="font-display font-bold text-2xl tracking-tight">
              Learn
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                Tech
              </span>
            </div>
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <ShieldAlert className="w-3 h-3" /> Admin
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-white/70 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu de navigation Admin */}
        <nav className="space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/20" // Couleur mauve/violet pour l'admin, ça change de l'indigo du user !
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Déconnexion */}
      <button
        onClick={() => dispatch(logout())}
        className="flex items-center gap-4 px-4 py-3 rounded-xl font-medium text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer w-full mt-auto"
      >
        <LogOut className="w-5 h-5" />
        Déconnexion
      </button>
    </aside>
  );
}
