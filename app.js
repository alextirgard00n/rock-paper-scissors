
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
const resetDiv = document.querySelector('.resetModule');
const endGameText = document.querySelector('.endGameText')
const resetBtn = document.querySelector('.resetBtn');

const btn = document.querySelectorAll('#btn');
btn.forEach(btn => btn.addEventListener('click', buttonClick));

resetBtn.addEventListener('click', restartGame);

function buttonClick() { //handles click from user
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
    if (isGameOver()) {
        endGameReset();
        return;
    }


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

    if (isGameOver()) {
        endGameReset();
        return;
    }
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
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

function restartGame() {
    playerScore = 0
    computerScore = 0
    scoreInfo.textContent = 'Choose your Sign'
    scoreMessage.textContent = 'First to score 5 wins the game'
    playerScoreMsg.textContent = 'Player: 0'
    computerScoreMsg.textContent = 'Computer: 0'
    playerSign.textContent = '?'
    computerSign.textContent = '?'
    resetDiv.style.display = 'none';
}

function endGameReset() {
    resetDiv.style.display = 'flex';
    if (playerScore > computerScore) {
        endGameText.textContent = 'You won!';
    } else {
        endGameText.textContent = 'You Lost!';
    }
}
