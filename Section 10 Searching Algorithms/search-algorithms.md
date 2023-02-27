## Linear Search

Linear search is a very simple search algorithm. In this type of search, a sequential search is made over all items one by one. Every item is checked and if a match is found then that particular item is returned, otherwise the search continues till the end of the data collection.

- indexOf
- includes
- find
- findIndex

- best: O(1)
- average: O(n)
- worst: O(n)

## Binary Search

- Search algorithm that finds the position of a target value within a SORTED ARRAY.
- rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time.

- Binary search compares the target value to the middle element of the array.

  - If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.

- Divide and conquer

- best: O(1)
- average: O(log n)
- worst: O(log n)

= PSEUDOCODE

- This function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer:
  - Create a pointer in the middle
  - If you find the value you want, return the index
  - If the middle value is too small, move the left pointer up
  - If the middle value is too large, move the right pointer down
- If you never find the value, return -1

## Naive String Search

- Suppose you want to count the number of times a smaller string appears in a longer string.
