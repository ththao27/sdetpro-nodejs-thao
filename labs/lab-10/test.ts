function removeDuplicates(nums: number[]): number {
  let k: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      k++;
    }
  }
  return k;
}
let nums: number[] = [1, 1, 2];

removeDuplicates(nums);
