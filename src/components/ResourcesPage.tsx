import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Phone, ExternalLink, MapPin, Clock, Users, Shield } from "lucide-react";
import violentometre from "../assets/Violentometre.webp";


export function ResourcesPage() {

  const [zoom, setZoom] = useState(false);
  const emergencyNumbers = [
    {
      number: "3919",
      name: "Violences Sexistes et Sexuelles",
      description: "Numéro national d'information destiné aux femmes victimes de violences",
      hours: "24h/24 - 7j/7",
      free: true
    },
    {
      number: "17",
      name: "Police et Gendarmerie",
      description: "Pour signaler une urgence ou porter plainte",
      hours: "24h/24 - 7j/7",
      free: true
    },
    {
      number: "114",
      name: "Personnes sourdes/malentendantes",
      description: "Numéro d'urgence par SMS pour les personnes sourdes et malentendantes",
      hours: "24h/24 - 7j/7",
      free: true
    },
    {
      number: "15",
      name: "Urgences médicales (SAMU)",
      description: "Pour toute urgence médicale nécessitant une intervention rapide",
      hours: "24h/24 - 7j/7",
      free: true
    },
    {
      number: "18",
      name: "Pompiers",
      description: "Pour les urgences incendie, accidents et secours à personnes",
      hours: "24h/24 - 7j/7",
      free: true
    },
    {
      number: "112",
      name: "Services d'urgence européens",
      description: "Numéro d'urgence européen pour toutes situations d'urgence",
      hours: "24h/24 - 7j/7",
      free: true
    },
    {
      number: "119",
      name: "Allo Enfance maltraitée",
      description: "Numéro national pour signaler un enfant en danger ou victime de maltraitance, permettant un suivi et une intervention des services sociaux ou judiciaires.",
      hours: "24h/24 - 7j/7",
      free: true
    },
    {
      number: "3114",
      name: "Prévention Suicide",
      description: "Si vous êtes en détresse et/ou avez des pensées suicidaires, si vous voulez aider une personne en souffrance, contacter le numéro national de prévention du suicide.",
      hours: "24h/24 - 7j/7",
      free: true
    }
  ];

  const associations = [
    {
      name: "Fédération nationale solidarité femmes (FNSF)",
      description: "Réseau national d'associations spécialisées dans l'accueil des femmes victimes de violences",
      website: "solidaritefemmes.org",
      services: ["Hébergement d'urgence", "Accompagnement social", "Aide juridique"]
    },
    {
      name: "FN CIDFF",
      description: "Fédération nationale des Centres d'Information sur les Droits des Femmes et des Familles",
      website: "fncidff.info",
      services: ["Information juridique", "Accompagnement", "Accès aux droits"]
    },
    {
      name: "Collectif Féministe Contre le Viol (CFCV)",
      description: "Association de lutte contre les violences sexuelles",
      phone: "0 800 05 95 95",
      website: "cfcv.asso.fr",
      services: ["Écoute", "Accompagnement juridique", "Groupes de parole"]
    },
    {
      name: "SOS Hommes Battus",
      description: "Association d'aide aux hommes victimes de violences conjugales",
      website: "soshommesbattus.org",
      services: ["Écoute téléphonique", "Accompagnement", "Information"]
    },
    {
      name: "AVFT",
      description: "Association européenne contre les Violences faites aux Femmes au Travail",
      website: "avft.org",
      services: ["Accompagnement juridique", "Information", "Prévention"]
    }
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

  const menuItems = [
    { id: 'urgence', label: 'Numéros d\'urgence', icon: Phone },
    { id: 'associations', label: 'Associations', icon: Users },
    { id: 'cadre-legal', label: 'Cadre légal', icon: MapPin }
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
            Ressources et aide
          </h1>
          <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto">
            Trouvez ici toutes les ressources pour vous aider ou aider une personne victime de violences sexistes et sexuelles.
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

        {/* Numéros d'urgence */}
        <section id="urgence" className="mb-12">
          <h2 className="text-3xl font-bold text-[#8B5E3C] mb-6 flex items-center">
            <Phone className="mr-3 h-6 w-6" />
            Numéros d'urgence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyNumbers.map((emergency, index) => (
              <Card key={index} className="bg-white/95 border-[#E5E1DA] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-red-600">{emergency.number}</CardTitle>
                    {emergency.free && (
                      <span className="bg-[#9B7FD7] text-white text-sm px-3 py-2 rounded font-medium">
                        Gratuit
                      </span>
                    )}
                  </div>
                  <CardDescription className="font-medium text-[#9B7FD7]">
                    {emergency.name}
                  </CardDescription>
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
            Associations d'aide aux victimes
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {associations.map((assoc, index) => (
              <Card key={index} className="bg-white/95 border-[#E5E1DA]">
                <CardHeader>
                  <CardTitle className="text-xl text-[#8B5E3C] flex items-center justify-between">
                    {assoc.name}
                    <ExternalLink className="h-4 w-4 text-[#9B7FD7]" />
                  </CardTitle>
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
                      <p className="text-sm font-medium text-[#8B5E3C] mb-2">Services proposés :</p>
                      <div className="flex flex-wrap gap-2">
                        {assoc.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="bg-[#9B7FD7] text-white text-sm px-3 py-2 rounded font-medium"
                          >
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
            Cadre légal
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/95 border-[#E5E1DA]">
              <CardHeader>
                <CardTitle className="text-[#8B5E3C] underline">Définitions légales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-medium text-[#8B5E3C] mb-1">Harcèlement sexuel</h4>
                  <p className="text-sm text-[#6B6B6B]">Propos ou comportements à connotation sexuelle répétés portant atteinte à la dignité (art. 222-33 du Code pénal)</p>
                </div>
                <div>
                  <h4 className="font-medium text-[#8B5E3C] mb-1">Agression sexuelle</h4>
                  <p className="text-sm text-[#6B6B6B]">Atteinte sexuelle commise avec violence, contrainte, menace ou surprise (art. 222-22 du Code pénal)</p>
                </div>
                <div>
                  <h4 className="font-medium text-[#8B5E3C] mb-1">Viol</h4>
                  <p className="text-sm text-[#6B6B6B]">Acte de pénétration sexuelle commis avec violence, contrainte, menace ou surprise (art. 222-23 du Code pénal)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 border-[#E5E1DA]">
              <CardHeader>
                <CardTitle className="text-[#8B5E3C] underline">Peines encourues</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-medium text-[#8B5E3C] mb-1">Harcèlement sexuel</h4>
                  <p className="text-sm text-[#6B6B6B]">2 ans d'emprisonnement et 30 000€ d'amende (aggravé : 3 ans et 45 000€)</p>
                </div>
                <div>
                  <h4 className="font-medium text-[#8B5E3C] mb-1">Agression sexuelle</h4>
                  <p className="text-sm text-[#6B6B6B]">5 ans d'emprisonnement et 75 000€ d'amende (aggravé : 7 ans et 100 000€)</p>
                </div>
                <div>
                  <h4 className="font-medium text-[#8B5E3C] mb-1">Viol</h4>
                  <p className="text-sm text-[#6B6B6B]">15 ans de réclusion criminelle (aggravé : 20 ans)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>


        {/* Call to action */}
        <section className="rounded-lg">
          <img
            src={violentometre}
            alt="Violentomètre"
            className="w-full h-auto cursor-pointer"
            onClick={() => setZoom(true)}
          />
        </section>

        {zoom && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center cursor-pointer"
            onClick={() => setZoom(false)}
          >
            <img
              src={violentometre}
              alt="Violentomètre zoom"
              className="max-w-[90vw] max-h-[90vh]"
            />
          </div>
        )}

      </div>
    </div>
  );
}