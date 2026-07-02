import React from "react";

const COLOR_MAP = {
  indigo: {
    text: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    chip: "bg-indigo-500/20 text-indigo-300",
    ring: "bg-indigo-500/20",
  },
  purple: {
    text: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    chip: "bg-purple-500/20 text-purple-300",
    ring: "bg-purple-500/20",
  },
  emerald: {
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    chip: "bg-emerald-500/20 text-emerald-300",
    ring: "bg-emerald-500/20",
  },
  amber: {
    text: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    chip: "bg-amber-500/20 text-amber-300",
    ring: "bg-amber-500/20",
  },
  teal: {
    text: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
    chip: "bg-teal-500/20 text-teal-300",
    ring: "bg-teal-500/20",
  },
};

export default function SlideContent({ slide }) {
  const c = COLOR_MAP[slide.color];
  const Icon = slide.icon;

  if (slide.type === "intro" || slide.type === "summary") {
    return (
      <div className="space-y-4 text-center max-w-lg mx-auto">
        <div
          className={`w-14 h-14 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center mx-auto`}
        >
          <Icon className={`w-7 h-7 ${c.text}`} />
        </div>
        <h2 className="text-xl font-bold text-white">{slide.title}</h2>
        <p className="text-sm text-white/75 leading-relaxed">{slide.text}</p>
        {slide.image && (
          <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-900 border border-white/5">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover opacity-60"
              loading="lazy"
            />
          </div>
        )}
      </div>
    );
  }

  if (slide.type === "process") {
    return (
      <div className="space-y-4 text-center max-w-lg mx-auto">
        <span
          className={`text-[10px] font-bold uppercase tracking-wider ${c.text}`}
        >
          Étape {slide.number} sur 3
        </span>
        <div
          className={`w-16 h-16 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center mx-auto`}
        >
          <Icon className={`w-8 h-8 ${c.text}`} />
        </div>
        <h2 className="text-xl font-bold text-white">{slide.title}</h2>
        <p className="text-sm text-white/75 leading-relaxed">{slide.text}</p>
        {slide.note && (
          <p className="text-xs text-amber-300 bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl text-left">
            {slide.note}
          </p>
        )}
      </div>
    );
  }

  if (slide.type === "category") {
    return (
      <div className="space-y-4 text-center max-w-lg mx-auto">
        <div
          className={`w-14 h-14 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center mx-auto`}
        >
          <Icon className={`w-7 h-7 ${c.text}`} />
        </div>
        <h2 className="text-xl font-bold text-white">{slide.title}</h2>
        <p className="text-sm text-white/75 leading-relaxed">{slide.text}</p>
      </div>
    );
  }

  if (slide.type === "card") {
    return (
      <div className="max-w-md mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2">
          <Icon className={`w-4 h-4 ${c.text}`} />
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${c.chip}`}
          >
            {slide.badge}
          </span>
        </div>
        <h2 className="text-lg font-bold text-white text-center">
          {slide.title}
        </h2>
        {slide.image && (
          <div className="h-60 rounded-xl overflow-hidden bg-slate-900 border border-white/5">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-contain opacity-70"
              loading="lazy"
            />
          </div>
        )}
        <p className="text-xs text-white/70 leading-relaxed text-center">
          {slide.text}
        </p>
        {slide.note && (
          <p className="text-[11px] text-white/50 bg-white/5 p-2.5 rounded-lg">
            📌 {slide.note}
          </p>
        )}
      </div>
    );
  }

  if (slide.type === "choice") {
    return (
      <div className="max-w-md mx-auto space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Icon className={`w-5 h-5 ${c.text}`} />
          <h2 className="text-lg font-bold text-white text-center">
            {slide.title}
          </h2>
        </div>
        <div className="space-y-2">
          {slide.options.map((opt, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl border ${c.border} ${c.bg} space-y-1`}
            >
              <p className="text-xs text-white/80">{opt.label}</p>
              <p className={`text-sm font-bold ${c.text}`}>{opt.result}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slide.type === "warning") {
    return (
      <div className="max-w-md mx-auto space-y-3 text-center">
        <div
          className={`w-14 h-14 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center mx-auto`}
        >
          <Icon className={`w-7 h-7 ${c.text}`} />
        </div>
        <h2 className="text-lg font-bold text-white">{slide.title}</h2>
        <p className="text-sm text-white/75 leading-relaxed">{slide.text}</p>
      </div>
    );
  }

  return null;
}
