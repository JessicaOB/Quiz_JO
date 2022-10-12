var timerEl = document.querySelector(".countdown");
var timerSeconds = 20
var startButton = document.querySelector(".start-quiz");
var quizQuestions = document.querySelector(".quiz-questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices")
var userScore = 0
var questions = [
    {
        title: 'Which character had glasses?',
        answers: ['A. Brandon', 'B. Mikey', 'C. Chunk', 'D. Stefanie'],
        correct: 'D. Stefanie'
    },
    {
        title: 'Which of the following names is NOT something Brandon calls Mikey?',
        answers: ['A. wimp', 'B. athsma case', 'C. limp lungs', 'D. lame-o'],
        correct: 'B. athsma case'
    },
];

var timeLeft = function () {
    timerSeconds--;
    if (timerSeconds > 0) {
        timerEl.textContent = "Countdown: " + timerSeconds
    }
    if (timerSeconds <= 0) {
        alert("Quiz Over!")
        return
    }
};

function askQuestions() {
    var currentQuestion = questions[0]
    questionTitle.textContent = currentQuestion.title 
    for (var i = 0; i < currentQuestion.answers.length; i++) {
        var userChoices = currentQuestion.answers[i]
        var choicesButton = document.createElement("button")
        choicesButton.setAttribute(value, userChoices);
        choices.appendChild(choicesButton);
    };
    

    // var questionText = document.createElement("h2");
    // quizQuestions.appendChild(questionText);
    // questionText.textContent = questions.currentQuestion;
};

function startQuiz() {
    timerEl.removeAttribute("style")
    timer = setInterval(timeLeft, 1000)
    startButton.setAttribute("style", "display: none")
    askQuestions()
};



startButton.addEventListener("click", startQuiz);
