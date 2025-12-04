function calculateArraySum(numbersArray) {
  let totalSum = 0;
  for (let index = 0; index < numbersArray.length; index++) {
    totalSum = totalSum + numbersArray[index];
  }
  return totalSum;
}

console.log('=== Sum of All Array Elements ===');
const inputArray = [1, 2, 3, -3];
const sumResult = calculateArraySum(inputArray);
console.log(`Array: [${inputArray.join(', ')}]`);
console.log(`Sum of all elements: ${sumResult}`);
