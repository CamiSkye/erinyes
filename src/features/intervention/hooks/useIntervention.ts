// ===========================
// HOOK — useIntervention
// ===========================

export function useIntervention() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { scrollToSection };
}