import React, { useState } from "react";
import ParcoursOrdinateur from "../courses/parcoursordi/ParcoursOrdinateur";
import PeripheriquesSection from "../courses/parcoursordi/PeripheriquesSection";
import UniteCentrale from "../courses/parcoursordi/uc/UniteCentral"; // Corrigé l'orthographe et le chemin potentiel
import FixeVsPortable from "./parcoursordi/uc/FixeVsPortable";
import Raccourcies from "./parcoursordi/uc/Raccourcies";

export default function TabMere() {
  const [activeTab, setActiveTab] = useState("intro");

  const tabs = [
    { id: "intro", label: "Introduction" },
    { id: "peripheriques", label: "Périphériques" },
    { id: "uc", label: "Unité Centrale" },
    { id: "difference", label: "FixeVsPortable" },
    { id: "raccourcie", label: "Raccourcies" },
  ];

  return (
    <div className="w-full">
      {/* NAV TABS */}
      <div className="flex items-center gap-2 p-2 bg-white/5 border border-white/10 rounded-xl mb-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-indigo-600 text-white shadow-md"
                : "text-white/60 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="rounded-2xl">
        {activeTab === "intro" && <ParcoursOrdinateur />}

        {activeTab === "peripheriques" && <PeripheriquesSection />}

        {activeTab === "uc" && <UniteCentrale />}

        {activeTab === "difference" && <FixeVsPortable />}

        {activeTab === "raccourcie" && <Raccourcies />}

        {activeTab === "autre" && (
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-white/70 text-sm">
            🚧 Section en construction... bientôt du lourd ici.
          </div>
        )}
      </div>
    </div>
  );
}
