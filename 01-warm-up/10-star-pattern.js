// 1. Solid Square of Asterisks (Rectangle)
/*
 * * * *
 * * * *
 * * * *
 * * * *
 */
console.log('\n--- Pattern 1: Solid Square ---\n');
const squareSize = 4;

for (let row = 0; row < squareSize; row++) {
  let rowPattern = '';
  for (let col = 0; col < squareSize; col++) {
    rowPattern += '* ';
  }
  console.log(rowPattern);
}
console.log();

// Time Complexity: O(n^2)
// Space Complexity: O(n)(temporary row string)

// ---------------------------------------------------------------------------------------------------

// 2. Right-Angled Triangle of Asterisks (Growing)
/*
 *
 * *
 * * *
 * * * *
 */

console.log('\n--- Pattern 2: Right Triangle ---\n');
const triangleHeight = 6;

for (let row = 0; row < triangleHeight; row++) {
  let rowStars = '';
  for (let starCount = 0; starCount <= row; starCount++) {
    rowStars += '* ';
  }
  console.log(rowStars);
}

console.log();

// Time Complexity: O(n^2) because the total number of stars printed is1+2+3+.......+n = n(n+1)/2.
// Space Complexity: O(n)for the temporary string variable storing each row.

// ---------------------------------------------------------------------------------------------------

// 3. Right-Angled Number Triangle (Ascending Numbers in Row)
/*
1
1 2
1 2 3
1 2 3 4
*/

console.log('\n--- Pattern 3: Ascending Numbers ---\n');
const triangleRows = 5;

for (let row = 0; row < triangleRows; row++) {
  let rowNumbers = '';
  for (let value = 0; value <= row; value++) {
    rowNumbers += value + 1 + ' ';
  }
  console.log(rowNumbers);
}
console.log();

// Time Complexity: O(n^2) Each row can have up to nnumbers.
// Space Complexity: O(n) Temporary string to build each row.

// ---------------------------------------------------------------------------------------------------

// 4. Right-Angled Number Triangle (Row Number Repeated)
/*
1
2 2
3 3 3
4 4 4 4
*/

console.log('\n--- Pattern 4: Row Number Repeated ---\n');
const numberOfRows = 4;

for (let currentRow = 1; currentRow <= numberOfRows; currentRow++) {
  let rowOutput = '';
  for (let repetition = 1; repetition <= currentRow; repetition++) {
    rowOutput += currentRow + ' ';
  }
  console.log(rowOutput);
}
console.log();

// Time Complexity: O(n^2)
// Space Complexity: O(n)for the temporary row string.

// ---------------------------------------------------------------------------------------------------

// 5. Inverted Number Triangle (Descending Rows)
/*
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
*/
console.log('\n--- Pattern 5: Inverted Ascending ---\n');
const initialRowCount = 8;

for (let elementCount = initialRowCount; elementCount >= 1; elementCount--) {
  let rowSequence = '';
  for (let numberValue = 1; numberValue <= elementCount; numberValue++) {
    rowSequence += numberValue + ' ';
  }
  console.log(rowSequence);
}

console.log();

// Time Complexity: O(n^2)
// Space Complexity: O(n)for the temporary row string.

// ---------------------------------------------------------------------------------------------------

// 6. Inverted Right-Angled Triangle of Asterisks (Shrinking)
/*
 * * * * *
 * * * *
 * * *
 * *
 *
 */

console.log('\n--- Pattern 6: Inverted Right Triangle ---\n');
const startingStars = 8;

for (let starsInRow = startingStars; starsInRow >= 1; starsInRow--) {
  let rowStarPattern = '';
  for (let starIndex = 1; starIndex <= starsInRow; starIndex++) {
    rowStarPattern += '* ';
  }
  console.log(rowStarPattern);
}

console.log();

// Time Complexity: O(n^2)
// Space Complexity: O(n)for the temporary row string.

// ---------------------------------------------------------------------------------------------------

// 7. Right-Justified Triangle of Asterisks
/*
_ _ *
_ * *
* * *
*/

console.log('\n--- Pattern 7: Right-Justified Triangle ---\n');
const totalHeight = 4;

for (let rowNumber = 1; rowNumber <= totalHeight; rowNumber++) {
  let rowContent = '';

  // 1. Add leading empty spaces
  for (
    let spaceCount = 1;
    spaceCount <= totalHeight - rowNumber;
    spaceCount++
  ) {
    rowContent += '  ';
  }

  // 2. Add stars
  for (let starCount = 1; starCount <= rowNumber; starCount++) {
    rowContent += '* ';
  }
  console.log(rowContent);
}

console.log();

// Time Complexity: O(n^2)
// Space Complexity: O(n)for the temporary row string.

// ---------------------------------------------------------------------------------------------------

// 8. Right-Justified Number Triangle (Descending Numbers in Row)
/*
      1
    2 1
  3 2 1
4 3 2 1
*/
console.log('\n--- Pattern 8: Right-Justified Descending Numbers ---\n');
const patternSize = 4;

for (let row = 1; row <= patternSize; row++) {
  let rowOutput = '';

  // 1. Add leading empty spaces
  for (
    let spaceCounter = 1;
    spaceCounter <= patternSize - row;
    spaceCounter++
  ) {
    rowOutput += '  ';
  }

  // 2. Add numbers in DESCENDING order (row down to 1)
  for (let numberToPrint = row; numberToPrint >= 1; numberToPrint--) {
    rowOutput += numberToPrint + ' ';
  }
  console.log(rowOutput);
}

console.log();

// Time Complexity: O(n^2)
// Space Complexity: O(n)for the temporary row string.

// ---------------------------------------------------------------------------------------------------

// 9. Binary Toggle Triangle (Starting with 1, Alternating in Row)
/*
1
1 0
1 0 1
1 0 1 0
1 0 1 0 1
*/

console.log('\n--- Pattern 9: Binary Toggle (Row Starts with 1) ---\n');
let rowLimit = 4; // Generates 5 rows

for (let row = 0; row <= rowLimit; row++) {
  let rowString = '';
  let currentValue = 1; // All rows start with 1 in this pattern

  for (let element = 0; element <= row; element++) {
    rowString += currentValue + ' ';
    currentValue = currentValue === 1 ? 0 : 1; // Toggle
  }
  console.log(rowString);
}

console.log();

// Time Complexity: O(n^2)
// Space Complexity: O(n) per row.

// ---------------------------------------------------------------------------------------------------

// 10. Binary Toggle Triangle (Alternating Row Starts)
/*
1
0 1
0 1 0
1 0 1 0
1 0 1 0 1
*/

console.log('\n--- Pattern 10: Binary Toggle (Alternating Row Starts) ---\n');
const totalRows = 5;

for (let currentRow = 1; currentRow <= totalRows; currentRow++) {
  let rowPattern = '';
  // Determine starting value (1 for odd rows, 0 for even rows)
  let toggleValue = currentRow % 2 === 1 ? 1 : 0;

  for (let elementCount = 1; elementCount <= currentRow; elementCount++) {
    rowPattern += toggleValue + ' ';
    toggleValue = toggleValue === 1 ? 0 : 1; // Toggle
  }
  console.log(rowPattern);
}

// Time Complexity: O(n^2)
// Space Complexity: O(n)for the temporary row string.
