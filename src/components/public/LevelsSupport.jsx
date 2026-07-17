import React from "react";
import { GraduationCap, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { levelsData } from "./levelsData";

export default function LevelsSupport() {
  return (
    <section className="relative bg-slate-950 py-20 px-6 overflow-hidden">
      {/* halo décoratif */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center mb-14">
        <span className="inline-block text-sm font-medium text-indigo-400 bg-indigo-500/10 px-4 py-1 rounded-full mb-4">
          Pour tous les niveaux
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Débutant ou déjà à l'aise ?{" "}
          <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            LearnTech s'adapte à toi
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Des parcours structurés du premier clic à la maîtrise complète, avec
          un accompagnement disponible à chaque étape.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {" "}
        {levelsData.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group relative rounded-2xl overflow-hidden h-80 border border-white/10"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-indigo-950/30" />

            <div className="relative h-full flex flex-col justify-end p-6">
              <div className="w-11 h-11 rounded-xl bg-indigo-500/20 backdrop-blur-sm flex items-center justify-center mb-3 border border-indigo-400/30">
                <item.icon className="w-5 h-5 text-indigo-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
