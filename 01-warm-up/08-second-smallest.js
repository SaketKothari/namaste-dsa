function secondSmallest(arr) {
  let smallestValue = Infinity;
  let secondSmallestValue = Infinity;

  if (arr.length < 2) {
    console.log('Array should have at least 2 elements');
    return null;
  }

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < smallestValue) {
      secondSmallestValue = smallestValue;
      smallestValue = arr[index];
    } else if (
      arr[index] < secondSmallestValue &&
      arr[index] !== smallestValue
    ) {
      secondSmallestValue = arr[index];
    }
  }
  return secondSmallestValue;
}

const arr = [1, 5, 10, 4, 7];
console.log(`Array: [${arr.join(', ')}]`);
const secondSmallestResult = secondSmallest(arr);
console.log(`Second smallest number is: ${secondSmallestResult}`);
