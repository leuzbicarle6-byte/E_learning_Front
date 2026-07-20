import React from "react";
import { useGetCoursesQuery } from "../../backend/features/courses/coursesApi";
import { Loader2, AlertCircle, Award, BookOpen } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import CoursProgressif from "../../components/courses/cour/CoursProgressif";
import CoursGratuit from "../../components/courses/cour/CoursGratuit";

export default function Cours() {
  const { data: listeCours, isLoading, isError, error } = useGetCoursesQuery();

  // Utilisation de useSearchParams au lieu de useState
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "progressif";

  const coursesArray = Array.isArray(listeCours)
    ? listeCours
    : listeCours?.results || [];

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

  const coursProgressifs = coursesArray;
  const coursGratuits = coursesArray.filter((cours) => cours.is_free || true);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* En-tête Global */}
      <div className="space-y-4 border-b border-white/5 pb-6">
        <h1 className="font-display font-black text-2xl md:text-4xl text-white tracking-tight">
          Mon Espace d'Apprentissage
        </h1>

        {/* Navigation avec des composants Link */}
        <div className="flex p-1 space-x-1 bg-white/5 rounded-xl max-w-md border border-white/5">
          <Link
            to="?tab=progressif"
            className={`flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "progressif"
                ? "bg-indigo-600 text-white shadow"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            <Award className="w-4 h-4" />
            Parcours Progressif
          </Link>

          <Link
            to="?tab=gratuit"
            className={`flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "gratuit"
                ? "bg-indigo-600 text-white shadow"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Cours Libres / Gratuits
          </Link>
        </div>
      </div>

      {/* Rendu dynamique */}
      <div className="mt-6">
        {activeTab === "progressif" ? (
          <CoursProgressif coursesArray={coursProgressifs} />
        ) : (
          <CoursGratuit coursesArray={coursGratuits} />
        )}
      </div>
    </div>
  );
}
