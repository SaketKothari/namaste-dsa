function sumOddElements(arr, n) {
  const isOdd = arr[n] % 2 !== 0;

  if (n === 0) {
    return isOdd ? arr[0] : 0;
  }

  return (isOdd ? arr[n] : 0) + sumOddElements(arr, n - 1);
}

const arr = [5, 3, 2, 0, 1];
console.log(
  `Sum of odd numbers in [${arr}]: ${sumOddElements(arr, arr.length - 1)}`,
);

const arr2 = [2];
console.log(
  `Sum of odd numbers in [${arr2}]: ${sumOddElements(arr2, arr2.length - 1)}`,
);

/*
Time Complexity: O(n)
The function makes exactly n recursive calls (from index n down to 0)
Each call does constant time operations (modulo, comparison, addition)

Space Complexity: O(n)
Due to recursive call stack, there are n stack frames in memory at the deepest point
Each frame stores constant space (the parameters and local variables)
*/
