import { useTranslation } from "react-i18next";
import { ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../shared/ui/card";
import {
  evolutionData,
  GENDER_DATA,
  CONTEXTE_DATA,
  ENFANTS_NOMBRES,
  KEY_FIGURE_COLORS,
  KEY_FIGURE_VALUES,
  CHART_COLORS,
} from "../data/home.data";

// ===========================
// StatisticsChart
// ===========================

const tooltipStyle = {
  backgroundColor: "#FFFFFFF0",
  border: "1px solid #E5E1DA",
  borderRadius: "8px",
};

export function StatisticsChart() {
  const { t } = useTranslation();

  const genderData = [
    { genre: t("home.charts.gender.women"), pourcentage: GENDER_DATA[0].pourcentage },
    { genre: t("home.charts.gender.men"),   pourcentage: GENDER_DATA[1].pourcentage },
  ];

  const contexteData = [
    { type: t("home.charts.context.outOfFamily"), pourcentage: CONTEXTE_DATA[0].pourcentage },
    { type: t("home.charts.context.family"),      pourcentage: CONTEXTE_DATA[1].pourcentage },
  ];

  // ✅ Tranches d'âge traduites depuis le JSON
  const ageGroups = t("home.charts.children.ageGroups", { returnObjects: true }) as string[];
  const enfantsData = ageGroups.map((tranche, index) => ({
    tranche,
    nombre: ENFANTS_NOMBRES[index],
  }));

  const keyFigureLabels = [
    t("home.charts.keyFigures.victims2025"),
    t("home.charts.keyFigures.minors"),
    t("home.charts.keyFigures.women"),
    t("home.charts.keyFigures.outOfFamily"),
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

      {/* Évolution 2023-2025 */}
      <Card className="bg-white/95 border-[#E5E1DA]">
        <CardHeader>
          <CardTitle className="text-[#8B5E3C]">{t("home.charts.evolution.title")}</CardTitle>
          <CardDescription className="text-[#6B6B6B]">{t("home.charts.evolution.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={evolutionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E1DA" />
              <XAxis dataKey="year" stroke="#8B5E3C" />
              <YAxis stroke="#8B5E3C" />
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(value, name) => {
                  const label = name === "victime_mineures" ? t("home.charts.evolution.minorVictims")
                              : name === "victimes"         ? t("home.charts.evolution.totalVictims")
                              : name;
                  return [typeof value === "number" ? value.toLocaleString() : value, label];
                }}
              />
              <Bar dataKey="victimes"         fill="#9B7FD7" />
              <Bar dataKey="victime_mineures" fill="#FFA45C" />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex gap-6 mt-4">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-sm bg-[#9B7FD7]" />
              <span className="text-sm text-[#8B5E3C]">{t("home.charts.evolution.totalVictims")}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-sm bg-[#FFA45C]" />
              <span className="text-sm text-[#8B5E3C]">{t("home.charts.evolution.minorVictims")}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Répartition par genre */}
      <Card className="bg-white/95 border-[#E5E1DA]">
        <CardHeader>
          <CardTitle className="text-[#8B5E3C]">{t("home.charts.gender.title")}</CardTitle>
          <CardDescription className="text-[#6B6B6B]">{t("home.charts.gender.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={genderData} cx="50%" cy="50%" outerRadius={80} dataKey="pourcentage">
                <Cell fill="#9B7FD7" />
                <Cell fill="#FFA45C" />
              </Pie>
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(value, _name, props) => [`${value}%`, props?.payload?.genre]}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-start gap-6 mt-4">
            {genderData.map((item, index) => (
              <div key={item.genre} className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: CHART_COLORS[index] }} />
                <span className="text-sm text-[#8B5E3C]">{item.genre} : {item.pourcentage}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contexte des violences sur mineurs */}
      <Card className="bg-white/95 border-[#E5E1DA]">
        <CardHeader>
          <CardTitle className="text-[#8B5E3C]">{t("home.charts.context.title")}</CardTitle>
          <CardDescription className="text-[#6B6B6B]">{t("home.charts.context.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={contexteData} dataKey="pourcentage" cx="50%" cy="50%" outerRadius={80}>
                <Cell fill="#9B7FD7" />
                <Cell fill="#FFA45C" />
              </Pie>
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(value, _name, props) => [`${value}%`, props?.payload?.type]}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-start gap-6 mt-4">
            {contexteData.map((item, index) => (
              <div key={item.type} className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: CHART_COLORS[index] }} />
                <span className="text-sm text-[#8B5E3C]">{item.type} : {item.pourcentage}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Victimes mineures par tranche d'âge */}
      <Card className="bg-white/95 border-[#E5E1DA]">
        <CardHeader>
          <CardTitle className="text-[#8B5E3C]">{t("home.charts.children.title")}</CardTitle>
          <CardDescription className="text-[#6B6B6B]">{t("home.charts.children.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={enfantsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E1DA" />
              <XAxis dataKey="tranche" stroke="#8B5E3C" />
              <YAxis stroke="#8B5E3C" />
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(value) => [typeof value === "number" ? value.toLocaleString() : value, t("home.charts.children.count")]}
              />
              <Bar dataKey="nombre">
                <Cell fill="#9B7FD7" />
                <Cell fill="#FFA45C" />
                <Cell fill="#8B5E3C" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Chiffres clés */}
      <Card className="bg-white/95 border-[#E5E1DA]">
        <CardHeader>
          <CardTitle className="text-[#8B5E3C]">{t("home.charts.keyFigures.title")}</CardTitle>
          <CardDescription className="text-[#6B6B6B]">{t("home.charts.keyFigures.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4">
          {KEY_FIGURE_VALUES.map((value, index) => (
            <div key={index} className={`text-center p-4 ${KEY_FIGURE_COLORS[index]} rounded-lg text-white`}>
              <div className="text-xl font-bold">{value}</div>
              <div className="text-sm">{keyFigureLabels[index]}</div>
            </div>
          ))}
        </CardContent>
      </Card>

    </div>
  );
}