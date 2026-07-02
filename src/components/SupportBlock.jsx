import React from "react";
import { Video, MessageSquare } from "lucide-react";

export default function SupportBlock({ realCourse }) {
  // Numéro WhatsApp Infosits
  const whatsappNumber = "221771341649";

  // Message pré-rempli haut de gamme
  const message = encodeURIComponent(
    `Bonjour, je viens de valider avec succès le module "${realCourse?.title || "Cours"}". J'aimerais planifier ma session de démonstration pratique d'une heure sur Google Meet. Merci !`,
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-5 p-6 rounded-2xl bg-linear-to-br from-indigo-500/10 via-purple-500/5 to-slate-950 border border-indigo-500/20 shadow-xl shadow-indigo-950/20">
        {/* Icône Caméra / Meet pour marquer le coup */}
        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center shrink-0 border border-indigo-500/30 animate-pulse">
          <Video className="w-5 h-5 text-indigo-400" />
        </div>

        {/* Texte Explicatif Style Académique / Premium */}
        <div className="flex-1 space-y-1">
          <h4 className="text-xs font-bold text-indigo-400 tracking-wider uppercase">
            Prochaine étape : Démonstration en direct
          </h4>
          <p className="text-xs text-white/80 leading-relaxed max-w-2xl">
            Félicitations pour la complétion de ce module ! Pour consolider vos
            compétences, nous vous invitons à une **session de démonstration
            pratique d'une heure sur Google Meet**. Ce sera l'occasion
            d'échanger en direct avec votre formateur et de valider vos acquis.
          </p>
        </div>

        {/* Bouton d'action pro */}
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-auto px-5 py-3 bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-bold text-xs rounded-xl transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer shrink-0 border border-emerald-500/30 tracking-wide"
      >
        <MessageSquare className="w-4 h-4" />
        Planifier ma session Meet
      </a>
    </>
  );
}
