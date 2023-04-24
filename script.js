function Game() {
    const buttons = document.querySelectorAll("button");
    const buttonsArray = Array.from(buttons);
    
    buttonsArray.map(button => {
        button.addEventListener("click", (e) => {
            const playersChoice = e.target.innerText.toLowerCase();
            const winner = playOneRound(playersChoice);
            updateScores(winner);
        })
    });  
    
    const playerCounter = document.querySelector(".human-counter");
    const computerCounter = document.querySelector(".machine-counter");
    
    let playersScore = 0;
    let computersScore = 0;

    playerCounter.innerText = playersScore;
    computerCounter.innerText = computersScore;
    
}

function updateScores (winner){
    if (winner === "Y"){
        playerCounter.innerText = playersScore++;
    } else if (winner === "C"){
        computerCounter.innerText = computersScore++;
    }
}

function playOneRound(playersChoice, playersScore, computersScore) {
    const computersChoice = getComputersChoice();

    const result = calculateWinner(playersChoice, computersChoice);
    
    const resultDiv = document.querySelector(".result");
    resultDiv.innerText = result;

    return result.charAt(0);
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