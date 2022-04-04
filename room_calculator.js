
let readline = require('readline-sync');

function prompt(message) {
  console.log(`${message}`);
}

function invalidNumber(number) {
  return number.trim() === '' ||
  Number.isNaN(Number(number));
}

console.clear();

prompt("Welcome to the Room Calculator!");

while (true) {

  const METERS_TO_SQFEET = 10.7639;

  let length = parseFloat(readline.question('Step 1: Enter the length of the room in meters:\n'));

  while (invalidNumber(length)) {
    prompt("Please enter a valid number.");
    length = readline.question();
  }
  let width = parseFloat(readline.question('Step 2: Enter the width of the room in meters:\n'));

  while (invalidNumber(width)) {
    prompt("Please enter a valid number.");
    width = readline.question();

    let area = length * width;
    let areaSqFeet = area * METERS_TO_SQFEET;

    console.log(`The area of the room is ${area.toFixed(2)} square meters (${areaSqFeet.toFixed(2)} square feet)`);

    prompt("Would you like to calculate another room?");
    let answer = readline.question();

    if (answer[0].toLowerCase() === 'y') {
      console.clear();
      continue;
    } else if (answer[0].toLowerCase() === 'n') {
      console.log("Thank you for using the Room Calculator!");
      console.log("\nCreated by Brianna Howell, in February 2022.\nModified on April 1, 2022");
      break;
    }
  }
}