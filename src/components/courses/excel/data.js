import DemarrageImg from "./images/Ex-Acceuil.png";
import AccueilImg from "./images/Ex-Acceuil.png";
import InsertionImg from "./images/Ex-Insertion.png";
import FormulesImg from "./images/Ex-Formule.png";
import MiseEnPageImg from "./images/Ex-MiseEnPage.png";

export const courExcelDetails = [
  {
    id: 1,
    title: "Microsoft Excel",
    description:
      "Guide interactif complet pour maîtriser l'interface et le Ruban de Microsoft Excel.",
    tabs: [
      {
        id: "Fichier",
        label: "Page d'acceuil",
        image: DemarrageImg,
        description:
          "L'écran de démarrage (Backstage) s'affiche à l'ouverture d'Excel : il donne accès aux fichiers récents et à la création d'un nouveau classeur.",
        sections: [
          {
            name: "Écran de démarrage",
            tools: [
              {
                name: "Accueil",
                shortcut: "N/A",
                tag: "Navigation",
                desc: "Vue de démarrage qui donne accès rapide aux modèles récents, aux classeurs déjà ouverts et à la création d'un nouveau document.",
                usage:
                  "Dès l'ouverture d'Excel, ou pour revenir à l'écran principal depuis le menu Fichier.",
                example:
                  "Retrouver rapidement le fichier 'Budget personnel mensuel' ouvert récemment.",
                tip: "L'onglet 'Récent' liste tes derniers classeurs, pratique pour reprendre un travail en cours.",
              },
              {
                name: "Nouveau",
                shortcut: "Ctrl + N",
                tag: "Indispensable",
                desc: "Permet de créer un classeur vierge ou de partir d'un modèle prêt à l'emploi (budget, calendrier, tableau croisé dynamique…).",
                usage:
                  "Pour démarrer un nouveau travail à partir de zéro ou gagner du temps avec un modèle.",
                example:
                  "Choisir le modèle 'Calendrier photo saisonnier' plutôt que de tout construire à la main.",
                tip: "Les modèles proposés changent régulièrement, prends le temps de les explorer.",
              },
            ],
          },
        ],
      },
      {
        id: "accueil",
        label: "Accueil",
        image: AccueilImg,
        description:
          "L'onglet principal pour saisir tes données, formater les cellules, aligner le texte et gérer les lignes/colonnes.",
        sections: [
          {
            name: "Presse-papiers",
            tools: [
              {
                name: "Copier / Couper / Coller",
                shortcut: "Ctrl + C / Ctrl + X / Ctrl + V",
                tag: "Indispensable",
                desc: "Copier duplique le contenu d'une cellule, Couper le déplace, et Coller le positionne à l'endroit voulu.",
                usage:
                  "Pour déplacer ou dupliquer des valeurs, formules ou mises en forme sans tout retaper.",
                example:
                  "Copier une formule de la cellule B2 et la coller sur toute la colonne B.",
                tip: "Fais glisser le petit carré en bas à droite d'une cellule pour recopier une formule plus vite qu'avec Ctrl+C/Ctrl+V.",
              },
            ],
          },
          {
            name: "Police",
            tools: [
              {
                name: "Police & Taille de police",
                shortcut: "N/A",
                tag: "Indispensable",
                desc: "Change le style de caractères (Calibri, Arial…) et la taille du texte dans les cellules.",
                usage:
                  "Pour harmoniser l'apparence d'un tableau ou mettre en valeur des titres de colonnes.",
                example:
                  "Mettre les en-têtes de colonnes en Calibri 12pt gras.",
                tip: "Garde la même police sur tout le classeur pour un rendu professionnel.",
              },
              {
                name: "Gras / Italique / Souligné",
                shortcut: "Ctrl + G / Ctrl + I / Ctrl + U",
                tag: "Mise en valeur",
                desc: "Met le texte de la cellule en gras, en italique ou le souligne.",
                usage:
                  "Pour faire ressortir des totaux, des titres ou des valeurs clés.",
                example:
                  "Mettre en gras la ligne 'Total' d'un tableau de dépenses.",
                tip: "Réserve le gras aux titres et totaux, pas à toutes les cellules.",
              },
              {
                name: "Couleur de remplissage",
                shortcut: "N/A",
                tag: "Design",
                desc: "Colore le fond d'une ou plusieurs cellules sélectionnées.",
                usage:
                  "Pour repérer visuellement des catégories ou des alertes dans un tableau.",
                example:
                  "Colorer en rouge les cellules où le budget est dépassé.",
                tip: "Utilise des couleurs pâles pour ne pas gêner la lecture des chiffres.",
              },
              {
                name: "Couleur de police",
                shortcut: "N/A",
                tag: "Design",
                desc: "Change la couleur du texte à l'intérieur des cellules.",
                usage: "Pour hiérarchiser l'information ou signaler un état.",
                example:
                  "Écrire en vert les valeurs positives et en rouge les négatives.",
                tip: "Garde un bon contraste entre la couleur du texte et celle du fond.",
              },
            ],
          },
          {
            name: "Alignement",
            tools: [
              {
                name: "Aligner en haut / au milieu / en bas",
                shortcut: "N/A",
                tag: "Mise en page",
                desc: "Positionne le texte verticalement dans la cellule.",
                usage:
                  "Pour aligner proprement le contenu quand les cellules sont hautes.",
                example:
                  "Centrer verticalement le texte dans une ligne d'en-tête plus haute que les autres.",
                tip: "Le centrage vertical donne un rendu plus soigné aux tableaux avec fusion de cellules.",
              },
              {
                name: "Aligner à gauche / centrer / à droite",
                shortcut: "N/A",
                tag: "Mise en page",
                desc: "Positionne le texte horizontalement dans la cellule.",
                usage:
                  "Par défaut, le texte est aligné à gauche et les nombres à droite ; à ajuster selon le besoin.",
                example:
                  "Centrer les titres de colonnes pour un tableau plus lisible.",
                tip: "Centrer les en-têtes aide à distinguer visuellement titres et données.",
              },
              {
                name: "Fusionner et centrer",
                shortcut: "N/A",
                tag: "Mise en page",
                desc: "Fusionne plusieurs cellules sélectionnées en une seule et centre son contenu.",
                usage:
                  "Pour créer un titre qui s'étend sur plusieurs colonnes.",
                example:
                  "Fusionner les cellules A1 à E1 pour écrire le titre 'Budget 2026'.",
                tip: "Évite d'abuser des fusions : elles compliquent le tri et les formules ensuite.",
              },
              {
                name: "Renvoyer à la ligne automatiquement",
                shortcut: "N/A",
                tag: "Lisibilité",
                desc: "Affiche tout le texte sur plusieurs lignes dans la cellule au lieu de le couper sur les bords.",
                usage:
                  "Quand un texte est trop long pour tenir sur une seule ligne de cellule.",
                example:
                  "Afficher une consigne complète dans une cellule sans l'agrandir à l'infini en largeur.",
                tip: "Combine-le avec un ajustement de la hauteur de ligne pour un rendu propre.",
              },
            ],
          },
          {
            name: "Nombre",
            tools: [
              {
                name: "Format nombre",
                shortcut: "N/A",
                tag: "Indispensable",
                desc: "Choisit comment afficher les valeurs d'une cellule : nombre, date, texte, standard…",
                usage:
                  "Pour que les données s'affichent correctement selon leur nature.",
                example:
                  "Passer une cellule du format 'Standard' au format 'Date' pour afficher 26/07/2026.",
                tip: "Le format nombre change uniquement l'affichage, jamais la valeur réelle stockée.",
              },
              {
                name: "Format monétaire",
                shortcut: "N/A",
                tag: "Finance",
                desc: "Affiche les valeurs avec un symbole de devise (€, $…).",
                usage: "Pour présenter des montants d'argent de façon claire.",
                example: "Afficher 1500 sous la forme 1 500,00 €.",
                tip: "Utile pour uniformiser un budget ou une facture.",
              },
              {
                name: "Format pourcentage",
                shortcut: "Ctrl + Maj + %",
                tag: "Finance",
                desc: "Affiche la valeur d'une cellule sous forme de pourcentage.",
                usage:
                  "Pour représenter des taux, des évolutions ou des proportions.",
                example: "Afficher 0,25 sous la forme 25%.",
                tip: "Attention : Excel multiplie automatiquement la valeur par 100 à l'affichage.",
              },
              {
                name: "Séparateur de milliers",
                shortcut: "N/A",
                tag: "Lisibilité",
                desc: "Ajoute un espace tous les 3 chiffres pour faciliter la lecture des grands nombres.",
                usage: "Sur des valeurs de plusieurs milliers ou millions.",
                example: "Afficher 1000000 sous la forme 1 000 000.",
                tip: "Rend un tableau de chiffres beaucoup plus lisible d'un coup d'œil.",
              },
              {
                name: "Augmenter / Diminuer les décimales",
                shortcut: "N/A",
                tag: "Précision",
                desc: "Ajoute ou retire des chiffres après la virgule dans l'affichage d'une cellule.",
                usage:
                  "Pour ajuster la précision affichée sans changer la valeur réelle.",
                example:
                  "Afficher 3,14159 sous la forme 3,14 en diminuant les décimales.",
                tip: "Garde 2 décimales pour les montants financiers, c'est la convention la plus courante.",
              },
            ],
          },
          {
            name: "Styles",
            tools: [
              {
                name: "Mise en forme conditionnelle",
                shortcut: "N/A",
                tag: "Analyse",
                desc: "Applique automatiquement une mise en forme (couleur, icône…) selon la valeur d'une cellule.",
                usage:
                  "Pour repérer d'un coup d'œil des valeurs importantes, hors norme ou à risque.",
                example:
                  "Colorer en rouge automatiquement toutes les ventes inférieures à l'objectif.",
                tip: "Très utile pour des tableaux de suivi qui évoluent régulièrement.",
              },
              {
                name: "Mettre sous forme de tableau",
                shortcut: "Ctrl + T",
                tag: "Organisation",
                desc: "Transforme une plage de cellules en tableau structuré avec filtres et style automatique.",
                usage:
                  "Dès que tu as une liste de données avec des en-têtes de colonnes.",
                example:
                  "Convertir une liste de commandes en tableau pour filtrer par client.",
                tip: "Un tableau structuré s'agrandit automatiquement quand tu ajoutes une ligne en dessous.",
              },
              {
                name: "Styles de cellules",
                shortcut: "N/A",
                tag: "Design",
                desc: "Applique un ensemble de mises en forme prédéfinies (couleur, police, bordure) à une cellule.",
                usage:
                  "Pour styliser rapidement des titres ou des totaux sans tout régler manuellement.",
                example:
                  "Appliquer le style 'Total' à la dernière ligne d'un tableau de comptes.",
                tip: "Reste cohérent : garde les mêmes styles pour les mêmes types de cellules dans tout le classeur.",
              },
            ],
          },
          {
            name: "Cellules",
            tools: [
              {
                name: "Insérer / Supprimer",
                shortcut: "N/A",
                tag: "Organisation",
                desc: "Ajoute ou retire des lignes, colonnes ou cellules dans la feuille.",
                usage:
                  "Pour réorganiser un tableau après coup, sans tout recommencer.",
                example:
                  "Insérer une nouvelle colonne entre B et C pour ajouter une donnée oubliée.",
                tip: "Les formules s'ajustent automatiquement quand tu insères ou supprimes des lignes/colonnes.",
              },
              {
                name: "Format",
                shortcut: "N/A",
                tag: "Mise en page",
                desc: "Règle la largeur des colonnes, la hauteur des lignes, ou verrouille des cellules.",
                usage: "Pour que le tableau soit lisible et bien proportionné.",
                example:
                  "Ajuster automatiquement la largeur d'une colonne au contenu le plus long.",
                tip: "Double-clique sur le bord d'un en-tête de colonne pour l'ajuster automatiquement à son contenu.",
              },
            ],
          },
          {
            name: "Édition",
            tools: [
              {
                name: "Somme automatique",
                shortcut: "Alt + =",
                tag: "Indispensable",
                desc: "Calcule automatiquement la somme (ou d'autres statistiques) d'une plage de cellules.",
                usage:
                  "Pour totaliser rapidement une colonne ou une ligne de chiffres.",
                example:
                  "Sélectionner une colonne de dépenses et obtenir le total en un clic.",
                tip: "Clique sur la petite flèche à côté du bouton pour accéder aussi à Moyenne, Max, Min…",
              },
              {
                name: "Trier et filtrer",
                shortcut: "N/A",
                tag: "Analyse",
                desc: "Trie les données par ordre croissant/décroissant ou filtre les lignes selon des critères.",
                usage:
                  "Pour analyser une grande liste de données plus facilement.",
                example:
                  "Filtrer un tableau de clients pour n'afficher que ceux d'une seule ville.",
                tip: "Combine-le avec 'Mettre sous forme de tableau' pour des filtres encore plus pratiques.",
              },
              {
                name: "Rechercher et sélectionner",
                shortcut: "Ctrl + F",
                tag: "Navigation",
                desc: "Recherche une valeur précise dans la feuille, ou la remplace automatiquement.",
                usage:
                  "Pour retrouver ou corriger rapidement une donnée dans un grand classeur.",
                example:
                  "Remplacer toutes les occurrences de 'Ancien nom' par 'Nouveau nom' d'un coup.",
                tip: "Ctrl + H ouvre directement la fenêtre 'Rechercher et remplacer'.",
              },
            ],
          },
        ],
      },
      {
        id: "insertion",
        label: "Insertion",
        image: InsertionImg,
        description:
          "L'onglet Insertion regroupe tous les outils pour insérer des éléments dans ta feuille de calcul : tableaux, graphiques, images, liens et bien plus.",
        sections: [
          {
            name: "Tableaux",
            tools: [
              {
                name: "Tableau croisé dynamique",
                shortcut: "N/A",
                tag: "Analyse",
                desc: "Résume et analyse rapidement de grandes quantités de données.",
                usage:
                  "Pour croiser plusieurs colonnes de données (ex : ventes par région et par mois) sans écrire de formule.",
                example:
                  "Croiser une liste de commandes pour voir le total des ventes par client et par produit.",
                tip: "Tu peux glisser-déposer les champs pour changer instantanément l'angle d'analyse.",
              },
              {
                name: "Tableaux croisés recommandés",
                shortcut: "N/A",
                tag: "Gain de temps",
                desc: "Excel suggère automatiquement des tableaux croisés dynamiques adaptés à tes données.",
                usage:
                  "Quand tu ne sais pas encore comment croiser tes données toi-même.",
                example:
                  "Laisser Excel proposer un résumé des ventes par mois à partir d'une liste brute.",
                tip: "Un bon point de départ avant de personnaliser le tableau à la main.",
              },
              {
                name: "Tableau",
                shortcut: "Ctrl + T",
                tag: "Organisation",
                desc: "Crée un tableau structuré pour organiser tes données avec filtres et mise en forme automatique.",
                usage:
                  "Dès que tu as une liste de données avec des en-têtes de colonnes.",
                example:
                  "Transformer une liste de contacts en tableau filtrable.",
                tip: "Un tableau structuré s'étend automatiquement quand tu ajoutes une ligne en dessous.",
              },
            ],
          },
          {
            name: "Illustrations",
            tools: [
              {
                name: "Images",
                shortcut: "N/A",
                tag: "Visuel",
                desc: "Insère des images depuis ton ordinateur ou en ligne.",
                usage: "Pour illustrer un rapport ou ajouter un logo.",
                example:
                  "Ajouter le logo de l'entreprise en haut d'un tableau de bord.",
                tip: "Redimensionne l'image en gardant les proportions avec les coins (pas les bords).",
              },
              {
                name: "Formes",
                shortcut: "N/A",
                tag: "Visuel",
                desc: "Ajoute des formes géométriques prédéfinies (flèches, rectangles, cercles…).",
                usage: "Pour créer un schéma ou mettre en valeur une zone.",
                example:
                  "Entourer d'un rectangle rouge une cellule à corriger.",
                tip: "Maintiens Maj en dessinant pour garder des proportions régulières.",
              },
              {
                name: "Icônes",
                shortcut: "N/A",
                tag: "Visuel",
                desc: "Insère des icônes vectorielles prêtes à l'emploi.",
                usage:
                  "Pour illustrer un titre ou une catégorie sans chercher d'image.",
                example:
                  "Ajouter une icône de graphique à côté du titre 'Résultats'.",
                tip: "Les icônes vectorielles restent nettes même agrandies.",
              },
              {
                name: "Modèles 3D",
                shortcut: "N/A",
                tag: "Visuel",
                desc: "Insère des objets 3D que tu peux faire pivoter.",
                usage: "Pour des présentations plus visuelles et originales.",
                example: "Ajouter un objet 3D dans une présentation produit.",
                tip: "À utiliser avec parcimonie, surtout dans un classeur de données.",
              },
              {
                name: "SmartArt",
                shortcut: "N/A",
                tag: "Visuel",
                desc: "Ajoute des diagrammes prédéfinis pour illustrer des idées ou des processus.",
                usage:
                  "Pour représenter une hiérarchie, un cycle ou des étapes.",
                example: "Créer un organigramme d'équipe avec SmartArt.",
                tip: "Choisis un modèle SmartArt avant de remplir le texte, c'est plus rapide.",
              },
              {
                name: "Capture",
                shortcut: "N/A",
                tag: "Gain de temps",
                desc: "Capture une partie de l'écran pour l'insérer directement dans la feuille.",
                usage:
                  "Pour intégrer un extrait d'une autre fenêtre sans passer par un logiciel externe.",
                example:
                  "Capturer un graphique affiché dans un autre programme et le coller dans Excel.",
                tip: "Pratique pour documenter rapidement une procédure.",
              },
            ],
          },
          {
            name: "Graphiques",
            tools: [
              {
                name: "Graphiques recommandés",
                shortcut: "N/A",
                tag: "Gain de temps",
                desc: "Excel suggère le type de graphique le plus adapté à tes données sélectionnées.",
                usage:
                  "Quand tu ne sais pas quel graphique choisir pour tes données.",
                example:
                  "Sélectionner des ventes mensuelles et laisser Excel proposer un graphique en courbes.",
                tip: "Un bon point de départ, à ajuster ensuite manuellement si besoin.",
              },
              {
                name: "Types de graphiques",
                shortcut: "N/A",
                tag: "Visuel",
                desc: "Insère différents types de graphiques : colonnes, barres, courbes, secteurs, aires, nuage de points, radar…",
                usage:
                  "Pour représenter visuellement une évolution, une comparaison ou une répartition.",
                example:
                  "Utiliser un graphique en secteurs pour montrer la répartition d'un budget.",
                tip: "Le type de graphique doit correspondre au message que tu veux faire passer (évolution → courbe, répartition → secteurs).",
              },
            ],
          },
          {
            name: "Cartes & Graphique croisé dynamique",
            tools: [
              {
                name: "Cartes",
                shortcut: "N/A",
                tag: "Visuel",
                desc: "Insère des cartes géographiques pour visualiser des données par zone.",
                usage:
                  "Quand tes données sont liées à des pays, régions ou villes.",
                example:
                  "Visualiser le chiffre d'affaires par pays sur une carte.",
                tip: "Nécessite que tes données géographiques soient bien orthographiées pour être reconnues.",
              },
              {
                name: "Graphique croisé dynamique",
                shortcut: "N/A",
                tag: "Analyse",
                desc: "Combine les données d'un tableau croisé dynamique dans un graphique interactif.",
                usage:
                  "Pour visualiser et filtrer dynamiquement une analyse croisée.",
                example:
                  "Afficher en graphique les ventes par région, filtrables par année.",
                tip: "Le graphique se met à jour automatiquement si tu changes les filtres du tableau croisé.",
              },
            ],
          },
          {
            name: "Graphiques sparkline",
            tools: [
              {
                name: "Courbe",
                shortcut: "N/A",
                tag: "Visuel",
                desc: "Insère un mini graphique en courbe directement dans une cellule.",
                usage:
                  "Pour visualiser une tendance sans occuper toute une feuille.",
                example:
                  "Afficher l'évolution mensuelle des ventes dans une seule cellule à côté du tableau.",
                tip: "Idéal dans un tableau de bord compact avec beaucoup de lignes.",
              },
              {
                name: "Histogramme",
                shortcut: "N/A",
                tag: "Visuel",
                desc: "Insère un mini graphique en colonnes dans une cellule.",
                usage:
                  "Pour comparer rapidement plusieurs valeurs ligne par ligne.",
                example:
                  "Comparer les ventes de chaque produit d'un coup d'œil dans une colonne.",
                tip: "Combine plusieurs sparklines pour repérer des tendances sur toute une liste.",
              },
              {
                name: "Conclusions et pertes",
                shortcut: "N/A",
                tag: "Analyse",
                desc: "Mini graphique affichant les variations positives ou négatives.",
                usage: "Pour visualiser rapidement les hausses et les baisses.",
                example:
                  "Voir en un coup d'œil quels mois ont été bénéficiaires ou déficitaires.",
                tip: "Très lisible pour un suivi de rentabilité mois par mois.",
              },
            ],
          },
          {
            name: "Filtres",
            tools: [
              {
                name: "Segment",
                shortcut: "N/A",
                tag: "Analyse",
                desc: "Insère des boutons visuels pour filtrer facilement les données d'un tableau ou tableau croisé.",
                usage:
                  "Pour permettre un filtrage rapide sans passer par les menus déroulants.",
                example:
                  "Ajouter un segment pour filtrer les ventes par région d'un simple clic.",
                tip: "Très pratique dans un tableau de bord destiné à d'autres utilisateurs.",
              },
              {
                name: "Chronologie",
                shortcut: "N/A",
                tag: "Analyse",
                desc: "Insère une frise chronologique pour filtrer les données par période.",
                usage:
                  "Quand tes données contiennent des dates que tu veux filtrer visuellement.",
                example:
                  "Filtrer les ventes d'un trimestre en faisant glisser le curseur sur la frise.",
                tip: "Fonctionne uniquement si une colonne de dates est bien reconnue comme telle.",
              },
            ],
          },
          {
            name: "Liens",
            tools: [
              {
                name: "Lien",
                shortcut: "Ctrl + K",
                tag: "Navigation",
                desc: "Insère un lien vers un fichier, une page web, un emplacement dans ce classeur ou un nouvel e-mail.",
                usage:
                  "Pour naviguer rapidement vers une ressource externe ou une autre feuille.",
                example:
                  "Créer un lien vers l'onglet 'Résumé' depuis chaque feuille mensuelle.",
                tip: "Un lien vers un emplacement du classeur permet de créer un sommaire cliquable.",
              },
            ],
          },
          {
            name: "Texte",
            tools: [
              {
                name: "Zone de texte",
                shortcut: "N/A",
                tag: "Visuel",
                desc: "Permet d'insérer des éléments textuels libres dans la feuille.",
                usage:
                  "Pour ajouter un commentaire ou un titre positionné librement, hors des cellules.",
                example:
                  "Ajouter une note explicative flottante à côté d'un graphique.",
                tip: "Une zone de texte peut être déplacée librement, contrairement au texte dans une cellule.",
              },
              {
                name: "En-tête, pied de page, WordArt, Signature, Objet",
                shortcut: "N/A",
                tag: "Mise en page",
                desc: "Ajoute un en-tête/pied de page, du texte stylisé WordArt, une ligne de signature ou un objet externe.",
                usage:
                  "Pour finaliser la présentation d'un document destiné à être imprimé ou partagé.",
                example:
                  "Ajouter une ligne de signature avant d'envoyer un document pour validation.",
                tip: "L'en-tête et le pied de page sont surtout visibles à l'impression ou en aperçu.",
              },
            ],
          },
          {
            name: "Symboles",
            tools: [
              {
                name: "Équation",
                shortcut: "N/A",
                tag: "Académique",
                desc: "Insère des équations mathématiques mises en forme.",
                usage:
                  "Pour présenter une formule mathématique de façon lisible, en dehors d'une cellule de calcul.",
                example:
                  "Afficher la formule d'un calcul d'intérêts composés dans un rapport.",
                tip: "Différent des formules de calcul Excel : c'est ici uniquement pour l'affichage.",
              },
              {
                name: "Symbole",
                shortcut: "N/A",
                tag: "Texte",
                desc: "Insère des symboles spéciaux (€, ©, ™…) absents du clavier.",
                usage:
                  "Pour ajouter un caractère spécial dans un texte ou un titre.",
                example:
                  "Insérer le symbole © dans un pied de page de document officiel.",
                tip: "Certains symboles ont un raccourci clavier associé, affiché dans la fenêtre Symbole.",
              },
            ],
          },
          {
            name: "Repères généraux de la fenêtre",
            tools: [
              {
                name: "Zone de travail",
                shortcut: "N/A",
                tag: "Navigation",
                desc: "La grille composée de lignes (1, 2, 3…) et de colonnes (A, B, C…) où tu saisis et organises tes données.",
                usage:
                  "C'est l'espace principal de travail de toute feuille Excel.",
                example:
                  "Saisir une liste de dépenses colonne par colonne dans la zone de travail.",
                tip: "Utilise Ctrl + flèches pour te déplacer instantanément jusqu'au bord des données.",
              },
              {
                name: "Feuilles",
                shortcut: "N/A",
                tag: "Navigation",
                desc: "Chaque feuille est un onglet en bas de la fenêtre ; clique sur '+' pour en ajouter une nouvelle.",
                usage:
                  "Pour organiser un classeur en plusieurs feuilles (ex : une par mois).",
                example:
                  "Créer une feuille par mois de l'année dans un même classeur budgétaire.",
                tip: "Double-clique sur le nom d'un onglet pour le renommer directement.",
              },
              {
                name: "Barre d'état",
                shortcut: "N/A",
                tag: "Navigation",
                desc: "Affiche des informations utiles : mode d'affichage, zoom, calculs rapides, accessibilité, etc.",
                usage:
                  "Pour vérifier rapidement une somme ou une moyenne sans écrire de formule.",
                example:
                  "Sélectionner une plage de cellules et lire directement leur somme en bas de l'écran.",
                tip: "Clique droit sur la barre d'état pour choisir quelles statistiques y afficher.",
              },
            ],
          },
        ],
      },
      {
        id: "mise-en-page",
        label: "Mise en page",
        image: MiseEnPageImg,
        description:
          "Contrôlez l'apparence générale de la page : marges, orientation et organisation du texte.",
        sections: [
          {
            name: "Configuration de la page",
            tools: [
              {
                name: "Marges",
                shortcut: "N/A",
                tag: "Indispensable",
                desc: "Ajuste l'espace vide autour des bords de la feuille (Haut, Bas, Gauche, Droite).",
                usage:
                  "Pour gagner de la place en réduisant les marges ou respecter une norme.",
                example:
                  "Passer les marges de 'Normales' à 'Etroites' pour faire tenir un texte sur une page.",
                tip: "Attention à ne pas mettre des marges trop petites sinon l'imprimante coupera le texte.",
              },
              {
                name: "Orientation (Portrait / Paysage)",
                shortcut: "N/A",
                tag: "Mise en page",
                desc: "Bascule la feuille en position verticale (Portrait) ou horizontale (Paysage).",
                usage:
                  "Utilise le mode Paysage pour des tableaux larges, diplômes ou affiches.",
                example:
                  "Mettre la page en Paysage pour créer un grand calendrier mensuel.",
                tip: "Par défaut, Word ouvre les fichiers en mode Portrait.",
              },
              {
                name: "Colonnes",
                shortcut: "N/A",
                tag: "Mise en forme",
                desc: "Sépare le texte en 2 ou plusieurs colonnes verticales.",
                usage:
                  "Pour écrire un journal, un dépliant (flyer) ou un article d'information.",
                example:
                  "Présenter un texte sur 2 colonnes comme dans un journal d'actualités.",
                tip: "Ajoute un 'Saut de colonne' pour forcer le texte à passer à la colonne suivante.",
              },
            ],
          },
        ],
      },
      {
        id: "formules",
        label: "Formules",
        image: FormulesImg,
        description:
          "L'onglet Formules regroupe tous les outils pour créer, gérer et vérifier les formules afin d'effectuer des calculs et d'analyser tes données.",
        sections: [
          {
            name: "Bibliothèque de fonctions",
            tools: [
              {
                name: "Insérer une fonction",
                shortcut: "N/A",
                tag: "Indispensable",
                desc: "Ouvre l'Assistant Fonction pour rechercher et insérer une fonction.",
                usage:
                  "Utile pour choisir la bonne fonction et connaître ses arguments quand tu ne la connais pas par cœur.",
                example:
                  "Rechercher une fonction pour calculer un écart-type sans connaître son nom exact.",
                tip: "L'assistant explique chaque argument attendu, pratique pour apprendre de nouvelles fonctions.",
              },
              {
                name: "Somme automatique",
                shortcut: "Alt + =",
                tag: "Indispensable",
                desc: "Insère automatiquement la fonction SOMME et calcule rapidement le total d'une plage de cellules.",
                usage:
                  "Propose aussi MOYENNE, NB, MAX, MIN via la petite flèche du bouton.",
                example:
                  "Sélectionner une colonne de chiffres et obtenir le total en un clic.",
                tip: "Excel détecte automatiquement la plage de cellules à additionner au-dessus ou à gauche.",
              },
              {
                name: "Récentes",
                shortcut: "N/A",
                tag: "Gain de temps",
                desc: "Affiche la liste des fonctions récemment utilisées, pour les réinsérer facilement.",
                usage:
                  "Quand tu réutilises souvent les mêmes fonctions dans un classeur.",
                example:
                  "Retrouver rapidement RECHERCHEV utilisée un peu plus tôt dans la feuille.",
                tip: "Évite de rechercher à nouveau une fonction que tu viens d'utiliser.",
              },
              {
                name: "Financier",
                shortcut: "N/A",
                tag: "Finance",
                desc: "Regroupe les fonctions financières : intérêts, remboursements, annuités, valeurs actuelles et futures, etc.",
                usage:
                  "Pour des calculs liés à des emprunts, placements ou investissements.",
                example: "Utiliser VPM pour calculer la mensualité d'un prêt.",
                tip: "Ex. de fonctions : VA, VPM, TAUX.",
              },
              {
                name: "Logique",
                shortcut: "N/A",
                tag: "Indispensable",
                desc: "Contient les fonctions logiques pour effectuer des tests et des conditions.",
                usage:
                  "Pour faire dépendre un résultat d'une ou plusieurs conditions.",
                example:
                  "Utiliser SI pour afficher 'Réussi' ou 'Échoué' selon une note.",
                tip: "Ex. de fonctions : SI, ET, OU, NON, SIERREUR.",
              },
              {
                name: "Texte",
                shortcut: "N/A",
                tag: "Organisation",
                desc: "Fonctions pour manipuler du texte : concaténer, extraire, remplacer, changer la casse…",
                usage:
                  "Pour nettoyer ou reformater des données textuelles importées.",
                example:
                  "Concaténer un prénom et un nom dans une seule cellule.",
                tip: "Ex. de fonctions : GAUCHE, DROITE, CONCATENER.",
              },
              {
                name: "Date/Heure",
                shortcut: "N/A",
                tag: "Organisation",
                desc: "Fonctions liées aux dates et aux heures : calculs de dates, différences de jours, extraction d'année, mois, jour, etc.",
                usage: "Pour automatiser des calculs de délais ou d'échéances.",
                example:
                  "Calculer le nombre de jours restants avant une échéance avec DATEDIF.",
                tip: "Ex. de fonctions : AUJOURD'HUI, MAINTENANT, DATEDIF.",
              },
              {
                name: "Recherche et référence",
                shortcut: "N/A",
                tag: "Indispensable",
                desc: "Fonctions pour rechercher des valeurs et faire référence à des données ailleurs dans le classeur.",
                usage:
                  "Recherche verticale, horizontale, par index, ou zone nommée.",
                example:
                  "Utiliser RECHERCHEV pour retrouver le prix d'un produit à partir de son nom.",
                tip: "Ex. de fonctions : RECHERCHEV, INDEX, EQUIV, DECALER.",
              },
              {
                name: "Maths et trigonométrie",
                shortcut: "N/A",
                tag: "Précision",
                desc: "Regroupe les fonctions mathématiques et trigonométriques.",
                usage:
                  "Calculs arithmétiques, arrondis, puissances, fonctions trigonométriques…",
                example: "Utiliser RACINE pour calculer une racine carrée.",
                tip: "Ex. de fonctions : SOMME, RACINE, SIN, COS.",
              },
              {
                name: "Plus de fonctions",
                shortcut: "N/A",
                tag: "Analyse",
                desc: "Donne accès à d'autres catégories de fonctions : Statistiques, Ingénierie, Compatibilité, Cube, Web…",
                usage: "Pour des besoins plus spécifiques ou avancés.",
                example:
                  "Utiliser une fonction statistique pour calculer un écart-type.",
                tip: "À explorer une fois les fonctions de base bien maîtrisées.",
              },
            ],
          },
          {
            name: "Noms définis",
            tools: [
              {
                name: "Gestionnaire de noms",
                shortcut: "N/A",
                tag: "Organisation",
                desc: "Permet de définir, gérer et utiliser des noms pour une cellule ou une plage de cellules dans le classeur.",
                usage:
                  "Pour rendre les formules plus lisibles en remplaçant des références par des noms clairs.",
                example:
                  "Nommer 'TauxTVA' la cellule B1 pour l'utiliser ensuite dans des formules.",
                tip: "Un nom bien choisi rend une formule beaucoup plus facile à relire plus tard.",
              },
              {
                name: "Définir un nom",
                shortcut: "N/A",
                tag: "Organisation",
                desc: "Crée un nom pour une cellule ou une plage sélectionnée.",
                usage:
                  "Avant d'utiliser ce nom dans une ou plusieurs formules.",
                example: "Définir 'Ventes2026' pour la plage B2:B13.",
                tip: "Évite les espaces et accents dans le nom, préfère la casse mixte (ex : Ventes2026).",
              },
              {
                name: "Dans une formule / Depuis la sélection",
                shortcut: "N/A",
                tag: "Organisation",
                desc: "Utilise des noms déjà définis dans une formule, ou crée un nom directement à partir d'une sélection.",
                usage:
                  "Pour accélérer la création de formules basées sur des noms.",
                example:
                  "Insérer 'TauxTVA' dans une formule au lieu de taper '=B1'.",
                tip: "Depuis la sélection permet de nommer plusieurs plages d'un coup à partir des en-têtes.",
              },
            ],
          },
          {
            name: "Vérification des formules",
            tools: [
              {
                name: "Repérer les antécédents / dépendants",
                shortcut: "N/A",
                tag: "Analyse",
                desc: "Affiche les cellules qui alimentent la cellule sélectionnée (antécédents), ou celles qui en dépendent (dépendants).",
                usage:
                  "Pour comprendre l'origine ou l'impact d'une formule complexe.",
                example:
                  "Voir quelles cellules seraient affectées si tu modifies le taux de TVA.",
                tip: "Très utile avant de modifier une formule utilisée à plusieurs endroits.",
              },
              {
                name: "Supprimer les flèches",
                shortcut: "N/A",
                tag: "Organisation",
                desc: "Supprime les flèches d'audit des formules affichées à l'écran.",
                usage:
                  "Une fois l'analyse des antécédents/dépendants terminée.",
                example:
                  "Nettoyer l'affichage après avoir vérifié l'origine d'un calcul.",
                tip: "Pense à l'utiliser pour ne pas garder un écran surchargé de flèches.",
              },
              {
                name: "Afficher les formules",
                shortcut: "Ctrl + `",
                tag: "Analyse",
                desc: "Remplace les résultats par les formules elles-mêmes dans toute la feuille.",
                usage:
                  "Pour vérifier rapidement toutes les formules d'une feuille d'un coup d'œil.",
                example:
                  "Contrôler que toutes les cellules d'une colonne utilisent bien la même formule.",
                tip: "Pratique pour relire ou auditer un classeur reçu de quelqu'un d'autre.",
              },
              {
                name: "Vérification des erreurs",
                shortcut: "N/A",
                tag: "Analyse",
                desc: "Détecte les erreurs dans les formules (références invalides, incohérences…).",
                usage:
                  "Pour repérer automatiquement les formules potentiellement fausses.",
                example: "Détecter une référence circulaire créée par erreur.",
                tip: "Ne remplace pas une relecture attentive, mais aide à repérer les cas évidents.",
              },
              {
                name: "Évaluer la formule",
                shortcut: "N/A",
                tag: "Précision",
                desc: "Évalue une formule étape par étape pour comprendre son calcul.",
                usage:
                  "Pour déboguer une formule complexe qui ne donne pas le résultat attendu.",
                example:
                  "Suivre pas à pas le calcul d'une formule imbriquant plusieurs SI.",
                tip: "Très utile pour apprendre à décomposer des formules complexes.",
              },
              {
                name: "Fenêtre Espion",
                shortcut: "N/A",
                tag: "Analyse",
                desc: "Surveille et évalue plusieurs formules en même temps dans une fenêtre dédiée.",
                usage:
                  "Pour suivre l'évolution de plusieurs résultats clés pendant que tu modifies le classeur.",
                example:
                  "Garder un œil sur le total général pendant que tu ajustes des valeurs ailleurs dans la feuille.",
                tip: "Utile pour le débogage de calculs complexes répartis sur plusieurs feuilles.",
              },
            ],
          },
          {
            name: "Calcul",
            tools: [
              {
                name: "Options de calcul",
                shortcut: "N/A",
                tag: "Organisation",
                desc: "Permet de contrôler le mode de calcul du classeur : Automatique ou Manuel.",
                usage:
                  "Automatique recalcule à chaque modification ; Manuel ne recalcule que lorsque tu le demandes.",
                example:
                  "Passer en mode Manuel sur un classeur très lourd pour éviter les ralentissements.",
                tip: "En mode Manuel, pense bien à recalculer avant de lire les résultats finaux.",
              },
              {
                name: "Calculer maintenant / Calculer la feuille",
                shortcut: "F9",
                tag: "Précision",
                desc: "Calculer maintenant recalcule toutes les feuilles du classeur ; Calculer la feuille ne recalcule que la feuille active.",
                usage: "Surtout utile en mode de calcul Manuel.",
                example:
                  "Forcer un recalcul complet après avoir collé de nombreuses nouvelles données.",
                tip: "F9 est le raccourci clavier pour 'Calculer maintenant'.",
              },
            ],
          },
        ],
      },

    ],
  },
];
