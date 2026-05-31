// ===========================
// QUIZ VRAI/FAUX — vraioufaux.js
// Questions + logique
// ===========================

const questions = [
  {
    question: "1 femme sur 3 dans le monde a subi des violences physiques ou sexuelles au cours de sa vie.",
    answer: true,
    explanation: "Selon l'OMS, environ 1 femme sur 3 (35%) dans le monde a subi des violences physiques et/ou sexuelles au cours de sa vie.",
    source: "Organisation Mondiale de la Santé (OMS), 2021"
  },
  {
    question: "Les hommes ne peuvent pas être victimes de violences sexuelles.",
    answer: false,
    explanation: "Les hommes peuvent également être victimes. Environ 1 homme sur 6 a subi des violences sexuelles avant l'âge de 18 ans.",
    source: "Centers for Disease Control and Prevention (CDC)"
  },
  {
    question: "La majorité des agressions sexuelles sont commises par des inconnus.",
    answer: false,
    explanation: "Dans environ 80% des cas, l'agresseur est connu de la victime. Seulement 20% des agressions sont commises par des inconnus.",
    source: "Ministère de l'Intérieur français, 2020"
  },
  {
    question: "Une victime qui ne se débat pas consent à l'acte sexuel.",
    answer: false,
    explanation: "L'absence de résistance physique ne signifie pas consentement. La sidération (paralysie psychique) est une réaction fréquente face à une agression.",
    source: "Mémoire Traumatique et Victimologie, Dr Muriel Salmona"
  },
  {
    question: "En France, seulement 10% des victimes de viol portent plainte.",
    answer: true,
    explanation: "Seulement 10 à 12% des victimes de viol déposent plainte. Les raisons incluent la honte, la peur et la crainte de ne pas être cru(e).",
    source: "Enquête Virage (INED), 2015"
  },
  {
    question: "Les violences sexuelles n'ont pas de conséquences graves sur la santé mentale.",
    answer: false,
    explanation: "Les violences sexuelles ont des conséquences graves : stress post-traumatique, dépression, anxiété. 59% des victimes développent un SSPT.",
    source: "OMS et études psychiatriques"
  },
  {
    question: "La tenue vestimentaire justifie l'agression.",
    answer: false,
    explanation: "La tenue n'a aucun lien avec les agressions sexuelles. Ce mythe dangereux fait porter la responsabilité sur la victime. L'agresseur est le seul responsable.",
    source: "Études criminologiques internationales"
  },
  {
    question: "Les violences conjugales touchent tous les milieux sociaux.",
    answer: true,
    explanation: "Les violences conjugales touchent tous les milieux sociaux, culturels, économiques et éducatifs. Aucune catégorie n'est épargnée.",
    source: "Ministère de l'Égalité femmes-hommes, France"
  },
  {
    question: "Un homme ne peut pas être violé par une femme.",
    answer: false,
    explanation: "Les hommes peuvent être victimes de viols commis par des femmes. Bien que moins fréquent, ce type d'agression existe et est tout aussi traumatisant.",
    source: "Code pénal français, Article 222-23"
  },
  {
    question: "En France, une femme meurt tous les 3 jours sous les coups de son conjoint ou ex-conjoint.",
    answer: true,
    explanation: "En 2022, 122 femmes sont décédées victimes de leur partenaire ou ex-partenaire, soit environ 1 femme tous les 3 jours.",
    source: "Ministère de l'Intérieur, Étude nationale 2022"
  },
  {
    question: "Les enfants ne peuvent pas être victimes de violences sexuelles dans leur propre famille.",
    answer: false,
    explanation: "En France, 1 personne sur 10 déclare avoir subi de l'inceste. 80% des violences sexuelles sur mineurs sont commises dans le cercle familial.",
    source: "CIIVISE (Commission Inceste), 2021"
  },
  {
    question: "Le viol conjugal est reconnu par la loi française.",
    answer: true,
    explanation: "Depuis 1992, le viol conjugal est reconnu par la loi. Le mariage ne crée aucune obligation d'avoir des relations sexuelles.",
    source: "Code pénal français, Jurisprudence 1992"
  },
  {
    question: "Les victimes de violences sexuelles inventent souvent leur agression.",
    answer: false,
    explanation: "Les fausses accusations représentent entre 2 et 8% des plaintes, similaire aux autres crimes. Ce mythe empêche les victimes de parler.",
    source: "Études criminologiques, FBI et Police Nationale"
  },
  {
    question: "L'alcool ou la drogue peuvent être utilisés pour faciliter une agression sexuelle.",
    answer: true,
    explanation: "La soumission chimique est utilisée dans environ 20% des agressions sexuelles. Les substances les plus utilisées sont l'alcool, le GHB et les benzodiazépines.",
    source: "Agence Nationale de Sécurité du Médicament (ANSM)"
  },
  {
    question: "Les hommes victimes de violences sexuelles sont moins traumatisés que les femmes.",
    answer: false,
    explanation: "Le traumatisme est tout aussi grave quel que soit le genre. Les hommes font face à des difficultés supplémentaires liées aux stéréotypes de masculinité.",
    source: "Études psychologiques et psychiatriques"
  },
  {
    question: "Le harcèlement sexuel au travail est puni par la loi en France.",
    answer: true,
    explanation: "Le harcèlement sexuel au travail est un délit puni de 2 ans d'emprisonnement et 30 000€ d'amende.",
    source: "Code pénal, Article 222-33 et Code du travail"
  },
  {
    question: "Une personne en état d'ébriété peut donner son consentement à un acte sexuel.",
    answer: false,
    explanation: "Une personne en état d'ébriété avancée ne peut pas donner un consentement valide. Cela constitue une agression sexuelle.",
    source: "Jurisprudence française et Code pénal"
  },
  {
    question: "Les violences sexuelles peuvent causer des troubles physiques durables.",
    answer: true,
    explanation: "Les violences sexuelles peuvent causer des douleurs chroniques, troubles gynécologiques, IST, et d'autres problèmes de santé à long terme.",
    source: "OMS, Études médicales"
  },
  {
    question: "Il existe un délai de prescription pour porter plainte pour viol en France.",
    answer: true,
    explanation: "Pour les majeurs : 20 ans. Pour les mineurs : 30 ans à partir de la majorité. Ces délais ont été allongés en 2018.",
    source: "Code de procédure pénale français, Loi Schiappa 2018"
  },
  {
    question: "Les hommes qui subissent des violences sexuelles deviennent automatiquement des agresseurs.",
    answer: false,
    explanation: "C'est un mythe dangereux. La grande majorité des victimes, quel que soit leur genre, ne deviennent jamais des agresseurs.",
    source: "Études criminologiques et psychologiques"
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function displayQuestion() {
  answered = false;
  const container = document.getElementById('quiz-container');
  const q = questions[currentQuestion];

  container.innerHTML = `
    <div class="question-container" style="display:block;">
      <div class="question-header">
        <div class="question-number">Question ${currentQuestion + 1} sur ${questions.length}</div>
        <div class="question-text">${q.question}</div>
      </div>
      <div class="answer-buttons">
        <button class="answer-btn" onclick="checkAnswer(true)">VRAI</button>
        <button class="answer-btn" onclick="checkAnswer(false)">FAUX</button>
      </div>
      <div class="explanation" id="explanation">
        <div class="explanation-title">💡 Explication :</div>
        <div class="explanation-text">${q.explanation}</div>
        <div class="source">Source : ${q.source}</div>
      </div>
    </div>
  `;

  document.getElementById('next-btn').classList.remove('show');
  updateProgress();
}

function checkAnswer(userAnswer) {
  if (answered) return;
  answered = true;

  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll('.answer-btn');

  buttons.forEach(btn => {
    btn.disabled = true;
    const btnAnswer = btn.textContent === 'VRAI';
    if (btnAnswer === q.answer)                              btn.classList.add('correct');
    else if (btnAnswer === userAnswer && userAnswer !== q.answer) btn.classList.add('incorrect');
  });

  if (userAnswer === q.answer) score++;

  document.getElementById('explanation').classList.add('show');
  document.getElementById('next-btn').classList.add('show');
}

function updateProgress() {
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  document.getElementById('progress').style.width = progress + '%';
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('next-btn').style.display = 'none';
  document.querySelector('.progress-bar').style.display = 'none';

  const percentage = (score / questions.length) * 100;
  document.getElementById('score-number').textContent = score;

  let message = '';
  if (percentage >= 90)      message = '🌟 Excellent ! Vous avez une très bonne connaissance des réalités des violences sexuelles.';
  else if (percentage >= 70) message = '👍 Très bien ! Continuez à vous informer pour mieux comprendre et aider les victimes.';
  else if (percentage >= 50) message = '📚 Bien ! N\'hésitez pas à vous informer davantage sur ce sujet important.';
  else                       message = '💡 Ce quiz vous a permis d\'apprendre beaucoup de choses sur un sujet complexe.';

  document.getElementById('result-message').textContent = message;
  document.getElementById('results').classList.add('show');
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  answered = false;

  document.getElementById('quiz-container').style.display = 'block';
  document.getElementById('results').classList.remove('show');
  document.querySelector('.progress-bar').style.display = 'block';

  displayQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
  displayQuestion();
  document.getElementById('next-btn').addEventListener('click', nextQuestion);
  document.getElementById('restart-btn').addEventListener('click', restartQuiz);
});