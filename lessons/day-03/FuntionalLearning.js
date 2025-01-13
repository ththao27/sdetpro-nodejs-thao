// DRY: Don't Repeat Yourself
// Single Responsibility: Tính đơn nhiệm
// Clean code


// Declare a function
// Method 01: [ Function declaration ] method | hoisting
let userInputNum = getUserInputNum();
let inputNumber = convertToNumber(userInputNum);
evaluateEvenOrOddNumber(inputNumber);


function getUserInputNum(){
    const readline = require('readline-sync');
    let inputNum = readline.question('Your num: ');
    return inputNum;
}


function convertToNumber(str){
    return Number(str);
}

function evaluateEvenOrOddNumber(num){
}


let returnedValue = functionName();
function functionName(){
    return 1;
}
// Method 02: [ Function Expression ] method | NO hoisting
const addNumber = function(firstNum, secondNum){ 
    return firstNum + secondNum;
}

let sum = addNumber(1, 2);
console.log(typeof addNumber);