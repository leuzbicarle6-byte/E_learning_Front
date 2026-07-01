import {
  Send,
  Cpu,
  MonitorCheck,
  Laptop2,
  Server,
  GitCompare,
  AlertTriangle,
  HardDrive,
  Monitor,
  Keyboard,
  MousePointer,
  PartyPopper,
} from "lucide-react";

export const SLIDES = [
  {
    id: "intro",
    type: "intro",
    icon: Server,
    color: "indigo",
    title: "C'est quoi un ordinateur ?",
    text: "Un ordinateur fonctionne comme un assistant ultra rapide. Tu lui donnes une demande, il la traite, puis il t’affiche le résultat. Simple. Rapide. Automatique.",
    image:
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800",
  },

  {
    id: "step-1",
    type: "process",
    number: "1",
    icon: Send,
    color: "indigo",
    title: "Tu donnes une commande",
    text: "Tu cliques, tu tapes ou tu touches l’écran. Exemple : ouvrir WhatsApp, écrire un document ou lancer une vidéo.",
  },

  {
    id: "step-2",
    type: "process",
    number: "2",
    icon: Cpu,
    color: "purple",
    title: "L’ordinateur réfléchit",
    text: "Le processeur (le cerveau) exécute des millions d’opérations en quelques secondes pour comprendre et traiter ta demande.",
  },

  {
    id: "step-3",
    type: "process",
    number: "3",
    icon: MonitorCheck,
    color: "emerald",
    title: "Il affiche le résultat",
    text: "Le résultat apparaît à l’écran : message envoyé, vidéo lancée, document ouvert… tout est prêt.",
    note: "À retenir : sans logiciel (Word, WhatsApp, navigateur), un ordinateur ne fait rien. C’est eux qui lui disent quoi faire.",
  },

  {
    id: "types-intro",
    type: "category",
    icon: GitCompare,
    color: "purple",
    title: "Les deux grands types d’ordinateurs",
    text: "On retrouve surtout deux formats dans la vie quotidienne. Chacun a ses avantages selon l’usage.",
  },

  {
    id: "type-fixe",
    type: "card",
    icon: Server,
    color: "purple",
    badge: "Puissant & stable",
    badgeColor: "purple",
    title: "Ordinateur de bureau (PC fixe)",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=400",
    text: "Composé de plusieurs éléments séparés : écran, unité centrale, clavier et souris.",
    note: "Avantage : très performant et durable. Idéal pour travailler longtemps au même endroit.",
  },

  {
    id: "type-portable",
    type: "card",
    icon: Laptop2,
    color: "emerald",
    badge: "Mobile & pratique",
    badgeColor: "emerald",
    title: "Ordinateur portable (Laptop)",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400",
    text: "Tout-en-un : écran, clavier et composants réunis dans un seul appareil léger et pliable.",
    note: "Avantage : facile à transporter, fonctionne sur batterie, parfait pour bouger.",
  },

  {
    id: "choice",
    type: "choice",
    icon: GitCompare,
    color: "indigo",
    title: "Quel ordinateur choisir ?",
    options: [
      {
        label: "Tu es souvent en déplacement",
        result: "→ Choisis un ordinateur portable",
      },
      {
        label: "Tu restes au même endroit",
        result: "→ Choisis un ordinateur fixe",
      },
    ],
  },

  {
    id: "peripheriques-intro",
    type: "warning",
    icon: AlertTriangle,
    color: "amber",
    title: "Erreur très fréquente",
    text: "Non, l’écran n’est pas l’ordinateur. Il ne fait qu’afficher les résultats. Le vrai travail se fait dans l’unité centrale. Sans elle, rien ne fonctionne.",
  },

  {
    id: "peripherique-unite",
    type: "card",
    icon: HardDrive,
    color: "amber",
    badge: "Le cerveau",
    badgeColor: "amber",
    title: "Unité centrale",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=300",
    text: "Elle contient le processeur (calculs) et la mémoire (stockage des données). C’est le cœur de l’ordinateur.",
  },

  {
    id: "peripherique-ecran",
    type: "card",
    icon: Monitor,
    color: "indigo",
    badge: "L’affichage",
    badgeColor: "indigo",
    title: "Écran",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=300",
    text: "Il affiche tout ce que fait l’ordinateur : textes, images, vidéos et interfaces.",
  },

  {
    id: "peripherique-clavier",
    type: "card",
    icon: Keyboard,
    color: "emerald",
    badge: "Entrée texte",
    badgeColor: "emerald",
    title: "Clavier",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=300",
    text: "Il permet de taper du texte et de donner des instructions à l’ordinateur.",
  },

  {
    id: "peripherique-souris",
    type: "card",
    icon: MousePointer,
    color: "teal",
    badge: "Contrôle",
    badgeColor: "teal",
    title: "Souris",
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=300",
    text: "Elle sert à pointer, cliquer, sélectionner et naviguer dans l’ordinateur.",
  },

  {
    id: "outro",
    type: "summary",
    icon: PartyPopper,
    color: "indigo",
    title: "Bien joué !",
    text: "Tu comprends maintenant comment un ordinateur fonctionne et à quoi sert chaque élément. Prêt pour le quiz ?",
  },
];
