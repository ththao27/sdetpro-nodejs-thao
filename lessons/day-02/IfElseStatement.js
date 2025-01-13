/**
 * 1. In the root dir: npm init -y
 * 2. npm i readline-sync
 */

const readline = require('readline-sync');

let arrivalTime = readline.question('Arrival Time: ');
let isHeOnTime = (Number(arrivalTime == 7));

// >, <, >=, <=, ==, ===, !=, !== 
// !: to convert a bolean value

if (isHeOnTime) {
    console.log("Let's talk!");
} else {
    console.log("Write a letter...");
}

if (!isHeOnTime) {
    console.log("Write a letter...");
} else {
    console.log("Let's talk!");
}

// Ternary Operator: Toán tử 3 ngôi
let msg = isHeOnTime ? "Let's talk" : "Write a letter...";
console.log(msg);