import React from "react";
import * as Icons from "lucide-react";
import { colorMap } from "../colorMap";

export default function ToolRow({ tool, color = "purple" }) {
  const colors = colorMap[color] || colorMap.purple;
  const Icon = Icons[tool.icon] || Icons.HelpCircle;
  return (
    <div
      className={`flex items-start gap-3 p-3 rounded-xl border ${colors.border} ${colors.bg}`}
    >
      <div className="w-9 h-9 rounded-lg bg-slate-900/60 flex items-center justify-center shrink-0">
        <Icon className={`w-5 h-5 ${colors.text}`} />
      </div>
      <div>
        <p className="text-white text-sm font-medium">{tool.name}</p>
        <p className="text-slate-400 text-xs mt-0.5">{tool.desc}</p>
      </div>
    </div>
  );
}
