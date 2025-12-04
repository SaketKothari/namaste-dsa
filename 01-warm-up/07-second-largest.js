function findSecondLargestNumber(inputArray) {
  let largestValue = -Infinity;
  let secondLargestValue = -Infinity;

  if (inputArray.length < 2) {
    console.log('Array should have at least 2 elements');
    return null;
  }

  for (let index = 0; index < inputArray.length; index++) {
    if (inputArray[index] > largestValue) {
      secondLargestValue = largestValue;
      largestValue = inputArray[index];
    } else if (
      inputArray[index] > secondLargestValue &&
      inputArray[index] !== largestValue
    ) {
      secondLargestValue = inputArray[index];
    }
  }
  return secondLargestValue;
}

console.log('=== Second Largest Number Finder ===');
const numbersArray = [10, 20, 8, 7, 9, 3, 5, 20, -2, -5];
console.log(`Array: [${numbersArray.join(', ')}]`);
const secondLargestResult = findSecondLargestNumber(numbersArray);
console.log(`Second largest number is: ${secondLargestResult}`);

/*
Corner Cases to Consider:
- What if array is empty?
- What if array has negative numbers?
- What if array has duplicates?
- What if all elements are the same?
*/
