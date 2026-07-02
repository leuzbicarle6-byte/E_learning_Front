export default function ToolRow({ outil }) {
  const Icon = outil.icon;
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div>
        <p className="text-sm font-medium text-white">{outil.nom}</p>
        <p className="text-xs text-white/50">{outil.description}</p>
      </div>
    </div>
  );
}
