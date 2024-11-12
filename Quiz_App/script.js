const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    },
    {
        question: "What is the capital city of Japan?",
        answers: [
            { text: "Seoul", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Beijing", correct: false },
            { text: "Bangkok", correct: false },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none"; // Oculta el botón "Next" al inicio
    showQuestion();
}

function showQuestion() {
    resetState(); // Llama a resetState para limpiar el estado anterior

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer.correct));
        answerButtons.appendChild(button);
        button.dataset.correct = answer.correct; // Asigna "correct" como atributo de datos
    });
}

function resetState() {
    nextButton.style.display = "none"; // Oculta el botón "Next" cada vez que se muestra una nueva pregunta
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild); // Remueve los botones de respuesta anteriores
    }
}

function selectAnswer(selectedButton, isCorrect) {
    if (isCorrect) {
        selectedButton.classList.add("correct"); // Muestra solo el botón correcto como "correcto"
        score++; // Incrementa el puntaje si es correcto
    } else {
        selectedButton.classList.add("incorrect"); // Muestra el botón seleccionado como "incorrecto" si la respuesta es incorrecta
    }

    // Muestra la respuesta correcta en verde, incluso si se seleccionó incorrecta
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });
    nextButton.style.display = "block"; // Muestra el botón "Next"
}

function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = "none"; // Oculta el botón "Next" hasta que se seleccione una respuesta
    } else {
        showScore();
    }
}

function showScore() {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; // Muestra el puntaje final
    answerButtons.innerHTML = ""; // Borra las opciones de respuesta
    nextButton.innerHTML = "Play Again"; // Cambia el texto del botón a "Play Again"
    nextButton.style.display = "block"; // Muestra el botón de nuevo para reiniciar
    nextButton.onclick = startQuiz; // Reinicia el quiz cuando se hace clic
}

nextButton.addEventListener("click", handleNextQuestion);

startQuiz();






