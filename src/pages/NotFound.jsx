import React from "react";
import { Link } from "react-router-dom";
import { Compass, ArrowLeft } from "lucide-react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../backend/features/auth/authSlice";

export default function NotFound() {
  const user = useSelector(selectCurrentUser);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
      {/* Icône animée */}
      <div className="relative mb-6">
        <div className="p-5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 animate-bounce duration-1000">
          <Compass className="w-12 h-12" />
        </div>
        {/* Halo lumineux en arrière-plan */}
        <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl -z-10"></div>
      </div>

      {/* Code d'erreur & Message */}
      <div className="space-y-2 max-w-md">
        <h1 className="font-display font-black text-7xl md:text-8xl bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent tracking-tighter">
          404
        </h1>
        <h2 className="text-xl font-bold text-white tracking-tight">
          Oops, tu as l'air perdu, Bro !
        </h2>
        <p className="text-sm text-white/50 leading-relaxed">
          La page que tu recherches n'existe pas ou a été déplacée. Pas de
          panique, on te raccompagne à la base.
        </p>
      </div>

      {/* Bouton de retour */}
      <div className="mt-8">
        <Link
          to={user?.role === "user" ? "/user/dashboard" : "/admin/dashboard"}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20 active:scale-98"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au tableau de bord
        </Link>
      </div>
    </div>
  );
}
