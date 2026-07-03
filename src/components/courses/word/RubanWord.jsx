import { useState } from "react";
import { rubanGroups } from "./wordData";

// Dictionnaire pour gérer dynamiquement tes couleurs Tailwind
const colorMap = {
  rose: "border-rose-500/20 bg-rose-500/5 text-rose-400 dynamic-active:bg-rose-600",
  sky: "border-sky-500/20 bg-sky-500/5 text-sky-400 dynamic-active:bg-sky-600",
  violet:
    "border-violet-500/20 bg-violet-500/5 text-violet-400 dynamic-active:bg-violet-600",
  emerald:
    "border-emerald-500/20 bg-emerald-500/5 text-emerald-400 dynamic-active:bg-emerald-600",
};

export default function RubanWord() {
  const [activeGroup, setActiveGroup] = useState(rubanGroups[0].id);

  const currentGroup = rubanGroups.find((g) => g.id === activeGroup);
  const colorStyles = colorMap[currentGroup.couleur] || colorMap.sky;

  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h2 className="text-xl font-bold text-white mb-2">
          Explore le Ruban Word
        </h2>
        <p className="text-sm text-white/60">
          Le ruban est organisé en onglets. Clique sur un onglet pour découvrir
          ses fonctionnalités fondamentales :
        </p>
      </div>

      {/* Onglets du simulateur */}
      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
        <div className="flex bg-white/5 border-b border-white/10 px-2 pt-2 gap-1 overflow-x-auto scrollbar-none">
          {rubanGroups.map((group) => {
            const isActive = activeGroup === group.id;
            // Choix de la couleur au survol/actif selon les données
            const baseColor =
              group.couleur === "rose"
                ? "hover:text-rose-400"
                : group.couleur === "sky"
                  ? "hover:text-sky-400"
                  : group.couleur === "violet"
                    ? "hover:text-violet-400"
                    : "hover:text-emerald-400";

            return (
              <button
                key={group.id}
                onClick={() => setActiveGroup(group.id)}
                className={`px-4 py-2.5 text-xs font-semibold rounded-t-lg transition whitespace-nowrap ${
                  isActive
                    ? group.couleur === "rose"
                      ? "bg-rose-600 text-white"
                      : group.couleur === "sky"
                        ? "bg-sky-600 text-white"
                        : group.couleur === "violet"
                          ? "bg-violet-600 text-white"
                          : "bg-emerald-600 text-white"
                    : `text-white/40 ${baseColor} hover:bg-white/5`
                }`}
              >
                {group.titre}
              </button>
            );
          })}
        </div>

        {/* Contenu de l'onglet actif */}
        <div className="p-5 space-y-4">
          <div
            className={`border p-4 rounded-xl ${colorStyles.split(" ")[0]} ${colorStyles.split(" ")[1]}`}
          >
            <h3 className={`text-lg font-bold ${colorStyles.split(" ")[2]}`}>
              {currentGroup.titre}
            </h3>
            <p className="text-sm text-white/70 mt-1">
              {currentGroup.description}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-wider">
              Les Outils inclus :
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentGroup.outils.map((outil, idx) => {
                const OutilIcon = outil.icon;
                return (
                  <div
                    key={idx}
                    className="flex gap-3 bg-white/5 p-3 rounded-lg border border-white/5 items-start hover:border-white/10 transition"
                  >
                    <div
                      className={`p-2 rounded-lg bg-white/5 ${colorStyles.split(" ")[2]}`}
                    >
                      <OutilIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-white/90">
                        {outil.nom}
                      </h5>
                      <p className="text-xs text-white/50 mt-0.5">
                        {outil.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
