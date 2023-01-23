// JSON Array //
let questions = [
  {
    question: "Welchen Warnhinweis sieht man häufig im Alltag?",
    answer_1: "Böll findet nicht statt!",
    answer_2: "Grass enfällt!",
    answer_3: "Brecht abgesagt!",
    answer_4: "Frisch gestrichen!",
    right_answer: 4,
  },
  {
    question: "Wobei handelt es sich um ein beliebtes Getränk?",
    answer_1: "call me strawberry",
    answer_2: "heiße Zitrone",
    answer_3: "nennt mich Kirsche",
    answer_4: "bin die Banane",
    right_answer: 2,
  },
  {
    question: "Wofür gibt es einen Oscar?",
    answer_1: "Toller Chirug",
    answer_2: "Exquisites Skalpell",
    answer_3: "Bester Schnitt",
    answer_4: "Fabelhafte OP",
    right_answer: 3,
  },
  {
    question:
      "Scotty, der Ingenieur des Raumschiffs Enterprise, war bei den ,,Ausflügen'' meist nicht dabei, weil er ...?",
    answer_1: "angestellte",
    answer_2: "beamte",
    answer_3: "selbstständiger",
    answer_4: "vorgesetzte",
    right_answer: 2,
  },
  {
    question: "Die Dinosaurier lebten ...?",
    answer_1: "in der Kreide",
    answer_2: "knietief im Dispo",
    answer_3: "auf Pump",
    answer_4: "mit Schulden",
    right_answer: 3,
  },
  {
    question:
      "Wenn man eins von zwei Löschern im Reifen flickt, dann wird es ...?",
    answer_1: "bildhauer",
    answer_2: "maler",
    answer_3: "dichter",
    answer_4: "sänger",
    right_answer: 1,
  },
  {
    question: "Was dient nicht zur Verhütung?",
    answer_1: "Kondom",
    answer_2: "Coitus interruptus",
    answer_3: "Glücksspirale",
    answer_4: "Pille",
    right_answer: 3,
  },
  {
    question: "Was kommt in Ostasien häufig auf den Tisch?",
    answer_1: "Sonicht",
    answer_2: "Soschoneher",
    answer_3: "Soja",
    answer_4: "Sovielleicht",
    right_answer: 3,
  },
  {
    question: "1/4 ist ...?",
    answer_1: "bank Raumb",
    answer_2: "dieb Stahl",
    answer_3: "scheck Betrug",
    answer_4: "ein Bruch",
    right_answer: 4,
  },
  {
    question: "Was trägt man auf den Füßen?",
    answer_1: "Tortillas",
    answer_2: "Jalapeños",
    answer_3: "Espadrilles",
    answer_4: "Enchiladas",
    right_answer: 3,
  },
];

let currentQuestion = 0;

function init() {
  document.getElementById("questionLength").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  let countQuestion = questions[currentQuestion];
  document.getElementById("questionText").innerHTML = countQuestion["question"];
  document.getElementById("answer_1").innerHTML = countQuestion["answer_1"];
  document.getElementById("answer_2").innerHTML = countQuestion["answer_2"];
  document.getElementById("answer_3").innerHTML = countQuestion["answer_3"];
  document.getElementById("answer_4").innerHTML = countQuestion["answer_4"];
  countQuestionLenght();
}

function countQuestionLenght() {
  document.getElementById('countQuestionLenght').innerHTML = currentQuestion+1;
  if(currentQuestion > questions.length) {
    currentQuestion++;
  }
}

function answer(selection) {
  let countQuestion = questions[currentQuestion];
  let selectQuestionNumber = selection.slice(-1);

  let idOfRightAnswer = `answer_${countQuestion["right_answer"]}`;

  if (selectQuestionNumber == countQuestion["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("myBtn").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  showQuestion();
  resetAnswerButton();
}

function resetAnswerButton() {
  document.getElementById("myBtn").disabled = true;
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
}
