import React, { useState } from "react";
import { ArrowRight, Users, BookOpen, Award } from "lucide-react";
import "../../css/hero.css";
import ModalInformation from "./ModalInformation";
import { Link } from "react-router-dom";

const stats = [
  { icon: Users, value: "250+", label: "Apprenants accompagnés" },
  { icon: BookOpen, value: "35+", label: "Cours disponibles" },
  { icon: Award, value: "98%", label: "Taux de réussite" },
];

export default function Hero() {
  const [modal, setModal] = useState(false);

  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32 bg-[#050816]">
      {/* Glow */}
      <div className="hero-glow" />

      {/* Bulles animées */}
      <div className="hero-bubbles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-indigo-300 text-sm font-medium mb-6 backdrop-blur-md">
          Bienvenue
        </span>

        {/* Titre */}
        <h1 className="hero-title font-black text-md   md:text-6xl text-white tracking-tight leading-tight">
          Vous débutez en informatique ?
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
            Vous êtes au bon endroit
          </span>
        </h1>

        {/* Texte */}
        <p className="hero-subtitle mt-8 text-md md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          Des formations modernes, simples et pratiques pour apprendre
          l’informatique pas à pas, même si vous partez de zéro.
        </p>

        {/* Boutons */}
        <div className="hero-buttons mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={"/login"}
            className="group flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-all duration-300 shadow-xl shadow-indigo-950/40 cursor-pointer"
          >
            Commencer maintenant
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <button
            onClick={() => setModal(!modal)}
            className="px-7 py-3.5 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md text-white font-medium hover:bg-white/10 transition-all duration-300 cursor-pointer"
          >
            savoir plus
          </button>
        </div>

        {/* Stats */}
        <div className="hero-stats mt-20 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-indigo-500/40 transition-all duration-300"
            >
              {/* Glow card */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-indigo-500/10 to-purple-500/10" />

              <div className="relative z-10 flex flex-col items-center text-center gap-3">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                  <Icon className="w-7 h-7" />
                </div>

                <span className="font-black text-4xl text-white">{value}</span>

                <span className="text-sm text-white/50 leading-relaxed">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modal && (
        <ModalInformation isOpen={modal} onClose={() => setModal(false)} />
      )}
    </section>
  );
}
