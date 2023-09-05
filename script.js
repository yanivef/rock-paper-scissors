const btnRock = document.querySelector('.rock')
const btnPaper = document.querySelector('.paper')
const btnScissors = document.querySelector('.scissors')
const body = document.querySelector('body')
const div = document.createElement('div')
const MAX_SCORE = 5

let playerScore = 0
let computerScore = 0
let temp = false

btnRock.addEventListener('click', (e) => btnHelper(e))
btnPaper.addEventListener('click', (e) => btnHelper(e))
btnScissors.addEventListener('click', (e) => btnHelper(e))




// Functions 

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) 
        return 'paper' 

    else if (randomNumber === 2)
        return 'rock'

    return 'scissors'
}



function btnHelper(e) {
    if(isGameOver()) 
        return // end game
    
    div.textContent = playRound(e.target.classList.value)   
}

function isGameOver(){
    if(playerScore === 5){
        div.textContent = `You Win, ${playerScore} : ${computerScore}\n Game Over`        
        return true
    }

    if(computerScore === 5){
        div.textContent = `You Lose, ${playerScore} : ${computerScore}\n Game Over`
        return true
    }
}

function playRound(playerSelection){
    const computerSelection = getComputerChoice()

    if(!temp){
        body.appendChild(div)
        div.setAttribute('style', 'display:flex; white-space: pre')   
        temp = true
    }

    if (playerSelection === computerSelection)
        return `It\'s a tie! The score is: ${playerScore} : ${computerScore}`
    switch (playerSelection) {
        case('rock'):
            if (computerSelection === 'paper'){
                computerScore++ 
                if(isGameOver()) return div.textContent   
                return `You Lose! Paper beats Rock, The Score is: ${playerScore} : ${computerScore}`
            }
            playerScore++
            if(isGameOver()) return div.textContent
            return `You Win! Rock beats Scissors, The Score is: ${playerScore} : ${computerScore}`
        case('paper'):
            if(computerSelection === 'scissors'){
                computerScore++
                if(isGameOver()) return div.textContent; 
                return `You Lose! Scissors beats Paper, The Score is: ${playerScore} : ${computerScore}`
            }
            playerScore++
            if(isGameOver()) return div.textContent
            return `You Win! Paper beats Rock, The Score is: ${playerScore} : ${computerScore}`
        case('scissors'):
            if(computerSelection === 'rock'){
                computerScore++
                if(isGameOver()) return div.textContent 
                return `You Lose! Rock beats Scissors, The Score is: ${playerScore} : ${computerScore}`
            }
            playerScore++
            if(isGameOver()) return div.textContent 
            return `You Win! Scissors beats Paper, The Score is: ${playerScore} : ${computerScore}`
        default:
            return 'Something went wrong..'
    }
}
