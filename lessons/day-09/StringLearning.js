let myString = `Day la chu trong 'nhay don'`;
let myString1 = `Day la chu trong \`nhay don\``;

// length
console.log(myString.length);

// chartArt
console.log(myString.chartAt(0));

// Inclusive
let startIndex = 0;

// Exclusive
let endIndex = 5;

let subString = myString.slice(startIndex, endIndex);
