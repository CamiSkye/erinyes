import { Heart, Phone, ExternalLink } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// ===========================
// Footer
// ===========================

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks       = t("footer.quickLinks",       { returnObjects: true }) as { name: string; to: string }[];
  const emergencyNumbers = t("footer.emergencyNumbers", { returnObjects: true }) as { name: string; number: string }[];
  const resourceLinks    = t("footer.resourceLinks",    { returnObjects: true }) as { name: string; href: string }[];

  return (
    <footer className="bg-[#8B5E3C] text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* À propos */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Heart className="mr-2 h-5 w-5 text-[#FFA45C]" />
              {t("footer.brandName")}
            </h3>
            <p className="text-white/80 text-sm mb-4">{t("footer.about")}</p>
            <p className="text-[#FFA45C] font-medium text-sm leading-tight">{t("footer.quote")}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4">{t("footer.nav")}</h4>
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

          {/* Urgences */}
          <div>
            <h4 className="font-bold mb-4 flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              {t("footer.emergency")}
            </h4>
            <ul className="space-y-2">
              {emergencyNumbers.map((emergency, index) => (
                <li key={index} className="text-sm">
                  <div className="text-[#FFA45C] font-medium">{emergency.number}</div>
                  <div className="text-white/80 text-xs">{emergency.name}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="font-bold mb-4">{t("footer.resources")}</h4>
            <ul className="space-y-2">
              {resourceLinks.map((resource, index) => (
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

        {/* Bas de footer */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/80 text-sm">
              © {currentYear} {t("footer.brandName")}. {t("footer.copyright")}
            </div>
            <div className="flex gap-4 text-sm text-white/80">
              <NavLink to="/mentions-legales" className="hover:text-white transition-colors">
                {t("footer.legal")}
              </NavLink>
            </div>
          </div>
        </div>

        {/* Message important */}
        <div className="mt-6 p-4 bg-[#FFA45C] bg-opacity-20 rounded-lg">
          <p className="text-center text-sm">
            <strong>{t("footer.important")}</strong> {t("footer.warning")}
          </p>
        </div>

      </div>
    </footer>
  );
}