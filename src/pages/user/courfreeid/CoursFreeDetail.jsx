import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { courfreedtails } from "./data";
import {
  ArrowLeft,
  Search,
  Command,
  Sparkles,
  BookOpen,
  Layers,
  HelpCircle,
  Target,
  MessageSquareText,
  Lightbulb,
  ChevronDown
} from "lucide-react";

// Génère un badge court et lisible pour un outil (ex: "G" pour Gras, "F12" pour Enregistrer sous, "N" pour Nouveau)
function getBadgeLabel(tool) {
  if (tool.shortcut && tool.shortcut !== "N/A") {
    const keys = tool.shortcut.split("/");
    const primaryKey = keys[0].trim();
    if (primaryKey.length <= 4) return primaryKey;
  }

  const cleaned = tool.name.split("(")[0].split("/")[0].trim();
  const words = cleaned.split(" ").filter(Boolean);
  
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return words
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function CoursFreeDetail() {
  const { id } = useParams();
  const cours = courfreedtails.find((item) => item.id === Number(id));

  // Sélectionne par défaut le tout premier onglet disponible dans les données (ex: 'fichier')
  const [activeTabId, setActiveTabId] = useState(cours?.tabs?.[0]?.id || "fichier");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedTools, setExpandedTools] = useState(() => new Set());

  if (!cours) {
    return (
      <div className="p-8 text-center text-white space-y-4">
        <h2 className="text-2xl font-bold">Cours non trouvé</h2>
        <Link to="/cours" className="text-indigo-400 underline inline-block">
          Retour au catalogue
        </Link>
      </div>
    );
  }

  const activeTabData = cours.tabs?.find((t) => t.id === activeTabId) || cours.tabs?.[0];

  const filterTools = (tools) => {
    if (!searchTerm.trim()) return tools;
    const term = searchTerm.toLowerCase();
    return tools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(term) ||
        tool.desc.toLowerCase().includes(term) ||
        (tool.tag && tool.tag.toLowerCase().includes(term)) ||
        (tool.shortcut && tool.shortcut.toLowerCase().includes(term))
    );
  };

  const toggleTool = (key) => {
    setExpandedTools((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-300">

      {/* En-tête du Cours */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <Link
              to="/cours"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all border border-white/5"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-display font-black text-2xl md:text-4xl text-white tracking-tight">
              {cours.title}
            </h1>
          </div>
          <p className="text-sm text-white/60 pl-11">{cours.description}</p>
        </div>

        {/* Moteur de Recherche d'Outils */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            placeholder="Rechercher un outil ou raccourci (ex: Gras, Ctrl+S)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-indigo-500 transition-all"
          />
        </div>
      </div>

      {/* Navigation des Onglets du Ruban */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/80 rounded-2xl border border-white/10 backdrop-blur-xl">
        {cours.tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTabId(tab.id);
                setSearchTerm("");
              }}
              className={`flex items-center gap-2 px-5 py-3 text-xs md:text-sm font-semibold rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 scale-[1.01]"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <Layers className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Zone de Contenu Principale */}
      {activeTabData && (
        <div className="space-y-8">

          {/* Banner Description Onglet */}
          <div className="bg-gradient-to-r from-indigo-900/30 via-slate-900 to-indigo-900/20 border border-indigo-500/20 rounded-2xl p-6 relative overflow-hidden">
            <div className="flex items-start gap-4">
              <span className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Sparkles className="w-6 h-6" />
              </span>
              <div className="space-y-1">
                <h2 className="text-lg font-bold text-white">
                  Onglet {activeTabData.label}
                </h2>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                  {activeTabData.description}
                </p>
              </div>
            </div>
          </div>

          {/* Capture d'écran de l'interface */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs uppercase tracking-wider text-white/50 font-bold flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                Aperçu visuel du Ruban Word
              </h3>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-2 shadow-2xl">
              {activeTabData.image ? (
                <img
                  src={activeTabData.image}
                  alt={`Ruban ${activeTabData.label}`}
                  className="w-full h-auto rounded-xl object-contain border border-white/5"
                />
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-white/40 space-y-2">
                  <HelpCircle className="w-10 h-10 stroke-1" />
                  <p className="text-sm">Capture visuelle indisponible pour l'onglet {activeTabData.label}</p>
                </div>
              )}
            </div>
          </div>

          {/* GROUPES D'OUTILS — Une carte structurée par section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {activeTabData.sections?.map((section, idx) => {
              const filteredTools = filterTools(section.tools);

              if (filteredTools.length === 0) return null;

              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/[0.03] border border-white/5 overflow-hidden flex flex-col justify-start"
                >
                  {/* En-tête du groupe */}
                  <div className="flex items-center gap-3 px-5 py-3.5 bg-white/[0.03] border-b border-white/5">
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    <h3 className="text-sm font-bold text-white tracking-wide">
                      {section.name}
                    </h3>
                  </div>

                  {/* Liste des outils du groupe */}
                  <div className="divide-y divide-white/5">
                    {filteredTools.map((tool, tIdx) => {
                      const toolKey = `${activeTabId}-${idx}-${tIdx}-${tool.name}`;
                      const isExpanded = expandedTools.has(toolKey);
                      const hasDetails = tool.usage || tool.example || tool.tip || (tool.shortcut && tool.shortcut !== "N/A");
                      const badge = getBadgeLabel(tool);

                      return (
                        <div key={tIdx} className="group">
                          <button
                            onClick={() => hasDetails && toggleTool(toolKey)}
                            className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${
                              hasDetails ? "hover:bg-white/[0.04] cursor-pointer" : "cursor-default"
                            }`}
                          >
                            {/* Badge visuel stylisé */}
                            <span className="shrink-0 min-w-[2.5rem] h-9 px-2 flex items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-bold text-[11px] font-mono">
                              {badge}
                            </span>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-semibold text-sm text-white">
                                  {tool.name}
                                </span>
                                {tool.tag && (
                                  <span className="text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                    {tool.tag}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-white/60 leading-relaxed mt-0.5">
                                {tool.desc}
                              </p>
                            </div>

                            {hasDetails && (
                              <ChevronDown
                                className={`w-4 h-4 text-white/30 shrink-0 transition-transform duration-200 ${
                                  isExpanded ? "rotate-180" : ""
                                }`}
                              />
                            )}
                          </button>

                          {/* Zone de détails pédagogiques dépliable */}
                          {isExpanded && hasDetails && (
                            <div className="px-5 pb-4 pl-[4rem] space-y-2.5 animate-in fade-in duration-200 bg-white/[0.01]">
                              {tool.usage && (
                                <div className="flex gap-2 items-start">
                                  <Target className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                  <p className="text-[11px] text-white/70 leading-relaxed">
                                    <span className="text-emerald-400 font-semibold">
                                      Quand l'utiliser :{" "}
                                    </span>
                                    {tool.usage}
                                  </p>
                                </div>
                              )}
                              
                              {tool.example && (
                                <div className="flex gap-2 items-start">
                                  <MessageSquareText className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                                  <p className="text-[11px] text-white/70 leading-relaxed">
                                    <span className="text-sky-400 font-semibold">
                                      Exemple :{" "}
                                    </span>
                                    {tool.example}
                                  </p>
                                </div>
                              )}

                              {tool.tip && (
                                <div className="flex gap-2 items-start">
                                  <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                                  <p className="text-[11px] text-white/70 leading-relaxed">
                                    <span className="text-amber-400 font-semibold">
                                      Astuce :{" "}
                                    </span>
                                    {tool.tip}
                                  </p>
                                </div>
                              )}

                              {tool.shortcut && tool.shortcut !== "N/A" && (
                                <div className="flex items-center gap-2 pt-1">
                                  <Command className="w-3.5 h-3.5 text-white/40 shrink-0" />
                                  <span className="text-[10px] text-white/50">Raccourci :</span>
                                  <kbd className="px-2 py-0.5 rounded-md bg-white/10 text-white font-mono font-bold text-[10px] border border-white/10">
                                    {tool.shortcut}
                                  </kbd>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}
    </div>
  );
}