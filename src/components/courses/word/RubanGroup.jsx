import { motion } from "framer-motion";
import ToolRow from "./ToolRow";

const colorMap = {
  rose: "border-rose-500/30 bg-rose-500/5 text-rose-400",
  sky: "border-sky-500/30 bg-sky-500/5 text-sky-400",
  violet: "border-violet-500/30 bg-violet-500/5 text-violet-400",
  emerald: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400",
};

export default function RubanGroup({ groupe }) {
  const style = colorMap[groupe.couleur] || colorMap.sky;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl border p-5 space-y-4 ${style}`}
    >
      <div>
        <h3 className="text-lg font-semibold text-white">{groupe.titre}</h3>
        <p className="text-sm text-white/60">{groupe.description}</p>
      </div>

      <div className="grid gap-2">
        {groupe.outils.map((outil) => (
          <ToolRow key={outil.nom} outil={outil} />
        ))}
      </div>
    </motion.div>
  );
}
