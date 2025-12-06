/**
 * Exponential Time - O(2ⁿ)
 *
 * Each function call branches into two more calls.
 * Creates a binary tree of calls, doubling with each level.
 *
 * Time Complexity: O(2ⁿ) - Exponential time
 * Space Complexity: O(n) - Call stack depth
 *
 * Common use cases: Naive recursive Fibonacci, subset generation
 *
 * Warning: Very slow for large inputs!
 * n = 10  → 1,024 operations
 * n = 20  → 1,048,576 operations
 * n = 30  → 1,073,741,824 operations
 */

let operations = 0;

function fibonacci(n) {
  operations++;
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage
const n = 10;
const result = fibonacci(n);

console.log(`Fibonacci(${n}) = ${result}`);
console.log(`Total operations: ${operations}`);
console.log(`Approximate 2^n: ${2 ** n}`);
