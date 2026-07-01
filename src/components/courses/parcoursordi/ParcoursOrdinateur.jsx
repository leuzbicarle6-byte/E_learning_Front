import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { SLIDES } from "./slides";
import SlideContent from "./SlideContent";
import SlideDots from "./SlideDots";
import PeripheriquesSection from "./PeripheriquesSection";

export default function ParcoursOrdinateur() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const isFirst = current === 0;
  const isLast = current === SLIDES.length - 1;

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const next = () => !isLast && goTo(current + 1);
  const prev = () => !isFirst && goTo(current - 1);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden shadow-2xl">
      <div className="bg-linear-to-r from-indigo-600/20 via-purple-600/10 to-transparent p-4 border-b border-white/5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300">
          Parcours pas à pas
        </h4>
        <p className="text-xs text-white/60">
          Suis les étapes une par une pour tout comprendre en douceur.
        </p>
      </div>

      <div className="p-6 min-h-80 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={SLIDES[current].id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-full"
          >
            <SlideContent slide={SLIDES[current]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <SlideDots slides={SLIDES} current={current} onSelect={goTo} />

      <div className="bg-white/2 border-t border-white/5 p-4 flex items-center justify-between gap-3">
        <button
          onClick={prev}
          disabled={isFirst}
          className="flex items-center gap-1 text-xs font-semibold text-white/60 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed px-3 py-2 rounded-lg cursor-pointer transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Précédent
        </button>

        <span className="text-[11px] text-white/40 font-medium">
          {current + 1} / {SLIDES.length}
        </span>

        {isLast ? (
          <button
            onClick={() =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
            className="flex items-center gap-1.5 text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl transition-all active:scale-95 cursor-pointer shadow-md shadow-indigo-600/10"
          >
            Aller au Quiz <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={next}
            className="flex items-center gap-1 text-xs font-semibold text-white hover:text-indigo-300 px-3 py-2 rounded-lg cursor-pointer transition-colors"
          >
            Suivant <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
