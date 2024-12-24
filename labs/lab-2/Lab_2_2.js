//Allow user to input a number, print out it’s an odd or even number

const readLine = require('readline-sync');
let yourNumber = Number(readLine.question('Your number: '));
if(yourNumber % 2 === 0) {
    console.log("Your number is even");
} else {
    console.log("Your number is odd");
}