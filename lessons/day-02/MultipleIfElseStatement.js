/**
 * < 18: Khong ban!
 * 18 -> 55: Unlimited!
 * 56 -> : 2 chai.
 */

const readline = require('readline-sync');
let clientAge = Number(readline.question('Your age: '))

/**
 * isAgeInRange = clientAge >= 18 && clientAge <= 55;
 * isStateEligible = true;
 * isAgeInRange = ;
 */

if (clientAge < 18){
    console.log("Khong ban!");
    //Nested conditional statement
    if (clientAge < 14){
        console.log("Calling 911");
    }
} else if (clientAge <= 55){
    console.log("Unlimited");
} else {
    console.log("2 chai");
}