import React from "react";
import { useGetCoursesQuery } from "../../backend/features/courses/coursesApi";
import {
  Laptop,
  Lock,
  Play,
  BarChart3,
  GraduationCap,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Cours() {
  // 1. Appel de ton vrai endpoint via RTK Query
  const { data: listeCours, isLoading, isError, error } = useGetCoursesQuery();

  const coursesArray = Array.isArray(listeCours)
    ? listeCours
    : listeCours?.results || [];

  // Fonction utilitaire pour attribuer dynamiquement la bonne icône selon la catégorie renvoyée par Django
  const getCourseIcon = (category) => {
    switch (category?.toLowerCase()) {
      case "fondations":
      case "les fondations":
        return <Laptop className="w-6 h-6 text-indigo-400" />;
      case "bureautique":
        return <GraduationCap className="w-6 h-6 text-purple-400" />;
      case "marketing":
      case "marketing digital":
        return <BarChart3 className="w-6 h-6 text-emerald-400" />;
      default:
        return <GraduationCap className="w-6 h-6 text-indigo-400" />;
    }
  };

  // 2. ÉTAT DE CHARGEMENT
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
        <p className="text-sm text-white/50">Chargement du catalogue...</p>
      </div>
    );
  }

  // 3. ÉTAT D'ERREUR
  if (isError) {
    return (
      <div className="max-w-md mx-auto p-6 rounded-2xl border border-rose-500/20 bg-rose-500/10 text-center space-y-3">
        <AlertCircle className="w-8 h-8 text-rose-400 mx-auto" />
        <h3 className="text-white font-semibold">
          Impossible de charger les cours
        </h3>
        <p className="text-xs text-rose-300/70">
          {error?.data?.detail ||
            "Une erreur est survenue lors de la connexion avec le serveur."}
        </p>
      </div>
    );
  }

  // Vérification si le cours de fondation a été terminé
  const introCourse = coursesArray?.find((c) => c.is_foundational);
  const isIntroFinished = introCourse && introCourse.user_progress === 100;

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* En-tête */}
      <div className="space-y-2">
        <h1 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
          Catalogue des Formations
        </h1>
        <p className="text-white/50 text-sm">
          {!isIntroFinished
            ? "🔒 Termine le cours d'introduction pour débloquer l'accès aux spécialisations."
            : "🎉 Félicitations ! Tout ton catalogue est désormais débloqué."}
        </p>
      </div>

      {/* Grille de cours dynamique */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesArray?.map((cours) => (
          <div
            key={cours.id}
            className={`relative rounded-2xl border p-5 flex flex-col justify-between h-64 transition-all duration-300 bg-white/5 ${
              cours.is_locked
                ? "border-white/5 opacity-40 select-none"
                : "border-white/10 hover:border-indigo-500/30 hover:bg-white/10"
            }`}
          >
            {/* Contenu du cours */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  {getCourseIcon(cours.category)}
                </div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                    cours.is_locked
                      ? "bg-white/5 text-white/40"
                      : "bg-indigo-500/10 text-indigo-300"
                  }`}
                >
                  {cours.category}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-semibold text-white text-base tracking-tight line-clamp-1">
                  {cours.title}
                </h3>
                <p className="text-xs text-white/40 line-clamp-3 leading-relaxed">
                  {cours.description}
                </p>
              </div>
            </div>

            {/* Pied de carte / Bouton d'action & Progression */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              {cours.is_locked ? (
                <div className="flex items-center gap-2 text-xs font-medium text-white/30">
                  <Lock className="w-3.5 h-3.5" />
                  Cours verrouillé
                </div>
              ) : (
                <>
                  <div className="text-left">
                    <span className="block text-[10px] text-white/40 uppercase">
                      Progression
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-xs font-semibold ${
                          cours.user_progress === 100
                            ? "text-emerald-400"
                            : "text-indigo-400"
                        }`}
                      >
                        {cours.user_progress || 0}%
                      </span>
                      {cours.user_progress === 100 && (
                        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.2 rounded-md font-medium">
                          Terminé
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Si le cours est fini, on change le bouton pour indiquer qu'on peut le revoir */}
                  <Link
                    to={`/user/courses/${cours.id}`}
                    className={`flex items-center gap-1.5 p-2 px-3 rounded-xl text-xs font-medium transition-colors cursor-pointer shadow-md ${
                      cours.user_progress === 100
                        ? "bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600/30 shadow-emerald-900/10"
                        : "bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-600/10"
                    }`}
                  >
                    {cours.user_progress === 100 ? (
                      <>
                        <span className="text-emerald-400 font-medium">
                          Revoir
                        </span>
                        <Play className="w-3 h-3 fill-emerald-400 text-emerald-400" />
                      </>
                    ) : (
                      <Play className="w-4 h-4 fill-white text-white" />
                    )}
                  </Link>
                </>
              )}
            </div>

            {/* Overlay flouté avec un cadenas si le cours est verrouillé */}
            {cours.is_locked && (
              <div className="absolute inset-0 bg-[#0a192f]/20 backdrop-blur-xs rounded-2xl flex items-center justify-center">
                <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-950/40 border border-white/5 text-white shadow-xl">
                  <Lock className="w-4 h-4 text-purple-400" />
                  <span className="text-[10px] font-medium tracking-wide uppercase text-white/60">
                    Requis : Maîtriser l'ordinateur
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
