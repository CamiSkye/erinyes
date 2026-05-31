export interface MenuItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface EmergencyNumber {
  number: string;
  name: string;
  description: string;
  hours: string;
}

export interface Association {
  name: string;
  description: string;
  website?: string;
  phone?: string;
  services: string[];
}