export const categories = [
  {
    id: "Bureautique",
    name: "Bureautique",
    description:
      "Maîtrisez les outils indispensables de productivité et de gestion de données professionnelles.",
    iconName: "FileSpreadsheet",
    colorClass:
      "text-emerald-600 bg-emerald-50 border-emerald-100 dark:bg-emerald-950/40 dark:border-emerald-900/40 dark:text-emerald-400",
    gradientClass: "from-emerald-500 to-teal-600",
    popularKeywords: ["Excel", "Word", "PowerPoint", "Macros", "PowerQuery"],
  },
  {
    id: "Marketing",
    name: "Marketing Digital",
    description:
      "Développez votre visibilité, attirez des clients et dominez les réseaux sociaux.",
    iconName: "TrendingUp",
    colorClass:
      "text-indigo-600 bg-indigo-50 border-indigo-100 dark:bg-indigo-950/40 dark:border-indigo-900/40 dark:text-indigo-400",
    gradientClass: "from-indigo-500 to-purple-600",
    popularKeywords: ["SEO", "Google Ads", "Copywriting", "TikTok", "Strategy"],
  },
  {
    id: "Langues",
    name: "Langues & Business",
    description:
      "Parlez avec assurance lors de vos réunions internationales et négociez avec fluidité.",
    iconName: "Languages",
    colorClass:
      "text-amber-600 bg-amber-50 border-amber-100 dark:bg-amber-950/40 dark:border-amber-900/40 dark:text-amber-400",
    gradientClass: "from-amber-500 to-orange-600",
    popularKeywords: ["Anglais Pro", "Espagnol", "Pitching", "Négociation"],
  },
];

