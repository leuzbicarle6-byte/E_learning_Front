import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function ImageModal({ src, label, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-7xl max-h-[90vh] bg-slate-900 rounded-2xl border border-white/10 p-2 shadow-2xl overflow-hidden cursor-default"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-full text-white/70 hover:text-white hover:bg-black/80 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <img src={src} alt={`Pleine résolution — ${label}`} className="w-full h-full object-contain rounded-xl" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
          <p className="text-white/90 text-sm font-medium">Capture complète : {label}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}