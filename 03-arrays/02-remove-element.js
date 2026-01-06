const removeElement = (nums, val) => {
  let secondPointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[secondPointer] = nums[i];
      secondPointer++;
    }
  }
  return secondPointer;
};

const nums = [3, 2, 2, 3];
console.log("Input: ", [...nums]);
const value = 3;
const result = removeElement(nums, value);
console.log("Output:", result);
console.log("Modified Array:", nums.slice(0, result));

// Time Complexity: O(n)
// Space Complexity: O(1)
