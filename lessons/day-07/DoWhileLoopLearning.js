const readLine = require('readline-sync');

let guessingTime = 0;
const randomNumber = generateRandomNumber();
do {
  let userNum = getUserNumber();
  if (userNum === randomNumber) {
    // Congratulate user
    break;
  }
} while (guessingTime < 3);

if (guessingTime === 3) {
  console.log('You lose');
} else {
  console.log('See you again!');
}

function getUserNumber() {
  return Number(readLine.question('Your number: '));
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}
