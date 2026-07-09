import React from "react";
import { Laptop, MonitorSmartphone, CheckCircle2, XCircle, ArrowRight } from "lucide-react";

export default function FixeVsPortable({ nextTab }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-white space-y-6">
      <div>
        <h2 className="text-xl font-bold">
          🏢 Fixe ou 🎒 Portable : Quelle différence ?
        </h2>
        <p className="text-white/60 text-sm mt-1">
          Bien qu'ils fassent le même travail, leur structure change
          complètement notre façon de les utiliser.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ORDINATEUR FIXE */}
        <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-lg">
                <MonitorSmartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">
                L'Ordinateur Fixe
              </h3>
            </div>
            <p className="text-sm text-white/70 mb-4">
              Tous les éléments sont séparés : l'écran, le clavier et la souris
              se branchent sur une grande **tour (l'unité centrale)**.
            </p>
          </div>

          <div className="space-y-2 text-sm border-t border-white/10 pt-4">
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span className="text-white/80">
                Évolutif (on peut changer les pièces)
              </span>
            </div>
            <div className="flex items-center gap-2 text-red-400">
              <XCircle className="w-4 h-4 shrink-0" />
              <span className="text-white/80">
                Lourd et bloqué sur un bureau
              </span>
            </div>
          </div>
        </div>

        {/* ORDINATEUR PORTABLE */}
        <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-lg">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-amber-300">
                L'Ordinateur Portable
              </h3>
            </div>
            <p className="text-sm text-white/70 mb-4">
              Tout est fusionné dans un seul bloc léger (écran, clavier,
              batterie et composants internes) pour être emporté partout.
            </p>
          </div>

          <div className="space-y-2 text-sm border-t border-white/10 pt-4">
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span className="text-white/80">
                Mobile et fonctionne sur batterie
              </span>
            </div>
            <div className="flex items-center gap-2 text-red-400">
              <XCircle className="w-4 h-4 shrink-0" />
              <span className="text-white/80">
                Difficile à réparer ou à améliorer
              </span>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          nextTab();

          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1.5 text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl transition-all active:scale-95 cursor-pointer shadow-md shadow-indigo-600/10 mt-4"
      >
        Tab suivant <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
