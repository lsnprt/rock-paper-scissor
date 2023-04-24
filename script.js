window.addEventListener("load", Game);

function Game() {
    const buttons = document.querySelectorAll(".gamepad > button");
    const buttonsArray = Array.from(buttons);
    
    let keepGoing = true;
    
    buttonsArray.map(button => {
        button.addEventListener("click", function eventHandler (e) {
            if(!keepGoing){
                button.removeEventListener("click", eventHandler);
                return;
            }

            const playersChoice = e.target.innerText.toLowerCase();
            keepGoing = playOneRound(playersChoice);
        })
    });

    const reset = document.querySelector(".reset");
    reset.addEventListener("click", Game);
    
    const playerCounter = document.querySelector(".human-counter");
    const computerCounter = document.querySelector(".machine-counter");
    
    let playersScore = 0;
    let computersScore = 0;

    playerCounter.innerText = playersScore;
    computerCounter.innerText = computersScore;
    
}

function updateScores (winner){
    const playerCounter = document.querySelector(".human-counter");
    const computerCounter = document.querySelector(".machine-counter");
    
    let playersScore = parseInt(playerCounter.innerText);
    let computersScore = parseInt(computerCounter.innerText);
    
    if (winner === "Y"){
        playerCounter.innerText = ++playersScore;
    } else if (winner === "C"){
        computerCounter.innerText = ++computersScore;
    }

    if(playersScore === 5 || computersScore === 5){
        playersScore === 5 ? endGame(playerCounter) : endGame(computerCounter);
        return false;
    }

    return true;
}

function endGame(winningCounter){
    const resultDiv = document.querySelector(".result");
    resultDiv.innerText = `${winningCounter.attributes.value.textContent} wins!`;
}

function playOneRound(playersChoice, playersScore, computersScore) {
    const computersChoice = getComputersChoice();

    const result = calculateWinner(playersChoice, computersChoice);
    
    const resultDiv = document.querySelector(".result");
    resultDiv.innerText = result;

    const keepPlaying = updateScores(result.charAt(0));
    return keepPlaying;
}

function getComputersChoice() {
    let computerChoiceNumber = (Math.floor(Math.random() * 3));

    switch(computerChoiceNumber){
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2:
            return "scissor";
    }
}

function getPlayersChoice() {
    
    let keepGoing = true;
    let playersChoice;

    while(keepGoing){
        var userInput = prompt("Choose your weapon:")
        userInput = userInput.toLowerCase()

        if(userInput === "rock" || userInput === "paper" || userInput === "scissor"){
            playersChoice = userInput;
            keepGoing = false;
        }
    }

    return playersChoice;
}

function calculateWinner(playersChoice, computersChoice) {
    if (playersChoice === computersChoice){
        return "It's a tie!";
    }

    if (doesPlayerWin(playersChoice, computersChoice)){
        return `You win, ${playersChoice} beats ${computersChoice}!`;
    }

    return `Computer wins, ${computersChoice} beats ${playersChoice}`; 
}

function doesPlayerWin(playersChoice, computersChoice) {
    switch(playersChoice){
        case "rock":
            return computersChoice === "scissor" ? true : false;
        case "paper":
            return computersChoice === "rock" ? true : false;
        case "scissor":
            return computersChoice === "paper" ? true : false;
    }
}