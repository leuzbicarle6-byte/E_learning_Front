import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useGetCourseByIdQuery,
  useCompleteCourseMutation,
} from "../../backend/features/courses/coursesApi";
import { Loader2, Timer, Lock } from "lucide-react";
import Quiz from "../../components/quiz/Quiz";

import CourseHeader from "../../components/courses/CourseHeader";
import CourseSidebar from "../../components/courses/CourseSidebar";
import TabMere from "../../components/courses/TabMere";

export default function CoursDetail() {
  const { id } = useParams();

  const {
    data: course,
    isLoading,
    isError,
    refetch,
  } = useGetCourseByIdQuery(id);
  const [updateProgress, { isLoading: isSaving }] = useCompleteCourseMutation();

  const [localProgress, setLocalProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isQuizUnlocked, setIsQuizUnlocked] = useState(false);

  const realCourse = Array.isArray(course) ? course[0] : course;

  // 1. Initialisation et déclenchement du chrono en BDD
  useEffect(() => {
    if (realCourse) {
      setLocalProgress(realCourse.user_progress || 0);
      setIsQuizUnlocked(realCourse.is_quiz_unlocked || false);
      setTimeLeft(realCourse.time_remaining || 0);

      // SÉCURITÉ CRUCIALE : Si user_progress est à 0 et qu'il reste 3600s,
      // cela signifie que l'utilisateur ouvre le cours pour la toute première fois.
      // On envoie une requête rapide pour créer la ligne en BDD et lancer le "started_at" officiel.
      if (
        realCourse.user_progress === 0 &&
        realCourse.time_remaining === 60 &&
        !realCourse.is_quiz_unlocked
      ) {
        updateProgress({ id: id, progress_percentage: 1 })
          .unwrap()
          .then(() => refetch()); // On rafraîchit pour récupérer le vrai "time_remaining" du serveur
      }
    }
  }, [realCourse, id, updateProgress, refetch]);

  // 2. Compte à rebours visuel (Front-end) pour animer le chrono seconde par seconde
  useEffect(() => {
    if (timeLeft <= 0 || isQuizUnlocked) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsQuizUnlocked(true);
          refetch(); // On valide définitivement auprès du serveur que le temps est écoulé
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, isQuizUnlocked, refetch]);

  // Formater les secondes (ex: 3600 -> 01h 00m 00s ou 59m 30s)
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

    const courseTitleKey = realCourse.title
      ?.toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");

    switch (courseTitleKey) {
      case "qu-est-une-machine":
        return <TabMere />;
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

  if (isLoading) {
    return (
      <div className="text-center text-white/50 p-10">
        <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2 text-indigo-500" />
        Chargement...
      </div>
    );
  }

  if (isError || !realCourse) {
    return (
      <div className="text-center text-rose-400 p-10">Cours introuvable.</div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 text-white space-y-6 animate-in fade-in duration-200">
      <CourseHeader title={realCourse.title} category={realCourse.category} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">{renderCourseContent()}</div>
        <div className="space-y-4">
          <CourseSidebar localProgress={localProgress} isSaving={isSaving} />
        </div>
      </div>

      {/* SECTION QUIZ */}
      <div className="mt-8">
        {isQuizUnlocked ? (
          <Quiz
            id={id}
            onQuizPassed={handleQuizPassed}
            isCourseCompleted={localProgress === 100}
          />
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
                Prends le temps de bien lire le cours. Le quiz sera disponible
                dès la fin du chrono.
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-amber-300 font-mono text-sm">
              <Timer className="w-4 h-4 animate-pulse" />
              Temps restant : {formatTime(timeLeft)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
