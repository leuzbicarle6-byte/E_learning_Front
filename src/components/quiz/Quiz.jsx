import React, { useState } from "react";
import {
  useGetQuizQuestionsQuery,
  useSubmitQuizAnswersMutation,
} from "../../backend/features/courses/coursesApi";
import { Loader2, CheckCircle2, XCircle, AlertCircle } from "lucide-react";

// 🌟 On a ajouté la prop "isCourseCompleted"
export default function Quiz({ id, onQuizPassed, isCourseCompleted }) {
  const { data: questions, isLoading, isError } = useGetQuizQuestionsQuery(id);
  const [submitAnswers, { isLoading: isSubmitting }] =
    useSubmitQuizAnswersMutation();

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizResult, setQuizResult] = useState(null);

  const handleSelectChoice = (questionId, choiceId) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: choiceId,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await submitAnswers({
        id: id,
        answers: selectedAnswers,
      }).unwrap();

      setQuizResult(result);

      // Si le backend renvoie "passed": true, on informe le composant parent
      if (result.passed && onQuizPassed) {
        onQuizPassed();
      }
    } catch (err) {
      console.error("Erreur lors de la soumission du quiz:", err);
    }
  };

  if (isLoading) {
    return (
      <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/5">
        <Loader2 className="w-5 h-5 animate-spin mx-auto text-indigo-500 mb-2" />
        <p className="text-xs text-white/50">Chargement du quiz...</p>
      </div>
    );
  }

  if (isError || !questions || questions.length === 0) {
    return (
      <div className="p-5 text-center bg-white/5 rounded-2xl border border-white/5 text-xs text-white/40">
        <AlertCircle className="w-5 h-5 mx-auto mb-2 text-white/20" />
        Aucun quiz disponible pour ce module pour le moment.
      </div>
    );
  }

  // 🌟 CONDITION CRITIQUE : Si le quiz est réussi (au clic) OU déjà validé (au refresh)
  // On n'affiche PLUS DU TOUT les questions ni le titre de la section, juste le succès.
  if (quizResult?.passed || isCourseCompleted) {
    // On récupère le score soit du state local si on vient de le passer, soit 100 par défaut
    const finalScore = quizResult ? quizResult.score : 100;
    const correctAns = quizResult
      ? quizResult.correct_answers
      : questions.length;

    return (
      <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center sm:text-left">
        <div className="p-5 rounded-xl border bg-emerald-500/10 border-emerald-500/20 text-emerald-400 flex flex-col sm:flex-row items-center gap-4">
          <CheckCircle2 className="w-8 h-8 shrink-0" />
          <div>
            <h4 className="font-bold text-sm">
              Félicitations ! Quiz validé 🎉
            </h4>
            <p className="text-xs text-white/70 mt-0.5">
              Tu as obtenu un score de{" "}
              <span className="font-bold">{finalScore}%</span> ({correctAns} /{" "}
              {questions.length} bonnes réponses). Ce cours est validé de
              manière permanente.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-6">
      <div className="border-b border-white/5 pb-3">
        <h2 className="text-lg font-bold text-white tracking-tight">
          Quiz de validation
        </h2>
        <p className="text-xs text-white/40">
          Obtiens un score minimum de 70% pour valider définitivement ce cours.
        </p>
      </div>

      {/* AFFICHAGE DU RÉSULTAT APRÈS SOUMISSION */}
      {quizResult && (
        <div
          className={`p-4 rounded-xl border flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left ${
            quizResult.passed
              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
              : "bg-rose-500/10 border-rose-500/20 text-rose-400"
          }`}
        >
          {quizResult.passed ? (
            <CheckCircle2 className="w-8 h-8 shrink-0 animate-bounce" />
          ) : (
            <XCircle className="w-8 h-8 shrink-0" />
          )}
          <div className="flex-1">
            <h4 className="font-bold text-sm">
              {quizResult.passed
                ? "Félicitations ! Quiz validé 🎉"
                : "Score insuffisant 😕"}
            </h4>
            <p className="text-xs text-white/70 mt-0.5">
              Tu as obtenu un score de{" "}
              <span className="font-bold">{quizResult.score}%</span> (
              {quizResult.correct_answers} / {quizResult.total_questions} bonnes
              réponses).
            </p>
          </div>

          {/* 🌟 LE BADGE XP STYLE JEU VIDÉO (S'affiche uniquement s'il gagne des XP) */}
          {quizResult.passed && quizResult.xp_gagnes > 0 && (
            <div className="bg-linear-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs px-3 py-2 rounded-lg shadow-lg shadow-orange-500/20 whitespace-nowrap animate-pulse">
              + {quizResult.xp_gagnes} XP ⚡
            </div>
          )}

          {!quizResult.passed && (
            <button
              onClick={() => setQuizResult(null)}
              className="sm:ml-auto text-xs font-semibold bg-white/10 text-white px-3 py-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
            >
              Réessayer
            </button>   
          )}
        </div>
      )}

      {/* Formulaire des questions (Masqué automatiquement si la condition "passed" ou "isCourseCompleted" est vraie) */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {questions.map((question, index) => (
          <div key={question.id} className="space-y-3">
            <h3 className="text-sm font-medium text-white/90">
              <span className="text-indigo-400 font-bold mr-1">
                Q{index + 1}.
              </span>
              {question.text}
            </h3>

            <div className="grid grid-cols-1 gap-2">
              {question.choices?.map((choice) => {
                const isSelected = selectedAnswers[question.id] === choice.id;
                return (
                  <button
                    key={choice.id}
                    type="button"
                    onClick={() => handleSelectChoice(question.id, choice.id)}
                    className={`w-full text-left p-3 rounded-xl text-xs transition-all border cursor-pointer ${
                      isSelected
                        ? "bg-indigo-600/20 border-indigo-500 text-white font-medium"
                        : "bg-white/5 border-white/5 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    {choice.text}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <button
          type="submit"
          disabled={
            isSubmitting ||
            Object.keys(selectedAnswers).length < questions.length
          }
          className={`w-full py-3 rounded-xl font-semibold text-sm transition-all text-white shadow-lg ${
            Object.keys(selectedAnswers).length < questions.length
              ? "bg-white/5 text-white/30 border border-white/5 cursor-not-allowed shadow-none"
              : "bg-indigo-600 hover:bg-indigo-500 active:scale-98 cursor-pointer shadow-indigo-600/10"
          }`}
        >
          {isSubmitting ? "Correction en cours..." : "Soumettre mes réponses"}
        </button>
      </form>
    </div>
  );
}
