import {
  Cpu,
  MemoryStick,
  HardDrive,
  CircuitBoard,
  Fan,
  Zap,
  MonitorPlay,
} from "lucide-react";

export const PARTS = [
  {
    id: "carte-mere",
    icon: CircuitBoard,
    color: "indigo",
    titre: "La Carte Mère",
    role: "Le Squelette 🦴",
    analogie:
      "C'est comme le plan d'une maison : elle relie toutes les pièces entre elles.",
    description:
      "C'est la grande plaque électronique sur laquelle tous les autres composants viennent se brancher. Sans elle, rien ne peut communiquer avec rien.",
    aRetenir:
      "Si la carte mère tombe en panne, l'ordinateur ne s'allume plus du tout.",
  },
  {
    id: "processeur",
    icon: Cpu,
    color: "amber",
    titre: "Le Processeur (CPU)",
    role: "Le Cerveau 🧠",
    analogie:
      "C'est comme le chef cuisinier : il exécute chaque ordre, un par un, à toute vitesse.",
    description:
      "C'est lui qui fait tous les calculs. Plus il est puissant, plus l'ordinateur réagit vite (ouverture d'applications, jeux, calculs complexes).",
    aRetenir:
      "On dit souvent 'le processeur chauffe' : c'est pour ça qu'il y a un ventilateur juste au-dessus.",
  },
  {
    id: "memoire-vive",
    icon: MemoryStick,
    color: "purple",
    titre: "La Mémoire Vive (RAM)",
    role: "Le Plan de travail 🍽️",
    analogie:
      "C'est comme la table de la cuisine : plus elle est grande, plus le chef peut préparer plusieurs plats en même temps.",
    description:
      "Elle stocke temporairement ce que tu utilises en ce moment (les fenêtres ouvertes, par exemple). Plus tu as de RAM, plus tu peux ouvrir d'applications sans ralentir.",
    aRetenir:
      "Attention : la RAM s'efface dès que tu éteins l'ordinateur. Ce n'est pas là que sont stockés tes fichiers.",
  },
  {
    id: "disque-dur",
    icon: HardDrive,
    color: "emerald",
    titre: "Le Disque Dur / SSD",
    role: "L'Armoire de rangement 🗄️",
    analogie:
      "C'est comme une armoire : tout ce que tu ranges dedans reste là, même la nuit, même éteint.",
    description:
      "C'est ici que sont stockés en permanence tes fichiers, tes photos, tes documents Word, et les logiciels installés. Un SSD est une version plus rapide et plus moderne que le disque dur classique.",
    aRetenir:
      "Si tu 'perds' un fichier, il est presque toujours ici — jamais dans la RAM.",
  },
  {
    id: "carte-graphique",
    icon: MonitorPlay,
    color: "teal",
    titre: "La Carte Graphique",
    role: "Le Peintre 🎨",
    analogie:
      "C'est l'artiste qui dessine tout ce que tu vois à l'écran, image par image.",
    description:
      "Elle prépare les images, vidéos et animations avant de les envoyer à l'écran. Certains ordinateurs l'ont intégrée au processeur, d'autres ont une carte séparée plus puissante (utile pour les jeux ou le montage vidéo).",
    aRetenir:
      "Pour la bureautique simple (Word, Excel, navigation internet), une carte graphique basique suffit largement.",
  },
  {
    id: "alimentation",
    icon: Zap,
    color: "amber",
    titre: "Le Bloc d'Alimentation",
    role: "Le Cœur ⚡",
    analogie:
      "C'est comme le compteur électrique de la maison : il transforme et distribue l'énergie à chaque pièce.",
    description:
      "Il transforme le courant de la prise murale en énergie utilisable par tous les composants de l'unité centrale.",
    aRetenir:
      "Une mauvaise alimentation (ou une coupure fréquente) peut endommager tout le reste — d'où l'intérêt d'un onduleur.",
  },
  {
    id: "ventilation",
    icon: Fan,
    color: "indigo",
    titre: "Le Ventilateur (Ventirad)",
    role: "Le Climatiseur ❄️",
    analogie:
      "Comme un ventilateur classique, mais dédié à refroidir les pièces qui chauffent le plus.",
    description:
      "Le processeur et la carte graphique chauffent beaucoup en travaillant. Le ventilateur évacue cette chaleur pour éviter que la machine ne surchauffe ou ne s'endommage.",
    aRetenir:
      "Si ton ordinateur fait beaucoup de bruit ou ralentit après un moment d'utilisation, c'est souvent un problème de chaleur.",
  },
];
