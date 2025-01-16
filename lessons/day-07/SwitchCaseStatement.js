const readLine = require('readline-sync');

let userNum = getUserNumber();

switch (userNum) {
    case 2: 
    case 3: 
    case 4:
    case 5:
    case 6:
        console.log("Weekdays");
        break; 
    case 7:
    case 8:
        console.log("Weekends");
        break;
    default:
        console.log("Invalid number");
}