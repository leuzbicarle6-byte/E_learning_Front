import React, { useState } from "react";
import { ChevronDown, Zap } from "lucide-react";
// Adapte ce chemin d'import selon l'emplacement réel de ton fichier data.js
import { courfreedtails } from "../../../pages/user/courfreeid/data";

const tagColors = {
  "Indispensable": "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
  "Sauvegarde": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
  "Impression": "bg-sky-500/20 text-sky-300 border-sky-500/40",
  "Gain de temps": "bg-violet-500/20 text-violet-300 border-violet-500/40",
  "Mise en valeur": "bg-pink-500/20 text-pink-300 border-pink-500/40",
  "Design": "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/40",
  "Organisation": "bg-amber-500/20 text-amber-300 border-amber-500/40",
  "Mise en page": "bg-teal-500/20 text-teal-300 border-teal-500/40",
  "Lisibilité": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
  "Essentiel": "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
  "Incontournable": "bg-rose-500/20 text-rose-300 border-rose-500/40",
  "Visuel": "bg-purple-500/20 text-purple-300 border-purple-500/40",
  "Document long": "bg-blue-500/20 text-blue-300 border-blue-500/40",
  "Navigation": "bg-lime-500/20 text-lime-300 border-lime-500/40",
  "Académique": "bg-orange-500/20 text-orange-300 border-orange-500/40",
  "Collaboration": "bg-green-500/20 text-green-300 border-green-500/40",
  "Confort": "bg-slate-500/20 text-slate-300 border-slate-500/40",
};

function ToolCard({ tool }) {
  const [open, setOpen] = useState(false);
  const tagClass =
    tagColors[tool.tag] || "bg-indigo-500/20 text-indigo-300 border-indigo-500/40";

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all hover:border-indigo-400/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 p-4 text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="shrink-0 h-8 w-8 rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Zap size={16} className="text-white" />
          </span>
          <div className="min-w-0">
            <p className="text-white font-medium truncate">{tool.name}</p>
            {tool.shortcut && tool.shortcut !== "N/A" && (
              <p className="text-xs text-indigo-300/70 font-mono">{tool.shortcut}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className={`text-xs px-2 py-1 rounded-full border ${tagClass}`}>
            {tool.tag}
          </span>
          <ChevronDown
            size={18}
            className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {open && (
        <div className="px-4 pb-4 pt-1 space-y-3 border-t border-white/10">
          <p className="text-gray-300 text-sm">{tool.desc}</p>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg bg-black/20 p-3">
              <p className="text-xs uppercase tracking-wide text-indigo-400 mb-1">
                Quand l'utiliser
              </p>
              <p className="text-sm text-gray-300">{tool.usage}</p>
            </div>
            <div className="rounded-lg bg-black/20 p-3">
              <p className="text-xs uppercase tracking-wide text-purple-400 mb-1">
                Exemple concret
              </p>
              <p className="text-sm text-gray-300">{tool.example}</p>
            </div>
          </div>
          {tool.tip && (
            <div className="rounded-lg border border-amber-400/20 bg-amber-400/5 p-3">
              <p className="text-xs uppercase tracking-wide text-amber-400 mb-1">
                Astuce
              </p>
              <p className="text-sm text-amber-100/90">{tool.tip}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function TabContent({ tab }) {
  return (
    <div className="space-y-8">
      {tab.image && (
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-indigo-950/40">
          <img src={tab.image} alt={tab.label} className="w-full object-cover" />
        </div>
      )}

      <p className="text-gray-300 leading-relaxed">{tab.description}</p>

      <div className="space-y-10">
        {tab.sections.map((section, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-indigo-400 to-purple-400" />
              {section.name}
            </h3>
            <div className="space-y-3">
              {section.tools.map((tool, j) => (
                <ToolCard key={j} tool={tool} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WordDetail() {
  const course = courfreedtails[0];
  const [activeTabId, setActiveTabId] = useState(course.tabs[0].id);
  const activeTab = course.tabs.find((t) => t.id === activeTabId);

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0b0b16] to-[#13111f] text-white">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {course.title}
          </h1>
          <p className="text-gray-400 mt-2">{course.description}</p>
        </header>

        {/* Onglets */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
          {course.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTabId === tab.id
                  ? "bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-900/40"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenu de l'onglet actif */}
        <TabContent tab={activeTab} />
      </div>
    </div>
  );
}
