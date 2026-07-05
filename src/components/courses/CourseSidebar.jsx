import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

// Ajout de la prop isLastCourse pour savoir s'il reste un cours après
export default function CourseSidebar({
  localProgress,
  isSaving,
  isLastCourse = false,
}) {
  const isCompleted = localProgress === 100;

  return (
    <div className="p-5 rounded-2xl border border-white/5 bg-white/5 space-y-4">
      <h3 className="text-xs font-bold uppercase tracking-wider text-white/40">
        Ton avancement
      </h3>

      {/* Barre de progression */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-medium">
          <span className="text-white/60">Complété à</span>
          <span className="text-indigo-400 font-bold text-sm">
            {localProgress}%
          </span>
        </div>
        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
          <div
            className="h-full bg-indigo-500 rounded-full transition-all duration-500"
            style={{ width: `${localProgress}%` }}
          ></div>
        </div>
      </div>

      <hr className="border-white/5" />

      <p className="text-xs text-white/50 leading-relaxed">
        {isCompleted
          ? isLastCourse
            ? "Félicitations ! Tu as terminé avec succès le tout dernier module du catalogue ! 🎉"
            : "Félicitations ! Ce module est complété et validé."
          : "Consultez le contenu. Vous devez obligatoirement valider le quiz en bas de page avec un score minimum de 70% pour terminer ce cours."}
      </p>

      {/* Bouton de statut */}
      <button
        disabled={isSaving || !isCompleted}
        className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${
          isCompleted
            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 cursor-not-allowed"
            : "bg-white/5 text-white/40 border border-white/5 cursor-not-allowed shadow-none"
        }`}
      >
        <CheckCircle className="w-4 h-4" />
        {isCompleted ? "Module Terminé ! 🎉" : "Réussir le quiz pour valider"}
      </button>

      {/* Lien de retour avec message dynamique */}
      {isCompleted && (
        <Link
          to="/user/courses"
          className="block text-center text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors mt-2 cursor-pointer"
        >
          {isLastCourse
            ? "Voir mon catalogue terminé →"
            : "Nouveau cours débloqué ! Retourner au catalogue →"}
        </Link>
      )}
    </div>
  );
}
