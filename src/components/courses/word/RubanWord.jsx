import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { rubanGroups } from "./wordData";
import RubanGroup from "./RubanGroup";

const activeColorMap = {
  rose: "bg-rose-500 text-white",
  sky: "bg-sky-500 text-white",
  violet: "bg-violet-500 text-white",
  emerald: "bg-emerald-500 text-white",
};

export default function RubanWord() {
  const [activeTab, setActiveTab] = useState(rubanGroups[0].id);
  const currentGroupe = rubanGroups.find((g) => g.id === activeTab);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-white">Le ruban de Word</h2>
        <p className="text-sm text-white/60">
          On va voir seulement les outils que tu utiliseras le plus souvent.
        </p>
      </div>

      {/* Barre de tabs façon ruban Word */}
      <div className="flex gap-1 border-b border-white/10 overflow-x-auto">
        {rubanGroups.map((groupe) => {
          const isActive = activeTab === groupe.id;
          return (
            <button
              key={groupe.id}
              onClick={() => setActiveTab(groupe.id)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg whitespace-nowrap transition ${
                isActive
                  ? activeColorMap[groupe.couleur]
                  : "text-white/50 hover:text-white/80 hover:bg-white/5"
              }`}
            >
              {groupe.titre}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.15 }}
        >
          <RubanGroup groupe={currentGroupe} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
