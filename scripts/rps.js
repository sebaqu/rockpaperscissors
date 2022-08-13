const choices = [
    "rock",
    "paper",
    "scissors"
];

function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

// return 1 for win, 0 for loss, 2 for tie
function playRound(playerSelection, computerSelection) { 
    let correctedPlayerSelection = playerSelection.toLowerCase();
    const playerIndex = choices.findIndex(element => {
        return element.toLowerCase() === correctedPlayerSelection;
    });
    const computerIndex = choices.findIndex(element => {
        return element.toLowerCase() ===  computerSelection.toLowerCase();
    });

    switch(true) {
        case playerIndex === computerIndex: // tie
            console.log("Player chose " + correctedPlayerSelection + ", Computer chose " + computerSelection);
            return 2;
        case playerIndex === 0 && computerIndex === 2: // rock scissors
            console.log("Player chose " + correctedPlayerSelection + ", Computer chose " + computerSelection);
            return 1;
        case playerIndex === 1 && computerIndex === 0: // paper vs rock
            console.log("Player chose " + correctedPlayerSelection + ", Computer chose " + computerSelection);
            return 1;
        case playerIndex === 2 && computerIndex === 1: // scissors vs paper
            console.log("Player chose " + correctedPlayerSelection + ", Computer chose " + computerSelection);
            return 1;
        case playerIndex === 1 && computerIndex === 2: // paper vs scissors
            console.log("Player chose " + correctedPlayerSelection + ", Computer chose " + computerSelection);
            return 0;
        case playerIndex === 2 && computerIndex === 0: // scissors vs rock
            console.log("Player chose " + correctedPlayerSelection + ", Computer chose " + computerSelection);
            return 0;
        case playerIndex === 0 && computerIndex === 1: // rock vs paper
            console.log("Player chose " + correctedPlayerSelection + ", Computer chose " + computerSelection);
            return 0;
        default:
            console.log("Invalid choice!");
            break;
    }
}

function game() {
    const playerSelection = "roCK";
    console.log("playing 5 rounds of rock paper scissors...");

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        if (playRound(playerSelection, computerSelection) == 0) {
            console.log("You lose!");
        }
        else if (playRound(playerSelection, computerSelection) == 1) {
            console.log("You win!");
        }
        else if (playRound(playerSelection, computerSelection) == 2)
            console.log("It's a tie!");
        else
            console.log("Computer wins by default...");
    }
}

game();