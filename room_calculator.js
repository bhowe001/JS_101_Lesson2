// DESCRIPTION
// This code calculates the area of a room in square feet.

// CURRENT ISSUES & POTENTIAL SOLUTIONS:
// invalidNumber rejects non-numeric inputs and numbers less than or equal to 0.
// Code now enters infinite loop after the second prompt
// The issue appeared after the invalidNumber function was refactored
// When
// See tip_calculator.js, loan_calculator.js, or rps_lizard_spock.js
// to see the invalidNumber function working properly in those contexts.


const READLINE = require('readline-sync');

function prompt(message) {
  console.log(`${message}`);
}

function invalidNumber(number) {
  return Number(number) <= 0   ||
         Number.isNaN(Number(number));
}

console.clear();

prompt("Welcome to The Room Calculator!");

while (true) {

  const METERS_TO_SQFEET = 10.7639;

  prompt("Step 1: Enter the length of the room in meters:");
  let length = READLINE.question();

  while (invalidNumber(length)) {
    prompt("Please enter a valid number.");
    length = READLINE.question();
  }

  prompt("Step 2: Enter the width of the room in meters:");
  let width = READLINE.question();

  while (invalidNumber(width)) {
    prompt("Please enter a valid number.");
    width = READLINE.question();

    let area = length * width;
    let areaSqFeet = area * METERS_TO_SQFEET;

    console.log(`The area of the room is ${area.toFixed(2)} square meters (${areaSqFeet.toFixed(2)} square feet)`);

    prompt("\nWould you like to calculate another room?");
    prompt("Answer: 'yes' or 'y' to continue; 'no' or 'n' to terminate.");
    let answer = READLINE.question();

    if (answer[0].toLowerCase() === 'y') {
      console.clear();
      continue;
    } else if (answer[0].toLowerCase() === 'n') {
      console.clear();
      console.log("\nThank you for using The Room Calculator!");
      console.log("\nCreated by Brianna Howell, in February 2022.\nModified on April 5, 2022\n");
      break;
    }
  }
}
