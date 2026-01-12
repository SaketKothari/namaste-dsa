const maxConsecutiveOnes = (nums) => {
  let currentCount = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount++;
    } else {
      maxCount = Math.max(currentCount, maxCount);
      currentCount = 0;
    }
  }
  return Math.max(currentCount, maxCount);
};

const nums = [1, 1, 0, 1, 1, 1];
const result = maxConsecutiveOnes(nums);
console.log("Output:", result);

const nums2 = [1, 0, 1, 1, 0, 1];
const result2 = maxConsecutiveOnes(nums2);
console.log("Output:", result2);

// Time Complexity = O(n)
// Space Complexity = O(1)