export const courses = [
  {
    id: "b-excel-pro",
    title: "Excel Avancé : Analyse de Données & Tableaux Croisés",
    category: "Bureautique",
    description:
      "Devenez l'expert Excel de votre entreprise. Maîtrisez les formules complexes (RECHERCHEV/X), Power Query, et créez des tableaux de bord dynamiques époustouflants.",
    duration: "14 heures",
    rating: 4.9,
    reviewsCount: 342,
    enrollments: 1840,
    level: "Intermédiaire",
    instructor: {
      name: "Thomas Martin",
      role: "Analyste de données Senior & Formateur certifié Microsoft",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    },
    features: [
      "Plus de 50 exercices pratiques à télécharger",
      "Création d'un Dashboard d'entreprise complet",
      "Introduction aux macros et à l'automatisation Power Query",
      "Accès à vie et certificat de réussite",
    ],
    lessons: [
      {
        id: "ex-1",
        title: "Introduction aux meilleures pratiques de structure de données",
        duration: "25 min",
      },
      {
        id: "ex-2",
        title:
          "Les formules de recherche de nouvelle génération (INDEX/EQUIV, RECHERCHEX)",
        duration: "45 min",
      },
      {
        id: "ex-3",
        title:
          "Nettoyer et importer des données automatiquement avec Power Query",
        duration: "60 min",
      },
      {
        id: "ex-4",
        title: "Modélisation et jointures de tables de données",
        duration: "50 min",
      },
      {
        id: "ex-5",
        title: "Conception de Tableaux Croisés Dynamiques (TCD) avancés",
        duration: "55 min",
      },
      {
        id: "ex-6",
        title: "Mise en place de filtres interactifs et de segments visuels",
        duration: "40 min",
      },
      {
        id: "ex-7",
        title: "Création d'un tableau de bord de performance (KPI Dashboard)",
        duration: "90 min",
      },
    ],
    accentColor: "emerald",
  },
  {
    id: "b-ppt-design",
    title: "PowerPoint & Storytelling : Créer des Présentations d'Impact",
    category: "Bureautique",
    description:
      "Apprenez à structurer vos idées et à concevoir des slides professionnelles, épurées et captivantes qui convainquent vos clients et votre direction.",
    duration: "8 heures",
    rating: 4.8,
    reviewsCount: 154,
    enrollments: 920,
    level: "Tous niveaux",
    instructor: {
      name: "Sophie Dubois",
      role: "Directrice Artistique & Consultante en Pitching",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
    },
    features: [
      "15 templates PowerPoint modernes inclus",
      'Atelier pratique : "Refaire un pitch de startup"',
      "Techniques d'harmonie des couleurs et de typographie",
    ],
    lessons: [
      {
        id: "pt-1",
        title:
          "Les fondations du Storytelling : Capter l'attention dès la 1ère minute",
        duration: "35 min",
      },
      {
        id: "pt-2",
        title: "La règle d'or de la clarté visuelle et de l'espace vide",
        duration: "40 min",
      },
      {
        id: "pt-3",
        title:
          "Maîtriser la typographie, les contrastes et les palettes de couleurs",
        duration: "50 min",
      },
      {
        id: "pt-4",
        title:
          "Animations et transitions de transition fluide : Le zoom et la morphose",
        duration: "45 min",
      },
      {
        id: "pt-5",
        title:
          "Visualisation de données complexes : Remplacer les tableaux par des graphes parlants",
        duration: "60 min",
      },
    ],
    accentColor: "emerald",
  },
  {
    id: "m-seo-sea",
    title: "Growth Marketing 360 : Dominer le SEO & Google Ads",
    category: "Marketing",
    description:
      "Générez des leads et des ventes en continu. Découvrez comment positionner votre site en tête de Google naturellement et optimiser vos campagnes publicitaires payantes pour un ROI maximal.",
    duration: "18 heures",
    rating: 4.9,
    reviewsCount: 412,
    enrollments: 2310,
    level: "Tous niveaux",
    instructor: {
      name: "Julien Mercier",
      role: "Consultant SEO & Growth Hacker indépendant",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    },
    features: [
      "Audit SEO en direct de votre site web",
      "Accès à un canal privé d'entraide",
      "Guide complet de rédaction web optimisée (100+ pages)",
    ],
    lessons: [
      {
        id: "se-1",
        title: "Comprendre les algorithmes de recherche Google en 2026",
        duration: "30 min",
      },
      {
        id: "se-2",
        title:
          "Recherche de mots-clés stratégiques à fort volume de conversion",
        duration: "55 min",
      },
      {
        id: "se-3",
        title:
          "SEO On-Page : Balises, vitesse de chargement et maillage interne",
        duration: "65 min",
      },
      {
        id: "se-4",
        title:
          "Copywriting SEO : Rédiger du contenu qui plaît à Google et aux humains",
        duration: "75 min",
      },
      {
        id: "se-5",
        title: "Créer sa première campagne Google Ads rentable de A à Z",
        duration: "80 min",
      },
      {
        id: "se-6",
        title: "Analyse et suivi du trafic avec Google Analytics 4",
        duration: "50 min",
      },
    ],
    accentColor: "indigo",
  },
  {
    id: "m-social-media",
    title: "Social Media & Community Management : Créer une Marque Forte",
    category: "Marketing",
    description:
      "Maîtrisez la création de contenu sur Instagram, LinkedIn et TikTok. Bâtissez une communauté engagée, apprenez à lire les statistiques pour adapter votre stratégie et collaborez avec des influenceurs.",
    duration: "12 heures",
    rating: 4.7,
    reviewsCount: 228,
    enrollments: 1450,
    level: "Débutant",
    instructor: {
      name: "Camille Leroy",
      role: "Brand Manager & Créatrice de contenu (+150k abonnés)",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    },
    features: [
      "Calendrier éditorial prêt à l'emploi",
      "Atelier vidéo mobile : Filmer et monter avec CapCut",
      "Liste de scripts d'accroche pour vidéos courtes (TikTok/Reels)",
    ],
    lessons: [
      {
        id: "sm-1",
        title: "Définir sa charte éditoriale et son identité de marque",
        duration: "40 min",
      },
      {
        id: "sm-2",
        title:
          "LinkedIn : Bâtir son autorité personnelle et générer des leads B2B",
        duration: "60 min",
      },
      {
        id: "sm-3",
        title: "Instagram & TikTok : Dompter les algorithmes vidéo",
        duration: "75 min",
      },
      {
        id: "sm-4",
        title: "Créer des visuels pro rapidement avec Figma et Canva",
        duration: "45 min",
      },
      {
        id: "sm-5",
        title: "Modération, gestion de crise et engagement communautaire",
        duration: "35 min",
      },
    ],
    accentColor: "indigo",
  },
  {
    id: "l-english-pro",
    title: "Anglais Business : Réussir vos Négociations & Présentations",
    category: "Langues",
    description:
      "Ne laissez plus la barrière de la langue freiner votre carrière. Développez votre vocabulaire professionnel, apprenez à mener des réunions à l'international et rédigez des e-mails percutants.",
    duration: "15 heures",
    rating: 4.9,
    reviewsCount: 289,
    enrollments: 1980,
    level: "Intermédiaire",
    instructor: {
      name: "Sarah Jenkins",
      role: "Formatrice d'anglais des affaires pour cadres exécutifs",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    },
    features: [
      'Fiches mémo "Vocabulaire Business" à imprimer',
      "Simulations interactives d'appels et de réunions",
      "Correction personnalisée d'un e-mail professionnel",
    ],
    lessons: [
      {
        id: "en-1",
        title: "Ice-breaking & introduction professionnelle fluide",
        duration: "30 min",
      },
      {
        id: "en-2",
        title: "Animer une réunion et distribuer la parole en anglais",
        duration: "50 min",
      },
      {
        id: "en-3",
        title: "Le vocabulaire de la négociation et de la gestion de conflits",
        duration: "60 min",
      },
      {
        id: "en-4",
        title: "Présenter des données chiffrées et des graphiques avec impact",
        duration: "45 min",
      },
      {
        id: "en-5",
        title: "Rédiger des e-mails formels, assertifs et professionnels",
        duration: "40 min",
      },
    ],
    accentColor: "amber",
  },
  {
    id: "l-espagnol-aff",
    title: "Espagnol des Affaires : Développer vos Échanges Commerciaux",
    category: "Langues",
    description:
      "Saisissez les opportunités d'affaires en Espagne et en Amérique Latine. Maîtrisez le jargon commercial, apprenez à négocier des contrats et comprenez la culture d'entreprise hispanophone.",
    duration: "10 heures",
    rating: 4.6,
    reviewsCount: 98,
    enrollments: 450,
    level: "Débutant",
    instructor: {
      name: "Mateo Garcia",
      role: "Professeur universitaire de commerce international",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    },
    features: [
      "Fiches de vocabulaire thématiques (Finance, Logistique, Vente)",
      "Guide pratique sur les différences culturelles par pays",
    ],
    lessons: [
      {
        id: "es-1",
        title: "Salutations professionnelles et protocole d'affaires",
        duration: "30 min",
      },
      {
        id: "es-2",
        title: "Présenter son entreprise et sa gamme de produits en espagnol",
        duration: "45 min",
      },
      {
        id: "es-3",
        title: "Négocier un tarif, des délais et rédiger une proposition",
        duration: "55 min",
      },
      {
        id: "es-4",
        title: "Comprendre les codes de la relation client hispanophone",
        duration: "40 min",
      },
    ],
    accentColor: "amber",
  },
];

