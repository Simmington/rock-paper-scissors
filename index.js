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

let computerChoice = getComputerChoice(3)

function computerOutput(computerChoice){
    if (computerChoice === 0){
    return "rock"}
else if (computerChoice === 1){
    return "paper"}
else if (computerChoice === 2){
    return "scissors"}
}

let computerChoiceString = computerOutput(computerChoice)


let getHumanChoice = prompt("Please choose rock, paper or scissors.")

function transform(getHumanChoice){
    return getHumanChoice.toLowerCase()
}

let humanChoiceString = transform(getHumanChoice)

let humanScore = 0
let computerScore = 0

function result(computerChoiceString, humanChoiceString){
    if (computerChoiceString === "rock" && humanChoiceString === "scissors"){
        computerScore++;
    return "You lose!";
}
else if (computerChoiceString === "rock" && humanChoiceString === "paper"){
    humanScore++;
    return "You win!";
}
else if (computerChoiceString === "rock" && humanChoiceString === "rock"){
    return "Draw!";
}
else if (computerChoiceString === "paper" && humanChoiceString === "scissors"){
    humanScore++;
    return "You win!";
}
else if (computerChoiceString === "paper" && humanChoiceString === "paper"){
    return "Draw!";
}
else if (computerChoiceString === "paper" && humanChoiceString === "rock"){
    computerScore++;
    return "You lose!";
}
else if (computerChoiceString === "scissors" && humanChoiceString === "scissors"){
    return "Draw!";
}
else if (computerChoiceString === "scissors" && humanChoiceString === "paper"){
    computerScore++;
    return "You lose!";
}
else if (computerChoiceString === "scissors" && humanChoiceString === "rock"){
    humanScore++;
    return "You win!";
}
}


console.log(result(computerChoiceString, humanChoiceString))
console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`)

function getComputerChoice2(max){
    return Math.floor(Math.random() * max); 
}

let computerChoice2 = getComputerChoice2(3)

function computerOutput2(computerChoice2){
    if (computerChoice2 === 0){
    return "rock"}
else if (computerChoice2 === 1){
    return "paper"}
else if (computerChoice2 === 2){
    return "scissors"}
}

let computerChoiceString2 = computerOutput2(computerChoice2)


let getHumanChoice2 = prompt("Please choose rock, paper or scissors.")

function transform(getHumanChoice2){
    return getHumanChoice2.toLowerCase()
}

let humanChoiceString2 = transform(getHumanChoice2)

function result(computerChoiceString2, humanChoiceString2){
    if (computerChoiceString2 === "rock" && humanChoiceString2 === "scissors"){
        computerScore++;
    return "You lose!";
}
else if (computerChoiceString2 === "rock" && humanChoiceString2 === "paper"){
    humanScore++;
    return "You win!";
}
else if (computerChoiceString2 === "rock" && humanChoiceString2 === "rock"){
    return "Draw!";
}
else if (computerChoiceString2 === "paper" && humanChoiceString2 === "scissors"){
    humanScore++;
    return "You win!";
}
else if (computerChoiceString2 === "paper" && humanChoiceString2 === "paper"){
    return "Draw!";
}
else if (computerChoiceString2 === "paper" && humanChoiceString2 === "rock"){
    computerScore++;
    return "You lose!";
}
else if (computerChoiceString2 === "scissors" && humanChoiceString2 === "scissors"){
    return "Draw!";
}
else if (computerChoiceString2 === "scissors" && humanChoiceString2 === "paper"){
    computerScore++;
    return "You lose!";
}
else if (computerChoiceString2 === "scissors" && humanChoiceString === "rock"){
    humanScore++;
    return "You win!";
}
}


console.log(result(computerChoiceString2, humanChoiceString2))
console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`)

function getComputerChoice3(max){
    return Math.floor(Math.random() * max); 
}

let computerChoice3 = getComputerChoice3(3)

function computerOutput3(computerChoice3){
    if (computerChoice3 === 0){
    return "rock"}
else if (computerChoice3 === 1){
    return "paper"}
else if (computerChoice3 === 2){
    return "scissors"}
}

let computerChoiceString3 = computerOutput3(computerChoice3)


let getHumanChoice3 = prompt("Please choose rock, paper or scissors.")

function transform(getHumanChoice3){
    return getHumanChoice3.toLowerCase()
}

let humanChoiceString3 = transform(getHumanChoice3)

