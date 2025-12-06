/**
 * Constant Time - O(1)
 *
 * The operation takes the same time regardless of input size.
 * Array access by index is always one operation.
 *
 * Time Complexity: O(1) - Constant time
 * Space Complexity: O(1) - No extra space
 *
 * Common use cases: Array access, hash table lookup, push/pop
 */

const arr = [10, 23, 98, 92, 34, 45, 55];

// All these operations are O(1)
const firstElement = arr[0]; // Access first element
const fifthElement = arr[5]; // Access any element by index
const length = arr.length; // Get array length

console.log('Array:', arr);
console.log(`First element (arr[0]): ${firstElement}`);
console.log(`Fifth element (arr[5]): ${fifthElement}`);
console.log(`Array length: ${length}`);
console.log('\nAll operations above are O(1) - constant time!');
