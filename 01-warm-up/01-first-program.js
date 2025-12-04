console.log('Hello World!');
console.log('This is my first JavaScript program.');
console.log();

// ---------------------------------------------------------

console.log('Number data type example:', 7);
console.log('Boolean data type example:', true);
console.log('String data type example:', 'JavaScript');
console.log();

// ---------------------------------------------------------

const firstNumber = 10;
const secondNumber = 20;
const sum = firstNumber + secondNumber;
console.log('The sum of firstNumber and secondNumber is:', sum);

const product = firstNumber * secondNumber;
console.log('The product of firstNumber and secondNumber is:', product);

const difference = firstNumber - secondNumber;
console.log('The difference of firstNumber and secondNumber is:', difference);
console.log();

// ---------------------------------------------------------

let playerScore = 30;
playerScore = 40;
console.log('The value of playerScore is now:', playerScore);
console.log();

let firstName = 'Bruce';
let lastName = 'Wayne';
console.log(`Full name is: ${firstName} ${lastName}`);
console.log();

// ---------------------------------------------------------

let age = 8;
// JavaScript automatically converts the number to string during concatenation
console.log('String + Number concatenation:', firstName + age);

let luckyNumber = 3;
// Converting numbers to strings and joining them (String Concatenation)
console.log('Two numbers as strings:', age + ' ' + luckyNumber);
console.log();

// ---------------------------------------------------------

let arr = [2, 6, -3, 'Batman', true, ['Superman', 'Flash']];
console.log('Array example:', arr);
console.log('Fourth element in the array is: ', arr[3]);
console.log('Sum of first element and second element is:', arr[0] + arr[1]);
console.log('Access seventh element (out of array):', arr[6]);
console.log('Access second element of the nested array:', arr[5][1]);
console.log();

// ---------------------------------------------------------

let obj = {
  a: 8,
  firstName: 'Bruce',
  lastName: 'Wayne',
  isHero: true,
  arr: [1, 2, 3, 'Batman'],
};

console.log("Object property 'a':", obj.a);
console.log("Object property 'firstName':", obj.firstName);
console.log("Object property 'isHero':", obj.isHero);
console.log("Object property 'arr':", obj.arr);
console.log(
  'Object property firstName + lastName:',
  obj.firstName + ' ' + obj.lastName
);
