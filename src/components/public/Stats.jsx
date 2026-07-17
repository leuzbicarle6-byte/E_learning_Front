import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "3", label: "Domaines de formation" },
  { value: "100%", label: "Contenu en français" },
  { value: "En ligne", label: "& présentiel" },
  { value: "Wolof ou Français", label: "peu importe ton niveau" },
];

export default function Stats() {
  return (
    <section className="bg-slate-950 py-10 px-6 border-y border-white/5">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-6 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <p className="text-2xl md:text-3xl font-bold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {s.value}
            </p>
            <p className="text-slate-500 text-sm mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}