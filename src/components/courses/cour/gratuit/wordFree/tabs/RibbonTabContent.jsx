import React from "react";
import { motion } from "framer-motion";
import RibbonGroup from "../shared/RibbonGroup";

export default function RibbonTabContent({ tab }) {
  return (
    <motion.div
      key={tab.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="p-6"
    >
      <p className="text-slate-300 text-base mb-6 font-medium bg-white/5 p-3 rounded-xl border border-white/5">
        💡 {tab.description}
      </p>
      {tab.groups?.map((group) => (
        <RibbonGroup key={group.title} group={group} />
      ))}
    </motion.div>
  );
}