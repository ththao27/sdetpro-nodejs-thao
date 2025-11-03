/*
Get input from user about height(m) and weight(kg) then calculate BMI

Underweight: <18.5
Normal weight: 18.5 – 24.9
Overweight: 25–29.9
Obesity: BMI of 30 or greater
BMI = weight / (height x height)
*/

const readLine = require('readline-sync');
let height = Number(readLine.question('Your height(m): '));
let weight = Number(readLine.question('Your weight(kg): '));
let BMI = weight / (height * height);
console.log(`Your BMI is ${BMI}`);

if (BMI < 18.5) {
  console.log("You're underweight");
} else if (BMI <= 24.9) {
  console.log("You're normal");
} else {
  let status = BMI <= 29.9 ? 'overweight' : 'obese';
  console.log(`You're ${status}`);
}
