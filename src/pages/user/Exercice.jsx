import React, { useState, useEffect } from "react";
import {
  useGetExercicesQuery,
  useUpdateExerciseStatusMutation,
} from "../../backend/features/exercice/exerciceApi";
import { useGetCoursesTabsQuery } from "../../backend/features/courses/coursesApi";
import {
  Play,
  Send,
  Clock,
  CheckCircle,
  BookOpen,
  Lock,
  Loader2,
  AlertCircle,
} from "lucide-react";

export default function Exercice() {
  // ==========================================
  // 1. APPELS API REDUX
  // ==========================================
  const {
    data: exercicesData,
    isLoading: isLoadingEx,
    isError: isErrorEx,
  } = useGetExercicesQuery();
  const { data: coursesData, isLoading: isLoadingCourses } =
    useGetCoursesTabsQuery();
  const [updateStatus, { isLoading: isUpdating }] =
    useUpdateExerciseStatusMutation();

  // Sécurisation du format de données
  const allExercises = exercicesData?.results || exercicesData || [];
  const allCourses = coursesData?.results || coursesData || [];

  // ==========================================
  // 2. ÉTATS LOCAUX
  // ==========================================
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    if (allCourses.length > 0 && !activeTab) {
      setActiveTab(allCourses[0].id);
    }
  }, [allCourses, activeTab]);

  const currentCourse = allCourses.find((c) => c.id === activeTab);
  const currentCourseExercises = allExercises.filter((ex) => {
    const courseId = typeof ex.course === "object" ? ex.course?.id : ex.course;
    return courseId === activeTab;
  });

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

  if (isLoadingEx || isLoadingCourses) {
    return (
      <div className="min-h-screen bg-[#0a192f] flex flex-col items-center justify-center text-white">
        <Loader2 className="w-12 h-12 text-purple-500 animate-spin mb-4" />
        <p className="text-slate-400 text-sm animate-pulse">
          Chargement de vos espaces d'ateliers...
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
            Erreur de chargement
          </p>
          <p className="text-slate-400 text-xs">
            Impossible de récupérer les ateliers pratiques. Veuillez réessayer
            ultérieurement.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a192f] p-6 md:p-12 text-white font-sans">
      <div className="max-w-6xl mx-auto">
        {/* En-tête avec la consigne WhatsApp intégrée */}
        <header className="mb-8 border-b border-slate-700 pb-6">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl font-bold tracking-tight">
              Ateliers Pratiques
            </h1>
          </div>
          <div className="bg-purple-950/20 border border-purple-500/20 p-4 rounded-xl mt-3">
            <p className="text-purple-300 text-sm font-medium">
              💡 <strong>Consigne importante :</strong> Une fois que vous avez
              terminé votre atelier sur l'écran, veuillez{" "}
              <strong>
                prendre une capture d'écran et l'envoyer dans le groupe WhatsApp
              </strong>
              . La correction et la validation seront effectuées par la suite.
            </p>
          </div>
        </header>

        {/* LISTE DES ONGLETS */}
        <nav className="flex flex-wrap gap-2 mb-8">
          {allCourses.length === 0 ? (
            <p className="text-slate-400 text-sm italic">
              Aucun module disponible pour le moment.
            </p>
          ) : (
            allCourses.map((course) => (
              <button
                key={course.id}
                onClick={() => setActiveTab(course.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold border transition-all ${
                  activeTab === course.id
                    ? "bg-purple-600 text-white border-transparent shadow-lg shadow-purple-600/30"
                    : "bg-[#112240] text-slate-300 border-slate-700 hover:bg-[#1d3557]"
                }`}
              >
                <span>{course.title}</span>
              </button>
            ))
          )}
        </nav>

        {/* CONTENU DU COURS SÉLECTIONNÉ */}
        {currentCourse && (
          <div className="animate-in fade-in duration-200">
            <div className="mb-6 flex items-center gap-3">
              <h2 className="text-2xl font-bold text-slate-200">
                {currentCourse.title}
              </h2>
              <span className="bg-purple-500/10 text-purple-300 text-xs px-3 py-1 rounded-full font-bold border border-purple-500/20">
                {currentCourseExercises.length} Ateliers disponibles
              </span>
            </div>

            {/* Grille des exercices */}
            {currentCourseExercises.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentCourseExercises.map((ex) => {
                  const currentStatus = ex.status || "not_started";
                  const isExoUnlocked = ex.is_unlocked;

                  return (
                    <div
                      key={ex.id}
                      className={`bg-[#112240] border rounded-2xl p-6 shadow-xl flex flex-col justify-between transition-all duration-300 relative ${
                        !isExoUnlocked
                          ? "border-slate-800 opacity-40 cursor-not-allowed select-none"
                          : currentStatus === "validated"
                            ? "border-emerald-500/40 bg-emerald-950/10"
                            : "border-slate-700 hover:border-slate-600"
                      }`}
                    >
                      {!isExoUnlocked && (
                        <div className="absolute top-4 right-4 bg-slate-900/80 border border-slate-700 p-2 rounded-xl text-slate-400">
                          <Lock className="w-4 h-4" />
                        </div>
                      )}

                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-bold uppercase tracking-wider text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-lg border border-purple-500/20">
                            Exercice #{ex.exercise_id}
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
                            {ex.difficulty || "Débutant"}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2">
                          {ex.title}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed bg-[#0a192f]/60 p-4 rounded-xl border border-slate-800 font-sans min-h-[80px] whitespace-pre-line">
                          {isExoUnlocked
                            ? ex.desc
                            : "🔒 Cet atelier pratique nécessite la validation et la complétion de son cours théorique associé."}
                        </p>
                      </div>

                      {/* Barre d'action inférieure */}
                      <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between min-h-[44px]">
                        {!isExoUnlocked ? (
                          <div className="w-full flex items-center justify-center gap-2 bg-slate-800/40 border border-slate-800 text-slate-500 py-2.5 rounded-xl text-xs font-medium">
                            <Lock className="w-3.5 h-3.5" />
                            <span>Cours théorique non complété</span>
                          </div>
                        ) : (
                          <>
                            {currentStatus === "not_started" && (
                              <button
                                onClick={() =>
                                  handleUpdateStatus(ex.id, "in_progress")
                                }
                                disabled={isUpdating}
                                className="w-full flex items-center justify-center gap-2 bg-[#1d3557] hover:bg-[#2a4d7c] text-white text-sm font-semibold py-2.5 px-4 rounded-xl border border-blue-500/20 transition-all active:scale-[0.98]"
                              >
                                <Play className="w-4 h-4 fill-white text-white" />
                                Lancer le cas pratique
                              </button>
                            )}

                            {currentStatus === "in_progress" && (
                              <button
                                onClick={() =>
                                  handleUpdateStatus(ex.id, "pending")
                                }
                                disabled={isUpdating}
                                className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2.5 px-4 rounded-xl shadow-lg shadow-purple-600/20 transition-all active:scale-[0.98]"
                              >
                                <Send className="w-4 h-4" /> Envoyer pour
                                correction
                              </button>
                            )}

                            {currentStatus === "pending" && (
                              <div className="w-full flex items-center justify-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 py-2.5 px-4 rounded-xl text-xs font-medium">
                                <Clock className="w-4 h-4 animate-spin text-amber-400" />
                                <span>
                                  Capture envoyée ? En attente de validation
                                  admin...
                                </span>
                              </div>
                            )}

                            {currentStatus === "validated" && (
                              <div className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 px-4 rounded-xl text-xs font-bold shadow-lg shadow-emerald-600/20">
                                <CheckCircle className="w-4 h-4" /> Exercice
                                Validé 🎉
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 bg-[#112240] rounded-2xl border border-slate-700 border-dashed">
                <p className="text-slate-400 text-sm">
                  Aucun atelier pratique n'est disponible pour ce cours
                  actuellement.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
