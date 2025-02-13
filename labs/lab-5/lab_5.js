/*
**
 * Given string: Hello ban, tui ten Teo, ban cung cung ten Teo luon ah
 * --> output:
 * Hey: 1
 * ban: 2
 * tui: 1
 * ten: 2
 * Teo: 2
 * ...

Please solve the exercise for countWords by using object, not a Map (do NOT use Object.entries() method to get a map)
The program need to allow user to input a sentence, not hard code (optional)

*/

const readline = require('readline-sync');

let sentence = getString();
let individualWords = sentence.replace(/,/gi, '').split(' ');

// Main program
printCountWords(countWord(individualWords));

// Support functions

function getString() {
    return readline.question('Please enter a sentence: ');
}

function countWord(words) {
    let countWords = {};
    for (let word of words) {
        countWords[word] = (countWords[word] ?? 0) + 1;
    }
    return countWords;
}

function printCountWords(countWords) {
    console.log('Count words: ');
    for (let word in countWords) {
        console.log(`* ${word}: ${countWords[word]}`);
    }
}