import { useState } from "react";

// ===========================
// HOOK — useResources
// ===========================

export function useResources() {
  const [zoom, setZoom] = useState(false);

  const openZoom  = () => setZoom(true);
  const closeZoom = () => setZoom(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { zoom, openZoom, closeZoom, scrollToSection };
}