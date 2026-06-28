import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, User, LogOut, X, List } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../../backend/features/auth/authSlice"; // Ajuste le chemin

export default function SidebarUser({ isOpen, setIsOpen }) {
  const location = useLocation();
  const dispatch = useDispatch();

  const navigation = [
    {
      name: "Dashboard",
      path: "/user/dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      name: "Mon Profil",
      path: "/user/profile",
      icon: <User className="w-5 h-5" />,
    },
    {
      name: "Les Cours",
      path: "/user/courses",
      icon: <List className="w-5 h-5" />,
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
        {/* Header de la Sidebar avec bouton fermer pour mobile uniquement */}
        <div className="flex items-center justify-between pt-2 md:pt-0">
          <div className="font-display font-bold text-2xl tracking-tight">
            Learn
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
              Tech
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-white/70 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Liens */}
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
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
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
    </aside>
  );
}
