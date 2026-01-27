import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle,} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { PlayCircle, Clock, BookOpen, Shield } from "lucide-react";

export function TrainingPage() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Reconnaître les violences sexistes et sexuelles",
      description: "Apprenez à identifier les différentes formes de VSS et leurs impacts",
      duration: "48 min",
      level: "Débutant",
      modules: [
        {
          id: 1,
          title: "Module : Définitions",
          duration: "10 min",
          description: "Apprenez les différentes définitions afin de mieux comprendre ce qu'est une Violence Sexiste et Sexuelle."
        },
        {
          id: 2,
          title: "Module : Chiffres Clés",
          duration: "10 min",
          description: "Apprenez combien de personnes sont réellement sujettes aux agressions sexuelles et/ou au harcèlement sexuel."
        },
        {
          id: 3,
          title: "Module : Conséquences",
          duration: "10 min",
          description: "Repérez les signaux déclencheurs que peuvent montrer les victimes de Violences Sexistes et Sexuelles."
        },
        {
          id: 4,
          title: "Module : Numéros et Associations",
          duration: "7 à 8 min",
          description: "Apprenez et mémorisez tous les numéros d'urgence utiles pour les victimes d'agressions sexuelles."
        },
        {
          id: 5,
          title: "Module : Que pouvons-nous faire ?",
          duration: "10 min",
          description: "Apprenez comment agir lorsque vous êtes témoin ou proche d'une victime."
        }
      ],
      category: "Sensibilisation",
      icon: Shield,
      url: "https://view.genially.com/6926bbee0e931772919eaa3a/interactive-content-definitions",
    },
    
    {
      id: 2,
      title: "Prévention et sensibilisation en milieu scolaire et monde professionnel",
      description: "Outils et méthodes pour éduquer à la prévention des VSS",
      duration: "36 min",
      level: "Avancé",
      modules: [
        {
          id: 1,
          title: "Module : Qu'est ce que les VSS à l'école et/ou au travail",
          duration: "7 min",
          description: "Module qui va vous permettre de reconnaître les différents comportements liés aux VSS à l'école ou au travail."
        },
        {
          id: 2,
          title: "Module : Le Harcèlement au travail... En réalité ?",
          duration: "7 min",
          description: "Ce module permet de déconstruire les idées reçues et de comprendre ce qu’est réellement le harcèlement au travail à travers des situations concrètes."
        },
        {
          id: 3,
          title: "Module: Comment réagir si on est victime ... ?",
          duration: "10 min",
          description: "Dans ce module vous trouverez tout ce que vous devez savoir si un jour vous êtes victime de VSS au travail."
        },
        {
          id: 4,
          title: "Module: Comment réagir si on est témoin ... ?",
          duration: "7 min",
          description: "Ce module donne les clés pour reconnaître une situation problématique et agir en tant que témoin face aux VSS."
        },
        {
          id: 5,
          title: "Module : Et le cadre légal ?",
          duration: "5 min",
          description: "À travers un quiz interactif, ce module permet de mieux comprendre le cadre légal des VSS, de façon accessible et engageante."
        }
      ],
      category: "Éducation",
      icon: BookOpen,
      url: "https://view.genially.com/6942a528aaa0e433718e8144/presentation-quest-ce-que-les-vss-au-travail-ou-a-ecole",
    },
  ];


  const getLevelColor = (level: string) => {
    switch (level) {
      case "Débutant":
        return "bg-green-100 text-green-800";
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

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">
            Formations disponibles
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {courses.map((course) => {
              const IconComponent = course.icon;
              return (
                <AccordionItem 
                  key={course.id} 
                  value={`course-${course.id}`}
                  className="bg-white/95 border border-[#E5E1DA] rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="cursor-pointer hover:no-underline px-6 py-4 hover:bg-[#F5F1EA]/50">
                    <div className="flex items-start justify-between w-full text-left pr-4">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-12 h-12 bg-[#9B7FD7] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-[#8B5E3C] mb-1">{course.title}</h3>
                          <p className="text-sm text-[#6B6B6B] mb-3">
                            {course.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge className={getCategoryColor(course.category)}>
                              {course.category}
                            </Badge>
                            <Badge className={getLevelColor(course.level)}>
                              {course.level}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-[#6B6B6B]">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              {course.duration}
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="mr-1 h-4 w-4" />
                              {course.modules.length} modules
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-6 pb-6">
                    <div className="pt-4 border-t border-[#E5E1DA]">
                      <h4 className="font-semibold text-[#8B5E3C] mb-4">Modules de la formation :</h4>
                      <div className="space-y-3 mb-6">
                        {course.modules.map((module) => (
                          <div 
                            key={module.id}
                            className="flex items-start gap-3 p-3 bg-[#F5F1EA] rounded-lg hover:bg-[#E5E1DA]/50 transition-colors"
                          >
                            <div className="w-8 h-8 bg-[#9B7FD7] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                              {module.id}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <h5 className="font-medium text-[#8B5E3C]">{module.title}</h5>
                                <span className="text-sm text-[#6B6B6B] flex items-center ml-2">
                                  <Clock className="mr-1 h-3 w-3" />
                                  {module.duration}
                                </span>
                              </div>
                              <p className="text-sm text-[#6B6B6B]">{module.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                                           
                      <div className="flex gap-3">
                        <Button onClick={() => window.open(course.url, "_blank")} className="bg-[#9B7FD7] hover:bg-[#8B6BC7] text-white flex-1 cursor-pointer" >
                          <PlayCircle className="mr-2 h-4 w-4" />
                          Commencer la formation
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
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
