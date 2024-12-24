// Lab 2.1 + Suggest user to increase/decrease weight

const readLine = require('readline-sync');
let height = Number(readLine.question('Your height(m): '));
let weight = Number(readLine.question('Your weight(kg): '));
let BMI = (weight / (height * height)).toFixed(2);
console.log(`Your BMI is ${BMI}`);

function calculateWeight(bmiTarget, height) {
    return  (bmiTarget * (height * height)).toFixed(2);
}

if(BMI < 18.5) {
    let weightSuggest = calculateWeight(18.5, height);
    console.log(`You should gain at least ${(weightSuggest - weight).toFixed(2)} kg`);
} else if (BMI <= 24.9) {
    console.log(`You're normal`);
} else {
    let status = BMI <= 29.9 ? "overweight" : "obese";
    let weightSuggest = calculateWeight(24.9, height);
    console.log(`You're ${status}, you should lose at least ${(weight - weightSuggest).toFixed(2)} kg`);
}