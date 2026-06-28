import React from "react";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    // 1. FIX : On fixe TOUT le header en haut, avec une largeur complète, un z-index élevé et un effet flou transparent
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0a192f]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-tr from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-900/20">
            <GraduationCap className="w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl text-white tracking-tight">
            Learn
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
              Tech
            </span>
          </span>
        </Link>

        {/* Boutons de Navigation */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors cursor-pointer"
          >
            Se connecter
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 rounded-xl border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer"
          >
            S'inscrire
          </Link>
        </div>

      </div>
    </header>
  );
}