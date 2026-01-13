const singleNumber = (nums) => {
  // Bitwise XOR
  // a (xor) a = 0
  // a (xor) 0 = a
  // a (xor) b (xor) b (xor) a (xor) c = c

  // Whenever you hear about duplicate and you've to cancel or eliminate them use XOR

  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }

  return xor;
};

const nums = [2, 2, 1];
const result = singleNumber(nums);
console.log("Output:", result);

const nums2 = [4, 1, 2, 1, 2];
const result2 = singleNumber(nums2);
console.log("Output:", result2);

const nums3 = [1];
const result3 = singleNumber(nums3);
console.log("Output:", result3);

// Time Complexity = O(n)
// Space Complexity = O(1)
