import { useState, useEffect, useRef } from "react";
import type { Zone, Item } from "../types/violentometre.types";
import violentometrePdf from "../../../assets/Violentometre.webp";

// ===========================
// HOOK — useViolentometre
// ===========================

export function useViolentometre(items: Item[]) {
  const [shuffledItems, setShuffledItems] = useState<Item[]>([]);
  const [answers,       setAnswers]       = useState<Record<string, Zone>>({});
  const [checked,       setChecked]       = useState(false);
  const [wrongItems,    setWrongItems]    = useState<string[]>([]);
  const [animateItems,  setAnimateItems]  = useState<string[]>([]);
  const [allCorrect,    setAllCorrect]    = useState(false);

  const quizTopRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  setShuffledItems([...items].sort(() => Math.random() - 0.5));
}, [items.length]);

  const handleDrop = (zone: Zone, text: string) => {
    setAnswers(prev => ({ ...prev, [text]: zone }));
    setChecked(false);
  };

  const checkAnswers = () => {
    const newAnswers = { ...answers };
    const wrong: string[]   = [];
    const animate: string[] = [];

    Object.entries(answers).forEach(([text, zone]) => {
      const item = items.find(i => i.text === text);
      if (item && item.zone !== zone) {
        delete newAnswers[text];
        wrong.push(text);
        animate.push(text);
      } else if (item && item.zone === zone) {
        animate.push(text);
      }
    });

    setAnswers(newAnswers);
    setWrongItems(wrong);
    setAnimateItems(animate);
    setChecked(true);

    quizTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setAllCorrect(wrong.length === 0 && Object.keys(newAnswers).length === items.length);
    setTimeout(() => setAnimateItems([]), 500);
  };

  const downloadPdf = () => {
    const link    = document.createElement("a");
    link.href     = violentometrePdf;
    link.download = "Violentometre.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getItemClass = (item: Item): string => {
    let cls = "quiz-item";
    if (!answers[item.text]) cls += " quiz-item--inactive";
    if (checked && answers[item.text]) {
      cls += answers[item.text] === item.zone ? " quiz-item--correct" : " quiz-item--wrong";
    }
    if (animateItems.includes(item.text)) {
      cls += answers[item.text] === item.zone ? " animate-pop" : " animate-shake";
    }
    return cls;
  };

  return {
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
  };
}