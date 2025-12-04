function findElementIndex(numberArray, targetNumber) {
  for (let index = 0; index < numberArray.length; index++) {
    if (numberArray[index] === targetNumber) {
      return index;
    }
  }
  console.log(`Element ${targetNumber} not found in array`);
  return -1;
}

console.log('=== Array Search Function ===');
const numbersArray = [2, 5, 8, 18, 34];
const foundIndex = findElementIndex(numbersArray, 8);
console.log(`Search result: Element 8 found at index ${foundIndex}`);

const notFoundResult = findElementIndex(numbersArray, 22);

console.log();

// ---------------------------------------------------------

function countNegativeNumbers(inputArray) {
  let negativeCount = 0;
  for (let arrayIndex = 0; arrayIndex < inputArray.length; arrayIndex++) {
    if (inputArray[arrayIndex] < 0) {
      negativeCount++;
    }
  }
  return negativeCount;
}

console.log('=== Negative Number Counter ===');
const mixedNumbersArray = [2, -9, 17, 0, 1, -10, -4, 8];
const negativeNumberCount = countNegativeNumbers(mixedNumbersArray);
console.log(`Array: [${mixedNumbersArray.join(', ')}]`);
console.log(`Total negative numbers found: ${negativeNumberCount}`);

console.log();

// ---------------------------------------------------------

function findMinMaxValues(dataArray) {
  let maximumValue = -Infinity; // Alternative solution: let maximumValue = dataArray[0]
  let minimumValue = Infinity;
  for (let elementIndex = 0; elementIndex < dataArray.length; elementIndex++) {
    if (dataArray[elementIndex] > maximumValue) {
      maximumValue = dataArray[elementIndex];
    }
    if (dataArray[elementIndex] < minimumValue) {
      minimumValue = dataArray[elementIndex];
    }
  }
  return { maximum: maximumValue, minimum: minimumValue };
}

console.log('=== Min/Max Value Finder ===');
const testNumbersArray = [21, -19, 98, 0, 1, -10, -4, 8];
const minMaxResult = findMinMaxValues(testNumbersArray);
console.log(`Array: [${testNumbersArray.join(', ')}]`);
console.log(`Largest number in the array: ${minMaxResult.maximum}`);
console.log(`Smallest number in the array: ${minMaxResult.minimum}`);
