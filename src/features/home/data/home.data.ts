import { Users, MessageCircle, FileText } from "lucide-react";
import type {
  EvolutionDataPoint,
  InfoCard,
} from "../types/home.types";

export const CHART_COLORS = ["#9B7FD7", "#FFA45C", "#8B5E3C"] as const;

export const evolutionData: EvolutionDataPoint[] = [
  { year: "2023", victimes: 114100, victime_mineures: 65300 },
  { year: "2024", victimes: 122600, victime_mineures: 71100 },
  { year: "2025", victimes: 132300, victime_mineures: 76200 },
];

export const GENDER_DATA = [
  { pourcentage: 85 },
  { pourcentage: 15 },
];

// ✅ Nombres uniquement — les tranches viennent du JSON
export const ENFANTS_NOMBRES = [3265, 13060, 48975];

export const CONTEXTE_DATA = [
  { pourcentage: 72 },
  { pourcentage: 28 },
];

export const infoCards: Omit<InfoCard, 'title' | 'content'>[] = [
  { iconColor: "#9B7FD7", icon: Users         },
  { iconColor: "#FFA45C", icon: MessageCircle  },
  { iconColor: "#8B5E3C", icon: FileText       },
];

export const KEY_FIGURE_COLORS = [
  "bg-[#9B7FD7]",
  "bg-[#FFA45C]",
  "bg-[#8B5E3C]",
  "bg-red-600",
];

export const KEY_FIGURE_VALUES = ["132 300", "58%", "85%", "≈ 72%"];