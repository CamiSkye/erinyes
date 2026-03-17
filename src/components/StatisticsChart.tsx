import { ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle} from "./ui/card";

//Donnée réeelle des VSS en 2023 et 2024
const evolutionData = [
  { year: "2023", victimes: 114100, victime_mineures: 65300 },
  { year: "2024", victimes: 122600, victime_mineures: 71100 },
  { year: "2025", victimes: 132300, victime_mineures: 76200 }
];

const genderData2024 = [
  { genre: "Femmes", pourcentage: 85 },
  { genre: "Hommes", pourcentage: 15 }
];

const enfantsData2023 = [
  { tranche: "0-5 ans", nombre: 3265 },
  { tranche: "6-11 ans", nombre: 13060 },
  { tranche: "12-17 ans", nombre: 48975 }
];

const contexteData2025 = [
  { type: "Hors famille", pourcentage: 72 },
  { type: "Familial", pourcentage: 28 }
];

const COLORS = ["#9B7FD7", "#FFA45C", "#8B5E3C"];

export function StatisticsChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

      <Card className="bg-white/95 border-[#E5E1DA]">
        <CardHeader>
          <CardTitle className="text-[#8B5E3C]">Évolution 2023 à 2025</CardTitle>
          <CardDescription className="text-[#6B6B6B]">
            Nombre de victimes de violences sexuelles
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={evolutionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E1DA" />
              <XAxis dataKey="year" stroke="#8B5E3C" />
              <YAxis stroke="#8B5E3C" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FFFFFFF0",
                  border: "1px solid #E5E1DA",
                  borderRadius: "8px"
                }}
                formatter={(value, name) => {
                  let label = name;
                  
                  if (name === "victime_mineures") {
                    label = "Victimes mineures";
                  }

                  if (name === "victimes") {
                    label = "Victimes totales";
                  }

                  return [
                    typeof value === "number" ? value.toLocaleString() : value,
                    label
                  ];
                }}
              />

              <Bar dataKey="victimes" fill="#9B7FD7" />
              <Bar dataKey="victime_mineures" fill="#FFA45C" />
            </BarChart>
          </ResponsiveContainer>

          <div className="flex gap-6 mt-4">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-sm bg-[#9B7FD7]" />
              <span className="text-sm text-[#8B5E3C]">Victimes totales</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-sm bg-[#FFA45C]" />
              <span className="text-sm text-[#8B5E3C]">Victimes mineures</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/95 border-[#E5E1DA]">
        <CardHeader>
          <CardTitle className="text-[#8B5E3C]">
            Répartition par genre (2024)
          </CardTitle>
          <CardDescription className="text-[#6B6B6B]">
            Augmentation de 7% par rapport à 2023
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genderData2024}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="pourcentage"
              >
                <Cell fill="#9B7FD7" />
                <Cell fill="#FFA45C" />
              </Pie>
              <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFFF0",
                border: "1px solid #E5E1DA",
                borderRadius: "8px"
              }}
              formatter={(value, name, props) => {
                const genre = props?.payload?.genre;

                return [`${value}%`, genre];
              }}
            />
            </PieChart>
          </ResponsiveContainer>

          <div className="flex justify-start gap-6 mt-4">
            {genderData2024.map((item, index) => (
              <div key={item.genre} className="flex items-center gap-2">
                <span
                  className="w-4 h-4 rounded-sm"
                  style={{ backgroundColor: COLORS[index] }}
                />
                <span className="text-sm text-[#8B5E3C]">
                  {item.genre} : {item.pourcentage}%
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
<Card className="bg-white/95 border-[#E5E1DA]">
  <CardHeader>
    <CardTitle className="text-[#8B5E3C]">
      Contexte des violences sur mineurs (2025)
    </CardTitle>
    <CardDescription className="text-[#6B6B6B]">
      Majoritairement hors cadre familial
    </CardDescription>
  </CardHeader>

  <CardContent>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={contexteData2025}
          dataKey="pourcentage"
          cx="50%"
          cy="50%"
          outerRadius={80}
        >
          <Cell fill="#9B7FD7" />
          <Cell fill="#FFA45C" />
        </Pie>
        <Tooltip formatter={(value, name, props) => {
          return [`${value}%`, props.payload.type];
        }} />
      </PieChart>
    </ResponsiveContainer>
  </CardContent>
</Card>

      <Card className="bg-white/95 border-[#E5E1DA]">
        <CardHeader>
          <CardTitle className="text-[#8B5E3C]">
            Victimes mineures par tranche d’âge (2023)
          </CardTitle>
          <CardDescription className="text-[#6B6B6B]">
            Répartition des enfants victimes
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={enfantsData2023}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E1DA" />
              <XAxis dataKey="tranche" stroke="#8B5E3C" />
              <YAxis stroke="#8B5E3C" />
              <Tooltip contentStyle={{
                  backgroundColor: "#FFFFFFF0",
                  border: "1px solid #E5E1DA",
                  borderRadius: "8px"
                }}
                labelFormatter={(label) => label}
                formatter={(value) => {
                  return [
                    typeof value === "number" ? value.toLocaleString() : value,
                    "Nombre"
                  ];
                }}
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
      <Card className="bg-white/95 border-[#E5E1DA]">
        <CardHeader>
          <CardTitle className="text-[#8B5E3C]">
            Chiffres clés 2024-2025
          </CardTitle>
          <CardDescription className="text-[#6B6B6B]">
            Données principales
          </CardDescription>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-4">
          <div className="text-center p-4 bg-[#9B7FD7] rounded-lg text-white">
  <div className="text-xl font-bold">132 300</div>
  <div className="text-sm">victimes en 2025 (+8%)</div>
</div>

<div className="text-center p-4 bg-[#FFA45C] rounded-lg text-white">
  <div className="text-xl font-bold">58%</div>
  <div className="text-sm">des victimes sont mineures</div>
</div>

<div className="text-center p-4 bg-[#8B5E3C] rounded-lg text-white">
  <div className="text-xl font-bold">85%</div>
  <div className="text-sm">des victimes sont des femmes</div>
</div>

<div className="text-center p-4 bg-red-600 rounded-lg text-white">
  <div className="text-xl font-bold">≈ 72%</div>
  <div className="text-sm">
    des violences ont lieu hors cadre familial
  </div>
</div>
        </CardContent>
      </Card>
    </div>
  );
}
