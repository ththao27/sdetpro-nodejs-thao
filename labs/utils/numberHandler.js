
function isEvenNumber (number) {
    return number % 2 === 0;
}

function isNumberInput (input) {
    return typeof input === "number" && !isNaN(input);
}
module.exports = {
    isEvenNumber,
    isNumberInput,
}