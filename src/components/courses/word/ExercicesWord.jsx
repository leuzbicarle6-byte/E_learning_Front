import { exercicesWord } from "./wordData";
import { CheckCircle2, PlayCircle } from "lucide-react";

export default function ExercicesWord() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-linear-to-r from-indigo-950/40 to-purple-950/40 border border-indigo-500/20 rounded-xl p-4 flex items-center gap-3">
        <PlayCircle className="w-6 h-6 text-indigo-400 shrink-0" />
        <div>
          <h2 className="text-base font-bold text-white">
            Pratique sur ton ordinateur !
          </h2>
          <p className="text-xs text-white/60">
            Réalise ces actions étape par étape directement dans ton logiciel
            Microsoft Word installé.
          </p>
        </div>
      </div>

      {/* Fil d'exercices guidés */}
      <div className="relative border-l-2 border-white/10 ml-3 pl-6 space-y-6 py-2">
        {exercicesWord.map((exo) => {
          const ExoIcon = exo.icon;
          return (
            <div key={exo.id} className="relative group">
              {/* Bulle numérotée sur la ligne */}
              <span className="absolute -left-8.75 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 border-2 border-indigo-500 text-indigo-400 text-xs font-bold transition group-hover:bg-indigo-500 group-hover:text-white">
                {exo.id}
              </span>

              {/* Carte exercice */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2 hover:border-white/20 transition">
                <div className="flex items-center gap-2 text-indigo-400">
                  <ExoIcon className="w-4 h-4 shrink-0" />
                  <h3 className="font-semibold text-sm text-white/90">
                    {exo.titre}
                  </h3>
                </div>
                <p className="text-sm text-white/70 leading-relaxed pl-6">
                  {exo.consigne}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-white/30 pl-6 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white/20" />
                  <span>À valider sur ton écran</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
