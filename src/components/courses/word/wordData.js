import {
  Bold,
  Italic,
  Underline,
  Palette,
  AlignCenter,
  List,
  Image,
  Table,
  Link2,
  LayoutGrid,
  RotateCw,
  MousePointerClick,
  Save,
  PenLine,
  FilePlus,
  FolderOpen,
  Printer,
  Heading1,       // Pour les titres
  FileSpreadsheet,// Pour les tableaux
  Bookmark,       // Pour les en-têtes
  Coins,          // Pour le pied de page
  Binary,         // Pour les numéros de page
  Eye,            // Pour le filigrane
  Grid,           // Pour les bordures
  Scissors        // Pour couper/coller
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
        nom: "Couleur",
        description: "Change la couleur des lettres",
      },
      {
        icon: Heading1,
        nom: "Styles (Titres)",
        description: "Organise tes titres (Titre 1, Titre 2) pour créer un sommaire automatique",
      },
      {
        icon: AlignCenter,
        nom: "Centrer / Justifier",
        description: "Aligne ton texte au milieu ou proprement sur les bords",
      },
      { icon: List, nom: "Puces", description: "Crée une liste ou une énumération" },
    ],
  },
  {
    id: "insertion",
    titre: "Insertion",
    couleur: "violet",
    description: "Pour ajouter des éléments et des repères dans ton document",
    outils: [
      {
        icon: Image,
        nom: "Image",
        description: "Insère une photo ou une illustration depuis ton PC",
      },
      {
        icon: Table,
        nom: "Tableau",
        description: "Crée un tableau structuré avec lignes et colonnes",
      },
      {
        icon: Bookmark,
        nom: "En-tête",
        description: "Ajoute un titre ou un logo qui se répète tout en haut de chaque page",
      },
      {
        icon: Coins,
        nom: "Pied de page",
        description: "Ajoute des infos (auteur, date) tout en bas de chaque page",
      },
      {
        icon: Binary,
        nom: "Numéro de page",
        description: "Numérote automatiquement toutes les pages de ton document",
      },
      {
        icon: Link2,
        nom: "Lien hypertexte",
        description: "Ajoute un lien cliquable vers un site web",
      },
    ],
  },
  {
    id: "conception",
    titre: "Conception / Création",
    couleur: "rose",
    description: "Pour personnaliser le style visuel et la sécurité du document",
    outils: [
      {
        icon: Eye,
        nom: "Filigrane",
        description: "Ajoute un texte transparent en arrière-plan (ex: 'BROUILLON' ou 'CONFIDENTIEL')",
      },
      {
        icon: Palette,
        nom: "Couleur de page",
        description: "Change la couleur de fond de toute la feuille de papier",
      },
      {
        icon: Grid,
        nom: "Bordures de page",
        description: "Ajoute un cadre décoratif ou sérieux tout autour de tes pages",
      },
    ],
  },
  {
    id: "mise-en-page",
    titre: "Mise en page",
    couleur: "emerald",
    description: "Pour organiser l'apparence générale et la structure physique de la feuille",
    outils: [
      {
        icon: LayoutGrid,
        nom: "Marges",
        description: "Règle la taille des espaces vides tout autour de ton texte",
      },
      {
        icon: RotateCw,
        nom: "Orientation",
        description: "Bascule ta feuille en mode vertical (Portrait) ou horizontal (Paysage)",
      },
      {
        icon: FileSpreadsheet,
        nom: "Colonnes",
        description: "Divise ton texte en 2 ou 3 colonnes, comme dans un journal ou un dépliant",
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
    titre: "Créer un En-tête",
    consigne:
      "Va dans l'onglet Insertion, clique sur En-tête, choisis un modèle et écris ton nom.",
    icon: Bookmark,
  },
  {
    id: 6,
    titre: "Ajouter un Filigrane",
    consigne:
      "Va dans l'onglet Conception (ou Création), clique sur Filigrane et choisis le texte 'BROUILLON'.",
    icon: Eye,
  },
  {
    id: 7,
    titre: "Enregistrer",
    consigne:
      "Clique sur l'icône disquette en haut à gauche, choisis un nom, puis clique sur Enregistrer.",
    icon: Save,
  },
];