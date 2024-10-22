let random = parseInt(Math.random() *100 + 1)
const submit =  document.querySelector("#submit")
const input = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const  lowValue = document.querySelector(".low")
const  result = document.querySelector(".resultParas")

const p = document.createElement('p')

let store = []
let numGuess= 1
let playGame = true

if(playGame){
    submit.addEventListener('click', function (e){
        e.preventDefault();
        const guess = parseInt(input.value);
        validate(guess)
    })
}

function validate(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }
    if(guess >100){
        alert("Please Enter a number less than hundred")
    }

    if(guess <1){
        alert('Please enter a number more than 1')
    }

    store.push(guess)
    if(numGuess === 11) {
        displayGuess(guess)
        displayMsg(`game over. Random number was ${random}`)
        EndGame()
    } else {
        displayGuess(guess)
        checkGuess(guess)
    }
}


function checkGuess(guess){
        if(guess === random){
            displayMessage(`You guessed it right`)
            EndGame()
        } 
}


function displayGuess(guess){
    input.value = " "
    guessSlot.innerHTML += `${guess},`
    numGuess++
    remaining.innerHTML=`${11 - numGuess}`
}


function displayMsg(message){
    lowValue.innerHTML = `<h2>${message}</h2>`
}


function newGame(){
    const newGame = document.querySelector('#newGame')
    newGame.addEventListener('click', function(e){
        random = parseInt(Math.random() *100 + 1)
        prevGuess=[]
        newGuess= 1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11 - numGuess}`
        input.removeAttribute('disabled')
        startOver.removeChild()

    })
}

function EndGame(){
    input.value=""
    input.setAttribute('Disabled','')
    p.classList.add('button')
    p.innerHTML=`<h1 id = "newGame">Start new game</h1>`
    result.appendChild(p)
    playGame = false
    newGame()
}