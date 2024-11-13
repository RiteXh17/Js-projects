const questions = [
    {
        question : 'Which is ths  coldest place in the world?',
        answers: [
            {text: "Kalahari", correct: false},
            {text: "  Gobi", correct:   false},
            {text: " Sahara", correct: false},
            {text: " Antartica", correct: true}

        ]
    },

    {
        question : 'Which is ths  smallest continent in the world?',
        answers: [
            {text: "asia", correct: false},
            {text: " Australia", correct:  true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false}

        ]
    },

    {
        question : 'Which is ths largest animal in the world?',
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct:  true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},

        ]
    } 
]


const questionElement = document.getElementById("question")
const  answerButton  = document.getElementById("answer-buttons")
const  nextButton = document.getElementById("next-btn")

let currentQuestionINdex = 0;
let score = 0;

function startQuiz (){
    currentQuestionINdex = 0;
    score =0;
    nextButton.innerHTML = "Next"
     showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionINdex];
    let questionNo = currentQuestionINdex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question



    currentQuestion.answers.forEach(answer=> {
        let button = document.createElement("button");
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
    }

    );
}


function  resetState(){
    nextButton.style.display ='none'
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}
function selectAnswer(e){
     const selectedBtn = e.target;
     const isCorrect = selectedBtn.dataset.correct ==='true'
     if(isCorrect){
        selectedBtn.classList.add("correct");
        score++
     } else {
        selectedBtn.classList.add("incorrect");
     }

     Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add('correct');
        }
        button.disabled = "true"
     })
        nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "Block"
}

function handleNextButton(){
    currentQuestionINdex++
    if(currentQuestionINdex <questions.length){
            showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionINdex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
})
startQuiz();