import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Shield, MapPin, Phone } from "lucide-react";
import Detresse from '../assets/hand.jpeg';

export function InterventionPage() {
  const menuItems = [
    { id: 'methode-3d', label: 'Méthode 3D', icon: Shield },
    { id: 'que-faire', label: 'Que faire ?', icon: MapPin },
    { id: 'codes-secrets', label: 'Codes secrets', icon: Shield }
  ];
  
  const emergencySteps = [
    {
      title: "Assurer la sécurité immédiate",
      description: "Si vous sentez une victime en danger, intervenez sans vous mettre en danger ou faites diversion (demandez l'heure, interpellez comme si vous la connaissiez). Sinon, appelez le 17 ou envoyez un SMS au 114.",
      urgent: true
    },
    {
      title: "Soutenir la victime",
      description: "Restez avec la victime, demandez-lui si elle va bien et écoutez-la sans juger. Ne minimisez pas ce qu'elle vient de vivre. Rassurez-la en lui disant qu'elle n'est pas seule."
    },
    {
      title: "Ne pas confronter l'agresseur",
      description: "Vous n'avez pas à jouer les héros. Protégez la victime et recueillez les éléments utiles (lieu, description, heure) pour prévenir les autorités."
    },
    {
      title: "Proposer de l'aide concrète",
      description: "Accompagnez la victime pour porter plainte, voir un médecin ou appeler le 3919 ou le 17. Proposez de témoigner si vous avez vu ou entendu les faits."
    },
    {
      title: "Signaler les faits",
      description: "Dans les transports : bouton d'alerte, agents SNCF/RATP, app 'STOP Harcèlement'. À l'université/travail : direction ou référent égalité. En ligne : Pharos (internet-signalement.gouv.fr)."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1EA] py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#8B5E3C] mb-4">
            Comment intervenir en sécurité
          </h1>
          <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto">
            Apprenez les techniques d'intervention sécurisées, les étapes à suivre et les codes secrets pour aider les victimes de VSS.
          </p>
        </div>

        {/* Menu de navigation des sections */}
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
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Méthode des 3D */}
        <section id="methode-3d" className="mb-12">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">
            Méthode des 3D - Comment intervenir en sécurité
          </h2>
          <div className="bg-white/95 rounded-lg p-6 border border-[#E5E1DA] mb-6">
            <p className="text-[#6B6B6B] mb-6">
              Ces techniques visent à agir sans mettre en danger sa propre sécurité :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-[#9B7FD7] rounded-lg">
                <h3 className="text-lg font-bold text-white mb-3">DÉLÉGUER</h3>
                <p className="text-base text-white">Alerter un responsable, contacter la sécurité ou les secours</p>
              </div>
              <div className="text-center p-6 bg-[#FFA45C] rounded-lg">
                <h3 className="text-lg font-bold text-white mb-3">DÉTOURNER</h3>
                <p className="text-base text-white">Interrompre la scène par une question anodine, une distraction</p>
              </div>
              <div className="text-center p-6 bg-[#8B5E3C] rounded-lg">
                <h3 className="text-lg font-bold text-white mb-3">DIALOGUER</h3>
                <p className="text-base text-white">Si la situation le permet, parler directement à l'agresseur ou à la victime</p>
              </div>
            </div>
          </div>
        </section>

        {/* Que faire étape par étape */}
        <section id="que-faire" className="mb-12">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">
            Que faire étape par étape ?
          </h2>
          <div className="bg-white/95 rounded-lg p-6 border border-[#E5E1DA]">
            <div className="space-y-6">
              {emergencySteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                    step.urgent ? 'bg-[#FFA45C]' : 'bg-[#9B7FD7]'
                  } text-white font-bold`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className={`font-bold mb-2 ${
                      step.urgent ? 'text-[#FFA45C]' : 'text-[#8B5E3C]'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-[#6B6B6B]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Codes secrets et signaux discrets */}
        <section id="codes-secrets" className="mb-12">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6 flex items-center">
            <Shield className="mr-3 h-6 w-6" />
            Codes secrets et signaux discrets
          </h2>
          
          <div className="bg-white/95 rounded-lg p-6 border border-[#E5E1DA] mb-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-[#8B5E3C] mb-2">Angel Shot – C'est quoi ?</h3>
              <p className="text-[#6B6B6B] max-w-3xl mx-auto">
                Le "Angel Shot" est un code discret utilisé principalement dans les bars et les boîtes de nuit. 
                Il permet à une personne de signaler au personnel qu'elle est en danger ou mal à l'aise, sans alerter l'agresseur potentiel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-6 bg-[#9B7FD7] rounded-lg hover:scale-105 transition-transform cursor-pointer">
                <div className="text-3xl mb-3">🚗</div>
                <h4 className="text-base font-bold text-white mb-2">"Angel shot neat"</h4>
                <p className="text-base text-white">Demande de raccompagnement à sa voiture</p>
              </div>
              <div className="text-center p-6 bg-[#FFA45C] rounded-lg hover:scale-105 transition-transform cursor-pointer">
                <div className="text-3xl mb-3">🚕</div>
                <h4 className="text-base font-bold text-white mb-2">"Angel shot with ice"</h4>
                <p className="text-base text-white">Demande à ce qu'on appelle un taxi ou Uber</p>
              </div>
              <div className="text-center p-6 bg-[#8B5E3C] rounded-lg hover:scale-105 transition-transform cursor-pointer">
                <div className="text-3xl mb-3">🚔</div>
                <h4 className="text-base font-bold text-white mb-2">"Angel shot with lime"</h4>
                <p className="text-base text-white">Demande à ce qu'on appelle la police</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/95 border-[#E5E1DA] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center">
                  <CardTitle className="text-xl font-bold text-[#8B5E3C]">Demander "Angela"</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#6B6B6B] mb-3">
                  Système mis en place initialement au Royaume-Uni ("Ask for Angela") pour protéger contre le harcèlement de rue.
                </p><br></br>
                <div className="bg-[#9B7FD7] bg-opacity-10 p-3 rounded-lg">
                  <p className="text-l text-white font-medium">
                    💬 "Est-ce qu'Angela est là ?"
                  </p>
                  <p className="text-s text-white mt-1">
                    Si vous vous sentez en danger ou que vous êtes harcelé dans la rue, poser cette question dans un commerce, un restaurant ou un lieu culturel (identificiable par un macaron violet). Cela déclenche une procédure d'aide
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 border-[#E5E1DA] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center">
                  <CardTitle className="text-xl font-bold text-[#8B5E3C]">Applications d'urgence</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-black text-l mb-3">
                  Certaines applis permettent de prévenir un contact de confiance, appeler les secours ou envoyer sa localisation. <br></br>Sur Android vous pouvez appuyer cinq fois rapidement sur le bouton marche/arrêt pour déclencher automatiquement un appel aux secours.<br></br>L’application Urgences sur iPhone permet d’appeler rapidement les services d’urgence et de partager automatiquement vos informations médicales vitales en cas de besoin.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#FFA45C] text-white text-m px-3 py-2 rounded font-medium">App-Elles</span>
                  <span className="bg-[#FFA45C] text-white text-m px-3 py-2 rounded font-medium">UrSafe</span>
                  <span className="bg-[#FFA45C] text-white text-m px-3 py-2 rounded font-medium">Urgences</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 border-[#E5E1DA] hover:shadow-lg transition-shadow lg:col-span-2">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <CardTitle className="text-xl font-bold text-[#8B5E3C]">Signe de la main en détresse</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[#6B6B6B] mb-3">
                      Un geste international reconnu pour alerter discrètement :
                    </p>
                    <ol className="list-decimal list-inside space-y-1 text-m text-[#6B6B6B]">
                      <li>Paume tournée vers l'extérieur</li>
                      <li>Plier le pouce dans la paume</li>
                      <li>Refermer les doigts dessus</li>
                    </ol><br></br>
                    <img src={Detresse}></img>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h4 className="text-xl text-red-800 mb-2">⚠️ Utilisations</h4>
                    <ul className="text-l text-red-700 space-y-1">
                      <li>• Appels vidéo</li>
                      <li>• Alerter discrètement</li>
                      <li>• Se sentir menacer</li>
                      <li>• Violence domestique</li>
                      <li>• Tentative d'enlèvement</li>
                    </ul>
                    <p className="text-sm text-red-600 mt-2 font-medium">
                      Ce signe a déjà sauvé plusieurs victimes !
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to action */}
        <section className="text-center bg-[#9B7FD7] bg-opacity-5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Agir en sécurité, c'est sauver des vies
          </h2>
          <p className="text-white mb-6 max-w-2xl mx-auto">
            Chaque intervention peut faire la différence. N'hésitez pas à utiliser ces techniques et à diffuser ces informations autour de vous.
          </p>
        </section>
      </div>
    </div>
  );
}