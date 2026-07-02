import { useState } from "react";
import { BookOpen, LayoutPanelTop, ListChecks } from "lucide-react";
import WordIntro from "./WordIntro";
import RubanWord from "./RubanWord";
import ExercicesWord from "./ExercicesWord";

const tabs = [
  { id: "intro", label: "Introduction", icon: BookOpen },
  { id: "ruban", label: "Le Ruban", icon: LayoutPanelTop },
  { id: "exercices", label: "Exercices", icon: ListChecks },
];

export default function WordDetail() {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 text-white space-y-6">
      <div className="flex gap-2 border-b border-white/10 pb-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                isActive
                  ? "bg-linear-to-r from-indigo-500 to-purple-500 text-white"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {activeTab === "intro" && <WordIntro />}
      {activeTab === "ruban" && <RubanWord />}
      {activeTab === "exercices" && <ExercicesWord />}

    </div>
  );
}
