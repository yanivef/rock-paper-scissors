console.log(game())





// Functions 

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) 
        return 'Paper' 

    else if (randomNumber === 2)
        return 'Rock'

    return 'Scissors'
}

function getPlayerChoice(){
    const playerChoice = prompt('Enter your choice: ')
    if(!playerChoice){
        console.log('invalid player choice')
        return
    }
    return playerChoice
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (playerSelection === computerSelection)
        return 'It\'s a tie!'
    switch (playerSelection) {
        case('rock'):
            if (computerSelection === 'paper')
                return 'You Lose! Paper beats Rock'
            return 'You Win! Rock beats Scissors'
        case('paper'):
            if(computerSelection === 'scissors')
                return 'You Lose! Scissors beats Paper'
            return 'You Win! Paper beats Rock'
        case('scissors'):
            if(computerSelection === 'rock')
                return 'You Lose! Rock beats Scissors'
            return 'You Win! Scissors beats Paper'
        default:
            return 'Something went wrong..'
    }
}

function game(){
    let playerScore = 0
    let computerScore = 0
    let result
    for(let i = 1; i <=5; i++) {
        if(playerScore === 3 || computerScore === 3)
            break    
        
        let playerChoice = getPlayerChoice()
        if(!playerChoice)
            return
        result = playRound(playerChoice, getComputerChoice())
        if(result.includes('You Win')){
            playerScore++
            console.log('Player win round ' + i)
        }
        else if(result.includes('You Lose')){
            computerScore++
            console.log('Computer win round ' + i)
        }
        // ignore case of 'It's a Tie'
    }

    if(playerScore > computerScore)
        return 'You Win!'
    else if(computerScore > playerScore)
        return 'You Lose!'
    return 'It\'s a Tie!'

}