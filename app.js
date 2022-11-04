
let playerSelection;
let computerSelection;
let playerGameCount = 0;
let computerGameCount = 0;
let gameOutcomeTie = false;

const btn = document.querySelectorAll('#btn');
btn.forEach(btn => btn.addEventListener('click', buttonClick));

function buttonClick() {
    playGame(this.classList.value);
}

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3)
    switch (randomNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
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

function playGame(playerchoice) {

    // for (let i = 0; i < 5; i) {
    playerSelection = playerchoice;
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    // if (gameOutcomeTie) {
    //     gameOutcomeTie = false;
    // } else {
    //     i++;
    // }
    console.log(`Player: ${playerSelection} || Computer: ${computerSelection}`)
    console.log(`Player: ${playerGameCount}   ||   Computer: ${computerGameCount}`);
    // console.log(`Computer: ${computerGameCount}`);
    // }
}

// function game() {


//     for (let i = 0; i < 5; i) {
//         playerSelection = prompt("Enter a hand: (Rock, Paper, Scissors:").toLowerCase();
//         playerSelection = playerchoice;
//         computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//         if (gameOutcomeTie) {
//             gameOutcomeTie = false;
//         } else {
//             i++;
//         }
//         console.log(`Player: ${playerSelection} || Computer: ${computerSelection}`)
//         console.log(`Player: ${playerGameCount}`);
//         console.log(`Computer: ${computerGameCount}`);
//     }
// }
// game();
