import fichier from "./images/Fichier.png";
import Acceuil from "./images/Acceuil.png";

export const wordRibbonTabs = [
  {
    id: "fichier",
    label: "Fichier",
    color: "indigo",
    image: fichier, // Assure-toi que la variable 'fichier' est bien importée en haut de ton fichier WordFreeData
    description:
      "Le menu Fichier gère l'arrière-boutique du document : créer, ouvrir, enregistrer, imprimer et configurer les options globales.",
    groups: [
      {
        title: "Gestion des Documents",
        tools: [
          {
            name: "Nouveau",
            icon: "FilePlus",
            desc: "Créer un document vierge ou utiliser un modèle prédéfini.",
          },
          {
            name: "Ouvrir",
            icon: "FolderOpen",
            desc: "Accéder à un document existant stocké sur l'ordinateur ou sur OneDrive.",
          },
        ],
      },
      {
        title: "Sauvegarde & Sortie",
        tools: [
          {
            name: "Enregistrer",
            icon: "Save",
            desc: "Sauvegarder immédiatement les modifications sur le fichier actuel.",
          },
          {
            name: "Enregistrer sous",
            icon: "Copy",
            desc: "Créer une copie du document sous un autre nom, un autre emplacement ou un format différent (ex: PDF).",
          },
          {
            name: "Imprimer",
            icon: "Printer",
            desc: "Ajuster la mise en page, choisir les pages et lancer l'impression papier.",
          },
        ],
      },
    ],
  },
  {
    id: "accueil",
    label: "Accueil",
    color: "purple",
    image: Acceuil,
    description:
      "C'est l'onglet principal de Word. Il regroupe tout ce qui concerne le texte (sa forme), les paragraphes (sa disposition) et les styles (sa structure).",
    groups: [
      {
        title: "Police",
        color: "amber", // correspond au cadre JAUNE sur la capture
        tools: [
          {
            name: "Gras (G)",
            icon: "Bold",
            desc: "Épaissit le texte pour faire ressortir les titres ou les mots importants.",
          },
          {
            name: "Italique (I)",
            icon: "Italic",
            desc: "Incline le texte. Utilisé pour les citations, les mots étrangers ou les titres d'œuvres.",
          },
          {
            name: "Souligné (S)",
            icon: "Underline",
            desc: "Ajoute une ligne sous le texte. Attention à ne pas surcharger le document.",
          },
          {
            name: "Calibri (Corps)",
            icon: "Type",
            desc: "Change la police d'écriture — la forme des lettres.",
          },
          {
            name: "11",
            icon: "ALargeSmall",
            desc: "La taille du texte, en points. Plus le chiffre est grand, plus les lettres sont grandes.",
          },
          {
            name: "Surlignage",
            icon: "Highlighter",
            desc: "Met un fond de couleur derrière le texte, comme un feutre stabilo.",
          },
          {
            name: "Couleur du texte (A)",
            icon: "Baseline",
            desc: "Change la couleur des lettres elles-mêmes.",
          },
        ],
      },
      {
        title: "Paragraphe",
        color: "blue", // correspond au cadre BLEU sur la capture
        tools: [
          {
            name: "Aligner à gauche",
            icon: "AlignLeft",
            desc: "Le texte démarre bien droit à gauche (standard pour le courrier et les rapports).",
          },
          {
            name: "Centrer",
            icon: "AlignCenter",
            desc: "Place le texte au milieu de la page. Idéal pour les grands titres.",
          },
          {
            name: "Aligner à droite",
            icon: "AlignRight",
            desc: "Pousse le texte vers la bordure droite. Pratique pour les dates ou signatures.",
          },
          {
            name: "Justifier",
            icon: "AlignJustify",
            desc: "Aligne le texte parfaitement à gauche ET à droite (comme dans un journal).",
          },
          {
            name: "Puces",
            icon: "List",
            desc: "Crée une liste d'éléments précédés par des points.",
          },
          {
            name: "Numérotation",
            icon: "ListOrdered",
            desc: "Crée une liste numérotée (1, 2, 3...).",
          },
          {
            name: "Interligne",
            icon: "AlignVerticalSpaceAround",
            desc: "Ajuste l'espace vertical entre chaque ligne de texte.",
          },
        ],
      },
      {
        title: "Styles",
        color: "orange", // correspond au cadre ORANGE sur la capture
        tools: [
          {
            name: "Normal",
            icon: "Heading",
            desc: "Le style par défaut de Word pour le texte de tous les jours.",
          },
          {
            name: "Sans interligne",
            icon: "Rows3",
            desc: "Comme Normal, mais sans espace supplémentaire entre les lignes.",
          },
          {
            name: "Titre 1",
            icon: "Heading1",
            desc: "Style des grands titres de chapitres. Essentiel pour générer une table des matières automatique.",
          },
          {
            name: "Titre 2",
            icon: "Heading2",
            desc: "Style des sous-titres, à l'intérieur d'un chapitre.",
          },
          {
            name: "Sous-titre",
            icon: "Heading3",
            desc: "Petit texte discret sous un grand titre, souvent en italique.",
          },
        ],
      },
    ],
  },
  {
    id: "insertion",
    label: "Insertion",
    color: "emerald",
    image: "/images/word/ruban-insertion.png",
    description:
      "Cet onglet permet d'ajouter des éléments externes dans votre document pour l'enrichir visuellement ou structurellement.",
    groups: [
      {
        title: "Tableaux & Pages",
        tools: [
          {
            name: "Tableau",
            icon: "Table",
            desc: "Insérer et quadriller une grille de données personnalisée.",
          },
          {
            name: "Page de garde",
            icon: "FileText",
            desc: "Ajouter une couverture professionnelle stylisée au tout début.",
          },
          {
            name: "Saut de page",
            icon: "FilePlus",
            desc: "Forcer le texte qui suit à commencer sur la page suivante.",
          },
        ],
      },
      {
        title: "Illustrations & Liens",
        tools: [
          {
            name: "Images & Formes",
            icon: "Image",
            desc: "Insérer des photos, des formes géométriques ou des icônes.",
          },
          {
            name: "Lien hypertexte",
            icon: "Link",
            desc: "Créer un lien cliquable vers un site web ou un endroit du doc.",
          },
        ],
      },
    ],
  },
  {
    id: "mise-en-page",
    label: "Mise en page",
    color: "indigo",
    image: "/images/word/ruban-mise-en-page.png",
    description:
      "Indispensable pour définir la géométrie et l'organisation de vos pages, notamment avant une impression ou une exportation.",
    groups: [
      {
        title: "Configuration de page",
        tools: [
          {
            name: "Marges",
            icon: "Maximize2",
            desc: "Définir la taille des espaces blancs tout autour du texte.",
          },
          {
            name: "Orientation",
            icon: "Compass",
            desc: "Basculer la page en mode Portrait (vertical) ou Paysage (horizontal).",
          },
          {
            name: "Colonnes",
            icon: "Columns",
            desc: "Diviser le texte en 2 ou plusieurs colonnes verticales (style journal).",
          },
        ],
      },
    ],
  },
  {
    id: "references",
    label: "Références",
    color: "purple",
    image: "/images/word/ruban-references.png",
    description:
      "Idéal pour les documents longs, rapports de stage ou mémoires. Il gère l'automatisation des structures complexes.",
    groups: [
      {
        title: "Indexation & Notes",
        tools: [
          {
            name: "Table des matières",
            icon: "BookOpen",
            desc: "Générer un sommaire automatique basé sur vos titres.",
          },
          {
            name: "Note de bas de page",
            icon: "CornerRightDown",
            desc: "Ajouter un appel de note numéroté en bas de la page en cours.",
          },
        ],
      },
    ],
  },
  {
    id: "affichage",
    label: "Affichage",
    color: "emerald",
    image: "/images/word/ruban-affichage.png",
    description:
      "Ce menu change uniquement votre façon de voir le document à l'écran, sans modifier le texte ou la mise en page finale.",
    groups: [
      {
        title: "Modes & Outils",
        tools: [
          {
            name: "Mode Lecture",
            icon: "Book",
            desc: "Masquer les outils pour un confort de lecture maximal.",
          },
          {
            name: "Règles",
            icon: "Grid",
            desc: "Afficher ou masquer les règles de graduation (verticale/horizontale).",
          },
          {
            name: "Zoom",
            icon: "ZoomIn",
            desc: "Agrandir ou rétrécir l'affichage de la page à l'écran.",
          },
        ],
      },
    ],
  },
];
