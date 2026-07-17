import { GraduationCap, Users, Rocket, MapPin } from "lucide-react";
import Cours from "../../assets/cours.png";

export const levelsData = [
  {
    id: 1,
    icon: GraduationCap,
    title: "Débutant complet",
    description:
      "Tu n'as jamais touché un ordinateur ? On démarre de zéro, étape par étape, sans jargon.",
    image:
      "https://i.pinimg.com/1200x/95/77/49/957749a7ac04ab3ddf456e36ee88de48.jpg",
  },
  {
    id: 2,
    icon: Rocket,
    title: "Niveau avancé",
    description:
      "Déjà à l'aise ? Va plus loin avec des modules pratiques orientés bureautique, marketing et langue.",
    image:
      "https://i.pinimg.com/1200x/65/8e/8f/658e8fe6f6fde5656c959b6e1db2bc47.jpg",
  },
  {
    id: 3,
    icon: Users,
    title: "Accompagnement disponible",
    description:
      "Une équipe présente pour répondre à tes questions et confirmer ton accès rapidement.",
    image:
      "https://i.pinimg.com/1200x/69/72/0c/69720cf2eecf261a571cd64efc608a27.jpg",
  },
  {
    id: 4,
    icon: MapPin,
    title: "En ligne ou présentiel",
    description:
      "Suis les cours à distance à ton rythme, ou viens en présentiel avec un formateur sur place.",
    image: Cours,
  },
];
