import React from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function ExerciseCard({ ex, onEdit, onDelete }) {
  return (
    <div className="bg-[#112240] border border-slate-700 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-slate-600 transition-all text-white font-sans overflow-y-auto h-96">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-lg border border-purple-500/20">
            Exercice {ex.exercise_id}
          </span>
          <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${
            ex.difficulty === "Débutant" ? "bg-green-500/10 text-green-400 border-green-500/20" :
            ex.difficulty === "Intermédiaire" ? "bg-orange-500/10 text-orange-400 border-orange-500/20" :
            "bg-red-500/10 text-red-400 border-red-500/20"
          }`}>
            {ex.difficulty}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-2">{ex.title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed bg-[#0a192f]/60 p-4 rounded-xl border border-slate-800 min-h-20 whitespace-pre-line">
          {ex.desc}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-end gap-2">
        <button
          onClick={() => onEdit(ex)}
          className="p-2 text-slate-400 hover:text-purple-400 hover:bg-purple-500/10 rounded-xl transition-all"
          title="Modifier"
        >
          <Pencil className="w-4 h-4" />
        </button>
        <button
          onClick={() => onDelete(ex.id)}
          className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all"
          title="Supprimer"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}