import { FileText } from "lucide-react";
import { wordIntro } from "./wordData";

export default function WordIntro() {
  return (
    <div className="p-6 rounded-2xl bg-linear-to-br from-indigo-500/10 to-purple-500/10 border border-white/10 space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
          <FileText className="w-5 h-5 text-indigo-400" />
        </div>
        <h2 className="text-xl font-semibold text-white">{wordIntro.titre}</h2>
      </div>

      <p className="text-white/70 leading-relaxed">{wordIntro.description}</p>

      <ul className="space-y-2">
        {wordIntro.points.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-white/60">
            <span className="text-indigo-400 mt-1">•</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
