import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "../hooks/useIsMobile";

export function QuickExitButton() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  const handleQuickExit = () => {
    const url = t("quickExit.redirectUrl");
    window.location.replace(url);
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => window.location.replace(url);
  };

  return isMobile ? (
    <button
      onClick={handleQuickExit}
      className="fixed top-20 right-4 z-50 w-4 h-4 bg-red-600 rounded-full shadow-md border-0 hover:bg-red-700"
      aria-label={t("quickExit.ariaLabel")}
    />
  ) : (
    <Button
      onClick={handleQuickExit}
      className="fixed top-20 right-4 z-50 bg-red-600 hover:bg-red-700 text-white shadow-lg border-0 cursor-pointer"
      size="sm"
      title={t("quickExit.tooltip")}
    >
      <LogOut className="mr-2 h-4 w-4" />
      {t("quickExit.label")}
    </Button>
  );
}