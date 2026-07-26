import fichierImg from "./images/Fichier.png";
import acceuilImg from "./images/Acceuil.png";
import animationImg from "./images/Animation.png";
import conceptionImg from "./images/conception.png";
import transitionImg from "./images/Transition.png";

export const courPowerPointDetails = [
  {
    id: "powerpoint-guide",
    title: "Guide Complet PowerPoint",
    description:
      "Découvrez en détail les fonctionnalités de chaque onglet de PowerPoint avec des visuels clairs, des explications pratiques et des astuces.",
    tabs: [
      {
        id: "ecran-accueil",
        label: "Écran d'accueil",
        image: fichierImg,
        description:
          "L'écran d'accueil vous permet de démarrer rapidement une présentation, de retrouver vos fichiers récents et d'accéder aux paramètres généraux.",
        sections: [
          {
            name: "Barre de navigation",
            tools: [
              {
                name: "Accueil & Nouveau",
                tag: "Indispensable",
                desc: "Accès rapide à l'écran principal et création d'une nouvelle présentation vierge ou via modèle.",
                usage:
                  "Au démarrage de PowerPoint ou pour débuter un nouveau projet.",
                example: "Créer une présentation vierge pour un rapport.",
                tip: "Utilisez le raccourci Ctrl + N pour créer directement un nouveau fichier.",
              },
              {
                name: "Ouvrir",
                tag: "Navigation",
                desc: "Permet de parcourir vos dossiers locaux ou cloud pour ouvrir un fichier existant.",
                usage:
                  "Pour reprendre le travail sur une présentation enregistrée.",
                example: "Ouvrir la présentation 'Revue de projet.pptx'.",
                tip: "Raccourci : Ctrl + O pour ouvrir la fenêtre de sélection.",
              },
              {
                name: "Compte & Options",
                tag: "Organisation",
                desc: "Gérer vos informations de compte Microsoft et configurer les paramètres avancés de PowerPoint.",
                usage:
                  "Pour personnaliser le thème de l'application ou activer l'enregistrement automatique.",
                example: "Passer l'interface en mode sombre.",
                tip: "Pensez à vérifier régulièrement les mises à jour dans la section Compte.",
              },
            ],
          },
          {
            name: "Gestion des documents récents",
            tools: [
              {
                name: "Documents récents & Favoris",
                tag: "Organisation",
                desc: "Affiche la liste chronologique des derniers fichiers ouverts ainsi que ceux épinglés.",
                usage:
                  "Pour retrouver instantanément vos fichiers de travail fréquents.",
                example:
                  "Épingler la présentation mensuelle pour ne pas la chercher.",
                tip: "Cliquez sur l'icône de punaise à droite d'un fichier pour l'ajouter aux favoris.",
              },
            ],
          },
        ],
      },
      {
        id: "onglet-accueil",
        label: "Accueil",
        image: acceuilImg,
        description:
          "L'onglet Accueil regroupe les commandes de base les plus utilisées au quotidien pour la création et la mise en forme.",
        sections: [
          {
            name: "Presse-papiers & Diapositives",
            tools: [
              {
                name: "Presse-papiers (Copier / Coller)",
                tag: "Indispensable",
                shortcut: "Ctrl + C / Ctrl + V",
                desc: "Copier, couper, coller et reproduire la mise en forme d'un élément vers un autre.",
                usage:
                  "Pour dupliquer du contenu ou appliquer un style identique.",
                example:
                  "Copier la mise en forme d'un titre vers d'autres diapos.",
                tip: "Le pinceau 'Reproduire la mise en forme' s'active en double-cliquant pour un usage multiple.",
              },
              {
                name: "Nouvelle diapositive & Disposition",
                tag: "Mise en page",
                shortcut: "Ctrl + M",
                desc: "Ajouter une diapositive et choisir sa structure prédéfinie (Titre, Contenu, 2 colonnes).",
                usage: "Pour structurer l'enchaînement de vos idées.",
                example:
                  "Insérer une diapo avec 2 colonnes pour comparer deux produits.",
                tip: "Vous pouvez changer la disposition d'une diapo existante sans perdre son contenu.",
              },
            ],
          },
          {
            name: "Police & Paragraphe",
            tools: [
              {
                name: "Mise en forme du texte",
                tag: "Mise en valeur",
                shortcut: "Ctrl + G / Ctrl + I",
                desc: "Modifier la police, la taille, la couleur, le gras, l'italique et l'espacement des lettres.",
                usage:
                  "Pour hiérarchiser l'information et rendre le texte lisible.",
                example:
                  "Mettre les mots-clés en gras et en couleur d'accentuation.",
                tip: "Évitez d'utiliser plus de 2 polices différentes dans une même présentation.",
              },
              {
                name: "Puces, Numérotation & Alignement",
                tag: "Lisibilité",
                desc: "Organiser le texte sous forme de listes et ajuster l'alignement (gauche, centre, droite).",
                usage:
                  "Pour présenter des listes d'idées claires et synthétiques.",
                example:
                  "Créer une liste à puces pour les 5 objectifs du trimestre.",
                tip: "Utilisez 'Augmenter le retrait' pour créer des sous-puces hiérarchisées.",
              },
            ],
          },
          {
            name: "Dessin & Édition",
            tools: [
              {
                name: "Formes & Organiser",
                tag: "Design",
                desc: "Insérer des formes géométriques, flèches, puis gérer leur alignement et chevauchement.",
                usage:
                  "Pour construire des schémas visuels ou encadrer des zones.",
                example: "Dessiner une flèche reliant une cause à son effet.",
                tip: "Maintenez Maj enfoncé lors de la création d'une forme pour obtenir un carré ou cercle parfait.",
              },
              {
                name: "Rechercher et Remplacer",
                tag: "Précision",
                shortcut: "Ctrl + H",
                desc: "Trouver rapidement un terme et le remplacer dans toute la présentation.",
                usage: "Pour corriger un terme récurent ou un nom de marque.",
                example: "Remplacer 'Projet X' par 'Projet Horizon' partout.",
                tip: "Très utile pour corriger les fautes ou adapter le nom d'un client.",
              },
            ],
          },
        ],
      },
      {
        id: "onglet-conception",
        label: "Conception",
        image: conceptionImg,
        description:
          "Définissez le style visuel global de votre présentation : thèmes, jeux de couleurs et formats de diapositives.",
        sections: [
          {
            name: "Thèmes & Variantes",
            tools: [
              {
                name: "Thèmes prédéfinis",
                tag: "Design",
                desc: "Appliquer un ensemble coordonné de couleurs, polices et arrière-plans à toute la présentation.",
                usage:
                  "Dès le début du projet pour donner une identité visuelle harmonieuse.",
                example:
                  "Appliquer un thème professionnel sobre pour un rendez-vous client.",
                tip: "Le thème s'applique instantanément à l'ensemble des diapositives.",
              },
              {
                name: "Variantes de couleurs",
                tag: "Mise en valeur",
                desc: "Personnaliser la palette de couleurs et les nuances du thème sélectionné.",
                usage:
                  "Pour adapter le thème aux couleurs de votre charte graphique.",
                example: "Passer la couleur dominante du bleu au vert.",
                tip: "Vous pouvez créer votre propre palette de couleurs personnalisée.",
              },
            ],
          },
          {
            name: "Personnalisation du format",
            tools: [
              {
                name: "Taille des diapositives",
                tag: "Mise en page",
                desc: "Choisir entre le format Écran large (16:9) ou Standard (4:3).",
                usage:
                  "Avant de commencer la création pour s'adapter à l'écran de diffusion.",
                example:
                  "Utiliser 16:9 pour les écrans et projecteurs modernes.",
                tip: "Le format 16:9 est le standard recommandé pour toutes les présentations actuelles.",
              },
              {
                name: "Mise en forme de l'arrière-plan",
                tag: "Design",
                desc: "Appliquer une couleur unie, un dégradé ou une image en fond de diapositive.",
                usage: "Pour créer des diapositives d'impact ou de transition.",
                example:
                  "Mettre un fond sombre sur la diapositive de conclusion.",
                tip: "Utilisez 'Appliquer partout' pour harmoniser toutes vos diapos d'un seul clic.",
              },
            ],
          },
        ],
      },
      {
        id: "onglet-transitions",
        label: "Transitions",
        image: transitionImg,
        description:
          "Ajoutez des effets visuels lors du passage d'une diapositive à la suivante et gérez le minutage du diaporama.",
        sections: [
          {
            name: "Effets de transition",
            tools: [
              {
                name: "Transition Morphose",
                tag: "Indispensable",
                desc: "Crée un mouvement d'animation fluide et automatique entre les objets identiques de 2 diapos.",
                usage:
                  "Pour animer des schémas, déplacer des éléments ou faire des zooms.",
                example:
                  "Faire agrandir une image d'une diapo à l'autre sans rupture.",
                tip: "Pour un rendu parfait, dupliquez la diapositive d'origine et déplacez simplement les éléments.",
              },
              {
                name: "Fondu, Pousser & Balayer",
                tag: "Navigation",
                desc: "Transitions classiques et élégantes pour enchaîner les diapositives.",
                usage: "Pour lisser le passage d'un sujet à un autre.",
                example:
                  "Utiliser 'Fondu' pour un changement de chapitre en douceur.",
                tip: "Privilégiez les transitions sobres pour ne pas déconcentrer l'audience.",
              },
            ],
          },
          {
            name: "Options & Minutage",
            tools: [
              {
                name: "Options de l'effet & Durée",
                tag: "Précision",
                desc: "Définir le sens du mouvement (ex: de gauche à droite) et la vitesse d'exécution.",
                usage: "Pour ajuster le rythme visuel de la transition.",
                example: "Régler la durée d'un fondu à 1,00 seconde.",
                tip: "Une durée entre 0,5s et 1,5s reste le bon compromis entre fluidité et dynamisme.",
              },
              {
                name: "Passer à la diapositive suivante",
                tag: "Organisation",
                desc: "Définir si le passage se fait au clic de souris ou automatiquement après un délai.",
                usage:
                  "Pour les présentations autonomes ou les bornes interactives.",
                example:
                  "Programmer un défilement automatique toutes les 10 secondes.",
                tip: "Conservez 'Au clic' pour garder le contrôle lors d'une présentation orale.",
              },
            ],
          },
        ],
      },
      {
        id: "onglet-animations",
        label: "Animations",
        image: animationImg,
        description:
          "Animez les éléments individuels (textes, images, formes) de vos diapositives pour rythmer votre discours.",
        sections: [
          {
            name: "Types d'animations",
            tools: [
              {
                name: "Animations d'Entrée (Apparaître, Fondu)",
                tag: "Indispensable",
                desc: "Faire apparaître un objet sur la diapositive lors de votre prise de parole.",
                usage:
                  "Pour révéler les points d'une liste au fur et à mesure.",
                example: "Faire apparaître chaque puce de texte une par une.",
                tip: "L'animation 'Fondu' offre le rendu le plus propre et le plus professionnel.",
              },
              {
                name: "Accentuation & Sortie",
                tag: "Mise en valeur",
                desc: "Attirer l'attention sur un élément (agrandir, changer de couleur) ou le faire disparaître.",
                usage:
                  "Pour mettre en relief un chiffre clé pendant que vous en parlez.",
                example: "Faire clignoter un graphique important.",
                tip: "N'utilisez les animations de sortie que si nécessaire pour libérer de l'espace.",
              },
            ],
          },
          {
            name: "Gestion des animations",
            tools: [
              {
                name: "Volet Animation",
                tag: "Analyse",
                desc: "Affiche le volet latéral listant et ordonnant toutes les animations de la diapositive.",
                usage:
                  "Pour modifier l'ordre, régler les déclencheurs et tester la chronologie.",
                example:
                  "Recommander la 3ème animation pour qu'elle passe en 1ère position.",
                tip: "Le Volet Animation est indispensable dès que vous avez plus de 2 animations sur une diapo.",
              },
              {
                name: "Démarrage & Minutage",
                tag: "Précision",
                desc: "Choisir le mode d'exécution : 'Au clic', 'Avec la précédente' ou 'Après la précédente'.",
                usage:
                  "Pour synchroniser plusieurs apparitions simultanées ou en chaîne.",
                example:
                  "Faire apparaître le titre et l'image en même temps ('Avec la précédente').",
                tip: "Le réglage 'Après la précédente' évite d'avoir à cliquer continuellement sur la souris.",
              },
            ],
          },
        ],
      },
    ],
  },
];
