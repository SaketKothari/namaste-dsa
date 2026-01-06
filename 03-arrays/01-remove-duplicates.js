const removeDuplicates = (nums) => {
  let uniqueIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[uniqueIndex]) {
      uniqueIndex++;
      nums[uniqueIndex] = nums[i];
    }
  }

  return uniqueIndex + 1;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log("Input: ", [...nums]);
const result = removeDuplicates(nums);
console.log("Output:", result);
console.log("Modified Array:", nums.slice(0, result));

// Time Complexity: O(n)  - n is nums.length
// Space Complexity: O(1) - Constant Extra Space
