import React from "react";

export default function ModalImportant({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-full max-w-xl rounded-xl bg-slate-800 p-6 shadow-2xl border border-slate-700">
        
        {/* En-tête */}
        <div className="flex items-center justify-between border-b border-slate-700 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 text-xl">⚠️</span>
            <h3 className="text-xl font-bold text-white">Message Important</h3>
          </div>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white transition-colors text-lg font-semibold px-2 rounded-lg hover:bg-slate-700"
          >
            ✕
          </button>
        </div>

        {/* Contenu textuel */}
        <div className="mt-4 space-y-4 text-slate-300 leading-relaxed">
          <p className="font-medium text-white">
            Bienvenue dans votre espace d'apprentissage ! Avant de commencer, gardez une chose en tête :
          </p>
          <p>
            Ce que vous apprenez ici est un excellent point de départ, mais ce n'est <strong className="text-amber-400 font-semibold">pas complet à 100%</strong>. La vraie maîtrise de l'informatique et de la bureautique vient avec la pratique personnelle.
          </p>
          
          {/* Section Ajoutée : Continuité des cours */}
          <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600 space-y-2">
            <p className="text-white font-semibold flex items-center gap-2">
              <span>🚀</span> Et pour aller plus loin ?
            </p>
            <p className="text-sm text-slate-300">
              Ne vous inquiétez pas, vous ne serez pas lâchés dans la nature ! **Après avoir terminé chaque module**, des sessions de cours approfondis en **ligne** ou en **présentiel** seront mis à votre disposition pour parfaire vos compétences et obtenir une maîtrise totale.
            </p>
          </div>

          <p className="text-sm italic text-slate-400">
            Les outils théoriques vous donnent la structure, mais c'est votre assiduité qui fera la différence.
          </p>
        </div>

        {/* Bouton d'action */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg"
          >
            J'ai compris, je fonce !
          </button>
        </div>

      </div>
    </div>
  );
}