import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../shared/ui/accordion";
import { Button } from "../../shared/ui/button";
import { Badge } from "../../shared/ui/badge";
import { PlayCircle, Clock, BookOpen } from "lucide-react";

import { useTraining } from "./hooks/useTraining";
import { courses, getLevelColor, getCategoryColor } from "./data/training.data";

export function TrainingPage() {
  const { isQuizOpen, openQuiz, closeQuiz } = useTraining();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#F5F1EA] py-8">

      <Helmet>
        <title>Formations VSS — Se former contre les violences — Erinyes</title>
        <meta name="description" content="Formations gratuites pour comprendre et prévenir les violences sexistes et sexuelles. Quiz, modules interactifs et ressources pédagogiques." />
        <meta property="og:title" content="Formations VSS — Se former contre les violences — Erinyes" />
        <meta property="og:description" content="Formations gratuites pour comprendre et prévenir les violences sexistes et sexuelles." />
        <meta property="og:url" content="https://erinyes.fr/formations" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#8B5E3C] mb-4">{t("training.title")}</h1>
          <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto mb-6">{t("training.subtitle")}</p>
          <br />
          <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto mb-6">{t("training.quizCta")}</p>
          <div className="p-6 bg-[#F0E6FF] rounded-xl">
            <Button onClick={openQuiz} className="bg-[#9B7FD7] hover:bg-[#8B6BC7] text-white px-6 py-3 text-lg rounded-xl shadow-lg cursor-pointer">
              {t("training.startQuiz")}
            </Button>
          </div>
        </div>

        {isQuizOpen && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full h-full max-w-[90vw] max-h-[90vh] relative">
              <button className="absolute top-4 right-4 cursor-pointer" onClick={closeQuiz}>❌</button>
              <iframe src="/quiz/index.html" className="w-full h-full rounded-xl" title="Quiz" />
            </div>
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">{t("training.available")}</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {courses.map((course, courseIndex) => {
              const IconComponent = course.icon;
              const courseKey = `course${courseIndex + 1}`;
              const courseModules = t(`training.courses.${courseKey}.modules`, { returnObjects: true }) as { title: string; description: string }[];
              return (
                <AccordionItem key={course.id} value={`course-${course.id}`} className="bg-white/95 border border-[#E5E1DA] rounded-lg overflow-hidden">
                  <AccordionTrigger className="cursor-pointer hover:no-underline px-6 py-4 hover:bg-[#F5F1EA]/50">
                    <div className="flex items-start justify-between w-full text-left pr-4">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-12 h-12 bg-[#9B7FD7] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-[#8B5E3C] mb-1">{t(`training.courses.${courseKey}.title`)}</h3>
                          <p className="text-sm text-[#6B6B6B] mb-3">{t(`training.courses.${courseKey}.description`)}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge className={getCategoryColor(course.category)}>{t(`training.categories.${course.category}`)}</Badge>
                            <Badge className={getLevelColor(course.level)}>{t(`training.levels.${course.level}`)}</Badge>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-3 text-sm text-[#6B6B6B]">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center">
                                <Clock className="mr-1 h-4 w-4" />
                                {course.duration}
                              </div>
                              <div className="flex items-center">
                                <BookOpen className="mr-1 h-4 w-4" />
                                {course.modules.length} {t("training.modules")}
                              </div>
                            </div>
                            <div className="text-[#9B7FD7] italic sm:ml-auto">{t("training.languageNotice")}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="pt-4 border-t border-[#E5E1DA]">
                      <h4 className="font-semibold text-[#8B5E3C] mb-4">{t("training.modulesLabel")}</h4>
                      <div className="space-y-3 mb-6">
                        {course.modules.map((module, moduleIndex) => (
                          <div key={module.id} className="flex items-start gap-3 p-3 bg-[#F5F1EA] rounded-lg hover:bg-[#E5E1DA]/50 transition-colors">
                            <div className="w-8 h-8 bg-[#9B7FD7] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold">{module.id}</div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <h5 className="font-medium text-[#8B5E3C]">{courseModules[moduleIndex]?.title}</h5>
                                <span className="text-sm text-[#6B6B6B] flex items-center ml-2">
                                  <Clock className="mr-1 h-3 w-3" />{module.duration}
                                </span>
                              </div>
                              <p className="text-sm text-[#6B6B6B]">{courseModules[moduleIndex]?.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button onClick={() => window.open(course.url, "_blank")} className="bg-[#9B7FD7] hover:bg-[#8B6BC7] text-white flex-1 cursor-pointer w-full">
                        <PlayCircle className="mr-2 h-4 w-4" />{t("training.startFormation")}
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        <section className="mt-16 text-center bg-[#9B7FD7] bg-opacity-5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">{t("training.sources.title")}</h2>
          <p className="text-white mb-6 max-w-2xl mx-auto">
            {t("training.sources.initial")}{" "}
            <a href="https://arretonslesviolences.gouv.fr/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-75 transition-opacity">
              https://arretonslesviolences.gouv.fr/
            </a>
            <br />
            {t("training.sources.advanced")}
          </p>
        </section>
      </div>
    </div>
  );
}