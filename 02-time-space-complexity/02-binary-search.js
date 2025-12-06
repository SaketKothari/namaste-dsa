/**
 * Binary Search
 *
 * Divides the array in half repeatedly until the target is found.
 * Only works on SORTED arrays.
 *
 * Time Complexity: O(log n) - Array is halved each iteration
 * Space Complexity: O(1) - No extra space used
 */

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

// Example usage
const numbers = [1, 20, 33, 45, 55, 78, 100];
console.log('Sorted Array:', numbers);

// Case 1: Element exists
const index1 = binarySearch(numbers, 45);
console.log(
  'Searching for 45:',
  index1 !== -1 ? `Found at index ${index1}` : 'Not found'
);

// Case 2: Element doesn't exist
const index2 = binarySearch(numbers, 99);
console.log(
  'Searching for 99:',
  index2 !== -1 ? `Found at index ${index2}` : 'Not found'
);
