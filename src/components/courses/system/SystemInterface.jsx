import React from "react";
import { Monitor, Layout, Search, AlertTriangle, Lightbulb } from "lucide-react";

export default function SystemInterface() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Entête */}
      <div className="border-b border-white/10 pb-4">
        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
          Niveau 1 : Les Fondations
        </span>
        <h3 className="text-2xl font-black text-white mt-3">Votre Espace de Travail</h3>
        <p className="text-white/60 text-sm mt-1">
          Quand vous allumez votre ordinateur, vous arrivez ici. C'est votre centre de commande.
        </p>
      </div>

      {/* Simulation Visuelle d'un écran */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-white/80 flex items-center gap-2">
          🖥️ À quoi ressemble un écran type ?
        </h4>
        <div className="relative w-full aspect-video rounded-xl bg-slate-900 border border-white/10 overflow-hidden shadow-2xl shadow-black/50 p-4 flex flex-col justify-between">
          
          {/* Faux icônes de bureau */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex flex-col items-center justify-center text-[10px] text-indigo-200">
              📁 <span className="mt-1 scale-90">Photos</span>
            </div>
            <div className="w-12 h-12 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex flex-col items-center justify-center text-[10px] text-indigo-200">
              📄 <span className="mt-1 scale-90">CV.pdf</span>
            </div>
          </div>

          <div className="text-center text-white/20 text-xs font-mono select-none">
            [ Espace central du Bureau ]
          </div>

          {/* Fausse barre des tâches */}
          <div className="w-full h-10 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-between px-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-xs text-white font-bold shadow-md shadow-indigo-600/50">
                ⊞
              </div>
              <div className="w-20 h-4 bg-white/10 rounded-md text-[9px] text-white/40 flex items-center px-2">
                Rechercher...
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded bg-white/10"></div>
              <div className="w-5 h-5 rounded bg-white/10"></div>
            </div>
            <div className="text-[10px] text-white/60 font-mono">19:30</div>
          </div>
        </div>
      </div>

      {/* Les explications imagées */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 bg-white/5 border border-white/5 rounded-2xl space-y-3 hover:bg-white/10 transition-all">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Monitor className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-base text-white">Le Bureau</h4>
          <p className="text-xs text-white/60 leading-relaxed">
            Pensez-y comme à une <strong>vraie table en bois</strong>. On y pose sa tasse (ses dossiers) et ses feuilles du moment. Si vous posez tout dessus, elle déborde !
          </p>
        </div>

        <div className="p-5 bg-white/5 border border-white/5 rounded-2xl space-y-3 hover:bg-white/10 transition-all">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Layout className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-base text-white">La Barre des tâches</h4>
          <p className="text-xs text-white/60 leading-relaxed">
            C'est votre <strong>tiroir à outils rapide</strong> situé tout en bas. Il reste visible en permanence pour basculer d'un logiciel ouvert à un autre d'un seul clic.
          </p>
        </div>

        <div className="p-5 bg-white/5 border border-white/5 rounded-2xl space-y-3 hover:bg-white/10 transition-all">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Search className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-base text-white">Le Menu Démarrer</h4>
          <p className="text-xs text-white/60 leading-relaxed">
            Le <strong>cerveau</strong> de la machine. Un doute ? Une application perdue ? Cliquez dessus, commencez à taper son nom au clavier, et l'ordinateur la trouve pour vous.
          </p>
        </div>
      </div>

      {/* Encadrés Attention / Astuce */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <div className="flex gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-200">
          <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <strong className="block font-bold">L'erreur classique du débutant :</strong>
            Enregistrer TOUS ses fichiers directement sur le bureau. Cela ralentit visuellement votre espace et vous risquez de tout perdre en un clic.
          </div>
        </div>

        <div className="flex gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-200">
          <Lightbulb className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <strong className="block font-bold">Astuce pratique :</strong>
            Faites un double-clic rapide pour ouvrir un élément du bureau, mais un simple clic suffit pour les éléments situés dans la barre des tâches du bas !
          </div>
        </div>
      </div>
    </div>
  );
}