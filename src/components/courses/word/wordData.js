import {
  Bold,
  Italic,
  Underline,
  Palette,
  AlignLeft,
  AlignCenter,
  List,
  Image,
  Table,
  Link2,
  FileText,
  LayoutGrid,
  RotateCw,
  MousePointerClick,
  Save,
  PenLine,
  FilePlus,
  FolderOpen,
  Printer,
} from "lucide-react";

export const wordIntro = {
  titre: "C'est quoi Word ?",
  description:
    "Microsoft Word est un logiciel de traitement de texte. Il te permet d'écrire, de mettre en forme et d'imprimer des documents : lettres, CV, rapports, exposés...",
  points: [
    "Tu tapes ton texte au clavier, comme sur une machine à écrire",
    "Tu peux le mettre en forme : gras, couleur, taille, alignement",
    "Tu peux ajouter des images, des tableaux, des liens",
    "Tu enregistres ton travail pour le retrouver plus tard",
  ],
};

export const rubanGroups = [
  {
    id: "fichier",
    titre: "Fichier",
    couleur: "rose",
    description:
      "Pour gérer ton document : créer, ouvrir, enregistrer, imprimer",
    outils: [
      {
        icon: FilePlus,
        nom: "Nouveau",
        description: "Crée un nouveau document vierge",
      },
      {
        icon: FolderOpen,
        nom: "Ouvrir",
        description: "Ouvre un document déjà enregistré",
      },
      {
        icon: Save,
        nom: "Enregistrer",
        description: "Sauvegarde ton document sur l'ordinateur",
      },
      {
        icon: Printer,
        nom: "Imprimer",
        description: "Imprime ton document sur papier",
      },
    ],
  },
  {
    id: "accueil",
    titre: "Accueil",
    couleur: "sky",
    description: "Le groupe que tu utiliseras le plus : mise en forme du texte",
    outils: [
      {
        icon: Bold,
        nom: "Gras",
        description: "Rend le texte plus épais et visible",
      },
      { icon: Italic, nom: "Italique", description: "Penche le texte" },
      {
        icon: Underline,
        nom: "Souligné",
        description: "Ajoute un trait sous le texte",
      },
      {
        icon: Palette,
        nom: "Couleur du texte",
        description: "Change la couleur des lettres",
      },
      {
        icon: AlignCenter,
        nom: "Centrer",
        description: "Centre le texte sur la page",
      },
      { icon: List, nom: "Puces", description: "Crée une liste à puces" },
    ],
  },
  {
    id: "insertion",
    titre: "Insertion",
    couleur: "violet",
    description: "Pour ajouter des éléments dans ton document",
    outils: [
      {
        icon: Image,
        nom: "Image",
        description: "Insère une photo depuis ton ordinateur",
      },
      {
        icon: Table,
        nom: "Tableau",
        description: "Crée un tableau avec lignes et colonnes",
      },
      {
        icon: Link2,
        nom: "Lien",
        description: "Ajoute un lien vers un site web",
      },
    ],
  },
  {
    id: "mise-en-page",
    titre: "Mise en page",
    couleur: "emerald",
    description: "Pour organiser l'apparence générale de la page",
    outils: [
      {
        icon: LayoutGrid,
        nom: "Marges",
        description: "Règle l'espace vide autour du texte",
      },
      {
        icon: RotateCw,
        nom: "Orientation",
        description: "Choisis page verticale ou horizontale",
      },
    ],
  },
];

export const exercicesWord = [
  {
    id: 1,
    titre: "Ouvrir Word",
    consigne:
      'Clique sur le bouton Démarrer, puis cherche et clique sur "Word".',
    icon: MousePointerClick,
  },
  {
    id: 2,
    titre: "Écrire un texte",
    consigne: "Dans la page blanche, tape : Bonjour, je découvre Word !",
    icon: PenLine,
  },
  {
    id: 3,
    titre: "Mettre en gras",
    consigne:
      "Sélectionne ton texte, puis clique sur le bouton Gras (G) dans l'onglet Accueil.",
    icon: Bold,
  },
  {
    id: 4,
    titre: "Centrer le texte",
    consigne:
      "Avec le texte toujours sélectionné, clique sur le bouton Centrer.",
    icon: AlignCenter,
  },
  {
    id: 5,
    titre: "Insérer une image",
    consigne:
      "Clique sur l'onglet Insertion, puis sur Image, et choisis une photo.",
    icon: Image,
  },
  {
    id: 6,
    titre: "Enregistrer",
    consigne:
      "Clique sur l'icône disquette en haut à gauche, choisis un nom, puis clique sur Enregistrer.",
    icon: Save,
  },
];
