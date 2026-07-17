import React from "react";
import { motion } from "framer-motion";
import { FaFileWord, FaRobot } from "react-icons/fa";
import { Megaphone, Languages, Computer, Lock, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { CgSmartphoneShake } from "react-icons/cg";

const courses = [
  {
    id: 4, // Ancien ID 4 passe en premier
    title: "Maîtriser ton ordinateur",
    category: "Informatique",
    description:
      "Apprends à utiliser ton ordinateur comme un pro : fichiers, dossiers, internet, installation de logiciels et bonnes pratiques.",
    level: "Débutant",
    icon: <Computer className="w-10 h-10 text-indigo-400" />,
    status: "available",
  },
  {
    id: 1, // Ancien ID 1 passe en deuxième
    title: "Bureautique",
    category: "Bureautique",
    description:
      "Word, Excel, PowerPoint : rédige, calcule et présente comme un pro, sans stress.",
    level: "Débutant à Intermédiaire",
    icon: <FaFileWord className="w-10 h-10 text-sky-400" />,
    status: "available",
  },
  {
    id: 3,
    title: "Maîtrise ton téléphone",
    category: "Informatique",
    description:
      "Dompte ton smartphone ! Apprends à utiliser l'assistant Google, gérer ton système et toutes ses fonctionnalités.",
    level: "Débutant à Intermédiaire",
    icon: <CgSmartphoneShake className="w-10 h-10 text-purple-400" />,
    status: "coming_soon",
  },
  {
    id: 5,
    title: "IA & Automatisation",
    category: "Intelligence artificielle",
    description:
      "Apprends à utiliser l’intelligence artificielle comme un véritable assistant personnel : écrire, créer, automatiser et améliorer ta productivité sans être expert en informatique.",
    level: "Débutant",
    icon: <FaRobot className="w-10 h-10 text-indigo-400" />,
    status: "coming_soon",
  },
];

/**
 * Card simple
 */
function CourseCard({ course, onEnroll, index }) {
  const navigate = useNavigate();
  const isAvailable = course.status === "available";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={isAvailable ? { y: -4 } : {}}
      className={`relative rounded-2xl border p-5 transition-all duration-300 ${
        isAvailable
          ? "border-white/10 bg-white/5 hover:bg-white/10 hover:border-indigo-500/30"
          : "border-white/5 bg-white/2 opacity-60"
      }`}
    >
      {/* Badge de Statut absolu en haut à droite */}
      <div className="absolute top-4 right-4">
        {isAvailable ? (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Disponible
          </span>
        ) : (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
            <Lock className="w-2.5 h-2.5" /> En production
          </span>
        )}
      </div>

      {/* Icon (Fixé la taille à w-20 pour garder un carré parfait) */}
      <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-white/5 border border-white/10 mb-4">
        {course.icon}
      </div>

      {/* Title */}
      <h3 className="text-white font-semibold text-lg">{course.title}</h3>

      {/* Description */}
      {course.description && (
        <p className="text-white/50 text-sm mt-2 leading-relaxed">
          {course.description}
        </p>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
          {course.category}
        </span>

        <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/60 border border-white/10">
          {course.level}
        </span>
      </div>

      {/* Button */}
      {isAvailable ? (
        <button
          onClick={() => navigate("/login")}
          className="w-full mt-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors cursor-pointer"
        >
          Commencer
        </button>
      ) : (
        <button
          disabled
          className="w-full mt-5 py-2.5 rounded-xl bg-white/5 text-white/30 text-sm font-medium border border-white/5 cursor-not-allowed"
        >
          Bientôt disponible
        </button>
      )}
    </motion.div>
  );
}

/**
 * Grid principal
 */
export default function CourseGrid({ items = courses, onEnroll }) {
  return (
    <section className="py-12 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Catalogue de formations
        </h2>
        <p className="text-white/60 mt-2">
          Apprends vite, simple et efficace 🚀
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {items.map((course, index) => (
          <CourseCard
            key={course.id}
            course={course}
            onEnroll={onEnroll}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
