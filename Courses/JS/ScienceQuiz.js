const questions =[
    {
        question: "What is the science of cultivating land for growing food or raising animals?",
        answers: [
            {text: "a. Physics", correct: false},
            {text: "b. Geology", correct: false},
            {text: "c. Agriculture", correct: true},
            {text: "d. Biology", correct: false},
        ]
    },
    {
        question: "What constanlty reshapes what our planet's surface looks like?",
        answers: [
            {text: "a. Weathering", correct: false},
            {text: "b. Water", correct: false},
            {text: "c. Erosion", correct: false},
            {text: "d. All of the above", correct: true},
        ]
    },
    {
        question: "What is a triangle-shaped piece of land that forms at the mouth of a river?",
        answers: [
            {text: "a. Island", correct: false},
            {text: "b. Delta", correct: true},
            {text: "c. Cave", correct: false},
            {text: "d. Valley", correct: false},
        ]
    },
    {
        question: "What is the condition of the air, or the atmosphere, on  our planet?",
        answers: [
            {text: "a. Temperature", correct: false},
            {text: "b. Wind", correct: false},
            {text: "c. Humidity", correct: false},
            {text: "d. Weather", correct: true},
        ]
    },
    {
        question: "What are ice crystals that fall toward the ground, partly melt, and then refreeze?",
        answers: [
            {text: "a. Snow", correct: false},
            {text: "b. Rain", correct: false},
            {text: "c. Sleet", correct: true},
            {text: "d. Flakes", correct: false},
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
        question: "What living organism can change light energy into chemical energy?",
        answers: [
            {text: "a. Bugs", correct: false},
            {text: "b. Plants", correct: true},
            {text: "c. Fish", correct: false},
            {text: "d. Mammals", correct: false},
        ]
    },
    {
        question: "What gets energy from eating both plants and meat?",
        answers: [
            {text: "a. Omnivores", correct: true},
            {text: "b. Carnivores", correct: false},
            {text: "c. Herbivores", correct: false},
            {text: "d. None of the above", correct: false},
        ]
    },
    {
        question: "What model shows how energy flows between living things?",
        answers: [
            {text: "a. Food chain", correct: true},
            {text: "b. Plant chart", correct: false},
            {text: "c. Water cycle", correct: false},
            {text: "d. All of the above", correct: false},
        ]
    },
    {
        question: "What is the system of living things and their environment?",
        answers: [
            {text: "a. Weather", correct: false},
            {text: "b. Environment", correct: false},
            {text: "c. Ecosystem", correct: true},
            {text: "d. Temperature", correct: false},
        ]
    },
    {
        question: "What is a characteristic that helps an organism live in its environment?",
        answers: [
            {text: "a. Adaptation", correct: true},
            {text: "b. Growth", correct: false},
            {text: "c. Linking", correct: false},
            {text: "d. Aging", correct: false},
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
        question: "What is an invisible line around which an object rotates, or spins?",
        answers: [
            {text: "a. Horizon", correct: false},
            {text: "b. Stability", correct: false},
            {text: "c. Axis", correct: true},
            {text: "d. Cord", correct: false},
        ]
    },
    {
        question: "What is a force that naturally pulls objects toward each other?",
        answers: [
            {text: "a. Action", correct: false},
            {text: "b. Gravity", correct: true},
            {text: "c. Strength", correct: false},
            {text: "d. Movement", correct: false},
        ]
    },
    {
        question: "What is an object that has gravitational pull stronger than anything else in space?",
        answers: [
            {text: "a. Black hole", correct: true},
            {text: "b. Galaxy", correct: false},
            {text: "c. Sun", correct: false},
            {text: "d. Earth", correct: false},
        ]
    },
    {
        question: "Why can Mercury get very cold despite it's the closest to the sun?",
        answers: [
            {text: "a. Faster at spining", correct: false},
            {text: "b. Has too much gases", correct: false},
            {text: "c. Lack of gases", correct: true},
            {text: "d. Gravity strength", correct: false},
        ]
    },
    {
        question: "Where do most Martian dust storms come from?",
        answers: [
            {text: "a. Hellas Basin", correct: true},
            {text: "b. Utopia Basin", correct: false},
            {text: "c. Tharsis rise", correct: false},
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