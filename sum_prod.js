// Write a program that asks the user to enter an integer greater than 0,
// then asks whether the user wants to determine the sum or the product
//of all numbers between 1 and the entered integer, inclusive.

// INPUTS: integer greater than 0
//         choice of sum or product
// OUTPUT: sum or the product of all numbers between 1 and the integer

// EXPLICIT RULES:
// - the input must be a number
// - the input must be an integer greater than 0
// - the program is inclusive, so the sum or product must include the integer
// - return the result of the sum or product of the integer
//   based on what the user chose.

// IMPLICIT RULES:
// - the user must be given an option to determine the sum or product of
//   all numbers between 1 and the integer selected
// - throw an error when an input other than an integer
//   (string, empty string, undefined, etc.) is entered.

// EXAMPLES AND TEST CASES:

// #1
// Please enter an integer greater than 0:
// 5
// Enter "s" to compute the sum, or "p" to compute the product.
// s

// The sum of the integers between 1 and 5 is 15.

// #2
// Please enter an integer greater than 0:
// 6
// Enter "s" to compute the sum, or "p" to compute the product.
// p

// The product of the integers between 1 and 6 is 720.

// DATA STRUCTURES:
// the input is an integer, and the output is the sum or product of all
// of the numbers between 1 and the integer.

// ALGORITHM:
// Initialize the readline-sync function.
// Create a prompt function that logs prompts to the console when
// the function is invoked.
// Create a function that throws an error if the first input is not an integer.
// Create a function that throws an error if the second input is not
// a string that includes "s", "p", "sum", or "product".
// Create a loop that repeats the program in case the user would
// like to calculate another integer.
// Create a greeting prompt
// Create a prompt that asks users to input an integer
// Initialize a variable to store the integer in.
// Create a prompt that asks users if they would like to calculate
// the sum or the product of the numbers between 1 and the integer.
// Create a condition that calculates the variable by the selected operation.
// Initialize a result variable that stores the sum or product.
// Return the result.

// CURRENT ISSUES:
// Invalid inputs during the chooseOperation and startOver questions
// restart the program and loop back to the first prompt.
// Invalid inputs return "That's not a valid choice."
// Entering a correct or invalid input then restarts the program automatically
// The program says "Please enter an integer greater than 0."
// Program should loop at the chooseOperation and startOver questions
// until a valid input is entered.
// The issue is specific to the else clause within the startOver if statement

// CODE:

const READLINE = require('readline-sync');
// const OPERATION_CHOICES = ['s', 'sum', 'p', 'product'];
//const CONTINUE_CHOICES = ['s', 'sum', 'p', 'product'];

function computeSum(targetNum) {
  let total = 0;

  for (let num = 1; num <= targetNum; num += 1) {
    total += num;
  }
  return total;
}

function computeProduct(targetNum) {
  let total = 1;

  for (let num = 1; num <= targetNum; num += 1) {
    total *= num;
  }
  return total;
}

function prompt(message) {
  console.log(`${message}`);
}

// function invalidNumber(number) {
//   return number.trim() === '' ||
//          Number(number) <= 0   ||
//          Number.isNaN(Number(number));
// }

console.clear();

prompt("Welcome to the Sum or Product Calculator!");

while (true) {

  prompt("Please enter an integer greater than 0:");
  let integer = READLINE.question();

  // while (invalidNumber(integer)) {
  //   prompt("Please enter a valid number.");
  //   integer = READLINE.question();
  // }

  prompt(`Would you like to calculate the sum or product of the numbers between 1 and ${integer}?`);
  prompt("Enter 's', or 'sum' to calculate the sum; 'p', or 'product' to calculate the product");
  let chooseOperation = READLINE.question().toLowerCase();

  if (chooseOperation.toLowerCase() === 's' || chooseOperation.toLowerCase() === 'sum') {
    let sum = computeSum(integer);
    console.log(`\nThe sum of the integers between 1 and ${integer} is ${sum}.\n`);
  } else if (chooseOperation.toLowerCase() === 'p' || chooseOperation.toLowerCase() === 'product') {
    let product = (computeProduct(integer).toFixed(2));
    console.log(`\nThe product of the integers between 1 and ${integer} is ${product}\n`);
  } else {
    // (chooseOperation !== OPERATION_CHOICES.includes());
    console.log("That's not a valid choice");
    break;
  }

  // while (!OPERATION_CHOICES.includes(chooseOperation)) {
  //   prompt("That's not a valid input, please enter again");
  //   chooseOperation = READLINE.question();
  //}

  prompt('Would you like to calculate the sum or product of another integer? (y/n)');
  let startOver = READLINE.question();

  if (startOver.toLowerCase() === 'y' || startOver.toLowerCase() === 'yes') {
    console.clear();
    continue;
  } else if (startOver.toLowerCase() === 'n' || startOver.toLowerCase() === 'no') {
    console.clear();
    console.log("\nThank you for using the Sum or Product Calculator. See you next time!");
    console.log("\nCreated by Brianna Howell, in February 2022.\nModified on April 5, 2022\n");
    break;
  }
}