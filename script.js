function game() {
    for (i = 1; i <= 5; i++){
        console.log(`Round: ${i}`);
        play(playerSelection, computerSelection);
        computerPlay();
        playerPlay();
    }
}

function computerPlay() {
    const computerChoice = ['rock', 'paper', 'scissors'];
    let number = Math.floor(Math.random() * 3);
    let finalChoice = computerChoice[number];
    console.log(`Computer's Choice: ${finalChoice}`)
    return finalChoice;
}

function playerPlay() {
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    // while (finalChoice != 'rock' || finalChoice != 'paper' || finalChoice != 'scissors')
    // {
    //     finalChoice = prompt("Invalid. Rock, Paper, or Scissors?").toLowerCase();
    // }
    return playerChoice.toLowerCase();
}

const computerSelection = computerPlay();
const playerSelection = playerPlay();

function play(playerSelection, computerSelection) {
    const player = playerSelection;
    const computer = computerSelection;
    console.log(`Player's Choice: ${player}`);
    if (computer === "rock") {
        if (player === "rock") {
            console.log("Draw!");
        } else if (player === "paper") {
            console.log("Win!"); 
        } else if (player === "scissors"){
            console.log("Lose!");
        }
    } else if (computer === "paper") {
        if (player === "rock") {
            console.log("Lose!");
        } else if (player === "paper") {
            console.log("Draw!"); 
        } else if (player === "scissors") {
            console.log("Win!");
        }
    } else if (computer === "scissors") {
        if (player === "rock") {
            console.log("Win!");
        } else if (player === "paper") {
            console.log("Lose!"); 
        } else if (player === "scissors"){
            console.log("Draw!");
        }
    }
}
