import { useState, useEffect, useRef } from "react";
import { Download } from "lucide-react";
import "./ViolentometreQuiz.css";
import violentometrePdf from "../assets/Violentometre.pdf";

type Item = { text: string; zone: "green" | "yellow" | "red" };

const items: Item[] = [
  { text: "Respecte tes décisions et tes goûts", zone: "green" },
  { text: "Accepte tes ami.e.s et ta famille", zone: "green" },
  { text: "A confiance en toi", zone: "green" },
  { text: "Est content quand tu te sens épanouie", zone: "green" },
  { text: "S'assure de ton accord pour ce que vous faites ensemble", zone: "green" },

  { text: "Te fait du chantage si tu refuses de faire quelque chose", zone: "yellow" },
  { text: "Rabaisse tes opinions et tes projets", zone: "yellow" },
  { text: "Se moque de toi en public", zone: "yellow" },
  { text: "Est jaloux et possessif en permanence", zone: "yellow" },
  { text: "Te manipule", zone: "yellow" },
  { text: "Contrôle tes sorties, habits, maquillage", zone: "yellow" },
  { text: "Fouille tes textos, mails, applis", zone: "yellow" },
  { text: "Insiste pour que tu lui envoies des photos intimes", zone: "yellow" },
  { text: "T'isole de ta famille et de tes proches", zone: "yellow" },
  { text: "T'oblige à regarder des films pornos", zone: "yellow" },

  { text: "T'humilie et te traite de folle quand tu lui fais des reproches", zone: "red" },
  { text: "\"Pète les plombs\" lorsque quelque chose lui déplaît", zone: "red" },
  { text: "Menace de se suicider à cause de toi", zone: "red" },
  { text: "Menace de diffuser des photos intimes de toi", zone: "red" },
  { text: "Te pousse, te tire, te gifle, te secoue, te frappe", zone: "red" },
  { text: "Te touche les parties intimes sans ton consentement", zone: "red" },
  { text: "T'oblige à avoir des relations sexuelles", zone: "red" },
  { text: "Te menace avec une arme", zone: "red" },
];

export default function ViolentometreQuiz() {
  const [shuffledItems, setShuffledItems] = useState<Item[]>([]);
  const [answers, setAnswers] = useState<Record<string, "green" | "yellow" | "red">>({});
  const [checked, setChecked] = useState(false);
  const [wrongItems, setWrongItems] = useState<string[]>([]);
  const [animateItems, setAnimateItems] = useState<string[]>([]);
  const [allCorrect, setAllCorrect] = useState(false);

  const quizTopRef = useRef<HTMLDivElement | null>(null);

  const zones = [
    { key: "green", label: "PROFITE", color: "bg-green-500" },
    { key: "yellow", label: "VIGILANCE, DIS STOP !", color: "bg-yellow-500" },
    { key: "red", label: "PROTÈGE-TOI, DEMANDE DE L'AIDE", color: "bg-red-600" },
  ] as const;

  useEffect(() => {
    setShuffledItems([...items].sort(() => Math.random() - 0.5));
  }, []);

  const handleDrop = (zone: "green" | "yellow" | "red", text: string) => {
    setAnswers((prev) => ({ ...prev, [text]: zone }));
    setChecked(false);
  };

  const checkAnswers = () => {
    const newAnswers = { ...answers };
    const wrong: string[] = [];
    const animate: string[] = [];

    Object.entries(answers).forEach(([text, zone]) => {
      const item = items.find((i) => i.text === text);
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

    if (wrong.length === 0 && Object.keys(newAnswers).length === items.length) {
      setAllCorrect(true);
    } else {
      setAllCorrect(false);
    }

    setTimeout(() => setAnimateItems([]), 500);
  };

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = violentometrePdf;
    link.download = "Violentometre.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getItemClass = (item: Item) => {
    let cls = "quiz-item";

    if (!answers[item.text]) cls += " quiz-item--inactive";

    if (checked && answers[item.text]) {
      cls += answers[item.text] === item.zone
        ? " quiz-item--correct"
        : " quiz-item--wrong";
    }

    if (animateItems.includes(item.text)) {
      cls += answers[item.text] === item.zone
        ? " animate-pop"
        : " animate-shake";
    }

    return cls;
  };

  return (
    <div ref={quizTopRef} className="space-y-6">
      <div className="flex flex-col lg:flex-row gap-4">
        {zones.map((zone) => (
          <div
            key={zone.key}
            className={`flex-1 p-4 rounded ${zone.color} text-white min-h-[20rem]`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(zone.key, e.dataTransfer.getData("text"))}
          >
            <h3 className="font-bold mb-2">{zone.label}</h3>
            <p className="text-sm mb-2">
              {zone.key === "green"
                ? "Ta relation est saine quand il..."
                : zone.key === "yellow"
                ? "Il y a violence quand il..."
                : "Tu es en danger quand il..."}
            </p>

            <div className="space-y-1 text-xs">
              {Object.entries(answers)
                .filter(([, z]) => z === zone.key)
                .map(([text]) => {
                  const item = items.find((i) => i.text === text)!;
                  return (
                    <div key={text} className={getItemClass(item)}>
                      {text}
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>

      {!allCorrect && (
        <div>
          <h4 className="font-bold mb-2 text-[#8B5E3C]">Phrases à placer :</h4>
          <div className="flex flex-wrap gap-2">
            {shuffledItems
              .filter((i) => !answers[i.text])
              .map((i) => (
                <div
                  key={i.text}
                  draggable
                  onDragStart={(e) => e.dataTransfer.setData("text", i.text)}
                  className={`quiz-item cursor-pointer ${
                    wrongItems.includes(i.text)
                      ? " quiz-item--return animate-shake"
                      : ""
                  }`}
                >
                  {i.text}
                </div>
              ))}
          </div>
        </div>
      )}

      {allCorrect && (
        <div className="text-center text-green-600 font-bold text-l animate-pop">
          Félicitations ! Tu as réussi à placer tous les items au bon endroit ! Tu peux télécharger le Violentomètre en PDF si tu le souhaites.
        </div>
      )}

      <button
        onClick={() => {
          if (allCorrect) {
            downloadPdf();
          } else {
            checkAnswers();
          }
        }}
        className="violentometre-download-btn animate-pop flex items-center justify-center gap-2"
      >
        {allCorrect ? (
          <>
            <Download className="h-4 w-4" />
            Télécharger le Violentomètre
          </>
        ) : (
          "Vérifier"
        )}
      </button>
    </div>
  );
}
