
// Welcome user to the loan calculator.
// Ask the user for the loan amount.
// Ask the user for the interest rate.
// Ask the user for the loan duration in months.
// Perform the calculation based on the four inputs.
// Print the monthly payment amount to the terminal.
// Ask the user if they would like to calculate another loan.
// Repeat or terminate the program with a message.

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trim() === '' ||
  Number.isNaN(Number(number));
}

prompt('Welcome to the Loan Calculator!');

while (true) {

  prompt("Please enter the loan amount");
  let loanAmmt = readline.question();

  while (invalidNumber(loanAmmt)) {
    prompt("Please enter a valid number.");
    loanAmmt = readline.question();
  }

  prompt('Now enter the monthly interest rate');
  prompt("Ex: 5 = 5% or 2.5 = 2.5%");
  let interestRate = readline.question();

  while (invalidNumber(interestRate)) {
    prompt("Please enter a valid number.");
    interestRate = readline.question();
  }

  prompt('Please enter the loan duration in years');
  let loanDuration = readline.question();

  while (invalidNumber(loanDuration)) {
    prompt("Please enter a valid number.");
    loanDuration = readline.question();
  }

  let annualRate = Number(interestRate) / 100;
  let monthlyRate = annualRate / 12;
  let months = Number(loanDuration) * 12;

  let monthlyPayment = Number(loanAmmt) *
    (monthlyRate /
    (1 - Math.pow((1 + monthlyRate), (-Number(months)))));

  let result = parseFloat(monthlyPayment).toFixed(2);

  console.log(`The result is: $${result}`);

  prompt('Would you like to perform another calculation? (y/n)');
  let answer = readline.question();

  if (answer[0].toLowerCase() === 'y') {
    continue;
  } else {
    console.log("Thank you for using the Loan Calculator!");
    break;
  }
}