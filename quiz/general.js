// ===========================
// QUIZ GÉNÉRAL — general.js
// Questions + logique
// ===========================

const questions = [
  {
    question: "Quelle proportion de femmes en France a été victime de harcèlement sexuel au travail au cours de sa carrière ?",
    options: ["1 femme sur 10", "1 femme sur 5", "1 femme sur 3", "1 femme sur 2"],
    correct: 2,
    explanation: "Selon l'enquête IFOP de 2018, 1 femme sur 3 a été victime de harcèlement sexuel au travail. Ce chiffre alarmant montre l'ampleur du problème dans le milieu professionnel."
  },
  {
    question: "Le harcèlement sexuel peut-il être constitué par des remarques répétées à connotation sexuelle ?",
    options: ["Non, il faut un contact physique", "Oui, les propos suffisent", "Seulement si c'est écrit", "Uniquement en privé"],
    correct: 1,
    explanation: "Le harcèlement sexuel est constitué dès lors qu'il y a des propos ou comportements à connotation sexuelle répétés qui portent atteinte à la dignité ou créent un environnement intimidant, hostile ou offensant."
  },
  {
    question: "Quelle est la proportion d'hommes victimes de violences sexuelles au cours de leur vie ?",
    options: ["1 sur 50", "1 sur 25", "1 sur 10", "1 sur 6"],
    correct: 3,
    explanation: "1 homme sur 6 a été victime de violences sexuelles au cours de sa vie. Les hommes sont aussi concernés mais en parlent encore moins en raison des stéréotypes de masculinité."
  },
  {
    question: "Dans quel pourcentage des cas l'agresseur est-il connu de la victime ?",
    options: ["30%", "50%", "75%", "91%"],
    correct: 3,
    explanation: "Dans 91% des cas, l'agresseur est connu de la victime (conjoint, ex-conjoint, famille, ami, collègue). L'idée de l'agresseur inconnu dans une ruelle sombre est un mythe."
  },
  {
    question: "Qu'est-ce que le 'sexisme ordinaire' au travail ?",
    options: ["Des blagues occasionnelles sans importance", "Des attitudes et remarques discriminantes banalisées au quotidien", "Un terme inventé par les médias", "Uniquement les inégalités salariales"],
    correct: 1,
    explanation: "Le sexisme ordinaire désigne l'ensemble des attitudes, propos et comportements discriminants basés sur le sexe, banalisés et considérés comme 'normaux' dans le quotidien professionnel."
  },
  {
    question: "Quel pourcentage de femmes a subi du harcèlement dans les transports en commun ?",
    options: ["45%", "60%", "75%", "87%"],
    correct: 3,
    explanation: "87% des femmes utilisatrices de transports en commun ont subi au moins une forme de harcèlement sexuel. Les transports sont un lieu particulièrement à risque."
  },
  {
    question: "Un employeur peut-il être tenu responsable du harcèlement sexuel dans son entreprise ?",
    options: ["Non, c'est une affaire privée", "Oui, il a une obligation de prévention et de protection", "Seulement s'il était au courant", "Uniquement dans les grandes entreprises"],
    correct: 1,
    explanation: "L'employeur a une obligation légale de prévenir et de protéger ses salariés contre le harcèlement sexuel, même s'il n'était pas au courant."
  },
  {
    question: "Quel est le délai de prescription pour porter plainte pour viol en France ?",
    options: ["3 ans", "6 ans", "10 ans", "20 ans"],
    correct: 3,
    explanation: "Le délai de prescription pour un viol est de 20 ans. Ce délai a été allongé pour tenir compte du temps nécessaire aux victimes pour parler."
  },
  {
    question: "Qu'est-ce que le 'victim blaming' ?",
    options: ["Soutenir les victimes", "Rendre la victime responsable de l'agression", "Un terme juridique", "Une méthode d'enquête"],
    correct: 1,
    explanation: "Le 'victim blaming' consiste à rendre la victime responsable de l'agression subie. C'est une attitude toxique qui aggrave le traumatisme et décourage les victimes de parler."
  },
  {
    question: "Quel pourcentage de victimes de harcèlement sexuel au travail porte plainte ?",
    options: ["5%", "15%", "30%", "50%"],
    correct: 0,
    explanation: "Seulement 5% des victimes portent plainte, principalement par peur des représailles professionnelles, de ne pas être crues, ou de perdre leur emploi."
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function startQuiz() {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('quiz-section').style.display = 'block';
  loadQuestion();
}

function loadQuestion() {
  answered = false;
  const q = questions[currentQuestion];

  document.getElementById('question-number').textContent =
    `Question ${currentQuestion + 1} sur ${questions.length}`;
  document.getElementById('question-text').textContent = q.question;

  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';

  q.options.forEach((option, index) => {
    const div = document.createElement('div');
    div.className = 'option';
    div.textContent = option;
    div.addEventListener('click', () => selectOption(index));
    optionsContainer.appendChild(div);
  });

  document.getElementById('explanation').style.display = 'none';
  document.getElementById('next-btn').style.display = 'none';
  document.getElementById('question-container').style.display = 'block';

  updateProgress();
}

function selectOption(selectedIndex) {
  if (answered) return;
  answered = true;

  const q = questions[currentQuestion];
  const options = document.querySelectorAll('.option');

  options.forEach((option, index) => {
    if (index === q.correct)          option.classList.add('correct');
    else if (index === selectedIndex) option.classList.add('incorrect');
    option.style.cursor = 'default';
  });

  if (selectedIndex === q.correct) score++;

  document.getElementById('explanation-text').textContent = q.explanation;
  document.getElementById('explanation').style.display = 'block';
  document.getElementById('next-btn').style.display = 'block';
}

function updateProgress() {
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  document.getElementById('progress').style.width = progress + '%';
}

function showResults() {
  document.getElementById('quiz-section').style.display = 'none';
  document.getElementById('results').style.display = 'block';
  const percentage = Math.round((score / questions.length) * 100);
  document.getElementById('score').textContent = `${score}/${questions.length} (${percentage}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('start-btn').addEventListener('click', startQuiz);

  document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  });
});