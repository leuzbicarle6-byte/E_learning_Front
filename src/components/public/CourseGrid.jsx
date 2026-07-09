import React from "react";
import { motion } from "framer-motion";
import { FaFileWord, FaPlus, FaRobot } from "react-icons/fa";
import { Megaphone, Languages, Computer } from "lucide-react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Bureautique",
    category: "Bureautique",
    description:
      "Word, Excel, PowerPoint : rédige, calcule et présente comme un pro, sans stress.",
    level: "Débutant à Intermédiaire",
    icon: <FaFileWord className="w-10 h-10 text-sky-400" />,
  },
  {
    id: 2,
    title: "Marketing",
    category: "Marketing",
    description:
      "Apprends à promouvoir une activité en ligne : réseaux sociaux, publicités, premiers clients.",
    level: "Débutant à Intermédiaire",
    icon: <Megaphone className="w-10 h-10 text-rose-400" />,
  },
  {
    id: 3,
    title: "Langue",
    category: "Langue",
    description:
      "Renforce ton français ou démarre l'anglais avec des cours adaptés à ton rythme.",
    level: "Débutant à Intermédiaire",
    icon: <Languages className="w-10 h-10 text-purple-400" />,
  },
  {
    id: 4,
    title: "Maîtriser ton ordinateur",
    category: "Informatique",
    description:
      "Apprends à utiliser ton ordinateur comme un pro : fichiers, dossiers, internet, installation de logiciels et bonnes pratiques.",
    level: "Débutant",
    icon: <Computer className="w-10 h-10 text-indigo-400" />,
  },
  {
    id: 5,
    title: "IA & Automatisation",
    category: "Intelligence artificielle",
    description:
      "Apprends à utiliser l’intelligence artificielle comme un véritable assistant personnel : écrire, créer, automatiser et améliorer ta productivité sans être expert en informatique.",
    level: "Débutant",
    icon: <FaRobot className="w-10 h-10 text-indigo-400" />,
  },
];

/**
 * Card simple
 */
function CourseCard({ course, onEnroll, index }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 hover:border-indigo-500/30 transition-colors duration-300"
    >
      {/* Icon */}
      <div className="flex items-center justify-center h-20 rounded-xl bg-white/5 border border-white/10 mb-4">
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
      <div className="flex gap-2 mt-3">
        <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
          {course.category}
        </span>

        <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/60 border border-white/10">
          {course.level}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => navigate("/login")}
        className="w-full mt-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors cursor-pointer"
      >
        Commencer
      </button>
    </motion.div>
  );
}

/**
 * Grid principal
 */
export default function CourseGrid({ items = courses, onEnroll }) {
  return (
    <section className="py-6 px-6">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
