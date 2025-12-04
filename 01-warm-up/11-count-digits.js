function countNumberOfDigits(inputNumber) {
  let digitCount = 0;

  if (inputNumber === 0) {
    return 1;
  }

  inputNumber = Math.abs(inputNumber); // Convert negative to positive number

  while (inputNumber > 0) {
    inputNumber = Math.floor(inputNumber / 10);
    digitCount++;
  }
  return digitCount;
}

console.log('=== Count Digits in a Number ===');

let largeNumber = 259875623;
let digitCountResult = countNumberOfDigits(largeNumber);
console.log(`Number: ${largeNumber}, Digit count: ${digitCountResult}`);

let zeroNumber = 0;
let zeroDigitCount = countNumberOfDigits(zeroNumber);
console.log(`Number: ${zeroNumber}, Digit count: ${zeroDigitCount}`);

let negativeNumber = -298;
let negativeDigitCount = countNumberOfDigits(negativeNumber);
console.log(`Number: ${negativeNumber}, Digit count: ${negativeDigitCount}`);

console.log();

// Math Functions Explanation:

// Math.floor - Rounds DOWN to nearest integer
// console.log(Math.floor(10));        // Output: 10
// console.log(Math.floor(10.84532));  // Output: 10
// console.log(Math.floor(10.4));      // Output: 10

// Math.round - Rounds to NEAREST integer
// console.log(Math.round(10.84532));  // Output: 11
// console.log(Math.round(10.3));      // Output: 10

// Math.ceil - Rounds UP to nearest integer
// console.log(Math.ceil(10.1));       // Output: 11
// console.log(Math.ceil(10.8));       // Output: 11

// Math.abs - Returns absolute value (removes negative sign)
// console.log(Math.abs(20));          // Output: 20
// console.log(Math.abs(-20));         // Output: 20
