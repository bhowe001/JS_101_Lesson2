const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function prompt(message) {
  console.log(`=> ${message}`);
}

let userScore = 0;
let computerScore = 0;

function introStatementsAndRules (choice) {
  console.log("This is Dr. Sheldon Cooper. I challenge you to a duel of greatness.");
  prompt("Would you like to know the rules of the game?");
  return (choice === 'y' || choice === 'yes');
}

function playerWins(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  return ((choice === 'scissors' && computerChoice === 'paper') ||
  (choice === 'paper' && computerChoice === 'rock') ||
  (choice === 'rock' && computerChoice === 'lizard') ||
  (choice === 'lizard' && computerChoice === 'spock') ||
  (choice === 'spock' && computerChoice === 'scissors') ||
  (choice === 'scissors' && computerChoice === 'lizard') ||
  (choice === 'lizard' && computerChoice === 'paper') ||
  (choice === 'paper' && computerChoice === 'spock') ||
  (choice === 'spock' && computerChoice === 'rock') ||
    (choice === 'rock' && computerChoice === 'scissors'));
}

function displayWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    prompt('You win!');
    userScore += 1;
  } else if (choice === computerChoice) {
    prompt("It's a tie");
  } else {
    prompt("Computer wins!");
    computerScore += 1;
  }
}

const winningScore = 3;

console.clear();
const userChoice = function() {
  prompt(`Choose one (${VALID_CHOICES.join(', ')})`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }
};

while (true) {

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (yes/no)?');
  let answer = readline.question().toLowerCase();

  if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
    console.clear();
    continue;
  } else if (answer.toLowerCase() === 'n' || answer.toLowerCase() === 'no') {
    console.log("Thanks for playing. See you next time!");
    break;
  } else {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  if ((userScore === 3) && (userScore > computerScore)) {
    prompt("UserMatch");
    break;
  } else if ((computerScore === 3) && (computerScore > userScore)) {
    prompt("ComputerMatch");
    break;
  }

  if (displayWinner(userScore === winningScore)) {
    userScore += 1;
    prompt("Congratulations! You reached 3 points and won the match!");
  } else if (computerScore === winningScore) {
    prompt("The Computer reached 3 points and won the match. Game over.");
    computerScore += 1;
  }
}