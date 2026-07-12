import React, { useState } from "react";
import { Monitor, FolderTree, FileText } from "lucide-react";
import SystemInterface from "./SystemInterface";
import SystemFiles from "./SystemFiles";
import SystemDocuments from "./SystemDocuments";

export default function SystemDetail() {
  const [activeTab, setActiveTab] = useState("interface");

  const tabs = [
    { id: "interface", label: "1. L'Environnement & Bureau", icon: Monitor },
    { id: "files", label: "2. Fichiers & Dossiers", icon: FolderTree },
    { id: "documents", label: "3. Création de Documents", icon: FileText },
  ];

  return (
    <div className="space-y-6">
      {/* Barre de navigation des onglets */}
      <div className="flex gap-2 p-1 bg-white/5 border border-white/10 rounded-xl">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Zone d'affichage du composant enfant sélectionné */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl text-white space-y-6">
        {activeTab === "interface" && <SystemInterface />}
        {activeTab === "files" && <SystemFiles />}
        {activeTab === "documents" && <SystemDocuments />}
      </div>
    </div>
  );
}