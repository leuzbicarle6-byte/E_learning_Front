import React from "react";
import { X, Sparkles, Laptop, Smartphone, BookOpen } from "lucide-react";

export default function ModalInformation({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-[92%] max-w-2xl rounded-3xl bg-[#0b0f1a] border border-white/10 shadow-2xl p-6 md:p-10 text-white animate-fadeIn">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-indigo-400" />
          </div>

          <h2 className="text-xl md:text-2xl font-bold">Présentation</h2>
        </div>

        {/* Content */}
        <div className="space-y-5 text-white/70 leading-relaxed text-sm md:text-base">
          <p className="text-white font-medium text-base md:text-lg">
            Bonjour 👋, je suis{" "}
            <span className="text-indigo-400 font-bold">L_Piod</span>
          </p>

          <p>
            J’ai conçu cette application pour vous aider à développer vos
            compétences en informatique.
          </p>

          <div className="flex items-center gap-2 text-white">
            <Laptop className="w-4 h-4 text-indigo-400" />
            <span>Bureautique & maîtrise de l’ordinateur</span>
          </div>

          <div className="flex items-center gap-2 text-white">
            <Smartphone className="w-4 h-4 text-indigo-400" />
            <span>Utilisation avancée du téléphone</span>
          </div>

          <div className="flex items-center gap-2 text-white">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span>Approfondissement du monde digital</span>
          </div>

          <p>
            Des formations en ligne et en présentiel sont disponibles pour vous
            accompagner étape par étape.
          </p>

          <p className="text-white font-semibold">
            Connectez-vous pour accéder à toutes les fonctionnalités et
            commencer votre apprentissage.
          </p>
        </div>

        {/* Footer action */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-medium"
          >
            Compris 👍
          </button>
        </div>
      </div>
    </div>
  );
}