function result(computerChoiceString3, humanChoiceString3){
    if (computerChoiceString3 === "rock" && humanChoiceString3 === "scissors"){
        computerScore++;
    return "You lose!";
}
else if (computerChoiceString3 === "rock" && humanChoiceString3 === "paper"){
    humanScore++;
    return "You win!";
}
else if (computerChoiceString3 === "rock" && humanChoiceString3 === "rock"){
    return "Draw!";
}
else if (computerChoiceString3 === "paper" && humanChoiceString3 === "scissors"){
    humanScore++;
    return "You win!";
}
else if (computerChoiceString3 === "paper" && humanChoiceString3 === "paper"){
    return "Draw!";
}
else if (computerChoiceString3 === "paper" && humanChoiceString3 === "rock"){
    computerScore++;
    return "You lose!";
}
else if (computerChoiceString3 === "scissors" && humanChoiceString3 === "scissors"){
    return "Draw!";
}
else if (computerChoiceString3 === "scissors" && humanChoiceString3 === "paper"){
    computerScore++;
    return "You lose!";
}
else if (computerChoiceString3 === "scissors" && humanChoiceString3 === "rock"){
    humanScore++;
    return "You win!";
}
}


console.log(result(computerChoiceString3, humanChoiceString3))
console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`)

function getComputerChoice4(max){
    return Math.floor(Math.random() * max); 
}

let computerChoice4 = getComputerChoice4(3)

function computerOutput4(computerChoice4){
    if (computerChoice4 === 0){
    return "rock"}
else if (computerChoice4 === 1){
    return "paper"}
else if (computerChoice4 === 2){
    return "scissors"}
}

let computerChoiceString4 = computerOutput4(computerChoice)


let getHumanChoice4 = prompt("Please choose rock, paper or scissors.")

function transform(getHumanChoice4){
    return getHumanChoice4.toLowerCase()
}

let humanChoiceString4 = transform(getHumanChoice4)

function result(computerChoiceString4, humanChoiceString4){
    if (computerChoiceString4 === "rock" && humanChoiceString4 === "scissors"){
        computerScore++;
    return "You lose!";
}
else if (computerChoiceString4 === "rock" && humanChoiceString4 === "paper"){
    humanScore++;
    return "You win!";
}
else if (computerChoiceString4 === "rock" && humanChoiceString4 === "rock"){
    return "Draw!";
}
else if (computerChoiceString4 === "paper" && humanChoiceString4 === "scissors"){
    humanScore++;
    return "You win!";
}
else if (computerChoiceString4 === "paper" && humanChoiceString4 === "paper"){
    return "Draw!";
}
else if (computerChoiceString4 === "paper" && humanChoiceString4 === "rock"){
    computerScore++;
    return "You lose!";
}
else if (computerChoiceString4 === "scissors" && humanChoiceString4 === "scissors"){
    return "Draw!";
}
else if (computerChoiceString4 === "scissors" && humanChoiceString4 === "paper"){
    computerScore++;
    return "You lose!";
}
else if (computerChoiceString4 === "scissors" && humanChoiceString4 === "rock"){
    humanScore++;
    return "You win!";
}
}


console.log(result(computerChoiceString4, humanChoiceString4))
console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`)

function getComputerChoice5(max){
    return Math.floor(Math.random() * max); 
}

let computerChoice5 = getComputerChoice5(3)

function computerOutput5(computerChoice5){
    if (computerChoice5 === 0){
    return "rock"}
else if (computerChoice5 === 1){
    return "paper"}
else if (computerChoice5 === 2){
    return "scissors"}
}

let computerChoiceString5 = computerOutput(computerChoice5)


let getHumanChoice5 = prompt("Please choose rock, paper or scissors.")

function transform(getHumanChoice5){
    return getHumanChoice5.toLowerCase()
}

let humanChoiceString5 = transform(getHumanChoice5)


function result(computerChoiceString5, humanChoiceString5){
    if (computerChoiceString5 === "rock" && humanChoiceString5 === "scissors"){
        computerScore++;
    return "You lose!";
}
else if (computerChoiceString5 === "rock" && humanChoiceString5 === "paper"){
    humanScore++;
    return "You win!";
}
else if (computerChoiceString5 === "rock" && humanChoiceString5 === "rock"){
    return "Draw!";
}
else if (computerChoiceString5 === "paper" && humanChoiceString5 === "scissors"){
    humanScore++;
    return "You win!";
}
else if (computerChoiceString5 === "paper" && humanChoiceString5 === "paper"){
    return "Draw!";
}
else if (computerChoiceString5 === "paper" && humanChoiceString === "rock"){
    computerScore++;
    return "You lose!";
}
else if (computerChoiceString5 === "scissors" && humanChoiceString5 === "scissors"){
    return "Draw!";
}
else if (computerChoiceString5 === "scissors" && humanChoiceString5 === "paper"){
    computerScore++;
    return "You lose!";
}
else if (computerChoiceString5 === "scissors" && humanChoiceString5 === "rock"){
    humanScore++;
    return "You win!";
}
}


console.log(result(computerChoiceString5, humanChoiceString5))
console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`)

if (humanScore > computerScore){
    console.log("Congratulations! You win!")
} else if (humanScore < computerScore){
    console.log("You have been defeated!")
} else {
    console.log("It's a draw!")
}