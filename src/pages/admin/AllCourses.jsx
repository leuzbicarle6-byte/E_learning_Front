import React from "react";
import {
  useDeleteCourseMutation,
  useGetCoursesQuery,
} from "../../backend/features/courses/coursesApi";
import { Link } from "react-router-dom";
import {
  Plus,
  Eye,
  Pencil,
  Trash2,
  Loader2,
  AlertCircle,
  GraduationCap,
} from "lucide-react";
import { toast } from "sonner";

export default function AllCourses() {
  const { data: listeCours, isLoading, isError, error } = useGetCoursesQuery();
  const [deleteCours] = useDeleteCourseMutation();

  const coursesArray = Array.isArray(listeCours)
    ? listeCours
    : listeCours?.results || [];

  const handleDelete = (courseId, courseTitle) => {
    // Le toast.promise gère tout le cycle de vie de la requête
    toast.promise(deleteCours(courseId).unwrap(), {
      loading: `Suppression de "${courseTitle}" en cours...`,
      success: () => {
        return `Le cours "${courseTitle}" a été supprimé avec succès !`;
      },
      error: (err) => {
        const errorMsg = err?.data?.detail || "Une erreur est survenue.";
        return `Impossible de supprimer : ${errorMsg}`;
      },
    });
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
        <p className="text-sm text-white/50">Chargement de la zone admin...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-md mx-auto p-6 rounded-2xl border border-rose-500/20 bg-rose-500/10 text-center space-y-3">
        <AlertCircle className="w-8 h-8 text-rose-400 mx-auto" />
        <h3 className="text-white font-semibold">Erreur de chargement</h3>
        <p className="text-xs text-rose-300/70">
          {error?.data?.detail || "Impossible de récupérer la liste des cours."}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 p-4 md:p-6 text-white animate-in fade-in duration-300">
      {/* EN-TÊTE ADMIN AVEC BOUTON CRÉER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/5 pb-6">
        <div className="space-y-1">
          <h1 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
            Gestion du Catalogue
          </h1>
          <p className="text-white/50 text-sm">
            Espace d'administration : {coursesArray.length} cours répertoriés.
          </p>
        </div>

        <Link
          to="/admin/courses/create"
          className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm px-4 py-2.5 rounded-xl shadow-md shadow-purple-600/10 transition-colors cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          Créer un cours
        </Link>
      </div>

      {/* GRILLE DES CARTES DE COURS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesArray.map((cours) => (
          <div
            key={cours.id}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col justify-between h-64 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          >
            {/* Contenu supérieur de la carte */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/60">
                  ID: {cours.id}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300">
                  {cours.category || "Général"}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-semibold text-white text-base tracking-tight line-clamp-1 group-hover:text-purple-400 transition-colors">
                  {cours.title}
                </h3>
                <p className="text-xs text-white/40 line-clamp-3 leading-relaxed">
                  {cours.description || "Aucune description fournie."}
                </p>
              </div>
            </div>

            {/* BARRE D'ACTIONS INFERIEURE */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              {/* Indicateur de prix/statut à gauche */}
              <div className="text-xs font-mono text-white/40">
                {cours.is_free ? (
                  <span className="text-emerald-400 font-semibold">
                    Gratuit
                  </span>
                ) : (
                  <span>{cours.price || "0.00"} €</span>
                )}
              </div>

              {/* Boutons CRUD à droite */}
              <div className="flex items-center gap-1.5">
                {/* 1. EYES / DETAIL */}
                <Link
                  to={`/admin/courses/details/${cours.id}`}
                  title="Voir l'aperçu étudiant"
                  className="p-2 rounded-lg bg-white/5 border border-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                </Link>

                {/* 2. UPDATE / MODIFIER */}
                <Link
                  to={`/admin/courses/edit/${cours.id}`}
                  title="Modifier le cours"
                  className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition-colors cursor-pointer"
                >
                  <Pencil className="w-4 h-4" />
                </Link>

                {/* 3. DELETE / SUPPRIMER */}
                <button
                  onClick={() => handleDelete(cours.id, cours.title)}
                  title="Supprimer le cours"
                  className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Si aucun cours n'est trouvé */}
      {coursesArray.length === 0 && (
        <div className="p-8 rounded-2xl border border-dashed border-white/10 bg-white/5 text-center text-white/40">
          <GraduationCap className="w-8 h-8 mx-auto mb-2 opacity-50" />
          Aucun cours n'est actuellement disponible dans le catalogue.
        </div>
      )}
    </div>
  );
}
