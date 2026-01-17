# Recursion

A function that calls itself to solve smaller versions of the same problem.

## Two Parts of Recursion

1. **Base Case** - Stop condition (when to stop calling itself)
2. **Recursive Case** - Part where the function calls itself

## Call Stack

Every function call in recursion is stored in the call stack. Each recursive call adds a new frame to the stack until the base case is reached, then frames are popped off as functions return.

## Stack Overflow (Infinite Recursion)

If the recursion is too deep or has no base condition, the call stack keeps growing until memory is exhausted, causing a **stack overflow error**.

```js
// Without base case - causes stack overflow!
function badRecursion(n) {
  console.log(n);
  badRecursion(n + 1); // Never stops!
}
```

## Real Life Examples

### 1. Queue of People

Imagine asking "Who is the last person in the queue?"

```
You → Person1 → Person2 → Person3 → "I'm last!"
                                        ↓
You ← Person1 ← Person2 ← Person3 ← "Person3 is last"
```

Each person asks the next one (recursive call), until someone says "I'm last!" (base case).

---

### 2. Comment Threads

```
Comment: "Great video!"
  └── Reply: "Thanks!"
        └── Reply: "You're welcome!"
              └── Reply: "😊"
```

Each reply can have its own replies - a recursive structure!

---

### 3. Organisational Hierarchies

```
          CEO
         /   \
      CTO     CFO
     /   \      \
  Dev1  Dev2   Accountant
```

To count all employees, you recursively count employees under each manager.

---

## Call Stack Visualization

```
printNTo1(3)
┌─────────────────┐
│ printNTo1(3)    │  ← prints 3, calls printNTo1(2)
│ ┌─────────────┐ │
│ │ printNTo1(2)│ │  ← prints 2, calls printNTo1(1)
│ │ ┌─────────┐ │ │
│ │ │printNTo1│ │ │  ← prints 1, calls printNTo1(0)
│ │ │   (1)   │ │ │
│ │ │ ┌─────┐ │ │ │
│ │ │ │ (0) │ │ │ │  ← BASE CASE! Returns, stack unwinds
│ │ │ └─────┘ │ │ │
│ │ └─────────┘ │ │
│ └─────────────┘ │
└─────────────────┘
```

## When to Use Recursion

1. Problem can be broken into sub-problems
2. Trees & Graphs traversal
3. Backtracking, Dynamic Programming (DP), Divide & Conquer

## Common Mistakes

1. **Missing Base Case** - Stack Overflow
2. **Not simplifying the input** - Never reaches base case
3. **Too deep recursion** - Large inputs exceed stack limit
4. **Keeping in mind the Time Complexity** - Recursive solutions can be slow (e.g., naive Fibonacci is O(2^n))

## 

> _"To understand recursion, you must first understand recursion."_ 🔁
