/**
 * Triple Nested Loop - O(n³)
 *
 * Three nested loops, each running n times.
 * Total operations = n × n × n = n³
 *
 * Time Complexity: O(n³) - Cubic time
 * Space Complexity: O(1)
 *
 * Common use cases: Matrix multiplication, 3D array traversal
 */

const n = 5;
let operations = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      operations++;
    }
  }
}

console.log(`Input size (n): ${n}`);
console.log(`Total operations: ${operations}`);
console.log(`Expected (n³): ${n ** 3}`);
