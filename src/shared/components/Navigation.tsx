import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "../hooks/useIsMobile";
import { ChevronDown } from "lucide-react";
import logo from '../../assets/Logo_Erinyes.png';

// ===========================
// Navigation
// ===========================

interface NavItem {
  id: string;
  label: string;
  to: string;
}

const LANGUAGES = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English',  flag: '🇬🇧' },
];

export function Navigation() {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen,   setIsLangMenuOpen]   = useState(false);
  const isMobile = useIsMobile();

  const navItems    = t("nav.links", { returnObjects: true }) as NavItem[];
  const currentLang = LANGUAGES.find(l => l.code === i18n.language) ?? LANGUAGES[0];

  const handleLangChange = (code: string) => {
    i18n.changeLanguage(code);
    setIsLangMenuOpen(false);
  };

  return (
    <nav className="relative w-full border-b border-border bg-white/95 backdrop-blur-sm sticky top-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">

        {/* Logo / Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="inline-flex items-center gap-2 text-xl font-semibold text-[#8B5E3C] hover:text-[#9B7FD7] transition-colors cursor-pointer">
              <img src={logo} alt={t("nav.logoAlt")} className="h-8 w-auto shrink-0" />
              {t("nav.brandName")}
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl text-[#8B5E3C]">{t("nav.whoAreWe")}</DialogTitle>
              <DialogDescription className="text-base text-[#6B6B6B] space-y-4">
                <p>{t("nav.about.p1")}</p>
                <p>{t("nav.about.p2")}</p>
                <p className="font-medium text-[#8B5E3C]">{t("nav.about.quote")}</p>
                <p>{t("nav.about.p3")}</p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* Desktop menu */}
        {!isMobile && (
          <div className="flex items-center space-x-1">
            {navItems.map(item => (
              <NavLink
                key={item.id}
                to={item.to}
                end
                className={({ isActive }) =>
                  `px-0 py-0 rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#9B7FD7] text-white"
                      : "text-[#8B5E3C] hover:bg-[#F5F1EA] hover:text-[#8B5E3C]"
                  }`
                }
              >
                <Button variant="ghost" className="px-4 py-2 cursor-pointer">{item.label}</Button>
              </NavLink>
            ))}

            {/* Switcher langue desktop — s'ouvre vers le bas */}
            <div className="relative ml-2">
              <button
                onClick={() => setIsLangMenuOpen(prev => !prev)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-[#8B5E3C] hover:bg-[#F5F1EA] transition-colors text-sm font-medium cursor-pointer"
              >
                <span>{currentLang.flag}</span>
                <span>{currentLang.code.toUpperCase()}</span>
                <ChevronDown className={`h-3 w-3 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-[#E5E1DA] overflow-hidden z-[100] min-w-[130px]">
                  {LANGUAGES.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangChange(lang.code)}
                      className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors cursor-pointer ${
                        i18n.language === lang.code
                          ? "bg-[#9B7FD7] text-white"
                          : "text-[#8B5E3C] hover:bg-[#F5F1EA]"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Hamburger mobile */}
        {isMobile && (
          <div className="flex items-center gap-2">

            {/* Switcher langue mobile — s'ouvre par dessus le menu */}
            <div className="relative">
              <button
                onClick={() => {
                if (isMobileMenuOpen) return;
                setIsLangMenuOpen(prev => !prev);
              }}
                className="flex items-center gap-1 px-2 py-1 rounded-lg text-[#8B5E3C] hover:bg-[#F5F1EA] transition-colors text-sm font-medium cursor-pointer"
              >
                <span>{currentLang.flag}</span>
                <ChevronDown className={`h-3 w-3 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 top-8 mt-1 bg-white rounded-lg shadow-lg border border-[#E5E1DA] overflow-hidden z-[100] min-w-[130px]">
                  {LANGUAGES.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangChange(lang.code)}
                      className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors cursor-pointer ${
                        i18n.language === lang.code
                          ? "bg-[#9B7FD7] text-white"
                          : "text-[#8B5E3C] hover:bg-[#F5F1EA]"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                setIsLangMenuOpen(false);
                setIsMobileMenuOpen(prev => !prev);
              }}
              className="text-2xl font-bold text-[#8B5E3C] hover:text-[#9B7FD7]"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        )}
      </div>

      {/* Menu mobile */}
      {isMobile && isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full flex flex-col gap-2 bg-white/95 backdrop-blur-sm p-4 border-t border-border shadow-md z-50">
          {navItems.map(item => (
            <NavLink
              key={item.id}
              to={item.to}
              end
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `w-full block text-center py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-[#9B7FD7] text-white"
                    : "text-[#8B5E3C] hover:bg-[#F5F1EA]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}