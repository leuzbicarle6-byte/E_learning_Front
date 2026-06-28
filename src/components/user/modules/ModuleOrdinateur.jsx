import React, { useState } from "react";
import {
  Cpu,
  Laptop,
  HardDrive,
  Layout,
  Keyboard,
  MousePointer,
  Monitor,
} from "lucide-react";

export default function ModuleOrdinateur() {
  const [activeTab, setActiveTab] = useState("definition");

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
      {/* Menu de navigation du module */}
      <div className="flex border-b border-white/5 bg-white/2 overflow-x-auto separation-tabs">
        <button
          onClick={() => setActiveTab("definition")}
          className={`flex items-center gap-2 px-5 py-3.5 text-xs font-semibold border-b-2 whitespace-nowrap cursor-pointer transition-all ${
            activeTab === "definition"
              ? "border-indigo-500 text-white bg-indigo-500/5"
              : "border-transparent text-white/40 hover:text-white/70"
          }`}
        >
          <Cpu className="w-4 h-4 text-indigo-400" /> 1. Définition
        </button>
        <button
          onClick={() => setActiveTab("types")}
          className={`flex items-center gap-2 px-5 py-3.5 text-xs font-semibold border-b-2 whitespace-nowrap cursor-pointer transition-all ${
            activeTab === "types"
              ? "border-purple-400 text-white bg-purple-500/5"
              : "border-transparent text-white/40 hover:text-white/70"
          }`}
        >
          <Laptop className="w-4 h-4 text-purple-400" /> 2. Les Types
        </button>
        <button
          onClick={() => setActiveTab("peripheriques")}
          className={`flex items-center gap-2 px-5 py-3.5 text-xs font-semibold border-b-2 whitespace-nowrap cursor-pointer transition-all ${
            activeTab === "peripheriques"
              ? "border-emerald-400 text-white bg-emerald-500/5"
              : "border-transparent text-white/40 hover:text-white/70"
          }`}
        >
          <Keyboard className="w-4 h-4 text-emerald-400" /> 3. Les Périphériques
        </button>
      </div>

      {/* ZONE DE CONTENU DYNAMIQUE */}
      <div className="p-6 space-y-6">
        {/* ONGLET 1 : DEFINITION */}
        {activeTab === "definition" && (
          <div className="space-y-4 animate-in fade-in duration-150">
            <h2 className="text-xl font-bold font-display text-white">
              Qu'est-ce qu'un ordinateur ?
            </h2>
            <p className="text-sm text-white/70 leading-relaxed">
              Un <strong>ordinateur</strong> est une machine électronique
              capable de recevoir des données, de les traiter automatiquement
              grâce à des programmes, puis de les stocker ou de les afficher.
            </p>
            {/* Image d'illustration globale */}
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-900 border border-white/5 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800"
                alt="Poste informatique"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        )}

        {/* ONGLET 2 : TYPES D'ORDINATEURS */}
        {activeTab === "types" && (
          <div className="space-y-4 animate-in fade-in duration-150">
            <h2 className="text-xl font-bold font-display text-white">
              Les différentes catégories d'ordinateurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-white/5 bg-white/2 space-y-2">
                <span className="text-purple-400 font-bold text-sm block">
                  L'ordinateur de bureau (PC Fixe)
                </span>
                <img
                  src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=400"
                  className="w-full h-32 object-cover rounded-lg my-2 opacity-70"
                  alt="PC Fixe"
                />
                <p className="text-xs text-white/60">
                  Composé de plusieurs éléments séparés (Écran, UC, Clavier). Il
                  est puissant et reste à une place fixe.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-white/5 bg-white/2 space-y-2">
                <span className="text-purple-400 font-bold text-sm block">
                  L'ordinateur portable (Laptop)
                </span>
                <img
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400"
                  className="w-full h-32 object-cover rounded-lg my-2 opacity-70"
                  alt="Laptop"
                />
                <p className="text-xs text-white/60">
                  Il intègre l'écran, le clavier, la souris (touchpad) et une
                  batterie pour être transporté facilement partout.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ONGLET 3 : LES PERIPHERIQUES EN DETAIL */}
        {activeTab === "peripheriques" && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div>
              <h2 className="text-xl font-bold font-display text-white mb-1">
                Les Composants & Périphériques
              </h2>
              <p className="text-xs text-white/50">
                Voici le détail des outils indispensables qui font fonctionner
                votre système.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {/* L'Unité Centrale */}
              <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-white/5 bg-white/1">
                <div className="sm:w-1/4 h-24 rounded-lg overflow-hidden bg-slate-900 border border-white/5 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=300"
                    className="w-full h-full object-cover opacity-70"
                    alt="Unité centrale"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-amber-400 flex items-center gap-1.5">
                    <HardDrive className="w-4 h-4" /> L'Unité Centrale (UC)
                  </h4>
                  <p className="text-xs text-white/70">
                    <strong>À quoi ça sert ?</strong> C'est le caisson
                    principal. Il abrite le cœur pensant de l'ordinateur : le
                    processeur, la mémoire vive (RAM) et le disque dur. Sans
                    elle, rien ne fonctionne.
                  </p>
                </div>
              </div>

              {/* L'Écran */}
              <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-white/5 bg-white/1">
                <div className="sm:w-1/4 h-24 rounded-lg overflow-hidden bg-slate-900 border border-white/5 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=300"
                    className="w-full h-full object-cover opacity-70"
                    alt="Ecran"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-indigo-400 flex items-center gap-1.5">
                    <Monitor className="w-4 h-4" /> L'Écran (Le Moniteur)
                  </h4>
                  <p className="text-xs text-white/70">
                    <strong>À quoi ça sert ?</strong> C'est le périphérique de
                    sortie visuel principal. Il traduit les signaux
                    électroniques de l'Unité Centrale sous forme d'images, de
                    textes et de vidéos compréhensibles par vos yeux.
                  </p>
                </div>
              </div>

              {/* Le Clavier */}
              <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-white/5 bg-white/1">
                <div className="sm:w-1/4 h-24 rounded-lg overflow-hidden bg-slate-900 border border-white/5 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=300"
                    className="w-full h-full object-cover opacity-70"
                    alt="Clavier"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                    <Keyboard className="w-4 h-4" /> Le Clavier
                  </h4>
                  <p className="text-xs text-white/70">
                    <strong>À quoi ça sert ?</strong> C'est un périphérique
                    d'entrée. Il vous permet de taper du texte, d'envoyer des
                    commandes et d'écrire des instructions directement à la
                    machine.
                  </p>
                </div>
              </div>

              {/* La Souris */}
              <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-white/5 bg-white/1">
                <div className="sm:w-1/4 h-24 rounded-lg overflow-hidden bg-slate-900 border border-white/5 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=300"
                    className="w-full h-full object-cover opacity-70"
                    alt="Souris"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-teal-400 flex items-center gap-1.5">
                    <MousePointer className="w-4 h-4" /> La Souris
                  </h4>
                  <p className="text-xs text-white/70">
                    <strong>À quoi ça sert ?</strong> Elle vous permet de
                    diriger le curseur à l'écran, de cliquer sur des icônes,
                    d'ouvrir des dossiers et de naviguer de manière intuitive
                    dans vos logiciels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
