import { motion } from "framer-motion";
import { exercicesWord } from "./wordData";

export default function ExercicesWord() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-white">À toi de jouer !</h2>
        <p className="text-sm text-white/60">
          Suis les étapes une par une, directement sur ton ordinateur.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {exercicesWord.map((etape, i) => {
          const Icon = etape.icon;
          return (
            <motion.div
              key={etape.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-semibold text-sm shrink-0">
                {etape.id}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-purple-400" />
                  <p className="font-medium text-white">{etape.titre}</p>
                </div>
                <p className="text-sm text-white/60 mt-1">{etape.consigne}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
