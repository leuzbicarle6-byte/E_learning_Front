import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative bg-slate-950 pt-28 pb-16 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-175 bg-indigo-600/20 blur-[130px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <span className="inline-block text-sm font-medium text-indigo-400 bg-indigo-500/10 px-4 py-1 rounded-full mb-5">
          À propos de LearnTech
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          L'informatique expliquée{" "}
          <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            simplement, en français
          </span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          LearnTech est née d'un constat simple : beaucoup de débutants abandonnent
          l'informatique par manque d'un accompagnement clair, en français, adapté
          à leur rythme. On a voulu changer ça.
        </p>
      </motion.div>
    </section>
  );
}