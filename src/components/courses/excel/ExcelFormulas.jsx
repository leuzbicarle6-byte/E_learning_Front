import React, { useState } from "react";
import { Calculator, CheckCircle2, AlertCircle, HelpCircle, ArrowRight } from "lucide-react";

export default function ExcelFormulas() {
  const [val1, setVal1] = useState(1500);
  const [val2, setVal2] = useState(500);
  const [userFormula, setUserFormula] = useState("");

  const cleanFormula = userFormula.trim().toUpperCase().replace(/\s+/g, "");

  // Analyse et évaluation de la formule
  let resultValue = "???";
  let formulaType = null; // 'operator', 'function', or null
  let operationName = "";
  let errorMessage = "";

  if (cleanFormula.startsWith("=")) {
    if (cleanFormula === "=C1+C2") {
      resultValue = val1 + val2;
      formulaType = "operator";
      operationName = "Addition par opérateur (+)";
    } else if (cleanFormula === "=SOMME(C1:C2)") {
      resultValue = val1 + val2;
      formulaType = "function";
      operationName = "Addition par fonction (SOMME)";
    } else if (cleanFormula === "=C1*C2") {
      resultValue = val1 * val2;
      formulaType = "operator";
      operationName = "Multiplication par opérateur (*)";
    } else if (cleanFormula === "=PRODUIT(C1:C2)") {
      resultValue = val1 * val2;
      formulaType = "function";
      operationName = "Multiplication par fonction (PRODUIT)";
    } else if (cleanFormula === "=C1-C2") {
      resultValue = val1 - val2;
      formulaType = "operator";
      operationName = "Soustraction par opérateur (-)";
    } else if (cleanFormula === "=C1/C2") {
      if (val2 !== 0) {
        resultValue = (val1 / val2).toLocaleString();
        formulaType = "operator";
        operationName = "Division par opérateur (/)";
      } else {
        resultValue = "#DIV/0!";
        errorMessage = "Erreur Excel : Division par zéro impossible.";
      }
    } else if (cleanFormula === "=") {
      resultValue = "...";
    } else {
      resultValue = "#NOM?";
      errorMessage = "Formule inconnue. Relisez le tableau des syntaxes valides ci-dessus.";
    }
  }

  const isValid = formulaType !== null;

  return (
    <div className="space-y-6 animate-in fade-in duration-150">
      {/* En-tête de section */}
      <div className="flex items-center gap-3 border-b border-white/10 pb-3">
        <Calculator className="w-6 h-6 text-emerald-400" />
        <div>
          <h3 className="text-lg font-semibold">Les Formules & Fonctions $f(x)$</h3>
          <p className="text-xs text-white/50">Maîtriser les deux syntaxes de calculs sur Excel</p>
        </div>
      </div>
      
      {/* La Règle d'or */}
      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <p className="text-sm text-amber-200/90 leading-relaxed">
          <strong>La règle d'or absolue :</strong> Tout calcul ou traitement doit impérativement commencer par le signe ÉGAL (<span className="text-amber-400 font-mono font-bold">=</span>). Sans lui, Excel écrit du texte sans rien calculer.
        </p>
      </div>

      {/* Tableau comparatif interactif */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-white/90">Les deux manières d'écrire une opération :</h4>
        <div className="overflow-hidden border border-white/10 rounded-xl bg-white/5">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-white/10 text-white/60 font-medium">
                <th className="p-3">Opération</th>
                <th className="p-3">Méthode 1 : Opérateur direct</th>
                <th className="p-3">Méthode 2 : Fonction native $f(x)$</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-white/80">
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold text-emerald-400">Addition</td>
                <td className="p-3 font-mono text-emerald-300">=C1+C2</td>
                <td className="p-3 font-mono text-emerald-300">=SOMME(C1:C2)</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold text-sky-400">Multiplication</td>
                <td className="p-3 font-mono text-sky-300">=C1*C2</td>
                <td className="p-3 font-mono text-sky-300">=PRODUIT(C1:C2)</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold text-amber-400">Soustraction</td>
                <td className="p-3 font-mono text-amber-300">=C1-C2</td>
                <td className="p-3 text-white/40 italic">Pas de fonction requise</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3 font-semibold text-purple-400">Division</td>
                <td className="p-3 font-mono text-purple-300">=C1/C2</td>
                <td className="p-3 text-white/40 italic">Pas de fonction requise</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Le Conseil Pro (SOMME vs +) */}
      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70 space-y-1.5">
        <span className="font-bold text-white flex items-center gap-1">
          <HelpCircle className="w-3.5 h-3.5 text-emerald-400" /> Pourquoi utiliser une fonction ?
        </span>
        <p className="leading-relaxed">
          Pour deux cellules, taper <code className="text-emerald-300">=C1+C2</code> va très vite. Mais si vous avez 100 lignes à additionner, écrire <code className="text-emerald-300">=C1+C2+C3+...</code> est interminable. La fonction résout cela en une seconde : <code className="text-emerald-300 font-bold">=SOMME(C1:C100)</code>. Les deux-points (<span className="text-emerald-400 font-bold">:</span>) signifient "jusqu'à".
        </p>
      </div>

      {/* --- GRILLE EXCEL INTERACTIVE --- */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 font-mono text-xs max-w-xl mx-auto shadow-2xl">
        <div className="bg-emerald-600 text-white px-3 py-1.5 text-[10px] uppercase font-bold rounded-t -mt-5 -mx-5 mb-4 tracking-wider flex justify-between items-center">
          <span>Interface Excel Interactive (Lignes 1 & 2)</span>
          <span className="text-white/50 text-[9px] font-sans">LearnTech Core Engine</span>
        </div>

        {/* Tableau / Feuille de calcul */}
        <table className="w-full border-collapse border border-white/10 text-center text-white/80">
          <thead>
            <tr className="bg-white/5 text-white/40 text-[11px]">
              <th className="border border-white/10 p-1.5 bg-white/5 w-10"></th>
              <th className="border border-white/10 p-1.5">C (Valeurs d'études)</th>
              <th className="border border-white/10 p-1.5 bg-emerald-950/30 text-emerald-400 font-bold">D (Résultat attendu)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-white/5 border border-white/10 p-1.5 font-bold text-white/30">1</td>
              <td className="border border-white/10 p-2">
                <input 
                  type="number" 
                  value={val1} 
                  onChange={(e) => setVal1(Number(e.target.value))}
                  className="bg-white/5 hover:bg-white/10 rounded px-2 py-1 w-28 text-center focus:outline-none focus:ring-1 focus:ring-emerald-500 text-white font-bold transition-all"
                />
              </td>
              <td rowSpan="2" className={`border border-white/10 p-4 font-bold text-base transition-all vertical-middle ${isValid ? "bg-emerald-500/10 text-emerald-400" : "text-white/20 bg-black/20"}`}>
                {resultValue}
              </td>
            </tr>
            <tr>
              <td className="bg-white/5 border border-white/10 p-1.5 font-bold text-white/30">2</td>
              <td className="border border-white/10 p-2">
                <input 
                  type="number" 
                  value={val2} 
                  onChange={(e) => setVal2(Number(e.target.value))}
                  className="bg-white/5 hover:bg-white/10 rounded px-2 py-1 w-28 text-center focus:outline-none focus:ring-1 focus:ring-emerald-500 text-white font-bold transition-all"
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Barre de formule FX */}
        <div className="mt-5 space-y-3 bg-black/30 p-3.5 rounded-xl border border-white/5 font-sans">
          <div className="flex items-center gap-2 border-b border-white/5 pb-2">
            <span className="italic font-serif font-bold text-white/40 text-sm select-none">fx</span>
            <input
              type="text"
              placeholder="Cliquez ici pour écrire (=C1+C2 ou =SOMME(C1:C2)...)"
              value={userFormula}
              onChange={(e) => setUserFormula(e.target.value)}
              className="bg-transparent border-none rounded w-full focus:outline-none text-white font-mono text-sm placeholder:text-white/20 tracking-wide uppercase"
            />
          </div>

          {/* Inspecteur de formule en temps réel */}
          <div className="min-h-[32px] flex items-center justify-between text-[11px]">
            {isValid ? (
              <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 animate-fade-in">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>
                  <strong>Syntaxe valide :</strong> {operationName}
                </span>
              </div>
            ) : userFormula.trim() !== "" ? (
              <div className="flex items-center gap-2 text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-md border border-rose-500/20">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errorMessage || "N'oubliez pas le '=' au début du calcul."}</span>
              </div>
            ) : (
              <p className="text-white/40 italic flex items-center gap-1">
                À vous de jouer ! Entrez une formule ou une fonction pour fusionner les lignes 1 et 2.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}