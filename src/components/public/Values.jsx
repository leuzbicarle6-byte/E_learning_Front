import React from "react";
import { Heart, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Heart,
    title: "Bienveillance",
    text: "Aucune question n'est stupide. On accompagne sans jugement, à ton rythme.",
  },
  {
    icon: Sparkles,
    title: "Simplicité",
    text: "On explique avec des mots simples, pas de jargon inutile.",
  },
  {
    icon: ShieldCheck,
    title: "Sérieux",
    text: "Des parcours structurés et un accompagnement fiable, en ligne comme en présentiel.",
  },
];

export default function Values() {
  return (
    <section className="bg-slate-950 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-3">Nos valeurs</h2>
        <p className="text-slate-400">Ce qui guide chaque formation qu'on propose</p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4 mx-auto border border-indigo-400/30">
              <v.icon className="w-6 h-6 text-indigo-300" />
            </div>
            <h3 className="text-white font-semibold mb-2">{v.title}</h3>
            <p className="text-slate-400 text-sm">{v.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}