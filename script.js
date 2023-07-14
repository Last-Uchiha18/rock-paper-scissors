const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3)
    console.log(index)
    return choices[index]
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return "It is a tie";
    } else if ((computerSelection === "Rock") && (playerSelection === "paper")) {
        return "Player Wins";
    } else if ((computerSelection === "Rock") && (playerSelection === "scissors")) {
        return "Computer Wins";
    } else if ((computerSelection === "Paper") && (playerSelection === "rock")) {
        return "Computer Wins";
    } else if ((computerSelection === "Paper") && (playerSelection === "scissors")) {
        return "Player Wins";
    } else if ((computerSelection === "Scissors") && (playerSelection === "paper")) {
        return "Computer Wins";
    } else if ((computerSelection === "Scissors") && (playerSelection === "rock")) {
        return "Player Wins";
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        playRound(prompt("Choose").toLowerCase(), getComputerChoice())
    }
}
