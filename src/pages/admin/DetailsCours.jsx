import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useGetCourseByIdQuery,
  useGetCoursesQuery, // <-- Ajout de l'import pour récupérer la liste globale
  useCompleteCourseMutation,
} from "../../backend/features/courses/coursesApi";
import { Loader2, Timer, Lock, HelpCircle, CheckCircle2 } from "lucide-react";
import Quiz from "../../components/quiz/Quiz";

import CourseHeader from "../../components/courses/CourseHeader";
import CourseSidebar from "../../components/courses/CourseSidebar";
import TabMere from "../../components/courses/TabMere";
import WordDetail from "../../components/courses/word/WordDetail";
import SupportBlock from "../../components/SupportBlock";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../backend/features/auth/authSlice";

export default function DetailsCours() {
  const { id } = useParams();
  const user = useSelector(selectCurrentUser);

  // Récupération du cours unique
  const {
    data: course,
    isLoading: isCourseLoading,
    isError: isCourseError,
    refetch,
  } = useGetCourseByIdQuery(id);

  // Récupération de la liste globale pour calculer si c'est le dernier cours
  const { data: globalCourses, isLoading: isListLoading } =
    useGetCoursesQuery();

  const [updateProgress, { isLoading: isSaving }] = useCompleteCourseMutation();

  const [localProgress, setLocalProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isQuizUnlocked, setIsQuizUnlocked] = useState(false);

  const realCourse = Array.isArray(course) ? course[0] : course;

  // --- CALCUL SÉCURISÉ DE ISLASTCOURSE ---
  const coursesArray = Array.isArray(globalCourses)
    ? globalCourses
    : globalCourses?.results || [];

  // On compare l'ID actuel (converti en Nombre) avec les ID de la liste globale
  const currentIndex = coursesArray.findIndex(
    (c) => Number(c.id) === Number(id),
  );
  const isLastCourse =
    currentIndex !== -1 && currentIndex === coursesArray.length - 1;
  // ----------------------------------------

  // 1. Initialisation et déclenchement du chrono en BDD
  useEffect(() => {
    if (realCourse) {
      setLocalProgress(realCourse.user_progress || 0);
      setIsQuizUnlocked(realCourse.is_quiz_unlocked || false);
      setTimeLeft(realCourse.time_remaining || 0);

      if (realCourse.user_progress === 0 && !realCourse.is_quiz_unlocked) {
        updateProgress({ id: id, progress_percentage: 0 })
          .unwrap()
          .then(() => refetch());
      }
    }
  }, [realCourse, id, updateProgress, refetch]);

  // 2. Compte à rebours visuel (Front-end)
  useEffect(() => {
    if (timeLeft <= 0 || isQuizUnlocked) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, isQuizUnlocked]);

  // 3. Surveillance de la fin du chrono pour débloquer le Quiz proprement
  useEffect(() => {
    if (timeLeft === 0 && !isQuizUnlocked && realCourse) {
      setIsQuizUnlocked(true);
      refetch();
    }
  }, [timeLeft, isQuizUnlocked, refetch, realCourse]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h > 0 ? `${h}h ` : ""}${m.toString().padStart(2, "0")}m ${s.toString().padStart(2, "0")}s`;
  };

  const handleQuizPassed = async () => {
    setLocalProgress(100);
    try {
      await updateProgress({ id: id, progress_percentage: 100 }).unwrap();
    } catch (err) {
      console.error("Erreur lors de la validation du cours :", err);
    }
  };

  const renderCourseContent = () => {
    if (!realCourse) return null;

    const courseTitleKey = realCourse.slug
      ?.toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");

    switch (courseTitleKey) {
      case "quest-ce-quune-machine":
        return <TabMere />;
      case "word":
        return <WordDetail />;
      default:
        return (
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <p className="text-sm text-white/75 leading-relaxed">
              {realCourse?.description ||
                "Contenu de secours en cours de rédaction..."}
            </p>
          </div>
        );
    }
  };

  // Gestion combinée du chargement
  if (isCourseLoading || isListLoading) {
    return (
      <div className="text-center text-white/50 p-10">
        <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2 text-indigo-500" />
        Chargement...
      </div>
    );
  }

  if (isCourseError || !realCourse) {
    return (
      <div className="text-center text-rose-400 p-10">Cours introuvable.</div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 text-white space-y-6 animate-in fade-in duration-200">
      <CourseHeader
        user={user}
        title={realCourse.title}
        category={realCourse.category}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">{renderCourseContent()}</div>
        <div className="space-y-4">
          <CourseSidebar
            localProgress={localProgress}
            isSaving={isSaving}
            isLastCourse={isLastCourse} // Envoie désormais la vraie valeur calculée
          />
        </div>
      </div>

      {/* SECTION BLOC DE VALIDATION FINALE (QUIZ) */}
      <div className="mt-8">
        {isQuizUnlocked ? (
          <div
            className={`p-6 rounded-2xl border transition-all ${
              localProgress === 100
                ? "bg-emerald-500/5 border-emerald-500/20"
                : "bg-indigo-500/5 border-indigo-500/20"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                {localProgress === 100 ? (
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20 shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                )}
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {localProgress === 100
                      ? "Félicitations, module validé !"
                      : "Prêt à tester tes connaissances ?"}
                  </h3>
                  <p className="text-xs text-white/60 mt-0.5">
                    {localProgress === 100
                      ? "Tu as brillamment réussi les étapes de ce cours."
                      : "Le chrono est terminé, tu peux maintenant ouvrir le questionnaire."}
                  </p>
                </div>
              </div>

              <div className="shrink-0">
                <Quiz
                  id={id}
                  onQuizPassed={handleQuizPassed}
                  isCourseCompleted={localProgress === 100}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="p-8 rounded-2xl border border-dashed border-white/10 bg-white/5 flex flex-col items-center text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">
                Le quiz est verrouillé
              </h3>
              <p className="text-sm text-white/60 mt-1 max-w-sm">
                Prends le temps de bien lire le cours et de pratiquer sur ton
                ordinateur. Le quiz sera disponible dès la fin du chrono.
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-amber-300 font-mono text-sm">
              <Timer className="w-4 h-4 animate-pulse" />
              Temps restant : {formatTime(timeLeft)}
            </div>
          </div>
        )}
      </div>

      {localProgress === 100 && realCourse?.slug === "word" && (
        <SupportBlock realCourse={realCourse} />
      )}
    </div>
  );
}
