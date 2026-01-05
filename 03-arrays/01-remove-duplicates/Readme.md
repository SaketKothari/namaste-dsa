# Remove Duplicates

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
