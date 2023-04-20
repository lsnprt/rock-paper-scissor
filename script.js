//Get a random number between 1 and 3
//1 = rock 2 = scissor 3 = paper

function getComputerChoice() {
    let computerChoiceNumber = (Math.floor(Math.random() * 100)) % 3;

    switch(computerChoiceNumber){
        case 0:
            return "Rock";
        case 1: 
            return "Paper";
        case 2:
            return "Scissor";
    }
}

function getPlayersChoice() {
    
    let keepGoing = true;
    let userChoice;

    while(keepGoing){
        var userInput = prompt("Choose your weapon:")

        if(userInput.toLowerCase() === "rock" || userInput.toLowerCase() === "paper" || userInput.toLowerCase() === "scissor"){
            userChoice = userInput.charAt(0).toUpperCase() + userInput.slice(1);
            keepGoing = false;
        }
    }

    return userChoice;
}