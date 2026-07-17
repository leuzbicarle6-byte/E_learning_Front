import React from "react";
import { motion } from "framer-motion";
import { Gift, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // Importation pour la navigation vers l'ID
import { freeCoursesData } from "./gratuit/freeCoursesData";

export default function CoursGratuit() {
  return (
    <div className="w-full">
      <section className="relative">
        {/* Glow de fond de l'interface */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-175 bg-indigo-600/20 blur-[130px] rounded-full pointer-events-none" />

        {/* Header de la section avec animations fluides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 bg-emerald-500/10 px-4 py-1 rounded-full mb-5">
            <Gift className="w-4 h-4" />
            100% gratuit, sans engagement
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Commence par les{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              cours gratuits
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Les bases essentielles pour bien démarrer, avant de passer aux
            formations complètes.
          </p>
        </motion.div>

        {/* Grille responsive des cartes de cours */}
        <div className="relative max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeCoursesData.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Le conteneur devient un composant Link pour la redirection vers la route dynamique */}
              <Link
                to={`/user/free-courses/${course.id}`} 
                className={`flex flex-col justify-between h-64 bg-gradient-to-br ${course.color} border ${course.border} rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer group`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                      <course.icon className={`w-6 h-6 ${course.iconColor}`} />
                    </div>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                      Gratuit
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {course.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-white/90 group-hover:gap-3 transition-all pt-4 border-t border-white/5">
                  Commencer
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}