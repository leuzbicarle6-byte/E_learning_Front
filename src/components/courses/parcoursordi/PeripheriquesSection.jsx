import React from "react";
import {
  Keyboard,
  MousePointer,
  Monitor,
  Printer,
  Volume2,
} from "lucide-react";

const peripherals = [
  {
    icon: Keyboard,
    title: "Clavier",
    type: "Entrée",
    desc: "Envoie des caractères et des commandes à l'ordinateur.",
  },
  {
    icon: MousePointer,
    title: "Souris",
    type: "Entrée",
    desc: "Envoie les mouvements et les clics pour naviguer.",
  },
  {
    icon: Monitor,
    title: "Écran",
    type: "Sortie",
    desc: "Reçoit les signaux vidéo pour afficher l'interface.",
  },
  {
    icon: Printer,
    title: "Imprimante",
    type: "Sortie",
    desc: "Reçoit les documents pour les transférer sur papier.",
  },
  {
    icon: Volume2,
    title: "Haut-parleurs",
    type: "Sortie", // On reste strictement sur Entrée ou Sortie
    desc: "Reçoivent les signaux audio pour diffuser du son.",
  },
];

export default function PeripheriquesSection() {
  return (
    <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10">
      <h2 className="text-xl font-bold text-white mb-4">
        🔌 Les périphériques en résumé
      </h2>
      <p className="text-white/70 mb-6">
        Il existe deux types de périphériques : ceux qui envoient des
        informations (Entrée) et ceux qui en reçoivent (Sortie).
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {peripherals.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon className="w-5 h-5 text-indigo-400" />
                <h3 className="font-semibold text-white">{item.title}</h3>
                <span
                  className={`text-xs px-2 py-1 rounded font-medium ${
                    item.type === "Entrée"
                      ? "bg-green-500/20 text-green-300"
                      : "bg-blue-500/20 text-blue-300"
                  }`}
                >
                  {item.type}
                </span>
              </div>
              <p className="text-sm text-white/60">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
