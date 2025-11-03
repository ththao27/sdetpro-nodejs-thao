class MethodOverLoading {
  static add(a, b) {
    return a + b;
  }

  static add(a, b, c) {
    return a + b + c;
  }

  // Rest  parameters: những tham số còn lại
  static add(factor, ...nums) {
    // nhận vô một array của tất cả các tham số
    return nums.map(num => num * factor);
  }
}

const result = MethodOverLoading.add(1, 2);

console.log(result);

class ArrayHelper {
  static filterNumber(array, isEven) {
    if (isEven) {
      return array.filter(num => num % 2 === 0);
    } else {
      return array.filter(num => num % 2 !== 0);
    }
  }
}

let targetArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isEven = true;
const evenNumbers = ArrayHelper.filterNumber(targetArray, isEven);
