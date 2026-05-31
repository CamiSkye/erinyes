import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "../../shared/ui/card";
import { StatisticsChart } from "./components/StatisticsChart";
import { infoCards } from "./data/home.data";

export function HomePage() {
  const { t } = useTranslation();

  const infoCardKeys = [
    { titleKey: "home.about.whatAre.title", contentKey: "home.about.whatAre.content" },
    { titleKey: "home.about.types.title",   contentKey: "home.about.types.content"   },
    { titleKey: "home.about.rights.title",  contentKey: "home.about.rights.content"  },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EA]">

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#8B5E3C] mb-6">
            {t("home.hero.title")}
          </h1>
          <p className="text-2xl md:text-3xl text-[#6B6B6B] mb-6 max-w-4xl mx-auto leading-tight">
            {t("home.hero.subtitle")}
          </p>
          <p className="text-xl text-[#6B6B6B] mb-8 max-w-3xl mx-auto font-medium">
            {t("home.hero.message")}
          </p>
          <p className="text-lg text-[#9B7FD7] max-w-2xl mx-auto">
            {t("home.hero.tagline")}
          </p>
        </div>
      </section>

      {/* Section explicative */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#8B5E3C] text-center mb-12">
            {t("home.about.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infoCards.map((card, index) => {
              const IconComponent = card.icon;
              const keys = infoCardKeys[index];
              return (
                <Card key={index} className="bg-white/95 border-[#E5E1DA]">
                  <CardHeader className="text-center">
                    <div
                      className="w-16 h-16 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: `${card.iconColor}20` }}
                    >
                      <div style={{ color: card.iconColor }}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                    </div>
                    <CardTitle className="text-[#8B5E3C]">{t(keys.titleKey)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6B6B6B] text-center">{t(keys.contentKey)}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section statistiques */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#8B5E3C] text-center mb-6">
            {t("home.stats.title")}
          </h2>
          <p className="text-lg text-[#6B6B6B] text-center mb-8 max-w-3xl mx-auto">
            {t("home.stats.subtitle")}
          </p>
          <StatisticsChart />
        </div>
      </section>

    </div>
  );
}