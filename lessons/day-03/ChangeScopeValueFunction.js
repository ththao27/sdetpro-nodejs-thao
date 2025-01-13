let toBeChanged = 1;
let returnedValue = changeToBeChanged();

console.log(returnedValue);


function changeToBeChanged() {
    toBeChanged++;
}