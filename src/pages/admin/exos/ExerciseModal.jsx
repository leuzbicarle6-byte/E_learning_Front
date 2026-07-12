import React from "react";
import { FolderPlus } from "lucide-react";

export default function ExerciseModal({ isOpen, onClose, onSubmit, formData, setFormData, isEditing, allCourses }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-150">
      <div className="bg-[#112240] border border-slate-700 rounded-2xl w-full max-w-lg p-6 shadow-2xl relative text-white font-sans">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FolderPlus className="w-5 h-5 text-purple-400" />
          {isEditing ? "Modifier l'exercice" : "Ajouter un nouvel exercice"}
        </h3>
        
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Index Ex (ex: 1)</label>
              <input
                type="number"
                required
                value={formData.exercise_id}
                onChange={(e) => setFormData({ ...formData, exercise_id: e.target.value })}
                className="w-full bg-[#0a192f] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-semibold text-slate-400 mb-1">Niveau</label>
              <select
                value={formData.difficulty}
                onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                className="w-full bg-[#0a192f] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500"
              >
                <option value="Débutant">Débutant</option>
                <option value="Intermédiaire">Intermédiaire</option>
                <option value="Avancé">Avancé</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Cours d'affectation</label>
            <select
              required
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              className="w-full bg-[#0a192f] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500"
            >
              <option value="" disabled>Sélectionnez un cours</option>
              {allCourses.map((c) => (
                <option key={c.id} value={c.id}>{c.title}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Intitulé de l'exercice</label>
            <input
              type="text"
              required
              placeholder="Ex: Formater un tableau de bord"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-[#0a192f] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Consignes de l'atelier</label>
            <textarea
              required
              rows={4}
              placeholder="Détaillez les étapes attendues..."
              value={formData.desc}
              onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
              className="w-full bg-[#0a192f] border border-slate-700 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-purple-500 resize-none font-sans"
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-sm font-semibold text-slate-400 hover:text-white transition-all"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 px-5 rounded-xl text-sm transition-all shadow-lg"
            >
              {isEditing ? "Sauvegarder" : "Créer l'exercice"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}