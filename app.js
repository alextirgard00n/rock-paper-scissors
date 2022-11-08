
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

const scoreInfo = document.querySelector('.scoreInfo');
const scoreMessage = document.querySelector('.scoreMessage');
const playerSign = document.querySelector('.playerSign');
const computerSign = document.querySelector('.computerSign');
const playerScoreMsg = document.querySelector('.playerScore');
const computerScoreMsg = document.querySelector('.computerScore');

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

function playGame(playerSelection, computerSelection) {
    playerSelection = playerSelection;
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    }
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
        playerScore++
        roundWinner = 'player'
    }
    if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')) {
        computerScore++
        roundWinner = 'computer'
    }
    updateScore();
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
    updateChoices(playerSelection, computerSelection);
}

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            playerSign.textContent = '✊'
            break
        case 'paper':
            playerSign.textContent = '✋'
            break
        case 'scissors':
            playerSign.textContent = '✌️'
            break
    }

    switch (computerSelection) {
        case 'rock':
            computerSign.textContent = '✊'
            break
        case 'paper':
            computerSign.textContent = '✋'
            break
        case 'scissors':
            computerSign.textContent = '✌️'
            break
    }
}

function updateScore() {
    if (roundWinner === 'tie') {
        scoreInfo.textContent = "It's a tie!"
    } else if (roundWinner === 'player') {
        scoreInfo.textContent = 'You won!'
    } else if (roundWinner === 'computer') {
        scoreInfo.textContent = 'You lost!'
    }

    playerScoreMsg.textContent = `Player: ${playerScore}`
    computerScoreMsg.textContent = `Computer: ${computerScore}`
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`
        return
    }
    if (winner === 'computer') {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} is beaten by ${capitalizeFirstLetter(computerSelection)}`
        return
    }

    scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} ties with ${capitalizeFirstLetter(computerSelection)}`
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}