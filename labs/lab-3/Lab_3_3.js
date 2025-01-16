/* 
Sort an integer array from min to max
Input: [12, 34, 1, 16, 28]
Expected output: [1, 12, 16, 28, 34]
*/
let intArr = [12, 34, 1, 16, 28];

for (let i = 0; i < intArr.length; i++) {
    for (let j = i + 1; j < intArr.length; j++) {
        if (intArr[i] > intArr[j]) {
            let temp = intArr[i];
            intArr[i] = intArr[j];
            intArr[j] = temp;
        }
    }
}

console.log(intArr);


// Bài sửa: dùng bubble sort

unsortedPosition = array.lenght - 1;

for (; unsortedPosition > 0; unsortedPosition--) {
    for (let index = 0; index < unsortedPosition; index++) {
        const leftValue = array[index];
        const rightValue = array[index + 1];
        if (leftValue > rightValue) {
            swap(array, index);
        }
    }
}

function swap(array, index) {
    let temp = array[index];
    array[index] = array[index + 1];
    array[index + 1] = temp;
}