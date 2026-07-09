import React, { useState } from "react";
import { Presentation, MoveRight, Layers, Play, CheckCircle2, Star } from "lucide-react";

export default function PowerPointDetail() {
  const [activeTab, setActiveTab] = useState("slides");

  const tabs = [
    { id: "slides", label: "1. Structure & Slides", icon: Layers },
    { id: "animations", label: "2. Animations & Effets", icon: Star },
    { id: "presenting", label: "3. Le Mode Diaporama", icon: Play },
  ];

  return (
    <div className="space-y-6">
      {/* Navigation des Onglets Internes à PowerPoint */}
      <div className="flex flex-wrap gap-2 p-1 bg-white/5 border border-white/10 rounded-xl">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${
                activeTab === tab.id
                  ? "bg-red-500 text-white shadow-lg shadow-red-500/20"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Contenu de l'onglet actif */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl space-y-6">
        {activeTab === "slides" && <PPTSlides />}
        {activeTab === "animations" && <PPTAnimations />}
        {activeTab === "presenting" && <PPTPresenting />}
      </div>
    </div>
  );
}

// --- SOUS-COMPOSANT 1 : STRUCTURE & SLIDES ---
function PPTSlides() {
  return (
    <div className="space-y-4 animate-in fade-in duration-150">
      <div className="flex items-center gap-3 border-b border-white/10 pb-3">
        <Layers className="w-6 h-6 text-red-400" />
        <h3 className="text-lg font-semibold">Gérer les Diapositives (Slides)</h3>
      </div>
      <p className="text-sm text-white/70 leading-relaxed">
        PowerPoint fonctionne par blocs indépendants appelés **diapositives**. Contrairement à Word, le texte ne coule pas automatiquement d'une page à l'autre : vous devez tout organiser manuellement dans des **zones de texte**.
      </p>
      
      <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20 space-y-2 text-xs">
        <h4 className="font-bold text-red-400 uppercase tracking-wider">La règle d'or du Design (10-20-30) :</h4>
        <ul className="list-disc pl-4 space-y-1 text-white/80">
          <li>Pas plus de <strong className="text-white">10 diapositives</strong> par présentation standard.</li>
          <li>Pas plus de <strong className="text-white">20 minutes</strong> de parole.</li>
          <li>Une taille de police d'au moins <strong className="text-white">30 points</strong> pour rester lisible de loin.</li>
        </ul>
      </div>
    </div>
  );
}

// --- SOUS-COMPOSANT 2 : ANIMATIONS VS TRANSITIONS (INTERACTIF) ---
function PPTAnimations() {
  const [triggerAnim, setTriggerAnim] = useState(false);
  const [triggerTrans, setTriggerTrans] = useState(false);

  return (
    <div className="space-y-4 animate-in fade-in duration-150">
      <div className="flex items-center gap-3 border-b border-white/10 pb-3">
        <Star className="w-6 h-6 text-red-400" />
        <h3 className="text-lg font-semibold">Animer vos idées sans surcharger</h3>
      </div>
      <p className="text-sm text-white/70">
        Il est crucial de comprendre la différence fondamentale entre ces deux outils :
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-white text-sm mb-1">La Transition</h4>
            <p className="text-white/60 leading-relaxed">C'est l'effet visuel qui se produit <strong>entre deux diapositives</strong> (le passage de la slide A à la slide B).</p>
          </div>
          <button 
            onClick={() => { setTriggerTrans(true); setTimeout(() => setTriggerTrans(false), 1000); }}
            className="mt-4 px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded font-medium transition-all"
          >
            Tester une Transition
          </button>
        </div>

        <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-white text-sm mb-1">L'Animation</h4>
            <p className="text-white/60 leading-relaxed">C'est l'effet appliqué à un <strong>élément précis à l'intérieur</strong> de la diapositive (un titre qui surgit, une image qui zoome).</p>
          </div>
          <button 
            onClick={() => { setTriggerAnim(true); setTimeout(() => setTriggerAnim(false), 1000); }}
            className="mt-4 px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded font-medium transition-all"
          >
            Tester une Animation
          </button>
        </div>
      </div>

      {/* Simulateur visuel ultra-simple d'effets */}
      <div className="p-6 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center min-h-35 relative overflow-hidden">
        {triggerTrans && (
          <div className="absolute inset-0 bg-red-600 animate-out slide-out-to-right duration-1000 z-10 flex items-center justify-center font-mono text-xs text-white">
            Effet "Balayage" de la Slide...
          </div>
        )}
        
        <div className={`p-4 bg-white/10 border border-white/15 rounded-lg text-center shadow-lg transition-all duration-500 ${triggerAnim ? "scale-110 border-red-500 text-red-400 rotate-2" : "text-white"}`}>
          <Presentation className="w-8 h-8 mx-auto mb-2" />
          <p className="font-mono text-xs font-bold">Élément de la diapositive</p>
          <p className="text-[10px] text-white/50 font-sans mt-0.5">Regardez l'effet appliqué !</p>
        </div>
      </div>
    </div>
  );
}

// --- SOUS-COMPOSANT 3 : MODE DIAPORAMA ---
function PPTPresenting() {
  return (
    <div className="space-y-4 animate-in fade-in duration-150">
      <div className="flex items-center gap-3 border-b border-white/10 pb-3">
        <Play className="w-6 h-6 text-red-400" />
        <h3 className="text-lg font-semibold">Le Mode Diaporama & Raccourcis</h3>
      </div>
      <p className="text-sm text-white/70">
        Une fois votre présentation prête, c'est le moment de la projeter. Connaître ces astuces évite de chercher ses mots en public.
      </p>

      <div className="space-y-2.5 text-xs font-sans text-white/80">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
          <kbd className="px-2 py-1 bg-black/40 rounded border border-white/20 font-mono text-red-400 font-bold min-w-8 text-center">F5</kbd>
          <span className="flex-1">Lance le diaporama depuis la **toute première** diapositive.</span>
        </div>
        <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
          <div className="flex gap-1">
            <kbd className="px-2 py-1 bg-black/40 rounded border border-white/20 font-mono text-red-400 font-bold">Shift</kbd>
            <span className="text-white/40 font-mono font-bold text-sm">+</span>
            <kbd className="px-2 py-1 bg-black/40 rounded border border-white/20 font-mono text-red-400 font-bold">F5</kbd>
          </div>
          <span className="flex-1">Lance le diaporama à partir de la diapositive **actuelle** (très utile pour tester).</span>
        </div>
        <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
          <kbd className="px-2 py-1 bg-black/40 rounded border border-white/20 font-mono text-red-400 font-bold min-w-8 text-center">B</kbd>
          <span className="flex-1">Affiche un **écran noir** instantané pendant la présentation. Idéal pour capter l'attention de l'auditoire sur vous sans couper le projecteur.</span>
        </div>
      </div>
    </div>
  );
}