/**
 * Nested Loop - O(n²)
 *
 * When one loop runs inside another, each running n times,
 * the total operations become n × n = n²
 *
 * Time Complexity: O(n²) - Quadratic time
 * Space Complexity: O(1) - No extra space used
 *
 * Common use cases: Bubble Sort, Selection Sort, comparing all pairs
 */

const n = 5;
let operations = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    operations++;
  }
}

console.log(`Input size (n): ${n}`);
console.log(`Total operations: ${operations}`);
console.log(`Expected (n²): ${n * n}`);
