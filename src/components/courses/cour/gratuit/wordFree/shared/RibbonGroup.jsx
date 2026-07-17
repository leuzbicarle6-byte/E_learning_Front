import React from "react";
import ToolRow from "./ToolRow";
import { colorMap } from "../colorMap";

export default function RibbonGroup({ group }) {
  const colors = colorMap[group.color] || colorMap.purple;
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <span className={`w-2.5 h-2.5 rounded-full ${colors.dot}`} />
        <p className="text-xs uppercase tracking-wide text-slate-400 font-semibold">
          {group.title}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {group.tools.map((tool) => (
          <ToolRow key={tool.name} tool={tool} color={group.color} />
        ))}
      </div>
    </div>
  );
}