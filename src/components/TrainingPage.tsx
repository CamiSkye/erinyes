import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle,} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { PlayCircle, Clock, BookOpen, Shield, Heart } from "lucide-react";

export function TrainingPage() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Module : Définitions",
      description: "Apprenez les différentes définitions afin de mieux comprendre ce qu'est une Violence Sexiste et Sexuelle.",
      duration: "10 min",
      level: "Débutant",
      category: "Sensibilisation",
      icon: Shield,
      url: "https://view.genially.com/6926bbee0e931772919eaa3a/interactive-content-definitions",
    },
    {
      id: 2,
      title: "Module : Chiffres Clés",
      description: "Apprenez combien de personnes sont réellement sujettes aux agressions sexuelles et/ou au harcèlement sexuel.",
      duration: "10 min",
      level: "Débutant",
      category: "Sensibilisation",
      icon: Heart,
      url: "https://view.genially.com/691d855839b87d7f045006ba/interactive-content-vss-les-chiffres-cles",
    },
    {
      id: 3,
      title: "Module : Conséquences",
      description: "Repérez les signaux déclencheurs que peuvent montrer les victimes de Violences Sexistes et Sexuelles.",
      duration: "10 min",
      level: "Débutant",
      category: "Sensibilisation",
      icon: Heart,
      url: "https://view.genially.com/695e1ca565924c773156df4a/interactive-content-module-les-consequences",
    },
    {
      id: 4,
      title: "Module : Numéros et Associations",
      description: "Apprenez et mémorisez tous les numéros d'urgence utiles pour les victimes d'agressions sexuelles.",
      duration: "7 à 8 min",
      level: "Débutant",
      category: "Sensibilisation",
      icon: Heart,
      url: "https://view.genially.com/691da08e17ff2ad06981c7d0/presentation-module-associations-et-numeros-durgence",
    },
    {
      id: 5,
      title: "Module : Que pouvons-nous faire ?",
      description:
        "Apprenez comment agir lorsque vous êtes témoin ou proche d'une victime.",
      duration: "10 min",
      level: "Avancé",
      category: "Éducation",
      icon: BookOpen,
      url: "https://view.genially.com/692965e86b465effc246871c/interactive-content-comment-lutter-au-quotidien-contre-les-vss",
    },

    {
      id: 6,
      title: "Module : Qu'est ce que les VSS à l'école et/ou au travail",
      description:"Module qui va vous permettre de reconnaître les différents comportements liés aux VSS à l'école ou au travail.",
      duration: "7 min",
      level: "Avancé",
      category: "Travail",
      type: "specialisee",
      icon: BookOpen,
      url: "https://view.genially.com/6942a528aaa0e433718e8144/presentation-quest-ce-que-les-vss-au-travail-ou-a-ecole",
    },
    {
      id: 7,
      title: "Module : Le Harcèlement au travail... En réalité ?",
      description:"Ce module permet de déconstruire les idées reçues et de comprendre ce qu’est réellement le harcèlement au travail à travers des situations concrètes.",
      duration: "7 min",
      level: "Avancé",
      category: "Travail",
      type: "specialisee",
      icon: BookOpen,
      url: "https://view.genially.com/6942b2ece4256494bf02e33b/presentation-le-harcelement-en-realite",
    },
    {
      id: 8,
      title: "Module: Comment réagir si on est victime ... ?",
      description:
        "Dans ce module vous trouverez tout ce que vous devez savoir si un jour vous êtes victime de VSS au travail.",
      duration: "10 min",
      level: "Intermédiaire",
      category: "Travail",
      type: "specialisee",
      icon: Shield,
      url: "https://view.genially.com/69394884b2956f2704ea0c8a/interactive-content-victime-de-violence-sexiste-et-sexuelle-au-travail", //A mettre dans le bon module
    },
    {
      id: 9,
      title: "Module: Comment réagir si on est témoin ... ?",
      description:"Ce module donne les clés pour reconnaître une situation problématique et agir en tant que témoin face aux VSS.",
      duration: "7 min",
      level: "Avancé",
      category: "Travail",
      type: "specialisee",
      icon: BookOpen,
      url: "https://view.genially.com/6968a54a451843f1d4d0de16/presentation-comment-reagir-si-on-est-temoin",
    },
    {
      id: 10,
      title: "Module : Et le cadre légal ?",
      description:"À travers un quiz interactif, ce module permet de mieux comprendre le cadre légal des VSS, de façon accessible et engageante.",
      duration: "5 min",
      level: "Avancé",
      category: "Travail",
      type: "specialisee",
      icon: BookOpen,
      url: "https://view.genially.com/695e37b809e52cf8e95e6fa8/interactive-content-et-le-cadre-legal",
    },
  ];

  const formationSpecialisee = courses.filter(
    (course) => course.type === "specialisee"
  );

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Débutant":
        return "bg-green-100 text-green-800";
      case "Intermédiaire":
        return "bg-yellow-100 text-yellow-800";
      case "Avancé":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Sensibilisation":
        return "bg-[#9B7FD7]/10 text-[#9B7FD7]";
      case "Éducation":
        return "bg-[#8B5E3C]/10 text-[#8B5E3C]";
      case "Travail":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1EA] py-8">
      <div className="max-w-6xl mx-auto px-4">

        {/* 🧠 TITRE + QUIZ */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#8B5E3C] mb-4">
            Formations <br></br>e-learning
          </h1>
          <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto mb-6">
            Développez vos connaissances sur les violences sexistes et sexuelles grâce à nos modules de formation interactifs.
          </p >
          <br></br>
          <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto mb-6">Mais tout d'abord testez vos connaissances avec ce quiz.</p>
          <div className="p-6 bg-[#F0E6FF] rounded-xl">
            <Button
              onClick={() => setIsQuizOpen(true)}
              className="bg-[#9B7FD7] hover:bg-[#8B6BC7] text-white px-6 py-3 text-lg rounded-xl shadow-lg cursor-pointer"
            >
              Commencer le quiz
            </Button>
          </div>
        </div>

        {/* 🔹 POPUP QUIZ */}
        {isQuizOpen && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full h-full max-w-[90vw] max-h-[90vh] relative">
              <button
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setIsQuizOpen(false)}
              >
                ❌
              </button>
              <iframe
                src="/quiz/index.html"
                className="w-full h-full rounded-xl"
                title="Quiz"
              />
            </div>
          </div>
        )}

        {/* 🌱 FORMATION INITIALE (inchangée) */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">
            Formation initiale
          </h2>

          <div className="space-y-6">
            {courses
              .filter((course) => !course.type)
              .map((course) => {
                const IconComponent = course.icon;

                return (
                  <Card
                    key={course.id}
                    className="bg-white/95 border-[#E5E1DA]"
                  >
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#9B7FD7]/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-[#9B7FD7]" />
                        </div>
                        <div>
                          <CardTitle className="text-[#8B5E3C] mb-2">
                            {course.title}
                          </CardTitle>
                          <CardDescription className="text-[#6B6B6B]">
                            {course.description}
                          </CardDescription>
                        </div>
                      </div>

                      <div className="flex gap-2 mt-4">
                        <Badge className={getCategoryColor(course.category)}>
                          {course.category}
                        </Badge>
                        <Badge className={getLevelColor(course.level)}>
                          {course.level}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center text-sm text-[#6B6B6B] mb-4">
                        <Clock className="mr-1 h-4 w-4" />
                        {course.duration}
                      </div>

                      <Button
                        onClick={() => window.open(course.url, "_blank")}
                        className="bg-[#9B7FD7] text-white w-full cursor-pointer"
                      >
                        <PlayCircle className="mr-2 h-4 w-4" />
                        Commencer
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </div>

        {/* 🎯 FORMATION SPÉCIALISÉE */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">
            Formation spécialisée
          </h2>

          <div className="space-y-6">
            {formationSpecialisee.map((course) => {
              const IconComponent = course.icon;

              return (
                <Card
                  key={course.id}
                  className="bg-white/95 border-[#E5E1DA]"
                >
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#9B7FD7]/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-[#9B7FD7]" />
                      </div>
                      <div>
                        <CardTitle className="text-[#8B5E3C] mb-2">
                          {course.title}
                        </CardTitle>
                        <CardDescription className="text-[#6B6B6B]">
                          {course.description}
                        </CardDescription>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Badge className={getCategoryColor(course.category)}>
                        {course.category}
                      </Badge>
                      <Badge className={getLevelColor(course.level)}>
                        {course.level}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center text-sm text-[#6B6B6B] mb-4">
                      <Clock className="mr-1 h-4 w-4" />
                      {course.duration}
                    </div>

                    <Button
                      onClick={() => window.open(course.url, "_blank")}
                      className="bg-[#9B7FD7] text-white w-full cursor-pointer"
                    >
                      <PlayCircle className="mr-2 h-4 w-4" />
                      Commencer
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <section className="mt-16 text-center bg-[#9B7FD7] bg-opacity-5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Sources et ressources.
          </h2>
          <p className="text-white mb-6 max-w-2xl mx-auto">
            <u>Pour la formation initiale</u>, nous nous appuyons sur : https://arretonslesviolences.gouv.fr/<br></br>
            <u>Pour la formation spécialisée (VSS au travail)</u>: nous nous basons sur une formation "Harcèlement sexuel : Le guide du RH".
          </p>
        </section>
      </div>
    </div>
  );
}
