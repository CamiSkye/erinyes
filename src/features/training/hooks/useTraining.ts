import { useState } from "react";

// ===========================
// HOOK — useTraining
// ===========================

export function useTraining() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const openQuiz  = () => setIsQuizOpen(true);
  const closeQuiz = () => setIsQuizOpen(false);

  return { isQuizOpen, openQuiz, closeQuiz };
}