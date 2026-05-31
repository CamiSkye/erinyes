import { Phone, Users, MapPin } from "lucide-react";
import type { MenuItem } from "../types/resources.types";

export const menuItems: MenuItem[] = [
  { id: "urgence",      icon: Phone  },
  { id: "associations", icon: Users  },
  { id: "cadre-legal",  icon: MapPin },
];