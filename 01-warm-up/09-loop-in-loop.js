console.log('=== Basic 3x3 Nested Loop ===');
for (let outerIndex = 0; outerIndex < 3; outerIndex++) {
  for (let innerIndex = 0; innerIndex < 3; innerIndex++) {
    console.log(`Row ${outerIndex}, Column ${innerIndex}: Hello World`);
  }
  console.log();
}

console.log();

// ---------------------------------------------------------

console.log('=== Triangle Pattern (j < i) ===');
for (let rowNumber = 0; rowNumber < 3; rowNumber++) {
  for (let columnNumber = 0; columnNumber < rowNumber; columnNumber++) {
    console.log(`Row ${rowNumber}, Column ${columnNumber}`);
  }
  console.log();
}

console.log();

// ---------------------------------------------------------

console.log('=== Right Triangle Pattern (j <= i) ===');
for (let triangleRow = 0; triangleRow < 3; triangleRow++) {
  for (
    let triangleColumn = 0;
    triangleColumn <= triangleRow;
    triangleColumn++
  ) {
    console.log(`Row ${triangleRow}, Column ${triangleColumn}`);
  }
  console.log();
}

console.log();

// ---------------------------------------------------------

console.log('=== Countdown Inner Loop (f from e down to 1) ===');
for (let startValue = 0; startValue < 5; startValue++) {
  for (let countdownValue = startValue; countdownValue > 0; countdownValue--) {
    console.log(`Start: ${startValue}, Countdown: ${countdownValue}`);
  }
  console.log();
}

console.log();

// ---------------------------------------------------------

console.log('=== Countdown Inner Loop (h from g down to 0) ===');
for (let baseNumber = 0; baseNumber < 5; baseNumber++) {
  for (
    let decrementNumber = baseNumber;
    decrementNumber >= 0;
    decrementNumber--
  ) {
    console.log(`Base: ${baseNumber}, Decrement: ${decrementNumber}`);
  }
  console.log();
}

console.log();

// ---------------------------------------------------------

console.log('=== Reverse Triangle Pattern (k decreasing) ===');
for (let reverseRow = 5; reverseRow > 0; reverseRow--) {
  for (let reverseColumn = 0; reverseColumn < reverseRow; reverseColumn++) {
    console.log(`Row Size: ${reverseRow}, Column: ${reverseColumn}`);
  }
  console.log();
}
