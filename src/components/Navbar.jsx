import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Bell,
  ChevronDown,
  User,
  LogOut,
  Settings,
  GraduationCap,
  Award,
} from "lucide-react";
import { selectCurrentUser, logout } from "../backend/features/auth/authSlice"; // Ajuste le chemin selon ton projet
import { useLogoutMutation } from "../backend/features/auth/authApi";
import { resetApp } from "../backend/features/auth/resetActions";

export default function Navbar() {
  const [logoutBackend] = useLogoutMutation();

  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);

  // Génère les initiales de l'utilisateur pour l'avatar (ex: John Doe -> JD)
  const getInitials = () => {
    if (!user?.first_name) return "U";
    const first = user.first_name.charAt(0).toUpperCase();
    const last = user.last_name ? user.last_name.charAt(0).toUpperCase() : "";
    return `${first}${last}`;
  };

  const handleLogout = async () => {
    try {
      await logoutBackend().unwrap();
      await dispatch(resetApp());
      navigate("/login");
    } catch (error) {
      console.log("Une erreur s'est produit lors de la deconnexion");
    }
  };

  // Fermer les menus si on clique en dehors
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-[#0a192f]/40 backdrop-blur-md border-b border-white/5 px-6 py-2 flex items-center justify-between sticky top-0 z-30">
      {/* 1. Titre de la page actuelle (Dynamique ou statique selon tes besoins) */}
      <div className="hidden sm:block">
        <h1 className="text-lg font-semibold text-white">Espace Apprenant</h1>
        <p className="text-xs text-white/40">
          Ravi de te revoir, {user?.first_name || "l'ami"} 👋
        </p>
      </div>

      {/* Logo affiché uniquement sur Mobile (car la sidebar principale se cache) */}
      <div className="hidden items-center gap-2">
        <GraduationCap className="w-5 h-5 text-indigo-500" />
        <span className="font-bold text-white text-sm">LearnTech</span>
      </div>

      {/* 2. Actions de Droite (Notifications + Profil) */}
      <div className="flex items-center gap-4 ml-auto">
        {/* MENU NOTIFICATIONS */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setNotificationOpen(!notificationOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer relative"
          >
            <Bell className="w-5 h-5" />
            {/* Pastille rouge de notification */}
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-[#0a192f]"></span>
          </button>

          {/* Dropdown Notifications */}
          {notificationOpen && (
            <div className="absolute right-0 mt-2 w-80 rounded-2xl border border-white/10 bg-[#0f223f] p-4 shadow-xl backdrop-blur-xl animate-in fade-in slide-in-from-top-1 duration-200">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-xs font-semibold text-white">
                  Notifications
                </span>
                <button className="text-[10px] text-indigo-400 hover:underline cursor-pointer">
                  Tout marquer lu
                </button>
              </div>
              <div className="mt-3 space-y-3 max-h-60 overflow-y-auto">
                <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-xs text-white/70">
                  <p className="font-medium text-white">
                    🎉 Nouveau cours disponible !
                  </p>
                  <p className="text-white/40 mt-0.5">
                    Découvre notre formation sur l'IA.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">
            <Award className="w-5 h-5" /> {user?.total_xp} XP
          </span>
        </div>

        {/* COMPTE UTILISATEUR DROPDOWN */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 p-1.5 pr-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer select-none"
          >
            {/* Avatar en dégradé stylé */}
            <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-indigo-900/30">
              {getInitials()}
            </div>

            <div className="hidden md:block text-left max-w-30">
              <p className="text-xs font-medium text-white truncate">
                {user?.first_name} {user?.last_name}
              </p>
              <p className="text-[10px] text-white/40 truncate">
                {user?.email}
              </p>
            </div>

            <ChevronDown
              className={`w-4 h-4 text-white/40 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Menu Déroulant */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-white/10 bg-[#0f223f] p-2 shadow-xl backdrop-blur-xl animate-in fade-in slide-in-from-top-1 duration-200">
              <Link
                to="/user/profile"
                onClick={() => setDropdownOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/70 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
              >
                <User className="w-4 h-4 text-white/40" />
                Mon Profil
              </Link>

              <Link
                to="/user/settings"
                onClick={() => setDropdownOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/70 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
              >
                <Settings className="w-4 h-4 text-white/40" />
                Paramètres
              </Link>

              <div className="h-px bg-white/5 my-1.5" />

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer text-left"
              >
                <LogOut className="w-4 h-4" />
                Déconnexion
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
