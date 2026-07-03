import { wordIntro } from "./wordData"; // Ajuste le chemin selon ton projet
import { Sparkles, HelpCircle } from "lucide-react";

export default function WordIntro() {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* En-tête de la leçon */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
        <h2 className="text-2xl font-bold text-indigo-400 flex items-center gap-2">
          <HelpCircle className="w-6 h-6" />
          {wordIntro.titre}
        </h2>
        <p className="text-white/70 leading-relaxed text-base">
          {wordIntro.description}
        </p>
      </div>

      {/* Liste des points clés */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          Ce que tu vas apprendre à faire :
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {wordIntro.points.map((point, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 bg-white/2 border border-white/5 rounded-lg p-3 text-sm text-white/80 hover:border-indigo-500/20 transition"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold shrink-0 mt-0.5">
                {index + 1}
              </span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}