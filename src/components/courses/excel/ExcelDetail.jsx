import React, { useState } from "react";
import { Grid, Calculator, Table } from "lucide-react";
import ExcelInterface from "./ExcelInterface";
import ExcelFormulas from "./ExcelFormulas";
import ExcelFormatting from "./ExcelFormatting";

export default function ExcelDetail() {
  const [activeTab, setActiveTab] = useState("interface");

  const tabs = [
    { id: "interface", label: "1. L'Interface", icon: Grid },
    { id: "formulas", label: "2. Formules & Fonctions", icon: Calculator },
    { id: "formatting", label: "3. Tableaux & Formats", icon: Table },
  ];

  return (
    <div className="space-y-6">
      {/* Barre de navigation des onglets */}
      <div className="flex flex-wrap gap-2 p-1 bg-white/5 border border-white/10 rounded-xl">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${
                activeTab === tab.id
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Zone d'affichage du composant sélectionné */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl space-y-6">
        {activeTab === "interface" && <ExcelInterface />}
        {activeTab === "formulas" && <ExcelFormulas />}
        {activeTab === "formatting" && <ExcelFormatting />}
      </div>
    </div>
  );
}