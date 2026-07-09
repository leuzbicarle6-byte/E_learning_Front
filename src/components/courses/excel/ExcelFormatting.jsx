import React from "react";
import { Table } from "lucide-react";

export default function ExcelFormatting() {
  return (
    <div className="space-y-4 animate-in fade-in duration-150">
      <div className="flex items-center gap-3 border-b border-white/10 pb-3">
        <Table className="w-6 h-6 text-emerald-400" />
        <h3 className="text-lg font-semibold">
          Mise en forme & Format des données
        </h3>
      </div>
      <p className="text-sm text-white/70">
        Excel ne sert pas uniquement à calculer, il met également en valeur vos
        rapports pour les rendre lisibles par d'autres collaborateurs.
      </p>
      <ul className="space-y-3 text-sm text-white/80 pl-4 list-disc marker:text-emerald-400">
        <li>
          <strong>Format de Nombre (Monétaire, %):</strong> Permet de
          transformer un nombre brut comme{" "}
          <code className="text-emerald-300">5000</code> en{" "}
          <code className="text-emerald-300">5 000 F CFA</code> ou{" "}
          <code className="text-emerald-300">0.15</code> en{" "}
          <code className="text-emerald-300">15%</code> d'un simple clic.
        </li>
        <li>
          <strong>Le Quadrillage vs Bordures :</strong> Par défaut, le
          quadrillage gris que vous voyez à l'écran{" "}
          <span className="text-amber-400 font-semibold">
            n'apparaît pas à l'impression
          </span>
          . Il faut dessiner explicitement vos bordures via l'onglet Accueil.
        </li>
        <li>
          <strong>Le Type de cellule :</strong> Veillez à toujours indiquer à
          Excel si votre cellule contient du texte pur, une date ou une valeur
          financière pour éviter de fausser vos calculs futurs.
        </li>
      </ul>
    </div>
  );
}
