function isPalindromeNumber(inputNumber) {
  if (inputNumber < 0) {
    return false;
  }
  let reversedNumber = 0;
  let originalNumber = inputNumber;

  while (inputNumber > 0) {
    let lastDigit = inputNumber % 10;
    reversedNumber = 10 * reversedNumber + lastDigit;
    inputNumber = Math.floor(inputNumber / 10);
  }

  // Simplified: return reversedNumber === originalNumber
  if (reversedNumber === originalNumber) {
    return true;
  } else {
    return false;
  }
}

console.log('=== Palindrome Number Checker ===');
const testNumber = 1221;
const isPalindrome = isPalindromeNumber(testNumber);
console.log(`Number: ${testNumber}`);
console.log(`Is palindrome: ${isPalindrome}`);
