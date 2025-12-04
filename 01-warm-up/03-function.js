function displayWelcomeMessage() {
  console.log('Hello World!');
}

console.log('=== Function without parameters ===');
displayWelcomeMessage();

// ------------------------------------

function greetUser(userName) {
  console.log('Namaste', userName);
}

console.log('\n=== Function with single parameter ===');
greetUser('Batman');
greetUser('Superman');

// ------------------------------------

function calculateSum(firstValue, secondValue) {
  return firstValue + secondValue;
}

console.log('\n=== Function with return value ===');
const totalSum = calculateSum(6, 2); // Arguments: 6, 2
console.log('Sum of 6 and 2 is:', totalSum);

// ------------------------------------

function calculateSquare(number) {
  return number * number;
}

console.log('\n=== Mathematical function example ===');
const squareResult = calculateSquare(4);
console.log('Square of 4 is:', squareResult);
