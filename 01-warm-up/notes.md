## What is programming?

Programming is the process of writing code to solve problems and create solutions.

Good code produces the expected output when executed.

The goal is to write clear, functional code that delivers the desired results.

## Variables

Variables are containers that store data values. They can be declared and assigned values that can change during program execution.

## Data Types

1. **Number** - Represents numeric values (integers and floating-point numbers)

```javascript
let age = 25;
let price = 99.99;
```

2. **String** - Represents text data enclosed in quotes

```javascript
let name = 'John';
let message = 'Hello World';
```

3. **Boolean** - Represents true/false values for logical operations

```javascript
let isActive = true;
let isComplete = false;
```

## Variable Declarations: const vs let

### const

- Creates **immutable** variables that cannot be reassigned after declaration
- Must be initialized with a value at the time of declaration
- Use for values that won't change throughout the program

```javascript
const PI = 3.14159;
const APP_NAME = 'MyApp';
const MAX_USERS = 100;

// This will cause an error:
// PI = 3.14; // TypeError: Assignment to constant variable
```

### let

- Creates **mutable** variables that can be reassigned new values
- Can be declared without initial value
- Use for values that need to change during program execution

```javascript
let score = 0;
let userName;

// Values can be changed:
score = 100;
userName = 'Alice';
score = score + 50; // score is now 150
```

## JavaScript Execution

JavaScript code runs inside JavaScript engines (like V8 in Chrome or Node.js). The engine executes code **sequentially**, processing one statement at a time from top to bottom.

**Key Points:**

- Code execution is **synchronous** by default
- Each line must complete before the next line runs
- Variables must be declared before they can be used
- The engine interprets and executes code in real-time

## How JavaScript Stores Arrays

JavaScript stores arrays as objects with index-value mappings. Array indexing starts from 0.

| Index | Value  | Example     |
| ----- | ------ | ----------- |
| 0     | First  | `fruits[0]` |
| 1     | Second | `fruits[1]` |
| 2     | Third  | `fruits[2]` |

```javascript
let fruits = ['apple', 'banana', 'orange'];
// Index:     0        1         2
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
```

## What is undefined

`undefined` is a primitive data type in JavaScript that represents a variable that has been declared but not assigned a value.

## How Objects are Stored in JavaScript

JavaScript objects are stored as collections of key-value pairs, where each key (property name) is associated with a value.

**Structure:**

- **Key**: Property name (string or symbol)
- **Value**: Any data type (string, number, boolean, array, object, function, etc.)

```javascript
const person = {
  name: 'Batman', // key: "name", value: "Batman"
};

// Accessing values:
console.log(person.name); // "Batman"
```

## What is the main use case of functions

Functions are reusable blocks of code that perform specific tasks. They are fundamental building blocks in programming.

**Main Use Cases:**

1. **Code Reusability** - Write once, use multiple times

```javascript
function calculateArea(length, width) {
  return length * width;
}

let room1Area = calculateArea(10, 15);
let room2Area = calculateArea(8, 12);
```

2. **Code Organization** - Break complex problems into smaller, manageable pieces

```javascript
function validateUser(email, password) {
  // validation logic here
}

function loginUser(userData) {
  // login logic here
}
```

3. **Abstraction** - Hide complex implementation details behind simple function calls

```javascript
function sendEmail(recipient, subject, message) {
  // Complex email sending logic hidden here
}

sendEmail('user@example.com', 'Welcome', 'Hello!');
```

4. **Parameter Handling** - Accept inputs and return processed outputs

```javascript
function greetUser(name, timeOfDay) {
  return `Good ${timeOfDay}, ${name}!`;
}
```

**Benefits:**

- Reduces code duplication
- Easier to debug and maintain
- Makes code more readable and organized
- Enables modular programming
