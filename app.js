
let playerSelection;
let computerSelection;;
let playerGameCount = 0;
let computerGameCount = 0;
let gameOutcomeTie = false;


function getComputerChoice() {
    const randomNum = Math.floor(Math.floor(Math.random() * 3))
    if (randomNum === 0) {
        computerSelection = "rock";
    } else if (randomNum === 1) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'paper')) {
        gameOutcomeTie = true;
        return "It's a tie!"
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerGameCount++;
            return 'You Win! Rock beats Scissors.'
        } else if (computerSelection === 'paper') {
            computerGameCount++;
            return 'You Lose! Paper beats Rock'
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerGameCount++;
            return 'You Win! Scissors beats Paper.'
        } else if (computerSelection === 'rock') {
            computerGameCount++;
            return 'You Lose! Rock beats Scissors'
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerGameCount++;
            return 'You Win! Paper beats Rock.'
        } else if (computerSelection === 'scissors') {
            computerGameCount++;
            return 'You Lose! Scissor beats Paper'
        }
    }
}

function game() {
    for (let i = 0; i < 5; i) {
        playerSelection = prompt("Enter a hand: (Rock, Paper, Scissors:");
        getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (gameOutcomeTie) {
            gameOutcomeTie = false;
        } else {
            i++;
        }
        console.log(`Player: ${playerSelection} || Computer: ${computerSelection}`)
        console.log(`Player: ${playerGameCount}`);
        console.log(`Computer: ${computerGameCount}`);
    }
}

game();
