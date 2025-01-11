/*
Count how many odd, even number(s) in an integer array
let intArr = [1, 2, 3, 4, 5];
Even numbers: 2
Odd numbers: 3
*/
const UtilMethods = require('../UtilMethods');

let intArr = [1, 2, 3, 4, 5];
let evenNumbers = 0;
let oddNumbers = 0;

for (let i = 0; i < intArr.length; i++){
    if (UtilMethods.isEvenNumber(intArr[i])) {
        evenNumbers++;
    } else {
        oddNumbers++;
    }
}

console.log(`Even numbers: ${evenNumbers}`);
console.log(`Odd numbers: ${oddNumbers}`);