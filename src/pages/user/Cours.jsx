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
  Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Cours() {
  const { data: listeCours, isLoading, isError, error } = useGetCoursesQuery();

  const coursesArray = Array.isArray(listeCours)
    ? listeCours
    : listeCours?.results || [];

  // Gestion dynamique et propre des icônes
  const getCourseIcon = (category) => {
    switch (category?.toLowerCase()) {
      case "informatique":
      case "fondations":
      case "les fondations":
      case "informatique de base":
        return <Laptop className="w-5 h-5 text-indigo-400" />;
      case "bureautique":
        return <GraduationCap className="w-5 h-5 text-purple-400" />;
      case "ia":
      case "intelligence artificielle":
      case "ia & automatisation":
        return <Cpu className="w-5 h-5 text-pink-400" />;
      case "marketing":
      case "marketing digital":
        return <BarChart3 className="w-5 h-5 text-emerald-400" />;
      default:
        return <GraduationCap className="w-5 h-5 text-indigo-400" />;
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
        <h3 className="text-white font-semibold">Impossible de charger les cours</h3>
        <p className="text-xs text-rose-300/70">
          {error?.data?.detail || "Une erreur est survenue lors de la connexion avec le serveur."}
        </p>
      </div>
    );
  }

  // 1. Calcul de la progression linéaire globale / Verrouillage
  const processedCourses = coursesArray.map((cours, index) => {
    if (index === 0) return { ...cours, isLockedClient: false };
    const previousCourse = coursesArray[index - 1];
    const isPreviousFinished = previousCourse && previousCourse.user_progress === 100;
    return { ...cours, isLockedClient: !isPreviousFinished };
  });

  // 2. Regroupement intelligent par Catégorie
  const categoriesMap = processedCourses.reduce((acc, cours, index) => {
    // On normalise le nom de la catégorie pour éviter les doublons ("informatique" vs "Informatique")
    let catName = cours.category || "Autres";
    if (catName.toLowerCase() === "intelligence artificielle" || catName.toLowerCase() === "ia & automatisation") {
      catName = "Intelligence Artificielle";
    } else {
      // Met la première lettre en majuscule (ex: informatique -> Informatique)
      catName = catName.charAt(0).toUpperCase() + catName.slice(1);
    }

    if (!acc[catName]) acc[catName] = [];
    
    // On garde une référence à l'index global et au cours précédent global pour le cadenas
    const previousCourse = index > 0 ? processedCourses[index - 1] : null;
    acc[catName].push({ ...cours, previousCourseGlobal: previousCourse });
    
    return acc;
  }, {});

  // Options d'affichage en-tête
  const currentActiveCourse = processedCourses.find((c) => !c.isLockedClient && c.user_progress < 100);
  const allCoursesFinished = processedCourses.length > 0 && processedCourses.every((c) => c.user_progress === 100);

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-300">
      
      {/* En-tête Global */}
      <div className="space-y-2 border-b border-white/5 pb-6">
        <h1 className="font-display font-black text-2xl md:text-4xl text-white tracking-tight">
          Mon Espace d'Apprentissage
        </h1>
        <p className="text-white/50 text-sm">
          {allCoursesFinished ? (
            "🎉 Incroyable ! Tu as terminé l'intégralité du parcours."
          ) : currentActiveCourse ? (
            <>
              🚀 Prochaine étape : Termine le cours <span className="text-indigo-400 font-semibold">"{currentActiveCourse.title}"</span> pour débloquer la suite du catalogue.
            </>
          ) : (
            "🔒 Suis l'ordre recommandé pour progresser sereinement."
          )}
        </p>
      </div>

      {/* Rendu par sections de catégories */}
      {Object.entries(categoriesMap).map(([categoryName, categoryCourses]) => (
        <div key={categoryName} className="space-y-6">
          
          {/* Titre de la Catégorie */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              {getCourseIcon(categoryName)}
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {categoryName}
            </h2>
            <span className="text-xs font-mono text-white/30 px-2 py-0.5 rounded-full bg-white/5 border border-white/5">
              {categoryCourses.length} {categoryCourses.length > 1 ? "cours" : "cours"}
            </span>
          </div>

          {/* Grille des cartes de cette catégorie */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryCourses.map((cours) => (
              <div
                key={cours.id}
                className={`relative rounded-2xl border p-5 flex flex-col justify-between h-64 transition-all duration-300 bg-white/5 ${
                  cours.isLockedClient
                    ? "border-white/5 opacity-40 select-none"
                    : "border-white/10 hover:border-indigo-500/30 hover:bg-white/10 shadow-xl shadow-black/20"
                }`}
              >
                {/* Contenu de la Card */}
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-bold text-white text-base tracking-tight line-clamp-1">
                      {cours.title}
                    </h3>
                    <p className="text-xs text-white/40 line-clamp-4 leading-relaxed">
                      {cours.description}
                    </p>
                  </div>
                </div>

                {/* Bas de la Card */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  {cours.isLockedClient ? (
                    <div className="flex items-center gap-2 text-xs font-medium text-white/30">
                      <Lock className="w-3.5 h-3.5" />
                      Verrouillé
                    </div>
                  ) : (
                    <>
                      <div className="text-left">
                        <span className="block text-[9px] text-white/40 uppercase font-mono tracking-wider">
                          Progression
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`text-xs font-bold ${
                              cours.user_progress === 100 ? "text-emerald-400" : "text-indigo-400"
                            }`}
                          >
                            {cours.user_progress || 0}%
                          </span>
                          {cours.user_progress === 100 && (
                            <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.2 rounded font-medium">
                              Fini
                            </span>
                          )}
                        </div>
                      </div>

                      <Link
                        to={`/user/courses/${cours.id}`}
                        className={`flex items-center gap-1.5 p-2 px-4 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-md ${
                          cours.user_progress === 100
                            ? "bg-white/5 text-white/80 border border-white/10 hover:bg-white/10"
                            : "bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-600/20"
                        }`}
                      >
                        {cours.user_progress === 100 ? (
                          <>Revoir <Play className="w-2.5 h-2.5 fill-white/80 text-white/80" /></>
                        ) : (
                          <>Lancer <Play className="w-2.5 h-2.5 fill-white text-white" /></>
                        )}
                      </Link>
                    </>
                  )}
                </div>

                {/* Fenêtre de Cadenas Floutée Inter-catégorie */}
                {cours.isLockedClient && (
                  <div className="absolute inset-0 bg-[#050816]/30 backdrop-blur-xs rounded-2xl flex items-center justify-center p-4">
                    <div className="flex flex-col items-center text-center gap-1.5 w-full max-w-[90%] p-3 rounded-xl bg-slate-950/95 border border-white/5 text-white shadow-2xl">
                      <Lock className="w-4 h-4 text-purple-400" />
                      <span className="text-[9px] font-bold tracking-wider uppercase text-white/40 leading-tight">
                        Bloqué : Termine d'abord
                      </span>
                      <span className="text-xs font-bold text-indigo-300 line-clamp-1">
                        {cours.previousCourseGlobal ? cours.previousCourseGlobal.title : "le cours précédent"}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}