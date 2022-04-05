// DESCRIPTION
// This code calculates the area of a room in square feet.

// PROBLEMS
// Code accepts non-numeric inputs and calculates as NaN.

// SOLUTIONS
// Refactor code to throw errors when non-numeric inputs are entered.
// Issue is within the invalidNumber function.
// The issue is specific to the .trim() method within invalidNumber function.
// The .trim() method is throwing a TypeError because .trim() is for strings.
// See tip_calculator.js, loan_calculator.js, or rps_lizard_spock.js
// to see the invalidNumber function working properly in those contexts.


let readline = require('readline-sync');

function prompt(message) {
  console.log(`${message}`);
}

//function invalidNumber(input) {
//return input.trim() === '' ||
//Number.isNaN(Number(input));
//}
console.clear();

prompt("Welcome to the Room Calculator!");

while (true) {

  const METERS_TO_SQFEET = 10.7639;

  prompt("Step 1: Enter the length of the room in meters:");
  let length = parseFloat(readline.question());

  //while (invalidNumber(length)) {
  //prompt("Please enter a valid number.");
  //length = readline.question();
  //}

  prompt("Step 2: Enter the width of the room in meters:");
  let width = parseFloat(readline.question());

  //while (invalidNumber(width)) {
  //prompt("Please enter a valid number.");
  //width = readline.question();

  let area = length * width;
  let areaSqFeet = area * METERS_TO_SQFEET;

  console.log(`The area of the room is ${area.toFixed(2)} square meters (${areaSqFeet.toFixed(2)} square feet)`);

  prompt("\nWould you like to calculate another room?");
  prompt("Answer: ex. 'yes' or 'no'");
  let answer = readline.question();

  if (answer[0].toLowerCase() === 'y') {
    console.clear();
    continue;
  } else if (answer[0].toLowerCase() === 'n') {
    console.clear();
    console.log("\nThank you for using the Room Calculator!");
    console.log("\nCreated by Brianna Howell, in February 2022.\nModified on April 1, 2022\n");
    break;
  }
}

