const questions =[
    {
        question: "What is the result? 20 + 35 = .......",
        answers: [
            {text: "a. 65", correct: false},
            {text: "b. 55", correct: true},
            {text: "c. 45", correct: false},
            {text: "d. 50", correct: false},
        ]
    },
    {
        question: "What is the result? 24 - 15 = .......",
        answers: [
            {text: "a. 6", correct: false},
            {text: "b. 3", correct: false},
            {text: "c. 9", correct: true},
            {text: "d. 7", correct: false},
        ]
    },
    {
        question: "How many units as a TEN made out of?",
        answers: [
            {text: "a. 9 units", correct: false},
            {text: "b. 8 units", correct: false},
            {text: "c. 5 units", correct: false},
            {text: "d. 10 units", correct: true},
        ]
    },
    {
        question: "How many digits does a HUNDRED have?",
        answers: [
            {text: "a. 2 digits", correct: false},
            {text: "b. 4 digits", correct: false},
            {text: "c. 3 digits", correct: true},
            {text: "d. 1 digit", correct: false},
        ]
    },
    {
        question: "What is the number 135 made of?",
        answers: [
            {text: "a. 3 hundred, 5 tens, 1 unit", correct: false},
            {text: "b. 5 units, 3 tens, 1 hundred", correct: true},
            {text: "c. 3 hundred, 1 ten, 5 unit", correct: false},
            {text: "d. 1 unit, 3 tens, 5 hundred", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtos = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtos.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtos.firstChild){
        answerButtos.removeChild(answerButtos.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtos.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = "You scored "+score+" out of "+ questions.length +"!";
    nextButton.innerHTML = "Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();

const questionsLevel2 =[
    {
        question: "What is the result? 3 x 9 = .......",
        answers: [
            {text: "a. 34", correct: false},
            {text: "b. 25", correct: false},
            {text: "c. 26", correct: false},
            {text: "d. 27", correct: true},
        ]
    },
    {
        question: "What is the result? 35/5 = .......",
        answers: [
            {text: "a. 5", correct: false},
            {text: "b. 7", correct: true},
            {text: "c. 3", correct: false},
            {text: "d. 6", correct: false},
        ]
    },
    {
        question: "What is the result? 6 x 12 = .......",
        answers: [
            {text: "a. 56", correct: false},
            {text: "b. 45", correct: false},
            {text: "c. 72", correct: true},
            {text: "d. 62", correct: false},
        ]
    },
    {
        question: "What is the distance between two points?",
        answers: [
            {text: "a. Road", correct: false},
            {text: "b. Longitude", correct: true},
            {text: "c. Path", correct: false},
            {text: "d. Altitude", correct: false},
        ]
    },
    {
        question: "How  many centimeters does 1 meter have?",
        answers: [
            {text: "a. 15cm", correct: false},
            {text: "b. 10cm", correct: false},
            {text: "c. 1000cm", correct: false},
            {text: "d. 100cm", correct: true},
        ]
    }
];
const questionElement2 = document.getElementById("question2");
const answerButtos2 = document.getElementById("answer-buttons2");
const nextButton2 = document.getElementById("next-btn2");

let currentQuestionIndex2 = 0;
let score2 = 0;

function startQuiz2(){
    currentQuestionIndex2 = 0;
    score2 = 0;
    nextButton2.innerHTML = "Next";
    showQuestion2();
}

function showQuestion2(){
    resetState2();
    let currentQuestion2 = questionsLevel2[currentQuestionIndex2];
    let questionNo2 = currentQuestionIndex2 + 1;
    questionElement2.innerHTML = questionNo2 + ". " + currentQuestion2.question;

    currentQuestion2.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtos2.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer2);
    });
}

function resetState2(){
    nextButton2.style.display="none";
    while(answerButtos2.firstChild){
        answerButtos2.removeChild(answerButtos2.firstChild);
    }
}

function selectAnswer2(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score2++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtos2.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton2.style.display = "block";
}

function showScore2(){
    resetState2();
    questionElement2.innerHTML = "You scored "+score2+" out of "+ questionsLevel2.length +"!";
    nextButton2.innerHTML = "Again";
    nextButton2.style.display = "block";
}

function handleNextButton2(){
    currentQuestionIndex2++;
    if(currentQuestionIndex2 < questionsLevel2.length){
        showQuestion2();
    }else{
        showScore2();
    }
}

nextButton2.addEventListener("click", () =>{
    if(currentQuestionIndex2 < questionsLevel2.length){
        handleNextButton2();
    }else{
        startQuiz2();
    }
});

startQuiz2();

const questionsLevel3 =[
    {
        question: "In a circumference, how is the distance for all points to the center?",
        answers: [
            {text: "a. All different", correct: false},
            {text: "b. All the same", correct: true},
            {text: "c. Some are the same", correct: false},
            {text: "d. It depends", correct: false},
        ]
    },
    {
        question: "What is the distance accross the circle through the center?",
        answers: [
            {text: "a. Arc", correct: false},
            {text: "b. Radius", correct: false},
            {text: "c. Diameter", correct: true},
            {text: "d. Point", correct: false},
        ]
    },
    {
        question: "What is a polygon made of?",
        answers: [
            {text: "a. Open polygonal curves", correct: false},
            {text: "b. Closed polygonal curves", correct: true},
            {text: "c. Open polygonal lines", correct: false},
            {text: "d. Closed polygonal lines", correct: false},
        ]
    },
    {
        question: "How many sides does a Hexagon have?",
        answers: [
            {text: "a. 7", correct: false},
            {text: "b. 6", correct: true},
            {text: "c. 8", correct: false},
            {text: "d. 5", correct: false},
        ]
    },
    {
        question: "What triangle Has Two sides of the same length and one different?",
        answers: [
            {text: "a. Isosceles", correct: true},
            {text: "b. Equilateral", correct: false},
            {text: "c. Scalene", correct: false},
            {text: "d. None", correct: false},
        ]
    }
];
const questionElement3 = document.getElementById("question3");
const answerButtos3 = document.getElementById("answer-buttons3");
const nextButton3 = document.getElementById("next-btn3");

let currentQuestionIndex3 = 0;
let score3 = 0;

function startQuiz3(){
    currentQuestionIndex3 = 0;
    score3 = 0;
    nextButton3.innerHTML = "Next";
    showQuestion3();
}

function showQuestion3(){
    resetState3();
    let currentQuestion3 = questionsLevel3[currentQuestionIndex3];
    let questionNo3 = currentQuestionIndex3 + 1;
    questionElement3.innerHTML = questionNo3 + ". " + currentQuestion3.question;

    currentQuestion3.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtos3.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer3);
    });
}

function resetState3(){
    nextButton3.style.display="none";
    while(answerButtos3.firstChild){
        answerButtos3.removeChild(answerButtos3.firstChild);
    }
}

function selectAnswer3(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score3++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtos3.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton3.style.display = "block";
}

function showScore3(){
    resetState3();
    questionElement3.innerHTML = "You scored "+score3+" out of "+ questionsLevel3.length +"!";
    nextButton3.innerHTML = "Again";
    nextButton3.style.display = "block";
}

function handleNextButton3(){
    currentQuestionIndex3++;
    if(currentQuestionIndex3 < questionsLevel3.length){
        showQuestion3();
    }else{
        showScore3();
    }
}

nextButton3.addEventListener("click", () =>{
    if(currentQuestionIndex3 < questionsLevel3.length){
        handleNextButton3();
    }else{
        startQuiz3();
    }
});

startQuiz3();