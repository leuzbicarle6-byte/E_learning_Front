import React from "react";
import { MousePointer, FileEdit, Save, CheckCircle } from "lucide-react";

export default function SystemDocuments() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Entête */}
      <div className="border-b border-white/10 pb-4">
        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
          Niveau 3 : L'action
        </span>
        <h3 className="text-2xl font-black text-white mt-3">Créer et Enregistrer</h3>
        <p className="text-white/60 text-sm mt-1">
          Passez à la pratique : créez votre premier document texte et apprenez à le sauvegarder à coup sûr.
        </p>
      </div>

      {/* Les étapes chronologiques sous forme de Timeline de cartes riches */}
      <div className="space-y-4 relative before:absolute before:inset-0 before:left-7 before:w-0.5 before:bg-white/10 before:my-4">
        
        {/* Étape 1 */}
        <div className="relative flex gap-5 items-start bg-white/5 border border-white/5 p-5 rounded-2xl hover:border-indigo-500/30 transition-all">
          <div className="z-10 w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center border-4 border-[#050816] shrink-0 ring-4 ring-indigo-500/20">
            1
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MousePointer className="w-4 h-4 text-indigo-400" />
              <h4 className="font-bold text-white text-base">Faire naître le fichier (Le clic droit)</h4>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              Placez-vous sur une zone vide de votre écran ou à l'intérieur d'un dossier. Faites un <strong>clic avec le bouton DROIT</strong> de votre souris. Un menu apparaît : glissez sur <strong>Nouveau</strong> puis cliquez sur <strong>Document texte</strong>.
            </p>
          </div>
        </div>

        {/* Étape 2 */}
        <div className="relative flex gap-5 items-start bg-white/5 border border-white/5 p-5 rounded-2xl hover:border-indigo-500/30 transition-all">
          <div className="z-10 w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center border-4 border-[#050816] flex-shrink-0 ring-4 ring-indigo-500/20">
            2
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FileEdit className="w-4 h-4 text-indigo-400" />
              <h4 className="font-bold text-white text-base">Baptiser le document (Renommer)</h4>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              Dès que le fichier apparaît, son texte est surligné en bleu. **Ne touchez pas à votre souris !** Tapez directement un nom clair sur votre clavier (Exemple : <code className="bg-black/40 text-pink-300 px-1.5 py-0.5 rounded font-mono">Liste_Courses</code>) puis appuyez sur la touche <strong>Entrée</strong>.
            </p>
          </div>
        </div>

        {/* Étape 3 */}
        <div className="relative flex gap-5 items-start bg-white/5 border border-white/5 p-5 rounded-2xl hover:border-indigo-500/30 transition-all">
          <div className="z-10 w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center border-4 border-[#050816] shrink-0 ring-4 ring-indigo-500/20">
            3
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Save className="w-4 h-4 text-indigo-400" />
              <h4 className="font-bold text-white text-base">Verrouiller le travail (La différence cruciale)</h4>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              Ouvrez votre fichier et écrivez dedans. Au moment de quitter, deux choix majeurs s'offrent à vous dans le menu *Fichier* en haut :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
              <div className="p-3 bg-black/30 border border-white/5 rounded-xl">
                <span className="text-xs font-bold text-indigo-300 block mb-1">📂 Enregistrer sous...</span>
                <span className="text-[11px] text-white/50 block leading-tight">Pour la TOUTE PREMIÈRE fois. Permet de choisir le nom et la boîte de rangement.</span>
              </div>
              <div className="p-3 bg-black/30 border border-white/5 rounded-xl">
                <span className="text-xs font-bold text-emerald-300 block mb-1">💾 Enregistrer</span>
                <span className="text-[11px] text-white/50 block leading-tight">Pour les fois suivantes. Met à jour le document sans poser de questions en 0.5s.</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Résumé de réussite de fin de chapitre */}
      <div className="bg-linear-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/20 p-5 rounded-2xl flex items-center gap-4">
        <CheckCircle className="w-8 h-8 text-emerald-400 shrink-0" />
        <div>
          <h4 className="font-bold text-white text-sm">Félicitations, vous maîtrisez la base !</h4>
          <p className="text-xs text-white/60 mt-0.5 leading-relaxed">
            Vous savez maintenant comment créer, nommer et sauvegarder vos données sans paniquer face au système. Le grand ménage informatique peut commencer !
          </p>
        </div>
      </div>
    </div>
  );
}