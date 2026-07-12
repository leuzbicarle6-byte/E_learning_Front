import React from "react";
import { Folder, File, HelpCircle } from "lucide-react";

export default function SystemFiles() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Entête */}
      <div className="border-b border-white/10 pb-4">
        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
          Niveau 2 : Le Rangement
        </span>
        <h3 className="text-2xl font-black text-white mt-3">Dossiers vs Fichiers</h3>
        <p className="text-white/60 text-sm mt-1">
          La clé pour ne plus jamais prononcer la phrase : *« Mais où est passé mon document ? »*
        </p>
      </div>

      {/* La métaphore physique expliquée aux débutants */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 flex gap-4 items-start">
          <div className="text-3xl">📁</div>
          <div className="space-y-1">
            <h4 className="font-bold text-yellow-400">Le DOSSIER (La boîte)</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Il est toujours <strong>jaune</strong> par défaut. Il est complètement <strong>vide</strong> tant que vous n'avez rien mis dedans. Il sert uniquement à trier et regrouper vos papiers. Vous ne pouvez pas "écrire" dans un dossier.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 flex gap-4 items-start">
          <div className="text-3xl">📄</div>
          <div className="space-y-1">
            <h4 className="font-bold text-indigo-300">Le FICHIER (La feuille)</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              C'est votre vrai contenu : une photo, une lettre Word, une musique, un reçu PDF. C'est l'élément précieux que vous allez ranger à l'intérieur d'un ou plusieurs dossiers.
            </p>
          </div>
        </div>
      </div>

      {/* Arborescence interactive visuelle (Le placard) */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-white/80 flex items-center gap-2">
          📦 Visualisez le rangement comme des boîtes gigognes (poupées russes) :
        </h4>
        
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4">
          
          {/* Niveau 1 : Principal */}
          <div className="p-4 bg-yellow-600/10 border border-yellow-500/30 rounded-xl">
            <div className="flex items-center gap-2 text-yellow-400 font-bold text-sm">
              <Folder className="w-5 h-5 fill-yellow-400/20"/> DOSSIER : "Mes Documents" <span className="text-[10px] bg-yellow-500/20 text-yellow-200 px-2 py-0.5 rounded-full">(Le placard)</span>
            </div>
            
            {/* Niveau 2 : Imbriqué */}
            <div className="mt-4 ml-6 p-4 bg-amber-600/10 border border-amber-500/30 rounded-xl">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Folder className="w-4 h-4 fill-amber-400/20"/> SOUS-DOSSIER : "Factures 2026"
              </div>
              
              {/* Niveau 3 : Fichier final */}
              <div className="mt-3 ml-6 p-3 bg-black/40 border border-white/5 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2 text-white/80 text-xs font-mono">
                  <File className="w-4 h-4 text-indigo-400"/> Quittance_Loyer_Janvier.pdf
                </div>
                <span className="text-[9px] font-semibold uppercase px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                  Fichier PDF sécurisé
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Le quiz réflexe rapide de fin de section */}
      <div className="p-5 bg-indigo-950/40 border border-indigo-500/30 rounded-2xl flex items-start gap-4">
        <HelpCircle className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-2">
          <h4 className="font-bold text-sm text-white">Le Réflexe Pratique :</h4>
          <p className="text-xs text-white/60 leading-relaxed">
            Avant de cliquer sur le bouton "Enregistrer", posez-vous toujours la question à voix haute : 
            <span className="block italic text-indigo-300 mt-1">« Dans quelle boîte (Dossier) suis-je en train de déposer ma feuille (Fichier) ? »</span>
          </p>
        </div>
      </div>
    </div>
  );
}