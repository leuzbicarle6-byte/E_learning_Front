import React, { useState } from "react";
import { HardDrive } from "lucide-react";
import { PARTS } from "./data";
import PartCard from "./PartCard";

export default function UniteCentrale() {
  const [openId, setOpenId] = useState(PARTS[0].id);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden shadow-2xl">
      <div className="bg-linear-to-r from-amber-600/20 via-orange-600/10 to-transparent p-4 border-b border-white/5 flex items-center gap-3">
        <div className="p-2 bg-amber-500/20 rounded-lg text-amber-400">
          <HardDrive className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
            Dans l'unité centrale : "Le Cerveau"
          </h4>
          <p className="text-xs text-white/60">
            Ouvre chaque pièce pour découvrir à quoi elle sert, avec une image
            simple pour t'aider à comprendre.
          </p>
        </div>
      </div>

      <div className="p-6 space-y-3">
        {PARTS.map((part) => (
          <PartCard
            key={part.id}
            part={part}
            isOpen={openId === part.id}
            onToggle={() => toggle(part.id)}
          />
        ))}
      </div>
    </div>
  );
}
