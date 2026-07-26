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
          <div className="bg-linear-to-r from-indigo-900/30 via-slate-900 to-indigo-900/20 border border-indigo-500/20 rounded-2xl p-6 relative overflow-hidden">
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
        </div>
      )}
    </div>
  );
}