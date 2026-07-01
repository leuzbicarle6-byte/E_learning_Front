import React from "react";

const DOT_COLOR = {
  indigo: "bg-indigo-500",
  purple: "bg-purple-400",
  emerald: "bg-emerald-400",
  amber: "bg-amber-400",
  teal: "bg-teal-400",
};

export default function SlideDots({ slides, current, onSelect }) {
  return (
    <div className="flex items-center justify-center gap-1.5 py-3 flex-wrap px-4">
      {slides.map((slide, i) => (
        <button
          key={slide.id}
          onClick={() => onSelect(i)}
          aria-label={`Aller à l'étape ${i + 1}`}
          className={`h-1.5 rounded-full transition-all cursor-pointer ${
            i === current
              ? `w-6 ${DOT_COLOR[slide.color]}`
              : "w-1.5 bg-white/15 hover:bg-white/30"
          }`}
        />
      ))}
    </div>
  );
}
