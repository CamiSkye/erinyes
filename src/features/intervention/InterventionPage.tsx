import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";
import { Shield } from "lucide-react";
import Detresse from "../../assets/hand.jpeg";

import { useIntervention } from "./hooks/useIntervention";
import {
  menuItems,
  METHOD_3D_COLORS,
  ANGEL_SHOT_COLORS,
  ANGEL_SHOT_EMOJIS,
  URGENT_STEP_INDEX,
  urgencyApps,
} from "./data/intervention.data";

export function InterventionPage() {
  const { scrollToSection } = useIntervention();
  const { t } = useTranslation();

  const method3DKeys = ["delegate", "distract", "dialogue"] as const;
  const angelShotKeys = ["neat", "ice", "lime"] as const;
  const steps = t("intervention.whatToDo.steps", { returnObjects: true }) as { title: string; description: string }[];
  const handSteps = t("intervention.codes.hand.steps", { returnObjects: true }) as string[];
  const handUsages = t("intervention.codes.hand.usages", { returnObjects: true }) as string[];

  const menuLabels: Record<string, string> = {
    "methode-3d":    t("intervention.menu.method3d"),
    "que-faire":     t("intervention.menu.whatToDo"),
    "codes-secrets": t("intervention.menu.codes"),
  };

  return (
    <div className="min-h-screen bg-[#F5F1EA] py-8">

      <Helmet>
        <title>Comment intervenir face aux VSS — Erinyes</title>
        <meta name="description" content="Apprenez à intervenir face aux violences sexistes et sexuelles : méthode des 3D, codes secrets Angel Shot, signe de détresse de la main." />
        <meta property="og:title" content="Comment intervenir face aux VSS — Erinyes" />
        <meta property="og:description" content="Méthode des 3D, Angel Shot, codes secrets : toutes les techniques pour agir face aux VSS." />
        <meta property="og:url" content="https://erinyes.fr/intervention" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#8B5E3C] mb-4">{t("intervention.title")}</h1>
          <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto">{t("intervention.subtitle")}</p>
        </div>

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

        <section id="methode-3d" className="mb-12">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">{t("intervention.method3d.title")}</h2>
          <div className="bg-white/95 rounded-lg p-6 border border-[#E5E1DA] mb-6">
            <p className="text-[#6B6B6B] mb-6">{t("intervention.method3d.intro")}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {method3DKeys.map((key, index) => (
                <div key={key} className={`text-center p-6 ${METHOD_3D_COLORS[index]} rounded-lg`}>
                  <h3 className="text-lg font-bold text-white mb-3">{t(`intervention.method3d.${key}.label`)}</h3>
                  <p className="text-base text-white">{t(`intervention.method3d.${key}.description`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="que-faire" className="mb-12">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">{t("intervention.whatToDo.title")}</h2>
          <div className="bg-white/95 rounded-lg p-6 border border-[#E5E1DA]">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                    index === URGENT_STEP_INDEX ? "bg-[#FFA45C]" : "bg-[#9B7FD7]"
                  } text-white font-bold`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-[#8B5E3C]">{step.title}</h3>
                    <p className="text-[#6B6B6B]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="codes-secrets" className="mb-12">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6 flex items-center">
            <Shield className="mr-3 h-6 w-6" />
            {t("intervention.codes.title")}
          </h2>

          <div className="bg-white/95 rounded-lg p-6 border border-[#E5E1DA] mb-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-[#8B5E3C] mb-2">{t("intervention.codes.angelShot.title")}</h3>
              <p className="text-[#6B6B6B] max-w-3xl mx-auto">{t("intervention.codes.angelShot.subtitle")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {angelShotKeys.map((key, index) => (
                <div key={key} className={`text-center p-6 ${ANGEL_SHOT_COLORS[index]} rounded-lg hover:scale-105 transition-transform cursor-pointer`}>
                  <div className="text-3xl mb-3">{ANGEL_SHOT_EMOJIS[index]}</div>
                  <h4 className="text-base font-bold text-white mb-2">{t(`intervention.codes.angelShot.${key}.label`)}</h4>
                  <p className="text-base text-white">{t(`intervention.codes.angelShot.${key}.description`)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/95 border-[#E5E1DA] hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#8B5E3C]">{t("intervention.codes.angela.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6B6B6B] mb-3">{t("intervention.codes.angela.description")}</p>
                <br />
                <div className="bg-[#9B7FD7] bg-opacity-10 p-3 rounded-lg">
                  <p className="text-l text-white font-medium">{t("intervention.codes.angela.phrase")}</p>
                  <p className="text-s text-white mt-1">{t("intervention.codes.angela.content")}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 border-[#E5E1DA] hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#8B5E3C]">{t("intervention.codes.apps.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black text-l mb-3">{t("intervention.codes.apps.content")}</p>
                <div className="flex flex-wrap gap-2">
                  {urgencyApps.map((app) => (
                    <span key={app} className="bg-[#FFA45C] text-white text-m px-3 py-2 rounded font-medium">{app}</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 border-[#E5E1DA] hover:shadow-lg transition-shadow lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#8B5E3C]">{t("intervention.codes.hand.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[#6B6B6B] mb-3">{t("intervention.codes.hand.content")}</p>
                    <ol className="list-decimal list-inside space-y-1 text-m text-[#6B6B6B]">
                      {handSteps.map((step, i) => <li key={i}>{step}</li>)}
                    </ol>
                    <br />
                    <img src={Detresse} alt="Signe de détresse" />
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h4 className="text-xl text-red-800 mb-2">{t("intervention.codes.hand.usagesTitle")}</h4>
                    <ul className="text-l text-red-700 space-y-1">
                      {handUsages.map((usage, i) => <li key={i}>• {usage}</li>)}
                    </ul>
                    <p className="text-sm text-red-600 mt-2 font-medium">{t("intervention.codes.hand.saved")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center bg-[#9B7FD7] bg-opacity-5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">{t("intervention.cta.title")}</h2>
          <p className="text-white mb-6 max-w-2xl mx-auto">{t("intervention.cta.content")}</p>
        </section>
      </div>
    </div>
  );
}