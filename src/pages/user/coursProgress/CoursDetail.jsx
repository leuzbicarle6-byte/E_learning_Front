import React, { useState, useEffect, useRef } from "react";
import {
  useGetCourseByIdQuery,
  useGetCoursesQuery,
  useCompleteCourseMutation,
} from "../../../backend/features/courses/coursesApi";
import { Loader2, Timer, Lock, HelpCircle, CheckCircle2 } from "lucide-react";
import Quiz from "../../../components/quiz/Quiz";

import CourseHeader from "../../../components/courses/CourseHeader";
import CourseSidebar from "../../../components/courses/CourseSidebar";
import TabMere from "../../../components/courses/TabMere";
import WordDetail from "../../../components/courses/word/WordDetail";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../backend/features/auth/authSlice";
import { toast } from "sonner";
import ExcelDetail from "../../../components/courses/excel/ExcelDetail";
import PowerPointDetail from "../../../components/courses/pp/PowerPointDetail";
import SystemDetail from "../../../components/courses/system/SystemDetail";
import { useParams } from "react-router-dom";

export default function CoursDetail() {
  const { id } = useParams();
  const user = useSelector(selectCurrentUser);

  // Récupération du cours unique
  const {
    data: course,
    isLoading: isCourseLoading,
    isError: isCourseError,
    refetch,
  } = useGetCourseByIdQuery(id);

  // Récupération de la liste globale
  const { data: globalCourses, isLoading: isListLoading } =
    useGetCoursesQuery();

  const [updateProgress, { isLoading: isSaving }] = useCompleteCourseMutation();

  const [localProgress, setLocalProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isQuizUnlocked, setIsQuizUnlocked] = useState(false);

  const currentCourseIdRef = useRef(null);
  const realCourse = Array.isArray(course) ? course[0] : course;

  const coursesArray = Array.isArray(globalCourses)
    ? globalCourses
    : globalCourses?.results || [];

  const currentIndex = coursesArray.findIndex(
    (c) => Number(c.id) === Number(id),
  );
  const isLastCourse =
    currentIndex !== -1 && currentIndex === coursesArray.length - 1;

  // 1. Synchronisation données serveur
  useEffect(() => {
    if (realCourse) {
      setLocalProgress(realCourse.user_progress || 0);

      if (currentCourseIdRef.current !== id) {
        const initialTime = realCourse.time_remaining ?? 120;
        setTimeLeft(initialTime);
        setIsQuizUnlocked(initialTime === 0 || realCourse.is_quiz_unlocked);
        currentCourseIdRef.current = id;
      }
    }
  }, [realCourse, id]);

  // 2. Compte à rebours
  useEffect(() => {
    if (timeLeft <= 0 || isQuizUnlocked) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsQuizUnlocked(true);
          refetch();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, isQuizUnlocked, refetch]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h > 0 ? `${h}h ` : ""}${m.toString().padStart(2, "0")}m ${s.toString().padStart(2, "0")}s`;
  };

  const handleQuizPassed = async () => {
    setLocalProgress(100);
    toast.success("Bravo vous avez terminé ce module !");
    try {
      await updateProgress({ id: id, progress_percentage: 100 }).unwrap();
    } catch (err) {
      console.error("Erreur lors de la validation du cours :", err);
    }
  };

  const renderCourseContent = () => {
    if (!realCourse) return null;
    const courseSlug = realCourse.slug;

    switch (courseSlug) {
      case "quest-ce-quun-ordinateur":
        return <TabMere />;
      case "microsoft-word":
        return <WordDetail />;
      case "microsoft-excel":
        return <ExcelDetail />;
      case "microsoft-powerpoint":
        return <PowerPointDetail />;
      case "maitriser-son-bureau-et-ses-fichiers":
        return <SystemDetail />;
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
    <div className="max-w-7xl mx-auto p-4 md:p-8 text-white space-y-6 animate-in fade-in duration-200">
      {/* 1. EN-TÊTE PRINCIPALE */}
      <CourseHeader
        user={user}
        title={realCourse.title}
        category={realCourse.category}
      />

      {/* 2. BARRE D'ACTION HAUTE (GRID / FLEX : SIDEBAR + QUIZ) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* BLOC GAUCHE : Progression & Navigation de la formation */}
        <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-center">
          <CourseSidebar
            localProgress={localProgress}
            isSaving={isSaving}
            isLastCourse={isLastCourse}
          />
        </div>

        {/* BLOC DROITE : Quiz / Compte à rebours */}
        <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-center">
          {isQuizUnlocked ? (
            <div className="flex flex-col gap-3">
              {/* 1. Statut du Module */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  {localProgress === 100 ? (
                    <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30 shrink-0">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                  )}
                  <div>
                    <span className="text-xs uppercase tracking-wider text-white/50 block font-medium">
                      Statut
                    </span>
                    <h4 className="text-sm font-semibold text-white">
                      {localProgress === 100 ? "Module Validé" : "En cours"}
                    </h4>
                  </div>
                </div>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-md ${localProgress === 100 ? "bg-emerald-500/20 text-emerald-300" : "bg-indigo-500/20 text-indigo-300"}`}
                >
                  {localProgress}%
                </span>
              </div>

              {/* 2. Action / Quiz */}
              <div className="flex flex-col gap-4  justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                <div>
                  <span className="text-xs uppercase tracking-wider text-white/50 block font-medium">
                    Évaluation
                  </span>
                  <h4 className="text-sm font-semibold text-white">
                    Quiz de validation
                  </h4>
                </div>
                <Quiz
                  id={id}
                  onQuizPassed={handleQuizPassed}
                  isCourseCompleted={localProgress === 100}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {/* 1. Statut Verrouillé */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-9 h-9 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20 shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-white/50 block font-medium">
                    Évaluation
                  </span>
                  <h4 className="text-sm font-semibold text-white">
                    Quiz verrouillé
                  </h4>
                </div>
              </div>

              {/* 2. Compte à rebours */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300">
                <span className="text-xs font-medium">Déverrouillage dans</span>
                <div className="flex items-center gap-2 font-mono text-sm font-bold">
                  <Timer className="w-4 h-4 animate-pulse" />
                  <span>{formatTime(timeLeft)}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. CONTENU DU COURS (PLEINE LARGEUR EN DESSOUS) */}
      <div className="w-full min-w-0 pt-2">{renderCourseContent()}</div>
    </div>
  );
}
