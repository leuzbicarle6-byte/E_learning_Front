import React, { useState, useEffect, useRef } from "react";
import {
  useGetQuizQuestionsQuery,
  useSubmitQuizAnswersMutation,
} from "../../backend/features/courses/coursesApi";
import {
  Loader2,
  CheckCircle2,
  XCircle,
  AlertCircle,
  X,
  Award,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function Quiz({ id, onQuizPassed, isCourseCompleted }) {
  const { data: questions, isLoading, isError } = useGetQuizQuestionsQuery(id);
  const [submitAnswers, { isLoading: isSubmitting }] =
    useSubmitQuizAnswersMutation();

  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizResult, setQuizResult] = useState(null);

  // Chrono de 15 secondes par question
  const [timeLeft, setTimeLeft] = useState(15);

  // Références pour éviter les closures périmées dans les timers
  const currentQuestionIndexRef = useRef(currentQuestionIndex);
  const selectedAnswersRef = useRef(selectedAnswers);

  useEffect(() => {
    currentQuestionIndexRef.current = currentQuestionIndex;
  }, [currentQuestionIndex]);

  useEffect(() => {
    selectedAnswersRef.current = selectedAnswers;
  }, [selectedAnswers]);

  // 1. Décrémentation stricte du chrono toutes les secondes
  useEffect(() => {
    if (!isOpen || quizResult || !questions || questions.length === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, currentQuestionIndex, quizResult, questions]);

  // 2. Action automatique dès que le chrono touche 0
  useEffect(() => {
    if (timeLeft === 0 && isOpen && !quizResult) {
      handleNextOrSubmit();
    }
  }, [timeLeft]);

  // Fonction centrale pour avancer ou soumettre à la fin
  const handleNextOrSubmit = () => {
    const nextIndex = currentQuestionIndexRef.current + 1;

    if (questions && nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setTimeLeft(15); // Reset du chrono pour la nouvelle question
    } else {
      executeSubmission(selectedAnswersRef.current);
    }
  };

  const executeSubmission = async (answersToSend) => {
    if (isSubmitting) return;
    try {
      const result = await submitAnswers({
        id: id,
        answers: answersToSend,
      }).unwrap();

      setQuizResult(result);

      if (result.passed && onQuizPassed) {
        onQuizPassed();
      }
    } catch (err) {
      console.error("Erreur lors de la soumission du quiz:", err);
    }
  };

  const handleSelectChoice = (questionId, choiceId) => {
    if (quizResult) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: choiceId,
    }));
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setQuizResult(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setTimeLeft(15);
  };

  const handleRetry = () => {
    setQuizResult(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setTimeLeft(15);
  };

  if (isLoading) {
    return (
      <div className="text-center p-4 bg-white/5 rounded-xl border border-white/5">
        <Loader2 className="w-4 h-4 animate-spin mx-auto text-indigo-500 mb-1" />
        <p className="text-[11px] text-white/50">Chargement du quiz...</p>
      </div>
    );
  }

  if (isError || !questions || questions.length === 0) {
    return (
      <div className="p-4 text-center bg-white/5 rounded-xl border border-white/5 text-[11px] text-white/40">
        <AlertCircle className="w-4 h-4 mx-auto mb-1 text-white/20" />
        Aucun quiz disponible pour ce module.
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      {/* BOUTON D'OUVERTURE + STATUS DE VALIDATION */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        <button
          onClick={() => {
            setIsOpen(true);
            setTimeLeft(15);
          }}
          className={`w-full sm:w-auto px-5 py-2.5 font-semibold text-xs rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98 ${
            isCourseCompleted
              ? "bg-slate-800 hover:bg-slate-700 text-slate-300 border border-white/5 shadow-slate-950/20"
              : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/10"
          }`}
        >
          <Award className="w-4 h-4" />
          {isCourseCompleted
            ? "Rejouer le quiz entraînement"
            : "Passer le quiz chrono (15s/q)"}
        </button>

        {isCourseCompleted && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-[11px] font-bold tracking-wide shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5" />
            VALIDÉ
          </div>
        )}
      </div>

      {/* MODAL DU QUIZ */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-xl bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            {/* HEADER */}
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-slate-950/40">
              <div>
                <h2 className="text-sm font-bold text-white tracking-tight">
                  Quiz de validation
                </h2>
                {!quizResult && (
                  <p className="text-[11px] text-white/40">
                    Question {currentQuestionIndex + 1} sur {questions.length}
                  </p>
                )}
              </div>

              {/* CHRONO VISUEL */}
              {!quizResult && (
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-mono font-bold transition-colors ${
                    timeLeft <= 3
                      ? "bg-rose-500/10 border-rose-500/30 text-rose-400 animate-pulse"
                      : "bg-white/5 border-white/5 text-amber-400"
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  {timeLeft}s
                </div>
              )}

              <button
                onClick={handleCloseModal}
                className="p-1.5 rounded-lg text-white/40 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* BODY */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* VUE RÉSULTATS */}
              {quizResult && (
                <div className="space-y-4">
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
                        {quizResult.correct_answers} /{" "}
                        {quizResult.total_questions} bonnes réponses).
                      </p>
                    </div>

                    {quizResult.passed && quizResult.xp_gagnes > 0 && (
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs px-3 py-2 rounded-lg shadow-lg shadow-orange-500/20 whitespace-nowrap animate-pulse">
                        + {quizResult.xp_gagnes} XP ⚡
                      </div>
                    )}
                  </div>

                  <div className="pt-4 text-center flex justify-center gap-3">
                    {quizResult.passed ? (
                      <button
                        onClick={handleCloseModal}
                        className="px-5 py-2 text-xs font-semibold bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-colors cursor-pointer"
                      >
                        Bravo, vous avez réussi !
                      </button>
                    ) : (
                      <button
                        onClick={handleRetry}
                        className="px-5 py-2 text-xs font-semibold bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 transition-colors cursor-pointer"
                      >
                        Réessayer le défi
                      </button>
                    )}
                    <button
                      onClick={handleCloseModal}
                      className="px-5 py-2 bg-white/10 text-white font-semibold text-xs rounded-xl hover:bg-white/20 transition-all cursor-pointer"
                    >
                      {quizResult.passed ? "Continuer le cours" : "Fermer"}
                    </button>
                  </div>
                </div>
              )}

              {/* VUE QUESTION ACTIVE */}
              {!quizResult && currentQuestion && (
                <div className="space-y-4 animate-fade-in">
                  {/* Barre de progression du timer */}
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 transition-all duration-1000 ease-linear"
                      style={{ width: `${(timeLeft / 15) * 100}%` }}
                    />
                  </div>

                  <div className="space-y-2.5">
                    <h3 className="text-xs font-medium text-white/90">
                      <span className="text-indigo-400 font-bold mr-1">
                        Q{currentQuestionIndex + 1}.
                      </span>
                      {currentQuestion.text}
                    </h3>

                    <div className="grid grid-cols-1 gap-1.5">
                      {currentQuestion.choices?.map((choice) => {
                        const isSelected =
                          selectedAnswers[currentQuestion.id] === choice.id;
                        return (
                          <button
                            key={choice.id}
                            type="button"
                            onClick={() =>
                              handleSelectChoice(currentQuestion.id, choice.id)
                            }
                            className={`w-full text-left p-3 rounded-xl text-xs transition-all border cursor-pointer ${
                              isSelected
                                ? "bg-indigo-600/20 border-indigo-500 text-white font-medium shadow-md shadow-indigo-500/5"
                                : "bg-white/5 border-white/5 text-white/70 hover:bg-white/10"
                            }`}
                          >
                            {choice.text}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* BOUTON SUIVANT / TERMINER */}
                  <div className="flex justify-end pt-2">
                    <button
                      type="button"
                      onClick={handleNextOrSubmit}
                      disabled={isSubmitting}
                      className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/5 text-xs rounded-xl flex items-center gap-1.5 font-medium transition-all cursor-pointer active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : currentQuestionIndex === questions.length - 1 ? (
                        "Terminer"
                      ) : (
                        "Question suivante"
                      )}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
