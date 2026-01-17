function printNToOne(num) {
  // Base case
  if (num === 0) {
    return;
  }

  console.log(num);
  num = num - 1;
  printNToOne(num);
}

let a = 10;
printNToOne(a);

// Time Complexity = O(n) one function call per number from n to 1.
// Space Complexity = O(n) Due to recursive call stack frames.
