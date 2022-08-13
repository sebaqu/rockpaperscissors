const choices = [
    "rock",
    "paper",
    "scissors"
];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) { 
    const playerIndex = choices.findIndex(element => {
        return element.toLowerCase() === playerSelection.toLowerCase();;
    });
    const computerIndex = choices.findIndex(element => {
        return element.toLowerCase() ===  computerSelection.toLowerCase();
    });

    switch(true) {
        case playerIndex === computerIndex: // tie
            console.log(playerSelection + " vs " + computerSelection + ", it's a tie!");
            return playerSelection + " vs " + computerSelection + ", it's a tie!";
        case playerIndex === 0 && computerIndex === 2: // rock vs scissors
            console.log(playerSelection + " vs " + computerSelection + ", you win!");
            playerScore++;
            return playerSelection + " vs " + computerSelection + ", you win!";
        case playerIndex === 1 && computerIndex === 0: // paper vs rock
            console.log(playerSelection + " vs " + computerSelection + ", you win!");
            playerScore++;            
            return playerSelection + " vs " + computerSelection + ", you win!";
        case playerIndex === 2 && computerIndex === 1: // scissors vs paper
            console.log(playerSelection + " vs " + computerSelection + ", you win!");
            playerScore++;
            return playerSelection + " vs " + computerSelection + ", you win!";
        case playerIndex === 1 && computerIndex === 2: // paper vs scissors
            console.log(playerSelection + " vs " + computerSelection + ", you lose!");
            computerScore++;
            return playerSelection + " vs " + computerSelection + ", you lose!";
        case playerIndex === 2 && computerIndex === 0: // scissors vs rock
            console.log(playerSelection + " vs " + computerSelection + ", you lose!");
            computerScore++;
            return playerSelection + " vs " + computerSelection + ", you lose!";
        case playerIndex === 0 && computerIndex === 1: // rock vs paper
            console.log(playerSelection + " vs " + computerSelection + ", you lose!");
            computerScore++;
            return playerSelection + " vs " + computerSelection + ", you lose!";
        default:
            break;
    }
}

function showResults(resultMessage) {
    const container = document.querySelector('.contentflex')
    const resultsdiv = document.createElement('div');
    const results = document.createElement('h1');
    const playerscore = document.createElement('p');
    const computerscore = document.createElement('p');
    resultsdiv.classList.add('resultsdiv');
    resultsdiv.style.cssText = 'background: pink;'
    results.classList.add('results');
    results.textContent = resultMessage;
    playerscore.classList.add('playerscore');
    computerscore.classList.add('computerscore');
    playerscore.textContent = "Your Score: " + playerScore;
    computerscore.textContent = "Computer Score: " + computerScore;
    resultsdiv.appendChild(results);
    resultsdiv.appendChild(playerscore);
    resultsdiv.appendChild(computerscore);
    container.appendChild(resultsdiv);

    if (playerScore >= 5) {
        playerScore = 0;
        computerScore = 0;
        const victorydiv = document.createElement('div');
        const victorymsg = document.createElement('h1');
        victorydiv.classList.add('victorydiv');
        victorydiv.style.cssText = 'background: green;'
        victorymsg.classList.add('victorymsg');
        victorymsg.textContent = "Congratulations, you made it to 5 points, you are the winner!"
        victorydiv.appendChild(victorymsg);
        container.appendChild(victorydiv);
    }
    else if (computerScore >= 5) {
        playerScore = 0;
        computerScore = 0;
        const loserdiv = document.createElement('div');
        const losermsg = document.createElement('h1');
        loserdiv.classList.add('loserdiv');
        loserdiv.style.cssText = 'background: red;'
        losermsg.classList.add('losermsg');
        losermsg.textContent = "Sorry, the computer beat you 5 times, you lose!"
        loserdiv.appendChild(losermsg);
        container.appendChild(loserdiv);
    }
}

function clearDiv(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

const rockbtn = document.querySelector('#rockbtn');
const paperbtn = document.querySelector('#paperbtn');
const scissorsbtn = document.querySelector('#scissorsbtn');

rockbtn.addEventListener("click", function() { clearDiv("loserdiv"), clearDiv("victorydiv"), clearDiv("resultsdiv"), showResults(playRound(choices[0], getComputerChoice())); }, false);
paperbtn.addEventListener("click", function() { clearDiv("loserdiv"), clearDiv("victorydiv"), clearDiv("resultsdiv"), showResults(playRound(choices[1], getComputerChoice())); }, false);
scissorsbtn.addEventListener("click", function() { clearDiv("loserdiv"), clearDiv("victorydiv"), clearDiv("resultsdiv"), showResults(playRound(choices[2], getComputerChoice())); }, false);

