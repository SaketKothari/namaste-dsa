/**
 * Linear Search
 *
 * Searches through each element one by one until the target is found.
 * Works on both sorted and unsorted arrays.
 *
 * Time Complexity: O(n) - In worst case, we check every element
 * Space Complexity: O(1) - No extra space used
 */

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Example usage
const numbers = [2, 5, 8, 18, 34];
console.log('Array:', numbers);

// Case 1: Element exists
const index1 = linearSearch(numbers, 8);
console.log(
  'Searching for 8:',
  index1 !== -1 ? `Found at index ${index1}` : 'Not found'
);

// Case 2: Element doesn't exist
const index2 = linearSearch(numbers, 22);
console.log(
  'Searching for 22:',
  index2 !== -1 ? `Found at index ${index2}` : 'Not found'
);
