
function getComputerChoice(max){
    return Math.floor(Math.random() * max); 
}

function computerOutput(computerChoice){
    if (computerChoice === 0){
    return "Rock"}
else if (computerChoice === 1){
    return "Paper"}
else if (computerChoice === 2){
    return "Scissors"}
}

const rockBtn = document.querySelector("#rockBtn")
const paperBtn = document.querySelector("#paperBtn")
const scissorsBtn = document.querySelector("#scissorsBtn")

rockBtn.addEventListener("click", function() {
    playRound("rock");
});

paperBtn.addEventListener("click", function() {
    playRound("paper");
});

scissorsBtn.addEventListener("click", function() {
    playRound("scissors");
});

let humanScore = 0
let computerScore = 0

function playRound(humanChoiceString){

    let computerChoice = getComputerChoice(3);
    let computerChoiceString = computerOutput(computerChoice);

    let message = result(computerChoiceString, humanChoiceString);

    document.querySelector("#result").textContent = `Computer chose: ${computerChoiceString}`;
    document.querySelector("#score").textContent = `Score: You - ${humanScore}, Computer: ${computerScore}`

}

function result(computerChoiceString, humanChoiceString){
    if (computerChoiceString === humanChoiceString){
        return "Draw!"
    }
    else if (computerChoiceString === "Rock" && humanChoiceString === "scissors"){
        computerScore++;
    return "You lose!";
    }
    else if (computerChoiceString === "Paper" && humanChoiceString === "rock"){
    computerScore++;
    return "You lose!";
    }
    else if (computerChoiceString === "Scissors" && humanChoiceString === "paper"){
    computerScore++;
    return "You lose!";
    }
    else {
        humanScore++;
        return "You win!";
    }
}




