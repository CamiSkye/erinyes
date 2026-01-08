import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { StatisticsChart } from "./StatisticsChart";
import { Phone, MessageCircle, Users, FileText } from "lucide-react";

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F1EA]">
      {/* Section Hero avec slogan */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#8B5E3C] mb-6">
            Ton corps, ton choix, ton droit.
          </h1>
          <p className="text-2xl md:text-3xl text-[#6B6B6B] mb-6 max-w-4xl mx-auto leading-tight">
            Arrêtons de normaliser la domination et la sexualisation, mais normalisons plutôt le consentement d'autrui.
          </p>
          <p className="text-xl text-[#6B6B6B] mb-8 max-w-3xl mx-auto font-medium">
            Écoutez, comprenez et respectez l'envie et le besoin de chacun. <br></br>Quand c'est non, c'est NON !
          </p>
          <p className="text-lg text-[#9B7FD7] max-w-2xl mx-auto">
            Un site de sensibilisation et d'accompagnement <br></br>pour lutter contre les Violences Sexistes et Sexuelles.
          </p>

        </div>
      </section>

      {/* Section explicative */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#8B5E3C] text-center mb-12">
            Comprendre les Violences Sexistes et Sexuelles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/95 border-[#E5E1DA]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#9B7FD7] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#9B7FD7]" />
                </div>
                <CardTitle className="text-[#8B5E3C]">Qu'est-ce que les VSS ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6B6B6B] text-center">
                  Les Violences Sexistes et Sexuelles englobent toutes les formes de violences physiques, 
                  psychologiques ou sexuelles exercées en raison du sexe, de l'identité de genre ou de l'orientation sexuelle.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 border-[#E5E1DA]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#FFA45C] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-[#FFA45C]" />
                </div>
                <CardTitle className="text-[#8B5E3C]">Types de violences</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6B6B6B] text-center">
                  Harcèlement, agression physique ou sexuelle, viol, violences conjugales, 
                  cyberharcèlement, discriminations... Chaque forme de violence est grave et inacceptable.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 border-[#E5E1DA]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#8B5E3C] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-[#8B5E3C]" />
                </div>
                <CardTitle className="text-[#8B5E3C]">Vos droits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6B6B6B] text-center">
                  Vous avez le droit d'être protégé·e, d'être aidé·e et accompagné·e. 
                  Personne n'a le droit de porter atteinte à votre intégrité physique ou psychologique.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section statistiques */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#8B5E3C] text-center mb-6">
            Les chiffres qui révèlent l'ampleur du phénomène
          </h2>
          <p className="text-lg text-[#6B6B6B] text-center mb-8 max-w-3xl mx-auto">
            Ces statistiques montrent l'importance de sensibiliser, d'agir et d'accompagner 
            les victimes de violences sexistes et sexuelles.
          </p>
          
          <StatisticsChart />
        </div>
      </section>


    </div>
  );
}