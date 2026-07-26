import FichierImg from "./images/Fichier.png";
import InsertionImg from "./images/Insertion.png";
import AccueilImg from "./images/Acceuil.png";
import MiseEnPageImg from "./images/MiseEnPage.png";
import ReferencesImg from "./images/Reference.png";
import PublipostageImg from "./images/Publipostage.png";
import RevisionImg from "./images/Revision.png";
import AffichageImg from "./images/Affichage.png";

// Excel
import DemarrageImgEx from "./images/Ex-Acceuil.png";
import AccueilImgEx from "./images/Ex-Acceuil.png";
import InsertionImgEx from "./images/Ex-Insertion.png";
import FormulesImgEx from "./images/Ex-Formule.png";
import MiseEnPageImgEx from "./images/Ex-MiseEnPage.png";

export const courfreedtails = [
  {
    id: 1,
    title: "Microsoft Word",
    description:
      "Guide interactif complet pour maîtriser l'interface et le Ruban de Microsoft Word.",
    tabs: [
      {
        id: "fichier",
        label: "Fichier",
        image: FichierImg,
        description:
          "Le menu Fichier (mode Backstage) gère l'ouverture, la sauvegarde, l'impression et le partage du document.",
      },
      {
        id: "accueil",
        label: "Accueil",
        image: AccueilImg,
        description:
          "L'onglet principal pour rédiger, formater la police, aligner les paragraphes et appliquer des styles.",
      },
      {
        id: "insertion",
        label: "Insertion",
        image: InsertionImg,
        description:
          "Enrichissez votre document avec des éléments visuels, structurels et interactifs.",
      },
      {
        id: "mise-en-page",
        label: "Mise en page",
        image: MiseEnPageImg,
        description:
          "Contrôlez l'apparence générale de la page : marges, orientation et organisation du texte.",
      },
      {
        id: "references",
        label: "Références",
        image: ReferencesImg,
        description:
          "Outils pour structurer et sourcer des documents longs comme des rapports ou des mémoires.",
      },
      {
        id: "publipostage",
        label: "Publipostage",
        image: PublipostageImg,
        description:
          "Permet de créer plusieurs documents personnalisés (lettres, étiquettes) à partir d'un seul modèle.",
      },
      {
        id: "revision",
        label: "Révision",
        image: RevisionImg,
        description:
          "Vérifiez, corrigez et collaborez sur un document avant de le finaliser.",
      },
      {
        id: "affichage",
        label: "Affichage",
        image: AffichageImg,
        description:
          "Change la façon dont le document est affiché à l'écran, sans modifier son contenu.",
      },
    ],
  },
  {
    id: 2,
    title: "Microsoft Excel",
    description:
      "Guide interactif complet pour maîtriser l'interface et le Ruban de Microsoft Excel.",
    tabs: [
      {
        id: "fichier",
        label: "Fichier",
        image: DemarrageImgEx,
        description:
          "Le menu Fichier (mode Backstage) gère l'ouverture, la sauvegarde, l'impression et le partage du document.",
      },
      {
        id: "accueil",
        label: "Accueil",
        image: AccueilImgEx,
        description:
          "L'onglet principal pour saisir tes données, formater les cellules, aligner le texte et gérer les lignes/colonnes.",
      },
      {
        id: "insertion",
        label: "Insertion",
        image: InsertionImgEx,
        description:
          "L'onglet Insertion regroupe tous les outils pour insérer des éléments dans ta feuille de calcul : tableaux, graphiques, images, liens et bien plus.",
      },
      {
        id: "mise-en-page",
        label: "Mise en page",
        image: MiseEnPageImgEx,
        description:
          "Contrôlez l'apparence générale de la page : marges, orientation et organisation du texte.",
      },
      {
        id: "formules",
        label: "Formules",
        image: FormulesImgEx,
        description:
          "L'onglet Formules regroupe tous les outils pour créer, gérer et vérifier les formules afin d'effectuer des calculs et d'analyser tes données.",
      },
    ],
  },
];
