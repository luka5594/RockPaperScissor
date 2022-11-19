let computerChoice = ["rock", "paper", "scissor"];
let computerPoint = 0;
let userPoint = 0;

function playRound() {
let getComputerChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
let userChoice = prompt("Rock, Paper or Scissor?").toLowerCase();
if (typeof userChoice === "string"){
   if (getComputerChoice == userChoice) {
    console.log("Same play: tie")
  } else if (getComputerChoice == "rock" && userChoice == "paper") {
    userPoint++;
    console.log("You win, paper beats rock")
  } else if (getComputerChoice == "paper" && userChoice == "rock") {
    computerPoint++
    console.log("You lose, paper beats rock")
  } else if (getComputerChoice == "scissor" && userChoice == "rock") {
    userPoint++;
    console.log("You win, rock beats scissor")
  } else if (getComputerChoice == "rock" && userChoice == "scissor") {
    computerPoint++;
    console.log("You lose, rock beats scissor")
  } else if (getComputerChoice == "scissor" && userChoice == "paper") {
    computerPoint++;
    console.log("You lose, scissor beats paper")
  } else if (getComputerChoice == "paper" && userChoice == "scissor") {
    userPoint++;
    console.log("You win, scissor beats paper")
  } else {
   console.log("Wrong input")
   }
  } else {
  console.log("Wrong input")
  }
  }
  function game(){
  for (let i = 0;i < 5; i++) {
  playRound()
  } console.log("Your score: " + userPoint + ",Computer score: " + computerPoint)
  if (computerPoint < userPoint) {
  console.log(" Congratulation you are the winner!!!")
  } else if (computerPoint === userPoint) {
  console.log("Good game, tie")
  } else if (computerPoint > userPoint) {
  console.log("I'm sorry, you lose")
  }
} game()