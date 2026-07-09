import React, { useState, useEffect } from "react";
import {
  useGetExercicesQuery,
  useUpdateExerciseStatusMutation,
} from "../../backend/features/exercice/exerciceApi"; // Ajuste le chemin selon ton projet
import {
  Play,
  Send,
  Clock,
  CheckCircle,
  BookOpen,
  Lock,
  Loader2,
} from "lucide-react";

export default function Exercice() {
  // 1. Récupération des données réelles depuis le backend
  const {
    data: modules = [],
    isLoading,
    isError,
    error,
  } = useGetExercicesQuery();

  const coursModules = modules?.results || []

  // 2. Mutation pour mettre à jour le statut sur Django
  const [updateStatus, { isLoading: isUpdating }] =
    useUpdateExerciseStatusMutation();

  // Onglet actif (géré dynamiquement après le chargement des données)
  const [activeTab, setActiveTab] = useState(null);

  // Initialiser l'onglet actif sur le premier module disponible dès que les données arrivent
  useEffect(() => {
    if (modules.length > 0 && !activeTab) {
      setActiveTab(modules[0].id);
    }
  }, [modules, activeTab]);

  // Récupérer les données du module sélectionné
  const currentModule = coursModules.find((m) => m.id === activeTab);

  // Fonction pour envoyer le nouveau statut au backend Django
  const handleUpdateStatus = async (exerciseId, nextStatus) => {
    try {
      await updateStatus({
        exercise_id: exerciseId,
        status: nextStatus,
      }).unwrap();
    } catch (err) {
      console.error("Erreur lors de la mise à jour du statut :", err);
    }
  };

  // Écran de chargement initial
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a192f] flex flex-col items-center justify-center text-white font-sans">
        <Loader2 className="w-12 h-12 text-purple-500 animate-spin mb-4" />
        <p className="text-slate-400 text-sm animate-pulse">
          Chargement de vos ateliers pratiques...
        </p>
      </div>
    );
  }

  // Écran d'erreur technique
  if (isError) {
    return (
      <div className="min-h-screen bg-[#0a192f] flex flex-col items-center justify-center text-white font-sans p-6">
        <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl max-w-md text-center">
          <p className="text-red-400 font-semibold mb-2">
            Impossible de charger les exercices
          </p>
          <p className="text-slate-400 text-xs">
            {error?.data?.detail || "Une erreur réseau est survenue."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a192f] p-6 font-sans text-white">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <header className="mb-10 text-center md:text-left border-b border-slate-700 pb-6">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <BookOpen className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Ateliers & Exercices Pratiques
            </h1>
          </div>
          <p className="text-slate-300 max-w-2xl text-sm">
            Réalisez les cas réels sur votre machine, soumettez-les au système
            et suivez les validations de l'équipe pédagogique.
          </p>
        </header>

        {/* Barre de navigation des Modules */}
        <nav className="flex flex-wrap gap-2 mb-8">
          {coursModules.map((mod) => {
            const isSelected = activeTab === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => mod.is_unlocked && setActiveTab(mod.id)}
                disabled={!mod.is_unlocked}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 relative ${
                  isSelected
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                    : mod.is_unlocked
                      ? "bg-[#112240] text-slate-300 hover:bg-[#1d3557] border border-slate-700"
                      : "bg-[#112240]/40 text-slate-500 border border-slate-800/60 cursor-not-allowed opacity-60"
                }`}
              >
                <span className="text-lg filter grayscale-[30%]">
                  {mod.icon}
                </span>
                <span>{mod.title}</span>
                {!mod.is_unlocked && (
                  <Lock className="w-3.5 h-3.5 text-slate-500 ml-1 shrink-0" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Contenu du module actif */}
        {currentModule && (
          <div className="animate-in fade-in duration-200">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{currentModule.icon}</span>
              <h2 className="text-2xl font-bold text-white">
                {currentModule.title}
              </h2>
              <span className="bg-purple-500/10 text-purple-300 text-xs px-3 py-1 rounded-full font-bold border border-purple-500/20">
                {currentModule.exercises?.length || 0} Ateliers
              </span>
            </div>

            {/* Grille des exercices */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentModule.exercises?.map((ex) => {
                const currentStatus = ex.status || "not_started";

                return (
                  <div
                    key={ex.id}
                    className={`bg-[#112240] border rounded-2xl p-6 shadow-xl flex flex-col justify-between transition-all duration-300 ${
                      currentStatus === "validated"
                        ? "border-emerald-500/40 bg-emerald-950/10"
                        : "border-slate-700 hover:border-slate-600"
                    }`}
                  >
                    <div>
                      {/* En-tête du Ticket Exercice */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-lg border border-purple-500/20">
                          Exercice {ex.exercise_id}
                        </span>
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${
                            ex.difficulty === "Débutant"
                              ? "bg-green-500/10 text-green-400 border-green-500/20"
                              : ex.difficulty === "Intermédiaire"
                                ? "bg-orange-500/10 text-orange-400 border-orange-500/20"
                                : "bg-red-500/10 text-red-400 border-red-500/20"
                          }`}
                        >
                          {ex.difficulty}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2">
                        {ex.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed bg-[#0a192f]/60 p-4 rounded-xl border border-slate-800 font-sans min-h-[80px]">
                        {ex.desc}
                      </p>
                    </div>

                    {/* Zone d'action dynamique (Liée aux mutations RTK) */}
                    <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between min-h-[44px]">
                      {currentStatus === "not_started" && (
                        <button
                          onClick={() =>
                            handleUpdateStatus(ex.id, "in_progress")
                          }
                          disabled={isUpdating}
                          className="w-full flex items-center justify-center gap-2 bg-[#1d3557] hover:bg-[#2a4d7c] text-white text-sm font-semibold py-2.5 px-4 rounded-xl border border-blue-500/20 transition-all active:scale-[0.98] disabled:opacity-50"
                        >
                          <Play className="w-4 h-4 fill-white text-white" />{" "}
                          Lancer le cas pratique
                        </button>
                      )}

                      {currentStatus === "in_progress" && (
                        <button
                          onClick={() => handleUpdateStatus(ex.id, "pending")}
                          disabled={isUpdating}
                          className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2.5 px-4 rounded-xl shadow-lg shadow-purple-600/20 transition-all active:scale-[0.98] disabled:opacity-50 animate-fade-in"
                        >
                          <Send className="w-4 h-4" /> Terminer et envoyer à
                          l'admin
                        </button>
                      )}

                      {currentStatus === "pending" && (
                        <div className="w-full flex items-center justify-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 py-2.5 px-4 rounded-xl text-xs font-medium font-sans">
                          <Clock className="w-4 h-4 animate-spin text-amber-400" />
                          <span>
                            En attente de validation par l'administrateur...
                          </span>
                        </div>
                      )}

                      {currentStatus === "validated" && (
                        <div className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 px-4 rounded-xl text-xs font-bold font-sans shadow-lg shadow-emerald-600/20 animate-in zoom-in-95 duration-150">
                          <CheckCircle className="w-4 h-4" /> Exercice Validé
                          par l'Admin 🎉
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
