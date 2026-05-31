import { Shield, MapPin } from "lucide-react";
import type { MenuItem } from "../types/intervention.types";

// ===========================
// DATA — InterventionPage
// ===========================

// ✅ Seules les données non-textuelles restent ici
export const menuItems: MenuItem[] = [
  { id: "methode-3d",    icon: Shield },
  { id: "que-faire",     icon: MapPin },
  { id: "codes-secrets", icon: Shield },
];

export const METHOD_3D_COLORS = ["bg-[#9B7FD7]", "bg-[#FFA45C]", "bg-[#8B5E3C]"];
export const ANGEL_SHOT_COLORS = ["bg-[#9B7FD7]", "bg-[#FFA45C]", "bg-[#8B5E3C]"];
export const ANGEL_SHOT_EMOJIS = ["🚗", "🚕", "🚔"];
export const URGENT_STEP_INDEX = 0;
export const urgencyApps = ["App-Elles", "UrSafe", "Urgences"];