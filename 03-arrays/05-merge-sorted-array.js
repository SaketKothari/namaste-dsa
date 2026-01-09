const mergeSortedArray = (nums1, m, nums2, n) => {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  return nums1;
};

// Test case
const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
const m = 3;
const n = 3;

console.log("=".repeat(50));
console.log("MERGE SORTED ARRAYS - In-Place Algorithm");
console.log("=".repeat(50) + "\n");

const result = mergeSortedArray(nums1, m, nums2, n);
console.log(result);

// Time Complexity:  O(m + n) - Single pass through both arrays
// Space Complexity: O(1) - In-place modification, constant space
