import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, ChevronRight, Eye } from "lucide-react";
import { wordRibbonTabs } from "./WordFreeData";
import { colorMap } from "./colorMap";
import { tabComponents } from "./tabs";
import RibbonImage from "./shared/RibbonImage";
import ImageModal from "./shared/ImageModal";

export default function WordFree() {
  const [activeTab, setActiveTab] = useState(wordRibbonTabs[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const current = wordRibbonTabs.find((t) => t.id === activeTab);
  const ActiveTabComponent = tabComponents[activeTab];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100">
      <section className="relative pt-28 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/20 blur-[130px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 bg-emerald-500/10 px-4 py-1 rounded-full mb-5">
            Cours interactif · Word
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Comprendre le{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Ruban
            </span>{" "}
            de Word
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Clique sur un onglet pour voir à quoi il ressemble vraiment dans
            Word et à quoi servent ses outils.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto grid lg:grid-cols-5 gap-8 items-start">
          {/* Colonne gauche : explications (délègue au sous-composant de l'onglet actif) */}
          <div className="lg:col-span-3 bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex border-b border-white/10 bg-slate-900/80 overflow-x-auto">
              {wordRibbonTabs.map((tab) => {
                const c = colorMap[tab.color] || colorMap.indigo;
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                      isActive ? c.activeTab : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              {ActiveTabComponent && <ActiveTabComponent key={activeTab} />}
            </AnimatePresence>
          </div>

          {/* Colonne droite : image du ruban réel */}
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <div className="bg-slate-900 border border-white/10 rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                <Eye className="w-4 h-4 text-indigo-400" />À quoi ça ressemble
                dans Word
              </div>
              <RibbonImage
                key={current?.id}
                src={current?.image}
                label={current?.label}
                onClick={() => setIsModalOpen(true)}
              />
              <p className="text-slate-500 text-xs text-center mt-3 italic">
                Capture réelle de l'onglet « {current?.label} » dans Word.{" "}
                <span className="text-indigo-400 font-medium">
                  (Clique pour agrandir)
                </span>
              </p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-2xl mx-auto mt-16 text-center bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4 mx-auto border border-indigo-400/30">
            <MessageCircle className="w-6 h-6 text-indigo-300" />
          </div>
          <h3 className="text-white font-semibold text-lg mb-2">
            Tu bloques sur quelque chose ?
          </h3>
          <p className="text-slate-400 text-sm mb-5">
            Notre équipe est disponible pour t'aider directement.
          </p>

          <a
            href="https://wa.me/221XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-6 py-3 rounded-xl transition-colors"
          >
            Nous contacter <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      <AnimatePresence>
        {isModalOpen && current && (
          <ImageModal
            src={current.image}
            label={current.label}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
