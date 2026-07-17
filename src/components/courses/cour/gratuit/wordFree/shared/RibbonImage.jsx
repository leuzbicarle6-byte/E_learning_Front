import React, { useState } from "react";
import { ImageOff } from "lucide-react";

export default function RibbonImage({ src, label, onClick }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="w-full aspect-[4/3] rounded-lg border border-dashed border-slate-700 bg-slate-950 flex flex-col items-center justify-center gap-2 text-center px-4">
        <ImageOff className="w-6 h-6 text-slate-600" />
        <p className="text-slate-500 text-xs">
          Capture manquante pour <span className="text-slate-400 font-medium">{label}</span>
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`Ruban Word — onglet ${label}`}
      onError={() => setFailed(true)}
      onClick={onClick}
      className="w-full aspect-[4/3] object-cover rounded-lg border border-slate-700 cursor-pointer hover:border-indigo-500 transition-colors"
    />
  );
}