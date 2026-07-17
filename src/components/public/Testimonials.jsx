import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { testimonialsData } from "./testimonialsData ";

export default function Testimonials() {
  return (
    <section className="relative bg-slate-950 py-20 px-6 overflow-hidden">
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center mb-14">
        <span className="inline-block text-sm font-medium text-indigo-400 bg-indigo-500/10 px-4 py-1 rounded-full mb-4">
          Ils ont testé LearnTech
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ce que disent nos{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            apprenants
          </span>
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {testimonialsData.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-indigo-400/30 transition-colors"
          >
            <Quote className="w-8 h-8 text-indigo-500/30 mb-3" />

            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              « {t.quote} »
            </p>

            <div className="flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-11 h-11 rounded-full object-cover border border-indigo-400/30"
              />
              <div>
                <p className="text-white font-medium text-sm">{t.name}</p>
                <p className="text-slate-400 text-xs">{t.role}</p>
              </div>
            </div>

            <div className="flex gap-1 mt-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className={`w-4 h-4 ${
                    idx < t.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-slate-700"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}