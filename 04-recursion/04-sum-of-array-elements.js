function sumArray(n) {
  if (n === 0) return arr[0];

  return arr[n] + sumArray(n - 1);
}

const arr = [5, 3, 2, 0, 1];
console.log(`Sum of numbers in [${arr}]: ${sumArray(arr.length - 1)}`);

// Time Complexity = O(n) One recursive call per element
// Space Complexity = O(n) Due to call stack
