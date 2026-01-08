import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

export function QuickExitButton() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleQuickExit = () => {
    // Remplace la page et empêche le retour en arrière
    window.location.replace("https://www.google.com");
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
      window.location.replace("https://www.google.com");
    };
  };

  return isMobile ? (
    <button
      onClick={handleQuickExit}
      className="fixed top-20 right-4 z-50 w-4 h-4 bg-red-600 rounded-full shadow-md border-0 hover:bg-red-700"
      aria-label="Sortie rapide"
    ></button>
  ) : (
    <Button
      onClick={handleQuickExit}
      className="fixed top-20 right-4 z-50 bg-red-600 hover:bg-red-700 text-white shadow-lg border-0 cursor-pointer"
      size="sm"
      title="⚠️ Attention, bouton de sortie rapide du site : vous serez redirigé vers Google, pensez à supprimer votre historique si nécessaire !"
    >
      <LogOut className="mr-2 h-4 w-4" />
      Sortie rapide
    </Button>
  );
}
