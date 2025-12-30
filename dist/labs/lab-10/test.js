"use strict";
function removeDuplicates(nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            k++;
        }
    }
    return k;
}
let nums = [1, 1, 2];
removeDuplicates(nums);
//# sourceMappingURL=test.js.map