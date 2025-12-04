/*
For Loop Structure:
let counter = 0    => Initialization
counter < 10       => Condition
counter++          => Update/Increment
*/

console.log('=== Basic For Loop ===');
for (let counter = 0; counter < 10; counter++) {
  console.log(`Iteration ${counter}: Hello World`);
}
console.log();

// ----------------------------------

console.log('=== Loop with Step Increment ===');
for (let evenNumber = 2; evenNumber < 9; evenNumber = evenNumber + 2) {
  console.log(`Even number: ${evenNumber}`);
}
console.log();

// ----------------------------------

console.log('=== Reverse/Decrementing Loop ===');
for (let countdown = 5; countdown > 0; countdown--) {
  console.log(`${countdown} - Countdown in progress`);
}
console.log();

// ----------------------------------

console.log('=== Loop that never executes ===');
for (let neverRuns = 5; neverRuns < 4; neverRuns++) {
  console.log('This will never print');
}
console.log('Loop condition was false from start, so body never executed');
console.log();

// ----------------------------------

// console.log("=== Infinite Loop (commented out for safety) ===");
// for (let infiniteCounter = 1; infiniteCounter > 0; infiniteCounter++) {
//   console.log("This would run forever");
// }

// ----------------------------------

function displayGreeting() {
  console.log('Namaste!');
}

console.log('=== Function Call Inside Loop ===');
for (let greetingCount = 0; greetingCount < 10; greetingCount++) {
  displayGreeting();
}
console.log();

// ----------------------------------

let numberArray = [6, 2, 0, 8, 5, 3];

let arrayLength = numberArray.length;
console.log('Array length:', arrayLength);
console.log('Array contents:', numberArray);

console.log();
console.log('=== Printing all array elements using loop ===');
for (let arrayIndex = 0; arrayIndex < numberArray.length; arrayIndex++) {
  console.log(`Index ${arrayIndex}: ${numberArray[arrayIndex]}`);
}
console.log();

// -----------------------------------------------

console.log('=== Filtering odd numbers from array ===');
for (let index = 0; index < numberArray.length; index++) {
  if (numberArray[index] % 2 === 1) {
    console.log(`Odd number found: ${numberArray[index]}`);
  }
}
console.log();

// -----------------------------------------------

console.log('=== While Loop Example ===');
let whileCounter = 0;

while (whileCounter < 5) {
  console.log(`While loop iteration ${whileCounter}: Hello`);
  whileCounter++;
}
