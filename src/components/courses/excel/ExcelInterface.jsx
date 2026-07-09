import React from "react";
import { FileSpreadsheet } from "lucide-react";

export default function ExcelInterface() {
  return (
    <div className="space-y-4 animate-in fade-in duration-150">
      <div className="flex items-center gap-3 border-b border-white/10 pb-3">
        <FileSpreadsheet className="w-6 h-6 text-emerald-400" />
        <h3 className="text-lg font-semibold">Comprendre l'environnement Excel</h3>
      </div>
      <p className="text-sm text-white/70 leading-relaxed">
        Microsoft Excel est un tableur. Contrairement à Word qui structure du texte continu, Excel organise vos informations dans une grille intelligente composée de lignes et de colonnes.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {[
          { title: "Les Colonnes", desc: "Identifiées par des LETTRES (A, B, C...). Elles définissent l'axe vertical de votre feuille." },
          { title: "Les Lignes", desc: "Identifiées par des CHIFFRES (1, 2, 3...). Elles définissent l'axe horizontal." },
          { title: "La Cellule", desc: "L'intersection exacte d'une ligne et d'une colonne (ex: A1, B12). C'est la boîte de base où l'on écrit." },
        ].map((item, i) => (
          <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all">
            <h4 className="text-sm font-semibold text-emerald-400 mb-1">{item.title}</h4>
            <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}