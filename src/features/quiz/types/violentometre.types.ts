export type Zone = "green" | "yellow" | "red";

export interface Item {
  text: string;
  zone: Zone;
}

export interface ZoneConfig {
  key: Zone;
  label: string;
  description: string;
  color: string;
}