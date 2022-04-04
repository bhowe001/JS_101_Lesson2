let rlSync = require("readline-sync");

const validChoice = {
  1: "Rock",
  2: "Paper",
  3: "Scissors",
  4: "Lizard",
  5: "Spock",
};

function prompt(message) {
  console.log(`=> ${message}`);
}

let userChoice;

const retrieveUserChoice = function () {
  prompt("Please choose 1: Rock, 2: Paper, 3: Scissors 4: Lizard 5: Spock");

  userChoice = Number(rlSync.question());

  while (!validChoice.hasOwnProperty(userChoice)) {
    prompt("This is not a correct input, try again ");
    userChoice = Number(rlSync.question());
  }

  prompt(`You choose ${validChoice[userChoice]}
  `);
};

let computerChoice;
let randomChoice;

const computerChoosing = function () {
  randomChoice = Math.floor(Math.random() * Object.keys(validChoice).length);

  computerChoice = validChoice[randomChoice + 1];

  prompt(`The computer chose ${computerChoice}
  `);
};

prompt(`Welcome to Rock Paper Scissors! 
`);

let userScore = 0;
let computerScore = 0;

let winLogic = function () {
  if (
    (userChoice === 1 && computerChoice === "Scissors") ||
    (userChoice === 1 && computerChoice === "Lizard") ||
    (userChoice === 2 && computerChoice === "Rock") ||
    (userChoice === 2 && computerChoice === "Spock") ||
    (userChoice === 3 && computerChoice === "Paper") ||
    (userChoice === 3 && computerChoice === "Lizard") ||
    (userChoice === 4 && computerChoice === "Spock") ||
    (userChoice === 4 && computerChoice === "Paper") ||
    (userChoice === 5 && computerChoice === "Rock") ||
    (userChoice === 5 && computerChoice === "Scissors")
  ) {
    prompt(`You win!
    `);
    userScore++;
  } else if (
    (userChoice === 1 && computerChoice === "Paper") ||
    (userChoice === 1 && computerChoice === "Spock") ||
    (userChoice === 2 && computerChoice === "Lizard") ||
    (userChoice === 2 && computerChoice === "Scissors") ||
    (userChoice === 3 && computerChoice === "Rock") ||
    (userChoice === 3 && computerChoice === "Spock") ||
    (userChoice === 4 && computerChoice === "Rock") ||
    (userChoice === 4 && computerChoice === "Scissors") ||
    (userChoice === 5 && computerChoice === "Lizard") ||
    (userChoice === 5 && computerChoice === "Paper")
  ) {
    prompt(`You lose!
    `);
    computerScore++;
  } else {
    prompt(`Tie!
    `);
  }
};

const winningScore = 3;

//The game

while (true) {
  retrieveUserChoice();

  computerChoosing();

  winLogic();

  if (userScore === winningScore) {
    prompt("The you have reached 3 points, you win!");

    prompt("Do you want to play again (y/n)?");
    let answer = rlSync.question().toLowerCase();

    while (answer !== "n" && answer !== "y") {
      prompt('Please enter "y" or "n".');
      answer = rlSync.question().toLowerCase();
    }

    if (answer === "n") {
      console.log("Thank you for playing!");
      break;
    } else if (answer === "y") {
      userScore = 0;
      computerScore = 0;
      console.clear();
    }
  } else if (computerScore === winningScore) {
    prompt("The computer has reached 3 points, you lose!");

    prompt("Do you want to play again (y/n)?");
    answer = rlSync.question().toLowerCase();

    while (answer !== "n" && answer !== "y") {
      prompt('Please enter "y" or "n".');
      answer = rlSync.question().toLowerCase();
    }

    if (answer === "n") {
      console.log("Thank you for playing!");
      break;
    } else if (answer === "y") {
      userScore = 0;
      computerScore = 0;
      console.clear();
    }
  }
}