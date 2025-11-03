// CREATE
const emergencyList = new Map([
  ['113', 'Police Dept'], // đây là 1 entry: có 1 key và value
  ['114', 'Fire Dept'], // key trong map là unique
  ['115', 'Hospital'], // nếu bộ dữ liệu chỉ có key - value đơn giản thì chỉ cần dùng object
  ['116', 'Others'], // giải thích lượng data lớn -> cần tìm kiếm -> map giải quyết tốt hơn
]);

// Time complexity: O(n)

// READ value
emergencyList.get('113'); // get value by key

// check if key is existing
const is117Existing = emergencyList.has('117');

// Loop over all keys then get the values out
for (const key of emergencyList.keys()) {
  console.log(`${key}: ${emergencyList.get(key)}`);
}

// Loop over all values without using keys
for (const value of emergencyList.values()) {
  console.log(value);
}

// UPDATE/ADD
emergencyList.set('116', 'Others');

// DELETE
emergencyList.delete('116');
