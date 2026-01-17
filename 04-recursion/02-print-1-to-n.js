let n = 10;

function printOneToN(x) {
  if (x > n) {
    return;
  }

  console.log(x);
  x = x + 1;
  printOneToN(x);
}

printOneToN(1);

// Time Complexity = O(n)
// Space Complexity = O(n)
