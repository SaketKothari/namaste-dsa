const missingNumber = (nums) => {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;

  let partialSum = 0;
  for (let i = 0; i < n; i++) {
    partialSum = partialSum + nums[i];
  }

  return totalSum - partialSum;
};

const nums = [3, 0, 1];
const result = missingNumber(nums);
console.log("Output:", result);

const nums2 = [0, 1];
const result2 = missingNumber(nums2);
console.log("Output:", result2);

const nums3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const result3 = missingNumber(nums3);
console.log("Output:", result3);

// Time Complexity = O(n)
// Space Complexity = O(1)
