function Game() {
    let playersScore = 0;
    let computersScore = 0;

    for(let i = 0; i < 5; i++){
        let winner = playOneRound();
        
        if (winner === "Y"){
            playersScore++;
        }else if (winner === "C"){
            computersScore++;
        }
    }

    return playersScore === computersScore? "It's a tie!" : `${(playersScore > computersScore? "You win!" : "Computer wins!")}`;
}

function playOneRound() {
    const playersChoice = getPlayersChoice();
    const computersChoice = getComputersChoice();

    const result = calculateWinner(playersChoice, computersChoice);
    console.log(result);

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