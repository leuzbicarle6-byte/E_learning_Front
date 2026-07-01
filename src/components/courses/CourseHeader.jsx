import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function CourseHeader({ title, category }) {
  return (
    <div className="space-y-4">
      <Link
        to="/user/courses"
        className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Retour au catalogue
      </Link>

      <div className="pb-4 border-b border-white/5">
        <h1 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-white mb-1">
          {title}
        </h1>
        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
          {category || "Module Technique"}
        </span>
      </div>
    </div>
  );
}