const questions = [

    {

        question: 'Which planet is also known as the "Red Planet"?',

        answers: ["A) Earth", "B) Mars", "C) Jupiter", "D) Neptune"],

        correctAnswer: "B) Mars"

    },

    {

        question: "Which is the hardest natural substance on Earth?",

        answers: ["A) Quartz", "B) Corundum", "C) Diamond", "D) Topaz"],

        correctAnswer: "C) Diamond"

    },

    {

        question: "Who was the first person to walk on the Moon?",

        answers: ["A) Buzz Aldrin", "B) Michael Collins", "C) Neil Armstrong", "D) John Glenn"],

        correctAnswer: "C) Neil Armstrong"

    },

    {

        question: "When did World War II end?",

        answers: ["A) May 8, 1945", "B) August 15, 1945", "C) September 2, 1945", "D) December 31, 1945"],

        correctAnswer: "C) September 2, 1945"

    }

];



let currentQuestion = 0;

let score = 0;



const questionElement = document.getElementById("question");

const answerListElement = document.getElementById("answer-list");

const nextButton = document.getElementById("next-btn");

const resultElement = document.getElementById("result");

const retryButton = document.getElementById("retry-btn");



function loadQuestion() {

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    answerListElement.innerHTML = "";

    resultElement.textContent = "";



    question.answers.forEach(answer => {

        const li = document.createElement("li");

        li.textContent = answer;

        li.addEventListener("click", () => checkAnswer(answer, li));

        answerListElement.appendChild(li);

    });

}



function checkAnswer(selectedAnswer, selectedElement) {

    const correct = questions[currentQuestion].correctAnswer;

    const options = answerListElement.querySelectorAll("li");



    options.forEach(option => {

        option.classList.add("disabled");



        if (option.textContent === correct) {

            option.classList.add("correct");

        }



        if (option.textContent === selectedAnswer && selectedAnswer !== correct) {

            option.classList.add("wrong");

        }

    });



    if (selectedAnswer === correct) {

        score++;

    }

}



function showResult() {

    questionElement.style.display = "none";

    answerListElement.style.display = "none";

    nextButton.style.display = "none";

    resultElement.textContent = `Your score is: ${score} out of ${questions.length}`;

    retryButton.style.display = "inline-block";

}



nextButton.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showResult();

    }

});



retryButton.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    questionElement.style.display = "block";

    answerListElement.style.display = "block";

    nextButton.style.display = "inline-block";

    retryButton.style.display = "none";

    loadQuestion();

});



loadQuestion();