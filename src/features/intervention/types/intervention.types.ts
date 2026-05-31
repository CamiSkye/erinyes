export interface MenuItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Step {
  title: string;
  description: string;
}