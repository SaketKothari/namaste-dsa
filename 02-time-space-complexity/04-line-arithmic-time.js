/**
 * O(n log n) - Linearithmic Time
 *
 * Outer loop runs n times, inner loop runs log n times.
 * Total operations = n × log n
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 *
 * Common use cases: Merge Sort, Quick Sort, Heap Sort
 */

const n = 8;
let operations = 0;

for (let i = 0; i < n; i++) {
  let temp = n;
  while (temp > 1) {
    temp = Math.floor(temp / 2);
    operations++;
  }
}

console.log(`Input size (n): ${n}`);
console.log(`Total operations: ${operations}`);
console.log(
  `Expected (n × log₂n): ${n} × ${Math.log2(n)} = ${n * Math.log2(n)}`
);
