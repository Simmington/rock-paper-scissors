// 1. Create a function that returns a random choice of rock, paper 
//  or scissors
// 2. Create a function that accepts a player input of rock, paper
//  scissors
// 3. Create 2 variables humanScore and computerScore.
// 4. Store a log the scores of each player.
// 5. Implement the logic of which value trumps another
// 6. Write the logic for a single round
// 7. Write the logic for a full game (5 rounds)

function getComputerChoice(max){
    return Math.floor(Math.random() * max); 
}

function computerOutput(computerChoice){
    if (computerChoice === 0){
    return "rock"}
else if (computerChoice === 1){
    return "paper"}
else if (computerChoice === 2){
    return "scissors"}
}

function transform(getHumanChoice){
    return getHumanChoice.toLowerCase()
}

let humanScore = 0
let computerScore = 0

function result(computerChoiceString, humanChoiceString){
    if (computerChoiceString === humanChoiceString){
        return "Draw!"
    }
    else if (computerChoiceString === "rock" && humanChoiceString === "scissors"){
        computerScore++;
    return "You lose!";
    }
    else if (computerChoiceString === "paper" && humanChoiceString === "rock"){
    computerScore++;
    return "You lose!";
    }
    else if (computerChoiceString === "scissors" && humanChoiceString === "paper"){
    computerScore++;
    return "You lose!";
    }
    else {
        humanScore++;
        return "You win!";
    }
}

for (let round = 1; round <= 5; round++){
    console.log(`\nRound: ${round}`)

    let computerChoice = getComputerChoice(3)
    let computerChoiceString = computerOutput(computerChoice)

    let getHumanChoice = prompt("Please choose rock, paper or scissors.")
    let humanChoiceString = transform(getHumanChoice)

    console.log(`Computer chose: ${computerChoiceString}`)
    console.log(`Your choice: ${humanChoiceString}`)    

    console.log(result(computerChoiceString, humanChoiceString))
    console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`)
}

if (humanScore > computerScore){
    console.log("Congratulations! You win!")
} else if (humanScore < computerScore){
    console.log("You have been defeated!")
} else {
    console.log("It's a draw!")
}