import { Shield, BookOpen } from "lucide-react";
import type { Course } from "../types/training.types";

export const courses: Course[] = [
  {
    id:       1,
    icon:     Shield,
    duration: "48 min",
    level:    "Débutant",
    category: "Sensibilisation",
    url:      "https://view.genially.com/695fc166846b6e93c8368b09/interactive-content-apprendre-les-vss",
    // ✅ Textes dans le JSON — clé: training.courses.course1
    title:       "",
    description: "",
    modules: [
      { id: 1, title: "", duration: "10 min",    description: "" },
      { id: 2, title: "", duration: "10 min",    description: "" },
      { id: 3, title: "", duration: "10 min",    description: "" },
      { id: 4, title: "", duration: "7 à 8 min", description: "" },
      { id: 5, title: "", duration: "10 min",    description: "" },
    ],
  },
  {
    id:       2,
    icon:     BookOpen,
    duration: "36 min",
    level:    "Avancé",
    category: "Éducation",
    url:      "https://view.genially.com/695fc054770a52075d0e46c6/interactive-content-vss-au-travail-etou-a-lecole",
    // ✅ Textes dans le JSON — clé: training.courses.course2
    title:       "",
    description: "",
    modules: [
      { id: 1, title: "", duration: "7 min",  description: "" },
      { id: 2, title: "", duration: "7 min",  description: "" },
      { id: 3, title: "", duration: "10 min", description: "" },
      { id: 4, title: "", duration: "7 min",  description: "" },
      { id: 5, title: "", duration: "5 min",  description: "" },
    ],
  },
];

export const getLevelColor = (level: string): string => {
  switch (level) {
    case "Débutant": return "bg-green-100 text-green-800";
    case "Avancé":   return "bg-red-100 text-red-800";
    default:         return "bg-gray-100 text-gray-800";
  }
};

export const getCategoryColor = (category: string): string => {
  switch (category) {
    case "Sensibilisation": return "bg-[#9B7FD7]/10 text-[#9B7FD7]";
    case "Éducation":       return "bg-[#8B5E3C]/10 text-[#8B5E3C]";
    default:                return "bg-gray-100 text-gray-800";
  }
};