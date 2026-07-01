import React from "react";
import { ChevronDown } from "lucide-react";

const COLOR_MAP = {
  indigo: {
    text: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    chip: "bg-indigo-500/20 text-indigo-300",
  },
  amber: {
    text: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    chip: "bg-amber-500/20 text-amber-300",
  },
  purple: {
    text: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    chip: "bg-purple-500/20 text-purple-300",
  },
  emerald: {
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    chip: "bg-emerald-500/20 text-emerald-300",
  },
  teal: {
    text: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
    chip: "bg-teal-500/20 text-teal-300",
  },
};

export default function PartCard({ part, isOpen, onToggle }) {
  const c = COLOR_MAP[part.color];
  const Icon = part.icon;

  return (
    <div
      className={`rounded-xl border ${isOpen ? c.border : "border-white/5"} bg-white/2 overflow-hidden transition-colors`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 p-4 text-left cursor-pointer hover:bg-white/2 transition-colors"
      >
        <div
          className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center shrink-0`}
        >
          <Icon className={`w-5 h-5 ${c.text}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="text-sm font-bold text-white">{part.titre}</h4>
            <span
              className={`text-[9px] px-2 py-0.5 rounded-md font-bold uppercase ${c.chip}`}
            >
              {part.role}
            </span>
          </div>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-white/40 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="px-4 pb-4 space-y-3 animate-in fade-in duration-150">
          <p className={`text-xs italic ${c.text} pl-1 border-l-2 ${c.border}`}>
            💭 {part.analogie}
          </p>
          <p className="text-xs text-white/70 leading-relaxed">
            {part.description}
          </p>
          <p className="text-[11px] text-white/50 bg-white/5 p-2.5 rounded-lg">
            📌 <strong>À retenir :</strong> {part.aRetenir}
          </p>
        </div>
      )}
    </div>
  );
}