export const mockPathwayData = {
  Bureautique_Débutant: [
    "Les bases du Pack Office : Windows, dossiers, raccourcis essentiels",
    "Prendre en main Microsoft Word pour la rédaction de documents clairs",
    "Débuter sur Excel : Tableaux simples, calculs et formules de base",
    "Créer ses premières diapositives structurées sur PowerPoint",
    "Organiser son temps et ses e-mails professionnels avec Outlook",
  ],
  Bureautique_Intermédiaire: [
    "Maîtriser les bases de données Excel et la fonction RECHERCHEV",
    "Gagner du temps avec les styles avancés et le publipostage Word",
    "Créer des Tableaux Croisés Dynamiques (TCD) sur Excel",
    "Réaliser des présentations dynamiques et interactives avec PowerPoint",
    "Automatiser les tâches administratives répétitives (macros de base)",
  ],
  Bureautique_Avancé: [
    "Concevoir des macros complexes en VBA et automatiser Excel",
    "Modéliser des flux de données volumineux avec Excel Power Query",
    "Créer un Tableau de Bord KPI interconnecté et professionnel",
    "Sécuriser et partager des bases de données relationnelles complexes",
    "Savoir pitcher un projet stratégique devant un comité d'administration",
  ],
  Marketing_Débutant: [
    "Découvrir le marketing digital : Les fondamentaux indispensables",
    "Définir sa cible (Persona) et son positionnement de marque",
    "Comprendre le fonctionnement des algorithmes des réseaux sociaux",
    "Rédiger son premier article de blog optimisé pour le SEO",
    "Prendre en main Canva pour créer des visuels simples et attractifs",
  ],
  Marketing_Intermédiaire: [
    "Mettre en place une stratégie d'Inbound Marketing pour attirer des leads",
    "Rédiger des pages de vente persuasives grâce au Copywriting",
    "Planifier et automatiser ses réseaux sociaux (Calendrier éditorial)",
    "Créer, configurer et lancer ses premières campagnes Google Ads",
    "Maîtriser l'e-mailing et la newsletter pour fidéliser sa communauté",
  ],
  Marketing_Avancé: [
    "Mettre en place des campagnes de Growth Hacking et d'A/B Testing",
    "Analyser avec précision son trafic web avec Google Analytics 4",
    "Piloter des campagnes publicitaires à fort budget (Meta Ads, LinkedIn)",
    "Optimiser le taux de conversion (CRO) de ses tunnels de vente",
    "Manager une équipe marketing et piloter le budget d'acquisition",
  ],
  Langues_Débutant: [
    "Acquérir les bases de la grammaire et de la conjugaison professionnelle",
    "Savoir se présenter et saluer poliment ses collègues de travail",
    "Rédiger des messages et réponses courtes et polies",
    "Comprendre les consignes simples reçues par écrit",
    "Prendre confiance à l'oral en s'exprimant sur des sujets du quotidien",
  ],
  Langues_Intermédiaire: [
    "Maîtriser les expressions clés pour animer une réunion professionnelle",
    "Rédiger des rapports d'activité et des propositions commerciales",
    "Savoir argumenter et exposer calmement son point de vue",
    "Comprendre un interlocuteur natif lors d'échanges d'affaires complexes",
    "Répondre au téléphone et rassurer un client mécontent avec diplomatie",
  ],
  Langues_Avancé: [
    "Négocier des accords financiers et commerciaux complexes sans hésiter",
    "Savoir pitcher un projet innovant devant des investisseurs anglophones",
    "Rédiger des contrats et des conditions de vente juridiques complexes",
    "S'adapter aux finesses et à l'humour culturel lors d'un repas d'affaires",
    "Prendre la parole en public lors d'une conférence internationale",
  ],
};
