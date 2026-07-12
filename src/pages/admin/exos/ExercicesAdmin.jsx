import React, { useState, useEffect } from "react";
import {
  useGetExercicesQuery, // Récupère la liste de TOUS les exercices
  useGetAllSubmissionsQuery,
  useCreateExerciceMutation,
  useUpdateExerciceMutation,
  useDeleteExerciceMutation,
  useUpdateExerciseStatusMutation,
} from "../../../backend/features/exercice/exerciceApi";
// IMPORTATION CRUCIALE : On récupère l'API globale des cours pour les onglets et le formulaire
import { useGetCoursesTabsQuery } from "../../../backend/features/courses/coursesApi";
import {
  Plus,
  CheckCircle,
  Clock,
  BookOpen,
  Loader2,
  Sparkles,
  AlertCircle,
} from "lucide-react";

import ExerciseCard from "./ExerciseCard";
import ExerciseModal from "./ExerciseModal";
import { toast } from "sonner";

export default function ExercicesAdmin() {
  // ==========================================
  // 1. APPELS API REDUX
  // ==========================================
  const {
    data: exercisesData,
    isLoading: isLoadingEx,
    isError: isErrorEx,
  } = useGetExercicesQuery();
  const { data: coursesData, isLoading: isLoadingCourses } =
    useGetCoursesTabsQuery();

  const [viewMode, setViewMode] = useState("exercises");
  const { data: pendingSubmissions = [], isLoading: isLoadingSubmissions } =
    useGetAllSubmissionsQuery(undefined, {
      skip: viewMode !== "submissions",
    });

  const [createExercice] = useCreateExerciceMutation();
  const [updateExercice] = useUpdateExerciceMutation();
  const [deleteExercice] = useDeleteExerciceMutation();
  const [validateSubmission] = useUpdateExerciseStatusMutation();

  // Sécurisation des formats (gère le DRF paginé .results ou le tableau brut)
  const allExercises = exercisesData?.results || exercisesData || [];
  const allCourses = coursesData?.results || coursesData || [];

  // ==========================================
  // 2. ÉTATS LOCAUX
  // ==========================================
  const [activeTab, setActiveTab] = useState(null); // ID du Cours actif sélectionné
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingExercise, setEditingExercise] = useState(null);

  const [formData, setFormData] = useState({
    exercise_id: "",
    course: "",
    title: "",
    desc: "",
    difficulty: "Débutant",
  });

  // Initialise le premier onglet dès que les cours sont chargés
  useEffect(() => {
    if (allCourses.length > 0 && !activeTab) {
      setActiveTab(allCourses[0].id);
    }
  }, [allCourses, activeTab]);

  // Filtrage local : On trouve le cours sélectionné et les exercices qui lui appartiennent
  const currentCourse = allCourses.find((c) => c.id === activeTab);
  const currentCourseExercises = allExercises.filter((ex) => {
    // Gère si ex.course est un ID numérique ou un objet complet
    const courseId = typeof ex.course === "object" ? ex.course?.id : ex.course;
    return courseId === activeTab;
  });

  // ==========================================
  // 3. LOGIQUE DES MODALES
  // ==========================================
  const handleOpenAddModal = () => {
    setEditingExercise(null);
    setFormData({
      exercise_id: (currentCourseExercises.length || 0) + 1,
      course: activeTab || allCourses[0]?.id || "", // Pré-sélectionne le cours actuel
      title: "",
      desc: "",
      difficulty: "Débutant",
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (exercise) => {
    const courseId =
      typeof exercise.course === "object"
        ? exercise.course?.id
        : exercise.course;
    setEditingExercise(exercise);
    setFormData({
      exercise_id: exercise.exercise_id,
      course: courseId || activeTab,
      title: exercise.title,
      desc: exercise.desc,
      difficulty: exercise.difficulty,
    });
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingExercise) {
        await updateExercice({ id: editingExercise.id, ...formData }).unwrap();
        toast.success("Exercice modifiée avec succés");
      } else {
        await createExercice(formData).unwrap();
        toast.success("Exercice crée avec succés");
      }
      setIsModalOpen(false);
    } catch (err) {
      console.error("Erreur lors de la sauvegarde :", err);
    }
  };

  const handleDeleteExercise = async (id) => {
    if (window.confirm("Supprimer définitivement cet exercice ?")) {
      try {
        await deleteExercice(id).unwrap();
      } catch (err) {
        console.error("Erreur de suppression :", err);
      }
    }
  };

  const handleValidateStudent = async (studentId, exerciseId) => {
    try {
      await validateSubmission({
        exercise_id: exerciseId,
        student_id: studentId,
        status: "validated",
      }).unwrap();
    } catch (err) {
      console.error("Erreur de validation :", err);
    }
  };

  if (isLoadingEx || isLoadingCourses) {
    return (
      <div className="min-h-screen bg-[#0a192f] flex flex-col items-center justify-center text-white">
        <Loader2 className="w-12 h-12 text-purple-500 animate-spin mb-4" />
        <p className="text-slate-400 text-sm animate-pulse">
          Chargement de l'espace Admin...
        </p>
      </div>
    );
  }

  if (isErrorEx) {
    return (
      <div className="min-h-screen bg-[#0a192f] flex flex-col items-center justify-center text-white p-6">
        <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl max-w-md text-center">
          <AlertCircle className="w-10 h-10 text-red-400 mx-auto mb-3" />
          <p className="text-red-400 font-semibold mb-2">
            Erreur de communication avec Django
          </p>
          <p className="text-slate-400 text-xs">
            Impossible de charger les exercices depuis le serveur.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a192f] p-6 md:p-12 text-white font-sans">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-700 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-8 h-8 text-purple-400" />
              <h1 className="text-3xl font-bold tracking-tight">
                Gestion des Ateliers Pratiques
              </h1>
            </div>
            <p className="text-slate-300 text-sm">
              Mode Administrateur : Pilotez les exercices reliés directement à
              vos cours.
            </p>
          </div>

          <div className="flex gap-2 bg-[#112240] p-1.5 rounded-xl border border-slate-700">
            <button
              onClick={() => setViewMode("exercises")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${viewMode === "exercises" ? "bg-purple-600 text-white" : "text-slate-400 hover:text-white"}`}
            >
              Catalogue Ateliers
            </button>
            <button
              onClick={() => setViewMode("submissions")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all relative ${viewMode === "submissions" ? "bg-purple-600 text-white" : "text-slate-400 hover:text-white"}`}
            >
              Soumissions Élèves
              {pendingSubmissions.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-[#0a192f] text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center">
                  {pendingSubmissions.length}
                </span>
              )}
            </button>
          </div>
        </header>

        {/* LISTE DES ONGLETS (Affiche la liste complète des cours existants en BDD) */}
        <nav className="flex flex-wrap gap-2 mb-8">
          {allCourses.length === 0 ? (
            <p className="text-amber-400 text-sm">
              ⚠️ Aucun cours créé dans la base de données. Créez d'abord un
              cours.
            </p>
          ) : (
            allCourses.map((course) => (
              <button
                key={course.id}
                onClick={() => setActiveTab(course.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold border transition-all ${activeTab === course.id ? "bg-purple-600 text-white border-transparent shadow-lg shadow-purple-600/30" : "bg-[#112240] text-slate-300 border-slate-700 hover:bg-[#1d3557]"}`}
              >
                <span>{course.title}</span>
              </button>
            ))
          )}
        </nav>

        {/* VUE CATALOGUE D'EXERCICES */}
        {viewMode === "exercises" && (
          <div className="animate-in fade-in duration-200">
            {/* Barre de contrôle supérieure (Toujours visible si connecté en Admin) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 bg-[#112240]/40 p-4 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-3">
                {currentCourse ? (
                  <>
                    <span className="text-3xl">
                      {currentCourse.icon || "💻"}
                    </span> 
                    <h2 className="text-2xl font-bold">
                      {currentCourse.title}
                    </h2>
                    <span className="bg-purple-500/10 text-purple-300 text-xs px-3 py-1 rounded-full font-bold border border-purple-500/20">
                      {currentCourseExercises.length} Ateliers créés
                    </span>
                  </>
                ) : (
                  <h2 className="text-xl font-bold text-slate-400">
                    En attente de sélections...
                  </h2>
                )}
              </div>

              {/* Le bouton Ajouter est débloqué tant qu'au moins 1 cours existe globalement */}
              <button
                onClick={handleOpenAddModal}
                disabled={allCourses.length === 0}
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-800 disabled:text-slate-600 disabled:cursor-not-allowed text-white font-semibold py-2.5 px-5 rounded-xl text-sm shadow-lg transition-all active:scale-95"
              >
                <Plus className="w-4 h-4" /> Ajouter un exercice
              </button>
            </div>

            {/* Grille d'exercices filtrés pour le cours actif */}
            {currentCourse ? (
              currentCourseExercises.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentCourseExercises.map((ex) => (
                    <ExerciseCard
                      key={ex.id}
                      ex={ex}
                      onEdit={handleOpenEditModal}
                      onDelete={handleDeleteExercise}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-[#112240] rounded-2xl border border-slate-700 border-dashed">
                  <p className="text-slate-400 text-sm mb-3">
                    Aucun exercice créé pour ce cours.
                  </p>
                  <button
                    onClick={handleOpenAddModal}
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm"
                  >
                    <Plus className="w-4 h-4" /> Créer le premier exercice de ce
                    cours
                  </button>
                </div>
              )
            ) : null}
          </div>
        )}

        {/* VUE SOUMISSIONS ÉLÈVES */}
        {viewMode === "submissions" && (
          <div className="bg-[#112240] border border-slate-700 rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" /> Demandes de
              validation en attente
            </h2>
            {isLoadingSubmissions ? (
              <div className="flex items-center justify-center py-8 gap-2 text-sm text-slate-400">
                <Loader2 className="w-4 h-4 animate-spin text-purple-400" />{" "}
                Chargement des copies...
              </div>
            ) : pendingSubmissions.length === 0 ? (
              <p className="text-slate-400 text-sm text-center py-8">
                Aucun exercice en attente de correction. 👍
              </p>
            ) : (
              <div className="space-y-3">
                {pendingSubmissions.map((sub) => (
                  <div
                    key={sub.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#0a192f]/50 border border-slate-800 p-4 rounded-xl gap-4"
                  >
                    <div>
                      <p className="text-sm font-bold mb-0.5">
                        {sub.student_username}
                      </p>
                      <p className="text-xs text-slate-400">
                        Cours :{" "}
                        <span className="text-purple-300">
                          {sub.exercise_title}
                        </span>{" "}
                        (Ex {sub.exercise_num})
                      </p>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                      <span className="flex items-center gap-1.5 text-xs bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full border border-amber-500/20">
                        <Clock className="w-3.5 h-3.5 animate-spin" /> En
                        attente
                      </span>
                      <button
                        onClick={() =>
                          handleValidateStudent(sub.student_id, sub.exercise_id)
                        }
                        className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 px-4 rounded-lg transition-all"
                      >
                        <CheckCircle className="w-3.5 h-3.5" /> Valider
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Fenêtre Modale d'ajout/édition */}
        <ExerciseModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleFormSubmit}
          formData={formData}
          setFormData={setFormData}
          isEditing={!!editingExercise}
          allCourses={allCourses} // Reçoit les vrais cours pour la liste déroulante
        />
      </div>
    </div>
  );
}
