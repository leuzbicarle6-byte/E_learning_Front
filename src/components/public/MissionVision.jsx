import React from "react";
import { Target, Eye } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: Target,
    title: "Notre mission",
    text: "Rendre l'informatique accessible à toute personne motivée, quel que soit son point de départ, à travers des formations claires en Bureautique, Marketing et Langue.",
  },
  {
    icon: Eye,
    title: "Notre vision",
    text: "Devenir la référence francophone de l'apprentissage informatique pour les débutants, en ligne comme en présentiel.",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-slate-950 py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-indigo-400/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4 border border-indigo-400/30">
              <item.icon className="w-6 h-6 text-indigo-300" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}