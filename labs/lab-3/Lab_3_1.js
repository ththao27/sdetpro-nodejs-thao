/*
Count how many odd, even number(s) in an integer array
let intArr = [1, 2, 3, 4, 5];
Even numbers: 2
Odd numbers: 3
*/

let intArr = [1, 2, 3, 4, 5];
let evenNumbers = 0;
let oddNumbers = 0;

for (let i = 0; i < intArr.length; i++){
    if (intArr[i] % 2 === 0){
        evenNumbers++;
    } else {
        oddNumbers++;
    }
}

console.log(`Even numbers: ${evenNumbers}`);
console.log(`Odd numbers: ${oddNumbers}`);