function factorial(n) {
  if (n === 1) return 1;

  return n * factorial(n - 1);
}

const n = 5;
const result = factorial(n);
console.log(result);

// Time Complexity = O(n)
// Space Complexity = O(n)
