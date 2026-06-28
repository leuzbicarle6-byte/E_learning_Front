import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../backend/features/auth/authSlice";
import { Play, Laptop, HelpCircle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const user = useSelector(selectCurrentUser);

  // Le tout premier cours fondamental pour le débutant
  const currentCourse = {
    title: "D'abord maîtriser son ordinateur",
    category: "Les Fondations",
    progress: 0, // Il commence tout juste !
    nextChapter:
      "Module 1 : Organiser ses fichiers et ne plus jamais rien perdre",
    image:
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=500&auto=format&fit=crop&q=60",
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-300">
      {/* 1. MESSAGE D'ACCUEIL CHALEUREUX */}
      <div className="space-y-2">
        <h1 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
          Bienvenue sur LearnTech, {user?.first_name || "Bro"} 🚀
        </h1>
        <p className="text-white/50 text-sm leading-relaxed">
          Chaque grand expert a commencé exactement là où tu es aujourd'hui.
          Installe-toi confortablement, on pose les bases ensemble.
        </p>
      </div>

      {/* 2. LE CAP DE NAVIGATION : L'OBJECTIF N°1 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold text-white/40 uppercase tracking-wider">
            Ton point de départ
          </h2>
          <span className="text-[11px] font-medium text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Recommandé pour débuter
          </span>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/5 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-white/10 transition-colors duration-300">
          {/* Infos du cours Fondations */}
          <div className="flex gap-5 items-center">
            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 hidden sm:flex items-center justify-center bg-indigo-600/10 border border-indigo-500/20 text-indigo-400">
              <Laptop className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/10">
                {currentCourse.category}
              </span>
              <h3 className="font-display font-bold text-white text-lg md:text-xl pt-1">
                {currentCourse.title}
              </h3>
              <p className="text-xs text-white/40">
                Première étape :{" "}
                <span className="text-white/60 font-medium">
                  {currentCourse.nextChapter}
                </span>
              </p>
            </div>
          </div>

          {/* Gros Bouton d'Action Unique */}
          <div className="w-full md:w-auto border-t border-white/5 md:border-none pt-4 md:pt-0 flex justify-end">
            <Link
              to="/courses/watch"
              className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20 active:scale-98 cursor-pointer group"
            >
              <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
              Démarrer le cours
            </Link>
          </div>
        </div>
      </div>

      {/* 3. LES BLOCS DE RÉASSURANCE (Pour enlever la peur de mal faire) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl border border-white/5 bg-[#0f223f]/20 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
            <Laptop className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-white">À ton rythme</h4>
            <p className="text-xs text-white/40">
              Pas de direct, pas de stress. Tu peux regarder les vidéos autant
              de fois que nécessaire.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-white/5 bg-[#0f223f]/20 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-white">
              Bloqué ? Des questions ?
            </h4>
            <p className="text-xs text-white/40">
              Clique sur l'onglet communauté dans ta barre latérale pour obtenir
              de l'aide rapidement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
