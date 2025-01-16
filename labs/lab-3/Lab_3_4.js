/*
Merge 2 SORTED integer array into one SORTED array
Array 01: [1, 12, 16, 28, 34]
Array 02: [1, 13, 16, 27, 99]
Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]
*/

// Nếu length của 2 array không bằng nhau, dùng for nếu biết trước length của 2 array

let arr1 = [1, 12, 16, 28, 34];
let arr2 = [1, 13, 16, 27, 99];
let mergedArr = [];
let i = 0, j =0;

while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
        mergedArr.push(arr1[i]);
        mergedArr.push(arr2[j]);
        i++;
        j++;
    } else {
        mergedArr.push(arr2[j]);
        mergedArr.push(arr1[i]);
        i++;
        j++;
    }
}

while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
}
while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
}
console.log(mergedArr);


// bài sửa
let foo = [1, 12, 16, 28, 34];
let bar = [1, 13, 16, 27, 99];

let merged = [];

while (fooArrayStillHaveElement && barArrayStillHaveElement) {
    const fooValue = foo[fooPosition];
    const barValue = bar[barPosition];
    if (fooValue <= barValue) {
        merged.push(fooValue);
        fooPosition++;
    } else {
        merged.push(barValue);
        barPosition++;
    }
}

while (fooArrayStillHaveElement) {
    merged.push(foo[fooPosition]);
    fooPosition++;
}

while (barArrayStillHaveElement) {
    merged.push(bar[barPosition]);
    barPosition++;
}
