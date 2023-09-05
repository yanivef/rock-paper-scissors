// console.log(game())
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

// function getPlayerChoice(){
//     const playerChoice = prompt('Enter your choice: ')
//     if(!playerChoice){
//         console.log('invalid player choice')
//         return
//     }
//     return playerChoice
// }

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
    console.log(playerSelection)
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


// PLAY THE GAME 5 TIMES

// function game(){
//     let playerScore = 0
//     let computerScore = 0
//     let result
//     for(let i = 1; i <=5; i++) {
//         if(playerScore === 3 || computerScore === 3)
//             break    
        
//         let playerChoice = getPlayerChoice()
//         if(!playerChoice)
//             return
//         result = playRound(playerChoice, getComputerChoice())
//         if(result.includes('You Win')){
//             playerScore++
//             console.log('Player win round ' + i)
//         }
//         else if(result.includes('You Lose')){
//             computerScore++
//             console.log('Computer win round ' + i)
//         }
//         // ignore case of 'It's a Tie'
//     }

//     if(playerScore > computerScore)
//         return 'You Win!'
//     else if(computerScore > playerScore)
//         return 'You Lose!'
//     return 'It\'s a Tie!'

// }