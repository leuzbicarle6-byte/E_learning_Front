import React, { useState } from "react";
import {
  Keyboard,
  Files,
  Type,
  Monitor,
  Search,
  Copy,
  CheckCircle2,
} from "lucide-react";
import { FaWindows } from "react-icons/fa";

export default function Raccourcies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Liste des raccourcis essentiels pour la bureautique
  const shortcutsData = [
    // Fichiers & Documents
    {
      keys: ["Ctrl", "N"],
      action: "Créer un nouveau document ou fichier",
      category: "files",
    },
    {
      keys: ["Ctrl", "O"],
      action: "Ouvrir un document existant",
      category: "files",
    },
    {
      keys: ["Ctrl", "S"],
      action: "Enregistrer les modifications (Sauvegarder)",
      category: "files",
    },
    {
      keys: ["Ctrl", "P"],
      action: "Imprimer le document actuel",
      category: "files",
    },
    {
      keys: ["Ctrl", "W"],
      action: "Fermer la fenêtre ou le document actif",
      category: "files",
    },

    // Édition de Texte
    {
      keys: ["Ctrl", "C"],
      action: "Copier l'élément ou le texte sélectionné",
      category: "text",
    },
    {
      keys: ["Ctrl", "X"],
      action: "Couper l'élément ou le texte sélectionné",
      category: "text",
    },
    {
      keys: ["Ctrl", "V"],
      action: "Coller l'élément ou le texte copié/coupé",
      category: "text",
    },
    {
      keys: ["Ctrl", "Z"],
      action: "Annuler la dernière action (Undo)",
      category: "text",
    },
    {
      keys: ["Ctrl", "Y"],
      action: "Rétablir l'action annulée (Redo)",
      category: "text",
    },
    {
      keys: ["Ctrl", "A"],
      action: "Sélectionner tout le texte ou les objets",
      category: "text",
    },
    {
      keys: ["Ctrl", "G"],
      action: "Mettre le texte sélectionné en Gras",
      category: "text",
    },
    {
      keys: ["Ctrl", "I"],
      action: "Mettre le texte sélectionné en Italique",
      category: "text",
    },

    // Système Windows / Navigation
    {
      keys: ["Alt", "Tab"],
      action: "Basculer rapidement entre les applications ouvertes",
      category: "system",
    },
    {
      keys: ["Win", "D"],
      action: "Afficher ou masquer instantanément le Bureau",
      category: "system",
    },
    {
      keys: ["Win", "E"],
      action: "Ouvrir l'Explorateur de fichiers",
      category: "system",
    },
    {
      keys: ["Win", "L"],
      action: "Verrouiller votre ordinateur",
      category: "system",
    },
    {
      keys: ["Alt", "F4"],
      action: "Fermer l'application active ou éteindre le PC",
      category: "system",
    },
  ];

  // Catégories pour les filtres
  const categories = [
    { id: "all", label: "Tous", icon: Keyboard },
    { id: "files", label: "Gestion Fichiers", icon: Files },
    { id: "text", label: "Édition & Texte", icon: Type },
    { id: "system", label: "Système & Windows", icon: Monitor },
  ];

  // Filtrage et recherche dynamique
  const filteredShortcuts = shortcutsData.filter((item) => {
    const matchesCategory =
      activeFilter === "all" || item.category === activeFilter;
    const matchesSearch =
      item.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.keys.some((key) =>
        key.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* En-tête de la page */}
      <div className="space-y-2">
        <h1 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight flex items-center gap-3">
          <Keyboard className="w-8 h-8 text-indigo-500" /> Les Raccourcis
          Clavier Pro
        </h1>
        <p className="text-white/50 text-sm leading-relaxed">
          Gagne du temps au quotidien. Utiliser ces combinaisons te permettra de
          travailler deux fois plus vite sur Word, Excel et ton système Windows
          !
        </p>
      </div>

      {/* Barre de Recherche & Filtres */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center bg-white/5 p-4 rounded-xl border border-white/5">
        {/* Input de recherche */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            placeholder="Rechercher une action (ex: Copier, Gras)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 text-white placeholder-white/30 text-sm rounded-lg pl-10 pr-4 py-2 border border-white/10 focus:outline-hidden focus:border-indigo-500 transition-colors"
          />
        </div>

        {/* Boutons de Filtres */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                  activeFilter === cat.id
                    ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/10"
                    : "bg-transparent text-white/60 border-white/5 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grille des Raccourcis */}
      {filteredShortcuts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredShortcuts.map((shortcut, index) => (
            <div
              key={index}
              className="p-4 rounded-xl border border-white/5 bg-[#0f223f]/20 flex justify-between items-center hover:border-white/10 transition-colors group"
            >
              <div className="space-y-1 flex-1 pr-4">
                <p className="text-sm font-medium text-white">
                  {shortcut.action}
                </p>
                <span className="text-[10px] uppercase font-semibold text-indigo-400/80 tracking-wider">
                  {shortcut.category === "text" && "Traitement de texte"}
                  {shortcut.category === "files" && "Gestion documentaire"}
                  {shortcut.category === "system" && "Navigation Windows"}
                </span>
              </div>

              {/* Rendu visuel des touches */}
              <div className="flex items-center gap-1 shrink-0">
                {/* Rendu visuel des touches mis à jour */}
                <div className="flex items-center gap-1 shrink-0">
                  {shortcut.keys.map((key, kIndex) => (
                    <React.Fragment key={kIndex}>
                      <kbd className="inline-flex items-center justify-center px-2.5 py-1 text-xs font-bold text-slate-200 bg-slate-800 rounded-md border-b-2 border-slate-950 shadow-sm font-mono min-w-8 text-center gap-1">
                        {key === "Win" ? (
                          <FaWindows className="text-sky-400 text-xs" />
                        ) : (
                          key
                        )}
                      </kbd>
                      {kIndex < shortcut.keys.length - 1 && (
                        <span className="text-white/30 text-xs font-bold font-mono">
                          +
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white/5 rounded-xl border border-white/5 text-white/40 text-sm">
          Aucun raccourci ne correspond à votre recherche.
        </div>
      )}

      {/* Petit encadré mémo technique */}
      <div className="p-4 rounded-xl border border-indigo-500/10 bg-indigo-500/5 text-xs text-indigo-300/80 flex items-start gap-2.5">
        <CheckCircle2 className="w-4 h-4 shrink-0 text-indigo-400 mt-0.5" />
        <p>
          <strong>Conseil LearnTech :</strong> Pour que ces touches s'ancrent
          dans vos doigts, forcez-vous à ranger votre souris pendant 15 minutes
          chaque jour lorsque vous rédigez ou organisez vos dossiers !
        </p>
      </div>
    </div>
  );
}
