import React from "react";

import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { GraduationCap } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import { FaDiscord, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a192f] border-t border-white/5 text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* GRILLE PRINCIPALE */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-white/5">
          {/* 1. Colonne Marque / Logo */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-linear-to-tr from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-900/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                Learn
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                  Tech
                </span>
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed">
              Propulsez vos compétences tech au niveau supérieur grâce à des
              formations interactives de pointe.
            </p>
          </div>

          {/* 2. Navigation Plateforme */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Plateforme
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/login"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Tous les cours
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-indigo-400 transition-colors"
                >
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Légal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Légal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="#"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Communauté & Réseaux Sociaux */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Communauté
            </h4>
            <p className="text-sm text-white/50">
              Rejoignez-nous sur nos différents réseaux pour échanger.
            </p>

            {/* Icônes Réseaux Sociaux */}
            <div className="flex items-center gap-4 pt-1">
              {/* WhatsApp */}
              <a
                href="https://wa.me/XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-green-400 hover:bg-green-500/10 hover:border-green-500/20 transition-all cursor-pointer"
                title="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-pink-400 hover:bg-pink-500/10 hover:border-pink-500/20 transition-all cursor-pointer"
                title="Instagram"
              >
                <BsInstagram className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500/20 transition-all cursor-pointer"
                title="LinkedIn"
              >
                <LiaLinkedin className="w-5 h-5" />
              </a>

              {/* Discord */}
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-blurple hover:text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500/20 transition-all cursor-pointer"
                title="Discord"
              >
                <FaDiscord className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* BAS DU FOOTER */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-white/40">
          <p>© {currentYear} LearnTech. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Développé par{" "}
            <span className="text-white/60 font-medium hover:text-indigo-400 transition-colors cursor-pointer">
              Piod.js
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
