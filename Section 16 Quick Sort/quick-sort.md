## Quick Sort

- Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.
- Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted
  array.
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.

## Pivot Helper

- In order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array
  on either side of a pivot.
- Given an array, this helper function should designate an element as the pivot.
- It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the
  pivot, and all values greater than the pivot are moved to the right of the pivot.
- The order of elements on either side of the pivot doesn't matter!
- The helper should do this in place, that is, it should not create a new array.
- When complete, the helper should return the index of the pivot.

## Pick a pivot

- The runtime of quick sort depends in part on how one selects the pivot.
- Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting.
- For simplicity, we'll always choose the pivot to be the first element.

## Quick Sort Implementation

- Call the pivot helper on the array.
- When the helper returns the updated pivot index, recursively call the pivot helper on the subarray to the left of that
  index, and the subarray to the right of that index.
- Your base case occurs when you consider a subarray with less than 2 elements.

## Big O Notation

- Best case: O(n log n)
- Average case: O(n log n)
- Worst case: O(n^2)
- Space complexity: O(log n)