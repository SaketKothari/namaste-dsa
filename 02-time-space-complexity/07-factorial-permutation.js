/**
 * Factorial Time - O(n!)
 *
 * Generates all possible arrangements (permutations) of elements.
 * For n elements: n × (n-1) × (n-2) × ... × 1 = n! permutations
 *
 * Time Complexity: O(n!) - Factorial time
 * Space Complexity: O(n) - Recursion depth + array storage
 *
 * Common use cases: Permutations, Traveling Salesman (brute force)
 *
 * Warning: Extremely slow! Grows faster than exponential!
 * n = 5  → 120 permutations
 * n = 10 → 3,628,800 permutations
 * n = 15 → 1,307,674,368,000 permutations
 */

function permute(arr, start = 0, result = []) {
  if (start === arr.length) {
    result.push([...arr]);
    return result;
  }

  for (let i = start; i < arr.length; i++) {
    // Swap
    [arr[start], arr[i]] = [arr[i], arr[start]];
    permute(arr, start + 1, result);
    // Backtrack
    [arr[start], arr[i]] = [arr[i], arr[start]];
  }
  return result;
}

// Example usage
const input = [1, 2, 3];
const permutations = permute([...input]);

console.log(`Input: [${input}]`);
console.log(`Total permutations: ${permutations.length}`);
console.log(
  `Expected (${input.length}!): ${[1, 2, 3, 4, 5, 6]
    .slice(0, input.length)
    .reduce((a, b) => a * b, 1)}`
);
console.log('Permutations:', permutations);
