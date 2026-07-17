import React from "react";
import { Laptop, Lock, Play, BarChart3, GraduationCap, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

export default function CoursProgressif({ coursesArray }) {
  
  const getCourseIcon = (category) => {
    switch (category?.toLowerCase()) {
      case "informatique":
      case "fondations":
      case "informatique de base":
        return <Laptop className="w-5 h-5 text-indigo-400" />;
      case "bureautique":
        return <GraduationCap className="w-5 h-5 text-purple-400" />;
      case "ia":
      case "intelligence artificielle":
        return <Cpu className="w-5 h-5 text-pink-400" />;
      case "marketing":
        return <BarChart3 className="w-5 h-5 text-emerald-400" />;
      default:
        return <GraduationCap className="w-5 h-5 text-indigo-400" />;
    }
  };

  // 1. Calcul du verrouillage séquentiel
  const processedCourses = coursesArray.map((cours, index) => {
    if (index === 0) return { ...cours, isLockedClient: false };
    const previousCourse = coursesArray[index - 1];
    const isPreviousFinished = previousCourse && previousCourse.user_progress === 100;
    return { ...cours, isLockedClient: !isPreviousFinished };
  });

  // 2. Regroupement par Catégorie
  const categoriesMap = processedCourses.reduce((acc, cours, index) => {
    let catName = cours.category || "Autres";
    if (catName.toLowerCase() === "intelligence artificielle" || catName.toLowerCase() === "ia & automatisation") {
      catName = "Intelligence Artificielle";
    } else {
      catName = catName.charAt(0).toUpperCase() + catName.slice(1);
    }
    if (!acc[catName]) acc[catName] = [];
    const previousCourse = index > 0 ? processedCourses[index - 1] : null;
    acc[catName].push({ ...cours, previousCourseGlobal: previousCourse });
    return acc;
  }, {});

  const currentActiveCourse = processedCourses.find((c) => !c.isLockedClient && c.user_progress < 100);

  return (
    <div className="space-y-12">
      <p className="text-white/50 text-sm -mt-4">
        {currentActiveCourse ? (
          <>🚀 Prochaine étape : Termine <span className="text-indigo-400 font-semibold">"{currentActiveCourse.title}"</span> pour débloquer la suite.</>
        ) : (
          "🔒 Suis l'ordre recommandé pour progresser à ton rythme."
        )}
      </p>

      {Object.entries(categoriesMap).map(([categoryName, categoryCourses]) => (
        <div key={categoryName} className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              {getCourseIcon(categoryName)}
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">{categoryName}</h2>
          </div>

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
                <div className="space-y-3">
                  <h3 className="font-bold text-white text-base tracking-tight line-clamp-1">{cours.title}</h3>
                  <p className="text-xs text-white/40 line-clamp-4 leading-relaxed">{cours.description}</p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  {cours.isLockedClient ? (
                    <div className="flex items-center gap-2 text-xs font-medium text-white/30">
                      <Lock className="w-3.5 h-3.5" /> Verrouillé
                    </div>
                  ) : (
                    <>
                      <div>
                        <span className="block text-[9px] text-white/40 uppercase font-mono">Progression</span>
                        <span className="text-xs font-bold text-indigo-400">{cours.user_progress || 0}%</span>
                      </div>
                      <Link to={`/user/courses/${cours.id}`} className="flex items-center gap-1.5 p-2 px-4 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500">
                        Lancer <Play className="w-2.5 h-2.5 fill-white text-white" />
                      </Link>
                    </>
                  )}
                </div>

                {cours.isLockedClient && (
                  <div className="absolute inset-0 bg-[#050816]/30 backdrop-blur-xs rounded-2xl flex items-center justify-center p-4">
                    <div className="flex flex-col items-center text-center gap-1.5 p-3 rounded-xl bg-slate-950/95 border border-white/5 text-white">
                      <Lock className="w-4 h-4 text-purple-400" />
                      <span className="text-[9px] font-bold tracking-wider uppercase text-white/40">Bloqué : Termine d'abord</span>
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