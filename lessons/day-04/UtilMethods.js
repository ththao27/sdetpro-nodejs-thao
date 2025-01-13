// Support function
// Service function - Utility Functions

// 3: argument

// number: parameter
function isEvenNumber(number){
    // Details implementation | implementation
    return number % 2 === 0;
}

// number: parameter before call, should declare
const  isOddNumber = function(number){
    //return number % 2 !== 0;
    return number++;
}

// Common JS Module
module.exports = { 
    ti: isEvenNumber, 
    teo: isOddNumber }