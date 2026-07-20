import FichierImg from "./images/Fichier.png";
import InsertionImg from "./images/Insertion.png";
import AccueilImg from "./images/Acceuil.png";
// TODO : ajoute les captures d'écran correspondantes et importe-les ici
// import MiseEnPageImg from "./images/MiseEnPage.png";
// import ReferencesImg from "./images/References.png";
// import PublipostageImg from "./images/Publipostage.png";
// import RevisionImg from "./images/Revision.png";
// import AffichageImg from "./images/Affichage.png";

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
        sections: [
          {
            name: "Gestion des Fichiers & Sauvegarde",
            tools: [
              {
                name: "Nouveau",
                shortcut: "Ctrl + N",
                tag: "Indispensable",
                desc: "Crée un nouveau document vierge ou à partir d'un modèle prédéfini (CV, lettre, rapport).",
                usage: "Dès que tu démarrers un tout nouveau travail sur Word.",
                example: "Créer un document vierge pour rédiger une nouvelle lettre de motivation.",
                tip: "Ctrl + N permet de créer un document vierge instantanément."
              },
              {
                name: "Ouvrir",
                shortcut: "Ctrl + O",
                tag: "Indispensable",
                desc: "Ouvre un document Microsoft Word existant stocké sur ton ordinateur ou sur OneDrive.",
                usage: "Pour reprendre un travail déjà commencé ou consulter un fichier envoyé par un collègue.",
                example: "Ouvrir le fichier 'Exercice1_Word.docx' enregistré la veille.",
                tip: "Les fichiers récents s'affichent directement à droite pour un accès rapide."
              },
              {
                name: "Enregistrer",
                shortcut: "Ctrl + S",
                tag: "Sauvegarde",
                desc: "Sauvegarde les modifications apportées au document actuel sans changer son nom ni son emplacement.",
                usage: "À utiliser très souvent (toutes les 5 minutes) pendant la rédaction pour éviter de perdre ton travail.",
                example: "Sauvegarder ton texte au fur et à mesure que tu ajoutes des paragraphes.",
                tip: "Fais du raccourci Ctrl + S un réflexe automatique !"
              },
              {
                name: "Enregistrer sous",
                shortcut: "F12",
                tag: "Sauvegarde",
                desc: "Permet de sauvegarder le document sous un NOUVEAU nom, dans un AUTRE dossier ou sous un AUTRE format (comme PDF).",
                usage: "Pour créer une deuxième version d'un document ou exporter un travail en version finale PDF.",
                example: "Convertir un CV Word en format PDF avant de l'envoyer par e-mail.",
                tip: "Appuie sur F12 pour ouvrir directement la fenêtre d'enregistrement."
              },
              {
                name: "Imprimer",
                shortcut: "Ctrl + P",
                tag: "Impression",
                desc: "Affiche la prévisualisation de la page et permet de configurer l'imprimante (copies, recto-verso, marges).",
                usage: "Avant d'imprimer sur papier pour vérifier la mise en page et éviter les erreurs de format.",
                example: "Vérifier que le rapport ne comporte pas une ligne seule sur la dernière page avant de lancer l'impression.",
                tip: "Vérifie toujours l'aperçu avant d'imprimer pour économiser du papier et de l'encre."
              }
            ]
          }
        ]
      },
      {
        id: "accueil",
        label: "Accueil",
        image: AccueilImg,
        description:
          "L'onglet principal pour rédiger, formater la police, aligner les paragraphes et appliquer des styles.",
        sections: [
          {
            name: "1. Presse-papiers",
            tools: [
              {
                name: "Copier / Couper / Coller",
                shortcut: "Ctrl + C / Ctrl + X / Ctrl + V",
                tag: "Indispensable",
                desc: "Copier duplique le texte, Couper le déplace, et Coller le positionne à l'endroit voulu.",
                usage: "Pour déplacer ou réutiliser des morceaux de texte sans devoir tout réécrire.",
                example: "Copier une adresse depuis un site internet et la coller dans ton document.",
                tip: "Ctrl+C = Copier, Ctrl+X = Couper, Ctrl+V = Coller."
              },
              {
                name: "Reproduire la mise en forme",
                shortcut: "Ctrl + Maj + C / Ctrl + Maj + V",
                tag: "Gain de temps",
                desc: "Copie uniquement le style (couleur, taille, police) d'un texte pour l'appliquer à un autre.",
                usage: "Pour harmoniser rapidement l'apparence des titres ou sous-titres.",
                example: "Appliquer la même couleur et taille sur tous tes sous-titres d'un simple clic.",
                tip: "Double-clique sur l'outil pour appliquer le style à plusieurs endroits de suite."
              }
            ]
          },
          {
            name: "2. Police (Mise en forme du texte)",
            tools: [
              {
                name: "Gras (G)",
                shortcut: "Ctrl + G",
                tag: "Mise en valeur",
                desc: "Epaissit le texte sélectionné pour le rendre plus visible et important.",
                usage: "Pour faire ressortir des mots-clés, des termes importants ou des titres.",
                example: "Mettre en **gras** la date limite d'un devoir.",
                tip: "N'utilise pas le gras sur des paragraphes entiers, cela rend la lecture difficile."
              },
              {
                name: "Italique (I)",
                shortcut: "Ctrl + I",
                tag: "Mise en valeur",
                desc: "Incline légèrement le texte vers la droite.",
                usage: "Utilisé pour les citations, les mots en langue étrangère ou les titres d'œuvres.",
                example: "Écrire une citation : *'Au bout de l'effort se trouve le succès'*",
                tip: "L'italique apporte une touche de subtilité sans alourdir le texte."
              },
              {
                name: "Souligné (S)",
                shortcut: "Ctrl + S",
                tag: "Mise en valeur",
                desc: "Ajoute une ligne continue sous le texte sélectionné.",
                usage: "Pour insister sur un mot ou structurer un titre secondaire.",
                example: "Souligner les consignes importantes dans un sujet d'examen.",
                tip: "Évite de souligner trop de textes pour ne pas confondre avec des liens hypertexte."
              },
              {
                name: "Police & Taille de police",
                shortcut: "Ctrl + Maj + F / P",
                tag: "Indispensable",
                desc: "Change le style de caractères (ex: Calibri, Arial, Times New Roman) et la taille du texte.",
                usage: "Taille 11-12pt pour le texte normal, 14-18pt pour les titres.",
                example: "Mettre les titres en Arial 16pt et le corps du texte en Calibri 11pt.",
                tip: "Ne mélange pas plus de 2 polices différentes dans le même document."
              },
              {
                name: "Couleur de texte & Surlignage",
                shortcut: "N/A",
                tag: "Design",
                desc: "Change la couleur des lettres ou applique une bande de couleur fluo derrière le texte.",
                usage: "Pour hiérarchiser les informations ou repérer les parties révisées.",
                example: "Surligner en jaune fluo une formule importante à retenir.",
                tip: "Gardez des couleurs sombres pour le texte afin de garantir une bonne lisibilité."
              }
            ]
          },
          {
            name: "3. Paragraphe (Alignement & Listes)",
            tools: [
              {
                name: "Puces & Numérotation",
                shortcut: "N/A",
                tag: "Organisation",
                desc: "Crée des listes ordonnées (1, 2, 3) ou non ordonnées (puces, symboles).",
                usage: "Pour lister des éléments de manière claire et structurée.",
                example: "Faire la liste des fournitures scolaires ou les étapes d'un projet.",
                tip: "Appuie sur 'Entrée' pour passer automatiquement à la puce suivante."
              },
              {
                name: "Alignement (Gauche, Centré, Droite, Justifié)",
                shortcut: "Ctrl + J (Justifié)",
                tag: "Mise en page",
                desc: "Positionne le texte sur la largeur de la page : à gauche (par défaut), centré, à droite ou étiré uniformément (justifié).",
                usage: "Centré pour les titres, Justifié pour les rapports administratifs et lettres officielles.",
                example: "Centrer le grand titre au milieu de la page de garde.",
                tip: "Le texte 'Justifié' rend vos bordures de texte parfaitement droites à gauche comme à droite."
              },
              {
                name: "Interligne & Espacement",
                shortcut: "N/A",
                tag: "Lisibilité",
                desc: "Ajuste l'espace vertical entre les lignes de texte et entre les paragraphes.",
                usage: "Pour aérer un document trop dense et rendre la lecture plus confortable.",
                example: "Définir un interligne de 1.5 pour rendre un devoir facile à corriger.",
                tip: "Un interligne de 1.15 à 1.5 est idéal pour la plupart des documents officiels."
              }
            ]
          },
          {
            name: "4. Styles & Structure",
            tools: [
              {
                name: "Styles (Titre 1, Titre 2, Normal)",
                shortcut: "Alt + Ctrl + 1",
                tag: "Essentiel",
                desc: "Applique un formatage prédéfini qui informe Word de la structure hiérarchique de votre document.",
                usage: "Indispensable pour créer des rapports long et structurés.",
                example: "Appliquer 'Titre 1' pour les grands chapitres et 'Titre 2' pour les sous-sections.",
                tip: "Utiliser les Styles est obligatoire si tu veux générer une Table des matières automatique !"
              }
            ]
          }
        ]
      },
      {
        id: "insertion",
        label: "Insertion",
        image: InsertionImg,
        description:
          "Enrichissez votre document avec des éléments visuels, structurels et interactifs.",
        sections: [
          {
            name: "Tableaux & Visuels",
            tools: [
              {
                name: "Tableau",
                shortcut: "N/A",
                tag: "Incontournable",
                desc: "Insère une grille organisée en colonnes et lignes pour présenter des données.",
                usage: "Pour organiser des données, créer un emploi du temps ou faire des comparaisons.",
                example: "Créer un tableau de 3 colonnes pour la liste des étudiants, présent et absent.",
                tip: "La touche 'Tab' permet de passer de case en case très rapidement."
              },
              {
                name: "Images & Formes",
                shortcut: "N/A",
                tag: "Visuel",
                desc: "Insère des photos depuis l'ordinateur ou des formes géométriques (flèches, rectages, cercles).",
                usage: "Pour illustrer un texte, faire un schéma explicatif ou ajouter un logo.",
                example: "Ajouter un logo d'école en haut à droite d'un document.",
                tip: "Change l'habillage de l'image en 'Carré' pour la déplacer librement autour du texte."
              }
            ]
          },
          {
            name: "Entêtes, Pieds de page & Numérotation",
            tools: [
              {
                name: "Numéro de page",
                shortcut: "N/A",
                tag: "Document long",
                desc: "Numérote automatiquement chaque page du document en haut ou en bas.",
                usage: "Indispensable dès que ton document comporte plus de 2 pages.",
                example: "Ajouter 'Page X sur Y' au bas de chaque feuille.",
                tip: "Place la numérotation en bas au centre ou en bas à droite pour un style classique."
              },
              {
                name: "En-tête / Pied de page",
                shortcut: "N/A",
                tag: "Mise en page",
                desc: "Zone répétée automatiquement sur toutes les pages tout en haut ou tout en bas.",
                usage: "Pour afficher le nom de l'auteur, le titre du document ou la date.",
                example: "Mettre 'Module Word 2026' en haut de chaque page.",
                tip: "Double-clique en haut ou en bas d'une page pour ouvrir directement la zone d'édition."
              }
            ]
          },
          {
            name: "Liens",
            tools: [
              {
                name: "Lien hypertexte",
                shortcut: "Ctrl + K",
                tag: "Navigation",
                desc: "Rend un mot cliquable pour rediriger vers un site web ou un autre document.",
                usage: "Pour orienter le lecteur vers des sources en ligne.",
                example: "Insérer un lien sur le mot 'Google' vers www.google.com.",
                tip: "Sélectionne le texte puis fais Ctrl + K pour insérer le lien rapidement."
              }
            ]
          }
        ]
      },
      {
        id: "mise-en-page",
        label: "Mise en page",
        image: null,
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
                usage: "Pour gagner de la place en réduisant les marges ou respecter une norme.",
                example: "Passer les marges de 'Normales' à 'Etroites' pour faire tenir un texte sur une page.",
                tip: "Attention à ne pas mettre des marges trop petites sinon l'imprimante coupera le texte."
              },
              {
                name: "Orientation (Portrait / Paysage)",
                shortcut: "N/A",
                tag: "Mise en page",
                desc: "Bascule la feuille en position verticale (Portrait) ou horizontale (Paysage).",
                usage: "Utilise le mode Paysage pour des tableaux larges, diplômes ou affiches.",
                example: "Mettre la page en Paysage pour créer un grand calendrier mensuel.",
                tip: "Par défaut, Word ouvre les fichiers en mode Portrait."
              },
              {
                name: "Colonnes",
                shortcut: "N/A",
                tag: "Mise en forme",
                desc: "Sépare le texte en 2 ou plusieurs colonnes verticales.",
                usage: "Pour écrire un journal, un dépliant (flyer) ou un article d'information.",
                example: "Présenter un texte sur 2 colonnes comme dans un journal d'actualités.",
                tip: "Ajoute un 'Saut de colonne' pour forcer le texte à passer à la colonne suivante."
              }
            ]
          }
        ]
      },
      {
        id: "references",
        label: "Références",
        image: null,
        description:
          "Outils pour structurer et sourcer des documents longs comme des rapports ou des mémoires.",
        sections: [
          {
            name: "Table des matières & Notes",
            tools: [
              {
                name: "Table des matières (Sommaire)",
                shortcut: "N/A",
                tag: "Document long",
                desc: "Génère un sommaire automatique et cliquable basé sur les styles 'Titre' appliqués dans le texte.",
                usage: "En début de rapport ou mémoire pour permettre une navigation rapide.",
                example: "Insérer le sommaire automatique en page 2 d'un compte-rendu.",
                tip: "N'oublie pas de cliquer sur 'Mettre à jour la table' après avoir ajouté de nouveaux titres."
              },
              {
                name: "Note de bas de page",
                shortcut: "Alt + Ctrl + F",
                tag: "Académique",
                desc: "Ajoute un petit numéro au niveau d'un mot et une explication ou référence tout en bas de la page.",
                usage: "Pour définir un mot difficile ou citer la source d'une information.",
                example: "Expliquer la définition d'un sigle technique en bas de page.",
                tip: "Le raccourci Alt + Ctrl + F vous fait gagner un temps précieux lors des rédactions."
              }
            ]
          }
        ]
      },
      {
        id: "publipostage",
        label: "Publipostage",
        image: null,
        description:
          "Permet de créer plusieurs documents personnalisés (lettres, étiquettes) à partir d'un seul modèle.",
        sections: [
          {
            name: "Fusion et publipostage",
            tools: [
              {
                name: "Démarrer la fusion",
                shortcut: "N/A",
                tag: "Gain de temps",
                desc: "Associe un document Word avec une liste Excel (noms, adresses) pour générer des lettres personnalisées.",
                usage: "Pour envoyer la même lettre ou convocation à 50 personnes différentes sans la réécrire.",
                example: "Créer 100 cartes d'étudiants d'un coup à partir d'un fichier Excel d'inscriptions.",
                tip: "Préparez toujours votre tableau Excel de données avant de lancer le publipostage."
              }
            ]
          }
        ]
      },
      {
        id: "revision",
        label: "Révision",
        image: null,
        description:
          "Vérifiez, corrigez et collaborez sur un document avant de le finaliser.",
        sections: [
          {
            name: "Vérification & Collaboration",
            tools: [
              {
                name: "Grammaire & Orthographe",
                shortcut: "F7",
                tag: "Indispensable",
                desc: "Analyse tout le document et souligne les erreurs d'orthographe (en rouge) et de grammaire (en bleu).",
                usage: "Systématiquement avant de rendre ou d'imprimer votre document.",
                example: "Corriger les fautes d'accord et de frappe dans un rapport d'étape.",
                tip: "Appuie sur la touche F7 de ton clavier pour lancer le correcteur."
              },
              {
                name: "Nouveau commentaire",
                shortcut: "Ctrl + Alt + M",
                tag: "Collaboration",
                desc: "Ajoute une remarque dans la marge sans modifier le texte du document.",
                usage: "Pour corriger le travail d'un élève ou poser une question à un collègue.",
                example: "Écrire 'Reformuler cette phrase' en commentaire à côté d'un paragraphe.",
                tip: "Pratique pour travailler à plusieurs sur le même document."
              },
              {
                name: "Suivi des modifications",
                shortcut: "Ctrl + Maj + E",
                tag: "Collaboration",
                desc: "Enregistre en couleur tout ce qui est ajouté, supprimé ou modifié dans le texte.",
                usage: "Lors de la relecture croisée de documents importants.",
                example: "Permettre au professeur d'apporter des corrections visibles à l'élève.",
                tip: "L'auteur peut ensuite 'Accepter' ou 'Refuser' chaque modification."
              }
            ]
          }
        ]
      },
      {
        id: "affichage",
        label: "Affichage",
        image: null,
        description:
          "Change la façon dont le document est affiché à l'écran, sans modifier son contenu.",
        sections: [
          {
            name: "Modes d'affichage & Zoom",
            tools: [
              {
                name: "Mode Page / Mode Lecture",
                shortcut: "N/A",
                tag: "Confort",
                desc: "Alterne entre le mode de saisie standard et un mode plein écran optimisé pour la lecture.",
                usage: "Mode Page pour rédiger, Mode Lecture pour relire sereinement.",
                example: "Passer en mode lecture pour relire un rapport de 10 pages comme un livre.",
                tip: "En mode lecture, tu ne risques pas de modifier accidentellement le texte."
              },
              {
                name: "Zoom & Règle",
                shortcut: "N/A",
                tag: "Confort",
                desc: "Agrandit/réduit le texte à l'écran et affiche les règles graduées en haut et à gauche.",
                usage: "Pour ajuster votre confort visuel ou caler précisément des éléments graphiques.",
                example: "Mettre le zoom à 130% pour lire sans se fatiguer les yeux.",
                tip: "Maintiens la touche Ctrl appuyée et tourne la molette de ta souris pour zoomer."
              }
            ]
          }
        ]
      }
    ]
  }
];