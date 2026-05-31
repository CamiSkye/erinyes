// ===========================
// TYPES — PostersPage
// ===========================

export interface Poster {
  id: number;
  title: string;
  description: string;
  category: string;
  format: string;
  size: string;
  preview: string;
  colors: string[];
  downloads?: number;
}

export interface Category {
  value: string;
  label: string;
}

export type ViewMode = 'grid' | 'list';