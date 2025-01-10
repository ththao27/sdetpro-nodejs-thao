/*
Merge 2 SORTED integer array into one SORTED array
Array 01: [1, 12, 16, 28, 34]
Array 02: [1, 13, 16, 27, 99]
Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]
*/

// Nếu length của 2 array bằng nhau

let arr1 = [1, 12, 16, 28, 34];
let arr2 = [1, 13, 16, 27, 99];
let mergedArr = [];

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] <= arr2[i]) {
        mergedArr.push(arr1[i]);
        mergedArr.push(arr2[i]);
    } else {
        mergedArr.push(arr2[i]);
        mergedArr.push(arr1[i]);
    }
}

console.log(mergedArr);