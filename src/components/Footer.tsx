import { Heart, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

export function Footer() {
  const quickLinks = [
    { name: "Accueil", to: "/accueil" },
    { name: "Formations", to: "/formations" },
    { name: "Intervention", to: "/intervention" },
    { name: "Ressources", to: "/ressources" },
    { name: "Médias", to: "/medias" }
  ];


  const emergencyNumbers = [
    { name: "3919 - Violences sexistes et sexuelles", number: "3919" },
    { name: "112 - Services d'urgence européens", number: "112" },
    { name: "114 - Personnes sourdes/malentendantes", number: "114" },    
    { name: "17 - Police/Gendarmerie", number: "17" },
    { name: "15 - SAMU", number: "15" }
  ];

  const resources = [
    { name: "FNSF - Solidarité Femmes", href: "https://solidaritefemmes.org/" },
    { name: "FN CIDFF", href: "https://fncidff.info/" },
    { name: "Collectif Féministe Contre le Viol", href: "https://cfcv.asso.fr/" },
    { name: "SOS Hommes Battus", href: "https://soshommesbattus.org/" }
  ];

  return (
    <footer className="bg-[#8B5E3C] text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Heart className="mr-2 h-5 w-5 text-[#FFA45C]" />
              Erinyes
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Site de sensibilisation et d'accompagnement pour lutter contre les violences sexistes et sexuelles.
            </p>
            <p className="text-[#FFA45C] font-medium text-sm leading-tight">
              "Arrêtons de normaliser la domination et la sexualisation, mais normalisons plutôt le consentement d'autrui."
            </p>
          </div>

          {/* Navigation rapide */}
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.to} className="text-white/80 hover:text-white transition-colors text-sm">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>


          {/* Numéros d'urgence */}
          <div>
            <h4 className="font-bold mb-4 flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              Urgences
            </h4>
            <ul className="space-y-2">
              {emergencyNumbers.map((emergency, index) => (
                <li key={index}>
                  <div className="text-sm">
                    <div className="text-[#FFA45C] font-medium">{emergency.number}</div>
                    <div className="text-white/80 text-xs">{emergency.name}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="font-bold mb-4">Ressources utiles</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors text-sm flex items-center"
                  >
                    <ExternalLink className="mr-1 h-3 w-3" />
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 text-sm mb-4 md:mb-0">
              © 2025 Erinyes. Tous droits réservés.
            </div>
          </div>
        </div>

        {/* Message important */}
        <div className="mt-6 p-4 bg-[#FFA45C] bg-opacity-20 rounded-lg">
          <p className="text-center text-sm">
            <strong>Important :</strong> Si vous êtes en danger immédiat, appelez le 17 (police/gendarmerie) ou le 112 (urgences européennes). 
            Ce site ne remplace pas une aide professionnelle.
          </p>
        </div>
      </div>
    </footer>
  );
}