import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState, useEffect } from "react";

interface NavItem {
  id: string;
  label: string;
  to: string;
}

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems: NavItem[] = [
    { id: 'accueil', label: 'Accueil', to: '/accueil' },
    { id: 'formations', label: 'Formations', to: '/formations' },
    { id: 'intervention', label: 'Intervention', to: '/intervention' },
    { id: 'ressources', label: 'Ressources', to: '/ressources' },
    { id: 'medias', label: 'Médias', to: '/medias' },
  ];

  return (
    <nav className="w-full border-b border-border bg-white/95 backdrop-blur-sm sticky top-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 flex-wrap">
        {/* Logo / Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="text-xl font-semibold text-[#8B5E3C] hover:text-[#9B7FD7] transition-colors cursor-pointer">
              Erinyes
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl text-[#8B5E3C]">Qui sommes-nous ?</DialogTitle>
              <DialogDescription className="text-base text-[#6B6B6B] space-y-4">
                <p> <strong>Erinyes</strong> est un site web de sensibilisation dédié à la lutte contre les violences sexistes et sexuelles (VSS). Notre mission est de briser le silence, d'informer et d'accompagner les victimes vers les ressources d'aide appropriées. </p> <p> Dans la mythologie grecque, les Érinyes étaient les déesses de la vengeance qui poursuivaient les criminels et veillaient à ce que justice soit rendue. Aujourd'hui, nous portons ce nom symbolique pour défendre les victimes et lutter contre l'impunité. </p> <p className="font-medium text-[#8B5E3C]"> "Arrêtons de normaliser la domination et la sexualisation, mais normalisons plutôt le consentement d'autrui. Écoutez, comprenez et respectez l'envie et le besoin de chacun. Quand c'est non, c'est NON !" </p> <p> Notre plateforme propose des statistiques actualisées, des ressources d'aide, des formations de sensibilisation et des outils de prévention pour contribuer à un monde sans violences sexistes et sexuelles. </p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* Desktop menu */}
        {!isMobile && (
          <div className="flex space-x-1">
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
          </div>
        )}

        {/* Hamburger mobile */}
        {isMobile && (
          <button
            onClick={toggleMobileMenu}
            className="text-2xl font-bold text-[#8B5E3C] hover:text-[#9B7FD7]"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        )}

        {/* Menu mobile */}
        {isMobile && isMobileMenuOpen && (
          <div className="flex flex-col gap-2 w-full mt-2 bg-white/95 backdrop-blur-sm rounded-lg p-4 border border-border">
            {navItems.map(item => (
            <NavLink
              key={item.id}
              to={item.to}
              end
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `
                w-full block text-center py-3 rounded-lg transition-colors
                ${
                  isActive
                    ? "bg-[#9B7FD7] text-white"
                    : "text-[#8B5E3C] hover:bg-[#F5F1EA]"
                }
                `
              }
            >
              {item.label}
            </NavLink>

            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
