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