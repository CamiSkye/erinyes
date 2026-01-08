import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation(); // on récupère le chemin actuel

  useEffect(() => {
    // à chaque changement de route, on scroll en haut avec un effet smooth
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null; // ce composant n'affiche rien
}