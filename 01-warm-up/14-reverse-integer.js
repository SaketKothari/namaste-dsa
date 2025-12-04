function reverseInteger(inputNumber) {
  let originalNumber = inputNumber;

  inputNumber = Math.abs(inputNumber);
  let reversedNumber = 0;
  while (inputNumber > 0) {
    let lastDigit = inputNumber % 10;
    reversedNumber = 10 * reversedNumber + lastDigit;
    inputNumber = Math.floor(inputNumber / 10);
  }

  let integerLimit = Math.pow(2, 31);
  // Alternative: let integerLimit = 2**31
  if (reversedNumber < -integerLimit || reversedNumber > integerLimit) return 0;

  return originalNumber < 0 ? -reversedNumber : reversedNumber;
}

console.log('=== Reverse Integer ===');

const positiveNumber = 123;
const reversedPositive = reverseInteger(positiveNumber);
console.log(`Original: ${positiveNumber}, Reversed: ${reversedPositive}`);

const negativeNumber = -235;
const reversedNegative = reverseInteger(negativeNumber);
console.log(`Original: ${negativeNumber}, Reversed: ${reversedNegative}`);
