import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";
import { Phone, ExternalLink, MapPin, Clock, Users } from "lucide-react";
import violentometre from "../../assets/Violentometre.webp";

import { useResources } from "./hooks/useResources";
import { menuItems } from "./data/resources.data";
import type { EmergencyNumber, Association } from "./types/resources.types";

// ===========================
// ResourcesPage
// ===========================

export function ResourcesPage() {
  const { zoom, openZoom, closeZoom, scrollToSection } = useResources();
  const { t } = useTranslation();

  const emergencyNumbers = t("resources.emergencyNumbers", { returnObjects: true }) as EmergencyNumber[];
  const associations     = t("resources.associations",     { returnObjects: true }) as Association[];

  const menuLabels: Record<string, string> = {
    "urgence":      t("resources.menu.emergency"),
    "associations": t("resources.menu.associations"),
    "cadre-legal":  t("resources.menu.legal"),
  };

  const legalItems = [
    { key: "harassment", definitionKey: "definition", penaltyKey: "penalty" },
    { key: "assault",    definitionKey: "definition", penaltyKey: "penalty" },
    { key: "rape",       definitionKey: "definition", penaltyKey: "penalty" },
  ] as const;

  return (
    <div className="min-h-screen bg-[#F5F1EA] py-8">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#8B5E3C] mb-4">{t("resources.title")}</h1>
          <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto">{t("resources.subtitle")}</p>
        </div>

        {/* Menu de navigation */}
        <div className="bg-white/95 rounded-lg p-4 mb-8 border border-[#E5E1DA]">
          <div className="flex flex-wrap gap-2 justify-center">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Button
                  key={item.id}
                  variant="outline"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className="border-[#9B7FD7] text-[#9B7FD7] hover:bg-[#9B7FD7] hover:text-white cursor-pointer"
                >
                  <IconComponent className="mr-2 h-4 w-4" />
                  {menuLabels[item.id]}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Numéros d'urgence */}
        <section id="urgence" className="mb-12">
          <h2 className="text-3xl font-bold text-[#8B5E3C] mb-6 flex items-center">
            <Phone className="mr-3 h-6 w-6" />
            {t("resources.sections.emergency")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyNumbers.map((emergency, index) => (
              <Card key={index} className="bg-white/95 border-[#E5E1DA] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-red-600">{emergency.number}</CardTitle>
                    <span className="bg-[#9B7FD7] text-white text-sm px-3 py-2 rounded font-medium">
                      {t("resources.free")}
                    </span>
                  </div>
                  <CardDescription className="font-medium text-[#9B7FD7]">{emergency.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6B6B6B] mb-3">{emergency.description}</p>
                  <div className="flex items-center text-sm text-[#8B5E3C]">
                    <Clock className="mr-1 h-4 w-4" />
                    {emergency.hours}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Associations */}
        <section id="associations" className="mb-12">
          <h2 className="text-3xl font-bold text-[#8B5E3C] mb-6 flex items-center">
            <Users className="mr-3 h-6 w-6" />
            {t("resources.sections.associations")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {associations.map((assoc, index) => (
              <Card key={index} className="bg-white/95 border-[#E5E1DA]">
                <CardHeader>
                  <CardTitle className="text-xl text-[#8B5E3C]">{assoc.name}</CardTitle>
                  <CardDescription>{assoc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {assoc.phone && (
                      <div className="flex items-center text-sm">
                        <Phone className="mr-2 h-4 w-4 text-[#9B7FD7]" />
                        <span className="text-[#8B5E3C] font-medium">{assoc.phone}</span>
                      </div>
                    )}
                    {assoc.website && (
                      <div className="flex items-center text-sm">
                        <ExternalLink className="mr-2 h-4 w-4 text-[#9B7FD7]" />
                        <a
                          href={`https://${assoc.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8B5E3C] hover:text-[#9B7FD7] underline"
                        >
                          {assoc.website}
                        </a>
                      </div>
                    )}
                    <div className="mt-4">
                      <p className="text-sm font-medium text-[#8B5E3C] mb-2">{t("resources.services")}</p>
                      <div className="flex flex-wrap gap-2">
                        {assoc.services.map((service, idx) => (
                          <span key={idx} className="bg-[#9B7FD7] text-white text-sm px-3 py-2 rounded font-medium">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cadre légal */}
        <section id="cadre-legal" className="mb-12">
          <h2 className="text-3xl font-bold text-[#8B5E3C] mb-6 flex items-center">
            <MapPin className="mr-3 h-6 w-6" />
            {t("resources.sections.legal")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Définitions */}
            <Card className="bg-white/95 border-[#E5E1DA]">
              <CardHeader>
                <CardTitle className="text-[#8B5E3C] underline">{t("resources.legal.definitions")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {legalItems.map(({ key }) => (
                  <div key={key}>
                    <h4 className="font-medium text-[#8B5E3C] mb-1">{t(`resources.legal.${key}.label`)}</h4>
                    <p className="text-sm text-[#6B6B6B]">{t(`resources.legal.${key}.definition`)}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Peines */}
            <Card className="bg-white/95 border-[#E5E1DA]">
              <CardHeader>
                <CardTitle className="text-[#8B5E3C] underline">{t("resources.legal.penalties")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {legalItems.map(({ key }) => (
                  <div key={key}>
                    <h4 className="font-medium text-[#8B5E3C] mb-1">{t(`resources.legal.${key}.label`)}</h4>
                    <p className="text-sm text-[#6B6B6B]">{t(`resources.legal.${key}.penalty`)}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Violentomètre */}
        <section className="rounded-lg">
          <img
            src={violentometre}
            alt={t("resources.violentometre.alt")}
            className="w-full h-auto cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
            onClick={openZoom}
          />
        </section>

        {/* Zoom Violentomètre */}
        {zoom && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
            <button
              onClick={closeZoom}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 transition-colors z-10"
            >
              ✕
            </button>
            <img
              src={violentometre}
              alt={t("resources.violentometre.altZoom")}
              className="w-full h-full object-contain md:max-w-[90vw] md:max-h-[90vh] md:w-auto md:h-auto"
              onClick={closeZoom}
            />
          </div>
        )}

      </div>
    </div>
  );
}