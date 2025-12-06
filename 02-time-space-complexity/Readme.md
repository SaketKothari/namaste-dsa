# Time Complexity

Time complexity measures the **efficiency of an algorithm** in terms of the number of operations it performs as the input size grows.

## Important Distinction

**Time Complexity ≠ Execution Time**

| Time Complexity                     | Execution Time                 |
| ----------------------------------- | ------------------------------ |
| Theoretical measure of operations   | Actual time taken to run       |
| Independent of hardware             | Depends on CPU, RAM, etc.      |
| Remains constant for same algorithm | Varies between machines        |
| Helps compare algorithms            | Helps measure real performance |

## Linear Search

Searches through each element one by one until the target is found.

**Operations vs Input Size:**
| Input Size (n) | Operations (x) |
|----------------|----------------|
| 10 | 10 |
| 100 | 100 |
| 1000 | 1000 |

**Case Analysis:**

- **Best Case:** Element at 1st index → 1 operation
- **Average Case:** Element at middle → n/2 operations
- **Worst Case:** Element not found → n operations

**Time Complexity:** `O(n)`

**Requirement:** Works on both sorted and unsorted arrays

## Binary Search

Divides the array in half repeatedly until the target is found.

**How it works:**

```
n → n/2 → n/4 → n/8 → ... → 1

n / 2^x = 1
n = 2^x
x = log₂(n)
```

**Operations vs Input Size:**
| Input Size (n) | Operations (x) |
|----------------|----------------|
| 10 | 3 |
| 100 | 7 |
| 1000 | 10 |

**Case Analysis:**

- **Best Case:** Middle element matches → 1 operation
- **Average Case:** log₂(n) operations
- **Worst Case:** log₂(n) operations

**Time Complexity:** `O(log n)`

**Requirement:** Only works on **sorted** arrays

## Comparison: Linear vs Binary Search

| Aspect                | Linear Search       | Binary Search     |
| --------------------- | ------------------- | ----------------- |
| Time Complexity       | O(n)                | O(log n)          |
| Array Requirement     | Any array           | Sorted only       |
| Operations for n=100  | 100                 | 7                 |
| Operations for n=1000 | 1000                | 10                |
| Best for              | Small/unsorted data | Large/sorted data |

**Key Insight:** As input size (n) increases, Binary Search becomes significantly more efficient than Linear Search. For an input of 100 elements, Linear Search may need up to 100 operations, while Binary Search needs only 7.

---

## Big O Notation

Big O notation is used to represent time complexity. It measures the **worst-case scenario** of an algorithm.

**Why worst case?** Just like comparing two laptops by their performance under heavy load (not idle), we evaluate algorithms by how they perform when pushed to their limits.

**Efficiency Comparison:**

```
O(log n) < O(n)
Binary Search is more efficient than Linear Search
```

---

## Space Complexity

Space complexity measures **how much extra memory** an algorithm uses relative to input size.

| Operation                   | Space Complexity | Explanation                     |
| --------------------------- | ---------------- | ------------------------------- |
| Access 5th element          | O(1)             | No extra space used             |
| Find max using one variable | O(1)             | Only one variable, constant     |
| Return doubled array        | O(n)             | New array of same size as input |
| Create 2D matrix (n × n)    | O(n²)            | n rows × n columns              |

---

## Simplifying Time Complexity

### Rule 1: Drop Constants

```javascript
// Two separate loops
for (i = 0; i < n; i++) {}
for (j = 0; j < n; j++) {}
```

**Time Complexity = O(n + n) = O(2n) → O(n)**

**Why?** Constants become negligible as n grows large. Whether you do `n` or `2n` operations, both scale linearly.

### Rule 2: Drop Lower-Order Terms

```javascript
// Nested loop + single loop
for (i = 0; i < n; i++) {
  for (j = 0; j < n; j++) {}
}
for (k = 0; k < n; k++) {}
```

**Time Complexity = O(n² + n) → O(n²)**

**Why?** As n grows, n² dominates. For n = 1000:

- n² = 1,000,000
- n = 1,000

The lower-order term becomes insignificant.
