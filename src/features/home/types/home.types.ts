export interface EvolutionDataPoint {
  year: string;
  victimes: number;
  victime_mineures: number;
}

export interface GenderDataPoint {
  genre: string;
  pourcentage: number;
}

export interface EnfantsDataPoint {
  tranche: string;
  nombre: number;
}

export interface ContexteDataPoint {
  type: string;
  pourcentage: number;
}

export interface KeyFigure {
  value: string;
  label: string;
  color: string;
}

export interface InfoCard {
  title: string;
  content: string;
  iconColor: string;
  icon: React.ComponentType<{ className?: string }>;
}