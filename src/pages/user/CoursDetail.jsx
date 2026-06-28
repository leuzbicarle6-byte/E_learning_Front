import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  useGetCourseByIdQuery, // 🌟 Changé ici
  useCompleteCourseMutation,
} from "../../backend/features/courses/coursesApi";
import { Loader2, ArrowLeft, CheckCircle } from "lucide-react";
import ModuleOrdinateur from "../../components/user/modules/ModuleOrdinateur";
import Quiz from "../../components/quiz/Quiz";
// import Quiz from "../../components/quiz/Quiz";

export default function CoursDetail() {
  const { id } = useParams(); // 🌟 Récupère l'id de l'URL au lieu du slug
  const { data: course, isLoading, isError } = useGetCourseByIdQuery(id); // 🌟 Utilise le hook par ID

  console.log("");

  const [updateProgress, { isLoading: isSaving }] = useCompleteCourseMutation();
  const [localProgress, setLocalProgress] = useState(0);
  const realCourse = Array.isArray(course) ? course[0] : course;

  useEffect(() => {
    if (realCourse) {
      setLocalProgress(realCourse.user_progress || 0);
    }
  }, [realCourse]);

  const handleQuizPassed = () => {
    setLocalProgress(100);
  };

  // 🌟 CONFIGURATION DU ROUTAGE DES COMPOSANTS
  // On se base sur le titre ou une autre propriété stable reçue du backend
  // pour éviter de lier l'affichage à un ID numérique instable.
  const renderCourseContent = () => {
    if (!realCourse) return null;

    // Génère la clé en remplaçant tout ce qui n'est pas alphanumérique par un tiret
    const courseTitleKey = realCourse.title
      ?.toLowerCase()
      .replace(/[^a-z0-9]/g, "-") // Remplace l'apostrophe et les espaces par des tirets
      .replace(/-+/g, "-") // Nettoie les doubles tirets cachés comme "--"
      .replace(/^-+|-+$/g, ""); // Enlève les tirets au début et à la fin

    console.log("Clé générée pour le switch :", courseTitleKey); // Devrait afficher "qu-est-une-machine"

    switch (courseTitleKey) {
      // 🌟 Mis à jour avec la clé exacte générée par le titre de ta base de données !
      case "qu-est-une-machine":
        return <ModuleOrdinateur />;

      // Exemple pour tes futurs modules :
      // Si le titre est "Initiation à Excel", la clé sera "initiation-a-excel"
      // case "initiation-a-excel":
      //   return <ModuleExcel />;

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

  const handleCompleteCourse = async () => {
    try {
      // 🌟 On envoie l'id au lieu du slug
      await updateProgress({ id: id, progress_percentage: 100 }).unwrap();
      setLocalProgress(100);
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoading)
    return (
      <div className="text-center text-white/50 p-10">
        <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2 text-indigo-500" />
        Chargement...
      </div>
    );
  if (isError || !realCourse)
    return (
      <div className="text-center text-rose-400 p-10">Cours introuvable.</div>
    );

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 text-white space-y-6 animate-in fade-in duration-200">
      <Link
        to="/user/courses"
        className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Retour au catalogue
      </Link>

      {/* Titre dynamique reçu de Django */}
      <div className="pb-4 border-b border-white/5">
        <h1 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-white mb-1">
          {realCourse.title}
        </h1>
        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
          {realCourse.category || "Module Technique"}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* COLONNE GAUCHE (COMPOSANT INJECTÉ DYNAMIQUEMENT) */}
        <div className="lg:col-span-2">{renderCourseContent()}</div>

        {/* COLONNE DROITE (PROGRESSION ET VALIDATION) */}
        <div className="space-y-4">
          <div className="p-5 rounded-2xl border border-white/5 bg-white/5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/40">
              Ton avancement
            </h3>

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
              Consultez l'ensemble des onglets et schémas explicatifs. Dès que
              vous maîtrisez ces notions, validez le cours.
            </p>

            <button
              onClick={handleCompleteCourse}
              disabled={isSaving || localProgress === 100}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${
                localProgress === 100
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-500 active:scale-98 cursor-pointer shadow-lg"
              }`}
            >
              <CheckCircle className="w-4 h-4" />
              {isSaving
                ? "Enregistrement..."
                : localProgress === 100
                  ? "Module Terminé ! 🎉"
                  : "Marquer comme terminé"}
            </button>
          </div>
        </div>
      </div>

      {/* QUIZ SECTION */}
      <div className="mt-8">
        <Quiz id={id} onQuizPassed={handleQuizPassed} />
      </div>
    </div>
  );
}
