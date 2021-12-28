const playerChoice = document.querySelectorAll('.playerChoice');
const playerPoints = document.querySelector('#playerPoints');
const computerPoints = document.querySelector('#compPoints');

const displayMessage = document.querySelector("#gameOver");

let playerP = 0;
let compP = 0;

let computerSelection;
let playerSelection;

function computerPlay() {
    const computerChoice = ['rock', 'paper', 'scissors'];
    computerSelection = computerChoice[Math.floor(Math.random() * 3)];
}

playerChoice.forEach(button => {
    button.addEventListener('click', function () {
        playerSelection = button.textContent.toLowerCase();
        computerPlay();
        playRound(playerSelection, computerSelection);

        //DEBUG
        console.log(`Player Selection: ${playerSelection}`);
        console.log(`Computer Selection: ${computerSelection}`);
    })
})

function gameOver() {
    if (playerP == 5) {
        displayMessage.textContent = "WINNER!";
    } else {
        displayMessage.textContent = "LOSER!";
    }
    playerChoice.forEach(button => button.disabled = true);
}

function playRound(playerSelection, computerSelection) {
    if (playerP == 5 || compP == 5) {
        gameOver();
    } else {
        if (playerSelection === computerSelection) {
            console.log('DRAW!');
        } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
            console.log('YOU WIN!');
            ++playerP;
            playerPoints.textContent = playerP;
        } else {
            console.log('LOSER');
            ++compP;
            computerPoints.textContent = compP;
        }
    }
}