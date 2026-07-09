import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../backend/features/auth/authSlice";
import {
  useGetCoursesQuery,
  useGetMeStatsQuery,
} from "../../backend/features/courses/coursesApi";
import {
  Play,
  Laptop,
  HelpCircle,
  ShieldCheck,
  Loader2,
  AlertCircle,
  CheckCircle,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import ModalImportant from "./ModalImportant";

export default function Dashboard() {
  const user = useSelector(selectCurrentUser);
  const { data: meStats } = useGetMeStatsQuery();
  const { data: courseData, isLoading, isError } = useGetCoursesQuery();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Déclenchement automatique de la modal si l'étudiant a fini un module
  useEffect(() => {
    if (meStats && meStats.completed_courses > 0) {
      setIsModalOpen(false);
    }
  }, [meStats]);

  // Extraction du tableau depuis l'objet de pagination DRF
  const coursesList = courseData?.results || [];

  // Sélection intelligente : on prend le cours en cours, sinon le premier
  const activeCourse =
    coursesList.find((course) => course.user_progress < 100) || coursesList[0];

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-white/50">
        <Loader2 className="w-6 h-6 animate-spin text-indigo-500 mb-2" />
        <p className="text-xs">Préparation de votre espace de travail...</p>
      </div>
    );
  }

  if (isError || !activeCourse) {
    return (
      <div className="max-w-4xl mx-auto p-6 rounded-2xl border border-white/5 bg-white/5 text-center text-white/40 space-y-2">
        <AlertCircle className="w-5 h-5 mx-auto text-indigo-500/60" />
        <h3 className="text-sm font-semibold text-white">
          Espace de cours vide
        </h3>
        <p className="text-xs max-w-xs mx-auto">
          Aucun cours n'est actuellement disponible sur votre compte.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-300">
      {/* 1. MESSAGE D'ACCUEIL CHALEUREUX */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
            Bienvenue sur learnTech, {user?.first_name || "Apprenti"} 🚀
          </h1>
          <p className="text-white/50 text-sm leading-relaxed">
            Chaque grand expert a commencé exactement là où tu es aujourd'hui.
            Installe-toi confortablement, on avance ensemble.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="sm:self-start shrink-0 px-4 py-2 bg-linear-to-r from-amber-500 to-orange-600 text-white font-medium text-xs rounded-lg shadow-md hover:opacity-90 transition-opacity cursor-pointer animate-pulse"
        >
          📢 Note Importante
        </button>
      </div>

      {/* 2. OBJECTIF DYNAMIQUE */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold text-white/40 uppercase tracking-wider">
            {activeCourse.user_progress === 100
              ? "Dernier module validé"
              : "Ton objectif actuel"}
          </h2>
          {activeCourse.user_progress === 100 ? (
            <span className="text-[11px] font-medium text-emerald-400 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" /> Tout est à jour !
            </span>
          ) : (
            <span className="text-[11px] font-medium text-amber-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> À continuer
            </span>
          )}
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/5 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-white/10 transition-colors duration-300">
          <div className="flex gap-5 items-center">
            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 hidden sm:flex items-center justify-center bg-indigo-600/10 border border-indigo-500/20 text-indigo-400">
              <Laptop className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/10">
                {activeCourse.category}
              </span>
              <h3 className="font-display font-bold text-white text-lg md:text-xl pt-1">
                {activeCourse.title}
              </h3>
              <p className="text-xs text-white/40">
                Progression :{" "}
                <span
                  className={
                    activeCourse.user_progress === 100
                      ? "text-emerald-400 font-semibold"
                      : "text-indigo-400 font-semibold"
                  }
                >
                  {activeCourse.user_progress}%
                </span>
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto border-t border-white/5 md:border-none pt-4 md:pt-0 flex justify-end">
            <Link
              to={`/user/courses/${activeCourse.id}`}
              className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20 active:scale-98 cursor-pointer group"
            >
              <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
              {activeCourse.user_progress === 100
                ? "Revoir le module"
                : activeCourse.user_progress > 0
                  ? "Continuer l'étude"
                  : "Démarrer le cours"}
            </Link>
          </div>
        </div>
      </div>

      {/* 3. LES BLOCS DE RÉASSURANCE & STATISTIQUES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl border border-white/5 bg-[#0f223f]/20 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
            <Laptop className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-white">À ton rythme</h4>
            <p className="text-xs text-white/40">
              Pas de direct, pas de stress. Tu peux revoir le contenu autant de
              fois que nécessaire.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-white/5 bg-[#0f223f]/20 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-white">
              Bloqué ? Des questions ?
            </h4>
            <p className="text-xs text-white/40">
              Consulte l'onglet communauté ou contacte ton encadrement pour
              débloquer tes exercices rapidement.
            </p>
          </div>
        </div>

        {/* STATISTIQUE 1 : COURS TERMINÉS */}
        <div className="p-5 rounded-2xl border border-white/5 bg-[#0f223f]/20 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-white">Cours Terminés</h4>
            <p className="text-xl font-bold text-emerald-400">
              {meStats?.completed_courses ?? 0}
            </p>
          </div>
        </div>

        {/* STATISTIQUE 2 : AVANCEMENT GLOBAL */}
        <div className="p-5 rounded-2xl border border-white/5 bg-[#0f223f]/20 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-white">
              Progression Globale
            </h4>
            <p className="text-xs text-white/40">
              <span className="text-sm font-bold text-white">
                {meStats?.completion_percentage ?? 0}%
              </span>{" "}
              de l'application ({meStats?.completed_courses ?? 0}/
              {meStats?.total_courses ?? 0} modules)
            </p>
          </div>
        </div>
      </div>

      <ModalImportant
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
