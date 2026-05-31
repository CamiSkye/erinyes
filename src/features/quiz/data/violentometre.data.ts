import type { ZoneConfig } from "../types/violentometre.types";

export const zoneConfigs: Omit<ZoneConfig, 'label' | 'description'>[] = [
  { key: "green",  color: "bg-green-500"  },
  { key: "yellow", color: "bg-yellow-500" },
  { key: "red",    color: "bg-red-600"    },
];