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
  const { data: listeCours, isLoading, isError, error } = useGetCoursesQuery();

  const coursesArray = Array.isArray(listeCours)
    ? listeCours
    : listeCours?.results || [];

  const getCourseIcon = (category) => {
    switch (category?.toLowerCase()) {
      case "fondations":
      case "les fondations":
      case "informatique de base":
        return <Laptop className="w-6 h-6 text-indigo-400" />;
      case "bureautique":
      case "informatique":
        return <GraduationCap className="w-6 h-6 text-purple-400" />;
      case "marketing":
      case "marketing digital":
        return <BarChart3 className="w-6 h-6 text-emerald-400" />;
      default:
        return <GraduationCap className="w-6 h-6 text-indigo-400" />;
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
        <p className="text-sm text-white/50">Chargement du catalogue...</p>
      </div>
    );
  }

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

  // Calculer dynamiquement le statut de verrouillage "cours par cours" pour chaque élément
  const processedCourses = coursesArray.map((cours, index) => {
    // Le premier cours (index 0) est toujours débloqué
    if (index === 0) {
      return { ...cours, isLockedClient: false };
    }
    
    // Pour les suivants, on regarde si le cours précédent (index - 1) est fini à 100%
    const previousCourse = coursesArray[index - 1];
    const isPreviousFinished = previousCourse && previousCourse.user_progress === 100;
    
    return {
      ...cours,
      // Le cours est verrouillé si le précédent n'est pas fini
      isLockedClient: !isPreviousFinished
    };
  });

  // Trouver le cours sur lequel l'utilisateur doit travailler actuellement
  const currentActiveCourse = processedCourses.find((c) => !c.isLockedClient && c.user_progress < 100);
  const allCoursesFinished = processedCourses.length > 0 && processedCourses.every((c) => c.user_progress === 100);

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* En-tête dynamique */}
      <div className="space-y-2">
        <h1 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
          Catalogue des Formations
        </h1>
        <p className="text-white/50 text-sm">
          {allCoursesFinished ? (
            "🎉 Félicitations ! Tu as terminé l'intégralité du catalogue."
          ) : currentActiveCourse ? (
            <>
              🚀 Prochaine étape : Finis le cours <span className="text-indigo-400 font-medium">"{currentActiveCourse.title}"</span> pour débloquer la suite.
            </>
          ) : (
            "🔒 Suivez l'ordre du catalogue pour progresser."
          )}
        </p>
      </div>

      {/* Grille de cours */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {processedCourses.map((cours, index) => {
          const previousCourse = index > 0 ? processedCourses[index - 1] : null;

          return (
            <div
              key={cours.id}
              className={`relative rounded-2xl border p-5 flex flex-col justify-between h-64 transition-all duration-300 bg-white/5 ${
                cours.isLockedClient
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
                      cours.isLockedClient
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

              {/* Pied de carte */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                {cours.isLockedClient ? (
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

              {/* Overlay Cadenas Dynamique */}
              {cours.isLockedClient && (
                <div className="absolute inset-0 bg-[#0a192f]/40 backdrop-blur-xs rounded-2xl flex items-center justify-center">
                  <div className="flex flex-col items-center text-center gap-1.5 max-w-[85%] p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/5 text-white shadow-xl">
                    <Lock className="w-4 h-4 text-purple-400" />
                    <span className="text-[10px] font-medium tracking-wide uppercase text-white/60 leading-tight">
                      Requis : Terminer d'abord
                    </span>
                    <span className="text-xs font-semibold text-indigo-300 line-clamp-1">
                      {previousCourse ? previousCourse.title : "le cours précédent"}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}