import React, { useState, useEffect } from "react";
import {
  useGetExercicesQuery,
  useGetAllSubmissionsQuery,
  useCreateExerciceMutation,
  useUpdateExerciceMutation,
  useDeleteExerciceMutation,
  useUpdateExerciseStatusMutation,
} from "../../../backend/features/exercice/exerciceApi"; // Ajuste le chemin selon ton projet
import {
  Plus,
  Pencil,
  Trash2,
  CheckCircle,
  Clock,
  BookOpen,
  Loader2,
  FolderPlus,
  Sparkles,
  AlertCircle,
} from "lucide-react";

export default function ExercicesAdmin() {
  // ==========================================
  // 1. API QUERIES & MUTATIONS (RTK Query)
  // ==========================================
  const { data: modulesData, isLoading: isLoadingModules, isError: isErrorModules } = useGetExercicesQuery();
  
  // Exécute la requête de soumissions uniquement si l'admin consulte cet onglet
  const [viewMode, setViewMode] = useState("exercises"); // "exercises" ou "submissions"
  const { data: pendingSubmissions = [], isLoading: isLoadingSubmissions } = useGetAllSubmissionsQuery(undefined, {
    skip: viewMode !== "submissions",
  });

  const [createExercice] = useCreateExerciceMutation();
  const [updateExercice] = useUpdateExerciceMutation();
  const [deleteExercice] = useDeleteExerciceMutation();
  const [validateSubmission] = useUpdateExerciseStatusMutation();

  const coursModules = modulesData?.results || [];

  // ==========================================
  // 2. ÉTATS LOCAUX (UI & Formulaires)
  // ==========================================
  const [activeTab, setActiveTab] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingExercise, setEditingExercise] = useState(null);
  const [formData, setFormData] = useState({
    exercise_id: "",
    title: "",
    desc: "",
    difficulty: "Débutant",
  });

  // Initialise l'onglet actif dès que les modules sont chargés
  useEffect(() => {
    if (coursModules.length > 0 && !activeTab) {
      setActiveTab(coursModules[0].id);
    }
  }, [coursModules, activeTab]);

  const currentModule = coursModules.find((m) => m.id === activeTab);

  // ==========================================
  // 3. LOGIQUE / HANDLERS ACTIONS
  // ==========================================
  
  // Ouvrir la fenêtre modale (Création ou Édition)
  const openModal = (exercise = null) => {
    if (exercise) {
      setEditingExercise(exercise);
      setFormData({
        exercise_id: exercise.exercise_id,
        title: exercise.title,
        desc: exercise.desc,
        difficulty: exercise.difficulty,
      });
    } else {
      setEditingExercise(null);
      setFormData({
        exercise_id: (currentModule?.exercises?.length || 0) + 1,
        title: "",
        desc: "",
        difficulty: "Débutant",
      });
    }
    setIsModalOpen(true);
  };

  // Soumettre le formulaire Django (POST ou PATCH)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingExercise) {
        await updateExercice({ id: editingExercise.id, ...formData }).unwrap();
      } else {
        await createExercice({ module: activeTab, ...formData }).unwrap();
      }
      setIsModalOpen(false);
    } catch (err) {
      console.error("Erreur lors de l'enregistrement de l'exercice :", err);
    }
  };

  // Supprimer un cas pratique (DELETE)
  const handleDelete = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir définitivement supprimer cet exercice ?")) {
      try {
        await deleteExercice(id).unwrap();
      } catch (err) {
        console.error("Erreur de suppression :", err);
      }
    }
  };

  // Valider le travail d'un étudiant (Bascule le statut en 'validated')
  const handleValidateStudent = async (studentId, exerciseId) => {
    try {
      await validateSubmission({
        exercise_id: exerciseId,
        student_id: studentId, // Transmis pour cibler la ligne de l'élève en BDD
        status: "validated",
      }).unwrap();
    } catch (err) {
      console.error("Erreur de validation de l'exercice :", err);
    }
  };

  // ==========================================
  // 4. ÉCRANS INTERMÉDIAIRES (Loading & Error)
  // ==========================================
  if (isLoadingModules) {
    return (
      <div className="min-h-screen bg-[#0a192f] flex flex-col items-center justify-center text-white font-sans">
        <Loader2 className="w-12 h-12 text-purple-500 animate-spin mb-4" />
        <p className="text-slate-400 text-sm animate-pulse">Chargement de l'espace administration...</p>
      </div>
    );
  }

  if (isErrorModules) {
    return (
      <div className="min-h-screen bg-[#0a192f] flex flex-col items-center justify-center text-white font-sans p-6">
        <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl max-w-md text-center">
          <AlertCircle className="w-10 h-10 text-red-400 mx-auto mb-3" />
          <p className="text-red-400 font-semibold mb-2">Erreur de liaison avec Django</p>
          <p className="text-slate-400 text-xs">Impossible de charger le catalogue d'exercices.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a192f] p-6 md:p-12 font-sans text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* En-tête de la Page */}
        <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-700 pb-6 gap-4">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <BookOpen className="w-8 h-8 text-purple-400" />
              <h1 className="text-3xl font-bold tracking-tight text-white">
                Gestion des Ateliers Pratiques
              </h1>
            </div>
            <p className="text-slate-300 text-sm">
              Espace Enseignant : Configurez vos modules d'exercices et validez les livrables soumis par vos étudiants.
            </p>
          </div>

          {/* Système d'onglets principaux (Catalogue VS Soumissions) */}
          <div className="flex gap-2 bg-[#112240] p-1.5 rounded-xl border border-slate-700 self-center md:self-auto">
            <button
              onClick={() => setViewMode("exercises")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-150 ${
                viewMode === "exercises" ? "bg-purple-600 text-white shadow-md shadow-purple-600/20" : "text-slate-400 hover:text-white"
              }`}
            >
              Catalogue Ateliers
            </button>
            <button
              onClick={() => setViewMode("submissions")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-150 relative ${
                viewMode === "submissions" ? "bg-purple-600 text-white shadow-md shadow-purple-600/20" : "text-slate-400 hover:text-white"
              }`}
            >
              Soumissions Éleves
              {pendingSubmissions.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-[#0a192f] text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {pendingSubmissions.length}
                </span>
              )}
            </button>
          </div>
        </header>

        {/* Barre de Navigation horizontale des chapitres */}
        <nav className="flex flex-wrap gap-2 mb-8">
          {coursModules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActiveTab(mod.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                activeTab === mod.id
                  ? "bg-purple-600 text-white border-transparent shadow-lg shadow-purple-600/30"
                  : "bg-[#112240] text-slate-300 border-slate-700 hover:bg-[#1d3557]"
              }`}
            >
              <span className="text-lg">{mod.icon}</span>
              <span>{mod.title}</span>
            </button>
          ))}
        </nav>

        {/* ==========================================
            VUE A : CATALOGUE D'EXERCICES
           ========================================== */}
        {viewMode === "exercises" && currentModule && (
          <div className="animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{currentModule.icon}</span>
                <h2 className="text-2xl font-bold text-white">{currentModule.title}</h2>
                <span className="bg-purple-500/10 text-purple-300 text-xs px-3 py-1 rounded-full font-bold border border-purple-500/20">
                  {currentModule.exercises?.length || 0} Ateliers inscrits
                </span>
              </div>
              <button
                onClick={() => openModal()}
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 px-5 rounded-xl text-sm shadow-lg shadow-purple-600/20 transition-all active:scale-95"
              >
                <Plus className="w-4 h-4" /> Créer un nouvel exercice
              </button>
            </div>

            {/* Grille des fiches d'exercices */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentModule.exercises?.map((ex) => (
                <div key={ex.id} className="bg-[#112240] border border-slate-700 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-slate-600 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-lg border border-purple-500/20">
                        Exercice {ex.exercise_id}
                      </span>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${
                        ex.difficulty === "Débutant" ? "bg-green-500/10 text-green-400 border-green-500/20" :
                        ex.difficulty === "Intermédiaire" ? "bg-orange-500/10 text-orange-400 border-orange-500/20" :
                        "bg-red-500/10 text-red-400 border-red-500/20"
                      }`}>
                        {ex.difficulty}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{ex.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed bg-[#0a192f]/60 p-4 rounded-xl border border-slate-800 font-sans min-h-20">
                      {ex.desc}
                    </p>
                  </div>

                  {/* Actions du gestionnaire */}
                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-end gap-2">
                    <button
                      onClick={() => openModal(ex)}
                      className="p-2 text-slate-400 hover:text-purple-400 hover:bg-purple-500/10 rounded-xl transition-all"
                      title="Modifier les consignes"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(ex.id)}
                      className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all"
                      title="Retirer l'exercice du catalogue"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==========================================
            VUE B : LISTE DES TRAVAUX DES ÉLÈVES A VALIDER
           ========================================== */}
        {viewMode === "submissions" && (
          <div className="bg-[#112240] border border-slate-700 rounded-2xl p-6 shadow-xl animate-in fade-in duration-200">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" /> Demandes de validation en attente
            </h2>
            
            {isLoadingSubmissions ? (
              <div className="flex items-center justify-center py-8 gap-2 text-sm text-slate-400">
                <Loader2 className="w-4 h-4 animate-spin text-purple-400" /> Synchronisation des copies...
              </div>
            ) : pendingSubmissions.length === 0 ? (
              <p className="text-slate-400 text-sm text-center py-8 font-sans">
                Parfait ! Aucune copie d'élève n'est en attente de correction pour le moment. 👍
              </p>
            ) : (
              <div className="space-y-3">
                {pendingSubmissions.map((sub) => (
                  <div key={sub.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#0a192f]/50 border border-slate-800 p-4 rounded-xl gap-4 hover:border-slate-700 transition-all">
                    <div>
                      <p className="text-sm font-bold text-white mb-0.5">{sub.student_username}</p>
                      <p className="text-xs text-slate-400">
                        Module concerné : <span className="text-purple-300">{sub.exercise_title}</span> (Exercice {sub.exercise_num})
                      </p>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                      <span className="flex items-center gap-1.5 text-xs bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full border border-amber-500/20 font-sans">
                        <Clock className="w-3.5 h-3.5 animate-spin" /> En attente
                      </span>
                      <button
                        onClick={() => handleValidateStudent(sub.student_id, sub.exercise_id)}
                        className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 px-4 rounded-lg transition-all shadow-md active:scale-95"
                      >
                        <CheckCircle className="w-3.5 h-3.5" /> Valider le travail
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ==========================================
            FENÊTRE MODALE (CREATE & UPDATE EXERCICE)
           ========================================== */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-150">
            <div className="bg-[#112240] border border-slate-700 rounded-2xl w-full max-w-lg p-6 shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FolderPlus className="w-5 h-5 text-purple-400" />
                {editingExercise ? "Modifier l'exercice" : "Nouvel exercice pratique"}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Index Ex (ex: 1)</label>
                    <input
                      type="number"
                      required
                      value={formData.exercise_id}
                      onChange={(e) => setFormData({ ...formData, exercise_id: e.target.value })}
                      className="w-full bg-[#0a192f] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Niveau</label>
                    <select
                      value={formData.difficulty}
                      onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                      className="w-full bg-[#0a192f] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500"
                    >
                      <option value="Débutant">Débutant</option>
                      <option value="Intermédiaire">Intermédiaire</option>
                      <option value="Avancé">Avancé</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Intitulé de l'exercice</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Formater un tableau de bord"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-[#0a192f] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Consignes & Énoncé de l'atelier</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Détaillez les étapes attendues de l'étudiant pour valider l'atelier..."
                    value={formData.desc}
                    onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                    className="w-full bg-[#0a192f] border border-slate-700 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-purple-500 font-sans resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 text-sm font-semibold text-slate-400 hover:text-white transition-all"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 px-5 rounded-xl text-sm transition-all shadow-lg shadow-purple-600/10"
                  >
                    {editingExercise ? "Sauvegarder" : "Publier l'exercice"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}