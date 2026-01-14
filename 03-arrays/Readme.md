# Notes

### Integer Array

- Can contain both positive and negative numbers
- Example: `[-5, -2, 0, 3, 7]`

### Sorting Orders

| Order               | Condition            | Duplicates     | Example              |
| ------------------- | -------------------- | -------------- | -------------------- |
| Strictly Increasing | `arr[i+1] > arr[i]`  | ❌ Not allowed | `[1, 2, 4, 8, 12]`   |
| Strictly Decreasing | `arr[i+1] < arr[i]`  | ❌ Not allowed | `[12, 9, 5, 3, 1]`   |
| Non-Decreasing      | `arr[i+1] >= arr[i]` | ✅ Allowed     | `[1, 2, 3, 3, 4, 5]` |
| Non-Increasing      | `arr[i+1] <= arr[i]` | ✅ Allowed     | `[9, 8, 5, 4, 4, 3]` |

### In-Place Operations

Modifying the existing array without creating a new one. This optimizes space complexity to O(1).

##

### LeetCode Problems & Solutions

| #   | Problem                                                                                                   | Code                                                |
| --- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| 1   | [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | [View Code](./01-remove-duplicates.js)              |
| 2   | [Remove Element](https://leetcode.com/problems/remove-element/)                                           | [View Code](./02-remove-element.js)                 |
| 3   | [Reverse String](https://leetcode.com/problems/reverse-string/)                                           | [View Code](./03-reverse-string.js)                 |
| 4   | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)         | [View Code](./04-best-time-to-buy-&-sell-stocks.js) |
| 5   | [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)                                   | [View Code](./05-merge-sorted-array.js)             |
| 6   | [Move Zeroes](https://leetcode.com/problems/move-zeroes/)                                                 | [View Code](./06-move-zeroes.js)                    |
| 7   | [Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/)                               | [View Code](./07-max-consecutive-ones.js)           |
| 8   | [Missing Number](https://leetcode.com/problems/missing-number/)                                           | [View Code](./08-missing-number.js)                 |
| 9   | [Single Number](https://leetcode.com/problems/single-number/)                                             | [View Code](./09-single-number.js)                  |
