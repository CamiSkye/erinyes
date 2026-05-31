import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { Download } from "lucide-react";
import "./ViolentometreQuiz.css";

import { useViolentometre } from "./hooks/useViolentometre";
import { zoneConfigs } from "./data/violentometre.data";
import type { Item, Zone } from "./types/violentometre.types";

// ===========================
// ViolentometreQuiz
// ===========================

export default function ViolentometreQuiz() {
  const { t } = useTranslation();

  // ✅ useMemo — construit une seule fois
  const itemsFromJson = useMemo(() => [
    ...(t("violentometre.items.green",  { returnObjects: true }) as string[]).map(text => ({ text, zone: "green"  as Zone })),
    ...(t("violentometre.items.yellow", { returnObjects: true }) as string[]).map(text => ({ text, zone: "yellow" as Zone })),
    ...(t("violentometre.items.red",    { returnObjects: true }) as string[]).map(text => ({ text, zone: "red"    as Zone })),
  ] as Item[], []);

  const {
    quizTopRef,
    shuffledItems,
    answers,
    allCorrect,
    wrongItems,
    checked,
    handleDrop,
    checkAnswers,
    downloadPdf,
    getItemClass,
  } = useViolentometre(itemsFromJson);

  return (
    <div ref={quizTopRef} className="space-y-6">

      {/* Zones de dépôt */}
      <div className="flex flex-col lg:flex-row gap-4">
        {zoneConfigs.map((zoneConfig) => {
          const zoneKey = zoneConfig.key;
          return (
            <div
              key={zoneKey}
              className={`flex-1 p-4 rounded ${zoneConfig.color} text-white min-h-[20rem]`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(zoneKey, e.dataTransfer.getData("text"))}
            >
              <h3 className="font-bold mb-2">{t(`violentometre.zones.${zoneKey}.label`)}</h3>
              <p className="text-sm mb-2">{t(`violentometre.zones.${zoneKey}.description`)}</p>
              <div className="space-y-1 text-xs">
                {Object.entries(answers)
                  .filter(([, z]) => z === zoneKey)
                  .map(([text]) => {
                    const item = itemsFromJson.find(i => i.text === text)!;
                    return (
                      <div key={text} className={getItemClass(item)}>
                        {text}
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Phrases à placer */}
      {!allCorrect && (
        <div>
          <h4 className="font-bold mb-2 text-[#8B5E3C]">{t("violentometre.phrasesLabel")}</h4>
          <div className="flex flex-wrap gap-2">
            {shuffledItems
              .filter(i => !answers[i.text])
              .map(i => (
                <div
                  key={i.text}
                  draggable
                  onDragStart={(e) => e.dataTransfer.setData("text", i.text)}
                  className={`quiz-item cursor-pointer ${wrongItems.includes(i.text) ? "quiz-item--return animate-shake" : ""}`}
                >
                  {i.text}
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Message succès */}
      {allCorrect && (
        <div className="text-center text-green-600 font-bold text-l animate-pop">
          {t("violentometre.success")}
        </div>
      )}

      {/* Bouton vérifier / télécharger */}
      <button
        onClick={allCorrect ? downloadPdf : checkAnswers}
        className="violentometre-download-btn animate-pop flex items-center justify-center gap-2"
      >
        {allCorrect ? (
          <>
            <Download className="h-4 w-4" />
            {t("violentometre.downloadBtn")}
          </>
        ) : (
          t("violentometre.verify")
        )}
      </button>

    </div>
  );
}